/* Pilates / Yoga — Bright & Clean (라온 필라테스 스타일) */

function pilatesCss(d) {
  return `
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Noto+Serif+KR:wght@300;400;500&family=Montserrat:wght@300;400;500;600;700&display=swap');
${buildFontSizeCss(d)}
*{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;}
body{font-family:'Noto Sans KR',sans-serif;background:#fff;color:#333;overflow-x:hidden;}
:root{--bg:#fff;--bg2:#F7F9FA;--bg3:#EFF8F8;--dark:#1A1A2E;--teal:#4BBFBF;--teal2:#3AAEAE;--teal-light:#E8F7F7;--gold:#C9A84C;--gray:#888;--border:#E8ECEE;}
/* 상단 바 */
.top-bar{background:var(--teal);color:#fff;padding:8px 56px;display:flex;justify-content:space-between;align-items:center;font-size:12px;}
.top-bar a{color:#fff;text-decoration:none;opacity:.85;}
.top-bar a:hover{opacity:1;}
/* 헤더 */
header{position:sticky;top:0;left:0;right:0;z-index:100;height:72px;display:flex;align-items:center;justify-content:space-between;padding:0 56px;background:#fff;border-bottom:1px solid var(--border);box-shadow:0 2px 12px rgba(0,0,0,0.04);}
.logo-area{text-decoration:none;display:flex;align-items:center;gap:12px;}
.logo-icon{width:44px;height:44px;background:var(--teal);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:18px;font-weight:700;font-family:'Montserrat',sans-serif;letter-spacing:-.02em;flex-shrink:0;}
.logo-texts{display:flex;flex-direction:column;}
.logo-text{font-family:'Noto Serif KR',serif;font-size:17px;color:var(--dark);font-weight:500;line-height:1.2;}
.logo-sub{font-size:9px;color:var(--teal);letter-spacing:.2em;text-transform:uppercase;margin-top:2px;}
nav{display:flex;gap:36px;}
nav a{font-size:14px;color:#555;text-decoration:none;font-weight:500;transition:color .2s;padding-bottom:2px;border-bottom:2px solid transparent;}
nav a:hover,nav a.active{color:var(--teal);border-bottom-color:var(--teal);}
.header-right{display:flex;align-items:center;gap:12px;}
.header-tel{font-size:13px;color:var(--dark);text-decoration:none;font-weight:600;}
.header-cta{background:var(--teal);color:#fff;padding:9px 20px;font-size:13px;text-decoration:none;font-weight:600;border-radius:4px;transition:background .2s;}
.header-cta:hover{background:var(--teal2);}
.owner-login-btn{font-size:11px;color:#bbb;text-decoration:none;transition:color .2s;}
.owner-login-btn:hover{color:var(--teal);}
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:4px;}
.hamburger span{display:block;width:22px;height:2px;background:var(--dark);transition:all .3s;border-radius:2px;}
.hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
.hamburger.open span:nth-child(2){opacity:0;}
.hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}
.mobile-nav{display:none;position:fixed;top:72px;left:0;right:0;background:#fff;z-index:99;flex-direction:column;border-bottom:2px solid var(--teal);box-shadow:0 8px 24px rgba(0,0,0,0.1);}
.mobile-nav.open{display:flex;}
.mobile-nav a{font-size:14px;color:#333;text-decoration:none;padding:16px 28px;border-bottom:1px solid var(--border);font-weight:500;}
.mobile-nav a.rsv{background:var(--teal);color:#fff;text-align:center;}
.floating{position:fixed;bottom:28px;right:24px;display:flex;flex-direction:column;gap:8px;z-index:98;opacity:0;transition:opacity .3s;pointer-events:none;}
.floating.show{opacity:1;pointer-events:all;}
.floating a{padding:12px 20px;font-size:13px;text-decoration:none;display:flex;align-items:center;gap:6px;font-weight:600;border-radius:4px;box-shadow:0 4px 16px rgba(0,0,0,0.15);}
.f-call{background:#333;color:#fff;} .f-book{background:var(--teal);color:#fff;}
/* 히어로 — 밝은 스타일 */
.hero{position:relative;min-height:85vh;display:flex;align-items:center;overflow:hidden;background:var(--dark);}
.hero-bg{position:absolute;inset:0;}
.hero-bg img{width:100%;height:100%;object-fit:cover;display:block;opacity:.55;}
.hero-content{position:relative;z-index:2;padding:0 80px;max-width:680px;}
.hero-label{font-size:11px;letter-spacing:.28em;color:var(--teal);text-transform:uppercase;margin-bottom:20px;font-weight:600;background:rgba(75,191,191,0.15);display:inline-block;padding:6px 14px;border-radius:20px;}
.hero-h1{font-family:'Noto Serif KR',serif;font-size:clamp(38px,var(--fs-hero),72px);line-height:1.2;color:#fff;font-weight:400;margin-bottom:20px;}
.hero-h1 em{font-style:normal;color:var(--teal);font-weight:500;}
.hero-sub{font-size:15px;color:rgba(255,255,255,0.75);line-height:1.9;margin-bottom:36px;font-weight:300;max-width:480px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;}
.hero-dots{position:absolute;bottom:32px;left:80px;display:flex;gap:8px;z-index:2;}
.hero-dots span{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,0.4);}
.hero-dots span.on{background:var(--teal);width:24px;border-radius:4px;}
/* 버튼 */
.btn-teal{display:inline-flex;align-items:center;gap:8px;background:var(--teal);color:#fff;padding:13px 28px;font-size:14px;text-decoration:none;font-weight:600;border-radius:4px;transition:background .2s;border:none;cursor:pointer;font-family:inherit;}
.btn-teal:hover{background:var(--teal2);}
.btn-outline{display:inline-flex;align-items:center;border:2px solid rgba(255,255,255,0.5);color:#fff;padding:11px 28px;font-size:14px;text-decoration:none;font-weight:600;border-radius:4px;transition:all .2s;}
.btn-outline:hover{border-color:#fff;background:rgba(255,255,255,0.1);}
.btn-outline-teal{display:inline-flex;align-items:center;border:2px solid var(--teal);color:var(--teal);padding:11px 28px;font-size:14px;text-decoration:none;font-weight:600;border-radius:4px;transition:all .2s;}
.btn-outline-teal:hover{background:var(--teal);color:#fff;}
/* 공통 */
.eyebrow{font-size:12px;letter-spacing:.24em;color:var(--teal);text-transform:uppercase;margin-bottom:10px;font-weight:600;}
.sec-title{font-family:'Noto Serif KR',serif;font-size:clamp(24px,var(--fs-section),40px);line-height:1.3;color:var(--dark);font-weight:400;}
.sec-title em{font-style:normal;color:var(--teal);font-weight:500;}
/* 프로그램 섹션 */
.prog-section{padding:88px 56px;background:#fff;}
.prog-header{text-align:center;margin-bottom:56px;}
.prog-header .sec-sub{font-size:15px;color:#888;margin-top:12px;line-height:1.7;}
.prog-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;}
.prog-card{background:#fff;border:1px solid var(--border);overflow:hidden;transition:all .3s;cursor:pointer;text-decoration:none;display:block;border-radius:8px;}
.prog-card:hover{box-shadow:0 12px 40px rgba(75,191,191,0.15);transform:translateY(-4px);border-color:var(--teal);}
.prog-img{overflow:hidden;aspect-ratio:4/3;}
.prog-img img{width:100%;height:100%;object-fit:cover;transition:transform .6s;}
.prog-card:hover .prog-img img{transform:scale(1.05);}
.prog-body{padding:24px;}
.prog-tag{font-size:11px;letter-spacing:.16em;color:var(--teal);text-transform:uppercase;font-weight:700;margin-bottom:8px;display:block;}
.prog-name{font-family:'Noto Serif KR',serif;font-size:18px;color:var(--dark);margin-bottom:10px;font-weight:400;}
.prog-desc{font-size:13px;color:#888;line-height:1.8;}
/* 강사 섹션 */
.instr-section{padding:88px 56px;background:var(--bg2);}
.instr-header{text-align:center;margin-bottom:56px;}
.instr-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:28px;}
.instr-card{background:#fff;border-radius:8px;overflow:hidden;display:flex;box-shadow:0 4px 20px rgba(0,0,0,0.06);}
.instr-img{width:200px;flex-shrink:0;overflow:hidden;}
.instr-img img{width:100%;height:100%;object-fit:cover;object-position:top;display:block;transition:transform .6s;}
.instr-card:hover .instr-img img{transform:scale(1.04);}
.instr-info{padding:32px 28px;display:flex;flex-direction:column;justify-content:center;}
.instr-role{font-size:11px;letter-spacing:.2em;color:var(--teal);text-transform:uppercase;font-weight:700;margin-bottom:6px;}
.instr-name{font-family:'Noto Serif KR',serif;font-size:22px;color:var(--dark);margin-bottom:14px;font-weight:400;}
.instr-line{width:32px;height:2px;background:var(--teal);margin-bottom:14px;border-radius:2px;}
.instr-cert{list-style:none;font-size:12px;line-height:2.1;color:#666;}
.instr-cert li::before{content:'✓';color:var(--teal);margin-right:8px;font-size:11px;}
/* 리뷰 */
.review-section{padding:88px 56px;background:var(--teal-light);}
.review-header{text-align:center;margin-bottom:56px;}
.review-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.review-card{background:#fff;padding:32px 28px;border-radius:8px;box-shadow:0 2px 16px rgba(0,0,0,0.06);}
.review-stars{color:var(--teal);font-size:16px;margin-bottom:14px;}
.review-text{font-size:14px;color:#555;line-height:1.9;margin-bottom:20px;}
.review-who{font-size:12px;color:var(--teal);font-weight:700;letter-spacing:.08em;}
/* 정보 */
.info-section{padding:80px 56px;background:#fff;}
.info-inner{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;text-align:center;}
.info-box{padding:36px 24px;}
.info-icon{font-size:36px;margin-bottom:16px;}
.info-head{font-size:13px;letter-spacing:.18em;text-transform:uppercase;color:var(--teal);margin-bottom:10px;font-weight:700;}
.info-val{font-size:14px;line-height:1.9;color:#555;}
/* 푸터 */
footer{background:var(--dark);padding:60px 56px 28px;}
.foot-top{display:grid;grid-template-columns:2fr 1fr 1fr;gap:48px;padding-bottom:36px;margin-bottom:24px;border-bottom:1px solid rgba(255,255,255,0.08);}
.foot-brand{display:flex;align-items:center;gap:10px;margin-bottom:14px;}
.foot-brand-icon{width:36px;height:36px;background:var(--teal);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;font-weight:700;font-family:'Montserrat',sans-serif;flex-shrink:0;}
.foot-brand-name{font-family:'Noto Serif KR',serif;font-size:17px;color:#fff;font-weight:400;}
.foot-desc{font-size:13px;line-height:2;color:rgba(255,255,255,0.35);}
.foot-head{font-size:10px;letter-spacing:.22em;color:var(--teal);text-transform:uppercase;margin-bottom:16px;font-weight:700;}
.foot-links{display:flex;flex-direction:column;gap:10px;}
.foot-links a{font-size:13px;color:rgba(255,255,255,0.4);text-decoration:none;transition:color .2s;}
.foot-links a:hover{color:var(--teal);}
.foot-copy{font-size:12px;color:rgba(255,255,255,0.2);text-align:center;}
/* 라이트박스 */
.lb-wrap{position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:500;display:none;align-items:center;justify-content:center;}
.lb-wrap.open{display:flex;}
.lb-wrap img{max-width:90vw;max-height:90vh;object-fit:contain;}
.lb-close{position:absolute;top:24px;right:32px;color:rgba(255,255,255,0.6);font-size:28px;cursor:pointer;background:none;border:none;}
.lb-prev,.lb-next{position:absolute;top:50%;transform:translateY(-50%);color:rgba(255,255,255,0.4);font-size:44px;cursor:pointer;background:none;border:none;padding:16px;}
.lb-prev{left:8px;} .lb-next{right:8px;}
@media(max-width:1024px){
  .top-bar{padding:6px 32px;} header{padding:0 32px;} .hero-content{padding:0 40px;}
  .prog-section,.instr-section,.review-section,.info-section{padding:64px 32px;} footer{padding:48px 32px 24px;}
  .foot-top{grid-template-columns:1fr 1fr;} .instr-grid{grid-template-columns:1fr;}
}
@media(max-width:768px){
  .top-bar{display:none;} header{padding:0 20px;height:64px;} nav,.header-right{display:none;} .hamburger{display:flex;}
  .mobile-nav{top:64px;} .hero-content{padding:0 24px;} .hero-h1{font-size:clamp(30px,8vw,52px);}
  .prog-section,.instr-section,.review-section,.info-section{padding:52px 20px;}
  .prog-grid,.review-grid{grid-template-columns:1fr;} .instr-card{flex-direction:column;} .instr-img{width:100%;height:220px;}
  .info-inner{grid-template-columns:1fr;gap:16px;} footer{padding:40px 20px 20px;} .foot-top{grid-template-columns:1fr;gap:28px;}
  .floating{right:12px;} .hero-dots{left:24px;}
}`;
}

