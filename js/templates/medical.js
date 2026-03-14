/* Medical / Oriental Medicine — Natural Wellness (카페 수준 간결 버전) */

function medicalCss(d) {
  return `
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;500;600&family=Noto+Sans+KR:wght@300;400;500&display=swap');
${buildFontSizeCss(d)}
*{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;}
body{font-family:'Noto Sans KR',sans-serif;background:#F8F6F1;color:#2C2C24;overflow-x:hidden;}
:root{--bg:#F8F6F1;--bg2:#EDE8DC;--bg3:#E4EDE4;--dark:#2C2C24;--green:#2D5A3D;--green2:#4A7C5C;--sage:#8AAF8A;--border:#D8D0BC;}
header{position:fixed;top:0;left:0;right:0;z-index:100;height:72px;display:flex;align-items:center;justify-content:space-between;padding:0 56px;background:rgba(248,246,241,0.97);backdrop-filter:blur(20px);border-bottom:1px solid var(--border);}
header.scrolled{box-shadow:0 2px 24px rgba(0,0,0,0.06);}
.logo-area{text-decoration:none;}
.logo-text{font-family:'Noto Serif KR',serif;font-size:18px;color:var(--dark);display:block;letter-spacing:.06em;font-weight:500;line-height:1;}
.logo-sub{font-size:9px;color:var(--green);letter-spacing:.24em;text-transform:uppercase;display:block;margin-top:2px;}
nav{display:flex;gap:36px;}
nav a{font-size:12px;color:rgba(44,44,36,0.5);text-decoration:none;letter-spacing:.16em;font-weight:500;transition:color .2s;}
nav a:hover,nav a.active{color:var(--dark);}
.header-right{display:flex;align-items:center;gap:16px;}
.header-cta{background:var(--green);color:#fff;padding:9px 20px;font-size:11px;text-decoration:none;letter-spacing:.12em;font-weight:600;transition:background .2s;}
.header-cta:hover{background:var(--green2);}
.owner-login-btn{font-size:11px;color:rgba(44,44,36,0.32);text-decoration:none;letter-spacing:.12em;transition:color .2s;}
.owner-login-btn:hover{color:var(--dark);}
.hamburger{display:none;flex-direction:column;gap:6px;cursor:pointer;background:none;border:none;padding:4px;}
.hamburger span{display:block;width:22px;height:1px;background:var(--dark);transition:all .3s;}
.hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
.hamburger.open span:nth-child(2){opacity:0;}
.hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}
.mobile-nav{display:none;position:fixed;top:72px;left:0;right:0;background:var(--bg);z-index:99;flex-direction:column;border-bottom:1px solid var(--border);}
.mobile-nav.open{display:flex;}
.mobile-nav a{font-size:13px;color:var(--dark);text-decoration:none;padding:16px 28px;border-bottom:1px solid var(--border);letter-spacing:.1em;}
.mobile-nav a.rsv{background:var(--green);color:#fff;text-align:center;font-weight:600;}
.floating{position:fixed;bottom:28px;right:24px;display:flex;flex-direction:column;gap:8px;z-index:98;opacity:0;transition:opacity .3s;pointer-events:none;}
.floating.show{opacity:1;pointer-events:all;}
.floating a{padding:12px 20px;font-size:12px;text-decoration:none;display:flex;align-items:center;gap:6px;font-weight:600;}
.f-call{background:var(--dark);color:#fff;} .f-book{background:var(--green);color:#fff;}
.hero{min-height:100vh;position:relative;display:flex;align-items:center;overflow:hidden;}
.hero-bg{position:absolute;inset:0;}
.hero-bg img{width:100%;height:100%;object-fit:cover;display:block;}
.hero-bg::after{content:'';position:absolute;inset:0;background:linear-gradient(105deg,rgba(44,44,36,0.88) 0%,rgba(44,44,36,0.3) 60%,transparent 100%);}
.hero-content{position:relative;z-index:2;padding:0 72px;max-width:660px;}
.hero-label{font-size:9px;letter-spacing:.36em;color:var(--sage);text-transform:uppercase;margin-bottom:24px;display:flex;align-items:center;gap:14px;}
.hero-label::before{content:'';display:block;width:36px;height:1px;background:var(--sage);}
.hero-h1{font-family:'Noto Serif KR',serif;font-size:clamp(40px,var(--fs-hero),80px);line-height:1.15;color:#fff;font-weight:300;margin-bottom:24px;}
.hero-h1 em{font-style:normal;color:var(--sage);font-weight:400;}
.hero-sub{font-size:15px;color:rgba(255,255,255,0.55);line-height:1.9;margin-bottom:40px;font-weight:300;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;}
.btn-green{display:inline-flex;align-items:center;background:var(--green);color:#fff;padding:14px 32px;font-size:12px;letter-spacing:.12em;text-decoration:none;font-weight:600;transition:background .2s;border:none;cursor:pointer;font-family:inherit;}
.btn-green:hover{background:var(--green2);}
.btn-outline{display:inline-flex;align-items:center;border:1px solid rgba(255,255,255,0.3);color:rgba(255,255,255,0.8);padding:13px 32px;font-size:12px;letter-spacing:.12em;text-decoration:none;transition:all .2s;}
.btn-outline:hover{border-color:#fff;color:#fff;}
.btn-outline-dark{display:inline-flex;align-items:center;border:1px solid var(--border);color:var(--dark);padding:13px 32px;font-size:12px;letter-spacing:.12em;text-decoration:none;transition:all .2s;}
.btn-outline-dark:hover{border-color:var(--green);color:var(--green);}
.eyebrow{font-size:9px;letter-spacing:.32em;color:var(--green);text-transform:uppercase;margin-bottom:12px;font-weight:600;}
.sec-title{font-family:'Noto Serif KR',serif;font-size:clamp(26px,var(--fs-section),46px);line-height:1.2;color:var(--dark);font-weight:300;}
.sec-title em{font-style:normal;color:var(--green);font-weight:400;}
.treat-section{padding:90px 56px;background:var(--bg);}
.treat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;margin-top:48px;}
.treat-card{position:relative;overflow:hidden;display:block;text-decoration:none;}
.treat-card::before{content:'';display:block;padding-top:125%;}
.treat-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .7s;filter:saturate(.9);}
.treat-card:hover img{transform:scale(1.05);filter:saturate(1);}
.treat-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(44,44,36,0.92) 0%,transparent 55%);display:flex;flex-direction:column;justify-content:flex-end;padding:28px;}
.treat-tag{font-size:9px;letter-spacing:.22em;color:var(--sage);text-transform:uppercase;margin-bottom:6px;font-weight:600;}
.treat-name{font-family:'Noto Serif KR',serif;font-size:20px;color:#fff;margin-bottom:6px;font-weight:400;}
.treat-desc{font-size:13px;color:rgba(255,255,255,0.5);line-height:1.7;}
.doctor-section{padding:90px 56px;background:var(--bg3);}
.doctor-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin-top:48px;}
.doctor-card{background:#fff;display:flex;overflow:hidden;}
.doctor-img{width:180px;flex-shrink:0;overflow:hidden;}
.doctor-img img{width:100%;height:100%;object-fit:cover;object-position:top;display:block;transition:transform .7s;}
.doctor-card:hover .doctor-img img{transform:scale(1.04);}
.doctor-info{padding:32px 28px;display:flex;flex-direction:column;justify-content:center;}
.doctor-title{font-size:9px;letter-spacing:.26em;color:var(--green);text-transform:uppercase;margin-bottom:8px;font-weight:600;}
.doctor-name{font-family:'Noto Serif KR',serif;font-size:22px;color:var(--dark);margin-bottom:14px;font-weight:400;}
.doctor-line{width:32px;height:1px;background:var(--green);margin-bottom:14px;}
.doctor-spec{font-size:12px;color:#888;line-height:2;}
.review-section{padding:90px 56px;background:var(--bg2);}
.review-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:48px;}
.review-card{background:#fff;padding:32px 28px;border-bottom:3px solid transparent;transition:border-color .3s;}
.review-card:hover{border-bottom-color:var(--green);}
.review-stars{color:#B5922A;font-size:13px;margin-bottom:14px;}
.review-text{font-size:14px;color:#555;line-height:1.9;font-family:'Noto Serif KR',serif;margin-bottom:18px;font-weight:300;}
.review-who{font-size:11px;letter-spacing:.12em;color:var(--green);font-weight:600;}
.info-section{padding:80px 56px;background:var(--bg);}
.info-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:40px;}
.info-box{padding:28px;border-left:3px solid var(--green);background:rgba(45,90,61,0.04);}
.info-head{font-size:11px;letter-spacing:.16em;color:var(--green);margin-bottom:10px;font-weight:600;}
.info-val{font-size:14px;line-height:1.9;color:#666;}
footer{background:#1A1F1A;padding:64px 56px 32px;}
.foot-top{display:grid;grid-template-columns:2fr 1fr 1fr;gap:48px;padding-bottom:40px;margin-bottom:28px;border-bottom:1px solid rgba(255,255,255,0.07);}
.foot-brand{font-family:'Noto Serif KR',serif;font-size:20px;color:#fff;margin-bottom:12px;font-weight:400;}
.foot-desc{font-size:13px;line-height:2;color:rgba(255,255,255,0.3);}
.foot-head{font-size:9px;letter-spacing:.24em;color:var(--sage);text-transform:uppercase;margin-bottom:16px;font-weight:600;}
.foot-links{display:flex;flex-direction:column;gap:10px;}
.foot-links a{font-size:13px;color:rgba(255,255,255,0.35);text-decoration:none;transition:color .2s;}
.foot-links a:hover{color:var(--sage);}
.foot-copy{font-size:12px;color:rgba(255,255,255,0.18);text-align:center;}
.lb-wrap{position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:500;display:none;align-items:center;justify-content:center;}
.lb-wrap.open{display:flex;}
.lb-wrap img{max-width:90vw;max-height:90vh;object-fit:contain;}
.lb-close{position:absolute;top:24px;right:32px;color:rgba(255,255,255,0.5);font-size:28px;cursor:pointer;background:none;border:none;}
.lb-prev,.lb-next{position:absolute;top:50%;transform:translateY(-50%);color:rgba(255,255,255,0.4);font-size:40px;cursor:pointer;background:none;border:none;padding:16px;}
.lb-prev{left:8px;} .lb-next{right:8px;}
@media(max-width:1024px){
  header{padding:0 36px;} .hero-content{padding:0 48px;max-width:100%;}
  .treat-section,.doctor-section,.review-section,.info-section{padding:64px 36px;} footer{padding:48px 36px 24px;}
  .foot-top{grid-template-columns:1fr 1fr;} .doctor-grid{grid-template-columns:1fr;}
}
@media(max-width:768px){
  header{padding:0 20px;height:64px;} nav,.header-right{display:none;} .hamburger{display:flex;} .mobile-nav{top:64px;}
  .hero-content{padding:0 20px;} .hero-h1{font-size:clamp(34px,8vw,56px);}
  .treat-section,.doctor-section,.review-section,.info-section{padding:48px 20px;}
  .treat-grid,.review-grid{grid-template-columns:1fr;} .doctor-card{flex-direction:column;} .doctor-img{width:100%;height:220px;}
  .info-grid{grid-template-columns:1fr;} footer{padding:40px 20px 20px;} .foot-top{grid-template-columns:1fr;gap:28px;}
  .floating{right:12px;}
}`;
}

