/* ============================================================
   Medical Template — Natural Healing
   컨셉: 딥그린 + 베이지, 자연 힐링, 신뢰감, 여백 중심
   폰트: Noto Serif KR + Noto Sans KR
   ============================================================ */

function medicalCss(d) {
  return `
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;600&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
${buildFontSizeCss(d)}
*{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;}
body{font-family:'Noto Sans KR',sans-serif;background:#f8f6f0;color:#2a2a22;overflow-x:hidden;}
:root{--bg:#f8f6f0;--warm:#f0ece0;--green:#2d5a3d;--green2:#3d7a52;--beige:#e8e0cc;--dark:#2a2a22;--bd:rgba(45,90,61,0.15);}
header{position:fixed;top:0;left:0;right:0;z-index:100;height:70px;display:flex;align-items:center;justify-content:space-between;padding:0 52px;background:rgba(248,246,240,0.97);backdrop-filter:blur(8px);border-bottom:1px solid var(--bd);}
.logo-area{text-decoration:none;}
.logo-text{font-family:'Noto Serif KR',serif;font-size:19px;color:var(--green);display:block;}
.logo-sub{font-size:10px;color:rgba(45,90,61,0.6);letter-spacing:.16em;text-transform:uppercase;margin-top:2px;display:block;}
nav{display:flex;gap:36px;}
nav a{font-size:14px;color:rgba(42,42,34,0.55);text-decoration:none;letter-spacing:.04em;transition:color .2s;font-weight:500;}
nav a:hover,nav a.active{color:var(--green);}
.header-cta{background:var(--green);color:#fff;padding:9px 20px;font-size:13px;font-weight:500;text-decoration:none;transition:background .2s;}
.header-cta:hover{background:var(--green2);}
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:4px;}
.hamburger span{display:block;width:22px;height:2px;background:var(--green);transition:all .3s;}
.hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
.hamburger.open span:nth-child(2){opacity:0;}
.hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}
.mobile-nav{display:none;position:fixed;top:70px;left:0;right:0;background:var(--bg);z-index:99;border-bottom:2px solid var(--green);flex-direction:column;}
.mobile-nav.open{display:flex;}
.mobile-nav a{font-size:15px;color:var(--dark);text-decoration:none;padding:16px 28px;border-bottom:1px solid var(--bd);}
.mobile-nav a:hover,.mobile-nav a.active{background:var(--warm);color:var(--green);}
.quick{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:99;display:flex;flex-direction:column;gap:1px;}
.quick a{background:var(--green);color:rgba(255,255,255,.8);font-size:10px;writing-mode:vertical-rl;padding:16px 10px;text-decoration:none;letter-spacing:.14em;transition:background .2s;}
.quick a:hover{background:var(--green2);}
.floating{position:fixed;bottom:24px;right:20px;display:flex;flex-direction:column;gap:8px;z-index:98;opacity:0;transition:opacity .3s;pointer-events:none;}
.floating.show{opacity:1;pointer-events:all;}
.floating a{padding:12px 20px;font-size:13px;font-family:inherit;text-decoration:none;display:flex;align-items:center;gap:6px;}
.f-call{background:#03C75A;color:#fff;}.f-book{background:var(--green);color:#fff;font-weight:600;}
.btn-green{display:inline-flex;align-items:center;gap:8px;background:var(--green);color:#fff;padding:13px 28px;font-size:14px;font-family:inherit;font-weight:500;text-decoration:none;transition:all .2s;border:none;cursor:pointer;}
.btn-green:hover{background:var(--green2);}
.btn-outline{display:inline-flex;align-items:center;gap:8px;border:2px solid var(--green);color:var(--green);padding:11px 28px;font-size:14px;text-decoration:none;transition:all .2s;}
.btn-outline:hover{background:var(--green);color:#fff;}
.eyebrow{font-size:11px;letter-spacing:.24em;color:var(--green);text-transform:uppercase;margin-bottom:14px;}
.sec-title{font-family:'Noto Serif KR',serif;font-size:var(--fs-section);line-height:1.15;color:var(--green);margin-bottom:16px;font-weight:400;}
.sec-title em{font-style:normal;color:var(--dark);}
/* 히어로 — 자연스러운 레이아웃 */
.hero{min-height:100vh;padding-top:70px;display:grid;grid-template-columns:1fr 520px;align-items:center;background:var(--warm);}
.hero-left{padding:80px 60px;}
.hero-badge-row{display:flex;gap:12px;margin-bottom:32px;flex-wrap:wrap;}
.hero-badge{font-size:11px;padding:6px 14px;border:1px solid var(--bd);color:var(--green);letter-spacing:.04em;}
.hero-h1{font-family:'Noto Serif KR',serif;font-size:var(--fs-hero);line-height:1.1;color:var(--green);margin-bottom:20px;font-weight:300;}
.hero-h1 em{font-style:normal;color:var(--dark);}
.hero-sub{font-size:var(--fs-body);color:rgba(42,42,34,0.62);line-height:1.95;margin-bottom:40px;max-width:440px;}
.hero-right{position:relative;overflow:hidden;height:100%;min-height:500px;}
.hero-right-img{position:absolute;inset:0;background-size:cover;background-position:center;}
.hero-right::before{content:'';position:absolute;left:0;top:0;bottom:0;width:80px;background:linear-gradient(to right,var(--warm),transparent);z-index:1;}
/* 진료 */
.treat-section{padding:96px 52px;background:var(--bg);}
.treat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:52px;}
.treat-card{background:#fff;padding:36px;border-bottom:3px solid transparent;transition:border-color .3s,box-shadow .3s;}
.treat-card:hover{border-bottom-color:var(--green);box-shadow:0 4px 24px rgba(45,90,61,0.08);}
.treat-num{font-family:'Noto Serif KR',serif;font-size:40px;color:rgba(45,90,61,0.1);font-weight:300;line-height:1;margin-bottom:16px;}
.treat-tag{font-size:10px;letter-spacing:.22em;color:var(--green);text-transform:uppercase;margin-bottom:10px;display:block;}
.treat-name{font-family:'Noto Serif KR',serif;font-size:var(--fs-card);color:var(--green);margin-bottom:12px;font-weight:400;}
.treat-desc{font-size:var(--fs-body);color:rgba(42,42,34,0.6);line-height:1.85;margin-bottom:12px;}
.treat-detail{font-size:13px;color:rgba(42,42,34,0.45);line-height:1.8;border-top:1px solid var(--bd);padding-top:14px;}
/* 의료진 */
.doctor-section{padding:96px 52px;background:var(--warm);}
.doctor-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-top:52px;}
.doctor-card{background:#fff;display:grid;grid-template-columns:220px 1fr;box-shadow:0 2px 20px rgba(45,90,61,0.06);}
.doctor-img{width:100%;height:100%;min-height:300px;object-fit:cover;display:block;}
.doctor-body{padding:40px 36px;display:flex;flex-direction:column;justify-content:center;}
.doctor-role{font-size:10px;letter-spacing:.22em;color:var(--green);text-transform:uppercase;margin-bottom:8px;display:block;}
.doctor-name{font-family:'Noto Serif KR',serif;font-size:var(--fs-card);color:var(--green);margin-bottom:16px;font-weight:400;}
.doctor-certs{list-style:none;display:flex;flex-direction:column;gap:7px;}
.doctor-certs li{font-size:13px;color:rgba(42,42,34,0.6);padding-left:16px;position:relative;line-height:1.6;}
.doctor-certs li::before{content:'✓';position:absolute;left:0;color:var(--green);font-size:11px;}
/* 시간 */
.hours-section{background:var(--green);padding:80px 52px;}
.hours-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;margin-top:48px;}
.hours-item{border-left:2px solid rgba(255,255,255,0.25);padding-left:24px;}
.hours-label{font-size:10px;letter-spacing:.22em;color:rgba(255,255,255,0.6);text-transform:uppercase;margin-bottom:8px;}
.hours-val{font-size:var(--fs-body);color:#fff;line-height:1.8;}
/* 후기 */
.reviews-section{padding:96px 52px;background:var(--bg);}
.reviews-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:52px;}
.review-card{background:#fff;padding:32px;border-left:3px solid var(--green);}
.review-text{font-family:'Noto Serif KR',serif;font-size:var(--fs-review);color:var(--dark);line-height:1.9;margin-bottom:16px;}
.review-who{font-size:11px;color:var(--green);letter-spacing:.08em;}
/* 갤러리 */
.gallery-section{padding:96px 52px;background:var(--warm);}
.gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:48px;}
.g-item{overflow:hidden;cursor:pointer;background:var(--beige);}
.g-item:nth-child(1){grid-column:span 2;}
.g-item:nth-child(4){grid-column:span 2;}
.g-item img{width:100%;height:100%;min-height:200px;object-fit:cover;transition:transform .5s;display:block;}
.g-item:hover img{transform:scale(1.04);}
#lb{position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:1000;display:none;align-items:center;justify-content:center;}
#lb.open{display:flex;}
#lbImg{max-width:88vw;max-height:88vh;object-fit:contain;}
.lb-close{position:absolute;top:24px;right:32px;background:none;border:none;color:rgba(255,255,255,.5);font-size:28px;cursor:pointer;}
.lb-prev,.lb-next{position:absolute;top:50%;transform:translateY(-50%);background:none;border:none;color:rgba(255,255,255,.4);font-size:36px;cursor:pointer;padding:16px;}
.lb-prev{left:16px;}.lb-next{right:16px;}
footer{background:var(--dark);padding:56px 52px 36px;}
.foot-top{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:48px;margin-bottom:44px;}
.foot-brand{font-family:'Noto Serif KR',serif;font-size:20px;color:rgba(255,255,255,0.8);margin-bottom:10px;}
.foot-desc{font-size:var(--fs-footer);color:rgba(255,255,255,0.3);line-height:1.9;}
.foot-head{font-size:10px;letter-spacing:.22em;color:rgba(255,255,255,0.4);text-transform:uppercase;margin-bottom:14px;}
.foot-links{display:flex;flex-direction:column;gap:9px;}
.foot-links a{font-size:var(--fs-footer);color:rgba(255,255,255,0.35);text-decoration:none;transition:color .2s;}
.foot-links a:hover{color:rgba(255,255,255,0.8);}
.foot-bottom{border-top:1px solid rgba(255,255,255,0.06);padding-top:24px;font-size:11px;color:rgba(255,255,255,0.18);display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;}
@media(max-width:1000px){.hero{grid-template-columns:1fr;}.hero-right{height:50vw;min-height:240px;}.doctor-grid{grid-template-columns:1fr;}.foot-top{grid-template-columns:1fr 1fr;}}
@media(max-width:768px){
  header{padding:0 20px;}nav,.header-cta,.quick{display:none;}.hamburger{display:flex;}
  .hero-left{padding:60px 20px;}.hero-h1{font-size:clamp(32px,8vw,52px);}
  .treat-section,.doctor-section,.hours-section,.reviews-section,.gallery-section{padding:60px 20px;}
  .treat-grid,.reviews-grid{grid-template-columns:1fr;}
  .doctor-card{grid-template-columns:1fr;}.doctor-img{height:260px;min-height:unset;}
  .doctor-body{padding:24px 20px;}
  .hours-grid{grid-template-columns:1fr;}
  .gallery-grid{grid-template-columns:1fr 1fr;}.g-item{grid-column:span 1!important;}
  footer{padding:48px 20px 28px;}.foot-top{grid-template-columns:1fr;}.foot-bottom{flex-direction:column;}
}
`;
}

