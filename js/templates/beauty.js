/* Beauty / Hair — Bright Feminine (밝고 따뜻한 핑크베이지) */

function beautyCss(d) {
  return `
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Noto+Serif+KR:wght@300;400;500&family=Montserrat:wght@300;400;500;600&display=swap');
${buildFontSizeCss(d)}
*{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;}
body{font-family:'Noto Sans KR',sans-serif;background:#fff;color:#333;overflow-x:hidden;}
:root{--bg:#fff;--bg2:#FDF8F8;--bg3:#FEF0EF;--dark:#2A1A1A;--rose:#D4737A;--rose2:#E89CA0;--rose-light:#FEF0EF;--gold:#C9A84C;--gray:#888;--border:#F0E4E4;}
.top-bar{background:var(--rose);color:#fff;padding:8px 56px;display:flex;justify-content:space-between;align-items:center;font-size:12px;}
.top-bar a{color:#fff;text-decoration:none;opacity:.85;}
.top-bar a:hover{opacity:1;}
header{position:sticky;top:0;z-index:100;height:72px;display:flex;align-items:center;justify-content:space-between;padding:0 56px;background:#fff;border-bottom:1px solid var(--border);box-shadow:0 2px 12px rgba(0,0,0,0.04);}
.logo-area{text-decoration:none;display:flex;align-items:center;gap:12px;}
.logo-icon{width:44px;height:44px;background:var(--rose);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:18px;font-weight:700;font-family:'Montserrat',sans-serif;flex-shrink:0;}
.logo-texts{display:flex;flex-direction:column;}
.logo-text{font-family:'Noto Serif KR',serif;font-size:17px;color:var(--dark);font-weight:500;line-height:1.2;}
.logo-sub{font-size:9px;color:var(--rose);letter-spacing:.2em;text-transform:uppercase;margin-top:2px;}
nav{display:flex;gap:36px;}
nav a{font-size:14px;color:#555;text-decoration:none;font-weight:500;transition:color .2s;padding-bottom:2px;border-bottom:2px solid transparent;}
nav a:hover,nav a.active{color:var(--rose);border-bottom-color:var(--rose);}
.header-right{display:flex;align-items:center;gap:12px;}
.header-tel{font-size:13px;color:var(--dark);text-decoration:none;font-weight:600;}
.header-cta{background:var(--rose);color:#fff;padding:9px 20px;font-size:13px;text-decoration:none;font-weight:600;border-radius:4px;transition:background .2s;}
.header-cta:hover{background:#BB5A62;}
.owner-login-btn{font-size:11px;color:#bbb;text-decoration:none;transition:color .2s;}
.owner-login-btn:hover{color:var(--rose);}
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:4px;}
.hamburger span{display:block;width:22px;height:2px;background:var(--dark);transition:all .3s;border-radius:2px;}
.hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
.hamburger.open span:nth-child(2){opacity:0;}
.hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}
.mobile-nav{display:none;position:fixed;top:72px;left:0;right:0;background:#fff;z-index:99;flex-direction:column;border-bottom:2px solid var(--rose);box-shadow:0 8px 24px rgba(0,0,0,0.1);}
.mobile-nav.open{display:flex;}
.mobile-nav a{font-size:14px;color:#333;text-decoration:none;padding:16px 28px;border-bottom:1px solid var(--border);font-weight:500;}
.mobile-nav a.rsv{background:var(--rose);color:#fff;text-align:center;}
.floating{position:fixed;bottom:28px;right:24px;display:flex;flex-direction:column;gap:8px;z-index:98;opacity:0;transition:opacity .3s;pointer-events:none;}
.floating.show{opacity:1;pointer-events:all;}
.floating a{padding:12px 20px;font-size:13px;text-decoration:none;display:flex;align-items:center;gap:6px;font-weight:600;border-radius:4px;box-shadow:0 4px 16px rgba(0,0,0,0.15);}
.f-call{background:#333;color:#fff;} .f-book{background:var(--rose);color:#fff;}
.hero{min-height:85vh;display:grid;grid-template-columns:1fr 1fr;}
.hero-left{display:flex;flex-direction:column;justify-content:center;padding:100px 64px 80px;background:var(--bg3);}
.hero-label{font-size:11px;letter-spacing:.24em;color:var(--rose);text-transform:uppercase;margin-bottom:20px;font-weight:700;display:inline-flex;align-items:center;gap:12px;}
.hero-label::before{content:'';display:block;width:32px;height:2px;background:var(--rose);border-radius:2px;}
.hero-h1{font-family:'Noto Serif KR',serif;font-size:clamp(36px,var(--fs-hero),68px);line-height:1.25;color:var(--dark);font-weight:400;margin-bottom:20px;}
.hero-h1 em{font-style:normal;color:var(--rose);font-weight:500;}
.hero-sub{font-size:15px;color:#666;line-height:1.9;max-width:420px;margin-bottom:36px;font-weight:300;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;}
.hero-right{position:relative;overflow:hidden;min-height:500px;}
.hero-right img{width:100%;height:100%;object-fit:cover;display:block;}
.hero-badge{position:absolute;bottom:32px;right:32px;background:#fff;padding:16px 20px;text-align:center;box-shadow:0 4px 20px rgba(0,0,0,0.12);border-radius:8px;}
.hero-badge .num{font-family:'Noto Serif KR',serif;font-size:28px;color:var(--rose);font-weight:400;line-height:1;}
.hero-badge .lbl{font-size:10px;color:#888;margin-top:4px;letter-spacing:.1em;}
.btn-rose{display:inline-flex;align-items:center;gap:8px;background:var(--rose);color:#fff;padding:13px 28px;font-size:14px;text-decoration:none;font-weight:600;border-radius:4px;transition:background .2s;border:none;cursor:pointer;font-family:inherit;}
.btn-rose:hover{background:#BB5A62;}
.btn-outline-rose{display:inline-flex;align-items:center;border:2px solid var(--rose);color:var(--rose);padding:11px 28px;font-size:14px;text-decoration:none;font-weight:600;border-radius:4px;transition:all .2s;}
.btn-outline-rose:hover{background:var(--rose);color:#fff;}
.btn-outline-dark{display:inline-flex;align-items:center;border:2px solid #ddd;color:#333;padding:11px 28px;font-size:14px;text-decoration:none;font-weight:600;border-radius:4px;transition:all .2s;}
.btn-outline-dark:hover{border-color:var(--rose);color:var(--rose);}
.eyebrow{font-size:12px;letter-spacing:.24em;color:var(--rose);text-transform:uppercase;margin-bottom:10px;font-weight:700;}
.sec-title{font-family:'Noto Serif KR',serif;font-size:clamp(24px,var(--fs-section),40px);line-height:1.3;color:var(--dark);font-weight:400;}
.sec-title em{font-style:normal;color:var(--rose);font-weight:500;}
.svc-section{padding:88px 56px;background:#fff;}
.svc-header{text-align:center;margin-bottom:56px;}
.svc-header .sec-sub{font-size:15px;color:#888;margin-top:12px;}
.svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;}
.svc-card{background:#fff;border:1px solid var(--border);overflow:hidden;transition:all .3s;cursor:pointer;text-decoration:none;display:block;border-radius:8px;}
.svc-card:hover{box-shadow:0 12px 40px rgba(212,115,122,0.15);transform:translateY(-4px);border-color:var(--rose);}
.svc-img{overflow:hidden;aspect-ratio:4/3;}
.svc-img img{width:100%;height:100%;object-fit:cover;transition:transform .6s;}
.svc-card:hover .svc-img img{transform:scale(1.05);}
.svc-body{padding:24px;}
.svc-tag{font-size:11px;letter-spacing:.16em;color:var(--rose);text-transform:uppercase;font-weight:700;margin-bottom:8px;display:block;}
.svc-name{font-family:'Noto Serif KR',serif;font-size:18px;color:var(--dark);margin-bottom:10px;font-weight:400;}
.svc-desc{font-size:13px;color:#888;line-height:1.8;}
.stylist-section{padding:88px 56px;background:var(--bg2);}
.stylist-header{text-align:center;margin-bottom:56px;}
.stylist-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:28px;}
.stylist-card{background:#fff;border-radius:8px;overflow:hidden;display:flex;box-shadow:0 4px 20px rgba(0,0,0,0.06);}
.stylist-img{width:200px;flex-shrink:0;overflow:hidden;}
.stylist-img img{width:100%;height:100%;object-fit:cover;object-position:top;display:block;transition:transform .6s;}
.stylist-card:hover .stylist-img img{transform:scale(1.04);}
.stylist-info{padding:32px 28px;display:flex;flex-direction:column;justify-content:center;}
.stylist-role{font-size:11px;letter-spacing:.2em;color:var(--rose);text-transform:uppercase;font-weight:700;margin-bottom:6px;}
.stylist-name{font-family:'Noto Serif KR',serif;font-size:22px;color:var(--dark);margin-bottom:14px;font-weight:400;}
.stylist-line{width:32px;height:2px;background:var(--rose);margin-bottom:14px;border-radius:2px;}
.stylist-cert{font-size:12px;color:#888;line-height:2;}
.review-section{padding:88px 56px;background:var(--rose-light);}
.review-header{text-align:center;margin-bottom:56px;}
.review-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.review-card{background:#fff;padding:32px 28px;border-radius:8px;box-shadow:0 2px 16px rgba(0,0,0,0.05);}
.review-stars{color:var(--rose);font-size:16px;margin-bottom:14px;}
.review-text{font-size:14px;color:#555;line-height:1.9;margin-bottom:20px;}
.review-who{font-size:12px;color:var(--rose);font-weight:700;}
.info-section{padding:80px 56px;background:#fff;}
.info-inner{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;text-align:center;}
.info-box{padding:36px 24px;}
.info-icon{font-size:36px;margin-bottom:16px;}
.info-head{font-size:13px;letter-spacing:.18em;text-transform:uppercase;color:var(--rose);margin-bottom:10px;font-weight:700;}
.info-val{font-size:14px;line-height:1.9;color:#555;}
footer{background:var(--dark);padding:60px 56px 28px;}
.foot-top{display:grid;grid-template-columns:2fr 1fr 1fr;gap:48px;padding-bottom:36px;margin-bottom:24px;border-bottom:1px solid rgba(255,255,255,0.08);}
.foot-brand{display:flex;align-items:center;gap:10px;margin-bottom:14px;}
.foot-brand-icon{width:36px;height:36px;background:var(--rose);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;font-weight:700;font-family:'Montserrat',sans-serif;flex-shrink:0;}
.foot-brand-name{font-family:'Noto Serif KR',serif;font-size:17px;color:#fff;font-weight:400;}
.foot-desc{font-size:13px;line-height:2;color:rgba(255,255,255,0.35);}
.foot-head{font-size:10px;letter-spacing:.22em;color:var(--rose2);text-transform:uppercase;margin-bottom:16px;font-weight:700;}
.foot-links{display:flex;flex-direction:column;gap:10px;}
.foot-links a{font-size:13px;color:rgba(255,255,255,0.4);text-decoration:none;transition:color .2s;}
.foot-links a:hover{color:var(--rose2);}
.foot-copy{font-size:12px;color:rgba(255,255,255,0.2);text-align:center;}
.lb-wrap{position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:500;display:none;align-items:center;justify-content:center;}
.lb-wrap.open{display:flex;}
.lb-wrap img{max-width:90vw;max-height:90vh;object-fit:contain;}
.lb-close{position:absolute;top:24px;right:32px;color:rgba(255,255,255,0.6);font-size:28px;cursor:pointer;background:none;border:none;}
.lb-prev,.lb-next{position:absolute;top:50%;transform:translateY(-50%);color:rgba(255,255,255,0.4);font-size:44px;cursor:pointer;background:none;border:none;padding:16px;}
.lb-prev{left:8px;} .lb-next{right:8px;}
@media(max-width:1024px){
  .top-bar{padding:6px 32px;} header{padding:0 32px;} .hero{grid-template-columns:1fr;} .hero-left{min-height:60vh;padding:72px 32px 56px;} .hero-right{height:50vh;}
  .svc-section,.stylist-section,.review-section,.info-section{padding:64px 32px;} footer{padding:48px 32px 24px;}
  .foot-top{grid-template-columns:1fr 1fr;} .stylist-grid{grid-template-columns:1fr;}
}
@media(max-width:768px){
  .top-bar{display:none;} header{padding:0 20px;height:64px;} nav,.header-right{display:none;} .hamburger{display:flex;}
  .mobile-nav{top:64px;} .hero-left{padding:56px 20px 44px;} .hero-h1{font-size:clamp(30px,8vw,52px);}
  .svc-section,.stylist-section,.review-section,.info-section{padding:52px 20px;}
  .svc-grid,.review-grid{grid-template-columns:1fr;} .stylist-card{flex-direction:column;} .stylist-img{width:100%;height:220px;}
  .info-inner{grid-template-columns:1fr;gap:16px;} footer{padding:40px 20px 20px;} .foot-top{grid-template-columns:1fr;gap:28px;}
  .floating{right:12px;}
}`;
}