function medicalHeader(d, activePage) {
  const pages = ['index','treatment','gallery','location','reservation'];
  const labels = ['홈','진료과목','갤러리','오시는길','예약'];
  const nav = pages.map((p,i) => `<a href="${p}.html"${activePage===p?' class="active"':''}>${labels[i]}</a>`).join('');
  const mobileNav = pages.map((p,i) => `<a href="${p}.html"${activePage===p?' class="active"':''}>${labels[i]}</a>`).join('');
  return `<div class="floating" id="floating">
  <a href="tel:${d.phone.replace(/-/g,'')}" class="f-call">📞 전화상담</a>
  <a href="reservation.html" class="f-book">예약하기</a>
</div>
<header id="hdr">
  <a href="index.html" class="logo-area">
    <span class="logo-text">${d.name}</span>
    <span class="logo-sub">${d.nameEn}</span>
  </a>
  <nav>${nav}</nav>
  <div class="header-right">
    <a href="reservation.html" class="header-cta">예약하기</a>
    <a href="admin.html" class="owner-login-btn">로그인</a>
  </div>
  <button class="hamburger" id="hamBtn" onclick="toggleNav()"><span></span><span></span><span></span></button>
</header>
<div class="mobile-nav" id="mobileNav">
  ${mobileNav}
  <a href="reservation.html" class="rsv">예약하기</a>
</div>`;
}

