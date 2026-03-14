/* ============================================================
   sitegen.js — 홈페이지 생성 오케스트레이터
   ============================================================ */

'use strict';

// ── 폼 값 읽기 ──
function sgV(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : '';
}

function sgImgSrc(val, placeholder) {
  val = (val || '').trim();
  if (!val) return placeholder || 'https://placehold.co/1200x800/1B3A5C/C9A040?text=Image';
  if (val.startsWith('http')) return val;
  return 'images/' + val;
}

// ── 업체 선택 → 폼 자동 입력 ──
function loadClientToForm(id) {
  if (!id) return;
  const clients = loadClients();
  const c = clients.find(x => x.id === id);
  if (!c) return;
  const set = (elId, val) => { const el = document.getElementById(elId); if (el && val) el.value = val; };
  set('sgName', c.name); set('sgOwner', c.owner); set('sgPhone', c.phone);
  set('sgAddress', c.address); set('sgUrl', c.url); set('sgPlaceId', c.placeId);
  set('sgBlog', c.blog); set('sgInsta', c.insta);
  set('sgCloudName', c.cloudName); set('sgUploadPreset', c.uploadPreset);

  // 업종 템플릿 자동 변경
  if (c.industry) {
    const tplEl = document.getElementById('sgTemplate');
    if (tplEl) {
      tplEl.value = c.industry;
      onTemplateChange(); // 폼 섹션 동적 업데이트
    }
  }

  showToast('✅ ' + c.name + ' 정보 불러오기 완료');
}

// ── 섹션 아코디언 ──
function toggleSgSection(head) {
  head.classList.toggle('open');
  const body = head.nextElementSibling;
  body.classList.toggle('open');
}

// ── 폼 초기화 ──
function resetSgForm() {
  const ids = [
    'sgName','sgNameEn','sgOwner','sgPhone','sgAddress','sgPlaceId',
    'sgUrl','sgBlog','sgInsta','sgSlogan','sgAiMemo',
    'sgH1Img','sgH1Title','sgH2Img','sgH2Title','sgH3Img','sgH3Title',
    'sgP1Img','sgP1Tag','sgP1Name','sgP1Desc','sgP1Detail',
    'sgP2Img','sgP2Tag','sgP2Name','sgP2Desc','sgP2Detail',
    'sgP3Img','sgP3Tag','sgP3Name','sgP3Desc','sgP3Detail',
    'sgI1Img','sgI1Role','sgI1Name','sgI1Cert',
    'sgI2Img','sgI2Role','sgI2Name','sgI2Cert',
    'sgCloudName','sgUploadPreset',
    'sgOpenHours','sgLastOrder','sgParking',
    'sgReview1','sgReview1Who','sgReview2','sgReview2Who','sgReview3','sgReview3Who',
  ];
  ids.forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  document.getElementById('sgAdminId').value = 'admin';
  document.getElementById('sgAdminPw').value = 'thdP1234';
  document.getElementById('sgResultWrap').style.display = 'none';
  document.getElementById('sgProgress').style.width = '0%';
  // 갤러리 초기화
  sgGalleryItems = [];
  renderSgGallery();
  const urlsEl = document.getElementById('sgGalleryUrls');
  if (urlsEl) urlsEl.value = '[]';
  // 이미지 미리보기 초기화
  document.querySelectorAll('[id$="_preview"]').forEach(el => el.style.display = 'none');
  // 폰트 크기 초기화
  resetSgFs();
  const status = document.getElementById('aiStatus');
  if (status) status.textContent = '';
  showToast('초기화되었습니다.');
}

// ── 데이터 객체 수집 ──

