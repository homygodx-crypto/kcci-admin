/* ============================================================
   Academy Template — Dynamic Energy
   컨셉: 딥블루 + 옐로우, 활기차고 젊은, 대담한 타이포
   폰트: Montserrat + Noto Sans KR
   ============================================================ */

function academyCss(d) {
  return `
${buildFontSizeCss(d)}
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
*{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;}
body{font-family:'Noto Sans KR',sans-serif;background:#f4f6fa;color:#0f1b2d;overflow-x:hidden;}
:root{--bg:#f4f6fa;--white:#ffffff;--navy:#0f1b2d;--blue:#1a3a6b;--sky:#2563eb;--yellow:#fbbf24;--yellow2:#f59e0b;--bd:rgba(15,27,45,0.1);}
header{position:fixed;top:0;left:0;right:0;z-index:100;height:68px;display:flex;align-items:center;justify-content:space-between;padding:0 52px;background:rgba(255,255,255,0.97);backdrop-filter:blur(10px);border-bottom:2px solid var(--yellow);}
.logo-text{font-family:'Montserrat',sans-serif;font-size:18px;color:var(--navy);font-weight:800;letter-spacing:.02em;text-decoration:none;display:block;}
.logo-sub{font-size:10px;color:var(--sky);letter-spacing:.16em;text-transform:uppercase;font-weight:600;margin-top:1px;display:block;}
nav{display:flex;gap:32px;}
nav a{font-family:'Montserrat',sans-serif;font-size:var(--fs-nav);color:rgba(15,27,45,0.55);text-decoration:none;letter-spacing:.08em;text-transform:uppercase;font-weight:600;transition:color .2s;}
nav a:hover,nav a.active{color:var(--sky);}
.header-cta{font-family:'Montserrat',sans-serif;background:var(--yellow);color:var(--navy);padding:9px 20px;font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;transition:all .2s;}
.header-cta:hover{background:var(--yellow2);}
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:4px;}
.hamburger span{display:block;width:22px;height:3px;background:var(--navy);transition:all .3s;}
.hamburger.open span:nth-child(1){transform:translateY(8px) rotate(45deg);}
.hamburger.open span:nth-child(2){opacity:0;}
.hamburger.open span:nth-child(3){transform:translateY(-8px) rotate(-45deg);}
.mobile-nav{display:none;position:fixed;top:68px;left:0;right:0;background:#fff;z-index:99;border-bottom:3px solid var(--yellow);flex-direction:column;}
.mobile-nav.open{display:flex;}
.mobile-nav a{font-size:15px;color:var(--navy);text-decoration:none;padding:16px 28px;border-bottom:1px solid var(--bd);font-weight:600;}
.mobile-nav a:hover,.mobile-nav a.active{background:var(--bg);color:var(--sky);}
.quick{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:99;display:flex;flex-direction:column;gap:1px;}
.quick a{background:var(--blue);color:rgba(255,255,255,.8);font-size:10px;writing-mode:vertical-rl;padding:16px 10px;text-decoration:none;letter-spacing:.14em;transition:background .2s;}
.quick a:hover{background:var(--yellow);color:var(--navy);}
.floating{position:fixed;bottom:24px;right:20px;display:flex;flex-direction:column;gap:8px;z-index:98;opacity:0;transition:opacity .3s;pointer-events:none;}
.floating.show{opacity:1;pointer-events:all;}
.floating a{padding:12px 20px;font-size:13px;font-family:inherit;text-decoration:none;display:flex;align-items:center;gap:6px;}
.f-call{background:#03C75A;color:#fff;}.f-book{background:var(--yellow);color:var(--navy);font-weight:700;}
.btn-yellow{display:inline-flex;align-items:center;gap:8px;background:var(--yellow);color:var(--navy);padding:13px 28px;font-family:'Montserrat',sans-serif;font-size:13px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;transition:all .2s;border:none;cursor:pointer;}
.btn-yellow:hover{background:var(--yellow2);}
.btn-outline{display:inline-flex;align-items:center;gap:8px;border:2px solid var(--navy);color:var(--navy);padding:11px 28px;font-family:'Montserrat',sans-serif;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;transition:all .2s;}
.btn-outline:hover{background:var(--navy);color:#fff;}
.eyebrow{font-family:'Montserrat',sans-serif;font-size:10px;letter-spacing:.3em;color:var(--sky);text-transform:uppercase;font-weight:700;margin-bottom:12px;}
.sec-title{font-family:'Montserrat',sans-serif;font-size:var(--fs-section);line-height:1.05;color:var(--navy);margin-bottom:16px;font-weight:800;}
.sec-title em{font-style:normal;color:var(--sky);}
/* 히어로 — 다이나믹 */
.hero{min-height:100vh;padding-top:68px;background:var(--navy);position:relative;overflow:hidden;display:flex;align-items:center;}
.hero-bg{position:absolute;inset:0;background-size:cover;background-position:center;opacity:.2;}
.hero-deco{position:absolute;right:-100px;top:-100px;width:600px;height:600px;border-radius:50%;background:rgba(251,191,36,0.08);z-index:1;}
.hero-deco2{position:absolute;left:-80px;bottom:-80px;width:400px;height:400px;border-radius:50%;background:rgba(37,99,235,0.1);z-index:1;}
.hero-content{position:relative;z-index:2;padding:0 60px;max-width:760px;}
.hero-tag{display:inline-block;background:var(--yellow);color:var(--navy);font-family:'Montserrat',sans-serif;font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;padding:6px 14px;margin-bottom:28px;}
.hero-h1{font-family:'Montserrat',sans-serif;font-size:var(--fs-hero);line-height:.98;font-weight:900;color:#fff;margin-bottom:24px;letter-spacing:-.01em;}
.hero-h1 em{font-style:normal;color:var(--yellow);}
.hero-sub{font-size:var(--fs-body);color:rgba(255,255,255,0.6);line-height:1.85;margin-bottom:44px;max-width:460px;}
.hero-stats{display:flex;gap:40px;margin-bottom:44px;flex-wrap:wrap;}
.hero-stat-num{font-family:'Montserrat',sans-serif;font-size:36px;font-weight:900;color:var(--yellow);line-height:1;}
.hero-stat-label{font-size:12px;color:rgba(255,255,255,0.5);margin-top:4px;}
/* 수업 */
.course-section{padding:96px 52px;background:var(--white);}
.course-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:52px;}
.course-card{background:var(--bg);overflow:hidden;transition:transform .3s,box-shadow .3s;position:relative;}
.course-card::before{content:'';position:absolute;top:0;left:0;width:4px;height:0;background:var(--yellow);transition:height .4s;}
.course-card:hover{transform:translateY(-4px);box-shadow:0 8px 32px rgba(15,27,45,0.1);}
.course-card:hover::before{height:100%;}
.course-img{width:100%;aspect-ratio:16/9;object-fit:cover;display:block;}
.course-body{padding:24px 24px 28px;}
.course-tag{font-family:'Montserrat',sans-serif;font-size:9px;letter-spacing:.28em;color:var(--sky);text-transform:uppercase;font-weight:700;margin-bottom:8px;display:block;}
.course-name{font-family:'Montserrat',sans-serif;font-size:var(--fs-card);color:var(--navy);margin-bottom:8px;font-weight:700;line-height:1.2;}
.course-desc{font-size:var(--fs-body);color:rgba(15,27,45,0.58);line-height:1.75;margin-bottom:10px;}
.course-detail{font-size:12px;color:rgba(15,27,45,0.42);line-height:1.75;border-top:2px solid rgba(15,27,45,0.06);padding-top:12px;}
/* 강사 */
.teacher-section{padding:96px 52px;background:var(--navy);}
.teacher-grid{display:grid;grid-template-columns:1fr 1fr;gap:2px;background:rgba(255,255,255,0.05);margin-top:52px;}
.teacher-card{background:var(--navy);padding:44px 36px;display:flex;gap:28px;align-items:flex-start;}
.teacher-img{width:100px;height:100px;border-radius:50%;object-fit:cover;flex-shrink:0;border:3px solid var(--yellow);}
.teacher-role{font-family:'Montserrat',sans-serif;font-size:9px;letter-spacing:.28em;color:var(--yellow);text-transform:uppercase;font-weight:700;margin-bottom:6px;display:block;}
.teacher-name{font-family:'Montserrat',sans-serif;font-size:var(--fs-card);color:#fff;margin-bottom:12px;font-weight:700;}
.teacher-certs{list-style:none;display:flex;flex-direction:column;gap:6px;}
.teacher-certs li{font-size:12px;color:rgba(255,255,255,0.45);padding-left:16px;position:relative;line-height:1.6;}
.teacher-certs li::before{content:'▸';position:absolute;left:0;color:var(--yellow);font-size:10px;}
/* 후기 */
.reviews-section{padding:96px 52px;background:var(--bg);}
.reviews-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:52px;}
.review-card{background:var(--white);padding:28px;border-top:4px solid var(--yellow);}
.review-stars{font-size:14px;margin-bottom:10px;color:var(--yellow);letter-spacing:2px;}
.review-text{font-size:var(--fs-review);color:rgba(15,27,45,0.72);line-height:1.85;margin-bottom:14px;}
.review-who{font-family:'Montserrat',sans-serif;font-size:10px;color:var(--sky);font-weight:700;letter-spacing:.1em;text-transform:uppercase;}
/* 갤러리 */
.gallery-section{padding:96px 52px;background:var(--white);}
.gallery-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:48px;}
.g-item{overflow:hidden;cursor:pointer;background:var(--bg);}
.g-item:nth-child(1){grid-column:span 2;grid-row:span 2;}
.g-item img{width:100%;height:100%;min-height:160px;object-fit:cover;transition:transform .4s;display:block;}
.g-item:hover img{transform:scale(1.06);}
#lb{position:fixed;inset:0;background:rgba(0,0,0,0.97);z-index:1000;display:none;align-items:center;justify-content:center;}
#lb.open{display:flex;}
#lbImg{max-width:88vw;max-height:88vh;object-fit:contain;}
.lb-close{position:absolute;top:24px;right:32px;background:none;border:none;color:rgba(255,255,255,.5);font-size:28px;cursor:pointer;}
.lb-prev,.lb-next{position:absolute;top:50%;transform:translateY(-50%);background:none;border:none;color:rgba(255,255,255,.4);font-size:36px;cursor:pointer;padding:16px;}
.lb-prev{left:16px;}.lb-next{right:16px;}
footer{background:var(--navy);padding:56px 52px 36px;}
.foot-top{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:48px;margin-bottom:44px;}
.foot-brand{font-family:'Montserrat',sans-serif;font-size:18px;color:var(--yellow);font-weight:800;letter-spacing:.04em;margin-bottom:10px;}
.foot-desc{font-size:var(--fs-footer);color:rgba(255,255,255,0.3);line-height:1.9;}
.foot-head{font-family:'Montserrat',sans-serif;font-size:9px;letter-spacing:.28em;color:var(--yellow);text-transform:uppercase;font-weight:700;margin-bottom:14px;}
.foot-links{display:flex;flex-direction:column;gap:9px;}
.foot-links a{font-size:var(--fs-footer);color:rgba(255,255,255,0.35);text-decoration:none;transition:color .2s;}
.foot-links a:hover{color:var(--yellow);}
.foot-bottom{border-top:1px solid rgba(255,255,255,0.06);padding-top:24px;font-size:11px;color:rgba(255,255,255,0.18);display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;}
@media(max-width:1000px){.teacher-grid{grid-template-columns:1fr;}.foot-top{grid-template-columns:1fr 1fr;}}
@media(max-width:768px){
  header{padding:0 20px;}nav,.header-cta,.quick{display:none;}.hamburger{display:flex;}
  .hero-content{padding:0 20px;}.hero-h1{font-size:clamp(36px,9vw,56px);}
  .hero-stats{gap:24px;}
  .course-section,.teacher-section,.reviews-section,.gallery-section{padding:60px 20px;}
  .course-grid,.reviews-grid{grid-template-columns:1fr;}
  .teacher-card{flex-direction:column;gap:16px;}
  .gallery-grid{grid-template-columns:1fr 1fr;grid-auto-rows:160px;}
  .g-item{grid-column:span 1!important;grid-row:span 1!important;}
  footer{padding:48px 20px 28px;}.foot-top{grid-template-columns:1fr;}.foot-bottom{flex-direction:column;}
}
`;
}

