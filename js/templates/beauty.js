/* ============================================================
   Beauty / Hair Template — Modern Editorial
   컨셉: 화이트+블랙+핑크포인트, 모던 미니멀 에디토리얼
   폰트: Josefin Sans + Noto Sans KR
   ============================================================ */

function beautyCss(d) {
  return `
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&family=Cormorant:ital,wght@0,400;0,500;1,400&family=Noto+Sans+KR:wght@300;400;500&display=swap');
${buildFontSizeCss(d)}
*{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;}
body{font-family:'Josefin Sans','Noto Sans KR',sans-serif;background:#FAFAFA;color:#111;overflow-x:hidden;}
:root{--bg:#FAFAFA;--bg2:#F5F0F2;--card:#fff;--dark:#111;--rose:#C9727A;--rose2:#E8A4A9;--rose-light:rgba(201,114,122,0.1);--gray:#888;--border:#E8E0E2;--border2:#F0E8EA;}
header{position:fixed;top:0;left:0;right:0;z-index:100;height:72px;display:flex;align-items:center;justify-content:space-between;padding:0 60px;background:rgba(250,250,250,0.97);backdrop-filter:blur(20px);border-bottom:1px solid var(--border);transition:all .3s;}
header.scrolled{box-shadow:0 2px 30px rgba(0,0,0,0.06);}
.logo-area{display:flex;flex-direction:column;text-decoration:none;}
.logo-text{font-family:'Josefin Sans',sans-serif;font-size:18px;font-weight:700;color:var(--dark);letter-spacing:.12em;text-transform:uppercase;line-height:1;}
.logo-sub{font-size:9px;color:var(--rose);letter-spacing:.26em;text-transform:uppercase;margin-top:3px;}
nav{display:flex;gap:40px;}
nav a{font-size:11px;color:rgba(17,17,17,0.45);text-decoration:none;letter-spacing:.22em;text-transform:uppercase;font-weight:600;transition:color .2s;padding-bottom:2px;border-bottom:1px solid transparent;}
nav a:hover,nav a.active{color:var(--dark);border-bottom-color:var(--rose);}
.header-right{display:flex;align-items:center;gap:20px;}
.header-tel{font-size:11px;color:var(--rose);text-decoration:none;letter-spacing:.1em;font-weight:600;}
.owner-login-btn{font-size:10px;color:rgba(17,17,17,0.35);text-decoration:none;letter-spacing:.2em;text-transform:uppercase;padding:6px 14px;border:1px solid var(--border);transition:all .2s;}
.owner-login-btn:hover{color:var(--dark);border-color:var(--rose);}
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:4px;}
.hamburger span{display:block;width:22px;height:1.5px;background:var(--dark);transition:all .3s;}
.hamburger.open span:nth-child(1){transform:translateY(6.5px) rotate(45deg);}
.hamburger.open span:nth-child(2){opacity:0;}
.hamburger.open span:nth-child(3){transform:translateY(-6.5px) rotate(-45deg);}
.mobile-nav{display:none;position:fixed;top:72px;left:0;right:0;background:var(--bg);z-index:99;flex-direction:column;border-bottom:1px solid var(--border);}
.mobile-nav.open{display:flex;}
.mobile-nav a{font-size:12px;color:var(--dark);text-decoration:none;padding:16px 32px;border-bottom:1px solid var(--border);letter-spacing:.18em;text-transform:uppercase;font-weight:600;}
.mobile-nav a.rsv{background:var(--rose);color:#fff;text-align:center;}
.floating{position:fixed;bottom:28px;right:24px;display:flex;flex-direction:column;gap:8px;z-index:98;opacity:0;transition:opacity .3s;pointer-events:none;}
.floating.show{opacity:1;pointer-events:all;}
.floating a{padding:12px 20px;font-size:11px;text-decoration:none;display:flex;align-items:center;gap:6px;letter-spacing:.08em;font-weight:700;}
.f-call{background:#111;color:#fff;} .f-book{background:var(--rose);color:#fff;}
#hero{height:100vh;min-height:640px;position:relative;display:grid;grid-template-columns:1fr 1fr;overflow:hidden;}
.hero-left{background:var(--dark);display:flex;flex-direction:column;justify-content:flex-end;padding:0 72px 80px;position:relative;z-index:1;}
.hero-eyebrow{font-size:9px;letter-spacing:.36em;color:var(--rose2);text-transform:uppercase;margin-bottom:24px;display:flex;align-items:center;gap:14px;}
.hero-eyebrow::before{content:'';display:block;width:36px;height:1px;background:var(--rose2);}
.hero-h1{font-family:'Cormorant',serif;font-size:clamp(52px,var(--fs-hero),96px);line-height:1.0;color:#fff;font-weight:400;margin-bottom:28px;}
.hero-h1 em{font-style:italic;color:var(--rose2);}
.hero-sub{font-size:14px;color:rgba(255,255,255,0.5);line-height:1.9;max-width:420px;margin-bottom:44px;font-weight:300;letter-spacing:.02em;}
.hero-ctas{display:flex;gap:14px;align-items:center;}
.hero-right{position:relative;overflow:hidden;}
.hero-right img{width:100%;height:100%;object-fit:cover;display:block;transition:transform 8s ease;}
#hero:hover .hero-right img{transform:scale(1.04);}
.hero-tag{position:absolute;bottom:40px;left:40px;background:var(--rose);color:#fff;padding:14px 22px;font-size:10px;letter-spacing:.2em;text-transform:uppercase;font-weight:700;}
.btn-rose{display:inline-flex;align-items:center;gap:10px;background:var(--rose);color:#fff;padding:14px 34px;font-size:10px;font-family:inherit;letter-spacing:.2em;text-transform:uppercase;text-decoration:none;font-weight:700;transition:all .25s;border:none;cursor:pointer;}
.btn-rose:hover{background:#AA5A62;}
.btn-outline-dark{display:inline-flex;align-items:center;gap:10px;border:1.5px solid var(--border);color:var(--dark);padding:13px 34px;font-size:10px;letter-spacing:.2em;text-transform:uppercase;text-decoration:none;transition:all .25s;font-weight:700;}
.btn-outline-dark:hover{border-color:var(--rose);color:var(--rose);}
.btn-outline-light{display:inline-flex;align-items:center;gap:10px;border:1px solid rgba(255,255,255,0.3);color:rgba(255,255,255,0.8);padding:13px 34px;font-size:10px;letter-spacing:.2em;text-transform:uppercase;text-decoration:none;transition:all .25s;font-weight:600;}
.btn-outline-light:hover{border-color:#fff;color:#fff;}
.section-label{font-size:9px;letter-spacing:.34em;color:var(--rose);text-transform:uppercase;margin-bottom:14px;display:flex;align-items:center;gap:12px;font-weight:700;}
.section-label::before{content:'';display:block;width:28px;height:1px;background:var(--rose);}
.section-title{font-family:'Cormorant',serif;font-size:clamp(34px,var(--fs-section),56px);line-height:1.1;font-weight:400;color:var(--dark);}
.section-title em{font-style:italic;color:var(--rose);}
#about{display:grid;grid-template-columns:1fr 1fr;min-height:640px;}
.about-text{display:flex;flex-direction:column;justify-content:center;padding:80px 72px;background:var(--bg);}
.about-desc{font-size:15px;line-height:1.9;color:#666;margin:24px 0 36px;font-weight:300;letter-spacing:.01em;}
.about-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-bottom:40px;}
.about-stat{text-align:center;padding:28px 16px;border:1px solid var(--border2);}
.about-stat .num{font-family:'Cormorant',serif;font-size:38px;color:var(--rose);font-weight:400;line-height:1;}
.about-stat .lbl{font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:var(--gray);margin-top:8px;}
.about-img{position:relative;overflow:hidden;}
.about-img img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .8s ease;}
.about-img:hover img{transform:scale(1.04);}
#services{padding:100px 60px;background:var(--bg2);}
.services-header{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:60px;}
.services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
.svc-card{position:relative;overflow:hidden;cursor:pointer;text-decoration:none;display:block;background:var(--dark);}
.svc-card::before{content:'';display:block;padding-top:130%;}
.svc-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .7s ease;opacity:.75;}
.svc-card:hover img{transform:scale(1.06);opacity:.6;}
.svc-overlay{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;padding:32px 28px;}
.svc-tag{font-size:9px;letter-spacing:.24em;color:var(--rose2);text-transform:uppercase;margin-bottom:8px;font-weight:700;}
.svc-name{font-family:'Cormorant',serif;font-size:24px;color:#fff;line-height:1.2;margin-bottom:10px;font-weight:400;}
.svc-desc{font-size:12px;color:rgba(255,255,255,0.55);line-height:1.7;max-height:0;overflow:hidden;transition:max-height .4s ease;letter-spacing:.02em;}
.svc-card:hover .svc-desc{max-height:80px;}
.svc-arrow{font-size:18px;color:var(--rose2);margin-top:16px;opacity:0;transition:opacity .3s;}
.svc-card:hover .svc-arrow{opacity:1;}
#stylists{padding:100px 60px;background:var(--bg);}
.stylists-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:3px;margin-top:56px;}
.stylist-card{position:relative;overflow:hidden;background:var(--dark);}
.stylist-card::before{content:'';display:block;padding-top:120%;}
.stylist-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top;opacity:.8;transition:all .7s ease;}
.stylist-card:hover img{transform:scale(1.04);opacity:.65;}
.stylist-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(17,17,17,0.95) 0%,rgba(17,17,17,0.2) 60%,transparent 100%);display:flex;flex-direction:column;justify-content:flex-end;padding:40px 36px;}
.stylist-role{font-size:9px;letter-spacing:.26em;color:var(--rose2);text-transform:uppercase;margin-bottom:8px;font-weight:700;}
.stylist-name{font-family:'Cormorant',serif;font-size:30px;color:#fff;margin-bottom:16px;font-weight:400;}
.stylist-line{width:0;height:1px;background:var(--rose2);margin-bottom:16px;transition:width .4s ease;}
.stylist-card:hover .stylist-line{width:40px;}
.stylist-cert{font-size:12px;color:rgba(255,255,255,0.5);line-height:1.8;max-height:0;overflow:hidden;transition:max-height .5s ease;}
.stylist-card:hover .stylist-cert{max-height:120px;}
#gallery{padding:100px 60px;background:var(--bg2);}
.gallery-masonry{columns:4;gap:3px;margin-top:48px;}
.g-item{break-inside:avoid;margin-bottom:3px;position:relative;overflow:hidden;cursor:pointer;display:block;}
.g-item img{width:100%;display:block;transition:transform .7s ease;}
.g-item:hover img{transform:scale(1.04);}
.g-overlay{position:absolute;inset:0;background:rgba(17,17,17,0);transition:background .3s;display:flex;align-items:center;justify-content:center;}
.g-item:hover .g-overlay{background:rgba(17,17,17,0.25);}
#reviews{padding:100px 60px;background:var(--dark);}
.reviews-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;margin-top:56px;}
.review-card{background:#1A1A1A;padding:40px 32px;}
.review-quote{font-size:48px;color:var(--rose);line-height:1;margin-bottom:16px;font-family:'Cormorant',serif;}
.review-text{font-size:14px;line-height:1.9;color:rgba(255,255,255,0.6);margin-bottom:24px;font-style:italic;font-family:'Cormorant',serif;}
.review-stars{display:flex;gap:3px;margin-bottom:14px;}
.review-stars span{font-size:12px;color:var(--rose2);}
.review-author{font-size:10px;letter-spacing:.18em;color:var(--rose2);text-transform:uppercase;font-weight:700;}
#cta{padding:120px 60px;background:var(--rose);text-align:center;}
.cta-eyebrow{font-size:9px;letter-spacing:.36em;color:rgba(255,255,255,0.6);text-transform:uppercase;margin-bottom:20px;font-weight:700;}
.cta-title{font-family:'Cormorant',serif;font-size:clamp(40px,4.5vw,72px);color:#fff;margin-bottom:20px;font-weight:400;}
.cta-title em{font-style:italic;}
.cta-sub{font-size:15px;color:rgba(255,255,255,0.7);margin-bottom:48px;letter-spacing:.03em;}
.btn-white{display:inline-flex;align-items:center;gap:10px;background:#fff;color:var(--rose);padding:15px 44px;font-size:10px;letter-spacing:.22em;text-transform:uppercase;text-decoration:none;font-weight:700;transition:all .25s;border:none;cursor:pointer;font-family:inherit;}
.btn-white:hover{background:var(--dark);color:#fff;}
footer{background:#0A0A0A;padding:72px 60px 36px;}
.foot-top{display:grid;grid-template-columns:2fr 1fr 1fr;gap:56px;padding-bottom:48px;margin-bottom:32px;border-bottom:1px solid rgba(255,255,255,0.07);}
.foot-brand{font-family:'Josefin Sans',sans-serif;font-size:18px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#fff;margin-bottom:16px;}
.foot-desc{font-size:13px;line-height:2;color:rgba(255,255,255,0.3);}
.foot-head{font-size:9px;letter-spacing:.28em;color:var(--rose2);text-transform:uppercase;margin-bottom:20px;font-weight:700;}
.foot-links{display:flex;flex-direction:column;gap:12px;}
.foot-links a{font-size:13px;color:rgba(255,255,255,0.35);text-decoration:none;transition:color .2s;}
.foot-links a:hover{color:var(--rose2);}
.foot-bottom{display:flex;justify-content:space-between;font-size:12px;color:rgba(255,255,255,0.18);}
.lightbox{position:fixed;inset:0;background:rgba(0,0,0,0.97);z-index:500;display:none;align-items:center;justify-content:center;}
.lightbox.open{display:flex;}
.lightbox img{max-width:90vw;max-height:90vh;object-fit:contain;}
.lb-close{position:absolute;top:28px;right:36px;color:rgba(255,255,255,0.5);font-size:26px;cursor:pointer;background:none;border:none;transition:color .2s;}
.lb-close:hover{color:#fff;}
.lb-prev,.lb-next{position:absolute;top:50%;transform:translateY(-50%);color:rgba(255,255,255,0.4);font-size:40px;cursor:pointer;background:none;border:none;padding:16px;transition:color .2s;}
.lb-prev{left:16px;} .lb-next{right:16px;}
.lb-prev:hover,.lb-next:hover{color:#fff;}
#naverplace{padding:60px;background:var(--bg2);}
#location-bar{padding:72px 60px;background:var(--bg);}
.location-inner{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;}
.location-detail strong{font-size:9px;letter-spacing:.22em;text-transform:uppercase;color:var(--rose);display:block;margin-bottom:6px;margin-top:28px;font-weight:700;}
.location-detail strong:first-child{margin-top:0;}
.location-detail p{font-size:14px;line-height:1.8;color:#666;}
@media(max-width:1024px){
  header{padding:0 40px;} #hero{grid-template-columns:1fr;} .hero-left{min-height:60vh;padding:0 40px 60px;}
  .hero-right{height:50vh;} #about{grid-template-columns:1fr;} .about-img{height:480px;} .about-text{padding:64px 40px;}
  #services,#stylists,#gallery,#reviews,#cta,#location-bar,#naverplace{padding:72px 40px;}
  .stylists-grid{grid-template-columns:1fr 1fr;} .gallery-masonry{columns:3;} footer{padding:56px 40px 28px;}
  .foot-top{grid-template-columns:1fr 1fr;}
}
@media(max-width:768px){
  header{padding:0 24px;height:64px;} nav,.header-right,.owner-login-btn{display:none;} .hamburger{display:flex;}
  .mobile-nav{top:64px;} #hero{} .hero-left{padding:0 24px 52px;min-height:70vh;} .hero-right{height:40vh;}
  .hero-h1{font-size:clamp(40px,10vw,68px);}
  #about .about-img{height:360px;} .about-text{padding:48px 24px;} .about-stats{grid-template-columns:1fr 1fr 1fr;}
  #services,#stylists,#gallery,#reviews,#cta,#location-bar,#naverplace{padding:56px 24px;}
  .services-grid,.reviews-grid{grid-template-columns:1fr;} .services-header{flex-direction:column;align-items:flex-start;gap:20px;}
  .stylists-grid{grid-template-columns:1fr;} .gallery-masonry{columns:2;}
  .location-inner{grid-template-columns:1fr;} footer{padding:48px 24px 24px;} .foot-top{grid-template-columns:1fr;gap:32px;} .foot-bottom{flex-direction:column;}
  .floating{right:16px;}
}`;
}