// ── 업종별 기본 이미지 (Unsplash) ──
const INDUSTRY_IMAGES = {
  pilates: {
    h1: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600&q=80',
    h2: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&q=80',
    h3: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80',
    p1: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80',
    p2: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80',
    p3: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80',
    i1: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
    i2: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80',
  },
  cafe: {
    h1: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=80',
    h2: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80',
    h3: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1600&q=80',
    p1: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
    p2: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
    p3: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=800&q=80',
    i1: 'https://images.unsplash.com/photo-1521019452999-f896e49e3dd2?w=600&q=80',
    i2: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80',
  },
  beauty: {
    h1: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80',
    h2: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=80',
    h3: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1600&q=80',
    p1: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&q=80',
    p2: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    p3: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    i1: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80',
    i2: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80',
  },
  medical: {
    h1: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1600&q=80',
    h2: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1600&q=80',
    h3: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80',
    p1: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    p2: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    p3: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800&q=80',
    i1: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
    i2: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80',
  },
  academy: {
    h1: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80',
    h2: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80',
    h3: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1600&q=80',
    p1: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80',
    p2: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
    p3: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
    i1: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80',
    i2: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
  },
  general: {
    h1: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80',
    h2: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1600&q=80',
    h3: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1600&q=80',
    p1: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    p2: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    p3: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80',
    i1: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    i2: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
  },
};

function getDefaultImg(field) {
  const tpl = sgV('sgTemplate') || 'pilates';
  return (INDUSTRY_IMAGES[tpl] || INDUSTRY_IMAGES.general)[field] || '';
}

function buildSgDataObj() {
  return {
    name:         sgV('sgName') || '업체명',
    nameEn:       sgV('sgNameEn') || (sgV('sgName') || '업체명').toUpperCase(),
    owner:        sgV('sgOwner'),
    phone:        sgV('sgPhone') || '000-0000-0000',
    address:      sgV('sgAddress'),
    placeId:      sgV('sgPlaceId'),
    url:          sgV('sgUrl'),
    blog:         sgV('sgBlog') || '#',
    insta:        sgV('sgInsta') || '#',
    slogan:       sgV('sgSlogan') || '전문가와 함께하는 맞춤 서비스',
    h1Img:        sgImgSrc(sgV('sgH1Img')) || getDefaultImg('h1'),
    h1Title:      sgV('sgH1Title') || '전문적인|서비스',
    h2Img:        sgImgSrc(sgV('sgH2Img')) || getDefaultImg('h2'),
    h2Title:      sgV('sgH2Title') || '함께하는|성장',
    h3Img:        sgImgSrc(sgV('sgH3Img')) || getDefaultImg('h3'),
    h3Title:      sgV('sgH3Title') || '최고의|선택',
    p1Img:        sgImgSrc(sgV('sgP1Img')) || getDefaultImg('p1'),
    p1Tag:        sgV('sgP1Tag') || 'PROGRAM 1',
    p1Name:       sgV('sgP1Name') || '프로그램 1',
    p1Desc:       sgV('sgP1Desc') || '프로그램 설명',
    p1Detail:     sgV('sgP1Detail') || '상세 설명',
    p2Img:        sgImgSrc(sgV('sgP2Img')) || getDefaultImg('p2'),
    p2Tag:        sgV('sgP2Tag') || 'PROGRAM 2',
    p2Name:       sgV('sgP2Name') || '프로그램 2',
    p2Desc:       sgV('sgP2Desc') || '프로그램 설명',
    p2Detail:     sgV('sgP2Detail') || '상세 설명',
    p3Img:        sgImgSrc(sgV('sgP3Img')) || getDefaultImg('p3'),
    p3Tag:        sgV('sgP3Tag') || 'PROGRAM 3',
    p3Name:       sgV('sgP3Name') || '프로그램 3',
    p3Desc:       sgV('sgP3Desc') || '프로그램 설명',
    p3Detail:     sgV('sgP3Detail') || '상세 설명',
    i1Img:        sgImgSrc(sgV('sgI1Img')) || getDefaultImg('i1'),
    i1Role:       sgV('sgI1Role') || 'DIRECTOR',
    i1Name:       sgV('sgI1Name') || '원장님',
    i1Cert:       sgV('sgI1Cert') || '',
    i2Img:        sgImgSrc(sgV('sgI2Img')) || getDefaultImg('i2'),
    i2Role:       sgV('sgI2Role') || 'MANAGER',
    i2Name:       sgV('sgI2Name') || '실장님',
    i2Cert:       sgV('sgI2Cert') || '',
    cloudName:    sgV('sgCloudName') || 'https://vugtupipbpfundipgcqc.supabase.co',
    uploadPreset: sgV('sgUploadPreset') || 'sb_publishable_tJhW52aAlbyM_0A5_J-yqA_OTIIhV-S',
    adminId:      sgV('sgAdminId') || 'admin',
    adminPw:      sgV('sgAdminPw') || 'thdP1234',
    openHours:    sgV('sgOpenHours') || '매일 09:00 – 21:00',
    lastOrder:    sgV('sgLastOrder') || '마감 30분 전',
    parking:      sgV('sgParking') || '전용 주차 가능',
    review1:      sgV('sgReview1') || '정말 만족스러운 경험이었어요!',
    review1who:   sgV('sgReview1Who') || '네이버 방문자',
    review2:      sgV('sgReview2') || '전문적이고 친절한 서비스 감사합니다.',
    review2who:   sgV('sgReview2Who') || '네이버 방문자',
    review3:      sgV('sgReview3') || '다음에도 꼭 이용할게요!',
    review3who:   sgV('sgReview3Who') || '네이버 방문자',
    // 갤러리 이미지 (업로드된 것 우선, 없으면 기본 이미지 사용)
    galleryUrls:  (function(){ try { return JSON.parse(document.getElementById('sgGalleryUrls')?.value || '[]'); } catch(e){ return []; } })(),
    // 텍스트 크기 설정
    fsHero:    parseInt(document.getElementById('sgFsHero')?.value   || '68'),
    fsSection: parseInt(document.getElementById('sgFsSection')?.value || '36'),
    fsCard:    parseInt(document.getElementById('sgFsCard')?.value    || '22'),
    fsBody:    parseInt(document.getElementById('sgFsBody')?.value    || '15'),
    fsNav:     parseInt(document.getElementById('sgFsNav')?.value     || '13'),
    fsReview:  parseInt(document.getElementById('sgFsReview')?.value  || '15'),
    fsFooter:  parseInt(document.getElementById('sgFsFooter')?.value  || '13'),
  };
}

