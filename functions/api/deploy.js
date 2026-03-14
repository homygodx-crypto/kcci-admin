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

    const projectName = (body.projectName || '').trim().toLowerCase().replace(/[^a-z0-9-]/g, '-');
    const files = body.files;

    if (!projectName) return new Response(JSON.stringify({ error: 'projectName required' }), { status: 400, headers: cors });
    if (!files || Object.keys(files).length === 0) return new Response(JSON.stringify({ error: 'files required' }), { status: 400, headers: cors });

    // 프로젝트 없으면 생성
    const checkRes = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT}/pages/projects/${projectName}`,
      { headers: { 'Authorization': 'Bearer ' + CF_TOKEN } }
    );

    if (!checkRes.ok) {
      const createRes = await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT}/pages/projects`,
        {
          method: 'POST',
          headers: { 'Authorization': 'Bearer ' + CF_TOKEN, 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: projectName, production_branch: 'main' }),
        }
      );
      if (!createRes.ok) {
        const e = await createRes.json();
        return new Response(JSON.stringify({ error: '프로젝트 생성 실패: ' + (e.errors?.[0]?.message || createRes.status) }), { status: 500, headers: cors });
      }
    }

    // 파일 업로드
    const formData = new FormData();
    const manifest = {};
    for (const [filename, content] of Object.entries(files)) {
      formData.append('files', new Blob([content], { type: getContentType(filename) }), filename);
      manifest['/' + filename] = await hashStr(content);
    }
    formData.append('manifest', JSON.stringify(manifest));

    const deployRes = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT}/pages/projects/${projectName}/deployments`,
      { method: 'POST', headers: { 'Authorization': 'Bearer ' + CF_TOKEN }, body: formData }
    );

    const deployData = await deployRes.json();
    if (!deployRes.ok) {
      return new Response(JSON.stringify({ error: '배포 실패: ' + (deployData.errors?.[0]?.message || deployRes.status) }), { status: 500, headers: cors });
    }

    return new Response(JSON.stringify({
      success: true,
      url: `https://${projectName}.pages.dev`,
      projectName,
      deploymentId: deployData.result?.id,
    }), { status: 200, headers: cors });

  } catch(err) {
    return new Response(JSON.stringify({ error: err.message || 'Server error' }), { status: 500, headers: cors });
  }
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
  const e = f.split('.').pop().toLowerCase();
  return { html:'text/html', css:'text/css', js:'application/javascript', json:'application/json', png:'image/png', jpg:'image/jpeg' }[e] || 'text/plain';
}

async function hashStr(s) {
  const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return Array.from(new Uint8Array(b)).map(x => x.toString(16).padStart(2,'0')).join('').substring(0, 32);
}