function medicalFooter(d) {
  return `<footer>
  <div class="foot-top">
    <div>
      <div class="foot-brand">${d.name}</div>
      <div class="foot-desc">${d.slogan}<br><br>${d.address}<br>${d.phone}<br>${d.openHours}</div>
    </div>
    <div>
      <div class="foot-head">진료 안내</div>
      <div class="foot-links">
        <a href="treatment.html">진료과목</a>
        <a href="gallery.html">갤러리</a>
        <a href="reservation.html">예약하기</a>
        <a href="location.html">오시는 길</a>
      </div>
    </div>
    <div>
      <div class="foot-head">연락처</div>
      <div class="foot-links">
        <a href="tel:${d.phone.replace(/-/g,'')}">${d.phone}</a>
        ${d.blog&&d.blog!=='#'?`<a href="${d.blog}" target="_blank">블로그</a>`:''}
        ${d.insta&&d.insta!=='#'?`<a href="${d.insta}" target="_blank">인스타그램</a>`:''}
      </div>
    </div>
  </div>
  <div class="foot-copy">© ${new Date().getFullYear()} ${d.name}. All Rights Reserved.</div>
</footer>`;
}

function medicalJs() {
  return `
let lbArr=[],lbI=0;
function openLb(i,arr){lbArr=arr||lbArr;lbI=i;document.getElementById('lbImg').src=lbArr[i];document.getElementById('lb').classList.add('open');}
function closeLb(){document.getElementById('lb').classList.remove('open');}
function lbMv(d){lbI=(lbI+d+lbArr.length)%lbArr.length;document.getElementById('lbImg').src=lbArr[lbI];}
document.getElementById('lb').addEventListener('click',function(e){if(e.target===e.currentTarget)closeLb();});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeLb();if(e.key==='ArrowRight')lbMv(1);if(e.key==='ArrowLeft')lbMv(-1);});
window.addEventListener('scroll',function(){document.getElementById('floating').classList.toggle('show',scrollY>300);});
function toggleNav(){document.getElementById('hamBtn').classList.toggle('open');document.getElementById('mobileNav').classList.toggle('open');}
document.addEventListener('click',function(e){var b=document.getElementById('hamBtn'),n=document.getElementById('mobileNav');if(b&&n&&!b.contains(e.target)&&!n.contains(e.target)){b.classList.remove('open');n.classList.remove('open');}});
try{if(typeof recordVisit==='function')recordVisit(location.pathname.split('/').pop()||'index.html');}catch(e){}
`;
}


