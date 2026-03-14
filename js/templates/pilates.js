/* ============================================================
   Pilates / Yoga Template — Milano Luxury
   컨셉: 에디토리얼 럭셔리, 크림+챠콜+골드
   폰트: Playfair Display + DM Sans
   ============================================================ */

function pilatesCss(d) {
  return `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=DM+Sans:wght@300;400;500&family=Noto+Sans+KR:wght@300;400;500&display=swap');
${buildFontSizeCss(d)}
*{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;}
body{font-family:'DM Sans','Noto Sans KR',sans-serif;background:#FAF8F5;color:#1C1C1C;overflow-x:hidden;}
:root{--bg:#FAF8F5;--bg2:#F2EDE4;--card:#fff;--dark:#1C1C1C;--gold:#B5862A;--gold2:#D4A847;--gray:#888;--border:rgba(181,134,42,0.2);--border2:#E8E2D8;}
header{position:fixed;top:0;left:0;right:0;z-index:100;height:76px;display:flex;align-items:center;justify-content:space-between;padding:0 64px;background:rgba(250,248,245,0.97);backdrop-filter:blur(20px);border-bottom:1px solid var(--border2);transition:all .4s;}
header.scrolled{box-shadow:0 4px 40px rgba(0,0,0,0.06);}
.logo-area{display:flex;flex-direction:column;text-decoration:none;gap:2px;}
.logo-text{font-family:'Playfair Display',serif;font-size:19px;color:var(--dark);letter-spacing:.04em;font-weight:500;line-height:1;}
.logo-sub{font-size:9px;color:var(--gold);letter-spacing:.28em;text-transform:uppercase;}
nav{display:flex;gap:44px;}
nav a{font-size:12px;color:rgba(28,28,28,0.5);text-decoration:none;letter-spacing:.2em;text-transform:uppercase;font-weight:500;transition:color .25s;padding-bottom:2px;border-bottom:1px solid transparent;}
nav a:hover,nav a.active{color:var(--dark);border-bottom-color:var(--gold);}
.header-right{display:flex;align-items:center;gap:20px;}
.header-tel{font-size:12px;color:var(--gold);text-decoration:none;letter-spacing:.06em;font-weight:500;}
.owner-login-btn{font-size:11px;color:rgba(28,28,28,0.38);text-decoration:none;letter-spacing:.14em;text-transform:uppercase;padding:6px 14px;border:1px solid var(--border2);transition:all .2s;}
.owner-login-btn:hover{color:var(--dark);border-color:var(--gold);}
.hamburger{display:none;flex-direction:column;gap:6px;cursor:pointer;background:none;border:none;padding:4px;}
.hamburger span{display:block;width:22px;height:1px;background:var(--dark);transition:all .3s;}
.hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
.hamburger.open span:nth-child(2){opacity:0;}
.hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}
.mobile-nav{display:none;position:fixed;top:76px;left:0;right:0;background:var(--bg);z-index:99;flex-direction:column;border-bottom:1px solid var(--border);}
.mobile-nav.open{display:flex;}
.mobile-nav a{font-size:13px;color:var(--dark);text-decoration:none;padding:18px 32px;border-bottom:1px solid var(--border2);letter-spacing:.12em;text-transform:uppercase;}
.mobile-nav a.rsv{background:var(--gold);color:#fff;text-align:center;font-weight:600;}
.floating{position:fixed;bottom:28px;right:24px;display:flex;flex-direction:column;gap:8px;z-index:98;opacity:0;transition:opacity .3s;pointer-events:none;}
.floating.show{opacity:1;pointer-events:all;}
.floating a{padding:13px 22px;font-size:12px;text-decoration:none;display:flex;align-items:center;gap:6px;letter-spacing:.04em;font-weight:600;}
.f-call{background:#1C1C1C;color:#fff;} .f-book{background:var(--gold);color:#fff;}
#hero{height:100vh;min-height:700px;position:relative;display:flex;align-items:flex-end;overflow:hidden;}
.hero-bg{position:absolute;inset:0;}
.hero-bg img{width:100%;height:100%;object-fit:cover;display:block;}
.hero-bg::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(28,28,28,0.85) 0%,rgba(28,28,28,0.25) 55%,rgba(28,28,28,0.08) 100%);}
.hero-content{position:relative;z-index:2;padding:0 80px 88px;width:100%;}
.hero-eyebrow{font-size:10px;letter-spacing:.36em;color:var(--gold2);text-transform:uppercase;margin-bottom:22px;display:flex;align-items:center;gap:16px;}
.hero-eyebrow::before{content:'';display:block;width:44px;height:1px;background:var(--gold2);}
.hero-h1{font-family:'Playfair Display',serif;font-size:clamp(52px,var(--fs-hero),100px);line-height:1.0;color:#fff;font-weight:400;margin-bottom:24px;max-width:800px;}
.hero-h1 em{font-style:italic;color:var(--gold2);}
.hero-sub{font-size:16px;color:rgba(255,255,255,0.6);line-height:1.8;max-width:500px;margin-bottom:44px;font-weight:300;}
.hero-ctas{display:flex;gap:14px;align-items:center;}
.hero-scroll{position:absolute;right:80px;bottom:88px;z-index:2;display:flex;flex-direction:column;align-items:center;gap:12px;}
.hero-scroll span{font-size:9px;letter-spacing:.28em;color:rgba(255,255,255,0.35);text-transform:uppercase;writing-mode:vertical-rl;}
.scroll-line{width:1px;height:60px;background:linear-gradient(to bottom,transparent,rgba(255,255,255,0.35));}
.btn-gold{display:inline-flex;align-items:center;gap:10px;background:var(--gold);color:#fff;padding:15px 36px;font-size:11px;font-family:inherit;letter-spacing:.18em;text-transform:uppercase;text-decoration:none;font-weight:600;transition:all .25s;border:none;cursor:pointer;}
.btn-gold:hover{background:#9A7020;}
.btn-outline-light{display:inline-flex;align-items:center;gap:10px;border:1px solid rgba(255,255,255,0.3);color:rgba(255,255,255,0.8);padding:14px 36px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;text-decoration:none;transition:all .25s;}
.btn-outline-light:hover{border-color:#fff;color:#fff;}
.btn-outline-dark{display:inline-flex;align-items:center;gap:10px;border:1px solid var(--border2);color:var(--dark);padding:14px 36px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;text-decoration:none;transition:all .25s;font-weight:500;}
.btn-outline-dark:hover{border-color:var(--gold);color:var(--gold);}
.section-label{font-size:9px;letter-spacing:.34em;color:var(--gold);text-transform:uppercase;margin-bottom:14px;display:flex;align-items:center;gap:12px;}
.section-label::before{content:'';display:block;width:28px;height:1px;background:var(--gold);}
.section-title{font-family:'Playfair Display',serif;font-size:clamp(32px,var(--fs-section),52px);line-height:1.1;font-weight:400;color:var(--dark);}
.section-title em{font-style:italic;color:var(--gold);}
#about{display:grid;grid-template-columns:1fr 1fr;min-height:680px;}
.about-img{position:relative;overflow:hidden;}
.about-img img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .8s ease;}
.about-img:hover img{transform:scale(1.04);}
.about-badge{position:absolute;bottom:40px;left:40px;background:var(--gold);color:#fff;padding:22px 30px;}
.about-badge .num{font-family:'Playfair Display',serif;font-size:44px;font-weight:400;line-height:1;}
.about-badge .lbl{font-size:10px;letter-spacing:.2em;text-transform:uppercase;opacity:.8;margin-top:4px;}
.about-text{background:var(--bg2);display:flex;flex-direction:column;justify-content:center;padding:80px 72px;}
.about-desc{font-size:16px;line-height:1.9;color:#666;margin:24px 0 36px;font-weight:300;}
.about-tags{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:36px;}
.tag{font-size:11px;letter-spacing:.12em;text-transform:uppercase;padding:8px 18px;border:1px solid var(--border2);color:var(--gray);}
#programs{padding:100px 64px;background:var(--bg);}
.programs-header{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:60px;}
.programs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
.prog-card{position:relative;overflow:hidden;cursor:pointer;text-decoration:none;display:block;}
.prog-card::before{content:'';display:block;padding-top:128%;}
.prog-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .7s cubic-bezier(.25,.46,.45,.94);}
.prog-card:hover img{transform:scale(1.06);}
.prog-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(28,28,28,0.9) 0%,rgba(28,28,28,0.15) 55%,transparent 100%);display:flex;flex-direction:column;justify-content:flex-end;padding:36px 32px;}
.prog-num{font-size:10px;letter-spacing:.2em;color:rgba(255,255,255,0.3);margin-bottom:10px;}
.prog-tag{font-size:9px;letter-spacing:.22em;color:var(--gold2);text-transform:uppercase;margin-bottom:8px;}
.prog-name{font-family:'Playfair Display',serif;font-size:22px;color:#fff;line-height:1.2;margin-bottom:10px;font-weight:400;}
.prog-desc{font-size:13px;color:rgba(255,255,255,0.6);line-height:1.6;max-height:0;overflow:hidden;transition:max-height .4s ease;}
.prog-card:hover .prog-desc{max-height:80px;}
.prog-line{width:0;height:1px;background:var(--gold2);margin-top:16px;transition:width .4s ease;}
.prog-card:hover .prog-line{width:36px;}
#instructors{padding:100px 64px;background:var(--bg2);}
.instructors-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:4px;}
.instr-card{display:grid;grid-template-columns:1fr 1fr;background:var(--card);}
.instr-img{overflow:hidden;aspect-ratio:3/4;}
.instr-img img{width:100%;height:100%;object-fit:cover;object-position:top;transition:transform .7s ease;}
.instr-card:hover .instr-img img{transform:scale(1.04);}
.instr-info{padding:48px 40px;display:flex;flex-direction:column;justify-content:center;}
.instr-role{font-size:9px;letter-spacing:.28em;color:var(--gold);text-transform:uppercase;margin-bottom:10px;}
.instr-name{font-family:'Playfair Display',serif;font-size:28px;color:var(--dark);margin-bottom:20px;font-weight:400;}
.instr-divider{width:40px;height:1px;background:var(--gold);margin-bottom:20px;}
.instr-cert{list-style:none;font-size:13px;line-height:2.1;color:#666;}
.instr-cert li::before{content:'·';color:var(--gold);margin-right:8px;}
#reviews{padding:100px 64px;background:var(--dark);}
.reviews-header{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:60px;}
.reviews-header .section-label{color:var(--gold2);}
.reviews-header .section-label::before{background:var(--gold2);}
.reviews-header .section-title{color:#fff;}
.reviews-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
.review-card{background:#262626;padding:40px 36px;}
.review-stars{display:flex;gap:4px;margin-bottom:20px;}
.review-stars span{font-size:14px;color:var(--gold2);}
.review-text{font-size:14px;line-height:1.9;color:rgba(255,255,255,0.65);font-family:'Playfair Display',serif;font-style:italic;margin-bottom:24px;}
.review-author{font-size:11px;letter-spacing:.14em;color:var(--gold2);text-transform:uppercase;}
#gallery{padding:100px 64px;background:var(--bg);}
.gallery-grid{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:240px;gap:3px;}
.g-item{overflow:hidden;cursor:pointer;}
.g-item.wide{grid-column:span 2;} .g-item.tall{grid-row:span 2;}
.g-item img{width:100%;height:100%;object-fit:cover;transition:transform .7s ease;}
.g-item:hover img{transform:scale(1.06);}
#cta{padding:120px 64px;background:var(--gold);text-align:center;}
.cta-eyebrow{font-size:10px;letter-spacing:.32em;color:rgba(255,255,255,0.6);text-transform:uppercase;margin-bottom:20px;}
.cta-title{font-family:'Playfair Display',serif;font-size:clamp(38px,4vw,64px);color:#fff;margin-bottom:24px;font-weight:400;}
.cta-title em{font-style:italic;}
.cta-sub{font-size:16px;color:rgba(255,255,255,0.7);margin-bottom:48px;font-weight:300;}
.btn-white{display:inline-flex;align-items:center;gap:10px;background:#fff;color:var(--gold);padding:16px 44px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;text-decoration:none;font-weight:700;transition:all .25s;border:none;cursor:pointer;font-family:inherit;}
.btn-white:hover{background:var(--dark);color:#fff;}
footer{background:#111;padding:72px 64px 36px;}
.foot-top{display:grid;grid-template-columns:2fr 1fr 1fr;gap:60px;padding-bottom:52px;margin-bottom:36px;border-bottom:1px solid rgba(255,255,255,0.07);}
.foot-brand{font-family:'Playfair Display',serif;font-size:22px;color:#fff;margin-bottom:16px;}
.foot-desc{font-size:13px;line-height:2;color:rgba(255,255,255,0.35);font-weight:300;}
.foot-head{font-size:9px;letter-spacing:.28em;color:var(--gold);text-transform:uppercase;margin-bottom:20px;}
.foot-links{display:flex;flex-direction:column;gap:12px;}
.foot-links a{font-size:13px;color:rgba(255,255,255,0.4);text-decoration:none;transition:color .2s;}
.foot-links a:hover{color:var(--gold);}
.foot-bottom{display:flex;justify-content:space-between;font-size:12px;color:rgba(255,255,255,0.2);}
.lightbox{position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:500;display:none;align-items:center;justify-content:center;}
.lightbox.open{display:flex;}
.lightbox img{max-width:90vw;max-height:90vh;object-fit:contain;}
.lb-close{position:absolute;top:28px;right:36px;color:rgba(255,255,255,0.6);font-size:28px;cursor:pointer;background:none;border:none;}
.lb-close:hover{color:#fff;}
.lb-prev,.lb-next{position:absolute;top:50%;transform:translateY(-50%);color:rgba(255,255,255,0.5);font-size:40px;cursor:pointer;background:none;border:none;padding:16px;}
.lb-prev{left:16px;} .lb-next{right:16px;}
.lb-prev:hover,.lb-next:hover{color:#fff;}
#naverplace{padding:60px 64px;background:var(--bg2);}
#location-bar{padding:72px 64px;background:var(--bg);}
.location-inner{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;}
.location-detail strong{font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:var(--gold);display:block;margin-bottom:6px;margin-top:28px;}
.location-detail strong:first-child{margin-top:0;}
.location-detail p{font-size:15px;line-height:1.8;color:#666;}
@media(max-width:1024px){
  header{padding:0 40px;} .hero-content{padding:0 48px 64px;} .hero-scroll{right:48px;bottom:64px;}
  #about{grid-template-columns:1fr;} .about-img{height:500px;} .about-text{padding:64px 48px;}
  #programs,#instructors,#reviews,#gallery,#cta,#location-bar,#naverplace{padding:72px 40px;}
  .instructors-grid{grid-template-columns:1fr;} footer{padding:56px 40px 28px;} .foot-top{grid-template-columns:1fr 1fr;}
}
@media(max-width:768px){
  header{padding:0 24px;height:64px;} nav,.header-right,.owner-login-btn{display:none;} .hamburger{display:flex;}
  .mobile-nav{top:64px;} .hero-content{padding:0 24px 52px;} .hero-scroll{display:none;}
  .hero-h1{font-size:clamp(40px,10vw,64px);}
  #about .about-img{height:400px;} .about-text{padding:48px 24px;}
  #programs,#instructors,#reviews,#gallery,#cta,#location-bar,#naverplace{padding:56px 24px;}
  .programs-grid,.reviews-grid{grid-template-columns:1fr;} .programs-header,.reviews-header{flex-direction:column;align-items:flex-start;gap:20px;}
  .instr-card{grid-template-columns:1fr;} .instr-img{aspect-ratio:16/9;}
  .gallery-grid{grid-template-columns:1fr 1fr;grid-auto-rows:180px;} .g-item.wide,.g-item.tall{grid-column:span 1;grid-row:span 1;}
  .location-inner{grid-template-columns:1fr;} footer{padding:48px 24px 24px;} .foot-top{grid-template-columns:1fr;gap:32px;} .foot-bottom{flex-direction:column;}
  .floating{right:16px;}
}`;
}

