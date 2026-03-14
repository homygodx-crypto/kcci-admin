/* ============================================================
   Cafe Template — Warm Vintage Magazine
   컨셉: 크림 + 브라운 + 테라코타, 매거진 스플릿 레이아웃
   폰트: Playfair Display + Noto Sans KR
   ============================================================ */

function cafeCss(d) {
  return `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
${buildFontSizeCss(d)}
*{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;}
body{font-family:'Noto Sans KR',sans-serif;background:#faf8f3;color:#2d2215;overflow-x:hidden;}
:root{--cream:#faf8f3;--warm:#f5efe0;--brown:#5c3317;--terra:#c0553a;--gold:#d4915a;--dark:#2d2215;--bd:rgba(92,51,23,0.14);}
header{position:fixed;top:0;left:0;right:0;z-index:100;height:68px;display:flex;align-items:center;justify-content:space-between;padding:0 52px;background:rgba(250,248,243,0.96);backdrop-filter:blur(10px);border-bottom:1px solid var(--bd);}
.logo-area{display:flex;align-items:center;gap:10px;text-decoration:none;}
.logo-text{font-family:'Playfair Display',serif;font-size:22px;color:var(--brown);letter-spacing:.02em;}
.logo-sub{display:block;font-size:10px;color:var(--terra);letter-spacing:.2em;text-transform:uppercase;margin-top:1px;}
nav{display:flex;gap:36px;}
nav a{font-size:var(--fs-nav);color:rgba(45,34,21,0.55);text-decoration:none;letter-spacing:.05em;transition:color .2s;font-weight:500;}
nav a:hover,nav a.active{color:var(--brown);}
.header-cta{background:var(--terra);color:#fff;padding:9px 20px;font-size:13px;font-weight:600;text-decoration:none;font-family:inherit;border:none;cursor:pointer;transition:background .2s;}
.header-cta:hover{background:#a8432c;}
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:4px;}
.hamburger span{display:block;width:22px;height:2px;background:var(--brown);transition:all .3s;}
.hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
.hamburger.open span:nth-child(2){opacity:0;}
.hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}
.mobile-nav{display:none;position:fixed;top:68px;left:0;right:0;background:var(--cream);z-index:99;border-bottom:2px solid var(--terra);flex-direction:column;}
.mobile-nav.open{display:flex;}
.mobile-nav a{font-size:15px;color:var(--dark);text-decoration:none;padding:16px 28px;border-bottom:1px solid var(--bd);}
.mobile-nav a:hover,.mobile-nav a.active{background:var(--warm);color:var(--brown);}
.quick{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:99;display:flex;flex-direction:column;gap:1px;}
.quick a{background:var(--brown);color:rgba(255,255,255,.75);font-size:10px;writing-mode:vertical-rl;padding:16px 10px;text-decoration:none;letter-spacing:.14em;transition:background .2s;}
.quick a:hover{background:var(--terra);}
.floating{position:fixed;bottom:24px;right:20px;display:flex;flex-direction:column;gap:8px;z-index:98;opacity:0;transition:opacity .3s;pointer-events:none;}
.floating.show{opacity:1;pointer-events:all;}
.floating a{padding:12px 20px;font-size:13px;font-family:inherit;text-decoration:none;display:flex;align-items:center;gap:6px;}
.f-call{background:#03C75A;color:#fff;}.f-book{background:var(--terra);color:#fff;font-weight:600;}
.btn-terra{display:inline-flex;align-items:center;gap:8px;background:var(--terra);color:#fff;padding:13px 28px;font-size:13px;font-family:inherit;font-weight:600;text-decoration:none;transition:all .2s;border:none;cursor:pointer;}
.btn-terra:hover{background:#a8432c;}
.btn-outline{display:inline-flex;align-items:center;gap:8px;border:2px solid var(--brown);color:var(--brown);padding:11px 28px;font-size:13px;text-decoration:none;transition:all .2s;}
.btn-outline:hover{background:var(--brown);color:#fff;}
.eyebrow{font-size:11px;letter-spacing:.26em;color:var(--terra);text-transform:uppercase;margin-bottom:12px;}
.sec-title{font-family:'Playfair Display',serif;font-size:var(--fs-section);line-height:1.1;color:var(--brown);margin-bottom:16px;}
.sec-title em{font-style:italic;color:var(--terra);}
/* 히어로 — 매거진 스플릿 */
.hero{min-height:100vh;display:grid;grid-template-columns:1fr 1fr;padding-top:68px;}
.hero-left{background:var(--warm);display:flex;flex-direction:column;justify-content:center;padding:80px 64px;}
.hero-label{font-family:'Playfair Display',serif;font-size:13px;color:var(--terra);letter-spacing:.22em;margin-bottom:20px;text-transform:uppercase;}
.hero-h1{font-family:'Playfair Display',serif;font-size:var(--fs-hero);line-height:1.02;color:var(--brown);margin-bottom:20px;}
.hero-h1 em{font-style:italic;color:var(--terra);}
.hero-sub{font-size:var(--fs-body);color:rgba(45,34,21,0.62);line-height:1.9;margin-bottom:40px;max-width:420px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;}
.hero-right{position:relative;overflow:hidden;}
.hero-bg{position:absolute;inset:0;background-size:cover;background-position:center;transition:transform 8s ease;}
.hero-right:hover .hero-bg{transform:scale(1.04);}
.hero-badge{position:absolute;bottom:36px;right:36px;background:var(--terra);color:#fff;width:88px;height:88px;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-size:11px;font-weight:700;line-height:1.5;z-index:2;}
/* 메뉴 카드 */
.menu-section{padding:96px 52px;background:var(--cream);}
.menu-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin-top:52px;}
.menu-card{background:#fff;overflow:hidden;box-shadow:0 2px 20px rgba(92,51,23,0.06);transition:transform .3s,box-shadow .3s;}
.menu-card:hover{transform:translateY(-6px);box-shadow:0 10px 40px rgba(92,51,23,0.12);}
.menu-img{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;}
.menu-body{padding:24px 28px;}
.menu-tag{font-size:10px;letter-spacing:.24em;color:var(--terra);text-transform:uppercase;margin-bottom:8px;display:block;}
.menu-name{font-family:'Playfair Display',serif;font-size:var(--fs-card);color:var(--brown);margin-bottom:8px;line-height:1.2;}
.menu-desc{font-size:var(--fs-body);color:rgba(45,34,21,0.58);line-height:1.75;margin-bottom:10px;}
.menu-detail{font-size:13px;color:rgba(45,34,21,0.45);line-height:1.75;border-top:1px solid var(--bd);padding-top:12px;}
/* 정보 섹션 */
.info-section{background:var(--brown);padding:96px 52px;}
.info-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:40px;margin-top:52px;}
.info-head{font-size:10px;letter-spacing:.24em;color:var(--gold);text-transform:uppercase;margin-bottom:12px;}
.info-val{font-size:var(--fs-body);color:rgba(255,255,255,.8);line-height:1.85;}
/* 후기 */
.reviews-section{padding:96px 52px;background:var(--warm);}
.reviews-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:52px;}
.review-card{background:#fff;padding:32px;border-top:3px solid var(--terra);}
.review-stars{color:var(--gold);font-size:13px;margin-bottom:12px;letter-spacing:2px;}
.review-text{font-family:'Playfair Display',serif;font-size:var(--fs-review);color:var(--dark);line-height:1.9;margin-bottom:16px;font-style:italic;}
.review-who{font-size:11px;color:var(--terra);letter-spacing:.12em;}
/* 갤러리 */
.gallery-section{padding:96px 52px;background:var(--cream);}
.gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:48px;}
.g-item{overflow:hidden;cursor:pointer;background:var(--warm);}
.g-item:nth-child(1){grid-row:span 2;}
.g-item:nth-child(5){grid-row:span 2;}
.g-item img{width:100%;height:100%;min-height:200px;object-fit:cover;transition:transform .5s ease;display:block;}
.g-item:hover img{transform:scale(1.05);}
#lb{position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:1000;display:none;align-items:center;justify-content:center;}
#lb.open{display:flex;}
#lbImg{max-width:88vw;max-height:88vh;object-fit:contain;}
.lb-close{position:absolute;top:24px;right:32px;background:none;border:none;color:rgba(255,255,255,.5);font-size:28px;cursor:pointer;}
.lb-prev,.lb-next{position:absolute;top:50%;transform:translateY(-50%);background:none;border:none;color:rgba(255,255,255,.4);font-size:36px;cursor:pointer;padding:16px;}
.lb-prev{left:16px;}.lb-next{right:16px;}
footer{background:var(--dark);padding:56px 52px 36px;}
.foot-top{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:48px;margin-bottom:44px;}
.foot-brand{font-family:'Playfair Display',serif;font-size:24px;color:var(--gold);margin-bottom:10px;}
.foot-desc{font-size:var(--fs-footer);color:rgba(250,248,243,0.35);line-height:1.9;}
.foot-head{font-size:10px;letter-spacing:.25em;color:var(--gold);text-transform:uppercase;margin-bottom:14px;}
.foot-links{display:flex;flex-direction:column;gap:9px;}
.foot-links a{font-size:var(--fs-footer);color:rgba(250,248,243,0.38);text-decoration:none;transition:color .2s;}
.foot-links a:hover{color:var(--gold);}
.foot-bottom{border-top:1px solid rgba(255,255,255,0.06);padding-top:24px;font-size:11px;color:rgba(250,248,243,0.2);display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;}
@media(max-width:1000px){.foot-top{grid-template-columns:1fr 1fr;}}
@media(max-width:768px){
  header{padding:0 20px;}nav,.header-cta,.quick{display:none;}.hamburger{display:flex;}
  .hero{grid-template-columns:1fr;}.hero-left{padding:72px 24px 56px;}.hero-h1{font-size:clamp(36px,9vw,56px);}
  .hero-right{height:55vw;min-height:220px;}.hero-badge{display:none;}
  .menu-section,.reviews-section,.gallery-section,.info-section{padding:60px 20px;}
  .menu-grid,.reviews-grid{grid-template-columns:1fr;}
  .gallery-grid{grid-template-columns:1fr 1fr;}.g-item{grid-row:span 1!important;}
  .info-grid{grid-template-columns:1fr;}
  footer{padding:48px 20px 28px;}.foot-top{grid-template-columns:1fr;}.foot-bottom{flex-direction:column;}
}
`;
}

