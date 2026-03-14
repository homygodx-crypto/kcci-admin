/* ============================================================
   reservation.js — 예약 기능 (Supabase 연동)
   고객 홈페이지: 예약 폼 제출
   관리자 페이지: 예약 목록 조회 / 상태 변경
   ============================================================ */

'use strict';

const SUPABASE_URL = 'https://vugtupipbpfundipgcqc.supabase.co';
const SUPABASE_KEY = 'sb_publishable_tJhW52aAlbyM_0A5_J-yqA_OTIIhV-S';
const RES_TABLE = 'reservations';

// ── Supabase REST API 헬퍼 ──
async function sbRequest(method, path, body) {
  const res = await fetch(SUPABASE_URL + '/rest/v1/' + path, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_KEY,
      'Authorization': 'Bearer ' + SUPABASE_KEY,
      'Prefer': method === 'POST' ? 'return=representation' : 'return=minimal',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error('Supabase 오류: ' + err.substring(0, 100));
  }
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

// ── 예약 저장 (고객 홈페이지) ──
async function submitReservation(data) {
  return await sbRequest('POST', RES_TABLE, {
    site_id: data.siteId || 'unknown',
    name: data.name,
    phone: data.phone,
    date: data.date,
    time: data.time,
    memo: data.memo || '',
    status: 'pending',
  });
}

// ── 예약 목록 조회 (관리자) ──
async function fetchReservations(siteId, status) {
  let query = RES_TABLE + '?order=created_at.desc&limit=100';
  if (siteId) query += '&site_id=eq.' + encodeURIComponent(siteId);
  if (status && status !== 'all') query += '&status=eq.' + status;
  return await sbRequest('GET', query);
}

// ── 예약 상태 변경 ──
async function updateReservationStatus(id, status) {
  return await sbRequest('PATCH', RES_TABLE + '?id=eq.' + id, { status });
}

// ── 예약 삭제 ──
async function deleteReservation(id) {
  return await sbRequest('DELETE', RES_TABLE + '?id=eq.' + id);
}

// ── 예약 폼 HTML 생성 (홈페이지용 공통) ──
function buildReservationPageHtml(d, cssStr, headerStr, footerStr, jsStr) {
  const siteName = d.name || '업체';
  const siteId = (d.url || d.name || '').replace(/[^a-z0-9]/gi, '_').toLowerCase();

  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>예약하기 | ${siteName}</title>
${cssStr ? '<style>' + cssStr + `

/* 예약 페이지 추가 스타일 */
.rsv-wrap{max-width:640px;margin:0 auto;padding:80px 24px;}
.rsv-title{font-size:clamp(24px,3vw,36px);margin-bottom:8px;}
.rsv-sub{font-size:15px;opacity:.6;margin-bottom:40px;}
.rsv-form{display:flex;flex-direction:column;gap:18px;}
.rsv-group{display:flex;flex-direction:column;gap:6px;}
.rsv-group label{font-size:12px;letter-spacing:.1em;opacity:.6;text-transform:uppercase;font-weight:500;}
.rsv-group input,.rsv-group select,.rsv-group textarea{
  background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);
  color:inherit;padding:13px 16px;font-size:15px;font-family:inherit;
  border-radius:4px;outline:none;transition:border-color .2s;width:100%;
}
.rsv-group input:focus,.rsv-group select:focus,.rsv-group textarea:focus{border-color:var(--gold,#C9A040);}
.rsv-group textarea{min-height:88px;resize:vertical;}
.rsv-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.rsv-submit{padding:16px;font-size:15px;font-weight:700;font-family:inherit;
  background:var(--gold,#C9A040);color:#000;border:none;cursor:pointer;
  border-radius:4px;transition:opacity .2s;}
.rsv-submit:hover{opacity:.85;}
.rsv-submit:disabled{opacity:.5;cursor:not-allowed;}
.rsv-success{display:none;text-align:center;padding:48px 24px;}
.rsv-success-icon{font-size:56px;margin-bottom:16px;}
.rsv-success h3{font-size:22px;margin-bottom:10px;}
.rsv-success p{font-size:15px;opacity:.6;line-height:1.8;}
.rsv-note{font-size:13px;opacity:.5;text-align:center;margin-top:16px;line-height:1.8;}
@media(max-width:600px){.rsv-row{grid-template-columns:1fr;}}
</style>` : ''}
</head>
<body>
${headerStr || ''}

<div style="padding-top:70px">
  <div class="rsv-wrap">
    <div id="rsvForm">
      <div class="rsv-title">예약하기</div>
      <div class="rsv-sub">${siteName}에 방문 예약을 신청해주세요</div>

      <div class="rsv-form">
        <div class="rsv-row">
          <div class="rsv-group">
            <label>이름 *</label>
            <input type="text" id="rsvName" placeholder="홍길동" required>
          </div>
          <div class="rsv-group">
            <label>전화번호 *</label>
            <input type="tel" id="rsvPhone" placeholder="010-0000-0000" required>
          </div>
        </div>
        <div class="rsv-row">
          <div class="rsv-group">
            <label>예약 날짜 *</label>
            <input type="date" id="rsvDate" required>
          </div>
          <div class="rsv-group">
            <label>예약 시간 *</label>
            <select id="rsvTime">
              <option value="">시간 선택</option>
              <option>09:00</option><option>09:30</option>
              <option>10:00</option><option>10:30</option>
              <option>11:00</option><option>11:30</option>
              <option>12:00</option><option>13:00</option>
              <option>13:30</option><option>14:00</option>
              <option>14:30</option><option>15:00</option>
              <option>15:30</option><option>16:00</option>
              <option>16:30</option><option>17:00</option>
              <option>17:30</option><option>18:00</option>
              <option>18:30</option><option>19:00</option>
              <option>19:30</option><option>20:00</option>
            </select>
          </div>
        </div>
        <div class="rsv-group">
          <label>문의 사항 (선택)</label>
          <textarea id="rsvMemo" placeholder="예약 관련 문의사항을 입력해주세요"></textarea>
        </div>
        <button class="rsv-submit" id="rsvSubmitBtn" onclick="handleRsvSubmit()">
          예약 신청하기
        </button>
        <div class="rsv-note">
          📞 전화 예약: <a href="tel:${d.phone.replace(/-/g,'')}" style="color:inherit">${d.phone}</a><br>
          예약 확인 후 담당자가 연락드립니다
        </div>
      </div>
    </div>

    <div class="rsv-success" id="rsvSuccess">
      <div class="rsv-success-icon">✅</div>
      <h3>예약 신청이 완료되었습니다</h3>
      <p>입력하신 번호로 확인 연락을 드리겠습니다.<br>
      문의사항은 <a href="tel:${d.phone.replace(/-/g,'')}" style="color:inherit">${d.phone}</a>으로 연락해 주세요.</p>
      <br>
      <a href="index.html" style="display:inline-block;margin-top:16px;padding:12px 28px;background:var(--gold,#C9A040);color:#000;text-decoration:none;font-weight:700;border-radius:4px">홈으로 돌아가기</a>
    </div>
  </div>
</div>

${footerStr || ''}

<script>
const SUPABASE_URL = '${SUPABASE_URL}';
const SUPABASE_KEY = '${SUPABASE_KEY}';
const SITE_ID = '${siteId}';

async function handleRsvSubmit() {
  const name = document.getElementById('rsvName').value.trim();
  const phone = document.getElementById('rsvPhone').value.trim();
  const date = document.getElementById('rsvDate').value;
  const time = document.getElementById('rsvTime').value;
  const memo = document.getElementById('rsvMemo').value.trim();

  if (!name) { alert('이름을 입력해주세요.'); return; }
  if (!phone) { alert('전화번호를 입력해주세요.'); return; }
  if (!date) { alert('날짜를 선택해주세요.'); return; }
  if (!time) { alert('시간을 선택해주세요.'); return; }

  const btn = document.getElementById('rsvSubmitBtn');
  btn.disabled = true;
  btn.textContent = '신청 중...';

  try {
    const res = await fetch(SUPABASE_URL + '/rest/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': 'Bearer ' + SUPABASE_KEY,
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify({ site_id: SITE_ID, name, phone, date, time, memo, status: 'pending' }),
    });

    if (!res.ok) throw new Error('서버 오류');

    document.getElementById('rsvForm').style.display = 'none';
    document.getElementById('rsvSuccess').style.display = 'block';
  } catch(e) {
    alert('예약 신청 중 오류가 발생했습니다. 전화로 문의해주세요.\n' + e.message);
    btn.disabled = false;
    btn.textContent = '예약 신청하기';
  }
}

// 오늘 이전 날짜 선택 방지
document.getElementById('rsvDate').min = new Date().toISOString().split('T')[0];

${jsStr || ''}
<\/script>
</body>
</html>`;
}
