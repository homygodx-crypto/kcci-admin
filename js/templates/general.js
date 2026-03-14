/* ============================================================
   General Template — Clean Business
   컨셉: 네이비 + 화이트 + 오렌지, 클린 그리드 쇼케이스
   폰트: DM Sans + Noto Sans KR
   ============================================================ */

function generalCss(d) {
  return `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
${buildFontSizeCss(d)}
*{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;}
body{font-family:'Noto Sans KR',sans-serif;background:#fff;color:#0d1b36;overflow-x:hidden;}
:root{--white:#fff;--bg:#f8f9fc;--navy:#0d1b36;--blue:#1d4ed8;--orange:#f97316;--orange2:#ea580c;--gray:#64748b;--bd:rgba(13,27,54,0.1);}
header{position:fixed;top:0;left:0;right:0;z-index:100;height:66px;display:flex;align-items:center;justify-content:space-between;padding:0 52px;background:rgba(255,255,255,0.98);backdrop-filter:blur(10px);border-bottom:1px solid var(--bd);}
.logo-area{text-decoration:none;}
.logo-text{font-family:'DM Sans',sans-serif;font-size:18px;color:var(--navy);font-weight:700;display:block;}
.logo-sub{font-size:10px;color:var(--orange);letter-spacing:.18em;text-transform:uppercase;font-weight:500;margin-top:1px;display:block;}
nav{display:flex;gap:32px;}
nav a{font-family:'DM Sans',sans-serif;font-size:14px;color:rgba(13,27,54,0.55);text-decoration:none;font-weight:500;transition:color .2s;}
nav a:hover,nav a.active{color:var(--navy);}
.header-cta{font-family:'DM Sans',sans-serif;background:var(--orange);color:#fff;padding:9px 20px;font-size:13px;font-weight:700;text-decoration:none;transition:background .2s;}
.header-cta:hover{background:var(--orange2);}
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:4px;}
.hamburger span{display:block;width:22px;height:2px;background:var(--navy);transition:all .3s;}
.hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
.hamburger.open span:nth-child(2){opacity:0;}
.hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}
.mobile-nav{display:none;position:fixed;top:66px;left:0;right:0;background:#fff;z-index:99;border-bottom:3px solid var(--orange);flex-direction:column;}
.mobile-nav.open{display:flex;}
.mobile-nav a{font-size:15px;color:var(--navy);text-decoration:none;padding:16px 28px;border-bottom:1px solid var(--bd);}
.mobile-nav a:hover,.mobile-nav a.active{background:var(--bg);color:var(--orange);}
.quick{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:99;display:flex;flex-direction:column;gap:1px;}
.quick a{background:var(--navy);color:rgba(255,255,255,.75);font-size:10px;writing-mode:vertical-rl;padding:16px 10px;text-decoration:none;letter-spacing:.14em;transition:background .2s;}
.quick a:hover{background:var(--orange);}
.floating{position:fixed;bottom:24px;right:20px;display:flex;flex-direction:column;gap:8px;z-index:98;opacity:0;transition:opacity .3s;pointer-events:none;}
.floating.show{opacity:1;pointer-events:all;}
.floating a{padding:12px 20px;font-size:13px;font-family:inherit;text-decoration:none;display:flex;align-items:center;gap:6px;}
.f-call{background:#03C75A;color:#fff;}.f-book{background:var(--orange);color:#fff;font-weight:700;}
.btn-orange{display:inline-flex;align-items:center;gap:8px;background:var(--orange);color:#fff;padding:13px 28px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;text-decoration:none;transition:all .2s;border:none;cursor:pointer;}
.btn-orange:hover{background:var(--orange2);}
.btn-outline{display:inline-flex;align-items:center;gap:8px;border:2px solid var(--navy);color:var(--navy);padding:11px 28px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;text-decoration:none;transition:all .2s;}
.btn-outline:hover{background:var(--navy);color:#fff;}
.eyebrow{font-family:'DM Sans',sans-serif;font-size:11px;letter-spacing:.24em;color:var(--orange);text-transform:uppercase;font-weight:700;margin-bottom:12px;}
.sec-title{font-family:'DM Sans',sans-serif;font-size:var(--fs-section);line-height:1.1;color:var(--navy);margin-bottom:16px;font-weight:700;}
.sec-title em{font-style:normal;color:var(--orange);}
/* 히어로 */
.hero{min-height:100vh;padding-top:66px;display:grid;grid-template-columns:1fr 1fr;background:var(--bg);}
.hero-left{display:flex;flex-direction:column;justify-content:center;padding:80px 60px;}
.hero-chip{display:inline-flex;align-items:center;gap:8px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;color:var(--orange);background:rgba(249,115,22,0.08);border:1px solid rgba(249,115,22,0.2);padding:6px 14px;margin-bottom:28px;letter-spacing:.04em;}
.hero-h1{font-family:'DM Sans',sans-serif;font-size:var(--fs-hero);line-height:1.02;font-weight:700;color:var(--navy);margin-bottom:20px;}
.hero-h1 em{font-style:normal;color:var(--orange);}
.hero-sub{font-size:var(--fs-body);color:var(--gray);line-height:1.85;margin-bottom:40px;max-width:440px;}
.hero-right{position:relative;overflow:hidden;}
.hero-right-bg{position:absolute;inset:0;background-size:cover;background-position:center;}
.hero-right-overlay{position:absolute;inset:0;background:linear-gradient(135deg,var(--bg) 0%,transparent 40%);}
.hero-info{position:absolute;bottom:36px;left:32px;right:32px;background:rgba(255,255,255,0.95);backdrop-filter:blur(8px);padding:20px 24px;display:grid;grid-template-columns:repeat(3,1fr);gap:16px;z-index:2;}
.hero-info-item{}
.hero-info-label{font-family:'DM Sans',sans-serif;font-size:10px;letter-spacing:.18em;color:var(--orange);text-transform:uppercase;font-weight:600;margin-bottom:4px;}
.hero-info-val{font-size:13px;color:var(--navy);font-weight:500;}
/* 상품 */
.product-section{padding:96px 52px;background:var(--white);}
.product-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:52px;}
.product-card{border:1px solid var(--bd);transition:border-color .3s,box-shadow .3s;overflow:hidden;}
.product-card:hover{border-color:var(--orange);box-shadow:0 4px 24px rgba(249,115,22,0.1);}
.product-img{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;}
.product-body{padding:22px 24px;}
.product-tag{font-family:'DM Sans',sans-serif;font-size:10px;letter-spacing:.2em;color:var(--orange);text-transform:uppercase;font-weight:600;margin-bottom:8px;display:block;}
.product-name{font-family:'DM Sans',sans-serif;font-size:var(--fs-card);color:var(--navy);margin-bottom:8px;font-weight:600;line-height:1.2;}
.product-desc{font-size:var(--fs-body);color:var(--gray);line-height:1.75;margin-bottom:10px;}
.product-detail{font-size:12px;color:rgba(100,116,139,0.7);line-height:1.75;border-top:1px solid var(--bd);padding-top:12px;}
/* 정보 */
.info-section{background:var(--navy);padding:80px 52px;}
.info-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;margin-top:48px;}
.info-item{border-left:2px solid rgba(249,115,22,0.4);padding-left:24px;}
.info-label{font-family:'DM Sans',sans-serif;font-size:10px;letter-spacing:.2em;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:8px;}
.info-val{font-size:var(--fs-body);color:rgba(255,255,255,0.85);line-height:1.8;}
/* 후기 */
.reviews-section{padding:96px 52px;background:var(--bg);}
.reviews-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:52px;}
.review-card{background:var(--white);padding:28px;border-left:3px solid var(--orange);}
.review-stars{font-size:14px;color:var(--orange);margin-bottom:10px;letter-spacing:1px;}
.review-text{font-size:var(--fs-review);color:rgba(13,27,54,0.7);line-height:1.85;margin-bottom:14px;}
.review-who{font-family:'DM Sans',sans-serif;font-size:11px;color:var(--gray);font-weight:600;letter-spacing:.06em;}
/* 갤러리 */
.gallery-section{padding:96px 52px;background:var(--white);}
.gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:48px;}
.g-item{overflow:hidden;cursor:pointer;background:var(--bg);}
.g-item:nth-child(1){grid-column:span 2;}
.g-item:nth-child(6){grid-column:span 2;}
.g-item img{width:100%;height:100%;min-height:200px;object-fit:cover;transition:transform .4s;display:block;}
.g-item:hover img{transform:scale(1.04);}
#lb{position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:1000;display:none;align-items:center;justify-content:center;}
#lb.open{display:flex;}
#lbImg{max-width:88vw;max-height:88vh;object-fit:contain;}
.lb-close{position:absolute;top:24px;right:32px;background:none;border:none;color:rgba(255,255,255,.5);font-size:28px;cursor:pointer;}
.lb-prev,.lb-next{position:absolute;top:50%;transform:translateY(-50%);background:none;border:none;color:rgba(255,255,255,.4);font-size:36px;cursor:pointer;padding:16px;}
.lb-prev{left:16px;}.lb-next{right:16px;}
footer{background:var(--navy);padding:56px 52px 36px;}
.foot-top{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:48px;margin-bottom:44px;}
.foot-brand{font-family:'DM Sans',sans-serif;font-size:18px;color:var(--orange);font-weight:700;margin-bottom:10px;}
.foot-desc{font-size:var(--fs-footer);color:rgba(255,255,255,0.3);line-height:1.9;}
.foot-head{font-family:'DM Sans',sans-serif;font-size:9px;letter-spacing:.24em;color:rgba(255,255,255,0.4);text-transform:uppercase;font-weight:600;margin-bottom:14px;}
.foot-links{display:flex;flex-direction:column;gap:9px;}
.foot-links a{font-size:var(--fs-footer);color:rgba(255,255,255,0.35);text-decoration:none;transition:color .2s;}
.foot-links a:hover{color:var(--orange);}
.foot-bottom{border-top:1px solid rgba(255,255,255,0.06);padding-top:24px;font-size:11px;color:rgba(255,255,255,0.18);display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;}
@media(max-width:1000px){.hero{grid-template-columns:1fr;}.hero-right{height:50vw;min-height:240px;}.foot-top{grid-template-columns:1fr 1fr;}}
@media(max-width:768px){
  header{padding:0 20px;}nav,.header-cta,.quick{display:none;}.hamburger{display:flex;}
  .hero-left{padding:60px 20px;}.hero-h1{font-size:clamp(32px,8vw,52px);}
  .hero-info{grid-template-columns:1fr;}
  .product-section,.reviews-section,.gallery-section,.info-section{padding:60px 20px;}
  .product-grid,.reviews-grid{grid-template-columns:1fr;}
  .gallery-grid{grid-template-columns:1fr 1fr;}.g-item{grid-column:span 1!important;}
  .info-grid{grid-template-columns:1fr;}
  footer{padding:48px 20px 28px;}.foot-top{grid-template-columns:1fr;}.foot-bottom{flex-direction:column;}
}
`;
}