function cafeHeader(d, activePage) {
  const pages = ['index','menu','gallery','location'];
  const labels = ['홈','메뉴','갤러리','오시는 길'];
  const nav = pages.map((p,i) => `<a href="${p}.html"${activePage===p?' class="active"':''}>${labels[i]}</a>`).join('');
  const mobileNav = pages.map((p,i) => `<a href="${p}.html"${activePage===p?' class="active"':''}>${labels[i]}</a>`).join('');
  return `<div class="quick">
  <a href="tel:${d.phone.replace(/-/g,'')}">전화</a>
  <a href="reservation.html">예약</a>
  <a href="location.html">위치</a>
</div>
<div class="floating" id="floating">
  <a href="tel:${d.phone.replace(/-/g,'')}" class="f-call">📞 전화</a>
  <a href="reservation.html" class="f-book">예약</a>
</div>
<header>
  <a href="index.html" class="logo-area">
    <div><span class="logo-text">${d.name}</span><span class="logo-sub">${d.nameEn}</span></div>
  </a>
  <nav>${nav}</nav>
  <a href="reservation.html" class="header-cta">예약하기</a>
  <button class="hamburger" id="hamBtn" onclick="toggleNav()"><span></span><span></span><span></span></button>
</header>
<div class="mobile-nav" id="mobileNav">
  ${mobileNav}
  <a href="reservation.html" style="background:var(--terra);color:#fff;font-weight:600;">예약하기</a>
</div>`;
}

