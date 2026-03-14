const ADMIN_SUPABASE_URL = 'https://vugtupipbpfundipgcqc.supabase.co';
const ADMIN_SUPABASE_KEY = 'sb_publishable_tJhW52aAlbyM_0A5_J-yqA_OTIIhV-S';
const ADMIN_BUCKET = 'site-images';

function buildAdminHtml_common(d) {
  const siteName = d.name || '업체';
  const adminId  = d.adminId || 'admin';
  const adminPw  = d.adminPw  || '1234';
  const siteId   = (d.url || d.name || 'site').replace(/[^a-z0-9]/gi,'_').toLowerCase();
  const industry = d.industry || 'general';

  const PAGE_FILES = {
    pilates: ['index.html','program.html','gallery.html','location.html','reservation.html'],
    cafe:    ['index.html','menu.html','gallery.html','location.html','reservation.html'],
    beauty:  ['index.html','service.html','gallery.html','location.html','reservation.html'],
    medical: ['index.html','treatment.html','gallery.html','location.html','reservation.html'],
    academy: ['index.html','course.html','gallery.html','location.html','reservation.html'],
    general: ['index.html','product.html','gallery.html','location.html','reservation.html'],
  };
  const pageFiles = PAGE_FILES[industry] || PAGE_FILES.general;

  const siteDataJson = JSON.stringify({
    name: siteName, phone: d.phone||'', address: d.address||'',
    openHours: d.openHours||'', parking: d.parking||'', slogan: d.slogan||'',
    industry, nameEn: d.nameEn||'', placeId: d.placeId||'',
    blog: d.blog||'', insta: d.insta||'', adminId, adminPw,
    masterDomain: 'https://kcci-admin.pages.dev',
    pageFiles,
    _origName: siteName, _origPhone: d.phone||'', _origAddress: d.address||'',
    _origSlogan: d.slogan||'', _origHours: d.openHours||'', _origParking: d.parking||''
  });

  // JS 코드 - 플레이스홀더 치환 방식 사용 (따옴표 중첩 완전 회피)
  const jsCode = buildAdminJs(adminId, adminPw, siteId);

  return [
    '<!DOCTYPE html>',
    '<html lang="ko">',
    '<head>',
    '<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">',
    '<title>' + '\uc0ac\uc7a5\ub2d8 \ud398\uc774\uc9c0 | ' + siteName + '</title>',
    '<style>' + buildAdminCss() + '</style>',
    '</head>',
    '<body>',
    buildAdminLoginHtml(siteName),
    buildAdminMainHtml(siteName, d),
    '<div class="toast" id="toast"></div>',
    '<script id="siteData" type="application/json">' + siteDataJson + '<' + '/script>',
    '<script>' + jsCode + '<' + '/script>',
    '</body>',
    '</html>'
  ].join('\n');
}

