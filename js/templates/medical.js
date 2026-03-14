/* ============================================================
   Medical / Oriental Medicine Template — Natural Wellness
   컨셉: 오프화이트+딥그린+골드, 보타니컬 내추럴 웰니스
   폰트: Noto Serif KR + Noto Sans KR
   ============================================================ */

function medicalCss(d) {
  return `
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;500;600&family=Noto+Sans+KR:wght@300;400;500;700&family=IM+Fell+English:ital@0;1&display=swap');
${buildFontSizeCss(d)}
*{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;}
body{font-family:'Noto Sans KR',sans-serif;background:#F8F6F1;color:#2C2C24;overflow-x:hidden;}
:root{--bg:#F8F6F1;--bg2:#EDE8DC;--bg3:#E4EDE4;--card:#fff;--dark:#2C2C24;--green:#2D5A3D;--green2:#4A7C5C;--gold:#B5922A;--sage:#8AAF8A;--gray:#888;--border:#D8D0BC;--border2:#C8C4B8;}
header{position:fixed;top:0;left:0;right:0;z-index:100;height:76px;display:flex;align-items:center;justify-content:space-between;padding:0 64px;background:rgba(248,246,241,0.97);backdrop-filter:blur(20px);border-bottom:1px solid var(--border);transition:all .4s;}
header.scrolled{box-shadow:0 4px 30px rgba(0,0,0,0.06);}
.logo-area{display:flex;flex-direction:column;text-decoration:none;gap:3px;}
.logo-text{font-family:'Noto Serif KR',serif;font-size:18px;color:var(--dark);letter-spacing:.06em;font-weight:500;line-height:1;}
.logo-sub{font-size:9px;color:var(--green);letter-spacing:.24em;text-transform:uppercase;}
nav{display:flex;gap:44px;}
nav a{font-size:12px;color:rgba(44,44,36,0.5);text-decoration:none;letter-spacing:.18em;font-weight:500;transition:color .25s;padding-bottom:2px;border-bottom:1px solid transparent;}
nav a:hover,nav a.active{color:var(--dark);border-bottom-color:var(--green);}
.header-right{display:flex;align-items:center;gap:20px;}
.header-tel{font-size:12px;color:var(--green);text-decoration:none;letter-spacing:.06em;font-weight:500;}
.owner-login-btn{font-size:11px;color:rgba(44,44,36,0.38);text-decoration:none;letter-spacing:.14em;text-transform:uppercase;padding:6px 14px;border:1px solid var(--border);transition:all .2s;}
.owner-login-btn:hover{color:var(--dark);border-color:var(--green);}
.hamburger{display:none;flex-direction:column;gap:6px;cursor:pointer;background:none;border:none;padding:4px;}
.hamburger span{display:block;width:22px;height:1px;background:var(--dark);transition:all .3s;}
.hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
.hamburger.open span:nth-child(2){opacity:0;}
.hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}
.mobile-nav{display:none;position:fixed;top:76px;left:0;right:0;background:var(--bg);z-index:99;flex-direction:column;border-bottom:1px solid var(--border);}
.mobile-nav.open{display:flex;}
.mobile-nav a{font-size:13px;color:var(--dark);text-decoration:none;padding:18px 32px;border-bottom:1px solid var(--border);letter-spacing:.12em;}
.mobile-nav a.rsv{background:var(--green);color:#fff;text-align:center;font-weight:600;}
.floating{position:fixed;bottom:28px;right:24px;display:flex;flex-direction:column;gap:8px;z-index:98;opacity:0;transition:opacity .3s;pointer-events:none;}
.floating.show{opacity:1;pointer-events:all;}
.floating a{padding:13px 22px;font-size:12px;text-decoration:none;display:flex;align-items:center;gap:6px;letter-spacing:.04em;font-weight:600;}
.f-call{background:var(--dark);color:#fff;} .f-book{background:var(--green);color:#fff;}
#hero{height:100vh;min-height:700px;position:relative;display:flex;align-items:center;overflow:hidden;}
.hero-bg{position:absolute;inset:0;}
.hero-bg img{width:100%;height:100%;object-fit:cover;display:block;}
.hero-bg::after{content:'';position:absolute;inset:0;background:linear-gradient(105deg,rgba(44,44,36,0.88) 0%,rgba(44,44,36,0.5) 50%,rgba(44,44,36,0.1) 100%);}
.hero-content{position:relative;z-index:2;padding:0 80px;max-width:700px;}
.hero-eyebrow{font-size:10px;letter-spacing:.36em;color:var(--sage);text-transform:uppercase;margin-bottom:24px;display:flex;align-items:center;gap:16px;}
.hero-eyebrow::before{content:'';display:block;width:44px;height:1px;background:var(--sage);}
.hero-h1{font-family:'Noto Serif KR',serif;font-size:clamp(44px,var(--fs-hero),84px);line-height:1.15;color:#fff;font-weight:300;margin-bottom:24px;}
.hero-h1 em{font-style:normal;color:var(--sage);font-weight:400;}
.hero-sub{font-size:16px;color:rgba(255,255,255,0.6);line-height:1.9;margin-bottom:44px;font-weight:300;}
.hero-ctas{display:flex;gap:14px;align-items:center;}
.hero-deco{position:absolute;right:80px;top:50%;transform:translateY(-50%);z-index:2;width:320px;height:320px;border:1px solid rgba(138,175,138,0.3);border-radius:50%;display:flex;align-items:center;justify-content:center;}
.hero-deco::before{content:'';position:absolute;inset:20px;border:1px solid rgba(138,175,138,0.2);border-radius:50%;}
.hero-deco-text{font-family:'Noto Serif KR',serif;font-size:13px;color:rgba(255,255,255,0.35);letter-spacing:.1em;text-align:center;line-height:2;}
.btn-green{display:inline-flex;align-items:center;gap:10px;background:var(--green);color:#fff;padding:15px 36px;font-size:12px;font-family:inherit;letter-spacing:.14em;text-decoration:none;font-weight:600;transition:all .25s;border:none;cursor:pointer;}
.btn-green:hover{background:var(--green2);}
.btn-outline-light{display:inline-flex;align-items:center;gap:10px;border:1px solid rgba(255,255,255,0.3);color:rgba(255,255,255,0.8);padding:14px 36px;font-size:12px;letter-spacing:.14em;text-decoration:none;transition:all .25s;font-weight:500;}
.btn-outline-light:hover{border-color:#fff;color:#fff;}
.btn-outline-dark{display:inline-flex;align-items:center;gap:10px;border:1px solid var(--border);color:var(--dark);padding:14px 36px;font-size:12px;letter-spacing:.14em;text-decoration:none;transition:all .25s;font-weight:500;}
.btn-outline-dark:hover{border-color:var(--green);color:var(--green);}
.section-label{font-size:9px;letter-spacing:.32em;color:var(--green);text-transform:uppercase;margin-bottom:14px;display:flex;align-items:center;gap:12px;font-weight:600;}
.section-label::before{content:'';display:block;width:28px;height:1px;background:var(--green);}
.section-title{font-family:'Noto Serif KR',serif;font-size:clamp(30px,var(--fs-section),50px);line-height:1.2;font-weight:300;color:var(--dark);}
.section-title em{font-style:normal;color:var(--green);font-weight:400;}
#philosophy{padding:100px 64px;background:var(--bg);}
.phil-inner{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;}
.phil-img{position:relative;overflow:hidden;}
.phil-img img{width:100%;display:block;transition:transform .8s ease;}
.phil-img:hover img{transform:scale(1.04);}
.phil-badge{position:absolute;bottom:0;right:0;background:var(--green);color:#fff;padding:24px 28px;text-align:center;}
.phil-badge .k{font-family:'Noto Serif KR',serif;font-size:32px;font-weight:300;line-height:1;}
.phil-badge .l{font-size:10px;letter-spacing:.2em;margin-top:6px;opacity:.8;}
.phil-text .section-title{margin-bottom:24px;}
.phil-desc{font-size:15px;line-height:2;color:#666;margin-bottom:32px;font-weight:300;}
.phil-vals{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:36px;}
.phil-val{padding:20px;border-left:2px solid var(--green);background:rgba(45,90,61,0.04);}
.phil-val h4{font-family:'Noto Serif KR',serif;font-size:15px;color:var(--dark);margin-bottom:6px;font-weight:400;}
.phil-val p{font-size:13px;color:#888;line-height:1.7;}
#treatments{padding:100px 64px;background:var(--bg2);}
.treatments-header{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:60px;}
.treat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
.treat-card{position:relative;overflow:hidden;cursor:pointer;text-decoration:none;display:block;}
.treat-card::before{content:'';display:block;padding-top:125%;}
.treat-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .7s ease;filter:saturate(.9);}
.treat-card:hover img{transform:scale(1.05);filter:saturate(1);}
.treat-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(44,44,36,0.92) 0%,rgba(44,44,36,0.15) 55%,transparent 100%);display:flex;flex-direction:column;justify-content:flex-end;padding:32px 28px;}
.treat-num{font-size:10px;letter-spacing:.22em;color:rgba(255,255,255,0.3);margin-bottom:8px;}
.treat-tag{font-size:9px;letter-spacing:.22em;color:var(--sage);text-transform:uppercase;margin-bottom:8px;font-weight:600;}
.treat-name{font-family:'Noto Serif KR',serif;font-size:20px;color:#fff;line-height:1.3;margin-bottom:8px;font-weight:400;}
.treat-desc{font-size:13px;color:rgba(255,255,255,0.55);line-height:1.7;max-height:0;overflow:hidden;transition:max-height .4s ease;}
.treat-card:hover .treat-desc{max-height:80px;}
#doctors{padding:100px 64px;background:var(--bg3);}
.doctors-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:40px;margin-top:56px;}
.doctor-card{background:var(--card);overflow:hidden;display:flex;}
.doctor-img{width:200px;flex-shrink:0;overflow:hidden;}
.doctor-img img{width:100%;height:100%;object-fit:cover;object-position:top;transition:transform .7s ease;display:block;}
.doctor-card:hover .doctor-img img{transform:scale(1.04);}
.doctor-info{padding:36px 32px;display:flex;flex-direction:column;justify-content:center;}
.doctor-title{font-size:9px;letter-spacing:.26em;color:var(--green);text-transform:uppercase;margin-bottom:8px;font-weight:600;}
.doctor-name{font-family:'Noto Serif KR',serif;font-size:24px;color:var(--dark);margin-bottom:16px;font-weight:400;}
.doctor-line{width:36px;height:1px;background:var(--green);margin-bottom:16px;}
.doctor-spec{font-size:12px;color:var(--gray);line-height:2;border-top:1px solid var(--border);padding-top:14px;margin-top:4px;}
#gallery{padding:100px 64px;background:var(--bg);}
.gallery-grid{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:240px;gap:3px;}
.g-item{overflow:hidden;cursor:pointer;}
.g-item.wide{grid-column:span 2;} .g-item.tall{grid-row:span 2;}
.g-item img{width:100%;height:100%;object-fit:cover;transition:transform .7s ease;filter:saturate(.9);}
.g-item:hover img{transform:scale(1.05);filter:saturate(1.1);}
#reviews{padding:100px 64px;background:var(--bg2);}
.reviews-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:56px;}
.review-card{background:var(--card);padding:36px 32px;border-bottom:3px solid transparent;transition:border-color .3s;}
.review-card:hover{border-bottom-color:var(--green);}
.review-stars{display:flex;gap:4px;margin-bottom:16px;}
.review-stars span{font-size:14px;color:var(--gold);}
.review-text{font-size:14px;line-height:1.9;color:#555;font-family:'Noto Serif KR',serif;margin-bottom:20px;font-weight:300;}
.review-author{font-size:11px;letter-spacing:.14em;color:var(--green);text-transform:uppercase;font-weight:600;}
#cta{padding:120px 64px;background:var(--green);text-align:center;}
.cta-deco{font-size:10px;letter-spacing:.36em;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:20px;}
.cta-title{font-family:'Noto Serif KR',serif;font-size:clamp(36px,4vw,60px);color:#fff;margin-bottom:20px;font-weight:300;line-height:1.3;}
.cta-title em{font-style:normal;font-weight:400;}
.cta-sub{font-size:15px;color:rgba(255,255,255,0.65);margin-bottom:48px;font-weight:300;line-height:1.8;}
.btn-white{display:inline-flex;align-items:center;gap:10px;background:#fff;color:var(--green);padding:15px 44px;font-size:12px;letter-spacing:.18em;text-decoration:none;font-weight:700;transition:all .25s;border:none;cursor:pointer;font-family:inherit;}
.btn-white:hover{background:var(--dark);color:#fff;}
footer{background:#1A1F1A;padding:72px 64px 36px;}
.foot-top{display:grid;grid-template-columns:2fr 1fr 1fr;gap:60px;padding-bottom:52px;margin-bottom:36px;border-bottom:1px solid rgba(255,255,255,0.07);}
.foot-brand{font-family:'Noto Serif KR',serif;font-size:20px;color:#fff;margin-bottom:16px;font-weight:400;}
.foot-desc{font-size:13px;line-height:2;color:rgba(255,255,255,0.35);font-weight:300;}
.foot-head{font-size:9px;letter-spacing:.28em;color:var(--sage);text-transform:uppercase;margin-bottom:20px;font-weight:600;}
.foot-links{display:flex;flex-direction:column;gap:12px;}
.foot-links a{font-size:13px;color:rgba(255,255,255,0.4);text-decoration:none;transition:color .2s;}
.foot-links a:hover{color:var(--sage);}
.foot-bottom{display:flex;justify-content:space-between;font-size:12px;color:rgba(255,255,255,0.2);}
.lightbox{position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:500;display:none;align-items:center;justify-content:center;}
.lightbox.open{display:flex;}
.lightbox img{max-width:90vw;max-height:90vh;object-fit:contain;}
.lb-close{position:absolute;top:28px;right:36px;color:rgba(255,255,255,0.5);font-size:28px;cursor:pointer;background:none;border:none;transition:color .2s;}
.lb-close:hover{color:#fff;}
.lb-prev,.lb-next{position:absolute;top:50%;transform:translateY(-50%);color:rgba(255,255,255,0.4);font-size:40px;cursor:pointer;background:none;border:none;padding:16px;transition:color .2s;}
.lb-prev{left:16px;} .lb-next{right:16px;}
.lb-prev:hover,.lb-next:hover{color:#fff;}
#naverplace{padding:60px 64px;background:var(--bg2);}
#location-bar{padding:72px 64px;background:var(--bg);}
.location-inner{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;}
.location-detail strong{font-size:9px;letter-spacing:.22em;text-transform:uppercase;color:var(--green);display:block;margin-bottom:6px;margin-top:28px;font-weight:600;}
.location-detail strong:first-child{margin-top:0;}
.location-detail p{font-size:14px;line-height:1.8;color:#666;}
@media(max-width:1024px){
  header{padding:0 40px;} .hero-content{padding:0 48px;} .hero-deco{display:none;}
  #philosophy{padding:72px 40px;} .phil-inner{grid-template-columns:1fr;gap:48px;}
  #treatments,#doctors,#gallery,#reviews,#cta,#location-bar,#naverplace{padding:72px 40px;}
  .doctors-grid{grid-template-columns:1fr;} footer{padding:56px 40px 28px;} .foot-top{grid-template-columns:1fr 1fr;}
}
@media(max-width:768px){
  header{padding:0 24px;height:64px;} nav,.header-right,.owner-login-btn{display:none;} .hamburger{display:flex;}
  .mobile-nav{top:64px;} .hero-content{padding:0 24px;} .hero-h1{font-size:clamp(36px,9vw,60px);}
  #philosophy,#treatments,#doctors,#gallery,#reviews,#cta,#location-bar,#naverplace{padding:56px 24px;}
  .treat-grid,.reviews-grid{grid-template-columns:1fr;} .treatments-header{flex-direction:column;align-items:flex-start;gap:20px;}
  .doctor-card{flex-direction:column;} .doctor-img{width:100%;height:240px;}
  .gallery-grid{grid-template-columns:1fr 1fr;grid-auto-rows:180px;} .g-item.wide,.g-item.tall{grid-column:span 1;grid-row:span 1;}
  .location-inner{grid-template-columns:1fr;} footer{padding:48px 24px 24px;} .foot-top{grid-template-columns:1fr;gap:32px;} .foot-bottom{flex-direction:column;}
  .floating{right:16px;} .phil-vals{grid-template-columns:1fr;}
}`;
}