function cafeFooter(d) {
  return `<footer>
  <div class="foot-top">
    <div>
      <div class="foot-brand">${d.name}</div>
      <div class="foot-desc">${d.slogan}<br><br>${d.address}<br>${d.phone}${d.openHours?'<br>'+d.openHours:''}</div>
    </div>
    <div>
      <div class="foot-head">메뉴</div>
      <div class="foot-links">
        <a href="menu.html">전체 메뉴</a>
        <a href="gallery.html">갤러리</a>
        <a href="reservation.html">예약하기</a>
        <a href="location.html">오시는 길</a>
      </div>
    </div>
    <div>
      <div class="foot-head">연락처</div>
      <div class="foot-links">
        <a href="tel:${d.phone.replace(/-/g,'')}">${d.phone}</a>
        ${d.blog&&d.blog!=='#'?`<a href="${d.blog}" target="_blank">네이버 블로그</a>`:''}
        ${d.insta&&d.insta!=='#'?`<a href="${d.insta}" target="_blank">인스타그램</a>`:''}
      </div>
    </div>
  </div>
  <div class="foot-bottom">
    <span>© ${new Date().getFullYear()} ${d.name}. All rights reserved.</span>
    <span>${d.address}</span>
  </div>
</footer>`;
}

function cafeJs(d) {
  return `function toggleNav(){document.getElementById('hamBtn').classList.toggle('open');document.getElementById('mobileNav').classList.toggle('open');}
window.addEventListener('scroll',function(){var f=document.getElementById('floating');if(f)f.classList.toggle('show',window.scrollY>300);});`;
}