function buildMedicalNaverWidget(d) {
  if (!d.placeId) return '';
  return `<section style="padding:80px 56px;background:var(--bg2);">
  <div style="text-align:center;margin-bottom:40px">
    <div class="eyebrow" style="justify-content:center">Naver Place</div>
    <h2 class="sec-title" style="margin-top:8px">네이버 플레이스 <em>실시간 정보</em></h2>
    <p style="font-size:14px;color:#888;margin-top:12px">실제 방문 고객들의 생생한 후기를 확인하세요</p>
  </div>
  <div style="max-width:820px;margin:0 auto;box-shadow:0 4px 32px rgba(0,0,0,0.1);overflow:hidden;">
    <iframe src="https://map.naver.com/p/entry/place/${d.placeId}" width="100%" height="480" frameborder="0" allowfullscreen loading="lazy" style="display:block"></iframe>
  </div>
  <div style="text-align:center;margin-top:24px">
    <a href="https://map.naver.com/p/entry/place/${d.placeId}" target="_blank" style="display:inline-flex;align-items:center;gap:8px;background:#03C75A;color:#fff;padding:12px 24px;font-size:14px;font-weight:600;text-decoration:none;">네이버 플레이스에서 더보기 →</a>
  </div>
</section>`;
}

function buildMedicalIndexHtml(d) {
  return `<!DOCTYPE html>
<html lang="ko"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${d.name}</title>
<style>${medicalCss(d)}</style>
</head><body>
${medicalHeader(d,'index')}
<div class="lb-wrap" id="lb"><button class="lb-close" onclick="closeLb()">✕</button><button class="lb-prev" onclick="lbMv(-1)">‹</button><img id="lbImg" src="" alt=""><button class="lb-next" onclick="lbMv(1)">›</button></div>
<section class="hero">
  <div class="hero-bg"><img src="${d.h1Img}" alt="${d.name}"></div>
  <div class="hero-content">
    <div class="hero-label">Natural Healing</div>
    <h1 class="hero-h1">${(d.h1Title||'자연으로|치유하다').replace('|','<br><em>')}${(d.h1Title||'자연으로|치유하다').includes('|')?'</em>':''}</h1>
    <p class="hero-sub">${d.slogan}</p>
    <div class="hero-btns">
      <a href="treatment.html" class="btn-green">진료과목 보기</a>
      <a href="reservation.html" class="btn-outline">예약하기</a>
    </div>
  </div>
</section>
<section class="treat-section">
  <div class="eyebrow">Treatments</div>
  <h2 class="sec-title">주요 <em>진료과목</em></h2>
  <div class="treat-grid">
    ${['p1','p2','p3'].map(p=>`<a href="treatment.html" class="treat-card"><img src="${d[p+'Img']}" alt="${d[p+'Name']}"><div class="treat-ov"><div class="treat-tag">${d[p+'Tag']}</div><div class="treat-name">${d[p+'Name']}</div><div class="treat-desc">${d[p+'Desc']}</div></div></a>`).join('')}
  </div>
</section>
<section class="doctor-section">
  <div class="eyebrow">Medical Team</div>
  <h2 class="sec-title">의료진 <em>소개</em></h2>
  <div class="doctor-grid">
    ${['i1','i2'].map(k=>`<div class="doctor-card"><div class="doctor-img"><img src="${d[k+'Img']}" alt="${d[k+'Name']}"></div><div class="doctor-info"><div class="doctor-title">${d[k+'Role']}</div><div class="doctor-name">${d[k+'Name']}</div><div class="doctor-line"></div><div class="doctor-spec">${(d[k+'Cert']||'').replace(/\n/g,' · ')}</div></div></div>`).join('')}
  </div>
</section>
<section class="review-section">
  <div class="eyebrow">Reviews</div>
  <h2 class="sec-title">환자 <em>후기</em></h2>
  <div class="review-grid">
    ${[1,2,3].map(n=>`<div class="review-card"><div class="review-stars">★★★★★</div><p class="review-text">"${d['review'+n]}"</p><div class="review-who">${d['review'+n+'who']||'방문 환자'}</div></div>`).join('')}
  </div>
</section>
${buildMedicalNaverWidget(d)}
<section class="info-section">
  <div class="eyebrow">Visit Us</div>
  <h2 class="sec-title">방문 전 <em>확인하세요</em></h2>
  <div class="info-grid">
    <div class="info-box"><div class="info-head">🕐 진료시간</div><div class="info-val">${d.openHours}</div></div>
    <div class="info-box"><div class="info-head">📍 주소</div><div class="info-val">${d.address}</div></div>
    <div class="info-box"><div class="info-head">🚗 주차</div><div class="info-val">${d.parking}</div></div>
  </div>
  <div style="text-align:center;margin-top:36px"><a href="location.html" class="btn-outline-dark">지도 보기</a></div>
</section>
${medicalFooter(d)}
<script>${medicalJs()}<\/script>
<script>
(function(){
  var SU="https://vugtupipbpfundipgcqc.supabase.co";
  var SK="sb_publishable_tJhW52aAlbyM_0A5_J-yqA_OTIIhV-S";
  var ua=navigator.userAgent;
  var dv=/Mobile|Android|iPhone/i.test(ua)?"mobile":/iPad|Tablet/i.test(ua)?"tablet":"desktop";
  var br=/Edg/i.test(ua)?"Edge":/Chrome/i.test(ua)?"Chrome":/Firefox/i.test(ua)?"Firefox":/Safari/i.test(ua)?"Safari":"etc";
  var pg=location.pathname.split("/").pop()||"index.html";
  fetch(SU+"/rest/v1/page_views",{method:"POST",headers:{"apikey":SK,"Authorization":"Bearer "+SK,"Content-Type":"application/json","Prefer":"return=minimal"},body:JSON.stringify({site_id:"${ (d.url||d.name||'site').replace(/[^a-z0-9]/gi,'_').toLowerCase() }",page:pg,device:dv,browser:br,visit_date:new Date().toISOString().slice(0,10),visited_at:new Date().toISOString()})}).catch(function(){});
})();
<\/script>
</body></html>`;
}