function buildAdminCss() {
  return '*{margin:0;padding:0;box-sizing:border-box;}' +
'body{font-family:"Apple SD Gothic Neo","\ub9d1\uc740 \uace0\ub515",sans-serif;background:#F2F4F7;color:#222;}' +
'.lw{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#1B3A5C,#0d2237);}' +
'.lb{background:#fff;width:400px;padding:52px 44px;border-radius:4px;box-shadow:0 24px 80px rgba(0,0,0,.3);}' +
'.lb-logo{font-size:11px;letter-spacing:.32em;color:#C9A040;margin-bottom:8px;text-transform:uppercase;}' +
'.lb-title{font-size:24px;font-weight:700;color:#1B3A5C;margin-bottom:36px;}' +
'.lf{margin-bottom:20px;}' +
'.lf label{display:block;font-size:12px;color:#aaa;margin-bottom:7px;letter-spacing:.12em;text-transform:uppercase;}' +
'.lf input{width:100%;padding:13px 16px;border:1.5px solid #eee;font-size:15px;font-family:inherit;outline:none;border-radius:3px;transition:border-color .2s;}' +
'.lf input:focus{border-color:#C9A040;}' +
'.l-err{font-size:13px;color:#E74C3C;margin-bottom:14px;display:none;}' +
'.l-btn{width:100%;background:#1B3A5C;color:#fff;border:none;padding:15px;font-size:15px;cursor:pointer;font-family:inherit;font-weight:600;border-radius:3px;}' +
'.l-btn:hover{background:#0d2237;}' +
'.aw{display:none;}' +
'.sb{position:fixed;left:0;top:0;bottom:0;width:240px;background:#1B3A5C;display:flex;flex-direction:column;z-index:100;}' +
'.sb-brand{padding:28px 24px 22px;border-bottom:1px solid rgba(255,255,255,.07);}' +
'.sb-name{font-size:15px;font-weight:700;color:#fff;line-height:1.4;}' +
'.sb-sub{font-size:11px;color:rgba(255,255,255,.35);margin-top:3px;}' +
'.sb-nav{flex:1;padding:20px 0;overflow-y:auto;}' +
'.sb-sec{font-size:10px;letter-spacing:.22em;color:rgba(255,255,255,.25);padding:16px 24px 8px;text-transform:uppercase;}' +
'.sb-item{display:flex;align-items:center;gap:12px;padding:13px 24px;font-size:14px;color:rgba(255,255,255,.55);cursor:pointer;transition:all .2s;border-left:3px solid transparent;}' +
'.sb-item:hover{background:rgba(255,255,255,.05);color:rgba(255,255,255,.85);}' +
'.sb-item.active{background:rgba(201,160,64,.12);color:#C9A040;border-left-color:#C9A040;}' +
'.sb-item .ic{font-size:17px;width:22px;text-align:center;}' +
'.sb-foot{padding:20px 24px;border-top:1px solid rgba(255,255,255,.07);}' +
'.sb-link{display:block;text-align:center;color:rgba(255,255,255,.4);font-size:12px;text-decoration:none;padding:8px;border:1px solid rgba(255,255,255,.1);border-radius:3px;margin-bottom:10px;}' +
'.sb-link:hover{color:#fff;}' +
'.sb-logout{width:100%;background:transparent;border:1px solid rgba(255,255,255,.12);color:rgba(255,255,255,.4);padding:10px;font-size:13px;cursor:pointer;font-family:inherit;border-radius:3px;}' +
'.sb-logout:hover{color:rgba(255,255,255,.7);}' +
'.main{margin-left:240px;min-height:100vh;}' +
'.topbar{background:#fff;padding:0 40px;height:64px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #eee;position:sticky;top:0;z-index:50;}' +
'.topbar-title{font-size:17px;font-weight:700;color:#1B3A5C;}' +
'.topbar-right{display:flex;align-items:center;gap:12px;}' +
'.wait-badge{background:#E74C3C;color:#fff;font-size:11px;padding:3px 9px;border-radius:20px;font-weight:700;display:none;}' +
'.content{padding:32px 40px;}' +
'.panel{display:none;}' +
'.panel.active{display:block;}' +
'.card{background:#fff;border-radius:6px;box-shadow:0 1px 6px rgba(0,0,0,.06);margin-bottom:24px;overflow:hidden;}' +
'.ch{padding:18px 24px;border-bottom:1px solid #f5f5f5;display:flex;align-items:center;justify-content:space-between;}' +
'.ch h3{font-size:15px;font-weight:700;color:#1B3A5C;}' +
'.cb{padding:24px;}' +
'.sr{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px;}' +
'.sb2{background:#fff;border-radius:6px;box-shadow:0 1px 6px rgba(0,0,0,.06);padding:22px 24px;border-top:3px solid #C9A040;}' +
'.sb2.cb2{border-top-color:#3498DB;}.sb2.cg{border-top-color:#03C75A;}.sb2.cr{border-top-color:#E74C3C;}' +
'.sn{font-size:36px;font-weight:800;color:#1B3A5C;line-height:1;}' +
'.sl{font-size:12px;color:#aaa;margin-top:6px;}' +
'.bar-chart{display:flex;align-items:flex-end;gap:2px;height:200px;border-bottom:2px solid #f0f0f0;}' +
'.bc{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;}' +
'.bi{width:100%;background:#C9A040;border-radius:3px 3px 0 0;min-height:2px;transition:height .5s;position:relative;cursor:pointer;}' +
'.bi:hover{background:#B08A30;}' +
'.bi.z{background:#f0f0f0;}' +
'.bi .tip{position:absolute;bottom:calc(100% + 6px);left:50%;transform:translateX(-50%);background:#222;color:#fff;font-size:11px;padding:4px 8px;border-radius:4px;white-space:nowrap;opacity:0;transition:opacity .15s;pointer-events:none;z-index:10;}' +
'.bi:hover .tip{opacity:1;}' +
'.bl{font-size:10px;color:#bbb;text-align:center;}' +
'.ce{display:flex;flex-direction:column;align-items:center;justify-content:center;height:200px;color:#ccc;gap:8px;font-size:14px;}' +
'.pi{margin-bottom:14px;}' +
'.pl{display:flex;justify-content:space-between;font-size:13px;margin-bottom:5px;}' +
'.pw{background:#f2f2f2;height:8px;border-radius:4px;overflow:hidden;}' +
'.pb{height:8px;border-radius:4px;transition:width .6s;}' +
'.tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:20px;}' +
'.tab{padding:7px 16px;font-size:13px;cursor:pointer;font-family:inherit;border:1.5px solid #e0e0e0;background:#fff;color:#888;border-radius:20px;transition:all .15s;}' +
'.tab:hover{border-color:#bbb;color:#555;}' +
'.tab.active{background:#1B3A5C;border-color:#1B3A5C;color:#fff;}' +
'.ri{border:1px solid #f0f0f0;border-radius:6px;padding:18px 20px;margin-bottom:10px;background:#fff;}' +
'.ri:hover{box-shadow:0 4px 16px rgba(0,0,0,.07);}' +
'.rn{font-size:16px;font-weight:700;color:#222;margin-bottom:6px;}' +
'.rm{display:flex;gap:14px;flex-wrap:wrap;font-size:13px;color:#888;}' +
'.rm a{color:#1B3A5C;text-decoration:none;font-weight:600;}' +
'.rmemo{font-size:13px;color:#666;background:#fafafa;padding:8px 12px;border-radius:4px;margin-top:10px;border-left:3px solid #C9A040;}' +
'.ra{display:flex;gap:6px;margin-top:12px;flex-wrap:wrap;}' +
'.rb{padding:6px 14px;font-size:12px;cursor:pointer;font-family:inherit;border-radius:4px;border:1.5px solid;font-weight:600;transition:all .15s;}' +
'.bc2{background:#E8F8EF;border-color:#A8E6C4;color:#1A8A4A;}' +
'.bd{background:#F5F5F5;border-color:#DDD;color:#666;}' +
'.bca{background:#FEF0EF;border-color:#FBC4C0;color:#C0392B;}' +
'.bdl{background:#fff;border-color:#eee;color:#ccc;}' +
'.rs{display:inline-flex;align-items:center;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:700;border:1.5px solid;}' +
'.rw{background:#FFF7E6;border-color:#F5D380;color:#B7791F;}' +
'.rc{background:#E8F8EF;border-color:#A8E6C4;color:#1A8A4A;}' +
'.rdo{background:#F5F5F5;border-color:#DDD;color:#888;}' +
'.rx{background:#FEF0EF;border-color:#FBC4C0;color:#C0392B;}' +
'.gg{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;}' +
'.gi{position:relative;border-radius:6px;overflow:hidden;background:#f5f5f5;}' +
'.gi::before{content:"";display:block;padding-top:75%;}' +
'.gi img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}' +
'.gd{position:absolute;top:7px;right:7px;background:rgba(231,76,60,.9);color:#fff;border:none;width:28px;height:28px;cursor:pointer;font-size:13px;border-radius:4px;opacity:0;transition:opacity .2s;}' +
'.gi:hover .gd{opacity:1;}' +
'.ga{border:2px dashed #ddd;cursor:pointer;border-radius:6px;overflow:hidden;background:#fafafa;position:relative;}' +
'.ga::before{content:"";display:block;padding-top:75%;}' +
'.ga:hover{border-color:#C9A040;background:#FFFBF0;}' +
'.ga-in{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;color:#bbb;font-size:13px;pointer-events:none;}' +
'.ga-plus{font-size:28px;color:#ddd;line-height:1;}' +
'.ga input[type=file]{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%;}' +
'.up{margin-top:14px;display:none;}' +
'.up-text{font-size:13px;color:#888;margin-bottom:6px;}' +
'.up-bw{background:#f0f0f0;height:8px;border-radius:4px;overflow:hidden;}' +
'.up-bar{height:8px;background:#C9A040;border-radius:4px;transition:width .3s;width:0%;}' +
'.fg{margin-bottom:22px;}' +
'.fg label{display:block;font-size:12px;color:#999;margin-bottom:8px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;}' +
'.fg input,.fg textarea{width:100%;padding:12px 15px;border:1.5px solid #eee;font-size:14px;font-family:inherit;outline:none;border-radius:4px;transition:border-color .2s;}' +
'.fg input:focus,.fg textarea:focus{border-color:#C9A040;}' +
'.fg textarea{resize:vertical;min-height:80px;line-height:1.7;}' +
'.fg-hint{font-size:12px;color:#bbb;margin-top:5px;}' +
'.fg-row{display:grid;grid-template-columns:1fr 1fr;gap:18px;}' +
'.btn-row{display:flex;gap:12px;flex-wrap:wrap;margin-top:8px;}' +
'.btn{padding:12px 26px;font-size:14px;cursor:pointer;font-family:inherit;border-radius:4px;border:none;font-weight:600;transition:all .2s;display:inline-flex;align-items:center;gap:7px;}' +
'.btn:disabled{opacity:.5;cursor:not-allowed;}' +
'.btn-navy{background:#1B3A5C;color:#fff;}' +
'.btn-navy:hover:not(:disabled){background:#0d2237;}' +
'.btn-gold{background:#C9A040;color:#fff;}' +
'.btn-gold:hover:not(:disabled){background:#B08A30;}' +
'.btn-green{background:#03C75A;color:#fff;}' +
'.btn-green:hover:not(:disabled){background:#02A84C;}' +
'.btn-light{background:#f5f5f5;color:#666;border:1px solid #ddd;}' +
'.rlog{margin-top:16px;padding:14px 18px;background:#f9f9f9;border-radius:4px;border-left:3px solid #ddd;font-size:13px;line-height:1.9;white-space:pre-line;display:none;}' +
'.rlog.show{display:block;}' +
'.rlog.ok{border-left-color:#03C75A;color:#1A8A4A;background:#F0FFF4;}' +
'.rlog.err{border-left-color:#E74C3C;color:#C0392B;background:#FEF0EF;}' +
'.lt{width:100%;border-collapse:collapse;font-size:13px;}' +
'.lt th{background:#F8F8F8;padding:11px 16px;text-align:left;color:#999;font-weight:700;font-size:11px;letter-spacing:.1em;text-transform:uppercase;border-bottom:2px solid #f0f0f0;}' +
'.lt td{padding:11px 16px;border-bottom:1px solid #f8f8f8;color:#444;}' +
'.lt tr:hover td{background:#FAFBFC;}' +
'.dt{display:inline-block;padding:3px 10px;border-radius:12px;font-size:11px;font-weight:700;}' +
'.dm{background:#EBF5FF;color:#2980B9;}' +
'.dd{background:#E8F8EE;color:#27AE60;}' +
'.dta{background:#FFF3E0;color:#E67E22;}' +
'.es{text-align:center;padding:48px 20px;color:#ccc;}' +
'.es-i{font-size:40px;margin-bottom:12px;opacity:.5;}' +
'.toast{position:fixed;bottom:36px;left:50%;transform:translateX(-50%) translateY(100px);background:#222;color:#fff;padding:13px 28px;font-size:14px;transition:transform .3s;z-index:9999;border-radius:6px;box-shadow:0 8px 32px rgba(0,0,0,.3);white-space:nowrap;pointer-events:none;}' +
'.toast.show{transform:translateX(-50%) translateY(0);}' +
'.toast.ok{background:#1A8A4A;}' +
'.toast.err{background:#C0392B;}' +
'@media(max-width:1024px){.sr{grid-template-columns:1fr 1fr;}.gg{grid-template-columns:repeat(3,1fr);}}' +
'@media(max-width:768px){.sb{width:56px;}.sb-brand,.sb-sec,.sb-item span,.sb-link{display:none;}.sb-item{padding:14px;justify-content:center;}.main{margin-left:56px;}.content{padding:20px 16px;}.topbar{padding:0 20px;}.sr{grid-template-columns:1fr 1fr;gap:10px;}.gg{grid-template-columns:1fr 1fr;}.fg-row{grid-template-columns:1fr;}}';
}