function medicalHeader(d, activePage) {
  const pages = ['index','treatment','gallery','location'];
  const labels = ['홈','진료과목','갤러리','오시는길'];
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
    <a href="tel:${d.phone.replace(/-/g,'')}" class="header-tel">${d.phone}</a>
    <a href="admin.html" class="owner-login-btn">로그인</a>
  </div>
  <button class="hamburger" id="hamBtn" onclick="toggleNav()" aria-label="메뉴"><span></span><span></span><span></span></button>
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
        ${d.blog && d.blog!=='#' ? `<a href="${d.blog}" target="_blank">블로그</a>` : ''}
        ${d.insta && d.insta!=='#' ? `<a href="${d.insta}" target="_blank">인스타그램</a>` : ''}
      </div>
    </div>
  </div>
  <div class="foot-bottom">
    <span>© ${new Date().getFullYear()} ${d.name}. All Rights Reserved.</span>
    <span>${d.address}</span>
  </div>
</footer>`;
}

function medicalJs() {
  return `
let lbItems=[], lbCur=0;
function openLb(i,arr){if(arr)lbItems=arr;lbCur=i;document.getElementById('lbImg').src=lbItems[i]||'';document.getElementById('lb').classList.add('open');}
function closeLb(){document.getElementById('lb').classList.remove('open');}
function lbMove(d){lbCur=(lbCur+d+lbItems.length)%lbItems.length;document.getElementById('lbImg').src=lbItems[lbCur];}
document.getElementById('lb')?.addEventListener('click',e=>{if(e.target===e.currentTarget)closeLb();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLb();if(e.key==='ArrowRight')lbMove(1);if(e.key==='ArrowLeft')lbMove(-1);});
window.addEventListener('scroll',()=>{
  document.getElementById('hdr')?.classList.toggle('scrolled',window.scrollY>60);
  document.getElementById('floating')?.classList.toggle('show',window.scrollY>300);
});
function toggleNav(){document.getElementById('hamBtn')?.classList.toggle('open');document.getElementById('mobileNav')?.classList.toggle('open');}
document.addEventListener('click',e=>{
  const btn=document.getElementById('hamBtn'),nav=document.getElementById('mobileNav');
  if(btn&&nav&&!btn.contains(e.target)&&!nav.contains(e.target)){btn.classList.remove('open');nav.classList.remove('open');}
});`;
}

function buildMedicalNaverWidget(d) {
  if (!d.placeId) return '';
  return `<section id="naverplace" style="padding:80px 64px;background:#EDE8DC;">
  <div style="max-width:1000px;margin:0 auto">
    <div class="section-label">Naver Place</div>
    <h2 class="section-title" style="margin-bottom:40px">스마트플레이스 <em>리뷰</em></h2>
    <div id="naver-place-widget" style="min-height:300px;background:#fff;padding:20px;box-shadow:0 2px 20px rgba(0,0,0,0.06)"></div>
  </div>
  <script>(function(){var s=document.createElement('script');s.src='https://place.map.naver.com/widget/v1/${d.placeId}?lang=ko';s.async=true;document.getElementById('naver-place-widget').appendChild(s);})();<\/script>
</section>`;
}

function buildMedicalIndexHtml(d) {
  const css = medicalCss(d);
  const header = medicalHeader(d, 'index');
  const footer = medicalFooter(d);
  const js = medicalJs();
  const imgs = [d.h1Img,d.h2Img,d.h3Img,d.p1Img,d.p2Img,d.p3Img];
  const imgJson = JSON.stringify(imgs);
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${d.name}</title>
<style>${css}</style>
</head>
<body>
${header}
<div class="lightbox" id="lb">
  <button class="lb-close" onclick="closeLb()">✕</button>
  <button class="lb-prev" onclick="lbMove(-1)">‹</button>
  <img id="lbImg" src="" alt="">
  <button class="lb-next" onclick="lbMove(1)">›</button>
</div>
<section id="hero">
  <div class="hero-bg"><img src="${d.h1Img}" alt="${d.name}"></div>
  <div class="hero-content">
    <div class="hero-eyebrow">Natural Healing</div>
    <h1 class="hero-h1">${(d.h1Title||'자연으로|치유하다').replace('|','<br><em>')}${(d.h1Title||'자연으로|치유하다').includes('|') ? '</em>' : ''}</h1>
    <p class="hero-sub">${d.slogan}</p>
    <div class="hero-ctas">
      <a href="reservation.html" class="btn-green">예약하기</a>
      <a href="treatment.html" class="btn-outline-light">진료과목 보기</a>
    </div>
  </div>
  <div class="hero-deco"><div class="hero-deco-text">${d.name}<br>자연 치유</div></div>
</section>
<section id="philosophy">
  <div class="phil-inner">
    <div class="phil-img">
      <img src="${d.h2Img}" alt="${d.name}">
      <div class="phil-badge"><div class="k">自</div><div class="l">자연 치유</div></div>
    </div>
    <div class="phil-text">
      <div class="section-label">Our Philosophy</div>
      <h2 class="section-title">${(d.h2Title||'몸과 마음의|자연 치유').replace('|','<br><em>')}${(d.h2Title||'몸과 마음의|자연 치유').includes('|') ? '</em>' : ''}</h2>
      <p class="phil-desc">${d.slogan}<br><br>${d.address}</p>
      <div class="phil-vals">
        <div class="phil-val"><h4>자연 치료</h4><p>천연 한약재로 근본 치료</p></div>
        <div class="phil-val"><h4>개인 맞춤</h4><p>체질별 맞춤 처방</p></div>
        <div class="phil-val"><h4>전문 의료진</h4><p>경험 풍부한 전문 의사</p></div>
        <div class="phil-val"><h4>통합 케어</h4><p>몸과 마음의 통합 치료</p></div>
      </div>
      <a href="treatment.html" class="btn-outline-dark">진료과목 자세히 보기</a>
    </div>
  </div>
</section>
<section id="treatments">
  <div class="treatments-header">
    <div><div class="section-label">Treatments</div><h2 class="section-title">주요 <em>진료과목</em></h2></div>
    <a href="treatment.html" class="btn-outline-dark">전체 보기</a>
  </div>
  <div class="treat-grid">
    <a href="treatment.html" class="treat-card"><img src="${d.p1Img}" alt="${d.p1Name}"><div class="treat-overlay"><div class="treat-num">01</div><div class="treat-tag">${d.p1Tag}</div><div class="treat-name">${d.p1Name}</div><div class="treat-desc">${d.p1Desc}</div></div></a>
    <a href="treatment.html" class="treat-card"><img src="${d.p2Img}" alt="${d.p2Name}"><div class="treat-overlay"><div class="treat-num">02</div><div class="treat-tag">${d.p2Tag}</div><div class="treat-name">${d.p2Name}</div><div class="treat-desc">${d.p2Desc}</div></div></a>
    <a href="treatment.html" class="treat-card"><img src="${d.p3Img}" alt="${d.p3Name}"><div class="treat-overlay"><div class="treat-num">03</div><div class="treat-tag">${d.p3Tag}</div><div class="treat-name">${d.p3Name}</div><div class="treat-desc">${d.p3Desc}</div></div></a>
  </div>
</section>
<section id="doctors">
  <div><div class="section-label">Medical Team</div><h2 class="section-title">의료진 <em>소개</em></h2></div>
  <div class="doctors-grid">
    <div class="doctor-card"><div class="doctor-img"><img src="${d.i1Img}" alt="${d.i1Name}"></div><div class="doctor-info"><div class="doctor-title">${d.i1Role}</div><div class="doctor-name">${d.i1Name}</div><div class="doctor-line"></div><div class="doctor-spec">${(d.i1Cert||'').replace(/\n/g,' · ')}</div></div></div>
    <div class="doctor-card"><div class="doctor-img"><img src="${d.i2Img}" alt="${d.i2Name}"></div><div class="doctor-info"><div class="doctor-title">${d.i2Role}</div><div class="doctor-name">${d.i2Name}</div><div class="doctor-line"></div><div class="doctor-spec">${(d.i2Cert||'').replace(/\n/g,' · ')}</div></div></div>
  </div>
</section>
<section id="gallery">
  <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:48px"><div><div class="section-label">Gallery</div><h2 class="section-title">병원 <em>갤러리</em></h2></div><a href="gallery.html" class="btn-outline-dark">전체 보기</a></div>
  <div class="gallery-grid">
    <div class="g-item wide tall" onclick="openLb(0,${imgJson})"><img src="${d.h1Img}" alt=""></div>
    <div class="g-item" onclick="openLb(1,${imgJson})"><img src="${d.h2Img}" alt=""></div>
    <div class="g-item" onclick="openLb(2,${imgJson})"><img src="${d.h3Img}" alt=""></div>
    <div class="g-item" onclick="openLb(3,${imgJson})"><img src="${d.p1Img}" alt=""></div>
    <div class="g-item" onclick="openLb(4,${imgJson})"><img src="${d.p2Img}" alt=""></div>
  </div>
</section>
<section id="reviews">
  <div><div class="section-label">Reviews</div><h2 class="section-title">환자 <em>후기</em></h2></div>
  <div class="reviews-grid">
    <div class="review-card"><div class="review-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div><p class="review-text">"${d.review1}"</p><div class="review-author">${d.review1who}</div></div>
    <div class="review-card"><div class="review-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div><p class="review-text">"${d.review2}"</p><div class="review-author">${d.review2who}</div></div>
    <div class="review-card"><div class="review-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div><p class="review-text">"${d.review3}"</p><div class="review-author">${d.review3who}</div></div>
  </div>
</section>
${buildMedicalNaverWidget(d)}
<section id="location-bar">
  <div class="location-inner">
    <div><div class="section-label">Location</div><h2 class="section-title">찾아오시는 <em>길</em></h2></div>
    <div class="location-detail">
      <strong>주소</strong><p>${d.address}</p>
      <strong>전화</strong><p><a href="tel:${d.phone.replace(/-/g,'')}" style="color:inherit">${d.phone}</a></p>
      <strong>진료시간</strong><p>${d.openHours}</p>
      <strong>주차</strong><p>${d.parking}</p>
      <br><a href="location.html" class="btn-outline-dark" style="margin-top:8px">지도 보기</a>
    </div>
  </div>
</section>
<section id="cta">
  <div class="cta-deco">자연과 함께하는 건강한 삶</div>
  <h2 class="cta-title">건강한 <em>내일</em>을<br>시작하세요</h2>
  <p class="cta-sub">${d.slogan}</p>
  <a href="reservation.html" class="btn-white">예약하기</a>
</section>
${footer}
<script>${js}</script>
</body>
</html>`;
}

