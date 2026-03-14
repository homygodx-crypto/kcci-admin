/* ============================================================
   clients.js — 업체 관리 (CRUD, 검색, 필터)
   ============================================================ */

'use strict';

let clients = loadClients();
let editId = null;
let filterStatus = 'all';
let searchQuery = '';

// ── 렌더링 ──
function renderClients() {
  let list = clients.slice();

  // 검색
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(c =>
      (c.name||'').toLowerCase().includes(q) ||
      (c.owner||'').toLowerCase().includes(q) ||
      (c.phone||'').toLowerCase().includes(q)
    );
  }

  // 필터
  if (filterStatus !== 'all') {
    list = list.filter(c => c.status === filterStatus);
  }

  const tbody = document.getElementById('clientTbody');
  if (!tbody) return;

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:40px;color:var(--text3)">
      ${searchQuery || filterStatus !== 'all' ? '검색 결과가 없습니다.' : '등록된 업체가 없습니다.'}
    </td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(c => `
    <tr>
      <td><strong style="font-size:13px">${c.name || '-'}</strong></td>
      <td style="color:var(--text2)">${c.owner || '-'}</td>
      <td style="color:var(--text2)">${c.phone || '-'}</td>
      <td>${c.industry || '-'}</td>
      <td>${statusBadge(c.status || 'active')}</td>
      <td>${dday(c.expiry)}</td>
      <td>
        <div style="display:flex;gap:6px">
          <button class="btn btn-ghost" style="padding:5px 10px;font-size:12px" onclick="openEdit('${c.id}')">수정</button>
          <button class="btn btn-danger" style="padding:5px 10px;font-size:12px" onclick="deleteClient('${c.id}')">삭제</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function renderDashboard() {
  const total = clients.length;
  const active = clients.filter(c => c.status === 'active').length;
  const expiring = clients.filter(c => {
    if (!c.expiry) return false;
    const diff = Math.ceil((new Date(c.expiry) - new Date()) / 86400000);
    return diff >= 0 && diff <= 7;
  }).length;
  const expired = clients.filter(c => c.status === 'expired').length;

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('statTotal', total);
  set('statActive', active);
  set('statExpiring', expiring);
  set('statExpired', expired);

  // 최근 업체 5개
  const recent = document.getElementById('recentList');
  if (recent) {
    const list = clients.slice(-5).reverse();
    recent.innerHTML = list.length === 0
      ? '<tr><td colspan="4" style="text-align:center;padding:24px;color:var(--text3)">등록된 업체 없음</td></tr>'
      : list.map(c => `
        <tr>
          <td><strong>${c.name || '-'}</strong></td>
          <td style="color:var(--text2)">${c.industry || '-'}</td>
          <td>${statusBadge(c.status || 'active')}</td>
          <td>${dday(c.expiry)}</td>
        </tr>
      `).join('');
  }
}

// ── 검색 / 필터 ──
function filterClients(q) {
  searchQuery = q;
  renderClients();
}

function setFilter(f, el) {
  filterStatus = f;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  renderClients();
}

// ── 모달 ──
function openAdd() {
  editId = null;
  document.getElementById('modalTitle').textContent = '업체 추가';
  clearForm();
  document.getElementById('clientModal').classList.add('open');
}

function openEdit(id) {
  const c = clients.find(x => x.id === id);
  if (!c) return;
  editId = id;
  document.getElementById('modalTitle').textContent = '업체 수정';
  fillForm(c);
  document.getElementById('clientModal').classList.add('open');
}

function closeClientModal() {
  document.getElementById('clientModal').classList.remove('open');
  editId = null;
}

function clearForm() {
  ['fName','fOwner','fPhone','fAddress','fUrl','fPlaceId','fBlog','fInsta',
   'fCloudName','fUploadPreset','fExpiry','fNote'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const fStatus = document.getElementById('fStatus');
  const fIndustry = document.getElementById('fIndustry');
  if (fStatus) fStatus.value = 'active';
  if (fIndustry) fIndustry.value = 'pilates';
}

function fillForm(c) {
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
  set('fName', c.name); set('fOwner', c.owner); set('fPhone', c.phone);
  set('fAddress', c.address); set('fUrl', c.url); set('fPlaceId', c.placeId);
  set('fBlog', c.blog); set('fInsta', c.insta);
  set('fCloudName', c.cloudName); set('fUploadPreset', c.uploadPreset);
  set('fExpiry', c.expiry); set('fNote', c.note);
  const fStatus = document.getElementById('fStatus');
  const fIndustry = document.getElementById('fIndustry');
  if (fStatus) fStatus.value = c.status || 'active';
  if (fIndustry) fIndustry.value = c.industry || 'pilates';
}

function saveClient() {
  const g = id => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
  const name = g('fName');
  if (!name) { showToast('업체명을 입력하세요.', 'error'); return; }

  const data = {
    name, owner: g('fOwner'), phone: g('fPhone'), address: g('fAddress'),
    url: g('fUrl'), placeId: g('fPlaceId'), blog: g('fBlog'), insta: g('fInsta'),
    cloudName: g('fCloudName'), uploadPreset: g('fUploadPreset'),
    expiry: g('fExpiry'), note: g('fNote'),
    status: document.getElementById('fStatus')?.value || 'active',
    industry: document.getElementById('fIndustry')?.value || 'pilates',
  };

  if (editId) {
    const idx = clients.findIndex(x => x.id === editId);
    if (idx !== -1) clients[idx] = { ...clients[idx], ...data };
    showToast('✅ 업체 정보 수정 완료', 'success');
  } else {
    data.id = uid();
    data.createdAt = new Date().toISOString();
    clients.push(data);
    showToast('✅ 업체 추가 완료', 'success');
  }

  saveClients(clients);
  closeClientModal();
  renderClients();
  renderDashboard();
}

function deleteClient(id) {
  const c = clients.find(x => x.id === id);
  if (!c) return;
  if (!confirm(`'${c.name}' 를 삭제할까요?`)) return;
  clients = clients.filter(x => x.id !== id);
  saveClients(clients);
  renderClients();
  renderDashboard();
  showToast('삭제되었습니다.');
}

// ── 내보내기 / 불러오기 ──
function exportData() {
  const json = JSON.stringify({ version: 2, exportedAt: new Date().toISOString(), clients }, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `kcci_backup_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
  showToast('✅ 백업 파일 저장 완료', 'success');
}

function importData(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.clients || !Array.isArray(data.clients)) throw new Error('잘못된 형식');
      clients = data.clients;
      saveClients(clients);
      renderClients();
      renderDashboard();
      showToast(`✅ ${clients.length}개 업체 불러오기 완료`, 'success');
    } catch {
      showToast('올바른 백업 파일이 아닙니다.', 'error');
    }
  };
  reader.readAsText(file);
  input.value = '';
}

function clearAllData() {
  if (!confirm('모든 업체 데이터를 삭제합니다. 되돌릴 수 없습니다.')) return;
  clients = [];
  saveClients(clients);
  renderClients();
  renderDashboard();
  showToast('전체 데이터가 삭제되었습니다.');
}