function buildAdminLoginHtml(siteName) {
  return '<div class="lw" id="loginWrap">' +
  '<div class="lb">' +
  '<div class="lb-logo">' + siteName + '</div>' +
  '<div class="lb-title">' + '\uc0ac\uc7a5\ub2d8 \ud398\uc774\uc9c0</div>' +
  '<div class="lf"><label>' + '\uc544\uc774\ub514</label>' +
  '<input type="text" id="loginId" placeholder="' + '\uc544\uc774\ub514 \uc785\ub825" autocomplete="username" onkeydown="if(event.key===\'Enter\')doLogin()"></div>' +
  '<div class="lf"><label>' + '\ube44\ubc00\ubc88\ud638</label>' +
  '<input type="password" id="loginPw" placeholder="' + '\ube44\ubc00\ubc88\ud638 \uc785\ub825" autocomplete="current-password" onkeydown="if(event.key===\'Enter\')doLogin()"></div>' +
  '<div class="l-err" id="loginErr">' + '\uc544\uc774\ub514 \ub610\ub294 \ube44\ubc00\ubc88\ud638\uac00 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.</div>' +
  '<button class="l-btn" onclick="doLogin()">' + '\ub85c\uadf8\uc778</button>' +
  '</div></div>';
}

function buildAdminMainHtml(siteName, d) {
  return '<div class="aw" id="adminWrap">' +
  '<div class="sb">' +
    '<div class="sb-brand"><div class="sb-name">' + siteName + '</div><div class="sb-sub">' + '\uad00\ub9ac\uc790 \ud328\ub110</div></div>' +
    '<div class="sb-nav">' +
      '<div class="sb-sec">' + '\uba54\ub274</div>' +
      '<div class="sb-item active" onclick="showPanel(\'dashboard\',this)"><span class="ic">\uD83C\uDFE0</span><span>' + '\ub300\uc2dc\ubcf4\ub4dc</span></div>' +
      '<div class="sb-item" onclick="showPanel(\'stats\',this)"><span class="ic">\uD83D\uDCCA</span><span>' + '\ubc29\ubb38\uc790 \ud1b5\uacc4</span></div>' +
      '<div class="sb-item" onclick="showPanel(\'reservation\',this)"><span class="ic">\uD83D\uDCC5</span><span>' + '\uc608\uc57d \uad00\ub9ac</span></div>' +
      '<div class="sb-item" onclick="showPanel(\'gallery\',this)"><span class="ic">\uD83D\uDDBC\uFE0F</span><span>' + '\uac24\ub7ec\ub9ac</span></div>' +
      '<div class="sb-item" onclick="showPanel(\'info\',this)"><span class="ic">\u2699\uFE0F</span><span>' + '\uae30\ubcf8 \uc815\ubcf4</span></div>' +
    '</div>' +
    '<div class="sb-foot">' +
      '<a href="index.html" target="_blank" class="sb-link">\uD83C\uDF10 ' + '\ud648\ud398\uc774\uc9c0 \ubcf4\uae30</a>' +
      '<button class="sb-logout" onclick="logout()">' + '\ub85c\uadf8\uc544\uc6c3</button>' +
    '</div>' +
  '</div>' +
  '<div class="main">' +
    '<div class="topbar">' +
      '<div class="topbar-title" id="topbarTitle">' + '\ub300\uc2dc\ubcf4\ub4dc</div>' +
      '<div class="topbar-right">' +
        '<span class="wait-badge" id="waitBadge">' + '\ub300\uae30 0</span>' +
        '<a href="index.html" target="_blank" style="font-size:13px;color:#1B3A5C;text-decoration:none;padding:8px 16px;border:1px solid #ddd;border-radius:3px;">\uD83C\uDF10 ' + '\ud648\ud398\uc774\uc9c0</a>' +
      '</div>' +
    '</div>' +
    '<div class="content">' + buildAdminPanels(d) + '</div>' +
  '</div>' +
  '</div>';
}

