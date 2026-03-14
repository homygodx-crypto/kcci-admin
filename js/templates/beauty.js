/* ============================================================
   Beauty Template — Sleek Black Beauty
   컨셉: 블랙 + 로즈골드, 풀블리드 이미지, 수직 타이포
   폰트: Josefin Sans + Noto Sans KR
   ============================================================ */

function beautyCss(d) {
  return `
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
${buildFontSizeCss(d)}
*{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;}
body{font-family:'Noto Sans KR',sans-serif;background:#fff;color:#1a0f14;overflow-x:hidden;}
:root{--bg:#fff;--warm:#fdf5f6;--mid:#f8eef0;--rose:#c9808a;--rose2:#e8a0aa;--dark:#1a0f14;--gray:#7a5a62;--bd:rgba(201,128,138,0.18);}
header{position:fixed;top:0;left:0;right:0;z-index:100;height:66px;display:flex;align-items:center;justify-content:space-between;padding:0 52px;background:rgba(255,255,255,0.97);backdrop-filter:blur(10px);border-bottom:1px solid var(--bd);}
.logo-text{font-family:'Josefin Sans',sans-serif;font-size:18px;color:var(--dark);letter-spacing:.14em;text-transform:uppercase;text-decoration:none;}
.logo-sub{display:block;font-size:9px;color:var(--rose);letter-spacing:.3em;text-transform:uppercase;margin-top:2px;}
nav{display:flex;gap:36px;}
nav a{font-family:'Josefin Sans',sans-serif;font-size:14px;color:rgba(26,15,20,0.5);text-decoration:none;letter-spacing:.16em;text-transform:uppercase;transition:color .2s;}
nav a:hover,nav a.active{color:var(--rose);background:rgba(201,128,138,0.06);}
.header-cta{font-family:'Josefin Sans',sans-serif;font-size:11px;letter-spacing:.18em;text-transform:uppercase;background:none;border:1px solid var(--bd);color:var(--rose);padding:8px 18px;text-decoration:none;transition:all .2s;cursor:pointer;background:rgba(201,128,138,0.06);}
.header-cta:hover{background:var(--rose);color:#000;}
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:4px;}
.hamburger span{display:block;width:22px;height:1px;background:var(--dark);transition:all .3s;}
.hamburger.open span:nth-child(1){transform:translateY(6px) rotate(45deg);}
.hamburger.open span:nth-child(2){opacity:0;}
.hamburger.open span:nth-child(3){transform:translateY(-6px) rotate(-45deg);}
.mobile-nav{display:none;position:fixed;top:66px;left:0;right:0;background:#fff;z-index:99;border-bottom:2px solid var(--rose);flex-direction:column;}
.mobile-nav.open{display:flex;}
.mobile-nav a{font-size:14px;color:rgba(26,15,20,0.7);text-decoration:none;padding:16px 28px;border-bottom:1px solid var(--bd);letter-spacing:.12em;text-transform:uppercase;}
.mobile-nav a:hover,.mobile-nav a.active{color:var(--rose);background:rgba(201,128,138,0.06);}
.quick{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:99;display:flex;flex-direction:column;gap:1px;}
.quick a{background:var(--dark);color:rgba(255,255,255,0.75);font-size:10px;writing-mode:vertical-rl;padding:18px 10px;text-decoration:none;letter-spacing:.14em;border-left:1px solid var(--bd);transition:all .2s;}
.quick a:hover{background:var(--rose);color:#000;}
.floating{position:fixed;bottom:24px;right:20px;display:flex;flex-direction:column;gap:8px;z-index:98;opacity:0;transition:opacity .3s;pointer-events:none;}
.floating.show{opacity:1;pointer-events:all;}
.floating a{padding:12px 20px;font-size:13px;font-family:inherit;text-decoration:none;display:flex;align-items:center;gap:6px;}
.f-call{background:#03C75A;color:#fff;}.f-book{background:var(--rose);color:#000;font-weight:700;}
.btn-rose{display:inline-flex;align-items:center;gap:8px;background:var(--rose);color:#000;padding:13px 28px;font-family:'Josefin Sans',sans-serif;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;text-decoration:none;transition:all .2s;border:none;cursor:pointer;}
.btn-rose:hover{background:var(--rose2);}
.btn-outline{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--bd);color:var(--dark);padding:12px 28px;font-family:'Josefin Sans',sans-serif;font-size:12px;letter-spacing:.14em;text-transform:uppercase;text-decoration:none;transition:all .2s;}
.btn-outline:hover{border-color:var(--rose);color:var(--rose);}
.eyebrow{font-family:'Josefin Sans',sans-serif;font-size:10px;letter-spacing:.36em;color:var(--rose);text-transform:uppercase;margin-bottom:14px;display:flex;align-items:center;gap:10px;}
.eyebrow::before{content:'';display:block;width:28px;height:1px;background:var(--rose);}
.sec-title{font-family:'Josefin Sans',sans-serif;font-size:var(--fs-section);line-height:1.05;color:var(--dark);margin-bottom:16px;letter-spacing:.02em;font-weight:300;}
.sec-title em{font-style:normal;color:var(--rose);font-weight:600;}
/* 히어로 — 풀스크린 오버레이 */
.hero{height:100vh;position:relative;display:flex;align-items:center;overflow:hidden;}
.hero-bg{position:absolute;inset:0;background-size:cover;background-position:center;filter:brightness(.5);}
.hero-overlay{position:absolute;inset:0;background:linear-gradient(to right,rgba(255,255,255,.85) 0%,rgba(255,255,255,.3) 50%,transparent 100%);}
.hero-content{position:relative;z-index:2;padding:0 60px;max-width:700px;}
.hero-eyebrow{font-family:'Josefin Sans',sans-serif;font-size:10px;letter-spacing:.4em;color:var(--rose);text-transform:uppercase;margin-bottom:24px;display:flex;align-items:center;gap:14px;}
.hero-eyebrow::before{content:'';display:block;width:36px;height:1px;background:var(--rose);}
.hero-h1{font-family:'Josefin Sans',sans-serif;font-size:var(--fs-hero);line-height:.98;font-weight:300;margin-bottom:24px;letter-spacing:.04em;color:var(--dark);}
.hero-h1 em{font-style:normal;color:var(--rose);font-weight:700;}
.hero-sub{font-size:var(--fs-body);color:rgba(26,15,20,0.62);line-height:1.9;margin-bottom:44px;max-width:440px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;}
.hero-side{position:absolute;right:60px;top:50%;transform:translateY(-50%);writing-mode:vertical-rl;font-family:'Josefin Sans',sans-serif;font-size:10px;letter-spacing:.3em;color:rgba(240,232,224,0.2);text-transform:uppercase;z-index:2;}
.hero-scroll{position:absolute;bottom:32px;left:60px;z-index:2;display:flex;align-items:center;gap:12px;font-family:'Josefin Sans',sans-serif;font-size:10px;color:rgba(240,232,224,0.3);letter-spacing:.2em;text-transform:uppercase;}
.hero-scroll::after{content:'';display:block;width:36px;height:1px;background:rgba(240,232,224,0.15);}
/* 시술 */
.service-section{background:var(--warm);padding:96px 52px;}
.service-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;background:transparent;margin-top:56px;}
.svc-card{background:#fff;border:1px solid var(--bd);padding:40px 32px;transition:background .3s;position:relative;overflow:hidden;}
.svc-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:var(--rose);transform:scaleX(0);transition:transform .4s;}
.svc-card:hover{background:var(--mid);}.svc-card:hover::after{transform:scaleX(1);}
.svc-img{width:100%;aspect-ratio:3/2;object-fit:cover;margin-bottom:28px;display:block;filter:grayscale(20%);}
.svc-tag{font-family:'Josefin Sans',sans-serif;font-size:9px;letter-spacing:.3em;color:var(--rose);text-transform:uppercase;margin-bottom:12px;display:block;}
.svc-name{font-family:'Josefin Sans',sans-serif;font-size:var(--fs-card);color:var(--dark);margin-bottom:12px;font-weight:400;letter-spacing:.04em;}
.svc-desc{font-size:var(--fs-body);color:var(--gray);line-height:1.85;}
/* 스타일리스트 */
.stylist-section{background:#fff;padding:96px 52px;}
.stylist-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;background:transparent;margin-top:56px;}
.stylist-card{background:var(--warm);border:1px solid var(--bd);display:grid;grid-template-columns:260px 1fr;}
.stylist-img{width:100%;height:100%;min-height:340px;object-fit:cover;display:block;filter:grayscale(15%);}
.stylist-body{padding:48px 40px;display:flex;flex-direction:column;justify-content:center;}
.stylist-role{font-family:'Josefin Sans',sans-serif;font-size:9px;letter-spacing:.32em;color:var(--rose);text-transform:uppercase;margin-bottom:10px;display:block;}
.stylist-name{font-family:'Josefin Sans',sans-serif;font-size:var(--fs-card);color:var(--dark);margin-bottom:20px;font-weight:300;letter-spacing:.06em;}
.stylist-certs{list-style:none;display:flex;flex-direction:column;gap:8px;}
.stylist-certs li{font-size:13px;color:var(--gray);padding-left:18px;position:relative;line-height:1.6;}
.stylist-certs li::before{content:'·';position:absolute;left:0;color:var(--rose);font-size:16px;line-height:1.2;}
/* 후기 */
.reviews-section{background:var(--warm);padding:96px 52px;}
.reviews-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:56px;}
.review-card{background:#fff;border:1px solid var(--bd);padding:36px;}
.review-num{font-family:'Josefin Sans',sans-serif;font-size:48px;color:rgba(201,128,138,0.12);font-weight:700;line-height:1;margin-bottom:16px;}
.review-text{font-size:var(--fs-review);color:rgba(26,15,20,0.72);line-height:1.9;margin-bottom:16px;}
.review-who{font-family:'Josefin Sans',sans-serif;font-size:10px;letter-spacing:.2em;color:var(--rose);text-transform:uppercase;}
/* 갤러리 */
.gallery-section{background:var(--black);}
.gallery-header{padding:80px 52px 36px;}
.gallery-grid{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:200px;}
.g-item{overflow:hidden;cursor:pointer;background:#f0e8ec;}
.g-item:nth-child(1){grid-column:span 2;grid-row:span 2;}
.g-item:nth-child(6){grid-column:span 2;}
.g-item img{width:100%;height:100%;object-fit:cover;transition:transform .6s ease,filter .4s;display:block;filter:grayscale(20%);}
.g-item:hover img{transform:scale(1.06);filter:grayscale(0);}
#lb{position:fixed;inset:0;background:rgba(0,0,0,0.97);z-index:1000;display:none;align-items:center;justify-content:center;}
#lb.open{display:flex;}
#lbImg{max-width:88vw;max-height:88vh;object-fit:contain;}
.lb-close{position:absolute;top:24px;right:32px;background:none;border:none;color:rgba(255,255,255,.4);font-size:26px;cursor:pointer;}
.lb-prev,.lb-next{position:absolute;top:50%;transform:translateY(-50%);background:none;border:none;color:rgba(255,255,255,.3);font-size:36px;cursor:pointer;padding:16px;}
.lb-prev{left:16px;}.lb-next{right:16px;}
footer{background:var(--dark);border-top:1px solid rgba(255,255,255,0.1);padding:56px 52px 36px;}
.foot-top{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:48px;margin-bottom:44px;}
.foot-brand{font-family:'Josefin Sans',sans-serif;font-size:18px;color:var(--rose);letter-spacing:.1em;text-transform:uppercase;margin-bottom:10px;}
.foot-desc{font-size:var(--fs-footer);color:rgba(255,255,255,0.4);line-height:1.9;}
.foot-head{font-family:'Josefin Sans',sans-serif;font-size:9px;letter-spacing:.3em;color:var(--rose);text-transform:uppercase;margin-bottom:14px;}
.foot-links{display:flex;flex-direction:column;gap:9px;}
.foot-links a{font-size:var(--fs-footer);color:rgba(255,255,255,0.45);text-decoration:none;transition:color .2s;}
.foot-links a:hover{color:var(--rose);}
.foot-bottom{border-top:1px solid rgba(255,255,255,0.08);padding-top:24px;font-size:11px;color:rgba(255,255,255,0.25);display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;}
@media(max-width:1100px){.stylist-grid{grid-template-columns:1fr;}.foot-top{grid-template-columns:1fr 1fr;}}
@media(max-width:768px){
  header{padding:0 20px;}nav,.header-cta,.quick,.hero-side,.hero-scroll{display:none;}.hamburger{display:flex;}
  .hero-content{padding:0 20px;}.hero-h1{font-size:clamp(40px,10vw,64px);}
  .service-section,.stylist-section,.reviews-section,.gallery-header{padding:60px 20px;}
  .service-grid{grid-template-columns:1fr;}.reviews-grid{grid-template-columns:1fr;}
  .stylist-card{grid-template-columns:1fr;}
  .stylist-img{height:260px;min-height:unset;}
  .stylist-body{padding:28px 20px;}
  .gallery-grid{grid-template-columns:1fr 1fr;grid-auto-rows:160px;}
  .g-item{grid-column:span 1!important;grid-row:span 1!important;}
  footer{padding:48px 20px 28px;}.foot-top{grid-template-columns:1fr;}.foot-bottom{flex-direction:column;}
}
`;
}