// ── 제목 파싱 ──
function titleHtml(t) {
  const p = t.split('|');
  return p.length > 1 ? p[0] + '<br><em>' + p[1] + '</em>' : t;
}

// ── 자격증 리스트 ──
function certList(txt) {
  return (txt || '').split('\n').filter(l => l.trim())
    .map(l => '<li>' + l.trim() + '</li>').join('\n');
}

// ── 미리보기 ──
let _pvPages = {};
let _pvCurrent = 'index.html';

function openSgPreview() {
  const name = sgV('sgName');
  if (!name) { showToast('⚠️ 업체명을 먼저 입력하세요.', 'error'); return; }

  const tpl = sgV('sgTemplate') || 'pilates';
  const d = buildSgDataObj();

  _pvPages = buildAllPages(tpl, d);

  // 탭 생성 (admin.html 제외)
  const tabEl = document.getElementById('pvPageTabs');
  tabEl.innerHTML = Object.keys(_pvPages)
    .filter(p => p !== 'admin.html')
    .map(p =>
      `<button onclick="pvLoadPage('${p}')" id="pvTab_${p.replace('.','_')}"
       style="background:var(--bg3);border:1px solid var(--border);color:var(--text2);padding:6px 12px;font-size:12px;cursor:pointer;font-family:inherit;">${p}</button>`
    ).join('');

  pvLoadPage('index.html');
  document.getElementById('previewModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function pvLoadPage(page) {
  _pvCurrent = page;
  const html = _pvPages[page];
  if (!html) return;

  // 탭 활성화
  document.querySelectorAll('#pvPageTabs button').forEach(b => {
    b.style.borderColor = 'var(--border)';
    b.style.color = 'var(--text2)';
  });
  const active = document.getElementById('pvTab_' + page.replace('.','_'));
  if (active) { active.style.borderColor = 'var(--gold)'; active.style.color = 'var(--gold)'; }

  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const frame = document.getElementById('pvFrame');
  if (frame._blobUrl) URL.revokeObjectURL(frame._blobUrl);
  frame._blobUrl = url;
  frame.src = url;
}

function closeSgPreview() {
  document.getElementById('previewModal').style.display = 'none';
  document.body.style.overflow = '';
  const frame = document.getElementById('pvFrame');
  if (frame._blobUrl) { URL.revokeObjectURL(frame._blobUrl); frame._blobUrl = null; }
}

function setPvSize(w) {
  const wrapper = document.getElementById('pvWrapper');
  wrapper.style.width = w;
  wrapper.style.boxShadow = w !== '100%'
    ? '0 0 0 1px rgba(255,255,255,.1),0 20px 60px rgba(0,0,0,.5)' : 'none';
}

// ── 모든 페이지 빌드 ──
function buildAllPages(tpl, d) {
  const builders = {
    pilates: {
      'index.html': () => buildPilatesIndexHtml(d, titleHtml),
      'program.html': () => buildPilatesProgramHtml(d, certList),
      'gallery.html': () => buildPilatesGalleryHtml(d),
      'location.html': () => buildPilatesLocationHtml(d),
    },
    cafe: {
      'index.html': () => buildCafeIndexHtml(d, titleHtml),
      'menu.html': () => buildCafeMenuHtml(d),
      'gallery.html': () => buildCafeGalleryHtml(d),
      'location.html': () => buildCafeLocationHtml(d),
    },
    beauty: {
      'index.html': () => buildBeautyIndexHtml(d, titleHtml),
      'service.html': () => buildBeautyServiceHtml(d),
      'gallery.html': () => buildBeautyGalleryHtml(d),
      'location.html': () => buildBeautyLocationHtml(d),
    },
    medical: {
      'index.html': () => buildMedicalIndexHtml(d, titleHtml),
      'treatment.html': () => buildMedicalTreatmentHtml(d),
      'gallery.html': () => buildMedicalGalleryHtml(d),
      'location.html': () => buildMedicalLocationHtml(d),
    },
    academy: {
      'index.html': () => buildAcademyIndexHtml(d, titleHtml),
      'course.html': () => buildAcademyCourseHtml(d),
      'gallery.html': () => buildAcademyGalleryHtml(d),
      'location.html': () => buildAcademyLocationHtml(d),
    },
    general: {
      'index.html': () => buildGeneralIndexHtml(d, titleHtml),
      'product.html': () => buildGeneralProductHtml(d),
      'gallery.html': () => buildGeneralGalleryHtml(d),
      'location.html': () => buildGeneralLocationHtml(d),
    },
  };

  const selected = builders[tpl] || builders.pilates;
  const pages = {};
  for (const [name, builder] of Object.entries(selected)) {
    pages[name] = builder();
  }
  pages['admin.html'] = buildAdminHtml(d);

  // 예약 페이지 추가 (업종별)
  const rsvBuilders = {
    pilates: () => buildPilatesReservationHtml(d),
    cafe:    () => buildCafeReservationHtml(d),
    beauty:  () => buildBeautyReservationHtml(d),
    medical: () => buildMedicalReservationHtml(d),
    academy: () => buildAcademyReservationHtml(d),
    general: () => buildGeneralReservationHtml(d),
  };
  if (rsvBuilders[tpl]) pages['reservation.html'] = rsvBuilders[tpl]();
  return pages;
}

// ── ZIP 생성 ──
async function generateSiteZip() {
  const name = sgV('sgName');
  if (!name) { showToast('⚠️ 업체명을 입력하세요.', 'error'); return; }
  if (!validateRequired()) return;

  if (typeof JSZip === 'undefined') {
    showToast('⚠️ JSZip 로딩 중... 잠시 후 다시 시도하세요.', 'error');
    return;
  }

  const prog = document.getElementById('sgProgress');
  const setP = p => { prog.style.width = p + '%'; };
  setP(5);

  const tpl = sgV('sgTemplate') || 'pilates';
  const d = buildSgDataObj();

  const zip = new JSZip();
  const files = [];

  setP(15);
  const pages = buildAllPages(tpl, d);
  let p = 20;
  const step = 70 / Object.keys(pages).length;

  for (const [filename, html] of Object.entries(pages)) {
    zip.file(filename, html);
    files.push({ name: filename, size: html.length });
    setP(p += step);
  }

  setP(90);

  const zipName = name.replace(/\s+/g, '_') + '_site.zip';
  const blob = await zip.generateAsync({ type: 'blob' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = zipName;
  a.click();
  URL.revokeObjectURL(a.href);

  setP(100);

  // 결과 표시
  document.getElementById('sgFileList').innerHTML = files.map(f =>
    `<div style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--bg3);border:1px solid var(--border);margin-bottom:2px">
      <span style="color:var(--green)">✅</span>
      <span style="font-family:monospace;font-size:13px;flex:1">${f.name}</span>
      <span style="font-size:11px;color:var(--text3)">${Math.round(f.size/1024)}KB</span>
    </div>`
  ).join('');
  document.getElementById('sgResultWrap').style.display = 'block';
  showToast('🚀 ' + zipName + ' 생성 완료!', 'success');
}

// ── admin.html 생성 ──
function buildAdminHtml(d) {
  const tpl = d.industry || 'general';
  const adminBuilders = {
    pilates: buildPilatesAdminHtml,
    cafe:    buildCafeAdminHtml,
    beauty:  buildBeautyAdminHtml,
    medical: buildMedicalAdminHtml,
    academy: buildAcademyAdminHtml,
    general: buildGeneralAdminHtml,
  };
  const builder = adminBuilders[tpl] || buildGeneralAdminHtml;
  return builder(d);
}

// ── 업체 목록 셀렉트 채우기 ──
function populateClientSelect() {
  const sel = document.getElementById('sgClientSelect');
  if (!sel) return;
  const clients = loadClients();
  sel.innerHTML = '<option value="">— 업체 선택 시 정보 자동 입력 —</option>' +
    clients.map(c =>
      `<option value="${c.id}">${c.name}${c.owner ? ' (' + c.owner + ')' : ''}</option>`
    ).join('');
}

// ── 페이지 로드 ──
document.addEventListener('DOMContentLoaded', () => {
  populateClientSelect();
  updateAiBadge();
});

// ── 자동 배포 ──
async function deployToCloudflare() {
  const name = sgV('sgName');
  if (!name) { showToast('⚠️ 업체명을 입력하세요.', 'error'); return; }
  if (!validateRequired()) return;

  if (typeof JSZip === 'undefined') { showToast('⚠️ JSZip 로딩 중...', 'error'); return; }

  const tpl = sgV('sgTemplate') || 'pilates';
  const d = buildSgDataObj();
  const pages = buildAllPages(tpl, d);

  // 프로젝트명 생성 — URL 입력값 우선, 없으면 타임스탬프 기반으로 생성
  const urlVal = sgV('sgUrl')
    .trim()
    .replace(/^https?:\/\//i, '')
    .replace(/\.pages\.dev.*/i, '')
    .replace(/\.workers\.dev.*/i, '')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '')
    .substring(0, 28);
  const projectName = urlVal || ('kcci-' + Date.now().toString(36).slice(-6));

  const btn = document.getElementById('deployBtn');
  const statusEl = document.getElementById('deployStatus');
  if (btn) { btn.disabled = true; btn.textContent = '🚀 배포 중...'; }
  if (statusEl) statusEl.innerHTML = '';

  const setStatus = (msg, color) => {
    if (statusEl) statusEl.innerHTML = `<span style="color:${color||'var(--text2)'}">${msg}</span>`;
  };

  try {
    setStatus('📦 파일 준비 중...', 'var(--text2)');

    // HTML 압축 (공백/주석 제거)
    function minifyHtml(html) {
      return html
        .replace(/<!--[\s\S]*?-->/g, '')
        .replace(/\n\s*\n/g, '\n')
        .replace(/  +/g, ' ')
        .trim();
    }

    // 파일 객체 생성 — 문자열 그대로 전송 (deploy.js에서 인코딩)
    const files = {};
    for (const [filename, html] of Object.entries(pages)) {
      files[filename] = filename.endsWith('.html') ? minifyHtml(html) : html;
    }

    setStatus('🌐 Cloudflare Workers에 배포 중...', 'var(--amber)');

    // 파일을 UTF-8 → base64 변환
    function utf8ToBase64(str) {
      const bytes = new TextEncoder().encode(str);
      let binary = '';
      for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
      return btoa(binary);
    }

    // 모든 파일을 한 번에 전송
    const filesBase64 = {};
    for (const [filename, content] of Object.entries(files)) {
      filesBase64[filename] = utf8ToBase64(content);
    }

    const deployRes = await fetch('/api/deploy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ projectName, filesBase64 }),
    });

    const deployText = await deployRes.text();
    if (!deployText) throw new Error('응답이 없습니다.');
    const deployData = JSON.parse(deployText);
    if (!deployRes.ok || deployData.error) throw new Error(deployData.error || '배포 실패');

    setStatus('✅ 배포 완료!', 'var(--green)');

    const cfUrl = deployData.url || ('https://' + projectName + '.smallbiz.workers.dev');

    // 업체 목록에 URL 자동 저장
    const clients = loadClients();
    const clientId = document.getElementById('sgClientSelect')?.value;
    if (clientId) {
      const idx = clients.findIndex(c => c.id === clientId);
      if (idx !== -1) {
        clients[idx].url = cfUrl;
        saveClients(clients);
      }
    }

    setStatus(`✅ 배포 완료!<br><a href="${cfUrl}" target="_blank" style="color:var(--gold);font-weight:600">${cfUrl}</a>`, 'var(--green)');
    showToast('🚀 GitHub 업로드 완료!', 'success');

    // 결과 표시
    document.getElementById('sgResultWrap').style.display = 'block';

  } catch(e) {
    setStatus('❌ 배포 실패: ' + e.message, 'var(--red)');
    showToast('❌ 배포 실패: ' + e.message, 'error');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = '🌐 Cloudflare 자동 배포'; }
  }
}

// ── 이미지 업로드 (Supabase Storage) ──
const SB_URL = 'https://vugtupipbpfundipgcqc.supabase.co';
const SB_KEY = 'sb_publishable_tJhW52aAlbyM_0A5_J-yqA_OTIIhV-S';
const SB_BUCKET = 'site-images';

async function uploadToSb(file) {
  const ext = file.name.split('.').pop().toLowerCase() || 'jpg';
  const fileName = Date.now() + '_' + Math.random().toString(36).substr(2,6) + '.' + ext;
  const res = await fetch(SB_URL + '/storage/v1/object/' + SB_BUCKET + '/' + fileName, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + SB_KEY,
      'Content-Type': file.type || 'image/jpeg',
      'x-upsert': 'true',
    },
    body: file,
  });
  if (!res.ok) throw new Error('업로드 실패: ' + res.status);
  return SB_URL + '/storage/v1/object/public/' + SB_BUCKET + '/' + fileName;
}

