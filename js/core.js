/* ============================================================
   core.js — 인증 · localStorage · Toast · 공통 유틸
   ============================================================ */

'use strict';

// ── 상수 ──
const ADMIN_ID = 'kcci';
const ADMIN_PW = 'kcci1234';
const STORAGE_KEY = 'kcci_clients';
const SESSION_KEY = 'kcci_auth';

// ── 인증 ──
function checkAuth() {
  if (sessionStorage.getItem(SESSION_KEY) !== 'ok') {
    location.href = 'index.html';
    return false;
  }
  return true;
}

function doLogin() {
  const id = document.getElementById('loginId').value.trim();
  const pw = document.getElementById('loginPw').value;
  if (id === ADMIN_ID && pw === ADMIN_PW) {
    sessionStorage.setItem(SESSION_KEY, 'ok');
    location.href = 'dashboard.html';
  } else {
    const err = document.getElementById('loginErr');
    if (err) err.style.display = 'block';
    document.getElementById('loginPw').value = '';
  }
}

function logout() {
  sessionStorage.removeItem(SESSION_KEY);
  location.href = 'index.html';
}

// Enter키 로그인
document.addEventListener('DOMContentLoaded', () => {
  const pw = document.getElementById('loginPw');
  const id = document.getElementById('loginId');
  if (pw) pw.addEventListener('keydown', e => e.key === 'Enter' && doLogin());
  if (id) id.addEventListener('keydown', e => e.key === 'Enter' && doLogin());
});

// ── localStorage (업체 데이터) ──
function loadClients() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
  catch { return []; }
}

function saveClients(clients) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(clients));
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

// ── Toast ──
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = 'show' + (type ? ' ' + type : '');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.className = ''; }, 3500);
}

// ── 사이드바 활성 링크 ──
function initSidebar() {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sb-item[href]').forEach(el => {
    if (el.getAttribute('href') === current) el.classList.add('active');
  });
}

// ── 날짜 유틸 ──
function dday(expiry) {
  if (!expiry) return '';
  const diff = Math.ceil((new Date(expiry) - new Date()) / 86400000);
  if (diff < 0) return '<span class="badge badge-red">만료</span>';
  if (diff <= 7) return `<span class="badge badge-warn">D-${diff}</span>`;
  return `<span class="badge badge-on">D-${diff}</span>`;
}

function statusBadge(s) {
  const map = {
    active: ['badge-on', '계약중'],
    expiring: ['badge-warn', '만료임박'],
    expired: ['badge-red', '만료'],
    pending: ['badge-off', '대기'],
  };
  const [cls, label] = map[s] || ['badge-off', s];
  return `<span class="badge ${cls}">${label}</span>`;
}

// ── API 설정 ──
function getApiKey() { return localStorage.getItem('kcci_api_key') || ''; }
function getWorkerUrl() { return localStorage.getItem('kcci_worker_url') || ''; }
function saveApiKey(key) { localStorage.setItem('kcci_api_key', key.trim()); }
function saveWorkerUrl(url) { localStorage.setItem('kcci_worker_url', url.trim()); }

// ── 모달 외부 클릭 닫기 ──
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.modal-bg').forEach(bg => {
    bg.addEventListener('click', e => { if (e.target === bg) bg.classList.remove('open'); });
  });
  initSidebar();
});
