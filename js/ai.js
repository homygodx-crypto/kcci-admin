/* ============================================================
   ai.js — Gemini AI 자동완성 (업종별 프롬프트)
   ============================================================ */

'use strict';

function updateAiBadge() {
  const key = getApiKey();
  const url = getWorkerUrl();
  const badge = document.getElementById('aiKeyBadge');
  if (!badge) return;
  if (key && url) {
    badge.textContent = '✅ AI 연결됨';
    badge.style.cssText = 'border-color:rgba(34,197,94,.4);color:var(--green)';
  } else {
    badge.textContent = 'API 키 미설정';
    badge.style.cssText = '';
  }
}

async function testApiKey() {
  const key = getApiKey();
  if (!key) { showToast('⚠️ 설정 탭에서 API 키를 입력하세요.', 'error'); return; }
  showToast('🧪 연결 테스트 중...');
  try {
    const res = await fetch('/api/claude', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ _apiKey: key, prompt: 'Reply with valid JSON only: {"status":"ok"}' })
    });
    const data = JSON.parse(await res.text());
    if (res.ok && data.text) { showToast('✅ Gemini 연결 성공!', 'success'); }
    else { showToast('❌ ' + (data.error || res.status), 'error'); }
  } catch(e) { showToast('❌ ' + e.message, 'error'); }
}

async function callAI(workerUrl, apiKey, prompt) {
  const res = await fetch('/api/claude', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ _apiKey: apiKey, prompt })
  });
  const resText = await res.text();
  if (!resText) throw new Error('서버 응답이 비어있습니다.');
  const data = JSON.parse(resText);
  if (!res.ok) throw new Error(data.error || 'API 오류 ' + res.status);
  const raw = data.text || '';
  if (!raw) throw new Error('AI 응답이 없습니다.');

  const cleaned = raw.replace(/```json/gi,'').replace(/```/g,'').trim();
  const m = cleaned.match(/\{[\s\S]*/);
  if (!m) throw new Error('JSON 없음 — 원본: ' + raw.substring(0,100));

  let jsonStr = m[0];
  jsonStr = jsonStr.replace(/,?\s*"[^"]*"\s*:\s*"[^"]*$/, '');
  jsonStr = jsonStr.replace(/,\s*$/, '');
  if (!jsonStr.endsWith('}')) jsonStr += '}';

  try { return JSON.parse(jsonStr); }
  catch {
    const m2 = cleaned.match(/\{[\s\S]*\}/);
    if (m2) return JSON.parse(m2[0].replace(/,\s*([\}\]])/g,'$1'));
    throw new Error('JSON 파싱 실패');
  }
}

function buildPrompt(schema, memo, part) {
  const fields = part === 1 ? schema.aiFields1 : schema.aiFields2;
  if (!fields || Object.keys(fields).length === 0) return null;

  const fieldList = Object.entries(fields)
    .map(([k,v]) => `"${k}": "${v}"`)
    .join(',\n  ');

  return `아래 업체 정보를 바탕으로 홈페이지 콘텐츠를 작성하세요.
업종: ${schema.label}

=== 업체 정보 (이것만 참고하세요) ===
${memo}
=== 끝 ===

규칙:
1. 위 업체 정보에 있는 실제 내용만 사용하세요
2. 없는 정보는 업종에 맞게 자연스럽게 작성하세요
3. JSON만 출력하세요. 마크다운, 설명 금지

출력할 JSON (키는 그대로, 값만 한국어로 채우세요):
{
  ${fieldList}
}`;
}

function fillForm(result) {
  let filled = 0;
  Object.keys(result).forEach(f => {
    if (!result[f]) return;
    const elId = 'sg' + f.charAt(0).toUpperCase() + f.slice(1);
    const el = document.getElementById(elId);
    if (el) { el.value = result[f]; filled++; }
  });
  return filled;
}

async function runAiFill() {
  const key = getApiKey();
  const workerUrl = '/api/claude';
  if (!key) {
    showToast('⚠️ 설정 탭에서 API 키를 먼저 입력하세요.', 'error');
    return;
  }

  const memo = (document.getElementById('sgAiMemo')?.value || '').trim();
  if (!memo) { showToast('⚠️ 업체 정보를 입력하세요.', 'error'); return; }

  const schema = getSchema();
  const btn = document.getElementById('aiFillBtn');
  const status = document.getElementById('aiStatus');

  if (btn) { btn.disabled = true; btn.textContent = '⏳ AI 생성 중...'; }

  try {
    if (status) status.textContent = '✨ 1/2 기본정보 + ' + schema.programLabel + ' 생성 중...';
    const result1 = await callAI(workerUrl, key, buildPrompt(schema, memo, 1));
    fillForm(result1);

    const prompt2 = buildPrompt(schema, memo, 2);
    if (prompt2) {
      const label2 = schema.staffLabel || '운영정보';
      if (status) status.textContent = '✨ 2/2 ' + label2 + ' + 후기 생성 중...';
      const result2 = await callAI(workerUrl, key, prompt2);
      fillForm(result2);
    }

    if (status) status.innerHTML = '<span style="color:var(--green)">✅ 완성! 내용을 확인 후 미리보기 또는 생성하세요.</span>';
    showToast('✅ AI 자동 완성 완료!', 'success');

  } catch(e) {
    if (status) status.innerHTML = '<span style="color:var(--red)">❌ ' + e.message + '</span>';
    showToast('❌ AI 오류: ' + e.message, 'error');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = '✨ AI로 폼 자동 완성'; }
  }
}
