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
    if (!filesBase64 || Object.keys(filesBase64).length===0) return new Response(JSON.stringify({error:'filesBase64 required'}),{status:400,headers:cors});

    // 파일 디코딩
    const fileContents = {};
    for (const [filename, b64] of Object.entries(filesBase64)) {
      const binaryStr = atob(b64);
      const bytes = new Uint8Array(binaryStr.length);
      for (let i=0;i<binaryStr.length;i++) bytes[i]=binaryStr.charCodeAt(i);
      fileContents[filename] = new TextDecoder('utf-8').decode(bytes);
    }

    // Worker 스크립트 생성 — 각 파일을 라우팅
    const routes = Object.keys(fileContents).map(f => {
      const path = f === 'index.html' ? '/' : '/' + f;
      const ct = getContentType(f);
      return `  if (url.pathname === '${path}' || url.pathname === '/${f}') {
    return new Response(${JSON.stringify(fileContents[f])}, {
      headers: { 'Content-Type': '${ct}; charset=utf-8', 'Cache-Control': 'public, max-age=3600' }
    });
  }`;
    }).join('\n');

    const workerScript = `export default {
  async fetch(request) {
    const url = new URL(request.url);
${routes}
    // 기본: index.html 반환
    return new Response(${JSON.stringify(fileContents['index.html'] || '<h1>Not Found</h1>')}, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }
};`;

    // Worker 배포
    const formData = new FormData();
    formData.append('metadata', JSON.stringify({
      main_module: 'worker.js',
      compatibility_date: '2024-01-01',
    }));
    formData.append('worker.js', new Blob([workerScript], {type:'application/javascript+module'}), 'worker.js');

    const deployRes = await fetch(
      'https://api.cloudflare.com/client/v4/accounts/'+CF_ACCOUNT+'/workers/scripts/'+workerName,
      {
        method: 'PUT',
        headers: { 'Authorization': 'Bearer '+CF_TOKEN },
        body: formData,
      }
    );

    const deployData = await deployRes.json().catch(()=>({}));
    if (!deployRes.ok) {
      return new Response(JSON.stringify({error:'Worker 배포 실패: '+(deployData.errors?.[0]?.message||deployRes.status)}),{status:500,headers:cors});
    }

    // workers.dev 활성화
    await fetch(
      'https://api.cloudflare.com/client/v4/accounts/'+CF_ACCOUNT+'/workers/scripts/'+workerName+'/subdomain',
      {
        method: 'POST',
        headers: {'Authorization':'Bearer '+CF_TOKEN,'Content-Type':'application/json'},
        body: JSON.stringify({enabled:true}),
      }
    );

    return new Response(JSON.stringify({
      success: true,
      url: 'https://'+workerName+'.smallbiz.workers.dev',
      projectName: workerName,
    }),{status:200,headers:cors});

  } catch(err) {
    return new Response(JSON.stringify({error:err.message||'Server error'}),{status:500,headers:cors});
  }
}

export async function onRequestOptions() {
  return new Response('',{status:200,headers:{'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'POST, OPTIONS','Access-Control-Allow-Headers':'Content-Type'}});
}

function getContentType(f) {
  const ext=(f||'').split('.').pop().toLowerCase();
  return {html:'text/html',css:'text/css',js:'application/javascript',json:'application/json'}[ext]||'text/plain';
}