function academyHeader(d, activePage) {
  const pages = ['index','course','gallery','location'];
  const labels = ['홈','수업과정','갤러리','오시는 길'];
  const nav = pages.map((p,i)=>`<a href="${p}.html"${activePage===p?' class="active"':''}>${labels[i]}</a>`).join('');
  const mobileNav = pages.map((p,i)=>`<a href="${p}.html"${activePage===p?' class="active"':''}>${labels[i]}</a>`).join('');
  return `<div class="quick">
  <a href="tel:${d.phone.replace(/-/g,'')}">전화</a>
  <a href="reservation.html">상담</a>
  <a href="location.html">위치</a>
</div>
<div class="floating" id="floating">
  <a href="tel:${d.phone.replace(/-/g,'')}" class="f-call">📞 전화</a>
  <a href="reservation.html" class="f-book">상담 예약</a>
</div>
<header>
  <a href="index.html" style="text-decoration:none">
    <span class="logo-text">${d.name}</span>
    <span class="logo-sub">${d.nameEn}</span>
  </a>
  <nav>${nav}</nav>
  <a href="reservation.html" class="header-cta">무료 상담</a>
  <button class="hamburger" id="hamBtn" onclick="toggleNav()"><span></span><span></span><span></span></button>
</header>
<div class="mobile-nav" id="mobileNav">
  ${mobileNav}
  <a href="reservation.html" style="background:var(--yellow);color:var(--navy);font-weight:800;">무료 상담 신청</a>
</div>`;
}

