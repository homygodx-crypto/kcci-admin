/* ============================================================
   admin.js — 사장님 Admin 페이지 (공통)
   디자인: 소예 필라테스 admin.html 기반
   기능: 예약관리, 갤러리, 기본정보
   ============================================================ */

const ADMIN_SUPABASE_URL = 'https://vugtupipbpfundipgcqc.supabase.co';
const ADMIN_SUPABASE_KEY = 'sb_publishable_tJhW52aAlbyM_0A5_J-yqA_OTIIhV-S';
const ADMIN_BUCKET = 'site-images';

function buildAdminHtml(d) {
  const siteName = d.name || '업체';
  const adminId = d.adminId || 'admin';
  const adminPw = d.adminPw || '1234';
  const siteId = (d.url || d.name || 'site').replace(/[^a-z0-9]/gi,'_').toLowerCase();
  const phone = (d.phone || '').replace(/-/g,'');
  const SB_URL = ADMIN_SUPABASE_URL;
  const SB_KEY = ADMIN_SUPABASE_KEY;
  const BUCKET = ADMIN_BUCKET;

  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>관리자 | ${siteName}</title>
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Apple SD Gothic Neo','맑은 고딕',sans-serif;background:#f0f2f5;color:#222;}
:root{--navy:#1B3A5C;--gold:#C9A040;--green:#03C75A;--red:#e74c3c;}

.login-page{min-height:100vh;display:flex;align-items:center;justify-content:center;background:var(--navy);}
.login-box{background:#fff;width:380px;padding:52px 44px;box-shadow:0 20px 60px rgba(0,0,0,0.3);}
.login-brand{font-size:12px;letter-spacing:.3em;color:var(--gold);margin-bottom:8px;}
.login-title{font-size:22px;font-weight:700;color:var(--navy);margin-bottom:32px;}
.lf{margin-bottom:18px;}
.lf label{display:block;font-size:13px;color:#888;margin-bottom:6px;}
.lf input{width:100%;padding:13px 16px;border:1px solid #ddd;font-size:15px;font-family:inherit;outline:none;transition:border-color .2s;}
.lf input:focus{border-color:var(--gold);}
.login-err{font-size:13px;color:var(--red);margin-bottom:12px;display:none;}
.login-btn{width:100%;background:var(--navy);color:#fff;border:none;padding:15px;font-size:16px;cursor:pointer;font-family:inherit;font-weight:500;margin-top:4px;}
.login-btn:hover{background:#122840;}

.admin-page{display:none;}
.sidebar{position:fixed;left:0;top:0;bottom:0;width:230px;background:var(--navy);display:flex;flex-direction:column;z-index:100;}
.sb-logo{padding:28px 24px 20px;border-bottom:1px solid rgba(255,255,255,0.07);}
.sb-logo-name{font-size:15px;font-weight:600;color:#fff;line-height:1.4;}
.sb-logo-sub{font-size:11px;color:rgba(255,255,255,0.4);margin-top:3px;}
.sb-menu{flex:1;padding:16px 0;overflow-y:auto;}
.sb-section{font-size:10px;letter-spacing:.2em;color:rgba(255,255,255,0.3);padding:16px 24px 8px;}
.sb-item{display:flex;align-items:center;gap:10px;padding:12px 24px;font-size:14px;color:rgba(255,255,255,0.6);cursor:pointer;transition:all .2s;border-left:3px solid transparent;}
.sb-item:hover{background:rgba(255,255,255,0.05);color:#fff;}
.sb-item.active{background:rgba(201,160,64,0.1);color:var(--gold);border-left-color:var(--gold);}
.sb-item .ic{font-size:16px;width:20px;text-align:center;}
.sb-footer{padding:20px 24px;border-top:1px solid rgba(255,255,255,0.07);}
.sb-logout{width:100%;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);color:rgba(255,255,255,0.5);padding:10px;font-size:13px;cursor:pointer;font-family:inherit;}
.sb-logout:hover{background:rgba(255,255,255,0.12);color:#fff;}

.main{margin-left:230px;min-height:100vh;}
.topbar{background:#fff;padding:0 36px;height:64px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #eee;position:sticky;top:0;z-index:50;}
.topbar-title{font-size:18px;font-weight:600;color:var(--navy);}
.topbar-actions{display:flex;gap:10px;align-items:center;}
.btn-preview{padding:9px 20px;font-size:14px;font-family:inherit;border:1px solid var(--navy);color:var(--navy);background:#fff;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:6px;}
.btn-preview:hover{background:var(--navy);color:#fff;}

.content{padding:32px 36px;}
.panel{display:none;}
.panel.active{display:block;}

.card{background:#fff;margin-bottom:24px;box-shadow:0 1px 4px rgba(0,0,0,0.06);}
.card-head{padding:18px 24px;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;justify-content:space-between;}
.card-head h3{font-size:15px;font-weight:600;color:var(--navy);}
.card-body{padding:24px;}

.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px;}
.stat-box{background:#fff;box-shadow:0 1px 4px rgba(0,0,0,0.06);padding:20px 24px;}
.stat-num{font-size:32px;font-weight:700;color:var(--navy);}
.stat-label{font-size:13px;color:#999;margin-top:4px;}
.stat-box.highlight .stat-num{color:var(--gold);}

.rsv-tab{background:rgba(27,58,92,0.06);border:1px solid rgba(27,58,92,0.15);color:rgba(27,58,92,0.6);padding:6px 14px;font-size:12px;cursor:pointer;font-family:inherit;border-radius:20px;transition:all .15s;}
.rsv-tab:hover{background:rgba(27,58,92,0.1);color:var(--navy);}
.rsv-tab.active{background:rgba(201,160,64,0.15);border-color:rgba(201,160,64,0.4);color:var(--gold);}

.rsv-item{background:#fff;border:1px solid #f0f0f0;padding:16px 20px;margin-bottom:8px;}
.rsv-name{font-size:15px;font-weight:600;color:#222;margin-bottom:4px;}
.rsv-meta{font-size:13px;color:#999;display:flex;gap:14px;flex-wrap:wrap;}
.rsv-meta a{color:var(--gold);text-decoration:none;}
.rsv-memo{font-size:13px;color:#aaa;margin-top:8px;}
.rsv-actions{display:flex;gap:6px;margin-top:12px;flex-wrap:wrap;}
.rsv-actions button{padding:5px 12px;font-size:12px;cursor:pointer;font-family:inherit;border:1px solid;}
.btn-confirm{background:rgba(3,199,90,0.1);border-color:rgba(3,199,90,0.3);color:var(--green);}
.btn-done{background:rgba(27,58,92,0.05);border-color:rgba(27,58,92,0.15);color:#666;}
.btn-cancel{background:rgba(231,76,60,0.08);border-color:rgba(231,76,60,0.2);color:var(--red);}
.btn-delete{background:rgba(231,76,60,0.05);border-color:rgba(231,76,60,0.1);color:rgba(231,76,60,0.6);}
.status-badge{font-size:12px;padding:3px 10px;border-radius:20px;border:1px solid;}
.s-waiting{border-color:#F59E0B33;color:#F59E0B;}
.s-confirmed{border-color:#22C55E33;color:#22C55E;}
.s-cancelled{border-color:#EF444433;color:#EF4444;}
.s-done{border-color:#64748B33;color:#64748B;}

.gallery-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;}
.gal-item{position:relative;background:#f5f5f5;border:1px solid #eee;}
.gal-item::before{content:'';display:block;padding-top:75%;}
.gal-item img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
.gal-del{position:absolute;top:6px;right:6px;background:rgba(231,76,60,0.9);color:#fff;border:none;width:26px;height:26px;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;}
.gal-add{border:2px dashed #ddd;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#fafafa;position:relative;transition:border-color .2s;}
.gal-add::before{content:'';display:block;padding-top:75%;}
.gal-add-inner{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;}
.gal-add:hover{border-color:var(--gold);}
.gal-add input{position:absolute;inset:0;opacity:0;cursor:pointer;}

.fg{margin-bottom:20px;}
.fg label{display:block;font-size:13px;color:#666;margin-bottom:7px;font-weight:500;}
.fg input,.fg textarea{width:100%;padding:11px 14px;border:1px solid #ddd;font-size:14px;font-family:inherit;outline:none;transition:border-color .2s;background:#fff;}
.fg input:focus,.fg textarea:focus{border-color:var(--gold);}
.fg textarea{resize:vertical;min-height:80px;line-height:1.7;}
.fg-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.btn-gold{background:var(--gold);color:#fff;border:none;padding:12px 28px;font-size:14px;cursor:pointer;font-family:inherit;}
.btn-gold:hover{background:#b08a30;}

.toast{position:fixed;bottom:32px;left:50%;transform:translateX(-50%) translateY(80px);background:#222;color:#fff;padding:14px 28px;font-size:14px;transition:transform .3s;z-index:9999;white-space:nowrap;}
.toast.show{transform:translateX(-50%) translateY(0);}

@media(max-width:900px){
  .sidebar{width:60px;}
  .sb-logo,.sb-section,.sb-item span,.sb-footer{display:none;}
  .sb-item{padding:14px;justify-content:center;}
  .main{margin-left:60px;}
  .stats-grid{grid-template-columns:1fr 1fr;}
  .gallery-grid{grid-template-columns:repeat(2,1fr);}
  .fg-row{grid-template-columns:1fr;}
  .content{padding:20px;}
}
</style>
</head>
<body>

<div class="login-page" id="loginPage">
  <div class="login-box">
    <div class="login-brand">${siteName.toUpperCase()}</div>
    <div class="login-title">관리자 로그인</div>
    <div class="lf"><label>아이디</label><input type="text" id="loginId" placeholder="아이디" onkeydown="if(event.key==='Enter')doLogin()"></div>
    <div class="lf"><label>비밀번호</label><input type="password" id="loginPw" placeholder="비밀번호" onkeydown="if(event.key==='Enter')doLogin()"></div>
    <div class="login-err" id="loginErr">아이디 또는 비밀번호가 올바르지 않습니다.</div>
    <button class="login-btn" onclick="doLogin()">로그인</button>
  </div>
</div>

<div class="admin-page" id="adminPage">
  <div class="sidebar">
    <div class="sb-logo">
      <div class="sb-logo-name">${siteName}</div>
      <div class="sb-logo-sub">관리자 페이지</div>
    </div>
    <div class="sb-menu">
      <div class="sb-section">관리 메뉴</div>
      <div class="sb-item active" onclick="showPanel('dashboard',this)"><span class="ic">📊</span><span>대시보드</span></div>
      <div class="sb-item" onclick="showPanel('reservation',this)"><span class="ic">📅</span><span>예약 관리</span></div>
      <div class="sb-item" onclick="showPanel('gallery',this)"><span class="ic">🖼️</span><span>갤러리</span></div>
      <div class="sb-item" onclick="showPanel('info',this)"><span class="ic">ℹ️</span><span>기본 정보</span></div>
    </div>
    <div class="sb-footer">
      <button class="sb-logout" onclick="logout()">로그아웃</button>
    </div>
  </div>

  <div class="main">
    <div class="topbar">
      <div class="topbar-title" id="topbarTitle">대시보드</div>
      <div class="topbar-actions">
        <a href="index.html" target="_blank" class="btn-preview">🔍 홈페이지 보기</a>
      </div>
    </div>

    <div class="content">

      <!-- 대시보드 -->
      <div class="panel active" id="panel-dashboard">
        <div class="stats-grid">
          <div class="stat-box highlight"><div class="stat-num" id="statTotal">0</div><div class="stat-label">전체 예약</div></div>
          <div class="stat-box"><div class="stat-num" id="statWaiting">0</div><div class="stat-label">대기중</div></div>
          <div class="stat-box"><div class="stat-num" id="statConfirmed">0</div><div class="stat-label">확정</div></div>
          <div class="stat-box"><div class="stat-num" id="statToday">0</div><div class="stat-label">오늘 예약</div></div>
        </div>
        <div class="card">
          <div class="card-head">
            <h3>📅 최근 예약</h3>
            <button onclick="loadRsvList()" style="background:rgba(27,58,92,0.06);border:1px solid rgba(27,58,92,0.15);color:#666;padding:6px 14px;font-size:12px;cursor:pointer;font-family:inherit;">🔄 새로고침</button>
          </div>
          <div class="card-body" id="dashRsvList">
            <div style="text-align:center;padding:24px;color:#ccc">불러오는 중...</div>
          </div>
        </div>
      </div>

      <!-- 예약 관리 -->
      <div class="panel" id="panel-reservation">
        <div class="card">
          <div class="card-head">
            <h3>📅 예약 관리</h3>
            <div style="display:flex;gap:8px;align-items:center">
              <span id="rsvStatBadge" style="font-size:12px;color:#999"></span>
              <button onclick="loadRsvList()" style="background:rgba(27,58,92,0.06);border:1px solid rgba(27,58,92,0.15);color:#666;padding:6px 14px;font-size:12px;cursor:pointer;font-family:inherit;">🔄 새로고침</button>
            </div>
          </div>
          <div class="card-body">
            <div style="display:flex;gap:6px;margin-bottom:16px;flex-wrap:wrap">
              <button class="rsv-tab active" onclick="setRsvTab('all',this)">전체</button>
              <button class="rsv-tab" onclick="setRsvTab('waiting',this)">대기중</button>
              <button class="rsv-tab" onclick="setRsvTab('confirmed',this)">확정</button>
              <button class="rsv-tab" onclick="setRsvTab('cancelled',this)">취소</button>
              <button class="rsv-tab" onclick="setRsvTab('done',this)">완료</button>
            </div>
            <div id="rsvList"><div style="text-align:center;padding:32px;color:#ccc">불러오는 중...</div></div>
          </div>
        </div>
      </div>

      <!-- 갤러리 -->
      <div class="panel" id="panel-gallery">
        <div class="card">
          <div class="card-head"><h3>🖼️ 갤러리 관리</h3></div>
          <div class="card-body">
            <div class="gallery-grid" id="galleryGrid"></div>
          </div>
        </div>
      </div>

      <!-- 기본 정보 -->
      <div class="panel" id="panel-info">
        <div class="card">
          <div class="card-head"><h3>ℹ️ 기본 정보 수정</h3></div>
          <div class="card-body">
            <div class="fg-row">
              <div class="fg"><label>업체명</label><input type="text" id="iName" value="${siteName}"></div>
              <div class="fg"><label>전화번호</label><input type="text" id="iPhone" value="${d.phone||''}"></div>
            </div>
            <div class="fg"><label>주소</label><input type="text" id="iAddress" value="${d.address||''}"></div>
            <div class="fg-row">
              <div class="fg"><label>영업시간</label><input type="text" id="iHours" value="${d.openHours||''}"></div>
              <div class="fg"><label>휴무일</label><input type="text" id="iClosed" placeholder="예) 매주 월요일 휴무"></div>
            </div>
            <div class="fg"><label>주차 안내</label><input type="text" id="iParking" value="${d.parking||''}"></div>
            <div class="fg"><label>슬로건</label><input type="text" id="iSlogan" value="${d.slogan||''}"></div>
            <button class="btn-gold" onclick="saveInfo()">💾 저장</button>
            <p style="margin-top:12px;font-size:13px;color:#aaa">※ 저장된 정보는 이 기기에 보관됩니다. 홈페이지에 반영하려면 담당자에게 연락해주세요.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

<div class="toast" id="toast"></div>

<script>
var ADMIN_ID = '${adminId}';
var ADMIN_PW = '${adminPw}';
var SB_URL = '${SB_URL}';
var SB_KEY = '${SB_KEY}';
var BUCKET = '${BUCKET}';
var SITE_ID = '${siteId}';
var RSV_LIST = [];
var RSV_FILTER = 'all';
var galleryItems = JSON.parse(localStorage.getItem('gal_' + SITE_ID) || '[]');

// 로그인
function doLogin() {
  var id = document.getElementById('loginId').value.trim();
  var pw = document.getElementById('loginPw').value;
  if (id === ADMIN_ID && pw === ADMIN_PW) {
    sessionStorage.setItem('kcci_admin_' + SITE_ID, 'ok');
    document.getElementById('loginErr').style.display = 'none';
    showAdmin();
  } else {
    document.getElementById('loginErr').style.display = 'block';
    document.getElementById('loginPw').value = '';
  }
}

function showAdmin() {
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('adminPage').style.display = 'block';
  loadRsvList();
  renderGallery();
}

function logout() {
  sessionStorage.removeItem('kcci_admin_' + SITE_ID);
  location.reload();
}

if (sessionStorage.getItem('kcci_admin_' + SITE_ID) === 'ok') showAdmin();

// 패널 전환
var panelTitles = {dashboard:'대시보드', reservation:'예약 관리', gallery:'갤러리', info:'기본 정보'};
function showPanel(name, el) {
  document.querySelectorAll('.panel').forEach(function(p) { p.classList.remove('active'); });
  document.querySelectorAll('.sb-item').forEach(function(i) { i.classList.remove('active'); });
  document.getElementById('panel-' + name).classList.add('active');
  if (el) el.classList.add('active');
  document.getElementById('topbarTitle').textContent = panelTitles[name] || name;
  if (name === 'reservation') loadRsvList();
}

// 예약 관리
var STATUS_MAP = {
  waiting:   { label: '대기중', cls: 's-waiting' },
  confirmed: { label: '확정',   cls: 's-confirmed' },
  cancelled: { label: '취소',   cls: 's-cancelled' },
  done:      { label: '완료',   cls: 's-done' },
};

async function loadRsvList() {
  try {
    var res = await fetch(SB_URL + '/rest/v1/reservations?order=created_at.desc&limit=200', {
      headers: { 'apikey': SB_KEY, 'Authorization': 'Bearer ' + SB_KEY }
    });
    if (!res.ok) throw new Error('조회 실패 ' + res.status);
    RSV_LIST = await res.json();
    updateStats();
    renderRsvList();
    renderDashRsv();
  } catch(e) {
    document.getElementById('rsvList').innerHTML = '<div style="text-align:center;padding:32px;color:#e74c3c">조회 실패: ' + e.message + '</div>';
  }
}

function updateStats() {
  var today = new Date().toISOString().slice(0,10);
  document.getElementById('statTotal').textContent = RSV_LIST.length;
  document.getElementById('statWaiting').textContent = RSV_LIST.filter(function(r){return r.status==='waiting';}).length;
  document.getElementById('statConfirmed').textContent = RSV_LIST.filter(function(r){return r.status==='confirmed';}).length;
  document.getElementById('statToday').textContent = RSV_LIST.filter(function(r){return r.date===today;}).length;
  var waiting = RSV_LIST.filter(function(r){return r.status==='waiting';}).length;
  var badge = document.getElementById('rsvStatBadge');
  if (badge) badge.textContent = '전체 ' + RSV_LIST.length + '건' + (waiting > 0 ? ' · 대기 ' + waiting + '건' : '');
}

function setRsvTab(f, el) {
  RSV_FILTER = f;
  document.querySelectorAll('.rsv-tab').forEach(function(b) { b.classList.remove('active'); });
  if (el) el.classList.add('active');
  renderRsvList();
}

function renderRsvList() {
  var list = document.getElementById('rsvList');
  if (!list) return;
  var filtered = RSV_FILTER === 'all' ? RSV_LIST : RSV_LIST.filter(function(r){return r.status===RSV_FILTER;});
  if (filtered.length === 0) {
    list.innerHTML = '<div style="text-align:center;padding:32px;color:#ccc">예약이 없습니다.</div>';
    return;
  }
  list.innerHTML = filtered.map(function(r) {
    var s = STATUS_MAP[r.status] || {label:r.status, cls:'s-waiting'};
    var dt = new Date(r.created_at).toLocaleDateString('ko-KR');
    return '<div class="rsv-item">' +
      '<div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:8px">' +
        '<div>' +
          '<div class="rsv-name">' + (r.name||'-') + '</div>' +
          '<div class="rsv-meta">' +
            '<span>📞 <a href="tel:' + (r.phone||'').replace(/-/g,'') + '">' + (r.phone||'-') + '</a></span>' +
            '<span>📅 ' + (r.date||'-') + ' ' + (r.time||'') + '</span>' +
            '<span style="color:#ddd">신청: ' + dt + '</span>' +
          '</div>' +
          (r.memo ? '<div class="rsv-memo">💬 ' + r.memo + '</div>' : '') +
        '</div>' +
        '<span class="status-badge ' + s.cls + '">' + s.label + '</span>' +
      '</div>' +
      '<div class="rsv-actions">' +
        '<button class="btn-confirm" onclick="updateRsv(' + r.id + ',\'confirmed\')">✅ 확정</button>' +
        '<button class="btn-done" onclick="updateRsv(' + r.id + ',\'done\')">완료</button>' +
        '<button class="btn-cancel" onclick="updateRsv(' + r.id + ',\'cancelled\')">❌ 취소</button>' +
        '<button class="btn-delete" onclick="deleteRsv(' + r.id + ')">🗑</button>' +
      '</div>' +
    '</div>';
  }).join('');
}

function renderDashRsv() {
  var el = document.getElementById('dashRsvList');
  if (!el) return;
  var recent = RSV_LIST.slice(0, 5);
  if (recent.length === 0) { el.innerHTML = '<div style="text-align:center;padding:24px;color:#ccc">예약이 없습니다.</div>'; return; }
  el.innerHTML = recent.map(function(r) {
    var s = STATUS_MAP[r.status] || {label:r.status, cls:'s-waiting'};
    return '<div class="rsv-item">' +
      '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">' +
        '<div>' +
          '<div class="rsv-name" style="font-size:14px">' + (r.name||'-') + '</div>' +
          '<div class="rsv-meta"><span>📞 ' + (r.phone||'-') + '</span><span>📅 ' + (r.date||'-') + ' ' + (r.time||'') + '</span></div>' +
        '</div>' +
        '<div style="display:flex;align-items:center;gap:8px">' +
          '<span class="status-badge ' + s.cls + '">' + s.label + '</span>' +
          '<button class="btn-confirm" style="font-size:11px;padding:4px 10px" onclick="updateRsv(' + r.id + ',\'confirmed\')">확정</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');
}

async function updateRsv(id, status) {
  try {
    var res = await fetch(SB_URL + '/rest/v1/reservations?id=eq.' + id, {
      method: 'PATCH',
      headers: { 'Content-Type':'application/json','apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY,'Prefer':'return=minimal' },
      body: JSON.stringify({ status: status }),
    });
    if (!res.ok) throw new Error('수정 실패');
    var r = RSV_LIST.find(function(x){return x.id==id;});
    if (r) r.status = status;
    updateStats();
    renderRsvList();
    renderDashRsv();
    showToast('✅ 상태 변경 완료');
  } catch(e) { showToast('❌ ' + e.message); }
}

async function deleteRsv(id) {
  if (!confirm('이 예약을 삭제할까요?')) return;
  try {
    var res = await fetch(SB_URL + '/rest/v1/reservations?id=eq.' + id, {
      method: 'DELETE',
      headers: { 'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY },
    });
    if (!res.ok) throw new Error('삭제 실패');
    RSV_LIST = RSV_LIST.filter(function(x){return x.id!=id;});
    updateStats();
    renderRsvList();
    renderDashRsv();
    showToast('삭제되었습니다.');
  } catch(e) { showToast('❌ ' + e.message); }
}

// 갤러리
function renderGallery() {
  var grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = galleryItems.map(function(item, i) {
    return '<div class="gal-item">' +
      '<img src="' + item.src + '" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">' +
      '<button class="gal-del" onclick="deleteGallery(' + i + ')">✕</button>' +
    '</div>';
  }).join('') +
  '<div class="gal-add">' +
    '<div class="gal-add-inner"><div style="font-size:28px;color:#ccc;margin-bottom:6px">➕</div><p style="font-size:13px;color:#aaa">사진 추가</p></div>' +
    '<input type="file" accept="image/*" multiple onchange="addGallery(this)">' +
  '</div>';
}

function deleteGallery(i) {
  if (!confirm('이 사진을 삭제할까요?')) return;
  galleryItems.splice(i, 1);
  localStorage.setItem('gal_' + SITE_ID, JSON.stringify(galleryItems));
  renderGallery();
  showToast('삭제되었습니다.');
}

async function addGallery(input) {
  var files = Array.from(input.files);
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    showToast('📤 (' + (i+1) + '/' + files.length + ') 업로드 중...');
    try {
      var ext = file.name.split('.').pop();
      var path = SITE_ID + '/gallery/' + Date.now() + '_' + i + '.' + ext;
      var res = await fetch(SB_URL + '/storage/v1/object/' + BUCKET + '/' + path, {
        method: 'POST',
        headers: { 'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY,'Content-Type':file.type,'x-upsert':'true' },
        body: file,
      });
      if (res.ok) {
        var url = SB_URL + '/storage/v1/object/public/' + BUCKET + '/' + path;
        galleryItems.push({ src: url });
        localStorage.setItem('gal_' + SITE_ID, JSON.stringify(galleryItems));
        renderGallery();
        showToast('✅ 업로드 완료!');
      } else {
        showToast('⚠️ 업로드 실패');
      }
    } catch(e) { showToast('❌ ' + e.message); }
  }
  input.value = '';
}

// 기본 정보
function saveInfo() {
  var info = {
    name: document.getElementById('iName').value,
    phone: document.getElementById('iPhone').value,
    address: document.getElementById('iAddress').value,
    hours: document.getElementById('iHours').value,
    closed: document.getElementById('iClosed').value,
    parking: document.getElementById('iParking').value,
    slogan: document.getElementById('iSlogan').value,
  };
  localStorage.setItem('info_' + SITE_ID, JSON.stringify(info));
  showToast('✅ 저장되었습니다');
}

// 토스트
function showToast(msg) {
  var t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(function() { t.classList.remove('show'); }, 3000);
}
</script>
</body>
</html>`;
}