function buildAdminPanels(d) {
  const ph = '\ub85c\ub529 \uc911...';
  return (
  '<div class="panel active" id="panel-dashboard">' +
    '<div class="sr">' +
      '<div class="sb2"><div class="sn" id="st-total">-</div><div class="sl">' + '\uc804\uccb4 \uc608\uc57d</div></div>' +
      '<div class="sb2 cb2"><div class="sn" id="st-waiting">-</div><div class="sl">' + '\ub300\uae30 \uc911</div></div>' +
      '<div class="sb2 cg"><div class="sn" id="st-today">-</div><div class="sl">' + '\uc624\ub298 \uc608\uc57d</div></div>' +
      '<div class="sb2 cr"><div class="sn" id="st-visit-today">-</div><div class="sl">' + '\uc624\ub298 \ubc29\ubb38\uc790</div></div>' +
    '</div>' +
    '<div class="card"><div class="ch"><h3>\uD83D\uDCC8 ' + '\ucd5c\uadfc 7\uc77c \ubc29\ubb38\uc790</h3><button class="btn btn-light" style="padding:6px 14px;font-size:12px" onclick="loadStats()">\uD83D\uDD04</button></div><div class="cb"><div id="miniChart"><div class="ce"><div>\uD83D\uDCCA</div><p>' + ph + '</p></div></div></div></div>' +
    '<div class="card"><div class="ch"><h3>\uD83D\uDCC5 ' + '\ucd5c\uadfc \uc608\uc57d</h3><button class="btn btn-light" style="padding:6px 14px;font-size:12px" onclick="loadReservations()">\uD83D\uDD04</button></div><div class="cb" id="dash-rsv-list"><div class="es"><div class="es-i">\uD83D\uDCED</div><p>' + ph + '</p></div></div></div>' +
  '</div>' +

  '<div class="panel" id="panel-stats">' +
    '<div class="sr">' +
      '<div class="sb2"><div class="sn" id="vs-total">-</div><div class="sl">' + '\uc804\uccb4 \ubc29\ubb38</div></div>' +
      '<div class="sb2 cb2"><div class="sn" id="vs-today">-</div><div class="sl">' + '\uc624\ub298 \ubc29\ubb38</div></div>' +
      '<div class="sb2 cg"><div class="sn" id="vs-week">-</div><div class="sl">' + '\uc774\ubc88 \uc8fc</div></div>' +
      '<div class="sb2 cr"><div class="sn" id="vs-mobile">-%</div><div class="sl">' + '\ubaa8\ubc14\uc77c \ube44\uc728</div></div>' +
    '</div>' +
    '<div class="card"><div class="ch"><h3>\uD83D\uDCCA ' + '\ucd5c\uadfc 30\uc77c \ubc29\ubb38\uc790</h3><button class="btn btn-light" style="padding:6px 14px;font-size:12px" onclick="loadStats()">\uD83D\uDD04 ' + '\uc0c8\ub85c\uace0\uce68</button></div><div class="cb"><div id="bigChart"><div class="ce"><div>\uD83D\uDCCA</div><p>' + ph + '</p></div></div></div></div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">' +
      '<div class="card"><div class="ch"><h3>\uD83D\uDCC4 ' + '\ud398\uc774\uc9c0\ubcc4 \ubc29\ubb38</h3></div><div class="cb" id="page-stats"><div class="ce" style="height:120px"><p>' + ph + '</p></div></div></div>' +
      '<div class="card"><div class="ch"><h3>\uD83D\uDCF1 ' + '\uae30\uae30\ubcc4 \ubc29\ubb38</h3></div><div class="cb" id="device-stats"><div class="ce" style="height:120px"><p>' + ph + '</p></div></div></div>' +
    '</div>' +
    '<div class="card" style="margin-top:20px"><div class="ch"><h3>\uD83D\uDCCB ' + '\ucd5c\uadfc \ubc29\ubb38 \ub85c\uadf8 (50\uac74)</h3></div><div style="overflow-x:auto"><table class="lt"><thead><tr><th>\uc2dc\uac04</th><th>\ud398\uc774\uc9c0</th><th>\uae30\uae30</th><th>\ube0c\ub77c\uc6b0\uc800</th></tr></thead><tbody id="visit-log-body"><tr><td colspan="4" style="text-align:center;padding:24px;color:#ccc">' + ph + '</td></tr></tbody></table></div></div>' +
  '</div>' +

  '<div class="panel" id="panel-reservation">' +
    '<div class="card"><div class="ch"><h3>\uD83D\uDCC5 ' + '\uc608\uc57d \uad00\ub9ac</h3><div style="display:flex;align-items:center;gap:10px"><span id="rsv-count" style="font-size:13px;color:#aaa"></span><button class="btn btn-light" style="padding:7px 14px;font-size:12px" onclick="loadReservations()">\uD83D\uDD04</button></div></div>' +
    '<div class="cb"><div class="tabs"><button class="tab active" onclick="setTab(\'all\',this)">' + '\uc804\uccb4</button><button class="tab" onclick="setTab(\'waiting\',this)">\u23F3 ' + '\ub300\uae30\uc911</button><button class="tab" onclick="setTab(\'confirmed\',this)">\u2705 ' + '\ud655\uc815</button><button class="tab" onclick="setTab(\'done\',this)">\u2714 ' + '\uc644\ub8cc</button><button class="tab" onclick="setTab(\'cancelled\',this)">\u274C ' + '\ucde8\uc18c</button></div>' +
    '<div id="rsv-list"><div class="es"><div class="es-i">\uD83D\uDCED</div><p>' + ph + '</p></div></div></div></div>' +
  '</div>' +

  '<div class="panel" id="panel-gallery">' +
    '<div class="card"><div class="ch"><h3>\uD83D\uDDBC\uFE0F ' + '\uac24\ub7ec\ub9ac \uad00\ub9ac</h3>' +
    '<label class="btn btn-gold" style="cursor:pointer">+ ' + '\uc774\ubbf8\uc9c0 \ucd94\uac00<input type="file" accept="image/jpeg,image/png,image/webp,image/gif" multiple onchange="uploadImages(this)" style="display:none"></label></div>' +
    '<div class="cb"><div class="up" id="upload-prog"><div class="up-text" id="up-text">' + '\uc5c5\ub85c\ub4dc \uc911...</div><div class="up-bw"><div class="up-bar" id="up-bar"></div></div></div>' +
    '<div class="gg" id="gal-grid"></div></div></div>' +
  '</div>' +

  '<div class="panel" id="panel-info">' +
    '<div class="card"><div class="ch"><h3>\u2699\uFE0F ' + '\uae30\ubcf8 \uc815\ubcf4 \uc218\uc815</h3></div><div class="cb">' +
    '<div class="fg-row">' +
      '<div class="fg"><label>' + '\uc5c5\uccb4\uba85</label><input type="text" id="i-name" value="' + (d.name||'') + '"><div class="fg-hint">' + '\ud648\ud398\uc774\uc9c0 \ud0c0\uc774\ud2c0, \ud5e4\ub354\uc5d0 \ud45c\uc2dc</div></div>' +
      '<div class="fg"><label>' + '\uc804\ud654\ubc88\ud638</label><input type="text" id="i-phone" value="' + (d.phone||'') + '"></div>' +
    '</div>' +
    '<div class="fg"><label>' + '\uc8fc\uc18c</label><input type="text" id="i-address" value="' + (d.address||'') + '"></div>' +
    '<div class="fg-row">' +
      '<div class="fg"><label>' + '\uc601\uc5c5\uc2dc\uac04</label><input type="text" id="i-hours" value="' + (d.openHours||'') + '"></div>' +
      '<div class="fg"><label>' + '\ud734\ubb34\uc77c</label><input type="text" id="i-closed" placeholder="' + '\uc608) \ub9e4\uc8fc \uc6d4\uc694\uc77c \ud734\ubb34"></div>' +
    '</div>' +
    '<div class="fg"><label>' + '\uc8fc\ucc28 \uc548\ub0b4</label><input type="text" id="i-parking" value="' + (d.parking||'') + '"></div>' +
    '<div class="fg"><label>' + '\uc2ac\ub85c\uac74</label><input type="text" id="i-slogan" value="' + (d.slogan||'') + '"></div>' +
    '<div class="btn-row">' +
      '<button class="btn btn-gold" onclick="saveInfo()">\uD83D\uDCBE ' + '\uc800\uc7a5</button>' +
      '<button class="btn btn-green" id="redeployBtn" onclick="redeployPage()">\uD83D\uDE80 ' + '\uc800\uc7a5 + \ud648\ud398\uc774\uc9c0 \uc989\uc2dc \ubc18\uc601</button>' +
    '</div>' +
    '<div class="rlog" id="redeploy-log"></div>' +
    '</div></div>' +
  '</div>'
  );
}

