export async function onRequestPost(context) {
  const cors = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    const body = await context.request.json();
    const prompt = body.prompt || '';
    const groqKey = (body._apiKey || '').trim();

    if (!prompt) return new Response(JSON.stringify({ error: 'prompt required' }), { status: 400, headers: cors });
    if (!groqKey) return new Response(JSON.stringify({ error: 'API key missing' }), { status: 400, headers: cors });

    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + groqKey,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system',
            content: '당신은 한국 소상공인 홈페이지 콘텐츠 전문 작가입니다. 반드시 JSON 형식으로만 응답하세요. 마크다운 없이 순수 JSON만 반환하세요.'
          },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 4096,
        response_format: { type: 'json_object' },
      }),
    });

    const text = await groqRes.text();

    if (!text || text.trim() === '') {
      return new Response(JSON.stringify({ error: 'Empty response from Groq' }), { status: 502, headers: cors });
    }

    let data;
    try {
      data = JSON.parse(text);
    } catch(e) {
      return new Response(JSON.stringify({ error: 'Invalid JSON from Groq: ' + text.substring(0, 100) }), { status: 502, headers: cors });
    }

    if (!groqRes.ok) {
      return new Response(JSON.stringify({ error: data.error?.message || 'Groq error ' + groqRes.status }), { status: groqRes.status, headers: cors });
    }

    const resultText = data?.choices?.[0]?.message?.content || '';
    return new Response(JSON.stringify({ text: resultText }), { status: 200, headers: cors });

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
