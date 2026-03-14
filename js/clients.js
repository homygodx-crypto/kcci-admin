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

  tbody.innerHTML = list.map(c => {
    const hasUrl = c.url && c.url.trim();
    const siteUrl = hasUrl ? (c.url.startsWith('http') ? c.url : 'https://'+c.url) : '';
    const commentCount = (c.comments||[]).length;
    return `<tr>
      <td>
        <strong style="font-size:13px">${c.name || '-'}</strong>
        ${commentCount > 0 ? `<span style="margin-left:6px;font-size:10px;color:var(--gold);background:rgba(201,160,64,0.1);padding:1px 6px;border-radius:10px">💬${commentCount}</span>` : ''}
      </td>
      <td style="color:var(--text2)">${c.owner || '-'}</td>
      <td style="color:var(--text2)">${c.phone || '-'}</td>
      <td>${c.industry || '-'}</td>
      <td>${statusBadge(c.status || 'active')}</td>
      <td>${dday(c.expiry)}</td>
      <td>
        ${hasUrl
          ? `<a href="${siteUrl}" target="_blank" style="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:var(--gold);text-decoration:none;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${siteUrl}">🌐 ${c.url.replace(/^https?:\/\//,'')}</a>`
          : `<span style="font-size:11px;color:var(--text3)">미배포</span>`
        }
      </td>
      <td>
        <div style="display:flex;gap:4px;flex-wrap:wrap">
          <button class="btn btn-ghost" style="padding:4px 8px;font-size:11px" onclick="openEdit('${c.id}')">수정</button>
          <button class="btn btn-ghost" style="padding:4px 8px;font-size:11px" onclick="openCommentModal('${c.id}')" title="코멘트">💬</button>
          <button class="btn btn-ghost" style="padding:4px 8px;font-size:11px" onclick="openDomainModal('${c.id}')" title="도메인 변경">🔗</button>
          ${hasUrl ? `<button class="btn btn-danger" style="padding:4px 8px;font-size:11px" onclick="deleteSite('${c.id}')" title="홈페이지 삭제">🗑</button>` : ''}
          <button class="btn btn-danger" style="padding:4px 8px;font-size:11px" onclick="deleteClient('${c.id}')">삭제</button>
        </div>
      </td>
    </tr>`;
  }).join('');
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

// ── 코멘트 모달 ──
function openCommentModal(id) {
  const client = clients.find(x => x.id === id);
  if (!client) return;
  if (!client.comments) client.comments = [];

  const existing = document.getElementById('commentModal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'commentModal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:200;display:flex;align-items:center;justify-content:center;padding:20px;box-sizing:border-box';

  const commentsHtml = client.comments.length === 0
    ? '<div style="color:var(--text3);font-size:13px;padding:20px 0;text-align:center">코멘트가 없습니다.</div>'
    : client.comments.slice().reverse().map((cm, i) => `
      <div style="border:1px solid var(--border);border-radius:4px;padding:12px 14px;margin-bottom:8px;background:var(--bg3);position:relative">
        <div style="font-size:13px;color:var(--text);white-space:pre-wrap;line-height:1.6">${cm.text}</div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px">
          <span style="font-size:11px;color:var(--text3)">${new Date(cm.createdAt).toLocaleString('ko-KR')}</span>
          <button onclick="deleteComment('${id}', ${client.comments.length - 1 - i})" style="background:none;border:none;color:var(--red);font-size:12px;cursor:pointer;padding:2px 6px">삭제</button>
        </div>
      </div>`).join('');

  modal.innerHTML = `
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:8px;width:100%;max-width:520px;max-height:85vh;display:flex;flex-direction:column">
      <div style="padding:20px 20px 16px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center">
        <h3 style="font-size:16px;color:var(--text)">💬 ${client.name} 코멘트</h3>
        <button onclick="document.getElementById('commentModal').remove()" style="background:none;border:none;color:var(--text3);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="padding:16px 20px;overflow-y:auto;flex:1">${commentsHtml}</div>
      <div style="padding:16px 20px;border-top:1px solid var(--border)">
        <textarea id="newComment" placeholder="코멘트를 입력하세요..." rows="3"
          style="width:100%;background:var(--bg3);border:1px solid var(--border);color:var(--text);padding:10px;font-size:13px;font-family:inherit;resize:vertical;border-radius:4px;box-sizing:border-box"></textarea>
        <div style="display:flex;gap:8px;margin-top:10px;justify-content:flex-end">
          <button class="btn btn-ghost" onclick="document.getElementById('commentModal').remove()">취소</button>
          <button class="btn btn-primary" onclick="addComment('${id}')">💾 저장</button>
        </div>
      </div>
    </div>`;

  document.body.appendChild(modal);
}

function addComment(id) {
  const text = document.getElementById('newComment')?.value.trim();
  if (!text) { showToast('코멘트를 입력하세요.', 'error'); return; }
  const idx = clients.findIndex(x => x.id === id);
  if (idx === -1) return;
  if (!clients[idx].comments) clients[idx].comments = [];
  clients[idx].comments.push({ text, createdAt: new Date().toISOString() });
  saveClients(clients);
  showToast('✅ 코멘트 저장 완료', 'success');
  document.getElementById('commentModal')?.remove();
  renderClients();
}

function deleteComment(clientId, commentIdx) {
  if (!confirm('이 코멘트를 삭제할까요?')) return;
  const idx = clients.findIndex(x => x.id === clientId);
  if (idx === -1) return;
  clients[idx].comments.splice(commentIdx, 1);
  saveClients(clients);
  showToast('코멘트 삭제 완료');
  document.getElementById('commentModal')?.remove();
  renderClients();
  openCommentModal(clientId);
}

// ── 도메인 변경 모달 ──
function openDomainModal(id) {
  const client = clients.find(x => x.id === id);
  if (!client) return;

  const existing = document.getElementById('domainModal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'domainModal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:200;display:flex;align-items:center;justify-content:center;padding:20px;box-sizing:border-box';
  modal.innerHTML = `
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:8px;width:100%;max-width:480px">
      <div style="padding:20px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center">
        <h3 style="font-size:16px;color:var(--text)">🔗 ${client.name} 홈페이지 URL</h3>
        <button onclick="document.getElementById('domainModal').remove()" style="background:none;border:none;color:var(--text3);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="padding:20px">
        <div style="font-size:12px;color:var(--text3);margin-bottom:10px">현재 URL: <span style="color:var(--gold)">${client.url || '미배포'}</span></div>
        <div class="fg">
          <label>새 홈페이지 URL</label>
          <input type="text" id="newDomainUrl" value="${client.url || ''}"
            placeholder="https://example.pages.dev 또는 https://도메인.com"
            style="width:100%;background:var(--bg3);border:1px solid var(--border);color:var(--text);padding:10px;font-size:13px;font-family:inherit;box-sizing:border-box">
        </div>
        <div style="font-size:12px;color:var(--text3);margin-top:8px">
          💡 Cloudflare Pages 자동 배포 후 생성된 URL 또는 연결한 커스텀 도메인을 입력하세요.
        </div>
        <div style="display:flex;gap:8px;margin-top:16px;justify-content:flex-end">
          <button class="btn btn-ghost" onclick="document.getElementById('domainModal').remove()">취소</button>
          <button class="btn btn-primary" onclick="saveDomain('${id}')">💾 저장</button>
        </div>
      </div>
    </div>`;

  document.body.appendChild(modal);
  document.getElementById('newDomainUrl')?.focus();
}

function saveDomain(id) {
  const url = document.getElementById('newDomainUrl')?.value.trim();
  const idx = clients.findIndex(x => x.id === id);
  if (idx === -1) return;
  clients[idx].url = url;
  saveClients(clients);
  showToast('✅ URL 저장 완료', 'success');
  document.getElementById('domainModal')?.remove();
  renderClients();
}

// ── 홈페이지 삭제 ──
async function deleteSite(id) {
  const client = clients.find(x => x.id === id);
  if (!client || !client.url) return;

  const siteUrl = client.url.startsWith('http') ? client.url : 'https://' + client.url;
  const projectName = siteUrl.replace(/^https?:\/\//, '').replace('.pages.dev', '').replace(/\/.*/,'').trim();

  if (!confirm(`'${client.name}' 홈페이지를 완전히 삭제할까요?\n\n- Cloudflare Pages 프로젝트 삭제\n- GitHub 파일 삭제\n- URL 초기화\n\n⚠️ 되돌릴 수 없습니다.`)) return;

  showToast('🗑 삭제 중...');

  try {
    // ① Cloudflare Pages 프로젝트 삭제
    const cfRes = await fetch('/api/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ projectName }),
    });
    const cfData = await cfRes.json();
    if (!cfRes.ok && !cfData.alreadyGone) {
      throw new Error('Cloudflare 삭제 실패: ' + (cfData.error || cfRes.status));
    }

    // ② GitHub 파일 삭제
    const ghToken = localStorage.getItem('kcci_gh_token');
    const ghRepo = localStorage.getItem('kcci_gh_repo') || 'homygodx-crypto/kcci-admin';
    if (ghToken && projectName) {
      const sitePath = 'sites/' + projectName;
      const apiBase = `https://api.github.com/repos/${ghRepo}/contents/${sitePath}`;
      const headers = {
        'Authorization': 'Bearer ' + ghToken,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      };
      // 폴더 내 파일 목록 가져오기
      try {
        const listRes = await fetch(apiBase, { headers });
        if (listRes.ok) {
          const files = await listRes.json();
          if (Array.isArray(files)) {
            for (const file of files) {
              await fetch(file.url, {
                method: 'DELETE',
                headers,
                body: JSON.stringify({ message: `Delete ${projectName} - ${file.name}`, sha: file.sha }),
              });
            }
          }
        }
      } catch(e) { console.warn('GitHub 파일 삭제 실패 (무시):', e); }
    }

    // ③ 업체 URL 초기화
    const idx = clients.findIndex(x => x.id === id);
    if (idx !== -1) {
      clients[idx].url = '';
      saveClients(clients);
    }
    renderClients();
    showToast('✅ 홈페이지 삭제 완료');

  } catch(e) {
    showToast('❌ ' + e.message, 'error');
  }
}
