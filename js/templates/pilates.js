/* ============================================================
   Pilates Template — Dark Luxury (Black + Gold)
   컨셉: 블랙 + 골드 미니멀 럭셔리, 풀스크린 히어로, 비대칭 그리드
   폰트: Cormorant Garamond + Noto Sans KR
   ============================================================ */

function pilatesCss(d) {
  return `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
${buildFontSizeCss(d)}
*{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;}
body{font-family:'Noto Sans KR',sans-serif;background:#f9f6f0;color:#1a1410;overflow-x:hidden;}
:root{--bg:#f9f6f0;--warm:#f2ece0;--card:#fff;--navy:#1a1410;--gold:#B8902A;--gold2:#d4a83e;--cream:#1a1410;--gray:#6b5c4a;--border:rgba(184,144,42,0.2);}
header{position:fixed;top:0;left:0;right:0;z-index:100;height:72px;display:flex;align-items:center;justify-content:space-between;padding:0 60px;background:rgba(249,246,240,0.96);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);transition:all .3s;}
header.scrolled{background:rgba(249,246,240,0.99);}
.logo-area{display:flex;align-items:center;gap:14px;text-decoration:none;}
.logo-text{font-family:'Cormorant Garamond',serif;font-size:20px;color:var(--navy);letter-spacing:.06em;line-height:1.2;}
.logo-sub{display:block;font-size:10px;color:var(--gold);letter-spacing:.2em;text-transform:uppercase;font-weight:300;margin-top:2px;}
nav{display:flex;gap:40px;}
nav a{font-size:14px;color:rgba(26,20,16,0.5);text-decoration:none;letter-spacing:.18em;text-transform:uppercase;transition:color .2s;position:relative;}
nav a::after{content:'';position:absolute;bottom:-4px;left:0;width:0;height:1px;background:var(--gold);transition:width .3s;}
nav a:hover,nav a.active{color:var(--navy);}
nav a:hover::after,nav a.active::after{width:100%;}
.header-tel{font-size:12px;color:var(--gold);text-decoration:none;letter-spacing:.05em;border:1px solid var(--border);padding:8px 16px;background:rgba(184,144,42,0.06);}
.hamburger{display:none;flex-direction:column;gap:6px;cursor:pointer;background:none;border:none;padding:4px;}
.hamburger span{display:block;width:22px;height:1px;background:var(--navy);transition:all .3s;}
.hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
.hamburger.open span:nth-child(2){opacity:0;}
.hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}
.mobile-nav{display:none;position:fixed;top:72px;left:0;right:0;background:#f9f6f0;z-index:99;border-bottom:2px solid var(--gold);flex-direction:column;}
.mobile-nav.open{display:flex;}
.mobile-nav a{font-size:var(--fs-nav);color:rgba(26,20,16,0.7);text-decoration:none;padding:16px 28px;border-bottom:1px solid var(--border);letter-spacing:.12em;text-transform:uppercase;}
.mobile-nav a:hover,.mobile-nav a.active{color:var(--gold);background:rgba(184,144,42,0.06);}
.quick{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:99;display:flex;flex-direction:column;gap:1px;}
.quick a{background:rgba(249,246,240,0.96);color:rgba(232,224,212,0.5);font-size:10px;writing-mode:vertical-rl;padding:18px 10px;text-decoration:none;letter-spacing:.14em;border-left:1px solid var(--border);transition:all .2s;}
.quick a:hover{background:var(--gold);color:#000;} 
.floating{position:fixed;bottom:28px;right:20px;display:flex;flex-direction:column;gap:8px;z-index:98;opacity:0;transition:opacity .3s;pointer-events:none;}
.floating.show{opacity:1;pointer-events:all;}
.floating a{padding:12px 20px;font-size:12px;font-family:inherit;text-decoration:none;display:flex;align-items:center;gap:6px;letter-spacing:.05em;}
.f-call{background:#03C75A;color:#fff;}
.f-book{background:var(--gold);color:#000;font-weight:600;}
section{padding:100px 60px;}
.section-eyebrow{font-size:10px;letter-spacing:.32em;color:var(--gold);text-transform:uppercase;margin-bottom:16px;display:flex;align-items:center;gap:12px;}
.section-eyebrow::before{content:'';display:block;width:32px;height:1px;background:var(--gold);}
.section-title{font-family:'Cormorant Garamond',serif;font-size:clamp(28px, var(--fs-section), calc(var(--fs-section) * 1.3));line-height:1.08;margin-bottom:20px;font-weight:300;color:var(--navy);}
.section-title em{font-style:italic;color:var(--gold);}
.btn-gold{display:inline-flex;align-items:center;gap:10px;background:var(--gold);color:#000;padding:14px 32px;font-size:12px;font-family:inherit;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;font-weight:700;transition:all .2s;border:none;cursor:pointer;}
.btn-gold:hover{background:var(--gold2);}
.btn-outline{display:inline-flex;align-items:center;gap:10px;border:1px solid var(--border);color:#e8e0d4;padding:13px 32px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;transition:all .2s;}
.btn-outline:hover{border-color:var(--gold);color:var(--gold);}
.hero{height:100vh;position:relative;overflow:hidden;display:flex;align-items:center;}
.hero-slides{position:absolute;inset:0;}
.hero-slide{position:absolute;inset:0;opacity:0;transition:opacity 1.4s ease;}
.hero-slide.active{opacity:1;}
.hero-slide-bg-div{width:100%;height:100%;background-size:cover;background-position:center;filter:brightness(.45);}
.hero-overlay{position:absolute;inset:0;background:linear-gradient(105deg,rgba(10,10,10,.7) 0%,transparent 55%),linear-gradient(to top,rgba(10,10,10,.8) 0%,transparent 35%);}
.hero-content{position:relative;z-index:2;padding:0 60px;max-width:820px;}
.hero-eyebrow{font-size:10px;letter-spacing:.4em;color:var(--gold);text-transform:uppercase;margin-bottom:24px;display:flex;align-items:center;gap:14px;}
.hero-eyebrow::before{content:'';display:block;width:40px;height:1px;background:var(--gold);}
.hero-h1{font-family:'Cormorant Garamond',serif;font-size:clamp(44px, var(--fs-hero), calc(var(--fs-hero) * 1.5));line-height:.98;font-weight:300;margin-bottom:28px;letter-spacing:-.01em;}
.hero-h1 em{font-style:italic;color:var(--gold);}
.hero-sub{font-size:14px;color:rgba(255,255,255,0.75);line-height:1.9;margin-bottom:48px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;}
.hero-scroll{position:absolute;bottom:36px;left:60px;z-index:2;display:flex;align-items:center;gap:12px;font-size:10px;color:rgba(255,255,255,0.4);letter-spacing:.22em;text-transform:uppercase;}
.hero-scroll::after{content:'';display:block;width:40px;height:1px;background:rgba(232,224,212,0.2);}
.hero-dots{position:absolute;bottom:40px;right:72px;z-index:2;display:flex;gap:8px;}
.hero-dot{width:5px;height:5px;border-radius:50%;background:rgba(232,224,212,0.25);cursor:pointer;transition:all .3s;}
.hero-dot.on{background:var(--gold);width:22px;border-radius:3px;}
.programs-section{background:var(--warm);padding:100px 60px;}
.programs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;background:transparent;margin-top:60px;}
.prog-card{background:var(--card);border:1px solid var(--border);padding:44px 32px;position:relative;overflow:hidden;transition:background .4s;}
.prog-card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:var(--gold);transform:scaleX(0);transform-origin:left;transition:transform .4s;}
.prog-card:hover{background:var(--warm);box-shadow:0 4px 24px rgba(184,144,42,0.1);}
.prog-card:hover::before{transform:scaleX(1);}
.prog-num{font-family:'Cormorant Garamond',serif;font-size:80px;color:rgba(184,144,42,0.1);font-weight:300;line-height:1;margin-bottom:-18px;letter-spacing:-.02em;display:block;}
.prog-tag{font-size:10px;letter-spacing:.28em;color:var(--gold);text-transform:uppercase;margin-bottom:14px;display:block;}
.prog-name{font-family:'Cormorant Garamond',serif;font-size:var(--fs-card);color:#e8e0d4;margin-bottom:12px;font-weight:400;line-height:1.2;}
.prog-desc{font-size:var(--fs-body);color:rgba(232,224,212,0.48);line-height:1.9;margin-bottom:24px;}
.prog-img{width:100%;aspect-ratio:16/9;object-fit:cover;margin-bottom:28px;display:block;}
.instructors-section{background:#fff;padding:100px 60px;}
.instructors-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;margin-top:64px;}
.instr-card{display:grid;grid-template-columns:200px 1fr;gap:36px;align-items:start;}
.instr-img-wrap{position:relative;}
.instr-img{width:100%;aspect-ratio:3/4;object-fit:cover;filter:grayscale(25%);display:block;}
.instr-img-wrap::after{content:'';position:absolute;bottom:-10px;right:-10px;width:55%;height:55%;border:1px solid var(--border);z-index:-1;}
.instr-role{font-size:10px;letter-spacing:.28em;color:var(--gold);text-transform:uppercase;margin-bottom:10px;display:block;}
.instr-name{font-family:'Cormorant Garamond',serif;font-size:28px;color:var(--navy);margin-bottom:20px;font-weight:400;}
.instr-certs{list-style:none;display:flex;flex-direction:column;gap:9px;}
.instr-certs li{font-size:13px;color:var(--gray);padding-left:18px;position:relative;line-height:1.6;}
.instr-certs li::before{content:'—';position:absolute;left:0;color:var(--gold);font-size:10px;top:2px;}
.reviews-section{background:var(--warm);padding:100px 60px;}
.reviews-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;background:transparent;margin-top:60px;}
.review-card{background:#fff;padding:36px 32px;border:1px solid var(--border);}
.review-quote{font-family:'Cormorant Garamond',serif;font-size:64px;color:rgba(201,160,64,0.18);line-height:.75;margin-bottom:18px;}
.review-text{font-size:var(--fs-review);color:rgba(232,224,212,0.65);line-height:1.95;margin-bottom:20px;font-family:'Cormorant Garamond',serif;font-style:italic;}
.review-who{font-size:10px;letter-spacing:.18em;color:var(--gold);text-transform:uppercase;}
.gallery-grid{display:grid;grid-template-columns:repeat(12,1fr);grid-auto-rows:200px;}
.g-item{overflow:hidden;cursor:pointer;position:relative;background:#ddd;}
.g-item:nth-child(1){grid-column:span 5;grid-row:span 2;}
.g-item:nth-child(2){grid-column:span 4;}
.g-item:nth-child(3){grid-column:span 3;}
.g-item:nth-child(4){grid-column:span 3;}
.g-item:nth-child(5){grid-column:span 4;grid-row:span 2;}
.g-item:nth-child(6){grid-column:span 3;}
.g-item:nth-child(7){grid-column:span 3;}
.g-item img{width:100%;height:100%;min-height:160px;object-fit:cover;transition:transform .6s ease;display:block;}
.g-item:hover img{transform:scale(1.06);}
.gallery-header{padding:80px 60px 40px;}
#lb{position:fixed;inset:0;background:rgba(0,0,0,0.97);z-index:1000;display:none;align-items:center;justify-content:center;}
#lb.open{display:flex;}
#lbImg{max-width:88vw;max-height:88vh;object-fit:contain;}
.lb-close{position:absolute;top:24px;right:32px;background:none;border:none;color:rgba(255,255,255,.45);font-size:28px;cursor:pointer;transition:color .2s;}
.lb-close:hover{color:var(--gold);}
.lb-prev,.lb-next{position:absolute;top:50%;transform:translateY(-50%);background:none;border:none;color:rgba(255,255,255,.3);font-size:36px;cursor:pointer;padding:16px;transition:color .2s;}
.lb-prev{left:16px;}.lb-next{right:16px;}
.lb-prev:hover,.lb-next:hover{color:var(--gold);}
footer{background:#050505;border-top:1px solid var(--border);padding:60px 60px 36px;}
.foot-top{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:48px;margin-bottom:48px;}
.foot-brand{font-family:'Cormorant Garamond',serif;font-size:22px;color:var(--gold);margin-bottom:12px;}
.foot-desc{font-size:var(--fs-footer);color:rgba(255,255,255,0.4);line-height:1.9;}
.foot-head{font-size:10px;letter-spacing:.26em;color:var(--gold);text-transform:uppercase;margin-bottom:16px;}
.foot-links{display:flex;flex-direction:column;gap:10px;}
.foot-links a{font-size:var(--fs-footer);color:rgba(255,255,255,0.45);text-decoration:none;transition:color .2s;}
.foot-links a:hover{color:var(--gold2);}
.foot-bottom{border-top:1px solid rgba(255,255,255,0.08);padding-top:24px;font-size:11px;color:rgba(255,255,255,0.25);display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;}
@media(max-width:1100px){.instructors-grid{grid-template-columns:1fr;}.foot-top{grid-template-columns:1fr 1fr;}}
@media(max-width:768px){
  header{padding:0 20px;}section{padding:64px 20px;}
  .programs-section,.instructors-section,.reviews-section,.gallery-header,.foot-top,.foot-bottom{padding-left:20px;padding-right:20px;}
  footer{padding:48px 20px 28px;}
  nav,.header-tel,.quick{display:none;}.hamburger{display:flex;}
  .hero-content{padding:0 20px;}.hero-scroll,.hero-dots{display:none;}
  .hero-h1{font-size:clamp(44px, var(--fs-hero), calc(var(--fs-hero) * 1.5));}
  .programs-grid{grid-template-columns:1fr;}
  .instructors-grid{grid-template-columns:1fr;}
  .instr-card{grid-template-columns:1fr;gap:20px;}
  .instr-img{aspect-ratio:16/9;max-height:240px;}
  .reviews-grid{grid-template-columns:1fr;}
  .gallery-grid{grid-template-columns:1fr 1fr;grid-auto-rows:160px;}
  .g-item{grid-column:span 1!important;grid-row:span 1!important;}
  .foot-top{grid-template-columns:1fr;}
  .foot-bottom{flex-direction:column;}
}
`;
}