function beautyHeader(d, activePage) {
  const pages = ['index','service','gallery','location'];
  const labels = ['Home','Service','Gallery','Location'];
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

function beautyFooter(d) {
  return `<footer>
  <div class="foot-top">
    <div>
      <div class="foot-brand">${d.name}</div>
      <div class="foot-desc">${d.slogan}<br><br>${d.address}<br>${d.phone}<br>${d.openHours}</div>
    </div>
    <div>
      <div class="foot-head">Menu</div>
      <div class="foot-links">
        <a href="service.html">서비스</a>
        <a href="gallery.html">갤러리</a>
        <a href="reservation.html">예약하기</a>
        <a href="location.html">오시는 길</a>
      </div>
    </div>
    <div>
      <div class="foot-head">Contact</div>
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

function beautyJs() {
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

function buildBeautyNaverWidget(d) {
  if (!d.placeId) return '';
  return `<section id="naverplace">
  <div style="max-width:900px;margin:0 auto">
    <div class="section-label">Review</div>
    <h2 class="section-title" style="margin-bottom:32px">네이버 <em>리뷰</em></h2>
    <div id="naver-place-widget"></div>
  </div>
  <script>(function(){var s=document.createElement('script');s.src='https://place.map.naver.com/widget/v1/${d.placeId}?lang=ko';s.async=true;document.getElementById('naver-place-widget').appendChild(s);})();<\/script>
</section>`;
}

function buildBeautyIndexHtml(d) {
  const css = beautyCss(d);
  const header = beautyHeader(d, 'index');
  const footer = beautyFooter(d);
  const js = beautyJs();
  const imgs = [d.h1Img,d.h2Img,d.h3Img,d.p1Img,d.p2Img,d.p3Img,d.i1Img,d.i2Img];
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
  <div class="hero-left">
    <div class="hero-eyebrow">Beauty Salon</div>
    <h1 class="hero-h1">${(d.h1Title||'전문적인|서비스').replace('|','<br><em>')}${(d.h1Title||'전문적인|서비스').includes('|') ? '</em>' : ''}</h1>
    <p class="hero-sub">${d.slogan}</p>
    <div class="hero-ctas">
      <a href="reservation.html" class="btn-rose">예약하기</a>
      <a href="service.html" class="btn-outline-light">서비스 보기</a>
    </div>
  </div>
  <div class="hero-right">
    <img src="${d.h1Img}" alt="${d.name}">
    <div class="hero-tag">Premium Beauty</div>
  </div>
</section>
<section id="about">
  <div class="about-text">
    <div class="section-label">About Us</div>
    <h2 class="section-title">${(d.h2Title||'함께하는|아름다움').replace('|','<br><em>')}${(d.h2Title||'함께하는|아름다움').includes('|') ? '</em>' : ''}</h2>
    <p class="about-desc">${d.slogan}<br><br>${d.address}</p>
    <div class="about-stats">
      <div class="about-stat"><div class="num">1+</div><div class="lbl">Years</div></div>
      <div class="about-stat"><div class="num">100+</div><div class="lbl">Clients</div></div>
      <div class="about-stat"><div class="num">5★</div><div class="lbl">Rating</div></div>
    </div>
    <a href="service.html" class="btn-outline-dark">서비스 자세히 보기</a>
  </div>
  <div class="about-img"><img src="${d.h2Img}" alt="${d.name}"></div>
</section>
<section id="services">
  <div class="services-header">
    <div><div class="section-label">Services</div><h2 class="section-title">주요 <em>서비스</em></h2></div>
    <a href="service.html" class="btn-outline-dark">전체 보기</a>
  </div>
  <div class="services-grid">
    <a href="service.html" class="svc-card"><img src="${d.p1Img}" alt="${d.p1Name}"><div class="svc-overlay"><div class="svc-tag">${d.p1Tag}</div><div class="svc-name">${d.p1Name}</div><div class="svc-desc">${d.p1Desc}</div><div class="svc-arrow">→</div></div></a>
    <a href="service.html" class="svc-card"><img src="${d.p2Img}" alt="${d.p2Name}"><div class="svc-overlay"><div class="svc-tag">${d.p2Tag}</div><div class="svc-name">${d.p2Name}</div><div class="svc-desc">${d.p2Desc}</div><div class="svc-arrow">→</div></div></a>
    <a href="service.html" class="svc-card"><img src="${d.p3Img}" alt="${d.p3Name}"><div class="svc-overlay"><div class="svc-tag">${d.p3Tag}</div><div class="svc-name">${d.p3Name}</div><div class="svc-desc">${d.p3Desc}</div><div class="svc-arrow">→</div></div></a>
  </div>
</section>
<section id="stylists">
  <div><div class="section-label">Our Stylists</div><h2 class="section-title">전문 <em>스타일리스트</em></h2></div>
  <div class="stylists-grid">
    <div class="stylist-card"><img src="${d.i1Img}" alt="${d.i1Name}"><div class="stylist-overlay"><div class="stylist-role">${d.i1Role}</div><div class="stylist-name">${d.i1Name}</div><div class="stylist-line"></div><div class="stylist-cert">${(d.i1Cert||'').replace(/\n/g,' · ')}</div></div></div>
    <div class="stylist-card"><img src="${d.i2Img}" alt="${d.i2Name}"><div class="stylist-overlay"><div class="stylist-role">${d.i2Role}</div><div class="stylist-name">${d.i2Name}</div><div class="stylist-line"></div><div class="stylist-cert">${(d.i2Cert||'').replace(/\n/g,' · ')}</div></div></div>
  </div>
</section>
<section id="gallery">
  <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:48px"><div><div class="section-label">Gallery</div><h2 class="section-title">작업 <em>포트폴리오</em></h2></div><a href="gallery.html" class="btn-outline-dark">전체 보기</a></div>
  <div class="gallery-masonry">
    ${imgs.slice(0,6).map((img,i) => `<div class="g-item" onclick="openLb(${i},${imgJson})"><img src="${img}" alt=""><div class="g-overlay"></div></div>`).join('')}
  </div>
</section>
<section id="reviews">
  <div><div class="section-label" style="color:var(--rose2)"><span style="display:block;width:28px;height:1px;background:var(--rose2);margin-right:12px"></span>Reviews</div><h2 class="section-title" style="color:#fff;margin-top:14px">고객 <em>후기</em></h2></div>
  <div class="reviews-grid">
    <div class="review-card"><div class="review-quote">"</div><p class="review-text">${d.review1}</p><div class="review-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div><div class="review-author">${d.review1who}</div></div>
    <div class="review-card"><div class="review-quote">"</div><p class="review-text">${d.review2}</p><div class="review-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div><div class="review-author">${d.review2who}</div></div>
    <div class="review-card"><div class="review-quote">"</div><p class="review-text">${d.review3}</p><div class="review-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div><div class="review-author">${d.review3who}</div></div>
  </div>
</section>
${buildBeautyNaverWidget(d)}
<section id="location-bar">
  <div class="location-inner">
    <div><div class="section-label">Location</div><h2 class="section-title">찾아오시는 <em>길</em></h2></div>
    <div class="location-detail">
      <strong>주소</strong><p>${d.address}</p>
      <strong>전화</strong><p><a href="tel:${d.phone.replace(/-/g,'')}" style="color:inherit">${d.phone}</a></p>
      <strong>운영시간</strong><p>${d.openHours}</p>
      <strong>주차</strong><p>${d.parking}</p>
      <br><a href="location.html" class="btn-outline-dark" style="margin-top:8px">지도 보기</a>
    </div>
  </div>
</section>
<section id="cta">
  <div class="cta-eyebrow">Book Now</div>
  <h2 class="cta-title">나만의 <em>스타일</em>을 찾아보세요</h2>
  <p class="cta-sub">${d.slogan}</p>
  <a href="reservation.html" class="btn-white">예약하기</a>
</section>
${footer}
<script>${js}</script>
</body>
</html>`;
}

function buildBeautyServiceHtml(d) {
  const css = beautyCss(d);
  const header = beautyHeader(d, 'service');
  const footer = beautyFooter(d);
  const js = beautyJs();
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>서비스 | ${d.name}</title>
<style>${css}
.page-hero{height:50vh;min-height:380px;position:relative;display:flex;align-items:flex-end;padding:56px 60px;overflow:hidden;margin-top:72px;background:var(--dark);}
.page-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.5;}
.page-hero-text{position:relative;z-index:1;color:#fff;}
.breadcrumb{font-size:10px;letter-spacing:.2em;color:rgba(255,255,255,0.4);margin-bottom:12px;text-transform:uppercase;font-weight:600;}
.breadcrumb a{color:var(--rose2);text-decoration:none;}
.page-title{font-family:'Cormorant',serif;font-size:clamp(38px,5vw,72px);font-weight:400;}
.page-title em{font-style:italic;color:var(--rose2);}
.svc-detail{padding:100px 60px;background:var(--bg);}
.svc-item{display:grid;grid-template-columns:1fr 1fr;gap:0;margin-bottom:4px;}
.svc-item:nth-child(even) .svc-img{order:2;} .svc-item:nth-child(even) .svc-txt{order:1;}
.svc-img{overflow:hidden;aspect-ratio:4/3;}
.svc-img img{width:100%;height:100%;object-fit:cover;transition:transform .7s ease;}
.svc-item:hover .svc-img img{transform:scale(1.04);}
.svc-txt{background:var(--bg2);padding:72px 60px;display:flex;flex-direction:column;justify-content:center;}
@media(max-width:768px){.page-hero{padding:40px 24px;margin-top:64px;}.svc-detail{padding:56px 24px;}.svc-item{grid-template-columns:1fr;}.svc-item:nth-child(even) .svc-img,.svc-item:nth-child(even) .svc-txt{order:unset;}.svc-img{aspect-ratio:16/9;}.svc-txt{padding:40px 24px;}}
</style>
</head>
<body>
${header}
<div class="page-hero">
  <img src="${d.h2Img}" alt="">
  <div class="page-hero-text"><div class="breadcrumb"><a href="index.html">Home</a> / Service</div><h1 class="page-title">Our <em>Services</em></h1></div>
</div>
<div class="svc-detail">
  <div class="svc-item"><div class="svc-img"><img src="${d.p1Img}" alt="${d.p1Name}"></div><div class="svc-txt"><div class="section-label">01. ${d.p1Tag}</div><h2 class="section-title" style="margin-bottom:20px">${d.p1Name}</h2><p style="font-size:15px;line-height:1.9;color:#666;margin-bottom:32px">${d.p1Detail||d.p1Desc}</p><a href="reservation.html" class="btn-rose">예약하기</a></div></div>
  <div class="svc-item"><div class="svc-img"><img src="${d.p2Img}" alt="${d.p2Name}"></div><div class="svc-txt"><div class="section-label">02. ${d.p2Tag}</div><h2 class="section-title" style="margin-bottom:20px">${d.p2Name}</h2><p style="font-size:15px;line-height:1.9;color:#666;margin-bottom:32px">${d.p2Detail||d.p2Desc}</p><a href="reservation.html" class="btn-rose">예약하기</a></div></div>
  <div class="svc-item"><div class="svc-img"><img src="${d.p3Img}" alt="${d.p3Name}"></div><div class="svc-txt"><div class="section-label">03. ${d.p3Tag}</div><h2 class="section-title" style="margin-bottom:20px">${d.p3Name}</h2><p style="font-size:15px;line-height:1.9;color:#666;margin-bottom:32px">${d.p3Detail||d.p3Desc}</p><a href="reservation.html" class="btn-rose">예약하기</a></div></div>
</div>
<section id="stylists">
  <div><div class="section-label">Our Stylists</div><h2 class="section-title">전문 <em>스타일리스트</em></h2></div>
  <div class="stylists-grid">
    <div class="stylist-card"><img src="${d.i1Img}" alt="${d.i1Name}"><div class="stylist-overlay"><div class="stylist-role">${d.i1Role}</div><div class="stylist-name">${d.i1Name}</div><div class="stylist-line"></div><div class="stylist-cert">${(d.i1Cert||'').replace(/\n/g,' · ')}</div></div></div>
    <div class="stylist-card"><img src="${d.i2Img}" alt="${d.i2Name}"><div class="stylist-overlay"><div class="stylist-role">${d.i2Role}</div><div class="stylist-name">${d.i2Name}</div><div class="stylist-line"></div><div class="stylist-cert">${(d.i2Cert||'').replace(/\n/g,' · ')}</div></div></div>
  </div>
</section>
${footer}
<script>${js}</script>
</body>
</html>`;
}

function buildBeautyGalleryHtml(d) {
  const css = beautyCss(d);
  const header = beautyHeader(d, 'gallery');
  const footer = beautyFooter(d);
  const js = beautyJs();
  const imgs = [d.h1Img,d.h2Img,d.h3Img,d.p1Img,d.p2Img,d.p3Img,d.i1Img,d.i2Img];
  const imgJson = JSON.stringify(imgs);
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>갤러리 | ${d.name}</title>
<style>${css}
.page-hero{height:50vh;min-height:380px;position:relative;display:flex;align-items:flex-end;padding:56px 60px;overflow:hidden;margin-top:72px;background:var(--dark);}
.page-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.5;}
.page-hero-text{position:relative;z-index:1;color:#fff;}
.breadcrumb{font-size:10px;letter-spacing:.2em;color:rgba(255,255,255,0.4);margin-bottom:12px;text-transform:uppercase;font-weight:600;}
.breadcrumb a{color:var(--rose2);text-decoration:none;}
.page-title{font-family:'Cormorant',serif;font-size:clamp(38px,5vw,72px);font-weight:400;}
.page-title em{font-style:italic;color:var(--rose2);}
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
  <div class="page-hero-text"><div class="breadcrumb"><a href="index.html">Home</a> / Gallery</div><h1 class="page-title">Work <em>Portfolio</em></h1></div>
</div>
<section id="gallery" style="padding-top:80px">
  <div class="gallery-masonry">
    ${imgs.map((img,i) => `<div class="g-item" onclick="openLb(${i},${imgJson})"><img src="${img}" alt=""><div class="g-overlay"></div></div>`).join('')}
  </div>
</section>
${footer}
<script>${js}</script>
</body>
</html>`;
}

function buildBeautyLocationHtml(d) {
  const css = beautyCss(d);
  const header = beautyHeader(d, 'location');
  const footer = beautyFooter(d);
  const js = beautyJs();
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>오시는 길 | ${d.name}</title>
<style>${css}
.page-hero{height:50vh;min-height:380px;position:relative;display:flex;align-items:flex-end;padding:56px 60px;overflow:hidden;margin-top:72px;background:var(--dark);}
.page-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.5;}
.page-hero-text{position:relative;z-index:1;color:#fff;}
.breadcrumb{font-size:10px;letter-spacing:.2em;color:rgba(255,255,255,0.4);margin-bottom:12px;text-transform:uppercase;font-weight:600;}
.breadcrumb a{color:var(--rose2);text-decoration:none;}
.page-title{font-family:'Cormorant',serif;font-size:clamp(38px,5vw,72px);font-weight:400;}
.page-title em{font-style:italic;color:var(--rose2);}
.loc-section{padding:80px 60px;display:grid;grid-template-columns:1fr 1fr;gap:80px;}
.map-wrap{overflow:hidden;min-height:440px;background:#eee;}
.map-wrap iframe{width:100%;height:100%;min-height:440px;border:none;display:block;}
.loc-details strong{font-size:9px;letter-spacing:.22em;text-transform:uppercase;color:var(--rose);display:block;margin-bottom:6px;margin-top:28px;font-weight:700;}
.loc-details strong:first-child{margin-top:0;}
.loc-details p{font-size:14px;line-height:1.8;color:#666;}
@media(max-width:768px){.page-hero{padding:40px 24px;margin-top:64px;}.loc-section{grid-template-columns:1fr;padding:48px 24px;}.map-wrap,.map-wrap iframe{min-height:300px;}}
</style>
</head>
<body>
${header}
<div class="page-hero">
  <img src="${d.h1Img}" alt="">
  <div class="page-hero-text"><div class="breadcrumb"><a href="index.html">Home</a> / Location</div><h1 class="page-title">찾아오시는 <em>길</em></h1></div>
</div>
<div class="loc-section">
  <div class="map-wrap"><iframe src="https://map.naver.com/v5/search/${encodeURIComponent((d.address||d.name).split(' ').slice(0,3).join(' '))}" allowfullscreen loading="lazy"></iframe></div>
  <div class="loc-details">
    <div class="section-label">Location</div>
    <h2 class="section-title" style="margin-bottom:32px">${d.name}</h2>
    <strong>주소</strong><p>${d.address}</p>
    <strong>전화</strong><p><a href="tel:${d.phone.replace(/-/g,'')}" style="color:inherit">${d.phone}</a></p>
    <strong>운영시간</strong><p>${d.openHours}</p>
    <strong>주차</strong><p>${d.parking}</p>
    <br><a href="reservation.html" class="btn-rose" style="margin-top:16px">예약하기</a>
  </div>
</div>
${footer}
<script>${js}</script>
</body>
</html>`;
}

function buildBeautyPages(d) {
  return {
    'index.html':    buildBeautyIndexHtml(d),
    'service.html':  buildBeautyServiceHtml(d),
    'gallery.html':  buildBeautyGalleryHtml(d),
    'location.html': buildBeautyLocationHtml(d),
  };
}