function academyFooter(d) {
  return `<footer>
  <div class="foot-top">
    <div>
      <div class="foot-brand">${d.name}</div>
      <div class="foot-desc">${d.slogan}<br><br>${d.address}<br>${d.phone}${d.openHours?'<br>'+d.openHours:''}</div>
    </div>
    <div>
      <div class="foot-head">과정</div>
      <div class="foot-links">
        <a href="course.html">수업 과정</a>
        <a href="gallery.html">갤러리</a>
        <a href="reservation.html">상담 예약</a>
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

function academyJs(d) {
  return `function toggleNav(){document.getElementById('hamBtn').classList.toggle('open');document.getElementById('mobileNav').classList.toggle('open');}
window.addEventListener('scroll',function(){var f=document.getElementById('floating');if(f)f.classList.toggle('show',window.scrollY>300);});`;
}

function buildAcademyIndexHtml(d, titleHtmlFn) {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${d.name}</title>
<style>${academyCss(d)}</style>
</head>
<body>
${academyHeader(d,'index')}
<section class="hero">
  <div class="hero-bg" style="background-image:url('${d.h1Img}')"></div>
  <div class="hero-deco"></div>
  <div class="hero-deco2"></div>
  <div class="hero-content">
    <div class="hero-tag">${d.nameEn}</div>
    <h1 class="hero-h1">${titleHtmlFn(d.h1Title)}</h1>
    <p class="hero-sub">${d.slogan}</p>
    <div class="hero-stats">
      <div><div class="hero-stat-num">100%</div><div class="hero-stat-label">전문 강사진</div></div>
      <div><div class="hero-stat-num">1:1</div><div class="hero-stat-label">맞춤 케어</div></div>
      <div><div class="hero-stat-num">체계적</div><div class="hero-stat-label">커리큘럼</div></div>
    </div>
    <div style="display:flex;gap:12px;flex-wrap:wrap">
      <a href="course.html" class="btn-yellow">수업 보기 →</a>
      <a href="reservation.html" class="btn-outline">무료 상담</a>
    </div>
  </div>
</section>
<section class="course-section">
  <div class="eyebrow">Course</div>
  <h2 class="sec-title">체계적인<br><em>수업 과정</em></h2>
  <div class="course-grid">
    ${['p1','p2','p3'].map(p=>`<div class="course-card">
      <img class="course-img" src="${d[p+'Img']}" alt="${d[p+'Name']}" onerror="this.style.display='none'">
      <div class="course-body">
        <span class="course-tag">${d[p+'Tag']}</span>
        <div class="course-name">${d[p+'Name']}</div>
        <div class="course-desc">${d[p+'Desc']}</div>
        <div class="course-detail">${d[p+'Detail']}</div>
      </div>
    </div>`).join('')}
  </div>
</section>
<section class="teacher-section">
  <div class="eyebrow" style="color:rgba(251,191,36,0.8)">Instructor</div>
  <h2 class="sec-title" style="color:#fff">전문<br><em style="color:var(--yellow)">강사진</em></h2>
  <div class="teacher-grid">
    ${['i1','i2'].map(i=>`<div class="teacher-card">
      <img class="teacher-img" src="${d[i+'Img']}" alt="${d[i+'Name']}" onerror="this.src='https://placehold.co/100x100/1a3a6b/fbbf24?text=T'">
      <div>
        <span class="teacher-role">${d[i+'Role']}</span>
        <div class="teacher-name">${d[i+'Name']}</div>
        <ul class="teacher-certs">${(d[i+'Cert']||'').split('\n').filter(l=>l.trim()).map(l=>`<li>${l}</li>`).join('')}</ul>
      </div>
    </div>`).join('')}
  </div>
</section>
<section class="reviews-section">
  <div class="eyebrow">Review</div>
  <h2 class="sec-title">수강생<br><em>후기</em></h2>
  <div class="reviews-grid">
    ${[1,2,3].map(n=>`<div class="review-card">
      <div class="review-stars">★★★★★</div>
      <p class="review-text">"${d['review'+n]}"</p>
      <div class="review-who">${d['review'+n+'who']||'수강생'}</div>
    </div>`).join('')}
  </div>
</section>
${d.placeId ? `
<section style="padding:80px 52px;background:var(--white);">
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
${academyFooter(d)}
<script>${academyJs(d)}<\/script>
</body>
</html>`;
}

function buildAcademyCourseHtml(d) {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>수업 과정 | ${d.name}</title>
<style>${academyCss(d)}
.course-page{padding-top:68px;}
.course-top{background:var(--navy);padding:72px 52px;}
.course-list{padding:60px 52px;background:var(--bg);display:flex;flex-direction:column;gap:20px;}
.course-item{background:var(--white);display:grid;grid-template-columns:340px 1fr;overflow:hidden;}
.course-item:nth-child(even){grid-template-columns:1fr 340px;}
.course-item:nth-child(even) .ci-img{order:2;}
.course-item:nth-child(even) .ci-body{order:1;}
.ci-img img{width:100%;height:100%;min-height:280px;object-fit:cover;display:block;}
.ci-body{padding:48px 44px;border-left:4px solid var(--yellow);}
.course-item:nth-child(even) .ci-body{border-left:none;border-right:4px solid var(--yellow);}
@media(max-width:900px){.course-top,.course-list{padding-left:20px;padding-right:20px;}.course-item,.course-item:nth-child(even){grid-template-columns:1fr;}.course-item:nth-child(even) .ci-img,.course-item:nth-child(even) .ci-body{order:unset;}.ci-img img{max-height:220px;}.ci-body,.course-item:nth-child(even) .ci-body{padding:28px 20px;border-left:4px solid var(--yellow);border-right:none;}}
</style>
</head>
<body>
${academyHeader(d,'course')}
<div class="course-page">
  <div class="course-top">
    <div class="eyebrow" style="color:rgba(251,191,36,.8)">Course</div>
    <h1 class="sec-title" style="color:#fff">체계적인<br><em style="color:var(--yellow)">수업 과정</em></h1>
  </div>
  <div class="course-list">
    ${['p1','p2','p3'].map(p=>`<div class="course-item">
      <div class="ci-img"><img src="${d[p+'Img']}" alt="${d[p+'Name']}" onerror="this.style.background='var(--bg)'"></div>
      <div class="ci-body">
        <span class="course-tag" style="margin-bottom:16px">${d[p+'Tag']}</span>
        <div class="sec-title" style="font-size:clamp(22px,2.5vw,34px)">${d[p+'Name']}</div>
        <p style="font-size:var(--fs-body);color:rgba(15,27,45,0.6);line-height:1.9;margin-bottom:14px">${d[p+'Desc']}</p>
        <p style="font-size:13px;color:rgba(15,27,45,0.45);line-height:1.85;border-top:2px solid rgba(15,27,45,0.06);padding-top:16px">${d[p+'Detail']}</p>
        <div style="margin-top:28px"><a href="reservation.html" class="btn-yellow">상담 신청 →</a></div>
      </div>
    </div>`).join('')}
  </div>
</div>
${academyFooter(d)}
<script>${academyJs(d)}<\/script>
</body>
</html>`;
}