function pilatesHeader(d, activePage) {
  const pages = ['index','program','gallery','location'];
  const labels = ['Home','Program','Gallery','Location'];
  const nav = pages.map((p,i) => `<a href="${p}.html"${activePage===p?' class="active"':''}>${labels[i]}</a>`).join('');
  const mobileNav = pages.map((p,i) => `<a href="${p}.html"${activePage===p?' class="active"':''}>${labels[i]}</a>`).join('');
  return `<div class="quick">
  <a href="tel:${d.phone.replace(/-/g,'')}">전화</a>
  <a href="reservation.html">예약</a>
  <a href="location.html">위치</a>
</div>
<div class="floating" id="floating">
  <a href="tel:${d.phone.replace(/-/g,'')}" class="f-call">📞 전화상담</a>
  <a href="reservation.html" class="f-book">예약하기</a>
</div>
<header id="hdr">
  <a href="index.html" class="logo-area">
    <div><span class="logo-text">${d.name}</span><span class="logo-sub">${d.nameEn}</span></div>
  </a>
  <nav>${nav}</nav>
  <a href="tel:${d.phone.replace(/-/g,'')}" class="header-tel">${d.phone}</a>
  <button class="hamburger" id="hamBtn" onclick="toggleNav()" aria-label="메뉴"><span></span><span></span><span></span></button>
</header>
<div class="mobile-nav" id="mobileNav">
  ${mobileNav}
  <a href="reservation.html" style="background:var(--gold);color:#000;font-weight:600;">예약하기</a>
</div>`;
}