function beautyHeader(d, activePage) {
  const pages = ['index','service','gallery','location'];
  const labels = ['Home','Service','Gallery','Location'];
  const nav = pages.map((p,i)=>`<a href="${p}.html"${activePage===p?' class="active"':''}>${labels[i]}</a>`).join('');
  const mobileNav = pages.map((p,i)=>`<a href="${p}.html"${activePage===p?' class="active"':''}>${labels[i]}</a>`).join('');
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
  <a href="index.html" style="text-decoration:none">
    <span class="logo-text">${d.name}</span>
    <span class="logo-sub">${d.nameEn}</span>
  </a>
  <nav>${nav}</nav>
  <a href="reservation.html" class="header-cta">예약하기</a>
  <button class="hamburger" id="hamBtn" onclick="toggleNav()"><span></span><span></span><span></span></button>
</header>
<div class="mobile-nav" id="mobileNav">
  ${mobileNav}
  <a href="reservation.html" style="background:var(--rose);color:#000;font-weight:700;letter-spacing:.1em;">예약하기</a>
</div>`;
}

function beautyFooter(d) {
  return `<footer>
  <div class="foot-top">
    <div>
      <div class="foot-brand">${d.name}</div>
      <div class="foot-desc">${d.slogan}<br><br>${d.address}<br>${d.phone}${d.openHours?'<br>'+d.openHours:''}</div>
    </div>
    <div>
      <div class="foot-head">Menu</div>
      <div class="foot-links">
        <a href="service.html">시술 메뉴</a>
        <a href="gallery.html">갤러리</a>
        <a href="reservation.html">예약하기</a>
        <a href="location.html">오시는 길</a>
      </div>
    </div>
    <div>
      <div class="foot-head">Contact</div>
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

function beautyJs(d) {
  return `function toggleNav(){document.getElementById('hamBtn').classList.toggle('open');document.getElementById('mobileNav').classList.toggle('open');}
window.addEventListener('scroll',function(){var f=document.getElementById('floating');if(f)f.classList.toggle('show',window.scrollY>300);});`;
}

function buildBeautyIndexHtml(d, titleHtmlFn) {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${d.name}</title>
<style>${beautyCss(d)}</style>
</head>
<body>
${beautyHeader(d,'index')}
<section class="hero">
  <div class="hero-bg" style="background-image:url('${d.h1Img}')"></div>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <div class="hero-eyebrow">${d.nameEn}</div>
    <h1 class="hero-h1">${titleHtmlFn(d.h1Title)}</h1>
    <p class="hero-sub">${d.slogan}</p>
    <div class="hero-btns">
      <a href="service.html" class="btn-rose">시술 메뉴 →</a>
      <a href="reservation.html" class="btn-outline">예약하기</a>
    </div>
  </div>
  <div class="hero-side">${d.nameEn}</div>
  <div class="hero-scroll">Scroll</div>
</section>
<section class="service-section">
  <div class="eyebrow">Service</div>
  <h2 class="sec-title">대표 시술<br><em>메뉴</em></h2>
  <div class="service-grid">
    ${['p1','p2','p3'].map(p=>`<div class="svc-card">
      <img class="svc-img" src="${d[p+'Img']}" alt="${d[p+'Name']}" onerror="this.style.display='none'">
      <span class="svc-tag">${d[p+'Tag']}</span>
      <div class="svc-name">${d[p+'Name']}</div>
      <div class="svc-desc">${d[p+'Desc']}</div>
    </div>`).join('')}
  </div>
</section>
<section class="stylist-section">
  <div class="eyebrow">Stylist</div>
  <h2 class="sec-title">전문<br><em>스타일리스트</em></h2>
  <div class="stylist-grid">
    ${['i1','i2'].map(i=>`<div class="stylist-card">
      <img class="stylist-img" src="${d[i+'Img']}" alt="${d[i+'Name']}" onerror="this.src='https://placehold.co/400x500/1a1a1a/333?text=Photo'">
      <div class="stylist-body">
        <span class="stylist-role">${d[i+'Role']}</span>
        <div class="stylist-name">${d[i+'Name']}</div>
        <ul class="stylist-certs">${(d[i+'Cert']||'').split('\n').filter(l=>l.trim()).map(l=>`<li>${l}</li>`).join('')}</ul>
      </div>
    </div>`).join('')}
  </div>
</section>
<section class="reviews-section">
  <div class="eyebrow">Review</div>
  <h2 class="sec-title">고객<br><em>후기</em></h2>
  <div class="reviews-grid">
    ${[1,2,3].map(n=>`<div class="review-card">
      <div class="review-num">0${n}</div>
      <p class="review-text">${d['review'+n]}</p>
      <div class="review-who">${d['review'+n+'who']||'방문 고객'}</div>
    </div>`).join('')}
  </div>
</section>
${d.placeId ? `
<section style="padding:80px 52px;background:var(--warm);">
  <div style="text-align:center;margin-bottom:40px">
    <div style="font-size:11px;letter-spacing:.24em;color:#03C75A;text-transform:uppercase;font-weight:700;margin-bottom:12px">Naver Place</div>
    <h2 style="font-size:clamp(24px,3vw,36px);font-weight:700;color:var(--dark);margin-bottom:8px;font-family:inherit">네이버 플레이스<br>실시간 정보</h2>
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
${beautyFooter(d)}
<script>${beautyJs(d)}<\/script>
</body>
</html>`;
}

function buildBeautyServiceHtml(d) {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>시술 메뉴 | ${d.name}</title>
<style>${beautyCss(d)}
.svc-page{padding-top:66px;min-height:100vh;background:var(--bg);}
.svc-top{padding:72px 52px 56px;background:var(--warm);border-bottom:1px solid var(--bd);}
.svc-list{padding:60px 52px;display:flex;flex-direction:column;gap:20px;background:var(--bg);}
.svc-item{display:grid;grid-template-columns:320px 1fr;background:#fff;border:1px solid var(--bd);}
.svc-item:nth-child(even){grid-template-columns:1fr 320px;}
.svc-item:nth-child(even) .svc-item-img{order:2;}
.svc-item:nth-child(even) .svc-item-body{order:1;}
.svc-item-img img{width:100%;height:100%;min-height:300px;object-fit:cover;display:block;filter:grayscale(15%);}
.svc-item-body{padding:44px 40px;display:flex;flex-direction:column;justify-content:center;border-left:3px solid var(--rose);}
.cta-wrap{padding:80px 52px;text-align:center;background:var(--warm);}
@media(max-width:900px){
  .svc-top,.svc-list,.cta-wrap{padding-left:20px;padding-right:20px;}
  .svc-item,.svc-item:nth-child(even){grid-template-columns:1fr;}
  .svc-item:nth-child(even) .svc-item-img,.svc-item:nth-child(even) .svc-item-body{order:unset;}
  .svc-item-img img{min-height:220px;max-height:260px;}
  .svc-item-body{padding:28px 20px;}
}
</style>
</head>
<body>
${beautyHeader(d,'service')}
<div class="svc-page">
  <div class="svc-top">
    <div class="eyebrow">Service</div>
    <h1 class="sec-title">전문 시술<br><em>메뉴 안내</em></h1>
  </div>
  <div class="svc-list">
    ${['p1','p2','p3'].map(p=>`<div class="svc-item">
      <div class="svc-item-img"><img src="${d[p+'Img']}" alt="${d[p+'Name']}" onerror="this.style.background='#1a1a1a'"></div>
      <div class="svc-item-body">
        <span class="svc-tag" style="margin-bottom:16px">${d[p+'Tag']}</span>
        <div class="sec-title" style="font-size:clamp(24px,3vw,38px)">${d[p+'Name']}</div>
        <p style="font-size:var(--fs-body);color:var(--gray);line-height:1.9;margin-bottom:14px">${d[p+'Desc']}</p>
        <p style="font-size:13px;color:rgba(26,15,20,0.45);line-height:1.85;border-top:1px solid var(--bd);padding-top:16px">${d[p+'Detail']}</p>
        <div style="margin-top:28px"><a href="reservation.html" class="btn-rose">예약하기 →</a></div>
      </div>
    </div>`).join('')}
  </div>
  <div class="cta-wrap">
    <div class="eyebrow" style="justify-content:center">Ready?</div>
    <h2 class="sec-title" style="text-align:center">지금 바로<br><em>예약하세요</em></h2>
    <div style="display:flex;gap:12px;justify-content:center;margin-top:36px">
      <a href="reservation.html" class="btn-rose">예약하기 →</a>
      <a href="tel:${d.phone.replace(/-/g,'')}" class="btn-outline">📞 ${d.phone}</a>
    </div>
  </div>
</div>
${beautyFooter(d)}
<script>${beautyJs(d)}<\/script>
</body>
</html>`;
}

function buildBeautyGalleryHtml(d) {
  const uploadedImgs = (d.galleryUrls&&d.galleryUrls.length>0)?d.galleryUrls:[];
  const imgs = uploadedImgs.length>0
    ? uploadedImgs.concat([d.p1Img,d.p2Img,d.p3Img,d.i1Img,d.i2Img,d.h1Img,d.h2Img]).slice(0,12)
    : [d.p1Img,d.p2Img,d.p3Img,d.i1Img,d.i2Img,d.h1Img,d.h2Img];
  const lbSrcs = JSON.stringify(imgs);
  const gridItems = imgs.map((src,i)=>`<div class="g-item" onclick="openLb(${i})"><img src="${src}" alt="" loading="lazy" onerror="this.src='https://placehold.co/600x400/f0e8d8/B8902A?text=Photo'"></div>`).join('');
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>갤러리 | ${d.name}</title>
<style>${beautyCss(d)}</style>
</head>
<body>
${beautyHeader(d,'gallery')}
<div style="padding-top:66px;background:var(--bg)">
  <div class="gallery-header">
    <div class="eyebrow">Gallery</div>
    <h1 class="sec-title">${d.name}<br><em>포트폴리오</em></h1>
  </div>
  <div class="gallery-grid">${gridItems}</div>
</div>
${beautyFooter(d)}
<div id="lb" onclick="if(event.target===this)closeLb()">
  <button class="lb-close" onclick="closeLb()">✕</button>
  <button class="lb-prev" onclick="lbMove(-1)">&#8592;</button>
  <img id="lbImg" src="" alt="">
  <button class="lb-next" onclick="lbMove(1)">&#8594;</button>
</div>
<script>
${beautyJs(d)}
var lbSrcs=${lbSrcs},lbIdx=0;
function openLb(i){lbIdx=i;document.getElementById('lbImg').src=lbSrcs[i];document.getElementById('lb').classList.add('open');}
function closeLb(){document.getElementById('lb').classList.remove('open');}
function lbMove(d){lbIdx=(lbIdx+d+lbSrcs.length)%lbSrcs.length;document.getElementById('lbImg').src=lbSrcs[lbIdx];}
document.addEventListener('keydown',function(e){if(document.getElementById('lb').classList.contains('open')){if(e.key==='ArrowLeft')lbMove(-1);if(e.key==='ArrowRight')lbMove(1);if(e.key==='Escape')closeLb();}});
<\/script>
</body>
</html>`;
}

function buildBeautyLocationHtml(d) {
  const mapSrc = d.placeId?`https://map.naver.com/p/entry/place/${d.placeId}`:`https://map.naver.com/v5/search/${encodeURIComponent(d.address)}`;
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>오시는 길 | ${d.name}</title>
<style>${beautyCss(d)}
.loc-page{padding-top:66px;background:var(--bg);}
.loc-inner{padding:72px 52px 80px;}
.loc-map{border:1px solid var(--bd);margin-bottom:48px;}
.loc-map iframe{display:block;width:100%;height:460px;/* no filter */}
.loc-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
.loc-card{background:#fff;border:1px solid var(--bd);padding:28px;transition:border-color .2s;}
.loc-card:hover{border-color:var(--rose);}
.loc-icon{font-size:22px;margin-bottom:10px;}
.loc-label{font-family:'Josefin Sans',sans-serif;font-size:9px;letter-spacing:.3em;color:var(--rose);text-transform:uppercase;margin-bottom:8px;}
.loc-val{font-size:var(--fs-body);color:var(--gray);line-height:1.85;}
@media(max-width:768px){.loc-inner{padding:48px 20px 60px;}.loc-map iframe{height:320px;}.loc-cards{grid-template-columns:1fr;}}
</style>
</head>
<body>
${beautyHeader(d,'location')}
<div class="loc-page">
  <div class="loc-inner">
    <div class="eyebrow">Location</div>
    <h1 class="sec-title">찾아오시는<br><em>방법 안내</em></h1>
    <div class="loc-map"><iframe src="${mapSrc}" frameborder="0" allowfullscreen></iframe></div>
    <div class="loc-cards">
      <div class="loc-card"><div class="loc-icon">📍</div><div class="loc-label">Address</div><div class="loc-val">${d.address}</div></div>
      <div class="loc-card"><div class="loc-icon">🕐</div><div class="loc-label">Hours</div><div class="loc-val">${d.openHours||'문의 바랍니다'}</div></div>
      <div class="loc-card"><div class="loc-icon">🚗</div><div class="loc-label">Parking</div><div class="loc-val">${d.parking||'주차 가능'}</div></div>
    </div>
    <div style="margin-top:44px;display:flex;gap:12px">
      <a href="reservation.html" class="btn-rose">예약하기 →</a>
      <a href="tel:${d.phone.replace(/-/g,'')}" class="btn-outline">📞 ${d.phone}</a>
    </div>
  </div>
</div>
${beautyFooter(d)}
<script>${beautyJs(d)}<\/script>
</body>
</html>`;
}

function buildBeautyReservationHtml(d) {
  return buildReservationPageHtml(d, beautyCss(d), beautyHeader(d,'reservation'), beautyFooter(d), beautyJs(d));
}