function pilatesHeader(d, activePage) {
  const pages = ['index','program','gallery','location','reservation'];
  const labels = ['홈','프로그램','갤러리','오시는 길','예약'];
  const nav = pages.map((p,i) => `<a href="${p}.html"${activePage===p?' class="active"':''}>${labels[i]}</a>`).join('');
  const mobileNav = pages.map((p,i) => `<a href="${p}.html"${activePage===p?' class="active"':''}>${labels[i]}</a>`).join('');
  return `<div class="top-bar">
  <span><a href="tel:${d.phone.replace(/-/g,'')}">${d.phone}</a></span>
  <span>${d.openHours}</span>
</div>
<div class="floating" id="floating">
  <a href="tel:${d.phone.replace(/-/g,'')}" class="f-call">📞 전화상담</a>
  <a href="reservation.html" class="f-book">예약하기</a>
</div>
<header id="hdr">
  <a href="index.html" class="logo-area">
    <div class="logo-icon">${d.name.charAt(0)}</div>
    <div class="logo-texts">
      <span class="logo-text">${d.name}</span>
      <span class="logo-sub">${d.nameEn}</span>
    </div>
  </a>
  <nav>${nav}</nav>
  <div class="header-right">
    <a href="tel:${d.phone.replace(/-/g,'')}" class="header-tel">${d.phone}</a>
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

function pilatesFooter(d) {
  return `<footer>
  <div class="foot-top">
    <div>
      <div class="foot-brand">
        <div class="foot-brand-icon">${d.name.charAt(0)}</div>
        <span class="foot-brand-name">${d.name}</span>
      </div>
      <div class="foot-desc">${d.slogan}<br><br>${d.address}<br>${d.phone}<br>${d.openHours}</div>
    </div>
    <div>
      <div class="foot-head">Menu</div>
      <div class="foot-links">
        <a href="program.html">프로그램</a>
        <a href="gallery.html">갤러리</a>
        <a href="reservation.html">예약하기</a>
        <a href="location.html">오시는 길</a>
      </div>
    </div>
    <div>
      <div class="foot-head">Contact</div>
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

function pilatesJs() {
  return `
let lbArr=[],lbI=0;
function openLb(i,arr){lbArr=arr||lbArr;lbI=i;document.getElementById('lbImg').src=lbArr[i];document.getElementById('lb').classList.add('open');}
function closeLb(){document.getElementById('lb').classList.remove('open');}
function lbMv(d){lbI=(lbI+d+lbArr.length)%lbArr.length;document.getElementById('lbImg').src=lbArr[lbI];}
document.getElementById('lb').addEventListener('click',e=>{if(e.target===e.currentTarget)closeLb();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLb();if(e.key==='ArrowRight')lbMv(1);if(e.key==='ArrowLeft')lbMv(-1);});
window.addEventListener('scroll',()=>{document.getElementById('floating').classList.toggle('show',scrollY>300);});
function toggleNav(){document.getElementById('hamBtn').classList.toggle('open');document.getElementById('mobileNav').classList.toggle('open');}
document.addEventListener('click',e=>{const b=document.getElementById('hamBtn'),n=document.getElementById('mobileNav');if(b&&n&&!b.contains(e.target)&&!n.contains(e.target)){b.classList.remove('open');n.classList.remove('open');}});
// 방문자 기록
try{recordVisit(location.pathname.split('/').pop()||'index.html');}catch(e){}`;
}

function buildNaverPlaceWidget(d) {
  if (!d.placeId) return '';
  return `<section style="padding:80px 56px;background:var(--bg3);">
  <div style="text-align:center;margin-bottom:40px">
    <div class="eyebrow">Naver Place</div>
    <h2 class="sec-title" style="margin-top:8px">네이버 플레이스 <em>실시간 정보</em></h2>
    <p style="font-size:14px;color:#888;margin-top:12px">실제 방문 고객들의 생생한 후기를 확인하세요</p>
  </div>
  <div style="max-width:820px;margin:0 auto;border-radius:8px;overflow:hidden;box-shadow:0 4px 32px rgba(0,0,0,0.1);">
    <iframe src="https://map.naver.com/p/entry/place/${d.placeId}" width="100%" height="480" frameborder="0" allowfullscreen loading="lazy" style="display:block"></iframe>
  </div>
  <div style="text-align:center;margin-top:24px">
    <a href="https://map.naver.com/p/entry/place/${d.placeId}" target="_blank" style="display:inline-flex;align-items:center;gap:8px;background:#03C75A;color:#fff;padding:12px 24px;font-size:14px;font-weight:600;text-decoration:none;border-radius:4px;">네이버 플레이스에서 더보기 →</a>
  </div>
</section>`;
}

function buildPilatesIndexHtml(d) {
  return `<!DOCTYPE html>
<html lang="ko"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${d.name}</title>
<style>${pilatesCss(d)}</style>
</head><body>
${pilatesHeader(d,'index')}
<div class="lb-wrap" id="lb"><button class="lb-close" onclick="closeLb()">✕</button><button class="lb-prev" onclick="lbMv(-1)">‹</button><img id="lbImg" src="" alt=""><button class="lb-next" onclick="lbMv(1)">›</button></div>
<section class="hero">
  <div class="hero-bg"><img src="${d.h1Img}" alt="${d.name}"></div>
  <div class="hero-content">
    <span class="hero-label">${d.nameEn}</span>
    <h1 class="hero-h1">${(d.h1Title||'전문적인|서비스').replace('|','<br><em>')}${(d.h1Title||'전문적인|서비스').includes('|')?'</em>':''}</h1>
    <p class="hero-sub">${d.slogan}</p>
    <div class="hero-btns">
      <a href="program.html" class="btn-teal">프로그램 보기 →</a>
      <a href="reservation.html" class="btn-outline">예약하기</a>
    </div>
  </div>
  <div class="hero-dots"><span class="on"></span><span></span><span></span></div>
</section>
<section class="prog-section">
  <div class="prog-header">
    <div class="eyebrow">Our Programs</div>
    <h2 class="sec-title">아름다운 몸의 변화를<br><em>경험해 보세요</em></h2>
    <p class="sec-sub">${d.slogan}</p>
  </div>
  <div class="prog-grid">
    ${['p1','p2','p3'].map(p=>`<a href="program.html" class="prog-card"><div class="prog-img"><img src="${d[p+'Img']}" alt="${d[p+'Name']}"></div><div class="prog-body"><span class="prog-tag">${d[p+'Tag']}</span><div class="prog-name">${d[p+'Name']}</div><div class="prog-desc">${d[p+'Desc']}</div></div></a>`).join('')}
  </div>
</section>
<section class="instr-section">
  <div class="instr-header">
    <div class="eyebrow">Our Team</div>
    <h2 class="sec-title">전문 <em>강사진</em></h2>
  </div>
  <div class="instr-grid">
    ${['i1','i2'].map(k=>`<div class="instr-card"><div class="instr-img"><img src="${d[k+'Img']}" alt="${d[k+'Name']}"></div><div class="instr-info"><div class="instr-role">${d[k+'Role']}</div><div class="instr-name">${d[k+'Name']}</div><div class="instr-line"></div><ul class="instr-cert">${(d[k+'Cert']||'').split('\n').filter(l=>l.trim()).map(l=>`<li>${l}</li>`).join('')}</ul></div></div>`).join('')}
  </div>
</section>
<section class="review-section">
  <div class="review-header">
    <div class="eyebrow">Reviews</div>
    <h2 class="sec-title">고객 <em>후기</em></h2>
  </div>
  <div class="review-grid">
    ${[1,2,3].map(n=>`<div class="review-card"><div class="review-stars">★★★★★</div><p class="review-text">"${d['review'+n]}"</p><div class="review-who">${d['review'+n+'who']||'방문자'}</div></div>`).join('')}
  </div>
</section>
${buildNaverPlaceWidget(d)}
<section class="info-section">
  <div style="text-align:center;margin-bottom:48px">
    <div class="eyebrow">Intro / Schedule / Location</div>
    <h2 class="sec-title">방문 전 <em>확인하세요</em></h2>
  </div>
  <div class="info-inner">
    <div class="info-box"><div class="info-icon">🕐</div><div class="info-head">운영시간</div><div class="info-val">${d.openHours}</div></div>
    <div class="info-box"><div class="info-icon">📍</div><div class="info-head">주소</div><div class="info-val">${d.address}</div></div>
    <div class="info-box"><div class="info-icon">🚗</div><div class="info-head">주차</div><div class="info-val">${d.parking}</div></div>
  </div>
  <div style="text-align:center;margin-top:36px">
    <a href="location.html" class="btn-outline-teal" style="margin-right:12px">지도 보기</a>
    <a href="reservation.html" class="btn-teal">예약하기</a>
  </div>
</section>
${pilatesFooter(d)}
<script>${pilatesJs()}<\/script>
</body></html>`;
}

function buildPilatesProgramHtml(d) {
  return `<!DOCTYPE html>
<html lang="ko"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>프로그램 | ${d.name}</title>
<style>${pilatesCss(d)}
.page-hero{height:40vh;min-height:280px;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;background:var(--dark);}
.page-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.4;}
.page-hero-txt{position:relative;z-index:1;text-align:center;color:#fff;}
.breadcrumb{font-size:12px;color:rgba(255,255,255,0.5);margin-bottom:12px;}
.breadcrumb a{color:var(--teal);text-decoration:none;}
.page-title{font-family:'Noto Serif KR',serif;font-size:clamp(28px,4vw,48px);font-weight:400;}
.page-title em{font-style:normal;color:var(--teal);}
.detail-wrap{padding:80px 56px;background:#fff;}
.detail-item{display:grid;grid-template-columns:1fr 1fr;gap:0;margin-bottom:4px;border-radius:0;overflow:hidden;}
.detail-item:nth-child(even) .d-img{order:2;} .detail-item:nth-child(even) .d-txt{order:1;}
.d-img{overflow:hidden;aspect-ratio:4/3;}
.d-img img{width:100%;height:100%;object-fit:cover;transition:transform .7s;display:block;}
.detail-item:hover .d-img img{transform:scale(1.04);}
.d-txt{background:var(--bg2);padding:56px 52px;display:flex;flex-direction:column;justify-content:center;}
@media(max-width:768px){.page-hero{height:32vh;}.detail-wrap{padding:48px 20px;}.detail-item{grid-template-columns:1fr;}.detail-item:nth-child(even) .d-img,.detail-item:nth-child(even) .d-txt{order:unset;}.d-img{aspect-ratio:16/9;}.d-txt{padding:32px 20px;}}
</style>
</head><body>
${pilatesHeader(d,'program')}
<div class="page-hero"><img src="${d.h2Img}" alt=""><div class="page-hero-txt"><div class="breadcrumb"><a href="index.html">홈</a> / 프로그램</div><h1 class="page-title">전문 <em>프로그램</em></h1></div></div>
<div class="detail-wrap">
  ${['p1','p2','p3'].map((p,i)=>`<div class="detail-item"><div class="d-img"><img src="${d[p+'Img']}" alt="${d[p+'Name']}"></div><div class="d-txt"><div class="eyebrow">0${i+1}. ${d[p+'Tag']}</div><h2 class="sec-title" style="margin-bottom:14px">${d[p+'Name']}</h2><p style="font-size:15px;line-height:1.9;color:#666;margin-bottom:24px">${d[p+'Detail']||d[p+'Desc']}</p><a href="reservation.html" class="btn-teal">예약하기</a></div></div>`).join('')}
</div>
<section class="instr-section">
  <div class="instr-header">
    <div class="eyebrow">Our Team</div>
    <h2 class="sec-title">전문 <em>강사진</em></h2>
  </div>
  <div class="instr-grid">
    ${['i1','i2'].map(k=>`<div class="instr-card"><div class="instr-img"><img src="${d[k+'Img']}" alt="${d[k+'Name']}"></div><div class="instr-info"><div class="instr-role">${d[k+'Role']}</div><div class="instr-name">${d[k+'Name']}</div><div class="instr-line"></div><ul class="instr-cert">${(d[k+'Cert']||'').split('\n').filter(l=>l.trim()).map(l=>`<li>${l}</li>`).join('')}</ul></div></div>`).join('')}
  </div>
</section>
${pilatesFooter(d)}
<script>${pilatesJs()}<\/script>
</body></html>`;
}

function buildPilatesGalleryHtml(d) {
  const imgs = [d.h1Img,d.h2Img,d.h3Img,d.p1Img,d.p2Img,d.p3Img,d.i1Img,d.i2Img];
  return `<!DOCTYPE html>
<html lang="ko"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>갤러리 | ${d.name}</title>
<style>${pilatesCss(d)}
.page-hero{height:40vh;min-height:280px;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;background:var(--dark);}
.page-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.4;}
.page-hero-txt{position:relative;z-index:1;text-align:center;color:#fff;}
.breadcrumb{font-size:12px;color:rgba(255,255,255,0.5);margin-bottom:12px;}
.breadcrumb a{color:var(--teal);text-decoration:none;}
.page-title{font-family:'Noto Serif KR',serif;font-size:clamp(28px,4vw,48px);font-weight:400;}
.page-title em{font-style:normal;color:var(--teal);}
.gal-grid{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:220px;gap:4px;}
.gal-grid .wide{grid-column:span 2;} .gal-grid .tall{grid-row:span 2;}
.g-item{overflow:hidden;cursor:pointer;border-radius:4px;}
.g-item img{width:100%;height:100%;object-fit:cover;transition:transform .6s;display:block;}
.g-item:hover img{transform:scale(1.05);}
@media(max-width:768px){.page-hero{height:32vh;}.gal-grid{grid-template-columns:1fr 1fr;grid-auto-rows:160px;}.gal-grid .wide,.gal-grid .tall{grid-column:span 1;grid-row:span 1;}}
</style>
</head><body>
${pilatesHeader(d,'gallery')}
<div class="lb-wrap" id="lb"><button class="lb-close" onclick="closeLb()">✕</button><button class="lb-prev" onclick="lbMv(-1)">‹</button><img id="lbImg" src="" alt=""><button class="lb-next" onclick="lbMv(1)">›</button></div>
<div class="page-hero"><img src="${d.h3Img}" alt=""><div class="page-hero-txt"><div class="breadcrumb"><a href="index.html">홈</a> / 갤러리</div><h1 class="page-title">스튜디오 <em>갤러리</em></h1></div></div>
<section style="padding:80px 56px;background:#fff">
  <div class="gal-grid">${imgs.map((img,i)=>`<div class="g-item${i===0?' wide tall':''}" onclick="openLb(${i},${JSON.stringify(imgs)})"><img src="${img}" alt=""></div>`).join('')}</div>
</section>
${pilatesFooter(d)}
<script>${pilatesJs()}<\/script>
</body></html>`;
}

function buildPilatesLocationHtml(d) {
  return `<!DOCTYPE html>
<html lang="ko"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>오시는 길 | ${d.name}</title>
<style>${pilatesCss(d)}
.page-hero{height:40vh;min-height:280px;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;background:var(--dark);}
.page-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.4;}
.page-hero-txt{position:relative;z-index:1;text-align:center;color:#fff;}
.breadcrumb{font-size:12px;color:rgba(255,255,255,0.5);margin-bottom:12px;}
.breadcrumb a{color:var(--teal);text-decoration:none;}
.page-title{font-family:'Noto Serif KR',serif;font-size:clamp(28px,4vw,48px);font-weight:400;}
.page-title em{font-style:normal;color:var(--teal);}
.loc-wrap{padding:80px 56px;display:grid;grid-template-columns:1fr 1fr;gap:64px;}
.map-box{overflow:hidden;min-height:400px;border-radius:8px;box-shadow:0 4px 24px rgba(0,0,0,0.1);}
.map-box iframe{width:100%;height:100%;min-height:400px;border:none;display:block;}
.loc-info strong{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--teal);display:block;margin-bottom:6px;margin-top:24px;font-weight:700;}
.loc-info strong:first-child{margin-top:0;}
.loc-info p{font-size:14px;line-height:1.8;color:#555;}
@media(max-width:768px){.page-hero{height:32vh;}.loc-wrap{grid-template-columns:1fr;padding:48px 20px;}.map-box,.map-box iframe{min-height:280px;}}
</style>
</head><body>
${pilatesHeader(d,'location')}
<div class="page-hero"><img src="${d.h1Img}" alt=""><div class="page-hero-txt"><div class="breadcrumb"><a href="index.html">홈</a> / 오시는 길</div><h1 class="page-title">찾아오시는 <em>길</em></h1></div></div>
<div class="loc-wrap">
  <div class="map-box"><iframe src="https://map.naver.com/v5/search/${encodeURIComponent((d.address||d.name).split(' ').slice(0,3).join(' '))}" allowfullscreen loading="lazy"></iframe></div>
  <div class="loc-info">
    <div class="eyebrow">Location</div>
    <h2 class="sec-title" style="margin-bottom:28px">${d.name}</h2>
    <strong>주소</strong><p>${d.address}</p>
    <strong>전화</strong><p><a href="tel:${d.phone.replace(/-/g,'')}" style="color:inherit">${d.phone}</a></p>
    <strong>운영시간</strong><p>${d.openHours}</p>
    <strong>주차</strong><p>${d.parking}</p>
    <div style="margin-top:28px;display:flex;gap:12px;flex-wrap:wrap">
      <a href="reservation.html" class="btn-teal">예약하기</a>
    </div>
  </div>
</div>
${pilatesFooter(d)}
<script>${pilatesJs()}<\/script>
</body></html>`;
}

function buildPilatesPages(d) {
  return {
    'index.html':    buildPilatesIndexHtml(d),
    'program.html':  buildPilatesProgramHtml(d),
    'gallery.html':  buildPilatesGalleryHtml(d),
    'location.html': buildPilatesLocationHtml(d),
  };
}