function generalHeader(d, activePage) {
  const pages = ['index','product','gallery','location'];
  const labels = ['홈','상품/서비스','갤러리','오시는 길'];
  const nav = pages.map((p,i)=>`<a href="${p}.html"${activePage===p?' class="active"':''}>${labels[i]}</a>`).join('');
  const mobileNav = pages.map((p,i)=>`<a href="${p}.html"${activePage===p?' class="active"':''}>${labels[i]}</a>`).join('');
  return `<div class="quick">
  <a href="tel:${d.phone.replace(/-/g,'')}">전화</a>
  <a href="reservation.html">문의</a>
  <a href="location.html">위치</a>
</div>
<div class="floating" id="floating">
  <a href="tel:${d.phone.replace(/-/g,'')}" class="f-call">📞 전화</a>
  <a href="reservation.html" class="f-book">문의하기</a>
</div>
<header>
  <a href="index.html" class="logo-area">
    <span class="logo-text">${d.name}</span>
    <span class="logo-sub">${d.nameEn}</span>
  </a>
  <nav>${nav}</nav>
  <a href="reservation.html" class="header-cta">문의하기</a>
  <a href="admin.html" class="owner-login-btn">로그인</a>
  <button class="hamburger" id="hamBtn" onclick="toggleNav()"><span></span><span></span><span></span></button>
</header>
<div class="mobile-nav" id="mobileNav">
  ${mobileNav}
  <a href="reservation.html" style="background:var(--orange);color:#fff;font-weight:700;">문의하기</a>
</div>`;
}