function buildCafeIndexHtml(d, titleHtmlFn) {
  const slides = [{img:d.h1Img,t:titleHtmlFn(d.h1Title)},{img:d.h2Img,t:titleHtmlFn(d.h2Title)},{img:d.h3Img,t:titleHtmlFn(d.h3Title)}];
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${d.name}</title>
<style>${cafeCss(d)}</style>
</head>
<body>
${cafeHeader(d,'index')}
<section class="hero">
  <div class="hero-left">
    <div class="hero-label">${d.nameEn}</div>
    <h1 class="hero-h1">${slides[0].t}</h1>
    <p class="hero-sub">${d.slogan}</p>
    <div class="hero-btns">
      <a href="menu.html" class="btn-terra">메뉴 보기 →</a>
      <a href="reservation.html" class="btn-outline">예약하기</a>
    </div>
  </div>
  <div class="hero-right">
    <div class="hero-bg" style="background-image:url('${d.h1Img}')"></div>
    <div class="hero-badge">매일<br>정성<br>가득</div>
  </div>
</section>
<section class="menu-section">
  <div class="eyebrow">Our Menu</div>
  <h2 class="sec-title">정성을 담은<br><em>대표 메뉴</em></h2>
  <div class="menu-grid">
    ${['p1','p2','p3'].map(p=>`<div class="menu-card">
      <img class="menu-img" src="${d[p+'Img']}" alt="${d[p+'Name']}" onerror="this.style.display='none'">
      <div class="menu-body">
        <span class="menu-tag">${d[p+'Tag']}</span>
        <div class="menu-name">${d[p+'Name']}</div>
        <div class="menu-desc">${d[p+'Desc']}</div>
        <div class="menu-detail">${d[p+'Detail']}</div>
      </div>
    </div>`).join('')}
  </div>
  <div style="text-align:center;margin-top:40px"><a href="menu.html" class="btn-terra">전체 메뉴 보기</a></div>
</section>
<section class="info-section">
  <div class="eyebrow" style="color:var(--gold)">Visit Us</div>
  <h2 class="sec-title" style="color:#fff">방문 전<br><em style="color:var(--gold)">확인하세요</em></h2>
  <div class="info-grid">
    <div><div class="info-head">🕐 영업시간</div><div class="info-val">${d.openHours||'매일 09:00 – 21:00'}${d.lastOrder?'<br>라스트오더: '+d.lastOrder:''}</div></div>
    <div><div class="info-head">📍 주소</div><div class="info-val">${d.address}</div></div>
    <div><div class="info-head">🚗 주차</div><div class="info-val">${d.parking||'주차 가능'}</div></div>
  </div>
</section>
<section class="reviews-section">
  <div class="eyebrow">Review</div>
  <h2 class="sec-title">고객들의<br><em>솔직한 후기</em></h2>
  <div class="reviews-grid">
    ${[1,2,3].map(n=>`<div class="review-card">
      <div class="review-stars">★★★★★</div>
      <p class="review-text">"${d['review'+n]}"</p>
      <div class="review-who">${d['review'+n+'who']||'네이버 방문자'}</div>
    </div>`).join('')}
  </div>
</section>
${d.placeId ? `
<section style="padding:80px 52px;background:var(--cream);">
  <div style="text-align:center;margin-bottom:40px">
    <div style="font-size:11px;letter-spacing:.24em;color:#03C75A;text-transform:uppercase;font-weight:700;margin-bottom:12px">Naver Place</div>
    <h2 style="font-size:clamp(24px,3vw,36px);font-weight:700;color:var(--brown);margin-bottom:8px;font-family:inherit">네이버 플레이스<br>실시간 정보</h2>
    <p style="font-size:14px;color:rgba(45,34,21,0.6);margin-top:8px">실제 방문 고객들의 생생한 후기를 확인하세요</p>
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
${cafeFooter(d)}
<script>${cafeJs(d)}<\/script>
</body>
</html>`;
}

function buildCafeMenuHtml(d) {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>메뉴 | ${d.name}</title>
<style>${cafeCss(d)}
.page-top{padding-top:68px;background:var(--warm);padding-bottom:52px;padding-left:52px;padding-right:52px;}
.menu-full{padding:60px 52px;background:var(--cream);}
.menu-full-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:32px;}
.menu-full-card{background:#fff;display:grid;grid-template-columns:260px 1fr;overflow:hidden;box-shadow:0 2px 20px rgba(92,51,23,0.06);}
.menu-full-img{width:100%;height:100%;min-height:260px;object-fit:cover;display:block;}
.menu-full-body{padding:36px 32px;display:flex;flex-direction:column;justify-content:center;}
@media(max-width:900px){.page-top,.menu-full{padding-left:20px;padding-right:20px;}.menu-full-grid{grid-template-columns:1fr;}.menu-full-card{grid-template-columns:1fr;}.menu-full-img{max-height:220px;}}
</style>
</head>
<body>
${cafeHeader(d,'menu')}
<div class="page-top">
  <div class="eyebrow">Our Menu</div>
  <h1 class="sec-title">정성 가득한<br><em>전체 메뉴</em></h1>
</div>
<div class="menu-full">
  <div class="menu-full-grid">
    ${['p1','p2','p3'].map(p=>`<div class="menu-full-card">
      <img class="menu-full-img" src="${d[p+'Img']}" alt="${d[p+'Name']}" onerror="this.style.background='var(--warm)'">
      <div class="menu-full-body">
        <span class="menu-tag" style="margin-bottom:14px">${d[p+'Tag']}</span>
        <div class="sec-title" style="font-size:clamp(22px,2.5vw,32px)">${d[p+'Name']}</div>
        <p style="font-size:var(--fs-body);color:rgba(45,34,21,0.6);line-height:1.85;margin-bottom:12px">${d[p+'Desc']}</p>
        <p style="font-size:13px;color:rgba(45,34,21,0.45);line-height:1.8;border-top:1px solid var(--bd);padding-top:14px">${d[p+'Detail']}</p>
        <div style="margin-top:24px"><a href="reservation.html" class="btn-terra">예약하기 →</a></div>
      </div>
    </div>`).join('')}
  </div>
</div>
${cafeFooter(d)}
<script>${cafeJs(d)}<\/script>
</body>
</html>`;
}

function buildCafeGalleryHtml(d) {
  const uploadedImgs = (d.galleryUrls&&d.galleryUrls.length>0)?d.galleryUrls:[];
  const imgs = uploadedImgs.length>0
    ? uploadedImgs.concat([d.h1Img,d.h2Img,d.h3Img,d.p1Img,d.p2Img,d.p3Img]).slice(0,12)
    : [d.h1Img,d.h2Img,d.h3Img,d.p1Img,d.p2Img,d.p3Img];
  const lbSrcs = JSON.stringify(imgs);
  const gridItems = imgs.map((src,i)=>`<div class="g-item" onclick="openLb(${i})"><img src="${src}" alt="" loading="lazy" onerror="this.parentElement.style.background='var(--warm)'"></div>`).join('');
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>갤러리 | ${d.name}</title>
<style>${cafeCss(d)}</style>
</head>
<body>
${cafeHeader(d,'gallery')}
<div style="padding-top:68px;background:var(--warm);padding:68px 52px 48px">
  <div class="eyebrow">Gallery</div>
  <h1 class="sec-title">${d.name}의<br><em>공간과 메뉴</em></h1>
</div>
<div style="padding:0 52px 80px;background:var(--cream)">
  <div class="gallery-grid" style="margin-top:32px">${gridItems}</div>
</div>
${cafeFooter(d)}
<div id="lb" onclick="if(event.target===this)closeLb()">
  <button class="lb-close" onclick="closeLb()">✕</button>
  <button class="lb-prev" onclick="lbMove(-1)">&#8592;</button>
  <img id="lbImg" src="" alt="">
  <button class="lb-next" onclick="lbMove(1)">&#8594;</button>
</div>
<script>
${cafeJs(d)}
var lbSrcs=${lbSrcs},lbIdx=0;
function openLb(i){lbIdx=i;document.getElementById('lbImg').src=lbSrcs[i];document.getElementById('lb').classList.add('open');}
function closeLb(){document.getElementById('lb').classList.remove('open');}
function lbMove(d){lbIdx=(lbIdx+d+lbSrcs.length)%lbSrcs.length;document.getElementById('lbImg').src=lbSrcs[lbIdx];}
document.addEventListener('keydown',function(e){if(document.getElementById('lb').classList.contains('open')){if(e.key==='ArrowLeft')lbMove(-1);if(e.key==='ArrowRight')lbMove(1);if(e.key==='Escape')closeLb();}});
<\/script>
</body>
</html>`;
}

function buildCafeLocationHtml(d) {
  const mapSrc = d.placeId?`https://map.naver.com/p/entry/place/${d.placeId}`:`https://map.naver.com/v5/search/${encodeURIComponent(d.address)}`;
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>오시는 길 | ${d.name}</title>
<style>${cafeCss(d)}
.loc-wrap{padding-top:68px;min-height:100vh;}
.loc-top{background:var(--warm);padding:64px 52px;}
.loc-map{margin:0 52px;border:1px solid var(--bd);}
.loc-map iframe{display:block;width:100%;height:460px;}
.loc-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;padding:40px 52px 80px;}
.loc-card{background:#fff;padding:28px 32px;border-top:3px solid var(--terra);box-shadow:0 2px 16px rgba(92,51,23,0.06);}
.loc-icon{font-size:22px;margin-bottom:10px;}
.loc-label{font-size:10px;letter-spacing:.24em;color:var(--terra);text-transform:uppercase;margin-bottom:8px;}
.loc-val{font-size:var(--fs-body);color:rgba(45,34,21,0.75);line-height:1.85;}
@media(max-width:768px){.loc-top,.loc-map,.loc-cards{padding-left:20px;padding-right:20px;}.loc-map{margin:0 20px;}.loc-map iframe{height:320px;}.loc-cards{grid-template-columns:1fr;}}
</style>
</head>
<body>
${cafeHeader(d,'location')}
<div class="loc-wrap">
  <div class="loc-top">
    <div class="eyebrow">Location</div>
    <h1 class="sec-title">찾아오시는<br><em>방법 안내</em></h1>
  </div>
  <div class="loc-map"><iframe src="${mapSrc}" frameborder="0" allowfullscreen></iframe></div>
  <div class="loc-cards">
    <div class="loc-card"><div class="loc-icon">📍</div><div class="loc-label">Address</div><div class="loc-val">${d.address}</div></div>
    <div class="loc-card"><div class="loc-icon">🕐</div><div class="loc-label">Hours</div><div class="loc-val">${d.openHours||'매일 09:00 – 21:00'}${d.lastOrder?'<br>라스트오더 '+d.lastOrder:''}</div></div>
    <div class="loc-card"><div class="loc-icon">🚗</div><div class="loc-label">Parking</div><div class="loc-val">${d.parking||'주차 가능'}</div></div>
  </div>
</div>
${cafeFooter(d)}
<script>${cafeJs(d)}<\/script>
</body>
</html>`;
}

function buildCafeReservationHtml(d) {
  return buildReservationPageHtml(d, cafeCss(d), cafeHeader(d,'reservation'), cafeFooter(d), cafeJs(d));
}