function beautyHeader(d, activePage) {
  const pages = ['index','service','gallery','location','reservation'];
  const labels = ['홈','서비스','갤러리','오시는 길','예약'];
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

function beautyFooter(d) {
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
window.addEventListener('scroll',()=>{document.getElementById('floating').classList.toggle('show',scrollY>300);});
function toggleNav(){document.getElementById('hamBtn').classList.toggle('open');document.getElementById('mobileNav').classList.toggle('open');}
document.addEventListener('click',e=>{const b=document.getElementById('hamBtn'),n=document.getElementById('mobileNav');if(b&&n&&!b.contains(e.target)&&!n.contains(e.target)){b.classList.remove('open');n.classList.remove('open');}});
// 방문자 기록
try{recordVisit(location.pathname.split('/').pop()||'index.html');}catch(e){}`;
}

function buildBeautyNaverWidget(d) {
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
      <a href="service.html" class="btn-rose">서비스 보기 →</a>
      <a href="reservation.html" class="btn-outline-rose">예약하기</a>
    </div>
  </div>
  <div class="hero-right">
    <img src="${d.h1Img}" alt="${d.name}">
    <div class="hero-badge"><div class="num">Premium</div><div class="lbl">Beauty Salon</div></div>
  </div>
</section>
<section class="svc-section">
  <div class="svc-header">
    <div class="eyebrow">Our Services</div>
    <h2 class="sec-title">나를 위한 특별한 <em>서비스</em></h2>
    <p class="sec-sub">${d.slogan}</p>
  </div>
  <div class="svc-grid">
    ${['p1','p2','p3'].map(p=>`<a href="service.html" class="svc-card"><div class="svc-img"><img src="${d[p+'Img']}" alt="${d[p+'Name']}"></div><div class="svc-body"><span class="svc-tag">${d[p+'Tag']}</span><div class="svc-name">${d[p+'Name']}</div><div class="svc-desc">${d[p+'Desc']}</div></div></a>`).join('')}
  </div>
</section>
<section class="stylist-section">
  <div class="stylist-header">
    <div class="eyebrow">Our Stylists</div>
    <h2 class="sec-title">전문 <em>스타일리스트</em></h2>
  </div>
  <div class="stylist-grid">
    ${['i1','i2'].map(k=>`<div class="stylist-card"><div class="stylist-img"><img src="${d[k+'Img']}" alt="${d[k+'Name']}"></div><div class="stylist-info"><div class="stylist-role">${d[k+'Role']}</div><div class="stylist-name">${d[k+'Name']}</div><div class="stylist-line"></div><div class="stylist-cert">${(d[k+'Cert']||'').replace(/\n/g,'<br>')}</div></div></div>`).join('')}
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
${buildBeautyNaverWidget(d)}
<section class="info-section">
  <div style="text-align:center;margin-bottom:48px">
    <div class="eyebrow">Visit Us</div>
    <h2 class="sec-title">방문 전 <em>확인하세요</em></h2>
  </div>
  <div class="info-inner">
    <div class="info-box"><div class="info-icon">🕐</div><div class="info-head">영업시간</div><div class="info-val">${d.openHours}</div></div>
    <div class="info-box"><div class="info-icon">📍</div><div class="info-head">주소</div><div class="info-val">${d.address}</div></div>
    <div class="info-box"><div class="info-icon">🚗</div><div class="info-head">주차</div><div class="info-val">${d.parking}</div></div>
  </div>
  <div style="text-align:center;margin-top:36px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
    <a href="location.html" class="btn-outline-dark">지도 보기</a>
    <a href="reservation.html" class="btn-rose">예약하기</a>
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
.page-hero{height:40vh;min-height:280px;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;background:var(--bg3);}
.page-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.3;}
.page-hero-txt{position:relative;z-index:1;text-align:center;}
.breadcrumb{font-size:12px;color:rgba(42,26,26,0.4);margin-bottom:12px;}
.breadcrumb a{color:var(--rose);text-decoration:none;}
.page-title{font-family:'Noto Serif KR',serif;font-size:clamp(28px,4vw,48px);font-weight:400;color:var(--dark);}
.page-title em{font-style:normal;color:var(--rose);}
.detail-wrap{padding:80px 56px;background:#fff;}
.detail-item{display:grid;grid-template-columns:1fr 1fr;gap:0;margin-bottom:4px;}
.detail-item:nth-child(even) .d-img{order:2;} .detail-item:nth-child(even) .d-txt{order:1;}
.d-img{overflow:hidden;aspect-ratio:4/3;}
.d-img img{width:100%;height:100%;object-fit:cover;transition:transform .7s;display:block;}
.detail-item:hover .d-img img{transform:scale(1.04);}
.d-txt{background:var(--bg2);padding:56px 52px;display:flex;flex-direction:column;justify-content:center;}
@media(max-width:768px){.page-hero{height:32vh;}.detail-wrap{padding:48px 20px;}.detail-item{grid-template-columns:1fr;}.detail-item:nth-child(even) .d-img,.detail-item:nth-child(even) .d-txt{order:unset;}.d-img{aspect-ratio:16/9;}.d-txt{padding:32px 20px;}}
</style>
</head><body>
${beautyHeader(d,'service')}
<div class="page-hero"><img src="${d.h2Img}" alt=""><div class="page-hero-txt"><div class="breadcrumb"><a href="index.html">홈</a> / 서비스</div><h1 class="page-title">전문 <em>서비스</em></h1></div></div>
<div class="detail-wrap">
  ${['p1','p2','p3'].map((p,i)=>`<div class="detail-item"><div class="d-img"><img src="${d[p+'Img']}" alt="${d[p+'Name']}"></div><div class="d-txt"><div class="eyebrow">0${i+1}. ${d[p+'Tag']}</div><h2 class="sec-title" style="margin-bottom:14px">${d[p+'Name']}</h2><p style="font-size:15px;line-height:1.9;color:#666;margin-bottom:24px">${d[p+'Detail']||d[p+'Desc']}</p><a href="reservation.html" class="btn-rose">예약하기</a></div></div>`).join('')}
</div>
<section class="stylist-section">
  <div class="stylist-header">
    <div class="eyebrow">Our Stylists</div>
    <h2 class="sec-title">전문 <em>스타일리스트</em></h2>
  </div>
  <div class="stylist-grid">
    ${['i1','i2'].map(k=>`<div class="stylist-card"><div class="stylist-img"><img src="${d[k+'Img']}" alt="${d[k+'Name']}"></div><div class="stylist-info"><div class="stylist-role">${d[k+'Role']}</div><div class="stylist-name">${d[k+'Name']}</div><div class="stylist-line"></div><div class="stylist-cert">${(d[k+'Cert']||'').replace(/\n/g,'<br>')}</div></div></div>`).join('')}
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
.page-hero{height:40vh;min-height:280px;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;background:var(--bg3);}
.page-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.3;}
.page-hero-txt{position:relative;z-index:1;text-align:center;}
.breadcrumb{font-size:12px;color:rgba(42,26,26,0.4);margin-bottom:12px;}
.breadcrumb a{color:var(--rose);text-decoration:none;}
.page-title{font-family:'Noto Serif KR',serif;font-size:clamp(28px,4vw,48px);font-weight:400;color:var(--dark);}
.page-title em{font-style:normal;color:var(--rose);}
.gal-masonry{columns:4;gap:4px;}
.g-item{break-inside:avoid;margin-bottom:4px;overflow:hidden;cursor:pointer;border-radius:4px;}
.g-item img{width:100%;display:block;transition:transform .6s;}
.g-item:hover img{transform:scale(1.04);}
@media(max-width:768px){.page-hero{height:32vh;}.gal-masonry{columns:2;}}
</style>
</head><body>
${beautyHeader(d,'gallery')}
<div class="lb-wrap" id="lb"><button class="lb-close" onclick="closeLb()">✕</button><button class="lb-prev" onclick="lbMv(-1)">‹</button><img id="lbImg" src="" alt=""><button class="lb-next" onclick="lbMv(1)">›</button></div>
<div class="page-hero"><img src="${d.h3Img}" alt=""><div class="page-hero-txt"><div class="breadcrumb"><a href="index.html">홈</a> / 갤러리</div><h1 class="page-title">작업 <em>갤러리</em></h1></div></div>
<section style="padding:80px 56px;background:#fff">
  <div class="gal-masonry">${imgs.map((img,i)=>`<div class="g-item" onclick="openLb(${i},${JSON.stringify(imgs)})"><img src="${img}" alt=""></div>`).join('')}</div>
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
.page-hero{height:40vh;min-height:280px;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;background:var(--bg3);}
.page-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.3;}
.page-hero-txt{position:relative;z-index:1;text-align:center;}
.breadcrumb{font-size:12px;color:rgba(42,26,26,0.4);margin-bottom:12px;}
.breadcrumb a{color:var(--rose);text-decoration:none;}
.page-title{font-family:'Noto Serif KR',serif;font-size:clamp(28px,4vw,48px);font-weight:400;color:var(--dark);}
.page-title em{font-style:normal;color:var(--rose);}
.loc-wrap{padding:80px 56px;display:grid;grid-template-columns:1fr 1fr;gap:64px;}
.map-box{overflow:hidden;min-height:400px;border-radius:8px;box-shadow:0 4px 24px rgba(0,0,0,0.1);}
.map-box iframe{width:100%;height:100%;min-height:400px;border:none;display:block;}
.loc-info strong{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--rose);display:block;margin-bottom:6px;margin-top:24px;font-weight:700;}
.loc-info strong:first-child{margin-top:0;}
.loc-info p{font-size:14px;line-height:1.8;color:#555;}
@media(max-width:768px){.page-hero{height:32vh;}.loc-wrap{grid-template-columns:1fr;padding:48px 20px;}.map-box,.map-box iframe{min-height:280px;}}
</style>
</head><body>
${beautyHeader(d,'location')}
<div class="page-hero"><img src="${d.h1Img}" alt=""><div class="page-hero-txt"><div class="breadcrumb"><a href="index.html">홈</a> / 오시는 길</div><h1 class="page-title">찾아오시는 <em>길</em></h1></div></div>
<div class="loc-wrap">
  <div class="map-box"><iframe src="https://map.naver.com/v5/search/${encodeURIComponent((d.address||d.name).split(' ').slice(0,3).join(' '))}" allowfullscreen loading="lazy"></iframe></div>
  <div class="loc-info">
    <div class="eyebrow">Location</div>
    <h2 class="sec-title" style="margin-bottom:28px">${d.name}</h2>
    <strong>주소</strong><p>${d.address}</p>
    <strong>전화</strong><p><a href="tel:${d.phone.replace(/-/g,'')}" style="color:inherit">${d.phone}</a></p>
    <strong>영업시간</strong><p>${d.openHours}</p>
    <strong>주차</strong><p>${d.parking}</p>
    <div style="margin-top:28px;display:flex;gap:12px;flex-wrap:wrap">
      <a href="reservation.html" class="btn-rose">예약하기</a>
    </div>
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