function generalFooter(d) {
  return `<footer>
  <div class="foot-top">
    <div>
      <div class="foot-brand">${d.name}</div>
      <div class="foot-desc">${d.slogan}<br><br>${d.address}<br>${d.phone}${d.openHours?'<br>'+d.openHours:''}</div>
    </div>
    <div>
      <div class="foot-head">메뉴</div>
      <div class="foot-links">
        <a href="product.html">상품/서비스</a>
        <a href="gallery.html">갤러리</a>
        <a href="reservation.html">문의하기</a>
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

function generalJs(d) {
  return `function toggleNav(){document.getElementById('hamBtn').classList.toggle('open');document.getElementById('mobileNav').classList.toggle('open');}
window.addEventListener('scroll',function(){var f=document.getElementById('floating');if(f)f.classList.toggle('show',window.scrollY>300);});`;
}

function buildGeneralIndexHtml(d, titleHtmlFn) {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${d.name}</title>
<style>${generalCss(d)}</style>
</head>
<body>
${generalHeader(d,'index')}
<section class="hero">
  <div class="hero-left">
    <div class="hero-chip">✦ ${d.nameEn}</div>
    <h1 class="hero-h1">${titleHtmlFn(d.h1Title)}</h1>
    <p class="hero-sub">${d.slogan}</p>
    <div style="display:flex;gap:12px;flex-wrap:wrap">
      <a href="product.html" class="btn-orange">서비스 보기 →</a>
      <a href="reservation.html" class="btn-outline">문의하기</a>
    </div>
  </div>
  <div class="hero-right">
    <div class="hero-right-bg" style="background-image:url('${d.h1Img}')"></div>
    <div class="hero-right-overlay"></div>
    <div class="hero-info">
      <div class="hero-info-item"><div class="hero-info-label">전화</div><div class="hero-info-val">${d.phone}</div></div>
      <div class="hero-info-item"><div class="hero-info-label">영업시간</div><div class="hero-info-val">${d.openHours||'문의 바랍니다'}</div></div>
      <div class="hero-info-item"><div class="hero-info-label">주차</div><div class="hero-info-val">${d.parking||'가능'}</div></div>
    </div>
  </div>
</section>
<section class="product-section">
  <div class="eyebrow">Products & Services</div>
  <h2 class="sec-title">주요<br><em>상품 & 서비스</em></h2>
  <div class="product-grid">
    ${['p1','p2','p3'].map(p=>`<div class="product-card">
      <img class="product-img" src="${d[p+'Img']}" alt="${d[p+'Name']}" onerror="this.style.display='none'">
      <div class="product-body">
        <span class="product-tag">${d[p+'Tag']}</span>
        <div class="product-name">${d[p+'Name']}</div>
        <div class="product-desc">${d[p+'Desc']}</div>
        <div class="product-detail">${d[p+'Detail']}</div>
      </div>
    </div>`).join('')}
  </div>
</section>
<section class="info-section">
  <div class="eyebrow" style="color:rgba(249,115,22,.8)">Information</div>
  <h2 class="sec-title" style="color:#fff">매장<br><em style="color:var(--orange)">안내</em></h2>
  <div class="info-grid">
    <div class="info-item"><div class="info-label">영업시간</div><div class="info-val">${d.openHours||'문의 바랍니다'}</div></div>
    <div class="info-item"><div class="info-label">주소</div><div class="info-val">${d.address}</div></div>
    <div class="info-item"><div class="info-label">주차 / 전화</div><div class="info-val">${d.parking||'가능'}<br>${d.phone}</div></div>
  </div>
</section>
<section class="reviews-section">
  <div class="eyebrow">Review</div>
  <h2 class="sec-title">고객<br><em>후기</em></h2>
  <div class="reviews-grid">
    ${[1,2,3].map(n=>`<div class="review-card">
      <div class="review-stars">★★★★★</div>
      <p class="review-text">"${d['review'+n]}"</p>
      <div class="review-who">${d['review'+n+'who']||'네이버 방문자'}</div>
    </div>`).join('')}
  </div>
</section>
${d.placeId ? `
<section style="padding:80px 52px;background:var(--bg);">
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
${generalFooter(d)}
<script>${generalJs(d)}<\/script>

<script>
(function(){
  var SB_URL="https://vugtupipbpfundipgcqc.supabase.co";
  var SB_KEY="sb_publishable_tJhW52aAlbyM_0A5_J-yqA_OTIIhV-S";
  var ua=navigator.userAgent;
  var dv=/Mobile|Android|iPhone/i.test(ua)?"mobile":/iPad|Tablet/i.test(ua)?"tablet":"desktop";
  var br=/Edg/i.test(ua)?"Edge":/Chrome/i.test(ua)?"Chrome":/Firefox/i.test(ua)?"Firefox":/Safari/i.test(ua)?"Safari":"etc";
  var page=location.pathname.split("/").pop()||"index.html";
  fetch(SB_URL+"/rest/v1/page_views",{
    method:"POST",
    headers:{"apikey":SB_KEY,"Authorization":"Bearer "+SB_KEY,"Content-Type":"application/json","Prefer":"return=minimal"},
    body:JSON.stringify({site_id:"${ (d.url||d.name||"site").replace(/[^a-z0-9]/gi,"_").toLowerCase() }",page:page,device:dv,browser:br,visit_date:new Date().toISOString().slice(0,10),visited_at:new Date().toISOString()})
  }).catch(function(){});
})();
<\/script>
</body>
</html>`;
}

function buildGeneralProductHtml(d) {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>상품/서비스 | ${d.name}</title>
<style>${generalCss(d)}
.prod-page{padding-top:66px;}
.prod-top{background:var(--navy);padding:64px 52px;}
.prod-list{padding:60px 52px;background:var(--bg);}
.prod-item{display:grid;grid-template-columns:340px 1fr;background:var(--white);border:1px solid var(--bd);margin-bottom:20px;overflow:hidden;}
.prod-item:nth-child(even){grid-template-columns:1fr 340px;}
.prod-item:nth-child(even) .pi-img{order:2;}
.prod-item:nth-child(even) .pi-body{order:1;}
.pi-img img{width:100%;height:100%;min-height:260px;object-fit:cover;display:block;}
.pi-body{padding:44px 40px;border-left:3px solid var(--orange);}
.prod-item:nth-child(even) .pi-body{border-left:none;border-right:3px solid var(--orange);}
@media(max-width:900px){.prod-top,.prod-list{padding-left:20px;padding-right:20px;}.prod-item,.prod-item:nth-child(even){grid-template-columns:1fr;}.prod-item:nth-child(even) .pi-img,.prod-item:nth-child(even) .pi-body{order:unset;}.pi-img img{max-height:220px;}.pi-body,.prod-item:nth-child(even) .pi-body{padding:28px 20px;border-left:3px solid var(--orange);border-right:none;}}
</style>
</head>
<body>
${generalHeader(d,'product')}
<div class="prod-page">
  <div class="prod-top">
    <div class="eyebrow" style="color:rgba(249,115,22,.8)">Products & Services</div>
    <h1 class="sec-title" style="color:#fff">주요<br><em style="color:var(--orange)">상품 & 서비스</em></h1>
  </div>
  <div class="prod-list">
    ${['p1','p2','p3'].map(p=>`<div class="prod-item">
      <div class="pi-img"><img src="${d[p+'Img']}" alt="${d[p+'Name']}" onerror="this.style.background='var(--bg)'"></div>
      <div class="pi-body">
        <span class="product-tag" style="margin-bottom:14px">${d[p+'Tag']}</span>
        <div class="sec-title" style="font-size:clamp(22px,2.5vw,34px)">${d[p+'Name']}</div>
        <p style="font-size:var(--fs-body);color:var(--gray);line-height:1.9;margin-bottom:14px">${d[p+'Desc']}</p>
        <p style="font-size:13px;color:rgba(100,116,139,.7);line-height:1.85;border-top:1px solid var(--bd);padding-top:16px">${d[p+'Detail']}</p>
        <div style="margin-top:28px"><a href="reservation.html" class="btn-orange">문의하기 →</a></div>
      </div>
    </div>`).join('')}
  </div>
</div>
${generalFooter(d)}
<script>${generalJs(d)}<\/script>

</body>
</html>`;
}