// 단일 이미지 업로드 → 해당 input에 URL 자동 입력
async function uploadSgImg(input, fieldId) {
  const file = input.files[0];
  if (!file) return;

  const el = document.getElementById(fieldId);
  const preview = document.getElementById(fieldId + '_preview');
  const previewImg = document.getElementById(fieldId + '_previewImg');

  if (el) el.value = '⏳ 업로드 중...';

  try {
    const url = await uploadToSb(file);
    if (el) el.value = url;

    // 미리보기 표시
    if (preview && previewImg) {
      previewImg.src = url;
      preview.style.display = 'block';
    }
    showToast('✅ 업로드 완료!', 'success');
  } catch(e) {
    if (el) el.value = '';
    showToast('❌ 업로드 실패: ' + e.message, 'error');
  }
  input.value = '';
}

// 갤러리 다중 이미지 업로드
let sgGalleryItems = [];

async function uploadSgGallery(input) {
  const files = Array.from(input.files);
  if (!files.length) return;

  const max = 12;
  if (sgGalleryItems.length >= max) {
    showToast('갤러리는 최대 ' + max + '장까지 가능합니다.', 'error');
    return;
  }

  const remaining = max - sgGalleryItems.length;
  const toUpload = files.slice(0, remaining);

  showToast('🖼 ' + toUpload.length + '장 업로드 중...');

  let done = 0;
  for (const file of toUpload) {
    try {
      const url = await uploadToSb(file);
      sgGalleryItems.push({ url, caption: file.name.replace(/\.[^.]+$/, '') });
      done++;
      renderSgGallery();
      showToast('✅ ' + done + '/' + toUpload.length + ' 업로드 완료');
    } catch(e) {
      showToast('❌ ' + file.name + ' 실패', 'error');
    }
  }

  // hidden input에 URL 배열 저장
  const urlsEl = document.getElementById('sgGalleryUrls');
  if (urlsEl) urlsEl.value = JSON.stringify(sgGalleryItems.map(i => i.url));

  input.value = '';
}