function pilatesHeader(d, activePage) {
  const pages = ['index','program','gallery','location'];
  const labels = ['Home','Program','Gallery','Location'];
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

function pilatesFooter(d) {
  return `<footer>
  <div class="foot-top">
    <div>
      <div class="foot-brand">${d.name}</div>
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

function pilatesJs() {
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

function buildNaverPlaceWidget(d) {
  if (!d.placeId) return '';
  return `<section id="naverplace" style="padding:80px 64px;background:#FAF8F5;">
  <div style="max-width:1000px;margin:0 auto">
    <div class="section-label">Naver Place</div>
    <h2 class="section-title" style="margin-bottom:40px">스마트플레이스 <em>리뷰</em></h2>
    <div id="naver-place-widget" style="min-height:300px;background:#fff;padding:20px;box-shadow:0 2px 20px rgba(0,0,0,0.06)"></div>
  </div>
  <script>(function(){var s=document.createElement('script');s.src='https://place.map.naver.com/widget/v1/${d.placeId}?lang=ko';s.async=true;document.getElementById('naver-place-widget').appendChild(s);})();<\/script>
</section>`;
}

function buildPilatesIndexHtml(d) {
  const css = pilatesCss(d);
  const header = pilatesHeader(d, 'index');
  const footer = pilatesFooter(d);
  const js = pilatesJs();
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
    <div class="hero-eyebrow">Wellness Studio</div>
    <h1 class="hero-h1">${(d.h1Title||'전문적인|서비스').replace('|','<br><em>')}${(d.h1Title||'전문적인|서비스').includes('|') ? '</em>' : ''}</h1>
    <p class="hero-sub">${d.slogan}</p>
    <div class="hero-ctas">
      <a href="reservation.html" class="btn-gold">예약하기</a>
      <a href="program.html" class="btn-outline-light">프로그램 보기</a>
    </div>
  </div>
  <div class="hero-scroll"><div class="scroll-line"></div><span>Scroll</span></div>
</section>
<section id="about">
  <div class="about-img">
    <img src="${d.h2Img}" alt="${d.name}">
    <div class="about-badge"><div class="num">No.1</div><div class="lbl">전문 스튜디오</div></div>
  </div>
  <div class="about-text">
    <div class="section-label">About Us</div>
    <h2 class="section-title">${(d.h2Title||'함께하는|성장').replace('|','<br><em>')}${(d.h2Title||'함께하는|성장').includes('|') ? '</em>' : ''}</h2>
    <p class="about-desc">${d.slogan}<br><br>${d.address}</p>
    <div class="about-tags"><span class="tag">전문 강사진</span><span class="tag">맞춤 프로그램</span><span class="tag">최신 시설</span><span class="tag">1:1 관리</span></div>
    <a href="program.html" class="btn-outline-dark">프로그램 자세히 보기</a>
  </div>
</section>
<section id="programs">
  <div class="programs-header">
    <div><div class="section-label">Programs</div><h2 class="section-title">대표 <em>프로그램</em></h2></div>
    <a href="program.html" class="btn-outline-dark">전체 보기</a>
  </div>
  <div class="programs-grid">
    <a href="program.html" class="prog-card"><img src="${d.p1Img}" alt="${d.p1Name}"><div class="prog-overlay"><div class="prog-num">01</div><div class="prog-tag">${d.p1Tag}</div><div class="prog-name">${d.p1Name}</div><div class="prog-desc">${d.p1Desc}</div><div class="prog-line"></div></div></a>
    <a href="program.html" class="prog-card"><img src="${d.p2Img}" alt="${d.p2Name}"><div class="prog-overlay"><div class="prog-num">02</div><div class="prog-tag">${d.p2Tag}</div><div class="prog-name">${d.p2Name}</div><div class="prog-desc">${d.p2Desc}</div><div class="prog-line"></div></div></a>
    <a href="program.html" class="prog-card"><img src="${d.p3Img}" alt="${d.p3Name}"><div class="prog-overlay"><div class="prog-num">03</div><div class="prog-tag">${d.p3Tag}</div><div class="prog-name">${d.p3Name}</div><div class="prog-desc">${d.p3Desc}</div><div class="prog-line"></div></div></a>
  </div>
</section>
<section id="instructors">
  <div style="margin-bottom:56px"><div class="section-label">Our Team</div><h2 class="section-title">전문 <em>강사진</em></h2></div>
  <div class="instructors-grid">
    <div class="instr-card"><div class="instr-img"><img src="${d.i1Img}" alt="${d.i1Name}"></div><div class="instr-info"><div class="instr-role">${d.i1Role}</div><div class="instr-name">${d.i1Name}</div><div class="instr-divider"></div><ul class="instr-cert">${(d.i1Cert||'').split('\n').filter(l=>l.trim()).map(l=>`<li>${l}</li>`).join('')}</ul></div></div>
    <div class="instr-card"><div class="instr-img"><img src="${d.i2Img}" alt="${d.i2Name}"></div><div class="instr-info"><div class="instr-role">${d.i2Role}</div><div class="instr-name">${d.i2Name}</div><div class="instr-divider"></div><ul class="instr-cert">${(d.i2Cert||'').split('\n').filter(l=>l.trim()).map(l=>`<li>${l}</li>`).join('')}</ul></div></div>
  </div>
</section>
<section id="reviews">
  <div class="reviews-header"><div><div class="section-label">Reviews</div><h2 class="section-title">고객 <em>후기</em></h2></div></div>
  <div class="reviews-grid">
    <div class="review-card"><div class="review-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div><p class="review-text">"${d.review1}"</p><div class="review-author">${d.review1who}</div></div>
    <div class="review-card"><div class="review-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div><p class="review-text">"${d.review2}"</p><div class="review-author">${d.review2who}</div></div>
    <div class="review-card"><div class="review-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div><p class="review-text">"${d.review3}"</p><div class="review-author">${d.review3who}</div></div>
  </div>
</section>
<section id="gallery">
  <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:48px"><div><div class="section-label">Gallery</div><h2 class="section-title">스튜디오 <em>갤러리</em></h2></div><a href="gallery.html" class="btn-outline-dark">전체 보기</a></div>
  <div class="gallery-grid">
    <div class="g-item wide tall" onclick="openLb(0,${imgJson})"><img src="${d.h1Img}" alt=""></div>
    <div class="g-item" onclick="openLb(1,${imgJson})"><img src="${d.h2Img}" alt=""></div>
    <div class="g-item" onclick="openLb(2,${imgJson})"><img src="${d.h3Img}" alt=""></div>
    <div class="g-item" onclick="openLb(3,${imgJson})"><img src="${d.p1Img}" alt=""></div>
    <div class="g-item" onclick="openLb(4,${imgJson})"><img src="${d.p2Img}" alt=""></div>
  </div>
</section>
${buildNaverPlaceWidget(d)}
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
  <div class="cta-eyebrow">Ready to Start?</div>
  <h2 class="cta-title">지금 바로 <em>시작하세요</em></h2>
  <p class="cta-sub">${d.slogan}</p>
  <a href="reservation.html" class="btn-white">예약하기</a>
</section>
${footer}
<script>${js}</script>
</body>
</html>`;
}

function buildPilatesProgramHtml(d) {
  const css = pilatesCss(d);
  const header = pilatesHeader(d, 'program');
  const footer = pilatesFooter(d);
  const js = pilatesJs();
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>프로그램 | ${d.name}</title>
<style>${css}
.page-hero{height:50vh;min-height:380px;position:relative;display:flex;align-items:flex-end;padding:56px 64px;overflow:hidden;margin-top:76px;}
.page-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
.page-hero::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(28,28,28,0.85) 0%,rgba(28,28,28,0.15) 100%);}
.page-hero-text{position:relative;z-index:1;color:#fff;}
.breadcrumb{font-size:11px;letter-spacing:.16em;color:rgba(255,255,255,0.4);margin-bottom:12px;text-transform:uppercase;}
.breadcrumb a{color:var(--gold2);text-decoration:none;}
.page-title{font-family:'Playfair Display',serif;font-size:clamp(36px,5vw,64px);font-weight:400;}
.page-title em{font-style:italic;color:var(--gold2);}
.prog-detail-item{display:grid;grid-template-columns:1fr 1fr;gap:0;margin-bottom:4px;}
.prog-detail-item:nth-child(even) .prog-detail-img{order:2;}
.prog-detail-item:nth-child(even) .prog-detail-text{order:1;}
.prog-detail-img{overflow:hidden;aspect-ratio:4/3;}
.prog-detail-img img{width:100%;height:100%;object-fit:cover;transition:transform .7s ease;}
.prog-detail-item:hover .prog-detail-img img{transform:scale(1.04);}
.prog-detail-text{background:var(--bg2);padding:72px 64px;display:flex;flex-direction:column;justify-content:center;}
@media(max-width:768px){.page-hero{padding:40px 24px;margin-top:64px;}.prog-detail-item{grid-template-columns:1fr;}.prog-detail-item:nth-child(even) .prog-detail-img,.prog-detail-item:nth-child(even) .prog-detail-text{order:unset;}.prog-detail-img{aspect-ratio:16/9;}.prog-detail-text{padding:40px 24px;}}
</style>
</head>
<body>
${header}
<div class="page-hero">
  <img src="${d.h2Img}" alt="">
  <div class="page-hero-text"><div class="breadcrumb"><a href="index.html">Home</a> / Program</div><h1 class="page-title">Our <em>Programs</em></h1></div>
</div>
<div style="background:var(--bg)">
  <div class="prog-detail-item"><div class="prog-detail-img"><img src="${d.p1Img}" alt="${d.p1Name}"></div><div class="prog-detail-text"><div class="section-label">01. ${d.p1Tag}</div><h2 class="section-title" style="margin-bottom:20px">${d.p1Name}</h2><p style="font-size:15px;line-height:1.9;color:#666;margin-bottom:32px">${d.p1Detail||d.p1Desc}</p><a href="reservation.html" class="btn-outline-dark">예약하기</a></div></div>
  <div class="prog-detail-item"><div class="prog-detail-img"><img src="${d.p2Img}" alt="${d.p2Name}"></div><div class="prog-detail-text"><div class="section-label">02. ${d.p2Tag}</div><h2 class="section-title" style="margin-bottom:20px">${d.p2Name}</h2><p style="font-size:15px;line-height:1.9;color:#666;margin-bottom:32px">${d.p2Detail||d.p2Desc}</p><a href="reservation.html" class="btn-outline-dark">예약하기</a></div></div>
  <div class="prog-detail-item"><div class="prog-detail-img"><img src="${d.p3Img}" alt="${d.p3Name}"></div><div class="prog-detail-text"><div class="section-label">03. ${d.p3Tag}</div><h2 class="section-title" style="margin-bottom:20px">${d.p3Name}</h2><p style="font-size:15px;line-height:1.9;color:#666;margin-bottom:32px">${d.p3Detail||d.p3Desc}</p><a href="reservation.html" class="btn-outline-dark">예약하기</a></div></div>
</div>
<section id="instructors">
  <div style="margin-bottom:56px"><div class="section-label">Our Team</div><h2 class="section-title">전문 <em>강사진</em></h2></div>
  <div class="instructors-grid">
    <div class="instr-card"><div class="instr-img"><img src="${d.i1Img}" alt="${d.i1Name}"></div><div class="instr-info"><div class="instr-role">${d.i1Role}</div><div class="instr-name">${d.i1Name}</div><div class="instr-divider"></div><ul class="instr-cert">${(d.i1Cert||'').split('\n').filter(l=>l.trim()).map(l=>`<li>${l}</li>`).join('')}</ul></div></div>
    <div class="instr-card"><div class="instr-img"><img src="${d.i2Img}" alt="${d.i2Name}"></div><div class="instr-info"><div class="instr-role">${d.i2Role}</div><div class="instr-name">${d.i2Name}</div><div class="instr-divider"></div><ul class="instr-cert">${(d.i2Cert||'').split('\n').filter(l=>l.trim()).map(l=>`<li>${l}</li>`).join('')}</ul></div></div>
  </div>
</section>
${footer}
<script>${js}</script>
</body>
</html>`;
}

function buildPilatesGalleryHtml(d) {
  const css = pilatesCss(d);
  const header = pilatesHeader(d, 'gallery');
  const footer = pilatesFooter(d);
  const js = pilatesJs();
  const imgs = [d.h1Img,d.h2Img,d.h3Img,d.p1Img,d.p2Img,d.p3Img,d.i1Img,d.i2Img];
  const imgJson = JSON.stringify(imgs);
  const gridItems = imgs.map((img,i) => `<div class="g-item${i===0?' wide tall':''}" onclick="openLb(${i},${imgJson})"><img src="${img}" alt=""></div>`).join('');
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>갤러리 | ${d.name}</title>
<style>${css}
.page-hero{height:50vh;min-height:380px;position:relative;display:flex;align-items:flex-end;padding:56px 64px;overflow:hidden;margin-top:76px;}
.page-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
.page-hero::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(28,28,28,0.85) 0%,rgba(28,28,28,0.15) 100%);}
.page-hero-text{position:relative;z-index:1;color:#fff;}
.breadcrumb{font-size:11px;letter-spacing:.16em;color:rgba(255,255,255,0.4);margin-bottom:12px;text-transform:uppercase;}
.breadcrumb a{color:var(--gold2);text-decoration:none;}
.page-title{font-family:'Playfair Display',serif;font-size:clamp(36px,5vw,64px);font-weight:400;}
.page-title em{font-style:italic;color:var(--gold2);}
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
  <div class="page-hero-text"><div class="breadcrumb"><a href="index.html">Home</a> / Gallery</div><h1 class="page-title">Studio <em>Gallery</em></h1></div>
</div>
<section id="gallery" style="padding-top:80px"><div class="gallery-grid">${gridItems}</div></section>
${footer}
<script>${js}</script>
</body>
</html>`;
}

