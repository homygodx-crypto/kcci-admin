/* Beauty / Hair — Modern Editorial (카페 수준 간결 버전) */

function beautyCss(d) {
  return `
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&family=Cormorant:ital,wght@0,400;0,500;1,400&family=Noto+Sans+KR:wght@300;400;500&display=swap');
${buildFontSizeCss(d)}
*{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;}
body{font-family:'Josefin Sans','Noto Sans KR',sans-serif;background:#FAFAFA;color:#111;overflow-x:hidden;}
:root{--bg:#FAFAFA;--bg2:#F5F0F2;--dark:#111;--rose:#C9727A;--rose2:#E8A4A9;--border:#E8E0E2;}
header{position:fixed;top:0;left:0;right:0;z-index:100;height:72px;display:flex;align-items:center;justify-content:space-between;padding:0 56px;background:rgba(250,250,250,0.97);backdrop-filter:blur(20px);border-bottom:1px solid var(--border);}
header.scrolled{box-shadow:0 2px 24px rgba(0,0,0,0.06);}
.logo-area{text-decoration:none;}
.logo-text{font-family:'Josefin Sans',sans-serif;font-size:18px;font-weight:700;color:var(--dark);letter-spacing:.12em;text-transform:uppercase;display:block;line-height:1;}
.logo-sub{font-size:9px;color:var(--rose);letter-spacing:.26em;text-transform:uppercase;display:block;margin-top:3px;}
nav{display:flex;gap:36px;}
nav a{font-size:11px;color:rgba(17,17,17,0.45);text-decoration:none;letter-spacing:.22em;text-transform:uppercase;font-weight:600;transition:color .2s;}
nav a:hover,nav a.active{color:var(--dark);}
.header-right{display:flex;align-items:center;gap:16px;}
.header-cta{background:var(--rose);color:#fff;padding:9px 20px;font-size:10px;text-decoration:none;letter-spacing:.18em;text-transform:uppercase;font-weight:700;transition:background .2s;}
.header-cta:hover{background:#AA5A62;}
.owner-login-btn{font-size:10px;color:rgba(17,17,17,0.32);text-decoration:none;letter-spacing:.18em;text-transform:uppercase;transition:color .2s;}
.owner-login-btn:hover{color:var(--dark);}
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:4px;}
.hamburger span{display:block;width:22px;height:1.5px;background:var(--dark);transition:all .3s;}
.hamburger.open span:nth-child(1){transform:translateY(6.5px) rotate(45deg);}
.hamburger.open span:nth-child(2){opacity:0;}
.hamburger.open span:nth-child(3){transform:translateY(-6.5px) rotate(-45deg);}
.mobile-nav{display:none;position:fixed;top:72px;left:0;right:0;background:var(--bg);z-index:99;flex-direction:column;border-bottom:1px solid var(--border);}
.mobile-nav.open{display:flex;}
.mobile-nav a{font-size:12px;color:var(--dark);text-decoration:none;padding:16px 28px;border-bottom:1px solid var(--border);letter-spacing:.18em;text-transform:uppercase;font-weight:600;}
.mobile-nav a.rsv{background:var(--rose);color:#fff;text-align:center;}
.floating{position:fixed;bottom:28px;right:24px;display:flex;flex-direction:column;gap:8px;z-index:98;opacity:0;transition:opacity .3s;pointer-events:none;}
.floating.show{opacity:1;pointer-events:all;}
.floating a{padding:12px 20px;font-size:11px;text-decoration:none;display:flex;align-items:center;gap:6px;font-weight:700;}
.f-call{background:#111;color:#fff;} .f-book{background:var(--rose);color:#fff;}
.hero{min-height:100vh;display:grid;grid-template-columns:1fr 1fr;}
.hero-left{background:var(--dark);display:flex;flex-direction:column;justify-content:center;padding:100px 64px 80px;}
.hero-label{font-size:9px;letter-spacing:.36em;color:var(--rose2);text-transform:uppercase;margin-bottom:24px;display:flex;align-items:center;gap:14px;}
.hero-label::before{content:'';display:block;width:36px;height:1px;background:var(--rose2);}
.hero-h1{font-family:'Cormorant',serif;font-size:clamp(44px,var(--fs-hero),88px);line-height:1.05;color:#fff;font-weight:400;margin-bottom:24px;}
.hero-h1 em{font-style:italic;color:var(--rose2);}
.hero-sub{font-size:14px;color:rgba(255,255,255,0.5);line-height:1.9;max-width:400px;margin-bottom:40px;font-weight:300;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;}
.hero-right{position:relative;overflow:hidden;min-height:500px;}
.hero-right img{width:100%;height:100%;object-fit:cover;display:block;}
.btn-rose{display:inline-flex;align-items:center;background:var(--rose);color:#fff;padding:13px 32px;font-size:10px;letter-spacing:.2em;text-transform:uppercase;text-decoration:none;font-weight:700;transition:background .2s;border:none;cursor:pointer;font-family:inherit;}
.btn-rose:hover{background:#AA5A62;}
.btn-outline{display:inline-flex;align-items:center;border:1px solid rgba(255,255,255,0.3);color:rgba(255,255,255,0.8);padding:12px 32px;font-size:10px;letter-spacing:.2em;text-transform:uppercase;text-decoration:none;transition:all .2s;}
.btn-outline:hover{border-color:#fff;color:#fff;}
.btn-outline-dark{display:inline-flex;align-items:center;border:1.5px solid var(--border);color:var(--dark);padding:12px 32px;font-size:10px;letter-spacing:.2em;text-transform:uppercase;text-decoration:none;transition:all .2s;font-weight:700;}
.btn-outline-dark:hover{border-color:var(--rose);color:var(--rose);}
.eyebrow{font-size:9px;letter-spacing:.34em;color:var(--rose);text-transform:uppercase;margin-bottom:12px;font-weight:700;}
.sec-title{font-family:'Cormorant',serif;font-size:clamp(28px,var(--fs-section),50px);line-height:1.1;color:var(--dark);}
.sec-title em{font-style:italic;color:var(--rose);}
.svc-section{padding:90px 56px;background:var(--bg2);}
.svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;margin-top:48px;}
.svc-card{position:relative;overflow:hidden;display:block;text-decoration:none;background:var(--dark);}
.svc-card::before{content:'';display:block;padding-top:130%;}
.svc-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.75;transition:all .7s;}
.svc-card:hover img{transform:scale(1.05);opacity:.55;}
.svc-ov{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;padding:28px;}
.svc-tag{font-size:9px;letter-spacing:.24em;color:var(--rose2);text-transform:uppercase;margin-bottom:6px;font-weight:700;}
.svc-name{font-family:'Cormorant',serif;font-size:22px;color:#fff;margin-bottom:6px;}
.svc-desc{font-size:12px;color:rgba(255,255,255,0.5);line-height:1.7;}
.stylist-section{padding:90px 56px;background:var(--bg);}
.stylist-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:3px;margin-top:48px;}
.stylist-card{position:relative;overflow:hidden;}
.stylist-card::before{content:'';display:block;padding-top:120%;}
.stylist-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top;transition:transform .7s;}
.stylist-card:hover img{transform:scale(1.04);}
.stylist-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(17,17,17,0.92) 0%,transparent 55%);display:flex;flex-direction:column;justify-content:flex-end;padding:36px 32px;}
.stylist-role{font-size:9px;letter-spacing:.26em;color:var(--rose2);text-transform:uppercase;margin-bottom:6px;font-weight:700;}
.stylist-name{font-family:'Cormorant',serif;font-size:28px;color:#fff;margin-bottom:12px;}
.stylist-cert{font-size:12px;color:rgba(255,255,255,0.45);line-height:1.8;}
.review-section{padding:90px 56px;background:var(--dark);}
.review-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;margin-top:48px;}
.review-card{background:#1A1A1A;padding:36px 28px;}
.review-quote{font-family:'Cormorant',serif;font-size:44px;color:var(--rose);line-height:1;margin-bottom:12px;}
.review-text{font-size:13px;color:rgba(255,255,255,0.55);line-height:1.9;font-style:italic;font-family:'Cormorant',serif;margin-bottom:18px;}
.review-stars{color:var(--rose2);font-size:12px;margin-bottom:10px;}
.review-who{font-size:10px;letter-spacing:.16em;color:var(--rose2);text-transform:uppercase;font-weight:700;}
.info-section{padding:80px 56px;background:var(--bg2);}
.info-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:40px;}
.info-box{padding:28px;border:1.5px solid var(--border);background:#fff;}
.info-head{font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--rose);margin-bottom:10px;font-weight:700;}
.info-val{font-size:14px;line-height:1.9;color:#555;}
footer{background:#0A0A0A;padding:64px 56px 32px;}
.foot-top{display:grid;grid-template-columns:2fr 1fr 1fr;gap:48px;padding-bottom:40px;margin-bottom:28px;border-bottom:1px solid rgba(255,255,255,0.07);}
.foot-brand{font-family:'Josefin Sans',sans-serif;font-size:18px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#fff;margin-bottom:12px;}
.foot-desc{font-size:13px;line-height:2;color:rgba(255,255,255,0.3);}
.foot-head{font-size:9px;letter-spacing:.24em;color:var(--rose2);text-transform:uppercase;margin-bottom:16px;font-weight:700;}
.foot-links{display:flex;flex-direction:column;gap:10px;}
.foot-links a{font-size:13px;color:rgba(255,255,255,0.35);text-decoration:none;transition:color .2s;}
.foot-links a:hover{color:var(--rose2);}
.foot-copy{font-size:12px;color:rgba(255,255,255,0.18);text-align:center;}
.lb-wrap{position:fixed;inset:0;background:rgba(0,0,0,0.97);z-index:500;display:none;align-items:center;justify-content:center;}
.lb-wrap.open{display:flex;}
.lb-wrap img{max-width:90vw;max-height:90vh;object-fit:contain;}
.lb-close{position:absolute;top:24px;right:32px;color:rgba(255,255,255,0.5);font-size:26px;cursor:pointer;background:none;border:none;}
.lb-prev,.lb-next{position:absolute;top:50%;transform:translateY(-50%);color:rgba(255,255,255,0.4);font-size:40px;cursor:pointer;background:none;border:none;padding:16px;}
.lb-prev{left:8px;} .lb-next{right:8px;}
@media(max-width:1024px){
  header{padding:0 36px;} .hero{grid-template-columns:1fr;} .hero-left{min-height:60vh;padding:80px 36px 60px;} .hero-right{height:50vh;}
  .svc-section,.stylist-section,.review-section,.info-section{padding:64px 36px;} footer{padding:48px 36px 24px;}
  .foot-top{grid-template-columns:1fr 1fr;} .stylist-grid{grid-template-columns:1fr 1fr;}
}
@media(max-width:768px){
  header{padding:0 20px;height:64px;} nav,.header-right{display:none;} .hamburger{display:flex;} .mobile-nav{top:64px;}
  .hero-left{padding:64px 20px 48px;} .hero-h1{font-size:clamp(38px,9vw,60px);}
  .svc-section,.stylist-section,.review-section,.info-section{padding:48px 20px;}
  .svc-grid,.review-grid{grid-template-columns:1fr;} .stylist-grid{grid-template-columns:1fr;}
  .info-grid{grid-template-columns:1fr;} footer{padding:40px 20px 20px;} .foot-top{grid-template-columns:1fr;gap:28px;}
  .floating{right:12px;}
}`;
}