function renderSgGallery() {
  const grid = document.getElementById('sgGalleryGrid');
  if (!grid) return;
  grid.innerHTML = sgGalleryItems.map((item, i) =>
    `<div style="position:relative;aspect-ratio:1;overflow:hidden;border-radius:4px;border:1px solid var(--border)">
      <img src="${item.url}" style="width:100%;height:100%;object-fit:cover">
      <button onclick="removeSgGalleryItem(${i})" style="position:absolute;top:4px;right:4px;background:rgba(0,0,0,.7);border:none;color:#fff;font-size:12px;width:20px;height:20px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0">✕</button>
    </div>`
  ).join('');
}

function removeSgGalleryItem(i) {
  sgGalleryItems.splice(i, 1);
  renderSgGallery();
  const urlsEl = document.getElementById('sgGalleryUrls');
  if (urlsEl) urlsEl.value = JSON.stringify(sgGalleryItems.map(item => item.url));
}

// ── 폰트 크기 CSS 변수 생성 (모든 템플릿 공통) ──
function buildFontSizeCss(d) {
  return `:root {
  --fs-hero:    ${d.fsHero    || 68}px;
  --fs-section: ${d.fsSection || 36}px;
  --fs-card:    ${d.fsCard    || 22}px;
  --fs-body:    ${d.fsBody    || 15}px;
  --fs-nav:     ${d.fsNav     || 13}px;
  --fs-review:  ${d.fsReview  || 15}px;
  --fs-footer:  ${d.fsFooter  || 13}px;
}`;
}

