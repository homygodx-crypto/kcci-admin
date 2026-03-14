const ADMIN_SUPABASE_URL = 'https://vugtupipbpfundipgcqc.supabase.co';
const ADMIN_SUPABASE_KEY = 'sb_publishable_tJhW52aAlbyM_0A5_J-yqA_OTIIhV-S';
const ADMIN_BUCKET = 'site-images';

function buildAdminHtml_common(d) {
  const nm  = d.name    || 'SITE';
  const aid = d.adminId || 'admin';
  const apw = d.adminPw || '1234';
  const sid = (d.url || d.name || 'site').replace(/[^a-z0-9]/gi,'_').toLowerCase();
  const ind = d.industry || 'general';
  const PF  = {
    pilates: ['index.html','program.html','gallery.html','location.html','reservation.html'],
    cafe:    ['index.html','menu.html','gallery.html','location.html','reservation.html'],
    beauty:  ['index.html','service.html','gallery.html','location.html','reservation.html'],
    medical: ['index.html','treatment.html','gallery.html','location.html','reservation.html'],
    academy: ['index.html','course.html','gallery.html','location.html','reservation.html'],
    general: ['index.html','product.html','gallery.html','location.html','reservation.html'],
  };
  const pf = PF[ind] || PF.general;
  const SD = JSON.stringify({
    name:nm, phone:d.phone||'', address:d.address||'',
    openHours:d.openHours||'', parking:d.parking||'', slogan:d.slogan||'',
    industry:ind, nameEn:d.nameEn||'', placeId:d.placeId||'',
    blog:d.blog||'', insta:d.insta||'', adminId:aid, adminPw:apw,
    masterDomain:'https://kcci-admin.pages.dev', pageFiles:pf,
    _origName:nm, _origPhone:d.phone||'', _origAddress:d.address||'',
    _origSlogan:d.slogan||'', _origHours:d.openHours||'', _origParking:d.parking||'',
  });

  const jAID = JSON.stringify(aid);
  const jAPW = JSON.stringify(apw);
  const jSID = JSON.stringify(sid);
  const jSBU = JSON.stringify('https://vugtupipbpfundipgcqc.supabase.co');
  const jSBK = JSON.stringify('sb_publishable_tJhW52aAlbyM_0A5_J-yqA_OTIIhV-S');
  const jBCK = JSON.stringify('site-images');
  const esc  = function(s){ return (s||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;'); };