function buildMedicalTreatmentHtml(d) {
  return `<!DOCTYPE html>
<html lang="ko"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>진료과목 | ${d.name}</title>
<style>${medicalCss(d)}
.page-hero{height:45vh;min-height:320px;position:relative;display:flex;align-items:flex-end;padding:48px 56px;overflow:hidden;margin-top:72px;}
.page-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
.page-hero::after{content:'';position:absolute;inset:0;background:linear-gradient(105deg,rgba(44,44,36,0.88) 0%,rgba(44,44,36,0.2) 100%);}
.page-hero-txt{position:relative;z-index:1;color:#fff;}
.breadcrumb{font-size:10px;letter-spacing:.16em;color:rgba(255,255,255,0.4);margin-bottom:10px;}
.breadcrumb a{color:var(--sage);text-decoration:none;}
.page-title{font-family:'Noto Serif KR',serif;font-size:clamp(30px,4vw,52px);font-weight:300;}
.page-title em{font-style:normal;color:var(--sage);font-weight:400;}
.detail-item{display:grid;grid-template-columns:1fr 1fr;gap:0;margin-bottom:4px;}
.detail-item:nth-child(even) .d-img{order:2;} .detail-item:nth-child(even) .d-txt{order:1;}
.d-img{overflow:hidden;aspect-ratio:4/3;}
.d-img img{width:100%;height:100%;object-fit:cover;transition:transform .7s;display:block;}
.detail-item:hover .d-img img{transform:scale(1.04);}
.d-txt{background:var(--bg2);padding:64px 56px;display:flex;flex-direction:column;justify-content:center;}
@media(max-width:768px){.page-hero{padding:36px 20px;margin-top:64px;}.detail-item{grid-template-columns:1fr;}.detail-item:nth-child(even) .d-img,.detail-item:nth-child(even) .d-txt{order:unset;}.d-img{aspect-ratio:16/9;}.d-txt{padding:36px 20px;}}
</style>
</head><body>
${medicalHeader(d,'treatment')}
<div class="page-hero"><img src="${d.h2Img}" alt=""><div class="page-hero-txt"><div class="breadcrumb"><a href="index.html">홈</a> / 진료과목</div><h1 class="page-title">주요 <em>진료과목</em></h1></div></div>
<div style="background:var(--bg)">
  ${['p1','p2','p3'].map((p,i)=>`<div class="detail-item"><div class="d-img"><img src="${d[p+'Img']}" alt="${d[p+'Name']}"></div><div class="d-txt"><div class="eyebrow">0${i+1}. ${d[p+'Tag']}</div><h2 class="sec-title" style="margin-bottom:16px">${d[p+'Name']}</h2><p style="font-size:15px;line-height:2;color:#666;margin-bottom:28px;font-weight:300">${d[p+'Detail']||d[p+'Desc']}</p><a href="reservation.html" class="btn-green">예약하기</a></div></div>`).join('')}
</div>
<section class="doctor-section">
  <div class="eyebrow">Medical Team</div>
  <h2 class="sec-title">의료진 <em>소개</em></h2>
  <div class="doctor-grid">
    ${['i1','i2'].map(k=>`<div class="doctor-card"><div class="doctor-img"><img src="${d[k+'Img']}" alt="${d[k+'Name']}"></div><div class="doctor-info"><div class="doctor-title">${d[k+'Role']}</div><div class="doctor-name">${d[k+'Name']}</div><div class="doctor-line"></div><div class="doctor-spec">${(d[k+'Cert']||'').replace(/\n/g,' · ')}</div></div></div>`).join('')}
  </div>
</section>
${medicalFooter(d)}
<script>${medicalJs()}<\/script>
</body></html>`;
}