function buildPilatesLocationHtml(d) {
  const css = pilatesCss(d);
  const header = pilatesHeader(d, 'location');
  const footer = pilatesFooter(d);
  const js = pilatesJs();
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>오시는 길 | ${d.name}</title>
<style>${css}
.page-hero{height:50vh;min-height:380px;position:relative;display:flex;align-items:flex-end;padding:56px 64px;overflow:hidden;margin-top:76px;}
.page-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
.page-hero::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(28,28,28,0.85) 0%,rgba(28,28,28,0.15) 100%);}
.page-hero-text{position:relative;z-index:1;color:#fff;}
.breadcrumb{font-size:11px;letter-spacing:.16em;color:rgba(255,255,255,0.4);margin-bottom:12px;text-transform:uppercase;}
.breadcrumb a{color:var(--gold2);text-decoration:none;}
.page-title{font-family:'Playfair Display',serif;font-size:clamp(36px,5vw,64px);font-weight:400;}
.page-title em{font-style:italic;color:var(--gold2);}
.loc-section{padding:80px 64px;display:grid;grid-template-columns:1fr 1fr;gap:80px;}
.map-wrap{overflow:hidden;min-height:440px;background:#eee;}
.map-wrap iframe{width:100%;height:100%;min-height:440px;border:none;display:block;}
.loc-details strong{font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:var(--gold);display:block;margin-bottom:6px;margin-top:28px;}
.loc-details strong:first-child{margin-top:0;}
.loc-details p{font-size:15px;line-height:1.8;color:#666;}
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
  <div class="map-wrap">
    <iframe src="https://map.naver.com/v5/search/${encodeURIComponent((d.address||d.name).split(' ').slice(0,3).join(' '))}" allowfullscreen loading="lazy"></iframe>
  </div>
  <div class="loc-details">
    <div class="section-label">Location</div>
    <h2 class="section-title" style="margin-bottom:32px">${d.name}</h2>
    <strong>주소</strong><p>${d.address}</p>
    <strong>전화</strong><p><a href="tel:${d.phone.replace(/-/g,'')}" style="color:inherit">${d.phone}</a></p>
    <strong>운영시간</strong><p>${d.openHours}</p>
    <strong>주차</strong><p>${d.parking}</p>
    <br><a href="reservation.html" class="btn-gold" style="margin-top:16px">예약하기</a>
  </div>
</div>
${footer}
<script>${js}</script>
</body>
</html>`;
}

function buildPilatesPages(d) {
  return {
    'index.html':    buildPilatesIndexHtml(d),
    'program.html':  buildPilatesProgramHtml(d),
    'gallery.html':  buildPilatesGalleryHtml(d),
    'location.html': buildPilatesLocationHtml(d),
  };
}
