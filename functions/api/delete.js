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
    if (!projectName) {
      return new Response(JSON.stringify({ error: 'projectName required' }), { status: 400, headers: cors });
    }

    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT}/pages/projects/${projectName}`,
      {
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer ' + CF_TOKEN },
      }
    );

    if (res.status === 404) {
      return new Response(JSON.stringify({ success: true, alreadyGone: true }), { status: 200, headers: cors });
    }

    if (!res.ok) {
      const data = await res.json();
      return new Response(
        JSON.stringify({ error: data.errors?.[0]?.message || 'Delete failed: ' + res.status }),
        { status: res.status, headers: cors }
      );
    }

    return new Response(JSON.stringify({ success: true, projectName }), { status: 200, headers: cors });

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
