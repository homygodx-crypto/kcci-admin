/* ============================================================
   admin.js — 사장님 관리 페이지 (완전 재작성 v3)
   기능: 대시보드, 방문자통계+차트, 예약관리, 갤러리, 기본정보+재배포
   ============================================================ */

const ADMIN_SUPABASE_URL = 'https://vugtupipbpfundipgcqc.supabase.co';
const ADMIN_SUPABASE_KEY = 'sb_publishable_tJhW52aAlbyM_0A5_J-yqA_OTIIhV-S';
const ADMIN_BUCKET = 'site-images';

function buildAdminHtml_common(d) {
  const siteName = d.name || '업체';
  const adminId  = d.adminId || 'admin';
  const adminPw  = d.adminPw  || '1234';
  const siteId   = (d.url || d.name || 'site').replace(/[^a-z0-9]/gi,'_').toLowerCase();
  const industry = d.industry || 'general';

  const PAGE_FILES_MAP = {
    pilates: ['index.html','program.html','gallery.html','location.html','reservation.html'],
    cafe:    ['index.html','menu.html','gallery.html','location.html','reservation.html'],
    beauty:  ['index.html','service.html','gallery.html','location.html','reservation.html'],
    medical: ['index.html','treatment.html','gallery.html','location.html','reservation.html'],
    academy: ['index.html','course.html','gallery.html','location.html','reservation.html'],
    general: ['index.html','product.html','gallery.html','location.html','reservation.html'],
  };
  const pageFiles = PAGE_FILES_MAP[industry] || PAGE_FILES_MAP.general;

  const siteDataJson = JSON.stringify({
    name: siteName, phone: d.phone||'', address: d.address||'',
    openHours: d.openHours||'', parking: d.parking||'', slogan: d.slogan||'',
    industry, nameEn: d.nameEn||'', placeId: d.placeId||'',
    blog: d.blog||'', insta: d.insta||'', adminId, adminPw,
    masterDomain: 'https://kcci-admin.pages.dev',
    pageFiles,
    _origName: siteName, _origPhone: d.phone||'', _origAddress: d.address||'',
    _origSlogan: d.slogan||'', _origHours: d.openHours||'', _origParking: d.parking||'',
  });

  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>사장님 페이지 | ${siteName}</title>
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Apple SD Gothic Neo','맑은 고딕',sans-serif;background:#F2F4F7;color:#222;}
:root{--navy:#1B3A5C;--gold:#C9A040;--green:#03C75A;--red:#E74C3C;--blue:#3498DB;}

/* ── 로그인 ── */
.login-wrap{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#1B3A5C 0%,#0d2237 100%);}
.login-box{background:#fff;width:400px;padding:52px 44px;box-shadow:0 24px 80px rgba(0,0,0,0.3);border-radius:4px;}
.login-logo{font-size:11px;letter-spacing:.32em;color:var(--gold);margin-bottom:8px;text-transform:uppercase;}
.login-title{font-size:24px;font-weight:700;color:var(--navy);margin-bottom:36px;}
.lf{margin-bottom:20px;}
.lf label{display:block;font-size:12px;color:#aaa;margin-bottom:7px;letter-spacing:.12em;text-transform:uppercase;}
.lf input{width:100%;padding:13px 16px;border:1.5px solid #eee;font-size:15px;font-family:inherit;outline:none;border-radius:3px;transition:border-color .2s;}
.lf input:focus{border-color:var(--gold);}
.login-err{font-size:13px;color:var(--red);margin-bottom:14px;display:none;}
.login-btn{width:100%;background:var(--navy);color:#fff;border:none;padding:15px;font-size:15px;cursor:pointer;font-family:inherit;font-weight:600;border-radius:3px;transition:background .2s;letter-spacing:.06em;}
.login-btn:hover{background:#0d2237;}

/* ── 레이아웃 ── */
.admin-wrap{display:none;}
.sidebar{position:fixed;left:0;top:0;bottom:0;width:240px;background:var(--navy);display:flex;flex-direction:column;z-index:100;box-shadow:4px 0 24px rgba(0,0,0,0.15);}
.sb-brand{padding:28px 24px 22px;border-bottom:1px solid rgba(255,255,255,0.07);}
.sb-brand-name{font-size:15px;font-weight:700;color:#fff;line-height:1.4;}
.sb-brand-sub{font-size:11px;color:rgba(255,255,255,0.35);margin-top:3px;letter-spacing:.08em;}
.sb-nav{flex:1;padding:20px 0;overflow-y:auto;}
.sb-section{font-size:10px;letter-spacing:.22em;color:rgba(255,255,255,0.25);padding:16px 24px 8px;text-transform:uppercase;}
.sb-item{display:flex;align-items:center;gap:12px;padding:13px 24px;font-size:14px;color:rgba(255,255,255,0.55);cursor:pointer;transition:all .2s;border-left:3px solid transparent;user-select:none;}
.sb-item:hover{background:rgba(255,255,255,0.05);color:rgba(255,255,255,0.85);}
.sb-item.active{background:rgba(201,160,64,0.12);color:var(--gold);border-left-color:var(--gold);}
.sb-item .ic{font-size:17px;width:22px;text-align:center;flex-shrink:0;}
.sb-footer{padding:20px 24px;border-top:1px solid rgba(255,255,255,0.07);}
.sb-site-link{display:block;text-align:center;color:rgba(255,255,255,0.4);font-size:12px;text-decoration:none;padding:8px;border:1px solid rgba(255,255,255,0.1);border-radius:3px;margin-bottom:10px;transition:all .2s;}
.sb-site-link:hover{color:#fff;border-color:rgba(255,255,255,0.3);}
.sb-logout{width:100%;background:transparent;border:1px solid rgba(255,255,255,0.12);color:rgba(255,255,255,0.4);padding:10px;font-size:13px;cursor:pointer;font-family:inherit;border-radius:3px;transition:all .2s;}
.sb-logout:hover{background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.7);}

/* ── 메인 ── */
.main{margin-left:240px;min-height:100vh;}
.topbar{background:#fff;padding:0 40px;height:64px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #eee;position:sticky;top:0;z-index:50;box-shadow:0 1px 4px rgba(0,0,0,0.04);}
.topbar-title{font-size:17px;font-weight:700;color:var(--navy);}
.topbar-right{display:flex;align-items:center;gap:12px;}
.topbar-badge{background:var(--red);color:#fff;font-size:11px;padding:3px 9px;border-radius:20px;font-weight:700;display:none;}
.content{padding:32px 40px;}
.panel{display:none;animation:fadeIn .2s ease;}
.panel.active{display:block;}
@keyframes fadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.card{background:#fff;border-radius:6px;box-shadow:0 1px 6px rgba(0,0,0,0.06);margin-bottom:24px;overflow:hidden;}
.card-head{padding:18px 24px;border-bottom:1px solid #f5f5f5;display:flex;align-items:center;justify-content:space-between;}
.card-head h3{font-size:15px;font-weight:700;color:var(--navy);}
.card-body{padding:24px;}

/* ── 통계 카드 ── */
.stats-row{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px;}
.stat-box{background:#fff;border-radius:6px;box-shadow:0 1px 6px rgba(0,0,0,0.06);padding:22px 24px;border-top:3px solid var(--gold);position:relative;overflow:hidden;}
.stat-box::after{content:attr(data-icon);position:absolute;right:16px;top:14px;font-size:32px;opacity:.12;}
.stat-box.c-blue{border-top-color:var(--blue);}
.stat-box.c-green{border-top-color:var(--green);}
.stat-box.c-red{border-top-color:var(--red);}
.stat-num{font-size:36px;font-weight:800;color:var(--navy);line-height:1;}
.stat-label{font-size:12px;color:#aaa;margin-top:6px;letter-spacing:.06em;}

/* ── 차트 ── */
.chart-container{position:relative;}
.bar-chart{display:flex;align-items:flex-end;gap:0;padding:8px 0 0;height:220px;border-bottom:2px solid #f0f0f0;}
.bar-col{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;padding:0 1px;}
.bar-inner{width:100%;background:var(--gold);border-radius:3px 3px 0 0;min-height:2px;transition:all .5s ease;position:relative;}
.bar-inner:hover{background:#B08A30;filter:brightness(1.1);}
.bar-inner .tooltip{position:absolute;bottom:calc(100% + 6px);left:50%;transform:translateX(-50%);background:#222;color:#fff;font-size:11px;padding:4px 8px;border-radius:4px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .15s;z-index:10;}
.bar-inner.has-zero{background:#f0f0f0;}
.bar-col:hover .tooltip{opacity:1;}
.bar-label{font-size:10px;color:#bbb;text-align:center;line-height:1.2;min-height:14px;}
.chart-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;height:220px;color:#ccc;gap:8px;}
.chart-empty .icon{font-size:36px;opacity:.4;}

/* ── 진행 바 ── */
.progress-item{margin-bottom:14px;}
.progress-label{display:flex;justify-content:space-between;font-size:13px;margin-bottom:5px;}
.progress-bar-wrap{background:#f2f2f2;height:8px;border-radius:4px;overflow:hidden;}
.progress-bar{height:8px;border-radius:4px;transition:width .6s ease;}

/* ── 예약 ── */
.tab-row{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:20px;}
.tab-btn{padding:7px 16px;font-size:13px;cursor:pointer;font-family:inherit;border:1.5px solid #e0e0e0;background:#fff;color:#888;border-radius:20px;transition:all .15s;font-weight:500;}
.tab-btn:hover{border-color:#bbb;color:#555;}
.tab-btn.active{background:var(--navy);border-color:var(--navy);color:#fff;}
.rsv-item{border:1px solid #f0f0f0;border-radius:6px;padding:18px 20px;margin-bottom:10px;background:#fff;transition:box-shadow .2s;}
.rsv-item:hover{box-shadow:0 4px 16px rgba(0,0,0,0.07);}
.rsv-top{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;}
.rsv-name{font-size:16px;font-weight:700;color:#222;}
.rsv-meta{display:flex;gap:14px;flex-wrap:wrap;font-size:13px;color:#888;margin-top:6px;}
.rsv-meta a{color:var(--navy);text-decoration:none;font-weight:600;}
.rsv-memo{font-size:13px;color:#666;background:#fafafa;padding:8px 12px;border-radius:4px;margin-top:10px;border-left:3px solid var(--gold);}
.rsv-actions{display:flex;gap:6px;margin-top:12px;flex-wrap:wrap;}
.rsv-btn{padding:6px 14px;font-size:12px;cursor:pointer;font-family:inherit;border-radius:4px;border:1.5px solid;font-weight:600;transition:all .15s;}
.rsv-btn:hover{filter:brightness(.92);}
.btn-confirm{background:#E8F8EF;border-color:#A8E6C4;color:#1A8A4A;}
.btn-done{background:#F5F5F5;border-color:#DDD;color:#666;}
.btn-cancel{background:#FEF0EF;border-color:#FBC4C0;color:#C0392B;}
.btn-delete{background:#fff;border-color:#eee;color:#ccc;}
.rsv-status{display:inline-flex;align-items:center;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:700;border:1.5px solid;}
.rs-waiting{background:#FFF7E6;border-color:#F5D380;color:#B7791F;}
.rs-confirmed{background:#E8F8EF;border-color:#A8E6C4;color:#1A8A4A;}
.rs-done{background:#F5F5F5;border-color:#DDD;color:#888;}
.rs-cancelled{background:#FEF0EF;border-color:#FBC4C0;color:#C0392B;}

/* ── 갤러리 ── */
.gal-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;}
.gal-item{position:relative;border-radius:6px;overflow:hidden;background:#f5f5f5;}
.gal-item::before{content:'';display:block;padding-top:75%;}
.gal-item img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;}
.gal-del{position:absolute;top:7px;right:7px;background:rgba(231,76,60,0.9);color:#fff;border:none;width:28px;height:28px;cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center;border-radius:4px;opacity:0;transition:opacity .2s;}
.gal-item:hover .gal-del{opacity:1;}
.gal-add{border:2px dashed #ddd;cursor:pointer;border-radius:6px;overflow:hidden;background:#fafafa;transition:border-color .2s;position:relative;}
.gal-add::before{content:'';display:block;padding-top:75%;}
.gal-add:hover{border-color:var(--gold);background:#FFFBF0;}
.gal-add-inner{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;color:#bbb;font-size:13px;pointer-events:none;}
.gal-add-inner .plus{font-size:28px;line-height:1;color:#ddd;}
.gal-add input{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%;}
.gal-upload-progress{margin-top:14px;display:none;}
.progress-text{font-size:13px;color:#888;margin-bottom:6px;}

/* ── 폼 ── */
.fg{margin-bottom:22px;}
.fg label{display:block;font-size:12px;color:#999;margin-bottom:8px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;}
.fg input,.fg textarea{width:100%;padding:12px 15px;border:1.5px solid #eee;font-size:14px;font-family:inherit;outline:none;border-radius:4px;transition:border-color .2s;background:#fff;color:#333;}
.fg input:focus,.fg textarea:focus{border-color:var(--gold);}
.fg textarea{resize:vertical;min-height:80px;line-height:1.7;}
.fg-row{display:grid;grid-template-columns:1fr 1fr;gap:18px;}
.fg-hint{font-size:12px;color:#bbb;margin-top:5px;}

/* ── 버튼 ── */
.btn{padding:12px 26px;font-size:14px;cursor:pointer;font-family:inherit;border-radius:4px;border:none;font-weight:600;transition:all .2s;display:inline-flex;align-items:center;gap:7px;}
.btn-navy{background:var(--navy);color:#fff;}
.btn-navy:hover{background:#0d2237;}
.btn-gold-solid{background:var(--gold);color:#fff;}
.btn-gold-solid:hover{background:#B08A30;}
.btn-green-solid{background:var(--green);color:#fff;}
.btn-green-solid:hover{background:#02A84C;}
.btn-gray{background:#f5f5f5;color:#666;border:1px solid #ddd;}
.btn-gray:hover{background:#eee;}
.btn:disabled{opacity:.5;cursor:not-allowed;}

/* ── 로그 테이블 ── */
.log-table{width:100%;border-collapse:collapse;font-size:13px;}
.log-table th{background:#F8F8F8;padding:11px 16px;text-align:left;color:#999;font-weight:700;font-size:11px;letter-spacing:.1em;text-transform:uppercase;border-bottom:2px solid #f0f0f0;}
.log-table td{padding:11px 16px;border-bottom:1px solid #f8f8f8;color:#444;}
.log-table tr:hover td{background:#FAFBFC;}
.device-tag{display:inline-block;padding:3px 10px;border-radius:12px;font-size:11px;font-weight:700;}
.tag-mobile{background:#EBF5FF;color:#2980B9;}
.tag-desktop{background:#E8F8EE;color:#27AE60;}
.tag-tablet{background:#FFF3E0;color:#E67E22;}

/* 재배포 상태 */
.redeploy-log{margin-top:16px;padding:14px 18px;background:#f9f9f9;border-radius:4px;border-left:3px solid #ddd;font-size:13px;line-height:1.8;display:none;}
.redeploy-log.show{display:block;}
.redeploy-log.ok{border-left-color:var(--green);color:#1A8A4A;background:#F0FFF4;}
.redeploy-log.err{border-left-color:var(--red);color:#C0392B;background:#FEF0EF;}

/* 빈 상태 */
.empty-state{text-align:center;padding:48px 20px;color:#ccc;}
.empty-state .es-icon{font-size:40px;margin-bottom:12px;opacity:.5;}
.empty-state p{font-size:14px;}

/* 토스트 */
.toast{position:fixed;bottom:36px;left:50%;transform:translateX(-50%) translateY(100px);background:#222;color:#fff;padding:13px 28px;font-size:14px;transition:transform .3s cubic-bezier(.34,1.56,.64,1);z-index:9999;border-radius:6px;box-shadow:0 8px 32px rgba(0,0,0,0.3);white-space:nowrap;pointer-events:none;}
.toast.show{transform:translateX(-50%) translateY(0);}
.toast.ok{background:#1A8A4A;}
.toast.err{background:#C0392B;}

/* 반응형 */
@media(max-width:1024px){.stats-row{grid-template-columns:1fr 1fr;}.gal-grid{grid-template-columns:repeat(3,1fr);}}
@media(max-width:768px){
  .sidebar{width:56px;}.sb-brand,.sb-section,.sb-item span,.sb-footer .sb-site-link{display:none;}
  .sb-item{padding:14px;justify-content:center;}.main{margin-left:56px;}
  .content{padding:20px 16px;}.topbar{padding:0 20px;}
  .stats-row{grid-template-columns:1fr 1fr;gap:10px;}.gal-grid{grid-template-columns:1fr 1fr;}
  .fg-row{grid-template-columns:1fr;}.tab-row{gap:4px;}
}
</style>
</head>
<body>

<!-- 로그인 -->
<div class="login-wrap" id="loginWrap">
  <div class="login-box">
    <div class="login-logo">${siteName}</div>
    <div class="login-title">사장님 페이지 🔐</div>
    <div class="lf"><label>아이디</label><input type="text" id="loginId" placeholder="아이디 입력" onkeydown="if(event.key==='Enter')doLogin()"></div>
    <div class="lf"><label>비밀번호</label><input type="password" id="loginPw" placeholder="비밀번호 입력" onkeydown="if(event.key==='Enter')doLogin()"></div>
    <div class="login-err" id="loginErr">아이디 또는 비밀번호가 올바르지 않습니다.</div>
    <button class="login-btn" onclick="doLogin()">로그인</button>
  </div>
</div>

<!-- 관리자 -->
<div class="admin-wrap" id="adminWrap">
  <div class="sidebar">
    <div class="sb-brand">
      <div class="sb-brand-name">${siteName}</div>
      <div class="sb-brand-sub">관리자 패널</div>
    </div>
    <div class="sb-nav">
      <div class="sb-section">메뉴</div>
      <div class="sb-item active" id="menu-dashboard" onclick="showPanel('dashboard',this)"><span class="ic">🏠</span><span>대시보드</span></div>
      <div class="sb-item" id="menu-stats" onclick="showPanel('stats',this)"><span class="ic">📊</span><span>방문자 통계</span></div>
      <div class="sb-item" id="menu-reservation" onclick="showPanel('reservation',this)"><span class="ic">📅</span><span>예약 관리</span></div>
      <div class="sb-item" id="menu-gallery" onclick="showPanel('gallery',this)"><span class="ic">🖼️</span><span>갤러리 관리</span></div>
      <div class="sb-item" id="menu-info" onclick="showPanel('info',this)"><span class="ic">⚙️</span><span>기본 정보</span></div>
    </div>
    <div class="sb-footer">
      <a href="index.html" target="_blank" class="sb-site-link">🌐 홈페이지 보기</a>
      <button class="sb-logout" onclick="logout()">로그아웃</button>
    </div>
  </div>

  <div class="main">
    <div class="topbar">
      <div class="topbar-title" id="topbarTitle">대시보드</div>
      <div class="topbar-right">
        <span class="topbar-badge" id="waitBadge">대기 0</span>
        <a href="index.html" target="_blank" class="btn btn-gray" style="font-size:13px;padding:8px 16px;text-decoration:none">🌐 홈페이지</a>
      </div>
    </div>

    <div class="content">

      <!-- ① 대시보드 -->
      <div class="panel active" id="panel-dashboard">
        <div class="stats-row">
          <div class="stat-box" data-icon="📋"><div class="stat-num" id="st-total">-</div><div class="stat-label">전체 예약</div></div>
          <div class="stat-box c-blue" data-icon="⏳"><div class="stat-num" id="st-waiting">-</div><div class="stat-label">대기 중</div></div>
          <div class="stat-box c-green" data-icon="📅"><div class="stat-num" id="st-today">-</div><div class="stat-label">오늘 예약</div></div>
          <div class="stat-box c-red" data-icon="👀"><div class="stat-num" id="st-visit-today">-</div><div class="stat-label">오늘 방문자</div></div>
        </div>
        <div class="card">
          <div class="card-head"><h3>📈 최근 7일 방문자</h3><button class="btn btn-gray" style="padding:6px 14px;font-size:12px" onclick="loadStats()">🔄</button></div>
          <div class="card-body"><div id="miniChart"><div class="chart-empty"><div class="icon">📊</div><p>로딩 중...</p></div></div></div>
        </div>
        <div class="card">
          <div class="card-head"><h3>📅 최근 예약</h3><button class="btn btn-gray" style="padding:6px 14px;font-size:12px" onclick="loadReservations()">🔄</button></div>
          <div class="card-body" id="dash-rsv-list"><div class="empty-state"><div class="es-icon">📭</div><p>로딩 중...</p></div></div>
        </div>
      </div>

      <!-- ② 방문자 통계 -->
      <div class="panel" id="panel-stats">
        <div class="stats-row">
          <div class="stat-box" data-icon="👥"><div class="stat-num" id="vs-total">-</div><div class="stat-label">전체 방문</div></div>
          <div class="stat-box c-blue" data-icon="🌅"><div class="stat-num" id="vs-today">-</div><div class="stat-label">오늘 방문</div></div>
          <div class="stat-box c-green" data-icon="📆"><div class="stat-num" id="vs-week">-</div><div class="stat-label">이번 주</div></div>
          <div class="stat-box c-red" data-icon="📱"><div class="stat-num" id="vs-mobile">-%</div><div class="stat-label">모바일 비율</div></div>
        </div>
        <div class="card">
          <div class="card-head">
            <h3>📊 최근 30일 방문자</h3>
            <button class="btn btn-gray" style="padding:6px 14px;font-size:12px" onclick="loadStats()">🔄 새로고침</button>
          </div>
          <div class="card-body">
            <div class="chart-container" id="bigChart"><div class="chart-empty"><div class="icon">📊</div><p>로딩 중...</p></div></div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">
          <div class="card">
            <div class="card-head"><h3>📄 페이지별 방문</h3></div>
            <div class="card-body" id="page-stats"><div class="chart-empty" style="height:120px"><p>로딩 중...</p></div></div>
          </div>
          <div class="card">
            <div class="card-head"><h3>📱 기기별 방문</h3></div>
            <div class="card-body" id="device-stats"><div class="chart-empty" style="height:120px"><p>로딩 중...</p></div></div>
          </div>
        </div>
        <div class="card" style="margin-top:20px">
          <div class="card-head"><h3>📋 최근 방문 로그 (50건)</h3></div>
          <div style="overflow-x:auto">
            <table class="log-table">
              <thead><tr><th>시간</th><th>페이지</th><th>기기</th><th>브라우저</th></tr></thead>
              <tbody id="visit-log-body"><tr><td colspan="4" style="text-align:center;padding:24px;color:#ccc">로딩 중...</td></tr></tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- ③ 예약 관리 -->
      <div class="panel" id="panel-reservation">
        <div class="card">
          <div class="card-head">
            <h3>📅 예약 관리</h3>
            <div style="display:flex;align-items:center;gap:10px">
              <span id="rsv-count" style="font-size:13px;color:#aaa"></span>
              <button class="btn btn-gray" style="padding:7px 14px;font-size:12px" onclick="loadReservations()">🔄 새로고침</button>
            </div>
          </div>
          <div class="card-body">
            <div class="tab-row">
              <button class="tab-btn active" onclick="setRsvFilter('all',this)">전체</button>
              <button class="tab-btn" onclick="setRsvFilter('waiting',this)">⏳ 대기중</button>
              <button class="tab-btn" onclick="setRsvFilter('confirmed',this)">✅ 확정</button>
              <button class="tab-btn" onclick="setRsvFilter('done',this)">✔ 완료</button>
              <button class="tab-btn" onclick="setRsvFilter('cancelled',this)">❌ 취소</button>
            </div>
            <div id="rsv-list"><div class="empty-state"><div class="es-icon">📭</div><p>로딩 중...</p></div></div>
          </div>
        </div>
      </div>

      <!-- ④ 갤러리 -->
      <div class="panel" id="panel-gallery">
        <div class="card">
          <div class="card-head">
            <h3>🖼️ 갤러리 관리</h3>
            <label class="btn btn-gold-solid" style="cursor:pointer">
              + 이미지 추가
              <input type="file" accept="image/*" multiple onchange="uploadImages(this)" style="display:none">
            </label>
          </div>
          <div class="card-body">
            <div class="gal-upload-progress" id="gal-progress">
              <div class="progress-text" id="gal-progress-text">업로드 중...</div>
              <div class="progress-bar-wrap"><div class="progress-bar" id="gal-progress-bar" style="background:var(--gold);width:0%"></div></div>
            </div>
            <div class="gal-grid" id="gal-grid"></div>
          </div>
        </div>
      </div>

      <!-- ⑤ 기본 정보 -->
      <div class="panel" id="panel-info">
        <div class="card">
          <div class="card-head"><h3>⚙️ 기본 정보 수정</h3></div>
          <div class="card-body">
            <div class="fg-row">
              <div class="fg"><label>업체명</label><input type="text" id="i-name" value="${siteName}"><div class="fg-hint">홈페이지 타이틀, 헤더에 표시됩니다</div></div>
              <div class="fg"><label>전화번호</label><input type="text" id="i-phone" value="${d.phone||''}"></div>
            </div>
            <div class="fg"><label>주소</label><input type="text" id="i-address" value="${d.address||''}"></div>
            <div class="fg-row">
              <div class="fg"><label>영업시간</label><input type="text" id="i-hours" value="${d.openHours||''}"></div>
              <div class="fg"><label>휴무일</label><input type="text" id="i-closed" placeholder="예) 매주 월요일 휴무"></div>
            </div>
            <div class="fg"><label>주차 안내</label><input type="text" id="i-parking" value="${d.parking||''}"></div>
            <div class="fg"><label>슬로건 / 한줄소개</label><input type="text" id="i-slogan" value="${d.slogan||''}"></div>
            <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:8px">
              <button class="btn btn-gold-solid" onclick="saveInfo()">💾 저장</button>
              <button class="btn btn-green-solid" id="redeployBtn" onclick="redeployPage()">🚀 저장 + 홈페이지 즉시 반영</button>
            </div>
            <div class="redeploy-log" id="redeploy-log"></div>
          </div>
        </div>
      </div>

    </div><!-- /content -->
  </div><!-- /main -->
</div><!-- /admin-wrap -->

<div class="toast" id="toast"></div>

<!-- 사이트 데이터 (재배포용) -->
<script id="siteData" type="application/json">${siteDataJson}</script>

<script>
/* ── 상수 ── */
var ADMIN_ID='${adminId}', ADMIN_PW='${adminPw}';
var SB_URL='${ADMIN_SUPABASE_URL}', SB_KEY='${ADMIN_SUPABASE_KEY}', BUCKET='${ADMIN_BUCKET}';
var SITE_ID='${siteId}';

/* ── 상태 ── */
var _rsvAll=[], _rsvFilter='all';
var _galUrls=JSON.parse(localStorage.getItem('gal_'+SITE_ID)||'[]');

/* ══════════════════════════════════
   로그인
══════════════════════════════════ */
function doLogin(){
  var id=(document.getElementById('loginId').value||'').trim();
  var pw=document.getElementById('loginPw').value||'';
  if(id===ADMIN_ID && pw===ADMIN_PW){
    sessionStorage.setItem('adm_'+SITE_ID,'1');
    document.getElementById('loginErr').style.display='none';
    bootAdmin();
  } else {
    document.getElementById('loginErr').style.display='block';
    document.getElementById('loginPw').value='';
    document.getElementById('loginPw').focus();
  }
}
function bootAdmin(){
  document.getElementById('loginWrap').style.display='none';
  document.getElementById('adminWrap').style.display='flex';
  loadReservations();
  renderGallery();
  loadStats();
}
function logout(){sessionStorage.removeItem('adm_'+SITE_ID);location.reload();}
if(sessionStorage.getItem('adm_'+SITE_ID)==='1') bootAdmin();

/* ══════════════════════════════════
   패널 전환
══════════════════════════════════ */
var PANEL_NAMES={dashboard:'대시보드',stats:'방문자 통계',reservation:'예약 관리',gallery:'갤러리',info:'기본 정보'};
function showPanel(name, el){
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.sb-item').forEach(i=>i.classList.remove('active'));
  var p=document.getElementById('panel-'+name);
  if(p) p.classList.add('active');
  if(el) el.classList.add('active');
  document.getElementById('topbarTitle').textContent = PANEL_NAMES[name]||name;
  if(name==='reservation') renderRsvList();
  if(name==='stats') loadStats();
  if(name==='gallery') renderGallery();
}

/* ══════════════════════════════════
   Supabase 공통
══════════════════════════════════ */
async function sbGet(table, query){
  var url = SB_URL+'/rest/v1/'+table+'?'+query;
  var r = await fetch(url,{
    headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY,'Accept':'application/json'}
  });
  if(!r.ok) throw new Error(r.status+' '+await r.text());
  return r.json();
}
async function sbPatch(table, query, body){
  var r = await fetch(SB_URL+'/rest/v1/'+table+'?'+query,{
    method:'PATCH',
    headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY,'Content-Type':'application/json','Prefer':'return=minimal'},
    body:JSON.stringify(body)
  });
  if(!r.ok) throw new Error(r.status+' '+await r.text());
  return true;
}
async function sbDelete(table, query){
  var r = await fetch(SB_URL+'/rest/v1/'+table+'?'+query,{
    method:'DELETE',
    headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY}
  });
  if(!r.ok) throw new Error(r.status+' '+await r.text());
  return true;
}
async function sbInsert(table, body){
  var r = await fetch(SB_URL+'/rest/v1/'+table,{
    method:'POST',
    headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY,'Content-Type':'application/json','Prefer':'return=representation'},
    body:JSON.stringify(body)
  });
  if(!r.ok) throw new Error(r.status+' '+await r.text());
  return r.json();
}

/* ══════════════════════════════════
   방문자 기록 (홈페이지에서 호출)
══════════════════════════════════ */
async function recordVisit(page){
  var ua=navigator.userAgent;
  var device=/Mobile|Android|iPhone/i.test(ua)?'mobile':/iPad|Tablet/i.test(ua)?'tablet':'desktop';
  var browser=/Edg/i.test(ua)?'Edge':/OPR|Opera/i.test(ua)?'Opera':/Chrome/i.test(ua)?'Chrome':/Firefox/i.test(ua)?'Firefox':/Safari/i.test(ua)?'Safari':'기타';
  try {
    await sbInsert('page_views',{
      site_id:SITE_ID, page:page||'index.html',
      device, browser,
      visit_date:new Date().toISOString().slice(0,10),
      visited_at:new Date().toISOString()
    });
  } catch(e){ /* 테이블 없어도 무시 */ }
}

/* ══════════════════════════════════
   방문자 통계
══════════════════════════════════ */
async function loadStats(){
  var today=new Date().toISOString().slice(0,10);
  var weekAgo=new Date(Date.now()-6*864e5).toISOString().slice(0,10);
  var monthAgo=new Date(Date.now()-29*864e5).toISOString().slice(0,10);

  try {
    var rows = await sbGet('page_views','site_id=eq.'+SITE_ID+'&order=visited_at.desc&limit=2000');
    if(!Array.isArray(rows)) rows=[];

    var todayRows  = rows.filter(r=>r.visit_date===today);
    var weekRows   = rows.filter(r=>r.visit_date>=weekAgo);
    var mobileRows = rows.filter(r=>r.device==='mobile');
    var mobileRate = rows.length ? Math.round(mobileRows.length/rows.length*100) : 0;

    // 카드
    setText('vs-total',  rows.length);
    setText('vs-today',  todayRows.length);
    setText('vs-week',   weekRows.length);
    setText('vs-mobile', mobileRate+'%');
    setText('st-visit-today', todayRows.length);

    // 차트
    buildBarChart('bigChart', rows, 30);
    buildBarChart('miniChart', rows, 7);

    // 페이지별
    buildPageStats(rows);
    // 기기별
    buildDeviceStats(rows);
    // 로그
    buildVisitLog(rows.slice(0,50));

  } catch(e){
    var noData='<div class="chart-empty"><div class="icon">📭</div><p>데이터 없음<br><small style="font-size:11px;color:#ddd">Supabase page_views 테이블 필요</small></p></div>';
    ['bigChart','miniChart'].forEach(id=>{ var el=document.getElementById(id);if(el)el.innerHTML=noData; });
    ['page-stats','device-stats'].forEach(id=>{ var el=document.getElementById(id);if(el)el.innerHTML=noData; });
    var lb=document.getElementById('visit-log-body');
    if(lb) lb.innerHTML='<tr><td colspan="4" style="text-align:center;padding:24px;color:#ccc">데이터 없음</td></tr>';
    setText('vs-total',0);setText('vs-today',0);setText('vs-week',0);setText('vs-mobile','0%');
  }
}

function buildBarChart(wrId, rows, days){
  var el=document.getElementById(wrId);
  if(!el) return;
  var data=[];
  for(var i=days-1;i>=0;i--){
    var d=new Date(Date.now()-i*864e5);
    var ds=d.toISOString().slice(0,10);
    var cnt=rows.filter(r=>r.visit_date===ds).length;
    var lbl='';
    if(days<=7 || i%5===0) lbl=(d.getMonth()+1)+'/'+(d.getDate());
    data.push({ds,cnt,lbl});
  }
  var maxVal=Math.max(...data.map(d=>d.cnt),1);
  var bars=data.map(d=>{
    var h=Math.max(Math.round(d.cnt/maxVal*190),d.cnt>0?6:2);
    var zeroClass=d.cnt===0?' has-zero':'';
    return '<div class="bar-col">'+
      '<div class="bar-inner'+zeroClass+'" style="height:'+h+'px">'+
        '<div class="tooltip">'+d.ds.slice(5)+'<br><b>'+d.cnt+'명</b></div>'+
      '</div>'+
      '<div class="bar-label">'+d.lbl+'</div>'+
    '</div>';
  }).join('');
  el.innerHTML='<div class="bar-chart">'+bars+'</div>';
}

function buildPageStats(rows){
  var el=document.getElementById('page-stats');
  if(!el) return;
  var map={};
  rows.forEach(r=>{ var p=r.page||'index.html'; map[p]=(map[p]||0)+1; });
  var sorted=Object.entries(map).sort((a,b)=>b[1]-a[1]).slice(0,7);
  var max=sorted[0]?sorted[0][1]:1;
  if(!sorted.length){el.innerHTML='<div class="chart-empty" style="height:100px"><p>데이터 없음</p></div>';return;}
  el.innerHTML=sorted.map(([pg,cnt])=>{
    var pct=Math.round(cnt/max*100);
    return '<div class="progress-item">'+
      '<div class="progress-label"><span style="font-size:13px;color:#555">'+pg+'</span><span style="color:#aaa;font-size:12px">'+cnt+'회</span></div>'+
      '<div class="progress-bar-wrap"><div class="progress-bar" style="background:var(--gold);width:'+pct+'%"></div></div>'+
    '</div>';
  }).join('');
}

function buildDeviceStats(rows){
  var el=document.getElementById('device-stats');
  if(!el) return;
  var m=rows.filter(r=>r.device==='mobile').length;
  var d=rows.filter(r=>r.device==='desktop').length;
  var t=rows.filter(r=>r.device==='tablet').length;
  var total=rows.length||1;
  var items=[
    {label:'📱 모바일',cnt:m,color:'#3498DB'},
    {label:'🖥️ 데스크톱',cnt:d,color:'#27AE60'},
    {label:'📟 태블릿',cnt:t,color:'#E67E22'},
  ];
  el.innerHTML=items.map(({label,cnt,color})=>{
    var pct=Math.round(cnt/total*100);
    return '<div class="progress-item">'+
      '<div class="progress-label"><span style="font-size:13px;color:#555">'+label+'</span><span style="color:#aaa;font-size:12px">'+cnt+'명 ('+pct+'%)</span></div>'+
      '<div class="progress-bar-wrap"><div class="progress-bar" style="background:'+color+';width:'+pct+'%"></div></div>'+
    '</div>';
  }).join('');
}

function buildVisitLog(rows){
  var tb=document.getElementById('visit-log-body');
  if(!tb) return;
  if(!rows.length){tb.innerHTML='<tr><td colspan="4" style="text-align:center;padding:24px;color:#ccc">방문 데이터가 없습니다</td></tr>';return;}
  var dc={mobile:'tag-mobile',desktop:'tag-desktop',tablet:'tag-tablet'};
  tb.innerHTML=rows.map(r=>{
    var dt=new Date(r.visited_at);
    var ts=(dt.getMonth()+1)+'/'+dt.getDate()+' '+String(dt.getHours()).padStart(2,'0')+':'+String(dt.getMinutes()).padStart(2,'0');
    var dv=r.device||'desktop';
    return '<tr>'+
      '<td style="color:#888">'+ts+'</td>'+
      '<td><code style="background:#f5f5f5;padding:2px 6px;border-radius:3px;font-size:12px">'+( r.page||'-')+'</code></td>'+
      '<td><span class="device-tag '+(dc[dv]||'tag-desktop')+'">'+dv+'</span></td>'+
      '<td style="color:#888">'+( r.browser||'-')+'</td>'+
    '</tr>';
  }).join('');
}

/* ══════════════════════════════════
   예약 관리
══════════════════════════════════ */
async function loadReservations(){
  try {
    var data = await sbGet('reservations','order=created_at.desc&limit=300');
    _rsvAll = Array.isArray(data) ? data : [];
    updateRsvStats();
    renderRsvList();
    renderDashRsv();
  } catch(e){
    document.getElementById('rsv-list').innerHTML='<div class="empty-state"><div class="es-icon">⚠️</div><p>불러오기 실패: '+e.message+'</p></div>';
    document.getElementById('dash-rsv-list').innerHTML='<div class="empty-state"><div class="es-icon">⚠️</div><p>불러오기 실패</p></div>';
  }
}

function updateRsvStats(){
  var today=new Date().toISOString().slice(0,10);
  var waiting=_rsvAll.filter(r=>r.status==='waiting');
  setText('st-total',_rsvAll.length);
  setText('st-waiting',waiting.length);
  setText('st-today',_rsvAll.filter(r=>(r.date||r.created_at||'').slice(0,10)===today).length);
  var wb=document.getElementById('waitBadge');
  if(wb){wb.textContent='대기 '+waiting.length;wb.style.display=waiting.length>0?'inline-block':'none';}
  var rc=document.getElementById('rsv-count');
  if(rc) rc.textContent='전체 '+_rsvAll.length+'건 / 대기 '+waiting.length+'건';
}

function setRsvFilter(f,el){
  _rsvFilter=f;
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  if(el) el.classList.add('active');
  renderRsvList();
}

var ST_LABEL={waiting:'⏳ 대기중',confirmed:'✅ 확정',done:'✔ 완료',cancelled:'❌ 취소'};
var ST_CLS  ={waiting:'rs-waiting',confirmed:'rs-confirmed',done:'rs-done',cancelled:'rs-cancelled'};

function renderRsvList(){
  var el=document.getElementById('rsv-list');
  if(!el) return;
  var list=_rsvFilter==='all'?_rsvAll:_rsvAll.filter(r=>r.status===_rsvFilter);
  if(!list.length){el.innerHTML='<div class="empty-state"><div class="es-icon">📭</div><p>예약이 없습니다</p></div>';return;}
  el.innerHTML=list.map(r=>rsvItemHtml(r)).join('');
}

function renderDashRsv(){
  var el=document.getElementById('dash-rsv-list');
  if(!el) return;
  var list=_rsvAll.slice(0,5);
  if(!list.length){el.innerHTML='<div class="empty-state"><div class="es-icon">📭</div><p>예약이 없습니다</p></div>';return;}
  el.innerHTML=list.map(r=>rsvItemHtml(r,true)).join('');
}

function rsvItemHtml(r, compact){
  var s=r.status||'waiting';
  var dt=new Date(r.created_at).toLocaleDateString('ko-KR');
  var html='<div class="rsv-item">'+
    '<div class="rsv-top">'+
      '<div>'+
        '<div class="rsv-name">'+(r.name||'이름 없음')+'</div>'+
        '<div class="rsv-meta">'+
          '<span>📞 <a href="tel:'+(r.phone||'').replace(/-/g,'')+'">'+( r.phone||'-')+'</a></span>'+
          (r.date?'<span>📅 '+r.date+(r.time?' '+r.time:'')+'</span>':'')+
          '<span style="color:#ddd">신청 '+dt+'</span>'+
        '</div>'+
      '</div>'+
      '<span class="rsv-status '+(ST_CLS[s]||'rs-waiting')+'">'+(ST_LABEL[s]||s)+'</span>'+
    '</div>';
  if(r.memo) html+='<div class="rsv-memo">💬 '+r.memo+'</div>';
  if(!compact){
    html+='<div class="rsv-actions">'+
      '<button class="rsv-btn btn-confirm" onclick="updateRsv(\''+r.id+'\',\'confirmed\')">✅ 확정</button>'+
      '<button class="rsv-btn btn-done" onclick="updateRsv(\''+r.id+'\',\'done\')">완료</button>'+
      '<button class="rsv-btn btn-cancel" onclick="updateRsv(\''+r.id+'\',\'cancelled\')">❌ 취소</button>'+
      '<button class="rsv-btn btn-delete" onclick="deleteRsv(\''+r.id+'\')">🗑 삭제</button>'+
    '</div>';
  } else {
    html+='<div class="rsv-actions">'+
      '<button class="rsv-btn btn-confirm" onclick="updateRsv(\''+r.id+'\',\'confirmed\')">확정</button>'+
      '<button class="rsv-btn btn-cancel" onclick="updateRsv(\''+r.id+'\',\'cancelled\')">취소</button>'+
    '</div>';
  }
  html+='</div>';
  return html;
}

async function updateRsv(id, status){
  try {
    await sbPatch('reservations','id=eq.'+id,{status});
    var r=_rsvAll.find(x=>x.id==id||x.id===id);
    if(r) r.status=status;
    updateRsvStats(); renderRsvList(); renderDashRsv();
    toast('✅ 상태 변경 완료','ok');
  } catch(e){ toast('❌ 변경 실패: '+e.message,'err'); }
}

async function deleteRsv(id){
  if(!confirm('이 예약을 삭제할까요?')) return;
  try {
    await sbDelete('reservations','id=eq.'+id);
    _rsvAll=_rsvAll.filter(r=>r.id!=id&&r.id!==id);
    updateRsvStats(); renderRsvList(); renderDashRsv();
    toast('🗑 삭제되었습니다');
  } catch(e){ toast('❌ 삭제 실패: '+e.message,'err'); }
}

/* ══════════════════════════════════
   갤러리
══════════════════════════════════ */
function renderGallery(){
  var grid=document.getElementById('gal-grid');
  if(!grid) return;
  grid.innerHTML=_galUrls.map((url,i)=>
    '<div class="gal-item">'+
      '<img src="'+url+'" loading="lazy" onerror="this.src=\'https://placehold.co/400x300/f5f5f5/ccc?text=이미지\'">'+
      '<button class="gal-del" onclick="delImage('+i+')">✕</button>'+
    '</div>'
  ).join('')+
  '<div class="gal-add">'+
    '<div class="gal-add-inner"><div class="plus">+</div><span>이미지 추가</span></div>'+
    '<input type="file" accept="image/*" multiple onchange="uploadImages(this)">'+
  '</div>';
}

function delImage(i){
  if(!confirm('이 이미지를 삭제할까요?')) return;
  _galUrls.splice(i,1);
  localStorage.setItem('gal_'+SITE_ID,JSON.stringify(_galUrls));
  renderGallery();
  toast('🗑 삭제되었습니다');
}

async function uploadImages(input){
  var files=Array.from(input.files);
  if(!files.length) return;
  var progWrap=document.getElementById('gal-progress');
  var progBar=document.getElementById('gal-progress-bar');
  var progText=document.getElementById('gal-progress-text');
  progWrap.style.display='block';
  var success=0;
  for(var i=0;i<files.length;i++){
    var file=files[i];
    progText.textContent='업로드 중... ('+( i+1)+'/'+files.length+') '+file.name;
    progBar.style.width=Math.round((i/files.length)*100)+'%';
    try {
      var ext=(file.name.split('.').pop()||'jpg').toLowerCase();
      var path=SITE_ID+'/gallery/'+Date.now()+'_'+Math.random().toString(36).slice(2)+'.'+ext;
      var res=await fetch(SB_URL+'/storage/v1/object/'+BUCKET+'/'+path,{
        method:'POST',
        headers:{
          'apikey':SB_KEY,
          'Authorization':'Bearer '+SB_KEY,
          'Content-Type':file.type||'image/jpeg',
          'x-upsert':'true'
        },
        body:file
      });
      if(res.ok){
        var publicUrl=SB_URL+'/storage/v1/object/public/'+BUCKET+'/'+path;
        _galUrls.push(publicUrl);
        localStorage.setItem('gal_'+SITE_ID,JSON.stringify(_galUrls));
        renderGallery();
        success++;
      } else {
        var errText=await res.text();
        console.error('업로드 실패:',file.name,errText);
        toast('⚠️ '+file.name+' 업로드 실패','err');
      }
    } catch(e){ toast('❌ '+e.message,'err'); }
  }
  progBar.style.width='100%';
  setTimeout(()=>{ progWrap.style.display='none'; progBar.style.width='0%'; },1200);
  if(success>0) toast('✅ '+success+'개 업로드 완료','ok');
  input.value='';
}

/* ══════════════════════════════════
   기본 정보 저장 + 재배포
══════════════════════════════════ */
function getFormValues(){
  return {
    name:    (document.getElementById('i-name')||{}).value||'',
    phone:   (document.getElementById('i-phone')||{}).value||'',
    address: (document.getElementById('i-address')||{}).value||'',
    hours:   (document.getElementById('i-hours')||{}).value||'',
    closed:  (document.getElementById('i-closed')||{}).value||'',
    parking: (document.getElementById('i-parking')||{}).value||'',
    slogan:  (document.getElementById('i-slogan')||{}).value||'',
  };
}
function saveInfo(){
  localStorage.setItem('info_'+SITE_ID, JSON.stringify(getFormValues()));
  toast('💾 저장되었습니다','ok');
}

async function redeployPage(){
  var btn=document.getElementById('redeployBtn');
  var logEl=document.getElementById('redeploy-log');
  saveInfo();
  var info=getFormValues();

  btn.disabled=true; btn.textContent='🔄 배포 중...';
  logEl.className='redeploy-log show'; logEl.textContent='';
  function log(msg){ logEl.textContent+=msg+'\n'; }

  try {
    log('📋 사이트 데이터 확인 중...');
    var sdEl=document.getElementById('siteData');
    if(!sdEl) throw new Error('사이트 데이터 없음 — master-admin에서 다시 배포해주세요.');
    var sd=JSON.parse(sdEl.textContent);
    var pageFiles=sd.pageFiles||[];
    if(!pageFiles.length) throw new Error('페이지 목록 없음 — master-admin에서 다시 배포해주세요.');

    var hostname=window.location.hostname;
    var workerName=hostname.includes('.workers.dev')
      ? hostname.split('.')[0]
      : SITE_ID.replace(/_/g,'-');

    log('🔍 Worker: '+workerName);
    log('📄 대상 파일: '+pageFiles.join(', '));

    function utf8b64(str){
      var bytes=new TextEncoder().encode(str);
      var bin='';for(var i=0;i<bytes.length;i++) bin+=String.fromCharCode(bytes[i]);
      return btoa(bin);
    }

    var filesBase64={};
    var fails=[];
    for(var i=0;i<pageFiles.length;i++){
      var fname=pageFiles[i];
      log('📥 로드 중... ('+( i+1)+'/'+pageFiles.length+') '+fname);
      try {
        var r=await fetch('/'+fname+'?_nc='+Date.now());
        if(!r.ok) throw new Error('HTTP '+r.status);
        var html=await r.text();
        // 치환
        var pairs=[
          [sd._origName,info.name],[sd._origPhone,info.phone],
          [sd._origAddress,info.address],[sd._origSlogan,info.slogan],
          [sd._origHours,info.hours],[sd._origParking,info.parking],
        ];
        pairs.forEach(function(pair){
          var orig=pair[0], nw=pair[1];
          if(orig&&nw&&orig.trim()&&nw.trim()&&orig!==nw){
            // 단순 문자열 치환 (정규식 없이)
            while(html.indexOf(orig)!==-1){ html=html.split(orig).join(nw); break; }
          }
        });
        filesBase64[fname]=utf8b64(html);
      } catch(e){ fails.push(fname); log('⚠️ '+fname+' 스킵 ('+e.message+')'); }
    }

    if(!Object.keys(filesBase64).length) throw new Error('업데이트할 파일이 없습니다.');
    log('🚀 Cloudflare 배포 중...');

    var masterDomain=sd.masterDomain||'https://kcci-admin.pages.dev';
    var res=await fetch(masterDomain+'/api/deploy',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({projectName:workerName,filesBase64})
    });
    var data=await res.json().catch(()=>({error:'응답 파싱 실패'}));
    if(!res.ok||data.error) throw new Error(data.error||'배포 실패 ('+res.status+')');

    // 원본값 갱신
    sd._origName=info.name||sd._origName;
    sd._origPhone=info.phone||sd._origPhone;
    sd._origAddress=info.address||sd._origAddress;
    sd._origSlogan=info.slogan||sd._origSlogan;
    sd._origHours=info.hours||sd._origHours;
    sd._origParking=info.parking||sd._origParking;
    sdEl.textContent=JSON.stringify(sd);

    log('✅ 배포 완료!'+(fails.length?' (제외: '+fails.join(', ')+')':''));
    logEl.className='redeploy-log show ok';
    toast('✅ 홈페이지 업데이트 완료!','ok');

  } catch(e){
    log('❌ 오류: '+e.message);
    logEl.className='redeploy-log show err';
    toast('❌ '+e.message,'err');
  } finally {
    btn.disabled=false; btn.textContent='🚀 저장 + 홈페이지 즉시 반영';
  }
}

/* ══════════════════════════════════
   유틸
══════════════════════════════════ */
function setText(id,v){ var el=document.getElementById(id); if(el) el.textContent=v; }
var _toastTimer=null;
function toast(msg, type){
  var t=document.getElementById('toast');
  if(!t) return;
  t.textContent=msg;
  t.className='toast show'+(type?' '+type:'');
  clearTimeout(_toastTimer);
  _toastTimer=setTimeout(()=>{t.className='toast';},3200);
}
</script>
</body>
</html>`;
}
