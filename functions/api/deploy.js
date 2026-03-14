export async function onRequestPost(context) {
  const cors = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    const body = await context.request.json();
    const CF_TOKEN = 'yG1ipw4UhwvLRP8tmT_jTdxrJ9O11VVr6ABpf8B9';
    const CF_ACCOUNT = '58cc945a83beb714d97ab66a8bdfac73';

    const rawName = (body.projectName || '').trim();
    const projectName = rawName.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    const files = body.files;

    if (!projectName) {
      return new Response(JSON.stringify({ error: 'projectName required' }), { status: 400, headers: cors });
    }
    if (!files || Object.keys(files).length === 0) {
      return new Response(JSON.stringify({ error: 'files required' }), { status: 400, headers: cors });
    }

    // 1. 프로젝트 없으면 생성
    const checkRes = await fetch(
      'https://api.cloudflare.com/client/v4/accounts/' + CF_ACCOUNT + '/pages/projects/' + projectName,
      { headers: { 'Authorization': 'Bearer ' + CF_TOKEN } }
    );

    if (!checkRes.ok) {
      const createRes = await fetch(
        'https://api.cloudflare.com/client/v4/accounts/' + CF_ACCOUNT + '/pages/projects',
        {
          method: 'POST',
          headers: { 'Authorization': 'Bearer ' + CF_TOKEN, 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: projectName, production_branch: 'main' }),
        }
      );
      if (!createRes.ok) {
        const e = await createRes.json().catch(() => ({}));
        return new Response(
          JSON.stringify({ error: 'Project create failed: ' + (e.errors?.[0]?.message || createRes.status) }),
          { status: 500, headers: cors }
        );
      }
      await new Promise(r => setTimeout(r, 2000));
    }

    // 2. 각 파일 해시 계산
    const encoder = new TextEncoder();
    const fileHashes = {};
    const fileBytes = {};

    for (const [filename, content] of Object.entries(files)) {
      const bytes = encoder.encode(content);
      fileBytes[filename] = bytes;
      const hash = await sha256hex(bytes);
      fileHashes[filename] = hash;
    }

    // 3. 필요한 파일 목록 확인 (어떤 파일을 업로드해야 하는지)
    const manifest = {};
    for (const [filename, hash] of Object.entries(fileHashes)) {
      manifest['/' + filename] = hash;
    }

    const missingRes = await fetch(
      'https://api.cloudflare.com/client/v4/accounts/' + CF_ACCOUNT + '/pages/assets/check-missing',
      {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + CF_TOKEN, 'Content-Type': 'application/json' },
        body: JSON.stringify({ hashes: Object.values(fileHashes) }),
      }
    );

    let missingHashes = Object.values(fileHashes); // 기본: 전부 업로드
    if (missingRes.ok) {
      const missingData = await missingRes.json();
      missingHashes = missingData.result || missingHashes;
    }

    // 4. 누락된 파일 업로드
    if (missingHashes.length > 0) {
      const hashToFile = {};
      for (const [filename, hash] of Object.entries(fileHashes)) {
        hashToFile[hash] = { filename, bytes: fileBytes[filename] };
      }

      const formData = new FormData();
      for (const hash of missingHashes) {
        const fileInfo = hashToFile[hash];
        if (!fileInfo) continue;
        formData.append(hash, new Blob([fileInfo.bytes], { type: getContentType(fileInfo.filename) }), fileInfo.filename);
      }

      const uploadRes = await fetch(
        'https://api.cloudflare.com/client/v4/accounts/' + CF_ACCOUNT + '/pages/assets/upload',
        {
          method: 'POST',
          headers: { 'Authorization': 'Bearer ' + CF_TOKEN },
          body: formData,
        }
      );

      if (!uploadRes.ok) {
        const e = await uploadRes.json().catch(() => ({}));
        return new Response(
          JSON.stringify({ error: 'File upload failed: ' + (e.errors?.[0]?.message || uploadRes.status) }),
          { status: 500, headers: cors }
        );
      }
    }

    // 5. 배포 생성
    const deployRes = await fetch(
      'https://api.cloudflare.com/client/v4/accounts/' + CF_ACCOUNT + '/pages/projects/' + projectName + '/deployments',
      {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + CF_TOKEN, 'Content-Type': 'application/json' },
        body: JSON.stringify({ manifest }),
      }
    );

    const deployText = await deployRes.text();
    let deployData;
    try { deployData = JSON.parse(deployText); } catch(e) { deployData = {}; }

    if (!deployRes.ok) {
      // V2 API 실패시 V1 FormData 방식으로 폴백
      return await deployV1(CF_TOKEN, CF_ACCOUNT, projectName, files, cors);
    }

    return new Response(JSON.stringify({
      success: true,
      url: 'https://' + projectName + '.pages.dev',
      projectName: projectName,
    }), { status: 200, headers: cors });

  } catch(err) {
    return new Response(
      JSON.stringify({ error: err.message || 'Server error' }),
      { status: 500, headers: cors }
    );
  }
}

// V1 폴백 — FormData 방식
async function deployV1(CF_TOKEN, CF_ACCOUNT, projectName, files, cors) {
  const encoder = new TextEncoder();
  const formData = new FormData();
  const manifest = {};

  for (const [filename, content] of Object.entries(files)) {
    const bytes = encoder.encode(content);
    const hash = await sha256hex(bytes);
    manifest['/' + filename] = hash;
    formData.append('files', new Blob([bytes], { type: getContentType(filename) }), filename);
  }
  formData.append('manifest', JSON.stringify(manifest));

  const res = await fetch(
    'https://api.cloudflare.com/client/v4/accounts/' + CF_ACCOUNT + '/pages/projects/' + projectName + '/deployments',
    {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + CF_TOKEN },
      body: formData,
    }
  );

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    return new Response(
      JSON.stringify({ error: 'Deploy failed: ' + (data.errors?.[0]?.message || res.status) }),
      { status: 500, headers: cors }
    );
  }

  return new Response(JSON.stringify({
    success: true,
    url: 'https://' + projectName + '.pages.dev',
    projectName: projectName,
  }), { status: 200, headers: cors });
}

export async function onRequestOptions() {
  return new Response('', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}

function getContentType(f) {
  const ext = (f || '').split('.').pop().toLowerCase();
  const map = { html: 'text/html', css: 'text/css', js: 'application/javascript', json: 'application/json' };
  return map[ext] || 'text/plain';
}

async function sha256hex(buf) {
  const hash = await crypto.subtle.digest('SHA-256', buf);
  return Array.from(new Uint8Array(hash)).map(function(b) {
    return b.toString(16).padStart(2, '0');
  }).join('');
}