function pilatesFooter(d) {
  return `<footer>
  <div class="foot-top">
    <div>
      <div class="foot-brand">${d.name}</div>
      <div class="foot-desc">${d.slogan}<br><br>${d.address}<br>${d.phone}</div>
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
        ${d.blog && d.blog!=='#' ? `<a href="${d.blog}" target="_blank">네이버 블로그</a>` : ''}
        ${d.insta && d.insta!=='#' ? `<a href="${d.insta}" target="_blank">인스타그램</a>` : ''}
      </div>
    </div>
  </div>
  <div class="foot-bottom">
    <span>© ${new Date().getFullYear()} ${d.name}. All rights reserved.</span>
    <span>${d.address}</span>
  </div>
</footer>`;
}

function pilatesJs(d) {
  return `function toggleNav(){document.getElementById('hamBtn').classList.toggle('open');document.getElementById('mobileNav').classList.toggle('open');}
window.addEventListener('scroll',function(){
  var h=document.getElementById('hdr');if(h)h.classList.toggle('scrolled',window.scrollY>50);
  var f=document.getElementById('floating');if(f)f.classList.toggle('show',window.scrollY>300);
});`;
}

function buildPilatesIndexHtml(d, titleHtmlFn) {
  const css = pilatesCss(d);
  const header = pilatesHeader(d,'index');
  const footer = pilatesFooter(d);
  const js = pilatesJs(d);
  const slides = [{img:d.h1Img,title:titleHtmlFn(d.h1Title)},{img:d.h2Img,title:titleHtmlFn(d.h2Title)},{img:d.h3Img,title:titleHtmlFn(d.h3Title)}];
  const slidesHtml = slides.map((s,i) => `<div class="hero-slide${i===0?' active':''}"><div class="hero-slide-bg-div" style="background-image:url('${s.img}')"></div><div class="hero-overlay"></div></div>`).join('');
  const dotsHtml = slides.map((_,i) => `<div class="hero-dot${i===0?' on':''}" onclick="goSlide(${i})"></div>`).join('');

  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${d.name}</title>
<style>${css}</style>
</head>
<body>
${header}
<section class="hero">
  <div class="hero-slides">${slidesHtml}</div>
  <div class="hero-content">
    <div class="hero-eyebrow">${d.nameEn}</div>
    <h1 class="hero-h1">${titleHtmlFn(d.h1Title)}</h1>
    <p class="hero-sub">${d.slogan}</p>
    <div class="hero-btns">
      <a href="program.html" class="btn-gold">프로그램 보기 →</a>
      <a href="reservation.html" class="btn-outline">예약하기</a>
    </div>
  </div>
  <div class="hero-scroll">Scroll</div>
  <div class="hero-dots">${dotsHtml}</div>
</section>
<section class="programs-section">
  <div class="section-eyebrow">Program</div>
  <h2 class="section-title">전문 프로그램으로<br><em>달라지는 몸</em></h2>
  <div class="programs-grid">
    ${['p1','p2','p3'].map((p,i) => `<div class="prog-card">
      <img class="prog-img" src="${d[p+'Img']}" alt="${d[p+'Name']}" onerror="this.style.display='none'">
      <span class="prog-num">0${i+1}</span>
      <span class="prog-tag">${d[p+'Tag']}</span>
      <div class="prog-name">${d[p+'Name']}</div>
      <div class="prog-desc">${d[p+'Desc']}</div>
    </div>`).join('')}
  </div>
</section>
<section class="instructors-section">
  <div class="section-eyebrow">Instructor</div>
  <h2 class="section-title">전문 강사진을<br><em>소개합니다</em></h2>
  <div class="instructors-grid">
    ${['i1','i2'].map(i => `<div class="instr-card">
      <div class="instr-img-wrap"><img class="instr-img" src="${d[i+'Img']}" alt="${d[i+'Name']}" onerror="this.src='https://placehold.co/400x530/111/333?text=Photo'"></div>
      <div>
        <span class="instr-role">${d[i+'Role']}</span>
        <div class="instr-name">${d[i+'Name']}</div>
        <ul class="instr-certs">${(d[i+'Cert']||'').split('\n').filter(l=>l.trim()).map(l=>`<li>${l}</li>`).join('')}</ul>
      </div>
    </div>`).join('')}
  </div>
</section>
<section class="reviews-section">
  <div class="section-eyebrow">Review</div>
  <h2 class="section-title">수강생들의<br><em>진솔한 이야기</em></h2>
  <div class="reviews-grid">
    ${[1,2,3].map(n => `<div class="review-card"><div class="review-quote">\u201c</div><p class="review-text">${d['review'+n]}</p><div class="review-who">${d['review'+n+'who']||'수강생'}</div></div>`).join('')}
  </div>
</section>
${footer}
<div id="lb" onclick="if(event.target===this)closeLb()">
  <button class="lb-close" onclick="closeLb()">✕</button>
  <button class="lb-prev" onclick="lbMove(-1)">&#8592;</button>
  <img id="lbImg" src="" alt="">
  <button class="lb-next" onclick="lbMove(1)">&#8594;</button>
</div>
<script>
${js}
var slides=document.querySelectorAll('.hero-slide'),dots=document.querySelectorAll('.hero-dot'),cur=0,timer;
function goSlide(n){slides[cur].classList.remove('active');dots[cur].classList.remove('on');cur=n;slides[cur].classList.add('active');dots[cur].classList.add('on');}
function nextSlide(){goSlide((cur+1)%slides.length);}
timer=setInterval(nextSlide,5000);
var lbSrcs=[],lbIdx=0;
function openLb(i){lbIdx=i;document.getElementById('lbImg').src=lbSrcs[i];document.getElementById('lb').classList.add('open');}
function closeLb(){document.getElementById('lb').classList.remove('open');}
function lbMove(d){lbIdx=(lbIdx+d+lbSrcs.length)%lbSrcs.length;document.getElementById('lbImg').src=lbSrcs[lbIdx];}
document.addEventListener('keydown',function(e){if(document.getElementById('lb').classList.contains('open')){if(e.key==='ArrowLeft')lbMove(-1);if(e.key==='ArrowRight')lbMove(1);if(e.key==='Escape')closeLb();}});
<\/script>
</body>
</html>`;
}

function buildPilatesProgramHtml(d, certListFn) {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>프로그램 | ${d.name}</title>
<style>${pilatesCss(d)}
.page-hero{height:45vh;min-height:360px;position:relative;display:flex;align-items:flex-end;padding-bottom:60px;overflow:hidden;}
.page-hero-bg{position:absolute;inset:0;background-image:url('${d.h1Img}');background-size:cover;background-position:center;filter:brightness(.4);}
.page-hero-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(10,10,10,1) 0%,transparent 50%);}
.page-hero-content{position:relative;z-index:2;padding:0 60px;}
.prog-list{padding:80px 60px;background:var(--warm);display:flex;flex-direction:column;gap:1px;background:rgba(201,160,64,0.08);}
.prog-item{display:grid;grid-template-columns:380px 1fr;background:#fff;border:1px solid var(--border);gap:0;}
.prog-item:nth-child(even){grid-template-columns:1fr 380px;}
.prog-item:nth-child(even) .prog-item-img{order:2;}
.prog-item:nth-child(even) .prog-item-body{order:1;}
.prog-item-img{overflow:hidden;}
.prog-item-img img{width:100%;height:100%;min-height:320px;object-fit:cover;display:block;transition:transform .6s;}
.prog-item:hover .prog-item-img img{transform:scale(1.04);}
.prog-item-body{padding:52px 48px;display:flex;flex-direction:column;justify-content:center;}
.cta-wrap{padding:80px 60px;text-align:center;background:var(--warm);}
@media(max-width:900px){
  .page-hero-content{padding:0 24px;}
  .prog-list{padding:40px 0;}
  .prog-item,.prog-item:nth-child(even){grid-template-columns:1fr;}
  .prog-item:nth-child(even) .prog-item-img,.prog-item:nth-child(even) .prog-item-body{order:unset;}
  .prog-item-img img{min-height:220px;max-height:260px;}
  .prog-item-body{padding:28px 24px;}
  .cta-wrap{padding:60px 24px;}
}
</style>
</head>
<body>
${pilatesHeader(d,'program')}
<div class="page-hero">
  <div class="page-hero-bg"></div>
  <div class="page-hero-overlay"></div>
  <div class="page-hero-content">
    <div class="section-eyebrow">Program</div>
    <h1 class="section-title" style="margin-bottom:0">맞춤 프로그램으로<br><em>변화를 경험하세요</em></h1>
  </div>
</div>
<div class="prog-list">
  ${['p1','p2','p3'].map(p => `<div class="prog-item">
    <div class="prog-item-img"><img src="${d[p+'Img']}" alt="${d[p+'Name']}" onerror="this.style.background='#1a1a1a'"></div>
    <div class="prog-item-body">
      <span class="prog-tag" style="margin-bottom:20px">${d[p+'Tag']}</span>
      <div class="section-title" style="font-size:clamp(26px,3vw,40px)">${d[p+'Name']}</div>
      <p style="font-size:15px;color:rgba(26,20,16,0.5);line-height:1.9;margin-bottom:16px">${d[p+'Desc']}</p>
      <p style="font-size:13px;color:rgba(26,20,16,0.45);line-height:1.85;border-top:1px solid var(--border);padding-top:18px">${d[p+'Detail']}</p>
      <div style="margin-top:28px"><a href="reservation.html" class="btn-gold">예약하기 →</a></div>
    </div>
  </div>`).join('')}
</div>
<div class="cta-wrap">
  <div class="section-eyebrow" style="justify-content:center">Ready?</div>
  <h2 class="section-title" style="text-align:center;color:var(--navy)">지금 바로<br><em>시작하세요</em></h2>
  <div style="display:flex;gap:12px;justify-content:center;margin-top:36px">
    <a href="reservation.html" class="btn-gold">예약하기 →</a>
    <a href="tel:${d.phone.replace(/-/g,'')}" class="btn-outline">📞 ${d.phone}</a>
  </div>
</div>
${d.placeId ? `
<section style="padding:80px 52px;background:var(--warm);">
  <div style="text-align:center;margin-bottom:40px">
    <div style="font-size:11px;letter-spacing:.24em;color:#03C75A;text-transform:uppercase;font-weight:700;margin-bottom:12px">Naver Place</div>
    <h2 style="font-size:clamp(24px,3vw,36px);font-weight:700;color:var(--navy);margin-bottom:8px;font-family:inherit">네이버 플레이스<br>실시간 정보</h2>
    <p style="font-size:14px;color:var(--gray);margin-top:8px">실제 방문 고객들의 생생한 후기를 확인하세요</p>
  </div>
  <div style="max-width:820px;margin:0 auto;border-radius:8px;overflow:hidden;box-shadow:0 4px 32px rgba(0,0,0,0.12)">
    <iframe
      src="https://map.naver.com/p/entry/place/${d.placeId}"
      width="100%"
      height="480"
      frameborder="0"
      allowfullscreen
      loading="lazy"
      style="display:block"
    ></iframe>
  </div>
  <div style="text-align:center;margin-top:24px">
    <a href="https://map.naver.com/p/entry/place/${d.placeId}"
       target="_blank"
       style="display:inline-flex;align-items:center;gap:8px;background:#03C75A;color:#fff;padding:12px 24px;font-size:14px;font-weight:600;text-decoration:none">
      네이버 플레이스에서 더보기 →
    </a>
  </div>
</section>
` : ''}
${pilatesFooter(d)}
<script>${pilatesJs(d)}<\/script>
</body>
</html>`;
}