function buildAdminJs(adminId, adminPw, siteId) {
  const SB_URL   = ADMIN_SUPABASE_URL;
  const SB_KEY   = ADMIN_SUPABASE_KEY;
  const BUCKET   = ADMIN_BUCKET;

  // 모든 문자열을 JSON.stringify 로 안전하게 직렬화
  const safeId     = JSON.stringify(adminId);
  const safePw     = JSON.stringify(adminPw);
  const safeSid    = JSON.stringify(siteId);
  const safeSbUrl  = JSON.stringify(SB_URL);
  const safeSbKey  = JSON.stringify(SB_KEY);
  const safeBucket = JSON.stringify(BUCKET);

  return (
'var ADMIN_ID=' + safeId + ',' +
'ADMIN_PW=' + safePw + ',' +
'SB_URL=' + safeSbUrl + ',' +
'SB_KEY=' + safeSbKey + ',' +
'BUCKET=' + safeBucket + ',' +
'SITE_ID=' + safeSid + ';' +
'var _rsvAll=[],_rsvFilter="all";' +
'var _galUrls=JSON.parse(localStorage.getItem("gal_"+SITE_ID)||"[]");' +

'function doLogin(){' +
'  var id=(document.getElementById("loginId").value||"").trim();' +
'  var pw=document.getElementById("loginPw").value||"";' +
'  if(id===ADMIN_ID&&pw===ADMIN_PW){' +
'    sessionStorage.setItem("adm_"+SITE_ID,"1");' +
'    document.getElementById("loginErr").style.display="none";' +
'    bootAdmin();' +
'  }else{' +
'    document.getElementById("loginErr").style.display="block";' +
'    document.getElementById("loginPw").value="";' +
'    document.getElementById("loginPw").focus();' +
'  }' +
'}' +
'function bootAdmin(){' +
'  document.getElementById("loginWrap").style.display="none";' +
'  document.getElementById("adminWrap").style.display="flex";' +
'  loadReservations();renderGallery();loadStats();' +
'}' +
'function logout(){sessionStorage.removeItem("adm_"+SITE_ID);location.reload();}' +
'if(sessionStorage.getItem("adm_"+SITE_ID)==="1")bootAdmin();' +

'var PANEL_NAMES={' +
'  dashboard:"\ub300\uc2dc\ubcf4\ub4dc",' +
'  stats:"\ubc29\ubb38\uc790 \ud1b5\uacc4",' +
'  reservation:"\uc608\uc57d \uad00\ub9ac",' +
'  gallery:"\uac24\ub7ec\ub9ac",' +
'  info:"\uae30\ubcf8 \uc815\ubcf4"' +
'};' +
'function showPanel(name,el){' +
'  document.querySelectorAll(".panel").forEach(function(p){p.classList.remove("active");});' +
'  document.querySelectorAll(".sb-item").forEach(function(i){i.classList.remove("active");});' +
'  var p=document.getElementById("panel-"+name);if(p)p.classList.add("active");' +
'  if(el)el.classList.add("active");' +
'  document.getElementById("topbarTitle").textContent=PANEL_NAMES[name]||name;' +
'  if(name==="reservation")renderRsvList();' +
'  if(name==="stats")loadStats();' +
'  if(name==="gallery")renderGallery();' +
'}' +

'async function sbG(t,q){var r=await fetch(SB_URL+"/rest/v1/"+t+"?"+q,{headers:{"apikey":SB_KEY,"Authorization":"Bearer "+SB_KEY,"Accept":"application/json"}});if(!r.ok)throw new Error(r.status);return r.json();}' +
'async function sbP(t,q,b){var r=await fetch(SB_URL+"/rest/v1/"+t+"?"+q,{method:"PATCH",headers:{"apikey":SB_KEY,"Authorization":"Bearer "+SB_KEY,"Content-Type":"application/json","Prefer":"return=minimal"},body:JSON.stringify(b)});if(!r.ok)throw new Error(r.status);return true;}' +
'async function sbD(t,q){var r=await fetch(SB_URL+"/rest/v1/"+t+"?"+q,{method:"DELETE",headers:{"apikey":SB_KEY,"Authorization":"Bearer "+SB_KEY}});if(!r.ok)throw new Error(r.status);return true;}' +
'async function sbI(t,b){var r=await fetch(SB_URL+"/rest/v1/"+t,{method:"POST",headers:{"apikey":SB_KEY,"Authorization":"Bearer "+SB_KEY,"Content-Type":"application/json","Prefer":"return=representation"},body:JSON.stringify(b)});if(!r.ok)throw new Error(r.status);return r.json();}' +

'async function recordVisit(page){' +
'  var ua=navigator.userAgent;' +
'  var dev=/Mobile|Android|iPhone/i.test(ua)?"mobile":/iPad|Tablet/i.test(ua)?"tablet":"desktop";' +
'  var br=/Edg/i.test(ua)?"Edge":/Chrome/i.test(ua)?"Chrome":/Firefox/i.test(ua)?"Firefox":/Safari/i.test(ua)?"Safari":"etc";' +
'  try{await sbI("page_views",{site_id:SITE_ID,page:page||"index.html",device:dev,browser:br,visit_date:new Date().toISOString().slice(0,10),visited_at:new Date().toISOString()});}catch(e){}' +
'}' +

'async function loadStats(){' +
'  var today=new Date().toISOString().slice(0,10);' +
'  var wk=new Date(Date.now()-6*864e5).toISOString().slice(0,10);' +
'  try{' +
'    var rows=await sbG("page_views","site_id=eq."+SITE_ID+"&order=visited_at.desc&limit=2000");' +
'    if(!Array.isArray(rows))rows=[];' +
'    var td=rows.filter(function(r){return r.visit_date===today;});' +
'    var wkr=rows.filter(function(r){return r.visit_date>=wk;});' +
'    var mob=rows.filter(function(r){return r.device==="mobile";});' +
'    var mr=rows.length?Math.round(mob.length/rows.length*100):0;' +
'    st("vs-total",rows.length);st("vs-today",td.length);st("vs-week",wkr.length);st("vs-mobile",mr+"%");st("st-visit-today",td.length);' +
'    buildChart("bigChart",rows,30);buildChart("miniChart",rows,7);' +
'    buildPageStats(rows);buildDevStats(rows);buildLog(rows.slice(0,50));' +
'  }catch(e){' +
'    var nd="<div class=\\"ce\\"><div>\uD83D\uDCED</div><p>\ub370\uc774\ud130 \uc5c6\uc74c</p></div>";' +
'    ["bigChart","miniChart"].forEach(function(id){var el=document.getElementById(id);if(el)el.innerHTML=nd;});' +
'    ["page-stats","device-stats"].forEach(function(id){var el=document.getElementById(id);if(el)el.innerHTML=nd;});' +
'    var lb=document.getElementById("visit-log-body");' +
'    if(lb)lb.innerHTML="<tr><td colspan=\\"4\\" style=\\"text-align:center;padding:24px;color:#ccc\\">\ub370\uc774\ud130 \uc5c6\uc74c</td></tr>";' +
'  }' +
'}' +

'function buildChart(id,rows,days){' +
'  var el=document.getElementById(id);if(!el)return;' +
'  var data=[];' +
'  for(var i=days-1;i>=0;i--){' +
'    var dt=new Date(Date.now()-i*864e5);' +
'    var ds=dt.toISOString().slice(0,10);' +
'    var cnt=rows.filter(function(r){return r.visit_date===ds;}).length;' +
'    var lbl=(days<=7||i%5===0)?(dt.getMonth()+1)+"/"+(dt.getDate()):"";' +
'    data.push({ds:ds,cnt:cnt,lbl:lbl});' +
'  }' +
'  var mx=Math.max.apply(null,data.map(function(d){return d.cnt;}));if(mx<1)mx=1;' +
'  el.innerHTML="<div class=\\"bar-chart\\">"+data.map(function(d){' +
'    var h=Math.max(Math.round(d.cnt/mx*180),d.cnt>0?6:2);' +
'    return "<div class=\\"bc\\"><div class=\\"bi"+(d.cnt===0?" z":"")+"\\\" style=\\"height:"+h+"px\\"><div class=\\"tip\\">"+d.ds.slice(5)+"<br><b>"+d.cnt+"</b></div></div><div class=\\"bl\\">"+d.lbl+"</div></div>";' +
'  }).join("")+"</div>";' +
'}' +

'function buildPageStats(rows){' +
'  var el=document.getElementById("page-stats");if(!el)return;' +
'  var map={};rows.forEach(function(r){var p=r.page||"index.html";map[p]=(map[p]||0)+1;});' +
'  var sorted=Object.entries(map).sort(function(a,b){return b[1]-a[1];}).slice(0,7);' +
'  if(!sorted.length){el.innerHTML="<div class=\\"ce\\" style=\\"height:100px\\"><p>\ub370\uc774\ud130 \uc5c6\uc74c</p></div>";return;}' +
'  var mx=sorted[0][1];' +
'  el.innerHTML=sorted.map(function(e){' +
'    var pct=Math.round(e[1]/mx*100);' +
'    return "<div class=\\"pi\\"><div class=\\"pl\\"><span>"+e[0]+"</span><span style=\\"color:#aaa\\">"+e[1]+"</span></div><div class=\\"pw\\"><div class=\\"pb\\" style=\\"background:#C9A040;width:"+pct+"%\\"></div></div></div>";' +
'  }).join("");' +
'}' +

'function buildDevStats(rows){' +
'  var el=document.getElementById("device-stats");if(!el)return;' +
'  var m=rows.filter(function(r){return r.device==="mobile";}).length;' +
'  var dk=rows.filter(function(r){return r.device==="desktop";}).length;' +
'  var t=rows.filter(function(r){return r.device==="tablet";}).length;' +
'  var total=rows.length||1;' +
'  var items=[{l:"\uD83D\uDCF1 \ubaa8\ubc14\uc77c",c:m,col:"#3498DB"},{l:"\uD83D\uDDA5\uFE0F \ub370\uc2a4\ud06c\ud0d1",c:dk,col:"#27AE60"},{l:"\uD83D\uDCDF \ud0dc\ube14\ub9bf",c:t,col:"#E67E22"}];' +
'  el.innerHTML=items.map(function(x){' +
'    var pct=Math.round(x.c/total*100);' +
'    return "<div class=\\"pi\\"><div class=\\"pl\\"><span>"+x.l+"</span><span style=\\"color:#aaa\\">"+x.c+"("+pct+"%)</span></div><div class=\\"pw\\"><div class=\\"pb\\" style=\\"background:"+x.col+";width:"+pct+"%\\"></div></div></div>";' +
'  }).join("");' +
'}' +

'function buildLog(rows){' +
'  var tb=document.getElementById("visit-log-body");if(!tb)return;' +
'  if(!rows.length){tb.innerHTML="<tr><td colspan=\\"4\\" style=\\"text-align:center;padding:24px;color:#ccc\\">\ub370\uc774\ud130 \uc5c6\uc74c</td></tr>";return;}' +
'  var dc={mobile:"dm",desktop:"dd",tablet:"dta"};' +
'  tb.innerHTML=rows.map(function(r){' +
'    var dt=new Date(r.visited_at);' +
'    var ts=(dt.getMonth()+1)+"/"+dt.getDate()+" "+String(dt.getHours()).padStart(2,"0")+":"+String(dt.getMinutes()).padStart(2,"0");' +
'    var dv=r.device||"desktop";' +
'    return "<tr><td style=\\"color:#888\\">"+ts+"</td><td><code style=\\"background:#f5f5f5;padding:2px 6px;border-radius:3px;font-size:12px\\">"+(r.page||"-")+"</code></td><td><span class=\\"dt "+(dc[dv]||"dd")+"\\">"+dv+"</span></td><td style=\\"color:#888\\">"+(r.browser||"-")+"</td></tr>";' +
'  }).join("");' +
'}' +

'async function loadReservations(){' +
'  try{' +
'    var data=await sbG("reservations","order=created_at.desc&limit=300");' +
'    _rsvAll=Array.isArray(data)?data:[];' +
'    updRsvStats();renderRsvList();renderDashRsv();' +
'  }catch(e){' +
'    var errH="<div class=\\"es\\"><div class=\\"es-i\\">\u26A0\uFE0F</div><p>\uBD88\ub7ec\uc624\uae30 \uc2e4\ud328: "+e.message+"</p></div>";' +
'    var rl=document.getElementById("rsv-list");if(rl)rl.innerHTML=errH;' +
'    var dl=document.getElementById("dash-rsv-list");if(dl)dl.innerHTML=errH;' +
'  }' +
'}' +

'function updRsvStats(){' +
'  var today=new Date().toISOString().slice(0,10);' +
'  var w=_rsvAll.filter(function(r){return r.status==="waiting";});' +
'  st("st-total",_rsvAll.length);st("st-waiting",w.length);' +
'  st("st-today",_rsvAll.filter(function(r){return(r.date||r.created_at||"").slice(0,10)===today;}).length);' +
'  var wb=document.getElementById("waitBadge");' +
'  if(wb){wb.textContent="\ub300\uae30 "+w.length;wb.style.display=w.length>0?"inline-block":"none";}' +
'  var rc=document.getElementById("rsv-count");' +
'  if(rc)rc.textContent="\uc804\uccb4 "+_rsvAll.length+"\uac74 / \ub300\uae30 "+w.length+"\uac74";' +
'}' +

'function setTab(f,el){' +
'  _rsvFilter=f;' +
'  document.querySelectorAll(".tab").forEach(function(b){b.classList.remove("active");});' +
'  if(el)el.classList.add("active");' +
'  renderRsvList();' +
'}' +

'var SL={waiting:"\u23F3 \ub300\uae30\uc911",confirmed:"\u2705 \ud655\uc815",done:"\u2714 \uc644\ub8cc",cancelled:"\u274C \ucde8\uc18c"};' +
'var SC={waiting:"rw",confirmed:"rc",done:"rdo",cancelled:"rx"};' +

'function rsvHtml(r,compact){' +
'  var s=r.status||"waiting";' +
'  var dt=new Date(r.created_at).toLocaleDateString("ko-KR");' +
'  var rid=String(r.id||"");' +
'  var h="<div class=\\"ri\\">" +' +
'    "<div style=\\"display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px\\">" +' +
'    "<div><div class=\\"rn\\">"+(r.name||"\uc774\ub984 \uc5c6\uc74c")+"</div>" +' +
'    "<div class=\\"rm\\"><span>\uD83D\uDCDE <a href=\\"tel:"+(r.phone||"").replace(/-/g,"")+"\\\">"+(r.phone||"-")+"</a></span>" +' +
'    (r.date?"<span>\uD83D\uDCC5 "+r.date+(r.time?" "+r.time:"")+"</span>":"")+' +
'    "<span style=\\"color:#ddd\\">\uc2e0\uccad "+dt+"</span></div></div>" +' +
'    "<span class=\\"rs "+(SC[s]||"rw")+"\\">"+(SL[s]||s)+"</span></div>";' +
'  if(r.memo)h+="<div class=\\"rmemo\\">\uD83D\uDCAC "+r.memo+"</div>";' +
'  if(!compact){' +
'    h+="<div class=\\"ra\\">" +' +
'    "<button class=\\"rb bc2\\" data-id=\\""+rid+"\\" data-st=\\"confirmed\\" onclick=\\"doRsvBtn(this)\\">\u2705 \ud655\uc815</button>" +' +
'    "<button class=\\"rb bd\\" data-id=\\""+rid+"\\" data-st=\\"done\\" onclick=\\"doRsvBtn(this)\\">\uc644\ub8cc</button>" +' +
'    "<button class=\\"rb bca\\" data-id=\\""+rid+"\\" data-st=\\"cancelled\\" onclick=\\"doRsvBtn(this)\\">\u274C \ucde8\uc18c</button>" +' +
'    "<button class=\\"rb bdl\\" data-id=\\""+rid+"\\" data-del=\\"1\\" onclick=\\"doRsvBtn(this)\\">\uD83D\uDDD1 \uc0ad\uc81c</button></div>";' +
'  }else{' +
'    h+="<div class=\\"ra\\">" +' +
'    "<button class=\\"rb bc2\\" data-id=\\""+rid+"\\" data-st=\\"confirmed\\" onclick=\\"doRsvBtn(this)\\">\ud655\uc815</button>" +' +
'    "<button class=\\"rb bca\\" data-id=\\""+rid+"\\" data-st=\\"cancelled\\" onclick=\\"doRsvBtn(this)\\">\ucde8\uc18c</button></div>";' +
'  }' +
'  h+="</div>";return h;' +
'}' +

'function renderRsvList(){' +
'  var el=document.getElementById("rsv-list");if(!el)return;' +
'  var list=_rsvFilter==="all"?_rsvAll:_rsvAll.filter(function(r){return r.status===_rsvFilter;});' +
'  if(!list.length){el.innerHTML="<div class=\\"es\\"><div class=\\"es-i\\">\uD83D\uDCED</div><p>\uc608\uc57d\uc774 \uc5c6\uc2b5\ub2c8\ub2e4</p></div>";return;}' +
'  el.innerHTML=list.map(function(r){return rsvHtml(r,false);}).join("");' +
'}' +

'function renderDashRsv(){' +
'  var el=document.getElementById("dash-rsv-list");if(!el)return;' +
'  var list=_rsvAll.slice(0,5);' +
'  if(!list.length){el.innerHTML="<div class=\\"es\\"><div class=\\"es-i\\">\uD83D\uDCED</div><p>\uc608\uc57d\uc774 \uc5c6\uc2b5\ub2c8\ub2e4</p></div>";return;}' +
'  el.innerHTML=list.map(function(r){return rsvHtml(r,true);}).join("");' +
'}' +

'async function doRsvBtn(el){' +
'  var id=el.dataset.id,status=el.dataset.st,del=el.dataset.del;' +
'  if(del){' +
'    if(!confirm("\uc774 \uc608\uc57d\uc744 \uc0ad\uc81c\ud560\uae4c\uc694?"))return;' +
'    try{await sbD("reservations","id=eq."+id);_rsvAll=_rsvAll.filter(function(r){return String(r.id)!==String(id);});updRsvStats();renderRsvList();renderDashRsv();toast("\uD83D\uDDD1 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4");}' +
'    catch(e){toast("\u274C \uc0ad\uc81c \uc2e4\ud328: "+e.message,"err");}' +
'  }else{' +
'    try{await sbP("reservations","id=eq."+id,{status:status});var r=_rsvAll.find(function(x){return String(x.id)===String(id);});if(r)r.status=status;updRsvStats();renderRsvList();renderDashRsv();toast("\u2705 \uc0c1\ud0dc \ubcc0\uacbd \uc644\ub8cc","ok");}' +
'    catch(e){toast("\u274C \ubcc0\uacbd \uc2e4\ud328: "+e.message,"err");}' +
'  }' +
'}' +

'function renderGallery(){' +
'  var grid=document.getElementById("gal-grid");if(!grid)return;' +
'  var items=_galUrls.map(function(url,i){' +
'    return "<div class=\\"gi\\"><img src=\\""+url+"\\" loading=\\"lazy\\" onerror=\\"this.src=\'https://placehold.co/400x300/f5f5f5/ccc?text=Photo\'\\"><button class=\\"gd\\" data-i=\\""+i+"\\" onclick=\\"delImg(this)\\">\u2715</button></div>";' +
'  }).join("");' +
'  var addBtn="<div class=\\"ga\\"><div class=\\"ga-in\\"><div class=\\"ga-plus\\">+</div><span>\uc774\ubbf8\uc9c0 \ucd94\uac00</span></div><input type=\\"file\\" accept=\\"image/jpeg,image/png,image/webp,image/gif\\" multiple onchange=\\"uploadImages(this)\\"></div>";' +
'  grid.innerHTML=items+addBtn;' +
'}' +

'function delImg(el){' +
'  if(!confirm("\uc774 \uc774\ubbf8\uc9c0\ub97c \uc0ad\uc81c\ud560\uae4c\uc694?"))return;' +
'  var i=parseInt(el.dataset.i);_galUrls.splice(i,1);' +
'  localStorage.setItem("gal_"+SITE_ID,JSON.stringify(_galUrls));' +
'  renderGallery();toast("\uD83D\uDDD1 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4");' +
'}' +

'async function uploadImages(input){' +
'  var files=Array.from(input.files);if(!files.length)return;' +
'  var pw=document.getElementById("upload-prog");' +
'  var pb=document.getElementById("up-bar");' +
'  var pt=document.getElementById("up-text");' +
'  if(pw)pw.style.display="block";' +
'  var ok=0;' +
'  for(var i=0;i<files.length;i++){' +
'    var f=files[i];' +
'    if(pt)pt.textContent="\uc5c5\ub85c\ub4dc \uc911... ("+(i+1)+"/"+files.length+") "+f.name;' +
'    if(pb)pb.style.width=Math.round(i/files.length*100)+"%";' +
'    try{' +
'      var ext=(f.name.split(".").pop()||"jpg").toLowerCase();' +
'      var path=SITE_ID+"/gallery/"+Date.now()+"_"+Math.random().toString(36).slice(2)+"."+ext;' +
'      var res=await fetch(SB_URL+"/storage/v1/object/"+BUCKET+"/"+path,{' +
'        method:"POST",' +
'        headers:{' +
'          "apikey":SB_KEY,' +
'          "Authorization":"Bearer "+SB_KEY,' +
'          "Content-Type":f.type||"image/jpeg",' +
'          "x-upsert":"true"' +
'        },' +
'        body:f' +
'      });' +
'      if(res.ok){' +
'        _galUrls.push(SB_URL+"/storage/v1/object/public/"+BUCKET+"/"+path);' +
'        localStorage.setItem("gal_"+SITE_ID,JSON.stringify(_galUrls));' +
'        renderGallery();ok++;' +
'      }else{toast("\u26A0\uFE0F "+f.name+" \uc5c5\ub85c\ub4dc \uc2e4\ud328","err");}' +
'    }catch(e){toast("\u274C "+e.message,"err");}' +
'  }' +
'  if(pb)pb.style.width="100%";' +
'  setTimeout(function(){if(pw)pw.style.display="none";if(pb)pb.style.width="0%";},1200);' +
'  if(ok>0)toast("\u2705 "+ok+"\uac1c \uc5c5\ub85c\ub4dc \uc644\ub8cc","ok");' +
'  input.value="";' +
'}' +

'function gv(id){var el=document.getElementById(id);return el?(el.value||"").trim():"";}' +
'function saveInfo(){' +
'  localStorage.setItem("info_"+SITE_ID,JSON.stringify({name:gv("i-name"),phone:gv("i-phone"),address:gv("i-address"),hours:gv("i-hours"),closed:gv("i-closed"),parking:gv("i-parking"),slogan:gv("i-slogan")}));' +
'  toast("\uD83D\uDCBE \uc800\uc7a5\ub418\uc5c8\uc2b5\ub2c8\ub2e4","ok");' +
'}' +

'async function redeployPage(){' +
'  var btn=document.getElementById("redeployBtn");' +
'  var logEl=document.getElementById("redeploy-log");' +
'  saveInfo();' +
'  var info={name:gv("i-name"),phone:gv("i-phone"),address:gv("i-address"),hours:gv("i-hours"),parking:gv("i-parking"),slogan:gv("i-slogan")};' +
'  btn.disabled=true;btn.textContent="\uD83D\uDD04 \ubc30\ud3ec \uc911...";' +
'  logEl.className="rlog show";logEl.textContent="";' +
'  function lg(m){logEl.textContent+=m+"\\n";}' +
'  try{' +
'    var sdEl=document.getElementById("siteData");' +
'    if(!sdEl)throw new Error("\uc0ac\uc774\ud2b8 \ub370\uc774\ud130 \uc5c6\uc74c");' +
'    var sd=JSON.parse(sdEl.textContent);' +
'    var pf=sd.pageFiles||[];' +
'    if(!pf.length)throw new Error("\ud398\uc774\uc9c0 \ubaa9\ub85d \uc5c6\uc74c");' +
'    var hn=window.location.hostname;' +
'    var wn=hn.includes(".workers.dev")?hn.split(".")[0]:SITE_ID.replace(/_/g,"-");' +
'    lg("\uD83D\uDD0D Worker: "+wn);lg("\uD83D\uDCC4 \ub300\uc0c1: "+pf.join(", "));' +
'    function u8b64(s){var b=new TextEncoder().encode(s);var bin="";for(var i=0;i<b.length;i++)bin+=String.fromCharCode(b[i]);return btoa(bin);}' +
'    var fb={};var fails=[];' +
'    for(var i=0;i<pf.length;i++){' +
'      var fn=pf[i];lg("\uD83D\uDCE5 ("+(i+1)+"/"+pf.length+") "+fn);' +
'      try{' +
'        var rr=await fetch("/"+fn+"?_nc="+Date.now());' +
'        if(!rr.ok)throw new Error("HTTP "+rr.status);' +
'        var html=await rr.text();' +
'        var pairs=[[sd._origName,info.name],[sd._origPhone,info.phone],[sd._origAddress,info.address],[sd._origSlogan,info.slogan],[sd._origHours,info.hours],[sd._origParking,info.parking]];' +
'        pairs.forEach(function(p){var o=p[0],n=p[1];if(o&&n&&o.trim()&&n.trim()&&o!==n)html=html.split(o).join(n);});' +
'        fb[fn]=u8b64(html);' +
'      }catch(e2){fails.push(fn);lg("\u26A0\uFE0F "+fn+" \uc2a4\ud0b5 ("+e2.message+")");}' +
'    }' +
'    if(!Object.keys(fb).length)throw new Error("\uc5c5\ub370\uc774\ud2b8\ud560 \ud30c\uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4");' +
'    lg("\uD83D\uDE80 Cloudflare \ubc30\ud3ec \uc911...");' +
'    var md=sd.masterDomain||"https://kcci-admin.pages.dev";' +
'    var rr2=await fetch(md+"/api/deploy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({projectName:wn,filesBase64:fb})});' +
'    var dd=await rr2.json().catch(function(){return{error:"\uc751\ub2f5 \ud30c\uc2f1 \uc2e4\ud328"};});' +
'    if(!rr2.ok||dd.error)throw new Error(dd.error||"\ubc30\ud3ec \uc2e4\ud328 ("+rr2.status+")");' +
'    sd._origName=info.name||sd._origName;sd._origPhone=info.phone||sd._origPhone;' +
'    sd._origAddress=info.address||sd._origAddress;sd._origSlogan=info.slogan||sd._origSlogan;' +
'    sd._origHours=info.hours||sd._origHours;sd._origParking=info.parking||sd._origParking;' +
'    sdEl.textContent=JSON.stringify(sd);' +
'    lg("\u2705 \ubc30\ud3ec \uc644\ub8cc!"+(fails.length?" (\uc81c\uc678: "+fails.join(", ")+")":""));' +
'    logEl.className="rlog show ok";toast("\u2705 \ud648\ud398\uc774\uc9c0 \uc5c5\ub370\uc774\ud2b8 \uc644\ub8cc!","ok");' +
'  }catch(e){' +
'    lg("\u274C \uc624\ub958: "+e.message);logEl.className="rlog show err";toast("\u274C "+e.message,"err");' +
'  }finally{' +
'    btn.disabled=false;btn.textContent="\uD83D\uDE80 \uc800\uc7a5 + \ud648\ud398\uc774\uc9c0 \uc989\uc2dc \ubc18\uc601";' +
'  }' +
'}' +

'function st(id,v){var el=document.getElementById(id);if(el)el.textContent=v;}' +
'var _tt=null;' +
'function toast(msg,type){' +
'  var t=document.getElementById("toast");if(!t)return;' +
'  t.textContent=msg;t.className="toast show"+(type?" "+type:"");' +
'  clearTimeout(_tt);_tt=setTimeout(function(){t.className="toast";},3200);' +
'}'
  );
}