function beautyHeader(d, activePage) {
  const pages = ['index','service','gallery','location','reservation'];
  const labels = ['Home','Service','Gallery','Location','예약'];
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
        ${d.blog&&d.blog!=='#'?`<a href="${d.blog}" target="_blank">블로그</a>`:''}
        ${d.insta&&d.insta!=='#'?`<a href="${d.insta}" target="_blank">인스타그램</a>`:''}
      </div>
    </div>
  </div>
  <div class="foot-copy">© ${new Date().getFullYear()} ${d.name}. All Rights Reserved.</div>
</footer>`;
}

function beautyJs() {
  return `
let lbArr=[],lbI=0;
function openLb(i,arr){lbArr=arr||lbArr;lbI=i;document.getElementById('lbImg').src=lbArr[i];document.getElementById('lb').classList.add('open');}
function closeLb(){document.getElementById('lb').classList.remove('open');}
function lbMv(d){lbI=(lbI+d+lbArr.length)%lbArr.length;document.getElementById('lbImg').src=lbArr[lbI];}
document.getElementById('lb').addEventListener('click',e=>{if(e.target===e.currentTarget)closeLb();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLb();if(e.key==='ArrowRight')lbMv(1);if(e.key==='ArrowLeft')lbMv(-1);});
window.addEventListener('scroll',()=>{
  document.getElementById('hdr').classList.toggle('scrolled',scrollY>60);
  document.getElementById('floating').classList.toggle('show',scrollY>300);
});
function toggleNav(){document.getElementById('hamBtn').classList.toggle('open');document.getElementById('mobileNav').classList.toggle('open');}
document.addEventListener('click',e=>{const b=document.getElementById('hamBtn'),n=document.getElementById('mobileNav');if(b&&n&&!b.contains(e.target)&&!n.contains(e.target)){b.classList.remove('open');n.classList.remove('open');}});`;
}

function buildBeautyNaverWidget(d) {
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

function buildBeautyIndexHtml(d) {
  return `<!DOCTYPE html>
<html lang="ko"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${d.name}</title>
<style>${beautyCss(d)}</style>
</head><body>
${beautyHeader(d,'index')}
<div class="lb-wrap" id="lb"><button class="lb-close" onclick="closeLb()">✕</button><button class="lb-prev" onclick="lbMv(-1)">‹</button><img id="lbImg" src="" alt=""><button class="lb-next" onclick="lbMv(1)">›</button></div>
<section class="hero">
  <div class="hero-left">
    <div class="hero-label">${d.nameEn}</div>
    <h1 class="hero-h1">${(d.h1Title||'아름다움을|만드는 곳').replace('|','<br><em>')}${(d.h1Title||'아름다움을|만드는 곳').includes('|')?'</em>':''}</h1>
    <p class="hero-sub">${d.slogan}</p>
    <div class="hero-btns">
      <a href="service.html" class="btn-rose">서비스 보기</a>
      <a href="reservation.html" class="btn-outline">예약하기</a>
    </div>
  </div>
  <div class="hero-right"><img src="${d.h1Img}" alt="${d.name}"></div>
</section>
<section class="svc-section">
  <div class="eyebrow">Our Services</div>
  <h2 class="sec-title">주요 <em>서비스</em></h2>
  <div class="svc-grid">
    ${['p1','p2','p3'].map(p=>`<a href="service.html" class="svc-card"><img src="${d[p+'Img']}" alt="${d[p+'Name']}"><div class="svc-ov"><div class="svc-tag">${d[p+'Tag']}</div><div class="svc-name">${d[p+'Name']}</div><div class="svc-desc">${d[p+'Desc']}</div></div></a>`).join('')}
  </div>
</section>
<section class="stylist-section">
  <div class="eyebrow">Our Stylists</div>
  <h2 class="sec-title">전문 <em>스타일리스트</em></h2>
  <div class="stylist-grid">
    ${['i1','i2'].map(k=>`<div class="stylist-card"><img src="${d[k+'Img']}" alt="${d[k+'Name']}"><div class="stylist-ov"><div class="stylist-role">${d[k+'Role']}</div><div class="stylist-name">${d[k+'Name']}</div><div class="stylist-cert">${(d[k+'Cert']||'').replace(/\n/g,' · ')}</div></div></div>`).join('')}
  </div>
</section>
<section class="review-section">
  <div class="eyebrow" style="color:var(--rose2)">Reviews</div>
  <h2 class="sec-title" style="color:#fff">고객 <em>후기</em></h2>
  <div class="review-grid">
    ${[1,2,3].map(n=>`<div class="review-card"><div class="review-quote">"</div><p class="review-text">${d['review'+n]}</p><div class="review-stars">★★★★★</div><div class="review-who">${d['review'+n+'who']||'방문자'}</div></div>`).join('')}
  </div>
</section>
${buildBeautyNaverWidget(d)}
<section class="info-section">
  <div class="eyebrow">Visit Us</div>
  <h2 class="sec-title">방문 전 <em>확인하세요</em></h2>
  <div class="info-grid">
    <div class="info-box"><div class="info-head">🕐 영업시간</div><div class="info-val">${d.openHours}</div></div>
    <div class="info-box"><div class="info-head">📍 주소</div><div class="info-val">${d.address}</div></div>
    <div class="info-box"><div class="info-head">🚗 주차</div><div class="info-val">${d.parking}</div></div>
  </div>
</section>
${beautyFooter(d)}
<script>${beautyJs()}<\/script>
</body></html>`;
}

function buildBeautyServiceHtml(d) {
  return `<!DOCTYPE html>
<html lang="ko"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>서비스 | ${d.name}</title>
<style>${beautyCss(d)}
.page-hero{height:45vh;min-height:320px;position:relative;display:flex;align-items:flex-end;padding:48px 56px;overflow:hidden;margin-top:72px;background:var(--dark);}
.page-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.5;}
.page-hero-txt{position:relative;z-index:1;color:#fff;}
.breadcrumb{font-size:10px;letter-spacing:.16em;color:rgba(255,255,255,0.4);margin-bottom:10px;text-transform:uppercase;}
.breadcrumb a{color:var(--rose2);text-decoration:none;}
.page-title{font-family:'Cormorant',serif;font-size:clamp(32px,4vw,60px);font-weight:400;}
.page-title em{font-style:italic;color:var(--rose2);}
.detail-item{display:grid;grid-template-columns:1fr 1fr;gap:0;margin-bottom:4px;}
.detail-item:nth-child(even) .d-img{order:2;} .detail-item:nth-child(even) .d-txt{order:1;}
.d-img{overflow:hidden;aspect-ratio:4/3;}
.d-img img{width:100%;height:100%;object-fit:cover;transition:transform .7s;display:block;}
.detail-item:hover .d-img img{transform:scale(1.04);}
.d-txt{background:var(--bg2);padding:64px 56px;display:flex;flex-direction:column;justify-content:center;}
@media(max-width:768px){.page-hero{padding:36px 20px;margin-top:64px;}.detail-item{grid-template-columns:1fr;}.detail-item:nth-child(even) .d-img,.detail-item:nth-child(even) .d-txt{order:unset;}.d-img{aspect-ratio:16/9;}.d-txt{padding:36px 20px;}}
</style>
</head><body>
${beautyHeader(d,'service')}
<div class="page-hero"><img src="${d.h2Img}" alt=""><div class="page-hero-txt"><div class="breadcrumb"><a href="index.html">Home</a> / Service</div><h1 class="page-title">Our <em>Services</em></h1></div></div>
<div style="background:var(--bg)">
  ${['p1','p2','p3'].map((p,i)=>`<div class="detail-item"><div class="d-img"><img src="${d[p+'Img']}" alt="${d[p+'Name']}"></div><div class="d-txt"><div class="eyebrow">0${i+1}. ${d[p+'Tag']}</div><h2 class="sec-title" style="margin-bottom:16px">${d[p+'Name']}</h2><p style="font-size:15px;line-height:1.9;color:#666;margin-bottom:28px">${d[p+'Detail']||d[p+'Desc']}</p><a href="reservation.html" class="btn-rose">예약하기</a></div></div>`).join('')}
</div>
<section class="stylist-section">
  <div class="eyebrow">Our Stylists</div>
  <h2 class="sec-title">전문 <em>스타일리스트</em></h2>
  <div class="stylist-grid">
    ${['i1','i2'].map(k=>`<div class="stylist-card"><img src="${d[k+'Img']}" alt="${d[k+'Name']}"><div class="stylist-ov"><div class="stylist-role">${d[k+'Role']}</div><div class="stylist-name">${d[k+'Name']}</div><div class="stylist-cert">${(d[k+'Cert']||'').replace(/\n/g,' · ')}</div></div></div>`).join('')}
  </div>
</section>
${beautyFooter(d)}
<script>${beautyJs()}<\/script>
</body></html>`;
}

function buildBeautyGalleryHtml(d) {
  const imgs = [d.h1Img,d.h2Img,d.h3Img,d.p1Img,d.p2Img,d.p3Img,d.i1Img,d.i2Img];
  return `<!DOCTYPE html>
<html lang="ko"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>갤러리 | ${d.name}</title>
<style>${beautyCss(d)}
.page-hero{height:45vh;min-height:320px;position:relative;display:flex;align-items:flex-end;padding:48px 56px;overflow:hidden;margin-top:72px;background:var(--dark);}
.page-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.5;}
.page-hero-txt{position:relative;z-index:1;color:#fff;}
.breadcrumb{font-size:10px;letter-spacing:.16em;color:rgba(255,255,255,0.4);margin-bottom:10px;text-transform:uppercase;}
.breadcrumb a{color:var(--rose2);text-decoration:none;}
.page-title{font-family:'Cormorant',serif;font-size:clamp(32px,4vw,60px);font-weight:400;}
.page-title em{font-style:italic;color:var(--rose2);}
.gal-masonry{columns:4;gap:3px;}
.g-item{break-inside:avoid;margin-bottom:3px;overflow:hidden;cursor:pointer;}
.g-item img{width:100%;display:block;transition:transform .7s;}
.g-item:hover img{transform:scale(1.04);}
@media(max-width:768px){.page-hero{padding:36px 20px;margin-top:64px;}.gal-masonry{columns:2;}}
</style>
</head><body>
${beautyHeader(d,'gallery')}
<div class="lb-wrap" id="lb"><button class="lb-close" onclick="closeLb()">✕</button><button class="lb-prev" onclick="lbMv(-1)">‹</button><img id="lbImg" src="" alt=""><button class="lb-next" onclick="lbMv(1)">›</button></div>
<div class="page-hero"><img src="${d.h3Img}" alt=""><div class="page-hero-txt"><div class="breadcrumb"><a href="index.html">Home</a> / Gallery</div><h1 class="page-title">Work <em>Portfolio</em></h1></div></div>
<section style="padding:80px 56px;background:var(--bg)">
  <div class="gal-masonry">
    ${imgs.map((img,i)=>`<div class="g-item" onclick="openLb(${i},${JSON.stringify(imgs)})"><img src="${img}" alt=""></div>`).join('')}
  </div>
</section>
${beautyFooter(d)}
<script>${beautyJs()}<\/script>
</body></html>`;
}

function buildBeautyLocationHtml(d) {
  return `<!DOCTYPE html>
<html lang="ko"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>오시는 길 | ${d.name}</title>
<style>${beautyCss(d)}
.page-hero{height:45vh;min-height:320px;position:relative;display:flex;align-items:flex-end;padding:48px 56px;overflow:hidden;margin-top:72px;background:var(--dark);}
.page-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.5;}
.page-hero-txt{position:relative;z-index:1;color:#fff;}
.breadcrumb{font-size:10px;letter-spacing:.16em;color:rgba(255,255,255,0.4);margin-bottom:10px;text-transform:uppercase;}
.breadcrumb a{color:var(--rose2);text-decoration:none;}
.page-title{font-family:'Cormorant',serif;font-size:clamp(32px,4vw,60px);font-weight:400;}
.page-title em{font-style:italic;color:var(--rose2);}
.loc-wrap{padding:80px 56px;display:grid;grid-template-columns:1fr 1fr;gap:72px;}
.map-box{overflow:hidden;min-height:420px;}
.map-box iframe{width:100%;height:100%;min-height:420px;border:none;display:block;}
.loc-info strong{font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:var(--rose);display:block;margin-bottom:6px;margin-top:24px;font-weight:700;}
.loc-info strong:first-child{margin-top:0;}
.loc-info p{font-size:14px;line-height:1.8;color:#555;}
@media(max-width:768px){.page-hero{padding:36px 20px;margin-top:64px;}.loc-wrap{grid-template-columns:1fr;padding:48px 20px;}.map-box,.map-box iframe{min-height:280px;}}
</style>
</head><body>
${beautyHeader(d,'location')}
<div class="page-hero"><img src="${d.h1Img}" alt=""><div class="page-hero-txt"><div class="breadcrumb"><a href="index.html">Home</a> / Location</div><h1 class="page-title">찾아오시는 <em>길</em></h1></div></div>
<div class="loc-wrap">
  <div class="map-box"><iframe src="https://map.naver.com/v5/search/${encodeURIComponent((d.address||d.name).split(' ').slice(0,3).join(' '))}" allowfullscreen loading="lazy"></iframe></div>
  <div class="loc-info">
    <div class="eyebrow">Location</div>
    <h2 class="sec-title" style="margin-bottom:28px">${d.name}</h2>
    <strong>주소</strong><p>${d.address}</p>
    <strong>전화</strong><p><a href="tel:${d.phone.replace(/-/g,'')}" style="color:inherit">${d.phone}</a></p>
    <strong>영업시간</strong><p>${d.openHours}</p>
    <strong>주차</strong><p>${d.parking}</p>
    <br><a href="reservation.html" class="btn-rose" style="margin-top:16px">예약하기</a>
  </div>
</div>
${beautyFooter(d)}
<script>${beautyJs()}<\/script>
</body></html>`;
}

function buildBeautyPages(d) {
  return {
    'index.html':    buildBeautyIndexHtml(d),
    'service.html':  buildBeautyServiceHtml(d),
    'gallery.html':  buildBeautyGalleryHtml(d),
    'location.html': buildBeautyLocationHtml(d),
  };
}
