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

    if (!projectName) return new Response(JSON.stringify({ error: 'projectName required' }), { status: 400, headers: cors });
    if (!files || Object.keys(files).length === 0) return new Response(JSON.stringify({ error: 'files required' }), { status: 400, headers: cors });

    // 프로젝트 없으면 생성
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
        return new Response(JSON.stringify({ error: 'Project create failed: ' + (e.errors?.[0]?.message || createRes.status) }), { status: 500, headers: cors });
      }
      await new Promise(r => setTimeout(r, 2000));
    }

    // 파일 FormData로 업로드
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

    const deployRes = await fetch(
      'https://api.cloudflare.com/client/v4/accounts/' + CF_ACCOUNT + '/pages/projects/' + projectName + '/deployments',
      {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + CF_TOKEN },
        body: formData,
      }
    );

    const deployText = await deployRes.text();
    let deployData;
    try { deployData = JSON.parse(deployText); } catch(e) { deployData = {}; }

    if (!deployRes.ok) {
      return new Response(
        JSON.stringify({ error: 'Deploy failed: ' + (deployData.errors?.[0]?.message || deployRes.status) }),
        { status: 500, headers: cors }
      );
    }

    return new Response(JSON.stringify({
      success: true,
      url: 'https://' + projectName + '.pages.dev',
      projectName: projectName,
      deploymentId: deployData.result ? deployData.result.id : null,
    }), { status: 200, headers: cors });

  } catch(err) {
    return new Response(JSON.stringify({ error: err.message || 'Server error' }), { status: 500, headers: cors });
  }
}

export async function onRequestOptions() {
  return new Response('', { status: 200, headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' } });
}

function getContentType(f) {
  const ext = (f || '').split('.').pop().toLowerCase();
  return { html: 'text/html', css: 'text/css', js: 'application/javascript', json: 'application/json' }[ext] || 'text/plain';
}

async function sha256hex(buf) {
  const hash = await crypto.subtle.digest('SHA-256', buf);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('').substring(0, 32);
}