// ── 필수 항목 유효성 검사 ──
function validateRequired() {
  const required = [
    { id: 'sgName',    label: '업체명' },
    { id: 'sgPhone',   label: '전화번호' },
    { id: 'sgAddress', label: '주소' },
    { id: 'sgH1Title', label: '히어로 제목 1' },
    { id: 'sgH2Title', label: '히어로 제목 2' },
    { id: 'sgH3Title', label: '히어로 제목 3' },
    { id: 'sgP1Name',  label: '프로그램/메뉴 이름 1' },
    { id: 'sgP2Name',  label: '프로그램/메뉴 이름 2' },
    { id: 'sgP3Name',  label: '프로그램/메뉴 이름 3' },
  ];

  const empty = required.filter(f => !sgV(f.id));

  if (empty.length > 0) {
    const labels = empty.map(f => f.label).join(', ');
    showToast('⚠️ 필수 항목을 입력하세요: ' + labels, 'error');

    // 첫 번째 빈 항목으로 스크롤 + 강조
    const firstEl = document.getElementById(empty[0].id);
    if (firstEl) {
      firstEl.style.borderColor = 'var(--red)';
      firstEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstEl.focus();
      // 3초 후 원래 색상 복구
      setTimeout(() => { firstEl.style.borderColor = ''; }, 3000);
    }
    return false;
  }
  return true;
}