function buildMedicalGalleryHtml(d) {
  const imgs = [d.h1Img,d.h2Img,d.h3Img,d.p1Img,d.p2Img,d.p3Img,d.i1Img,d.i2Img];
  return `<!DOCTYPE html>
<html lang="ko"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>갤러리 | ${d.name}</title>
<style>${medicalCss(d)}
.page-hero{height:45vh;min-height:320px;position:relative;display:flex;align-items:flex-end;padding:48px 56px;overflow:hidden;margin-top:72px;}
.page-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
.page-hero::after{content:'';position:absolute;inset:0;background:linear-gradient(105deg,rgba(44,44,36,0.88) 0%,rgba(44,44,36,0.2) 100%);}
.page-hero-txt{position:relative;z-index:1;color:#fff;}
.breadcrumb{font-size:10px;letter-spacing:.16em;color:rgba(255,255,255,0.4);margin-bottom:10px;}
.breadcrumb a{color:var(--sage);text-decoration:none;}
.page-title{font-family:'Noto Serif KR',serif;font-size:clamp(30px,4vw,52px);font-weight:300;}
.page-title em{font-style:normal;color:var(--sage);font-weight:400;}
.gal-grid{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:220px;gap:3px;}
.gal-grid .wide{grid-column:span 2;} .gal-grid .tall{grid-row:span 2;}
.g-item{overflow:hidden;cursor:pointer;}
.g-item img{width:100%;height:100%;object-fit:cover;transition:transform .7s;display:block;}
.g-item:hover img{transform:scale(1.05);}
@media(max-width:768px){.page-hero{padding:36px 20px;margin-top:64px;}.gal-grid{grid-template-columns:1fr 1fr;grid-auto-rows:160px;}.gal-grid .wide,.gal-grid .tall{grid-column:span 1;grid-row:span 1;}}
</style>
</head><body>
${medicalHeader(d,'gallery')}
<div class="lb-wrap" id="lb"><button class="lb-close" onclick="closeLb()">✕</button><button class="lb-prev" onclick="lbMv(-1)">‹</button><img id="lbImg" src="" alt=""><button class="lb-next" onclick="lbMv(1)">›</button></div>
<div class="page-hero"><img src="${d.h3Img}" alt=""><div class="page-hero-txt"><div class="breadcrumb"><a href="index.html">홈</a> / 갤러리</div><h1 class="page-title">병원 <em>갤러리</em></h1></div></div>
<section style="padding:80px 56px;background:var(--bg)">
  <div class="gal-grid">
    ${imgs.map((img,i)=>`<div class="g-item${i===0?' wide tall':''}" onclick="openLb(${i},${JSON.stringify(imgs)})"><img src="${img}" alt=""></div>`).join('')}
  </div>
</section>
${medicalFooter(d)}
<script>${medicalJs()}<\/script>
</body></html>`;
}