function buildGeneralGalleryHtml(d) {
  const uploadedImgs = (d.galleryUrls&&d.galleryUrls.length>0)?d.galleryUrls:[];
  const imgs = uploadedImgs.length>0
    ? uploadedImgs.concat([d.p1Img,d.p2Img,d.p3Img,d.h1Img,d.h2Img,d.h3Img]).slice(0,12)
    : [d.p1Img,d.p2Img,d.p3Img,d.h1Img,d.h2Img,d.h3Img];
  const lbSrcs = JSON.stringify(imgs);
  const gridItems = imgs.map((src,i)=>`<div class="g-item" onclick="openLb(${i})"><img src="${src}" alt="" loading="lazy" onerror="this.parentElement.style.background='var(--bg)'"></div>`).join('');
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>갤러리 | ${d.name}</title>
<style>${generalCss(d)}</style>
</head>
<body>
${generalHeader(d,'gallery')}
<div style="padding-top:66px">
  <div style="background:var(--navy);padding:64px 52px 48px">
    <div class="eyebrow" style="color:rgba(249,115,22,.8)">Gallery</div>
    <h1 class="sec-title" style="color:#fff">갤러리<br><em style="color:var(--orange)">사진 모음</em></h1>
  </div>
  <div style="padding:32px 52px 80px;background:var(--bg)">
    <div class="gallery-grid">${gridItems}</div>
  </div>
</div>
${generalFooter(d)}
<div id="lb" onclick="if(event.target===this)closeLb()">
  <button class="lb-close" onclick="closeLb()">✕</button>
  <button class="lb-prev" onclick="lbMove(-1)">&#8592;</button>
  <img id="lbImg" src="" alt="">
  <button class="lb-next" onclick="lbMove(1)">&#8594;</button>
</div>
<script>
${generalJs(d)}
var lbSrcs=${lbSrcs},lbIdx=0;
function openLb(i){lbIdx=i;document.getElementById('lbImg').src=lbSrcs[i];document.getElementById('lb').classList.add('open');}
function closeLb(){document.getElementById('lb').classList.remove('open');}
function lbMove(d){lbIdx=(lbIdx+d+lbSrcs.length)%lbSrcs.length;document.getElementById('lbImg').src=lbSrcs[lbIdx];}
document.addEventListener('keydown',function(e){if(document.getElementById('lb').classList.contains('open')){if(e.key==='ArrowLeft')lbMove(-1);if(e.key==='ArrowRight')lbMove(1);if(e.key==='Escape')closeLb();}});
<\/script>

</body>
</html>`;
}

function buildGeneralLocationHtml(d) {
  const mapSrc = d.placeId?`https://map.naver.com/p/entry/place/${d.placeId}`:`https://map.naver.com/v5/search/${encodeURIComponent(d.address)}`;
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>오시는 길 | ${d.name}</title>
<style>${generalCss(d)}
.loc-page{padding-top:66px;}
.loc-top{background:var(--navy);padding:64px 52px;}
.loc-content{padding:60px 52px 80px;background:var(--bg);}
.loc-map{border:1px solid var(--bd);margin-bottom:40px;}
.loc-map iframe{display:block;width:100%;height:460px;}
.loc-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
.loc-card{background:var(--white);padding:24px 28px;border-top:3px solid var(--orange);border:1px solid var(--bd);border-top:3px solid var(--orange);}
.loc-icon{font-size:22px;margin-bottom:10px;}
.loc-label{font-family:'DM Sans',sans-serif;font-size:10px;letter-spacing:.2em;color:var(--orange);text-transform:uppercase;font-weight:600;margin-bottom:8px;}
.loc-val{font-size:var(--fs-body);color:rgba(13,27,54,0.72);line-height:1.85;}
@media(max-width:768px){.loc-top,.loc-content{padding-left:20px;padding-right:20px;}.loc-map iframe{height:320px;}.loc-cards{grid-template-columns:1fr;}}
</style>
</head>
<body>
${generalHeader(d,'location')}
<div class="loc-page">
  <div class="loc-top">
    <div class="eyebrow" style="color:rgba(249,115,22,.8)">Location</div>
    <h1 class="sec-title" style="color:#fff">찾아오시는<br><em style="color:var(--orange)">방법</em></h1>
  </div>
  <div class="loc-content">
    <div class="loc-map"><iframe src="${mapSrc}" frameborder="0" allowfullscreen></iframe></div>
    <div class="loc-cards">
      <div class="loc-card"><div class="loc-icon">📍</div><div class="loc-label">Address</div><div class="loc-val">${d.address}</div></div>
      <div class="loc-card"><div class="loc-icon">🕐</div><div class="loc-label">Hours</div><div class="loc-val">${d.openHours||'문의 바랍니다'}</div></div>
      <div class="loc-card"><div class="loc-icon">🚗</div><div class="loc-label">Parking</div><div class="loc-val">${d.parking||'주차 가능'}</div></div>
    </div>
    <div style="margin-top:40px;display:flex;gap:12px">
      <a href="reservation.html" class="btn-orange">문의하기 →</a>
      <a href="tel:${d.phone.replace(/-/g,'')}" class="btn-outline">📞 ${d.phone}</a>
    </div>
  </div>
</div>
${generalFooter(d)}
<script>${generalJs(d)}<\/script>

</body>
</html>`;
}

function buildGeneralReservationHtml(d) {
  return buildReservationPageHtml(d, generalCss(d), generalHeader(d,'reservation'), generalFooter(d), generalJs(d));
}
