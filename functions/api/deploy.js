export async function onRequestPost(context) {
  const cors = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    const text = await context.request.text();
    if (!text) {
      return new Response(JSON.stringify({ error: 'Empty body' }), { status: 400, headers: cors });
    }

    let body;
    try {
      body = JSON.parse(text);
    } catch(e) {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: cors });
    }

    const CF_TOKEN = 'yG1ipw4UhwvLRP8tmT_jTdxrJ9O11VVr6ABpf8B9';
    const CF_ACCOUNT = '58cc945a83beb714d97ab66a8bdfac73';
    const rawName = body.projectName || '';
    const projectName = rawName.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    const files = body.files;

    if (!projectName) {
      return new Response(JSON.stringify({ error: 'projectName required' }), { status: 400, headers: cors });
    }
    if (!files || Object.keys(files).length === 0) {
      return new Response(JSON.stringify({ error: 'files required' }), { status: 400, headers: cors });
    }

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
        return new Response(
          JSON.stringify({ error: 'Project create failed: ' + (e.errors?.[0]?.message || createRes.status) }),
          { status: 500, headers: cors }
        );
      }
    }

    const formData = new FormData();
    const manifest = {};

    for (const [filename, content] of Object.entries(files)) {
      const encoded = new TextEncoder().encode(content);
      const blob = new Blob([encoded], { type: getContentType(filename) });
      formData.append('files', blob, filename);
      manifest['/' + filename] = await hashBuffer(encoded);
    }
    formData.append('manifest', JSON.stringify(manifest));

    const deployRes = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT}/pages/projects/${projectName}/deployments`,
      { method: 'POST', headers: { 'Authorization': 'Bearer ' + CF_TOKEN }, body: formData }
    );

    const deployData = await deployRes.json();

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
    return new Response(
      JSON.stringify({ error: err.message || 'Server error' }),
      { status: 500, headers: cors }
    );
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
  const map = { html: 'text/html', css: 'text/css', js: 'application/javascript', json: 'application/json' };
  return map[e] || 'text/plain';
}

async function hashBuffer(buf) {
  const b = await crypto.subtle.digest('SHA-256', buf);
  return Array.from(new Uint8Array(b)).map(function(x) {
    return x.toString(16).padStart(2, '0');
  }).join('').substring(0, 32);
}