function buildMedicalLocationHtml(d) {
  return `<!DOCTYPE html>
<html lang="ko"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>오시는 길 | ${d.name}</title>
<style>${medicalCss(d)}
.page-hero{height:45vh;min-height:320px;position:relative;display:flex;align-items:flex-end;padding:48px 56px;overflow:hidden;margin-top:72px;}
.page-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
.page-hero::after{content:'';position:absolute;inset:0;background:linear-gradient(105deg,rgba(44,44,36,0.88) 0%,rgba(44,44,36,0.2) 100%);}
.page-hero-txt{position:relative;z-index:1;color:#fff;}
.breadcrumb{font-size:10px;letter-spacing:.16em;color:rgba(255,255,255,0.4);margin-bottom:10px;}
.breadcrumb a{color:var(--sage);text-decoration:none;}
.page-title{font-family:'Noto Serif KR',serif;font-size:clamp(30px,4vw,52px);font-weight:300;}
.page-title em{font-style:normal;color:var(--sage);font-weight:400;}
.loc-wrap{padding:80px 56px;display:grid;grid-template-columns:1fr 1fr;gap:72px;}
.map-box{overflow:hidden;min-height:420px;}
.map-box iframe{width:100%;height:100%;min-height:420px;border:none;display:block;}
.loc-info strong{font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:var(--green);display:block;margin-bottom:6px;margin-top:24px;font-weight:600;}
.loc-info strong:first-child{margin-top:0;}
.loc-info p{font-size:14px;line-height:1.8;color:#666;}
@media(max-width:768px){.page-hero{padding:36px 20px;margin-top:64px;}.loc-wrap{grid-template-columns:1fr;padding:48px 20px;}.map-box,.map-box iframe{min-height:280px;}}
</style>
</head><body>
${medicalHeader(d,'location')}
<div class="page-hero"><img src="${d.h1Img}" alt=""><div class="page-hero-txt"><div class="breadcrumb"><a href="index.html">홈</a> / 오시는 길</div><h1 class="page-title">찾아오시는 <em>길</em></h1></div></div>
<div class="loc-wrap">
  <div class="map-box"><iframe src="https://map.naver.com/v5/search/${encodeURIComponent((d.address||d.name).split(' ').slice(0,3).join(' '))}" allowfullscreen loading="lazy"></iframe></div>
  <div class="loc-info">
    <div class="eyebrow">Location</div>
    <h2 class="sec-title" style="margin-bottom:28px">${d.name}</h2>
    <strong>주소</strong><p>${d.address}</p>
    <strong>전화</strong><p><a href="tel:${d.phone.replace(/-/g,'')}" style="color:inherit">${d.phone}</a></p>
    <strong>진료시간</strong><p>${d.openHours}</p>
    <strong>주차</strong><p>${d.parking}</p>
    <br><a href="reservation.html" class="btn-green" style="margin-top:16px">예약하기</a>
  </div>
</div>
${medicalFooter(d)}
<script>${medicalJs()}<\/script>
</body></html>`;
}

function buildMedicalPages(d) {
  return {
    'index.html':     buildMedicalIndexHtml(d),
    'treatment.html': buildMedicalTreatmentHtml(d),
    'gallery.html':   buildMedicalGalleryHtml(d),
    'location.html':  buildMedicalLocationHtml(d),
  };
}