function medicalHeader(d, activePage) {
  const pages = ['index','treatment','gallery','location'];
  const labels = ['홈','진료과목','갤러리','오시는 길'];
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
  <a href="index.html" class="logo-area">
    <span class="logo-text">${d.name}</span>
    <span class="logo-sub">${d.slogan}</span>
  </a>
  <nav>${nav}</nav>
  <a href="reservation.html" class="header-cta">진료 예약</a>
  <button class="hamburger" id="hamBtn" onclick="toggleNav()"><span></span><span></span><span></span></button>
</header>
<div class="mobile-nav" id="mobileNav">
  ${mobileNav}
  <a href="reservation.html" style="background:var(--green);color:#fff;font-weight:600;">진료 예약</a>
</div>`;
}

function medicalFooter(d) {
  return `<footer>
  <div class="foot-top">
    <div>
      <div class="foot-brand">${d.name}</div>
      <div class="foot-desc">${d.address}<br>${d.phone}${d.openHours?'<br>'+d.openHours:''}</div>
    </div>
    <div>
      <div class="foot-head">진료 안내</div>
      <div class="foot-links">
        <a href="treatment.html">진료 과목</a>
        <a href="gallery.html">갤러리</a>
        <a href="reservation.html">진료 예약</a>
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

function medicalJs(d) {
  return `function toggleNav(){document.getElementById('hamBtn').classList.toggle('open');document.getElementById('mobileNav').classList.toggle('open');}
window.addEventListener('scroll',function(){var f=document.getElementById('floating');if(f)f.classList.toggle('show',window.scrollY>300);});`;
}

function buildMedicalIndexHtml(d, titleHtmlFn) {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${d.name}</title>
<style>${medicalCss(d)}</style>
</head>
<body>
${medicalHeader(d,'index')}
<section class="hero">
  <div class="hero-left">
    <div class="hero-badge-row">
      <span class="hero-badge">${d.nameEn}</span>
      <span class="hero-badge">${d.owner}</span>
    </div>
    <h1 class="hero-h1">${titleHtmlFn(d.h1Title)}</h1>
    <p class="hero-sub">${d.slogan}</p>
    <div style="display:flex;gap:12px;flex-wrap:wrap">
      <a href="treatment.html" class="btn-green">진료 과목 →</a>
      <a href="reservation.html" class="btn-outline">예약하기</a>
    </div>
  </div>
  <div class="hero-right">
    <div class="hero-right-img" style="background-image:url('${d.h1Img}')"></div>
  </div>
</section>
<section class="treat-section">
  <div class="eyebrow">Treatment</div>
  <h2 class="sec-title">전문 진료<br><em>과목 안내</em></h2>
  <div class="treat-grid">
    ${['p1','p2','p3'].map((p,i)=>`<div class="treat-card">
      <div class="treat-num">0${i+1}</div>
      <span class="treat-tag">${d[p+'Tag']}</span>
      <div class="treat-name">${d[p+'Name']}</div>
      <div class="treat-desc">${d[p+'Desc']}</div>
      <div class="treat-detail">${d[p+'Detail']}</div>
    </div>`).join('')}
  </div>
</section>
<section class="doctor-section">
  <div class="eyebrow">Medical Team</div>
  <h2 class="sec-title">의료진<br><em>소개</em></h2>
  <div class="doctor-grid">
    ${['i1','i2'].map(i=>`<div class="doctor-card">
      <img class="doctor-img" src="${d[i+'Img']}" alt="${d[i+'Name']}" onerror="this.src='https://placehold.co/400x500/f0ece0/2d5a3d?text=Doctor'">
      <div class="doctor-body">
        <span class="doctor-role">${d[i+'Role']}</span>
        <div class="doctor-name">${d[i+'Name']}</div>
        <ul class="doctor-certs">${(d[i+'Cert']||'').split('\n').filter(l=>l.trim()).map(l=>`<li>${l}</li>`).join('')}</ul>
      </div>
    </div>`).join('')}
  </div>
</section>
<section class="hours-section">
  <div class="eyebrow" style="color:rgba(255,255,255,0.6)">Hours</div>
  <h2 class="sec-title" style="color:#fff">진료<br><em style="color:rgba(255,255,255,0.6)">시간 안내</em></h2>
  <div class="hours-grid">
    <div class="hours-item"><div class="hours-label">진료시간</div><div class="hours-val">${d.openHours||'월-금 09:00-18:00'}</div></div>
    <div class="hours-item"><div class="hours-label">주소</div><div class="hours-val">${d.address}</div></div>
    <div class="hours-item"><div class="hours-label">주차 / 전화</div><div class="hours-val">${d.parking||'주차 가능'}<br>${d.phone}</div></div>
  </div>
</section>
<section class="reviews-section">
  <div class="eyebrow">Review</div>
  <h2 class="sec-title">환자분들의<br><em>후기</em></h2>
  <div class="reviews-grid">
    ${[1,2,3].map(n=>`<div class="review-card">
      <p class="review-text">"${d['review'+n]}"</p>
      <div class="review-who">${d['review'+n+'who']||'네이버 방문자'}</div>
    </div>`).join('')}
  </div>
</section>
${d.placeId ? `
<section style="padding:80px 52px;background:var(--bg);">
  <div style="text-align:center;margin-bottom:40px">
    <div style="font-size:11px;letter-spacing:.24em;color:#03C75A;text-transform:uppercase;font-weight:700;margin-bottom:12px">Naver Place</div>
    <h2 style="font-size:clamp(24px,3vw,36px);font-weight:700;color:var(--green);margin-bottom:8px;font-family:inherit">네이버 플레이스<br>실시간 정보</h2>
    <p style="font-size:14px;color:rgba(42,42,34,0.6);margin-top:8px">실제 방문 고객들의 생생한 후기를 확인하세요</p>
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
${medicalFooter(d)}
<script>${medicalJs(d)}<\/script>
</body>
</html>`;
}

function buildMedicalTreatmentHtml(d) {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>진료 과목 | ${d.name}</title>
<style>${medicalCss(d)}
.treat-page{padding-top:70px;}
.treat-top{background:var(--warm);padding:64px 52px;}
.treat-list{padding:60px 52px;background:var(--bg);display:flex;flex-direction:column;gap:24px;}
.treat-item{background:#fff;display:grid;grid-template-columns:320px 1fr;box-shadow:0 2px 16px rgba(45,90,61,0.06);}
.treat-item-img img{width:100%;height:100%;min-height:280px;object-fit:cover;display:block;}
.treat-item-body{padding:48px 44px;border-left:4px solid var(--green);}
@media(max-width:900px){.treat-top,.treat-list{padding-left:20px;padding-right:20px;}.treat-item{grid-template-columns:1fr;}.treat-item-img img{max-height:220px;}.treat-item-body{padding:28px 20px;border-left:none;border-top:4px solid var(--green);}}
</style>
</head>
<body>
${medicalHeader(d,'treatment')}
<div class="treat-page">
  <div class="treat-top">
    <div class="eyebrow">Treatment</div>
    <h1 class="sec-title">전문 진료<br><em>과목 안내</em></h1>
  </div>
  <div class="treat-list">
    ${['p1','p2','p3'].map(p=>`<div class="treat-item">
      <div class="treat-item-img"><img src="${d[p+'Img']}" alt="${d[p+'Name']}" onerror="this.style.background='var(--warm)'"></div>
      <div class="treat-item-body">
        <span class="treat-tag" style="margin-bottom:14px">${d[p+'Tag']}</span>
        <div class="sec-title" style="font-size:clamp(22px,2.5vw,34px)">${d[p+'Name']}</div>
        <p style="font-size:var(--fs-body);color:rgba(42,42,34,0.62);line-height:1.9;margin-bottom:14px">${d[p+'Desc']}</p>
        <p style="font-size:13px;color:rgba(42,42,34,0.45);line-height:1.85;border-top:1px solid var(--bd);padding-top:16px">${d[p+'Detail']}</p>
        <div style="margin-top:28px"><a href="reservation.html" class="btn-green">예약하기 →</a></div>
      </div>
    </div>`).join('')}
  </div>
</div>
${medicalFooter(d)}
<script>${medicalJs(d)}<\/script>
</body>
</html>`;
}

function buildMedicalGalleryHtml(d) {
  const uploadedImgs = (d.galleryUrls&&d.galleryUrls.length>0)?d.galleryUrls:[];
  const imgs = uploadedImgs.length>0
    ? uploadedImgs.concat([d.p1Img,d.p2Img,d.p3Img,d.i1Img,d.i2Img,d.h1Img]).slice(0,12)
    : [d.p1Img,d.p2Img,d.p3Img,d.i1Img,d.i2Img,d.h1Img];
  const lbSrcs = JSON.stringify(imgs);
  const gridItems = imgs.map((src,i)=>`<div class="g-item" onclick="openLb(${i})"><img src="${src}" alt="" loading="lazy" onerror="this.parentElement.style.background='var(--beige)'"></div>`).join('');
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>갤러리 | ${d.name}</title>
<style>${medicalCss(d)}</style>
</head>
<body>
${medicalHeader(d,'gallery')}
<div style="padding-top:70px">
  <div style="padding:64px 52px 40px;background:var(--warm)">
    <div class="eyebrow">Gallery</div>
    <h1 class="sec-title">시설 및<br><em>진료 현장</em></h1>
  </div>
  <div style="padding:32px 52px 80px;background:var(--bg)">
    <div class="gallery-grid">${gridItems}</div>
  </div>
</div>
${medicalFooter(d)}
<div id="lb" onclick="if(event.target===this)closeLb()">
  <button class="lb-close" onclick="closeLb()">✕</button>
  <button class="lb-prev" onclick="lbMove(-1)">&#8592;</button>
  <img id="lbImg" src="" alt="">
  <button class="lb-next" onclick="lbMove(1)">&#8594;</button>
</div>
<script>
${medicalJs(d)}
var lbSrcs=${lbSrcs},lbIdx=0;
function openLb(i){lbIdx=i;document.getElementById('lbImg').src=lbSrcs[i];document.getElementById('lb').classList.add('open');}
function closeLb(){document.getElementById('lb').classList.remove('open');}
function lbMove(d){lbIdx=(lbIdx+d+lbSrcs.length)%lbSrcs.length;document.getElementById('lbImg').src=lbSrcs[lbIdx];}
document.addEventListener('keydown',function(e){if(document.getElementById('lb').classList.contains('open')){if(e.key==='ArrowLeft')lbMove(-1);if(e.key==='ArrowRight')lbMove(1);if(e.key==='Escape')closeLb();}});
<\/script>
</body>
</html>`;
}

function buildMedicalLocationHtml(d) {
  const mapSrc = d.placeId?`https://map.naver.com/p/entry/place/${d.placeId}`:`https://map.naver.com/v5/search/${encodeURIComponent(d.address)}`;
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>오시는 길 | ${d.name}</title>
<style>${medicalCss(d)}
.loc-page{padding-top:70px;min-height:100vh;background:var(--bg);}
.loc-inner{padding:72px 52px 80px;}
.loc-map{border:2px solid var(--bd);margin-bottom:48px;}
.loc-map iframe{display:block;width:100%;height:460px;}
.loc-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.loc-card{background:#fff;padding:28px 32px;border-left:3px solid var(--green);}
.loc-icon{font-size:22px;margin-bottom:10px;}
.loc-label{font-size:10px;letter-spacing:.22em;color:var(--green);text-transform:uppercase;margin-bottom:8px;}
.loc-val{font-size:var(--fs-body);color:rgba(42,42,34,0.72);line-height:1.85;}
@media(max-width:768px){.loc-inner{padding:48px 20px 60px;}.loc-map iframe{height:320px;}.loc-cards{grid-template-columns:1fr;}}
</style>
</head>
<body>
${medicalHeader(d,'location')}
<div class="loc-page">
  <div class="loc-inner">
    <div class="eyebrow">Location</div>
    <h1 class="sec-title">찾아오시는<br><em>방법 안내</em></h1>
    <div class="loc-map"><iframe src="${mapSrc}" frameborder="0" allowfullscreen></iframe></div>
    <div class="loc-cards">
      <div class="loc-card"><div class="loc-icon">📍</div><div class="loc-label">Address</div><div class="loc-val">${d.address}</div></div>
      <div class="loc-card"><div class="loc-icon">🕐</div><div class="loc-label">Hours</div><div class="loc-val">${d.openHours||'진료시간 문의 바랍니다'}</div></div>
      <div class="loc-card"><div class="loc-icon">🚗</div><div class="loc-label">Parking</div><div class="loc-val">${d.parking||'주차 가능'}</div></div>
    </div>
    <div style="margin-top:44px;display:flex;gap:12px">
      <a href="reservation.html" class="btn-green">예약하기 →</a>
      <a href="tel:${d.phone.replace(/-/g,'')}" class="btn-outline">📞 ${d.phone}</a>
    </div>
  </div>
</div>
${medicalFooter(d)}
<script>${medicalJs(d)}<\/script>
</body>
</html>`;
}

function buildMedicalReservationHtml(d) {
  return buildReservationPageHtml(d, medicalCss(d), medicalHeader(d,'reservation'), medicalFooter(d), medicalJs(d));
}