function buildPilatesGalleryHtml(d) {
  const uploadedImgs = (d.galleryUrls && d.galleryUrls.length > 0) ? d.galleryUrls : [];
  const imgs = uploadedImgs.length > 0
    ? uploadedImgs.concat([d.p1Img,d.p2Img,d.p3Img,d.i1Img,d.i2Img,d.h1Img,d.h2Img]).slice(0,12)
    : [d.p1Img,d.p2Img,d.p3Img,d.i1Img,d.i2Img,d.h1Img,d.h2Img];
  const lbSrcs = JSON.stringify(imgs);
  const gridItems = imgs.map((src,i) => `<div class="g-item" onclick="openLb(${i})"><img src="${src}" alt="" loading="lazy" onerror="this.src='https://placehold.co/600x400/f0e8d8/B8902A?text=Photo'"></div>`).join('');
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>갤러리 | ${d.name}</title>
<style>${pilatesCss(d)}</style>
</head>
<body>
${pilatesHeader(d,'gallery')}
<div style="padding-top:72px">
  <div class="gallery-header">
    <div class="section-eyebrow">Gallery</div>
    <h1 class="section-title">${d.name}의<br><em>공간과 수업</em></h1>
  </div>
  <div class="gallery-grid">${gridItems}</div>
</div>
${pilatesFooter(d)}
<div id="lb" onclick="if(event.target===this)closeLb()">
  <button class="lb-close" onclick="closeLb()">✕</button>
  <button class="lb-prev" onclick="lbMove(-1)">&#8592;</button>
  <img id="lbImg" src="" alt="">
  <button class="lb-next" onclick="lbMove(1)">&#8594;</button>
</div>
<script>
${pilatesJs(d)}
var lbSrcs=${lbSrcs},lbIdx=0;
function openLb(i){lbIdx=i;document.getElementById('lbImg').src=lbSrcs[i];document.getElementById('lb').classList.add('open');}
function closeLb(){document.getElementById('lb').classList.remove('open');}
function lbMove(d){lbIdx=(lbIdx+d+lbSrcs.length)%lbSrcs.length;document.getElementById('lbImg').src=lbSrcs[lbIdx];}
document.addEventListener('keydown',function(e){if(document.getElementById('lb').classList.contains('open')){if(e.key==='ArrowLeft')lbMove(-1);if(e.key==='ArrowRight')lbMove(1);if(e.key==='Escape')closeLb();}});
<\/script>
</body>
</html>`;
}

function buildPilatesLocationHtml(d) {
  const mapSrc = d.placeId ? `https://map.naver.com/p/entry/place/${d.placeId}` : `https://map.naver.com/v5/search/${encodeURIComponent(d.address)}`;
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>오시는 길 | ${d.name}</title>
<style>${pilatesCss(d)}
.loc-page{padding-top:72px;min-height:100vh;background:var(--bg);}
.loc-inner{padding:80px 60px;}
.loc-map{border:1px solid var(--border);overflow:hidden;margin:40px 0 52px;}
.loc-map iframe{display:block;width:100%;height:480px;/* no filter */}
.loc-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(201,160,64,0.1);}
.loc-card{background:#fff;padding:32px;border:1px solid var(--border);}
.loc-card-icon{font-size:22px;margin-bottom:10px;}
.loc-card-label{font-size:10px;letter-spacing:.26em;color:var(--gold);text-transform:uppercase;margin-bottom:8px;}
.loc-card-value{font-size:14px;color:var(--gray);line-height:1.9;}
@media(max-width:768px){.loc-inner{padding:48px 20px;}.loc-map iframe{height:320px;}.loc-cards{grid-template-columns:1fr;}}
</style>
</head>
<body>
${pilatesHeader(d,'location')}
<div class="loc-page">
  <div class="loc-inner">
    <div class="section-eyebrow">Location</div>
    <h1 class="section-title">찾아오시는<br><em>방법 안내</em></h1>
    <div class="loc-map"><iframe src="${mapSrc}" frameborder="0" allowfullscreen></iframe></div>
    <div class="loc-cards">
      <div class="loc-card"><div class="loc-card-icon">📍</div><div class="loc-card-label">Address</div><div class="loc-card-value">${d.address}</div></div>
      <div class="loc-card"><div class="loc-card-icon">🕐</div><div class="loc-card-label">Hours</div><div class="loc-card-value">${d.openHours||'문의 바랍니다'}</div></div>
      <div class="loc-card"><div class="loc-card-icon">🚗</div><div class="loc-card-label">Parking</div><div class="loc-card-value">${d.parking||'주차 가능'}</div></div>
    </div>
    <div style="margin-top:48px;display:flex;gap:12px">
      <a href="reservation.html" class="btn-gold">예약하기 →</a>
      <a href="tel:${d.phone.replace(/-/g,'')}" class="btn-outline">📞 ${d.phone}</a>
    </div>
  </div>
</div>
${pilatesFooter(d)}
<script>${pilatesJs(d)}<\/script>
</body>
</html>`;
}

function buildPilatesReservationHtml(d) {
  return buildReservationPageHtml(d, pilatesCss(d), pilatesHeader(d,'reservation'), pilatesFooter(d), pilatesJs(d));
}
