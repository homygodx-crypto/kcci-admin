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
    const workerName = rawName.toLowerCase().replace(/[^a-z0-9-]/g,'-').replace(/-+/g,'-').replace(/^-|-$/g,'');
    const filesBase64 = body.filesBase64;

    if (!workerName) return new Response(JSON.stringify({error:'projectName required'}),{status:400,headers:cors});
    if (!filesBase64) return new Response(JSON.stringify({error:'filesBase64 required'}),{status:400,headers:cors});

    // base64 → UTF-8 문자열 디코딩
    const fileContents = {};
    for (const [filename, b64] of Object.entries(filesBase64)) {
      const bin = atob(b64);
      const bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      fileContents[filename] = new TextDecoder('utf-8').decode(bytes);
    }

    // Worker 스크립트 — 문자열을 직접 Map에 저장
    const entries = Object.entries(fileContents);
    
    // 각 파일을 별도 ES module export로 분리
    const fileModules = entries.map(([f, content]) => {
      const varName = f.replace(/[^a-zA-Z0-9]/g, '_');
      // <script> 태그가 Worker JS 문자열을 깨뜨리지 않도록
      // < 를 \u003c 로 치환 (JSON.stringify 이후 처리)
      const safe = JSON.stringify(content)
        .replace(/</g, '\\u003c')
        .replace(/>/g, '\\u003e');
      return `const _${varName} = ${safe};`;
    }).join('\n');

    const routeLines = entries.map(([f]) => {
      const varName = f.replace(/[^a-zA-Z0-9]/g, '_');
      const path = f === 'index.html' ? '/' : '/' + f;
      const ct = getContentType(f);
      return `  if (p === '${path}' || p === '/${f}') return new Response(_${varName}, {headers: h('${ct}')});`;
    }).join('\n');

    const indexVar = '_' + 'index.html'.replace(/[^a-zA-Z0-9]/g, '_');

    const workerScript = `${fileModules}

const headers = (ct) => ({'Content-Type': ct + '; charset=utf-8', 'Cache-Control': 'public, max-age=3600'});
const h = headers;

export default {
  async fetch(req) {
    const p = new URL(req.url).pathname;
${routeLines}
    return new Response(${indexVar}, {headers: h('text/html')});
  }
};`;

    // Worker 업로드
    const formData = new FormData();
    formData.append('metadata', new Blob([JSON.stringify({
      main_module: 'worker.js',
      compatibility_date: '2024-09-23',
    })], {type: 'application/json'}), 'metadata');
    formData.append('worker.js', new Blob([workerScript], {type: 'application/javascript+module'}), 'worker.js');

    const uploadRes = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT}/workers/scripts/${workerName}`,
      { method: 'PUT', headers: {'Authorization': 'Bearer ' + CF_TOKEN}, body: formData }
    );

    const uploadData = await uploadRes.json().catch(()=>({}));
    if (!uploadRes.ok) {
      return new Response(JSON.stringify({error:'Worker 업로드 실패: '+(uploadData.errors?.[0]?.message||uploadRes.status)}),{status:500,headers:cors});
    }

    // workers.dev 활성화
    await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT}/workers/services/${workerName}/environments/production/subdomain`,
      {
        method: 'POST',
        headers: {'Authorization': 'Bearer ' + CF_TOKEN, 'Content-Type': 'application/json'},
        body: JSON.stringify({enabled: true}),
      }
    );

    return new Response(JSON.stringify({
      success: true,
      url: `https://${workerName}.smallbiz.workers.dev`,
      projectName: workerName,
    }),{status:200,headers:cors});

  } catch(err) {
    return new Response(JSON.stringify({error: err.message||'Server error'}),{status:500,headers:cors});
  }
}

export async function onRequestOptions() {
  return new Response('',{status:200,headers:{'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'POST, OPTIONS','Access-Control-Allow-Headers':'Content-Type'}});
}

function getContentType(f) {
  const ext = (f||'').split('.').pop().toLowerCase();
  return {html:'text/html',css:'text/css',js:'application/javascript',json:'application/json'}[ext]||'text/plain';
}