function buildAcademyGalleryHtml(d) {
  const uploadedImgs = (d.galleryUrls&&d.galleryUrls.length>0)?d.galleryUrls:[];
  const imgs = uploadedImgs.length>0
    ? uploadedImgs.concat([d.p1Img,d.p2Img,d.p3Img,d.i1Img,d.h1Img,d.h2Img]).slice(0,12)
    : [d.p1Img,d.p2Img,d.p3Img,d.i1Img,d.h1Img,d.h2Img];
  const lbSrcs = JSON.stringify(imgs);
  const gridItems = imgs.map((src,i)=>`<div class="g-item" onclick="openLb(${i})"><img src="${src}" alt="" loading="lazy" onerror="this.parentElement.style.background='var(--bg)'"></div>`).join('');
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>갤러리 | ${d.name}</title>
<style>${academyCss(d)}</style>
</head>
<body>
${academyHeader(d,'gallery')}
<div style="padding-top:68px">
  <div style="background:var(--navy);padding:64px 52px 48px">
    <div class="eyebrow" style="color:rgba(251,191,36,.8)">Gallery</div>
    <h1 class="sec-title" style="color:#fff">수업 현장<br><em style="color:var(--yellow)">갤러리</em></h1>
  </div>
  <div style="padding:32px 52px 80px;background:var(--bg)">
    <div class="gallery-grid">${gridItems}</div>
  </div>
</div>
${academyFooter(d)}
<div id="lb" onclick="if(event.target===this)closeLb()">
  <button class="lb-close" onclick="closeLb()">✕</button>
  <button class="lb-prev" onclick="lbMove(-1)">&#8592;</button>
  <img id="lbImg" src="" alt="">
  <button class="lb-next" onclick="lbMove(1)">&#8594;</button>
</div>
<script>
${academyJs(d)}
var lbSrcs=${lbSrcs},lbIdx=0;
function openLb(i){lbIdx=i;document.getElementById('lbImg').src=lbSrcs[i];document.getElementById('lb').classList.add('open');}
function closeLb(){document.getElementById('lb').classList.remove('open');}
function lbMove(d){lbIdx=(lbIdx+d+lbSrcs.length)%lbSrcs.length;document.getElementById('lbImg').src=lbSrcs[lbIdx];}
document.addEventListener('keydown',function(e){if(document.getElementById('lb').classList.contains('open')){if(e.key==='ArrowLeft')lbMove(-1);if(e.key==='ArrowRight')lbMove(1);if(e.key==='Escape')closeLb();}});
<\/script>
</body>
</html>`;
}

function buildAcademyLocationHtml(d) {
  const mapSrc = d.placeId?`https://map.naver.com/p/entry/place/${d.placeId}`:`https://map.naver.com/v5/search/${encodeURIComponent(d.address)}`;
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>오시는 길 | ${d.name}</title>
<style>${academyCss(d)}
.loc-page{padding-top:68px;}
.loc-top{background:var(--navy);padding:64px 52px;}
.loc-content{padding:60px 52px 80px;background:var(--bg);}
.loc-map{border:3px solid var(--yellow);margin-bottom:40px;}
.loc-map iframe{display:block;width:100%;height:460px;}
.loc-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
.loc-card{background:var(--white);padding:24px 28px;border-top:4px solid var(--yellow);}
.loc-icon{font-size:22px;margin-bottom:10px;}
.loc-label{font-family:'Montserrat',sans-serif;font-size:9px;letter-spacing:.28em;color:var(--sky);text-transform:uppercase;font-weight:700;margin-bottom:8px;}
.loc-val{font-size:var(--fs-body);color:rgba(15,27,45,0.72);line-height:1.85;}
@media(max-width:768px){.loc-top,.loc-content{padding-left:20px;padding-right:20px;}.loc-map iframe{height:320px;}.loc-cards{grid-template-columns:1fr;}}
</style>
</head>
<body>
${academyHeader(d,'location')}
<div class="loc-page">
  <div class="loc-top">
    <div class="eyebrow" style="color:rgba(251,191,36,.8)">Location</div>
    <h1 class="sec-title" style="color:#fff">찾아오시는<br><em style="color:var(--yellow)">방법</em></h1>
  </div>
  <div class="loc-content">
    <div class="loc-map"><iframe src="${mapSrc}" frameborder="0" allowfullscreen></iframe></div>
    <div class="loc-cards">
      <div class="loc-card"><div class="loc-icon">📍</div><div class="loc-label">Address</div><div class="loc-val">${d.address}</div></div>
      <div class="loc-card"><div class="loc-icon">🕐</div><div class="loc-label">Hours</div><div class="loc-val">${d.openHours||'평일 09:00 – 22:00'}</div></div>
      <div class="loc-card"><div class="loc-icon">🚗</div><div class="loc-label">Parking</div><div class="loc-val">${d.parking||'주차 가능'}</div></div>
    </div>
    <div style="margin-top:40px;display:flex;gap:12px">
      <a href="reservation.html" class="btn-yellow">무료 상담 신청 →</a>
      <a href="tel:${d.phone.replace(/-/g,'')}" class="btn-outline">📞 ${d.phone}</a>
    </div>
  </div>
</div>
${academyFooter(d)}
<script>${academyJs(d)}<\/script>
</body>
</html>`;
}

function buildAcademyReservationHtml(d) {
  return buildReservationPageHtml(d, academyCss(d), academyHeader(d,'reservation'), academyFooter(d), academyJs(d));
}