function buildMedicalTreatmentHtml(d) {
  const css = medicalCss(d);
  const header = medicalHeader(d, 'treatment');
  const footer = medicalFooter(d);
  const js = medicalJs();
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>진료과목 | ${d.name}</title>
<style>${css}
.page-hero{height:50vh;min-height:380px;position:relative;display:flex;align-items:flex-end;padding:56px 64px;overflow:hidden;margin-top:76px;}
.page-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
.page-hero::after{content:'';position:absolute;inset:0;background:linear-gradient(105deg,rgba(44,44,36,0.88) 0%,rgba(44,44,36,0.2) 100%);}
.page-hero-text{position:relative;z-index:1;color:#fff;}
.breadcrumb{font-size:11px;letter-spacing:.16em;color:rgba(255,255,255,0.4);margin-bottom:12px;}
.breadcrumb a{color:var(--sage);text-decoration:none;}
.page-title{font-family:'Noto Serif KR',serif;font-size:clamp(36px,5vw,60px);font-weight:300;}
.page-title em{font-style:normal;color:var(--sage);font-weight:400;}
.treat-detail{background:var(--bg);}
.treat-item{display:grid;grid-template-columns:1fr 1fr;gap:0;margin-bottom:4px;}
.treat-item:nth-child(even) .treat-d-img{order:2;} .treat-item:nth-child(even) .treat-d-txt{order:1;}
.treat-d-img{overflow:hidden;aspect-ratio:4/3;}
.treat-d-img img{width:100%;height:100%;object-fit:cover;transition:transform .7s ease;}
.treat-item:hover .treat-d-img img{transform:scale(1.04);}
.treat-d-txt{background:var(--bg2);padding:72px 64px;display:flex;flex-direction:column;justify-content:center;}
@media(max-width:768px){.page-hero{padding:40px 24px;margin-top:64px;}.treat-item{grid-template-columns:1fr;}.treat-item:nth-child(even) .treat-d-img,.treat-item:nth-child(even) .treat-d-txt{order:unset;}.treat-d-img{aspect-ratio:16/9;}.treat-d-txt{padding:40px 24px;}}
</style>
</head>
<body>
${header}
<div class="page-hero">
  <img src="${d.h2Img}" alt="">
  <div class="page-hero-text"><div class="breadcrumb"><a href="index.html">홈</a> / 진료과목</div><h1 class="page-title">주요 <em>진료과목</em></h1></div>
</div>
<div class="treat-detail">
  <div class="treat-item"><div class="treat-d-img"><img src="${d.p1Img}" alt="${d.p1Name}"></div><div class="treat-d-txt"><div class="section-label">01. ${d.p1Tag}</div><h2 class="section-title" style="margin-bottom:20px">${d.p1Name}</h2><p style="font-size:15px;line-height:2;color:#666;margin-bottom:32px;font-weight:300">${d.p1Detail||d.p1Desc}</p><a href="reservation.html" class="btn-green">예약하기</a></div></div>
  <div class="treat-item"><div class="treat-d-img"><img src="${d.p2Img}" alt="${d.p2Name}"></div><div class="treat-d-txt"><div class="section-label">02. ${d.p2Tag}</div><h2 class="section-title" style="margin-bottom:20px">${d.p2Name}</h2><p style="font-size:15px;line-height:2;color:#666;margin-bottom:32px;font-weight:300">${d.p2Detail||d.p2Desc}</p><a href="reservation.html" class="btn-green">예약하기</a></div></div>
  <div class="treat-item"><div class="treat-d-img"><img src="${d.p3Img}" alt="${d.p3Name}"></div><div class="treat-d-txt"><div class="section-label">03. ${d.p3Tag}</div><h2 class="section-title" style="margin-bottom:20px">${d.p3Name}</h2><p style="font-size:15px;line-height:2;color:#666;margin-bottom:32px;font-weight:300">${d.p3Detail||d.p3Desc}</p><a href="reservation.html" class="btn-green">예약하기</a></div></div>
</div>
<section id="doctors">
  <div><div class="section-label">Medical Team</div><h2 class="section-title">의료진 <em>소개</em></h2></div>
  <div class="doctors-grid">
    <div class="doctor-card"><div class="doctor-img"><img src="${d.i1Img}" alt="${d.i1Name}"></div><div class="doctor-info"><div class="doctor-title">${d.i1Role}</div><div class="doctor-name">${d.i1Name}</div><div class="doctor-line"></div><div class="doctor-spec">${(d.i1Cert||'').replace(/\n/g,' · ')}</div></div></div>
    <div class="doctor-card"><div class="doctor-img"><img src="${d.i2Img}" alt="${d.i2Name}"></div><div class="doctor-info"><div class="doctor-title">${d.i2Role}</div><div class="doctor-name">${d.i2Name}</div><div class="doctor-line"></div><div class="doctor-spec">${(d.i2Cert||'').replace(/\n/g,' · ')}</div></div></div>
  </div>
</section>
${footer}
<script>${js}</script>
</body>
</html>`;
}

function buildMedicalGalleryHtml(d) {
  const css = medicalCss(d);
  const header = medicalHeader(d, 'gallery');
  const footer = medicalFooter(d);
  const js = medicalJs();
  const imgs = [d.h1Img,d.h2Img,d.h3Img,d.p1Img,d.p2Img,d.p3Img,d.i1Img,d.i2Img];
  const imgJson = JSON.stringify(imgs);
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>갤러리 | ${d.name}</title>
<style>${css}
.page-hero{height:50vh;min-height:380px;position:relative;display:flex;align-items:flex-end;padding:56px 64px;overflow:hidden;margin-top:76px;}
.page-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
.page-hero::after{content:'';position:absolute;inset:0;background:linear-gradient(105deg,rgba(44,44,36,0.88) 0%,rgba(44,44,36,0.2) 100%);}
.page-hero-text{position:relative;z-index:1;color:#fff;}
.breadcrumb{font-size:11px;letter-spacing:.16em;color:rgba(255,255,255,0.4);margin-bottom:12px;}
.breadcrumb a{color:var(--sage);text-decoration:none;}
.page-title{font-family:'Noto Serif KR',serif;font-size:clamp(36px,5vw,60px);font-weight:300;}
.page-title em{font-style:normal;color:var(--sage);font-weight:400;}
@media(max-width:768px){.page-hero{padding:40px 24px;margin-top:64px;}}
</style>
</head>
<body>
${header}
<div class="lightbox" id="lb">
  <button class="lb-close" onclick="closeLb()">✕</button>
  <button class="lb-prev" onclick="lbMove(-1)">‹</button>
  <img id="lbImg" src="" alt="">
  <button class="lb-next" onclick="lbMove(1)">›</button>
</div>
<div class="page-hero">
  <img src="${d.h3Img}" alt="">
  <div class="page-hero-text"><div class="breadcrumb"><a href="index.html">홈</a> / 갤러리</div><h1 class="page-title">병원 <em>갤러리</em></h1></div>
</div>
<section id="gallery" style="padding-top:80px"><div class="gallery-grid">${imgs.map((img,i) => `<div class="g-item${i===0?' wide tall':''}" onclick="openLb(${i},${imgJson})"><img src="${img}" alt=""></div>`).join('')}</div></section>
${footer}
<script>${js}</script>
</body>
</html>`;
}

function buildMedicalLocationHtml(d) {
  const css = medicalCss(d);
  const header = medicalHeader(d, 'location');
  const footer = medicalFooter(d);
  const js = medicalJs();
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>오시는 길 | ${d.name}</title>
<style>${css}
.page-hero{height:50vh;min-height:380px;position:relative;display:flex;align-items:flex-end;padding:56px 64px;overflow:hidden;margin-top:76px;}
.page-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
.page-hero::after{content:'';position:absolute;inset:0;background:linear-gradient(105deg,rgba(44,44,36,0.88) 0%,rgba(44,44,36,0.2) 100%);}
.page-hero-text{position:relative;z-index:1;color:#fff;}
.breadcrumb{font-size:11px;letter-spacing:.16em;color:rgba(255,255,255,0.4);margin-bottom:12px;}
.breadcrumb a{color:var(--sage);text-decoration:none;}
.page-title{font-family:'Noto Serif KR',serif;font-size:clamp(36px,5vw,60px);font-weight:300;}
.page-title em{font-style:normal;color:var(--sage);font-weight:400;}
.loc-section{padding:80px 64px;display:grid;grid-template-columns:1fr 1fr;gap:80px;}
.map-wrap{overflow:hidden;min-height:440px;background:#eee;}
.map-wrap iframe{width:100%;height:100%;min-height:440px;border:none;display:block;}
.loc-details strong{font-size:9px;letter-spacing:.22em;text-transform:uppercase;color:var(--green);display:block;margin-bottom:6px;margin-top:28px;font-weight:600;}
.loc-details strong:first-child{margin-top:0;}
.loc-details p{font-size:14px;line-height:1.8;color:#666;}
@media(max-width:768px){.page-hero{padding:40px 24px;margin-top:64px;}.loc-section{grid-template-columns:1fr;padding:48px 24px;}.map-wrap,.map-wrap iframe{min-height:300px;}}
</style>
</head>
<body>
${header}
<div class="page-hero">
  <img src="${d.h1Img}" alt="">
  <div class="page-hero-text"><div class="breadcrumb"><a href="index.html">홈</a> / 오시는 길</div><h1 class="page-title">찾아오시는 <em>길</em></h1></div>
</div>
<div class="loc-section">
  <div class="map-wrap"><iframe src="https://map.naver.com/v5/search/${encodeURIComponent((d.address||d.name).split(' ').slice(0,3).join(' '))}" allowfullscreen loading="lazy"></iframe></div>
  <div class="loc-details">
    <div class="section-label">Location</div>
    <h2 class="section-title" style="margin-bottom:32px">${d.name}</h2>
    <strong>주소</strong><p>${d.address}</p>
    <strong>전화</strong><p><a href="tel:${d.phone.replace(/-/g,'')}" style="color:inherit">${d.phone}</a></p>
    <strong>진료시간</strong><p>${d.openHours}</p>
    <strong>주차</strong><p>${d.parking}</p>
    <br><a href="reservation.html" class="btn-green" style="margin-top:16px">예약하기</a>
  </div>
</div>
${footer}
<script>${js}</script>
</body>
</html>`;
}

function buildMedicalPages(d) {
  return {
    'index.html':     buildMedicalIndexHtml(d),
    'treatment.html': buildMedicalTreatmentHtml(d),
    'gallery.html':   buildMedicalGalleryHtml(d),
    'location.html':  buildMedicalLocationHtml(d),
  };
}
