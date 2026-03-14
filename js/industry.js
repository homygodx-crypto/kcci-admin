/* ============================================================
   industry.js — 업종별 필드 스키마 정의
   ============================================================ */

'use strict';

const INDUSTRY_SCHEMA = {

  pilates: {
    label: '🧘 필라테스 / 요가',
    sections: ['hero', 'program', 'instructor', 'hours'],
    programLabel: '프로그램',
    staffLabel: '강사',
    subPage: 'program.html',
    aiFields1: {
      name: '업체명', nameEn: '영문대문자', owner: '대표원장 이름+직책',
      phone: '전화번호', address: '주소', slogan: '슬로건(15자이내)',
      h1Title: '히어로제목1(|로줄바꿈)', h2Title: '히어로제목2', h3Title: '히어로제목3',
      p1Tag: 'PROGRAM TAG(영문)', p1Name: '프로그램명', p1Desc: '한줄설명', p1Detail: '상세2문장',
      p2Tag: 'PROGRAM TAG', p2Name: '프로그램명', p2Desc: '한줄설명', p2Detail: '상세2문장',
      p3Tag: 'PROGRAM TAG', p3Name: '프로그램명', p3Desc: '한줄설명', p3Detail: '상세2문장',
    },
    aiFields2: {
      i1Role: '강사직책(영문대문자)', i1Name: '강사이름+직책', i1Cert: '자격증목록(줄바꿈구분)',
      i2Role: '강사직책', i2Name: '강사이름+직책', i2Cert: '자격증목록',
      openHours: '운영시간', parking: '주차안내',
      review1: '수강생후기(30자이내)', review2: '수강생후기', review3: '수강생후기',
    },
    formSections: {
      sub: { title: '프로그램 (최대 3개)', tags: ['1:1 프라이빗', '소그룹 레슨', '키즈 수업'] },
      staff: { title: '강사 프로필', roles: ['DIRECTOR', 'MANAGER'], certLabel: '자격증 (줄바꿈)' },
      extra: [
        { id: 'openHours', label: '운영시간', placeholder: '평일 10:00 – 20:00' },
        { id: 'parking', label: '주차', placeholder: '전용 주차 가능' },
      ],
      reviews: { label: '수강생 후기', who: '수강생' },
    },
  },

  cafe: {
    label: '☕ 카페 / 음식점',
    sections: ['hero', 'menu', 'hours', 'reviews'],
    programLabel: '대표 메뉴',
    staffLabel: null,
    subPage: 'menu.html',
    aiFields1: {
      name: '업체명', nameEn: '영문대문자', owner: '대표자이름+직책',
      phone: '전화번호', address: '주소', slogan: '슬로건(15자이내)',
      h1Title: '히어로제목1(|로줄바꿈)', h2Title: '히어로제목2', h3Title: '히어로제목3',
      p1Tag: 'MENU CATEGORY(영문)', p1Name: '대표메뉴명1', p1Desc: '가격또는설명', p1Detail: '메뉴상세설명',
      p2Tag: 'MENU CATEGORY', p2Name: '대표메뉴명2', p2Desc: '가격또는설명', p2Detail: '메뉴상세설명',
      p3Tag: 'MENU CATEGORY', p3Name: '대표메뉴명3', p3Desc: '가격또는설명', p3Detail: '메뉴상세설명',
    },
    aiFields2: {
      openHours: '영업시간(예:매일 09:00-21:00)', lastOrder: '라스트오더', parking: '주차안내',
      review1: '방문고객후기(30자이내)', review2: '방문고객후기', review3: '방문고객후기',
    },
    formSections: {
      sub: { title: '대표 메뉴 (최대 3개)', tags: ['시그니처', '커피', '브런치'] },
      staff: null,
      extra: [
        { id: 'openHours', label: '영업시간', placeholder: '매일 09:00 – 21:00' },
        { id: 'lastOrder', label: '라스트오더', placeholder: '마감 30분 전' },
        { id: 'parking', label: '주차', placeholder: '건물 내 주차 가능' },
      ],
      reviews: { label: '방문 고객 후기', who: '네이버 방문자' },
    },
  },

  beauty: {
    label: '💄 미용 / 뷰티',
    sections: ['hero', 'service', 'stylist', 'hours'],
    programLabel: '시술 메뉴',
    staffLabel: '스타일리스트',
    subPage: 'service.html',
    aiFields1: {
      name: '업체명', nameEn: '영문대문자', owner: '원장이름+직책',
      phone: '전화번호', address: '주소', slogan: '슬로건(15자이내)',
      h1Title: '히어로제목1(|로줄바꿈)', h2Title: '히어로제목2', h3Title: '히어로제목3',
      p1Tag: 'SERVICE TAG(영문)', p1Name: '시술메뉴1', p1Desc: '가격또는설명', p1Detail: '시술상세',
      p2Tag: 'SERVICE TAG', p2Name: '시술메뉴2', p2Desc: '가격또는설명', p2Detail: '시술상세',
      p3Tag: 'SERVICE TAG', p3Name: '시술메뉴3', p3Desc: '가격또는설명', p3Detail: '시술상세',
    },
    aiFields2: {
      i1Role: '디자이너직책(영문)', i1Name: '디자이너이름+직책', i1Cert: '경력및자격(줄바꿈)',
      i2Role: '디자이너직책', i2Name: '디자이너이름+직책', i2Cert: '경력및자격',
      openHours: '영업시간', parking: '주차안내',
      review1: '고객후기(30자이내)', review2: '고객후기', review3: '고객후기',
    },
    formSections: {
      sub: { title: '시술 메뉴 (최대 3개)', tags: ['컷', '펌', '염색'] },
      staff: { title: '스타일리스트', roles: ['DIRECTOR', 'DESIGNER'], certLabel: '경력 / 자격' },
      extra: [
        { id: 'openHours', label: '영업시간', placeholder: '화-일 10:00 – 20:00 (월 휴무)' },
        { id: 'parking', label: '주차', placeholder: '건물 내 주차 가능' },
      ],
      reviews: { label: '고객 후기', who: '네이버 방문자' },
    },
  },

  medical: {
    label: '🏥 한의원 / 의원',
    sections: ['hero', 'treatment', 'doctor', 'hours'],
    programLabel: '진료 과목',
    staffLabel: '의료진',
    subPage: 'treatment.html',
    aiFields1: {
      name: '업체명', nameEn: '영문대문자', owner: '원장이름+직책',
      phone: '전화번호', address: '주소', slogan: '슬로건(15자이내)',
      h1Title: '히어로제목1(|로줄바꿈)', h2Title: '히어로제목2', h3Title: '히어로제목3',
      p1Tag: 'TREATMENT(영문)', p1Name: '진료과목1', p1Desc: '한줄설명', p1Detail: '진료상세',
      p2Tag: 'TREATMENT', p2Name: '진료과목2', p2Desc: '한줄설명', p2Detail: '진료상세',
      p3Tag: 'TREATMENT', p3Name: '진료과목3', p3Desc: '한줄설명', p3Detail: '진료상세',
    },
    aiFields2: {
      i1Role: '의사직책(영문)', i1Name: '의사이름+직책', i1Cert: '전문의자격및학력(줄바꿈)',
      i2Role: '의사직책', i2Name: '의사이름+직책', i2Cert: '자격및학력',
      openHours: '진료시간(평일/토/일)', parking: '주차안내',
      review1: '환자후기(30자이내)', review2: '환자후기', review3: '환자후기',
    },
    formSections: {
      sub: { title: '진료 과목 (최대 3개)', tags: ['침구', '추나', '한약'] },
      staff: { title: '의료진 소개', roles: ['DIRECTOR', 'DOCTOR'], certLabel: '전문의 자격 / 학력' },
      extra: [
        { id: 'openHours', label: '진료시간', placeholder: '평일 09:00-18:00 / 토 09:00-13:00' },
        { id: 'parking', label: '주차', placeholder: '전용 주차 가능' },
      ],
      reviews: { label: '환자 후기', who: '네이버 방문자' },
    },
  },

  academy: {
    label: '📚 학원 / 교육',
    sections: ['hero', 'course', 'teacher', 'hours'],
    programLabel: '수업 과정',
    staffLabel: '강사진',
    subPage: 'course.html',
    aiFields1: {
      name: '업체명', nameEn: '영문대문자', owner: '원장이름+직책',
      phone: '전화번호', address: '주소', slogan: '슬로건(15자이내)',
      h1Title: '히어로제목1(|로줄바꿈)', h2Title: '히어로제목2', h3Title: '히어로제목3',
      p1Tag: 'COURSE TAG(영문)', p1Name: '수업과정명1', p1Desc: '대상및설명', p1Detail: '커리큘럼상세',
      p2Tag: 'COURSE TAG', p2Name: '수업과정명2', p2Desc: '대상및설명', p2Detail: '커리큘럼상세',
      p3Tag: 'COURSE TAG', p3Name: '수업과정명3', p3Desc: '대상및설명', p3Detail: '커리큘럼상세',
    },
    aiFields2: {
      i1Role: '강사직책(영문)', i1Name: '강사이름+직책', i1Cert: '자격증및경력(줄바꿈)',
      i2Role: '강사직책', i2Name: '강사이름+직책', i2Cert: '자격증및경력',
      openHours: '운영시간', parking: '주차안내',
      review1: '수강생후기(30자이내)', review2: '수강생후기', review3: '수강생후기',
    },
    formSections: {
      sub: { title: '수업 과정 (최대 3개)', tags: ['기초반', '심화반', '특별반'] },
      staff: { title: '강사진 소개', roles: ['DIRECTOR', 'TEACHER'], certLabel: '자격증 / 경력' },
      extra: [
        { id: 'openHours', label: '운영시간', placeholder: '평일 09:00 – 22:00' },
        { id: 'parking', label: '주차', placeholder: '건물 내 주차 가능' },
      ],
      reviews: { label: '수강생 후기', who: '수강생' },
    },
  },

  general: {
    label: '🏪 일반 소매업',
    sections: ['hero', 'product', 'hours', 'reviews'],
    programLabel: '상품 / 서비스',
    staffLabel: null,
    subPage: 'product.html',
    aiFields1: {
      name: '업체명', nameEn: '영문대문자', owner: '대표자이름+직책',
      phone: '전화번호', address: '주소', slogan: '슬로건(15자이내)',
      h1Title: '히어로제목1(|로줄바꿈)', h2Title: '히어로제목2', h3Title: '히어로제목3',
      p1Tag: 'PRODUCT TAG(영문)', p1Name: '상품/서비스명1', p1Desc: '한줄설명', p1Detail: '상세설명',
      p2Tag: 'PRODUCT TAG', p2Name: '상품/서비스명2', p2Desc: '한줄설명', p2Detail: '상세설명',
      p3Tag: 'PRODUCT TAG', p3Name: '상품/서비스명3', p3Desc: '한줄설명', p3Detail: '상세설명',
    },
    aiFields2: {
      openHours: '영업시간', parking: '주차안내',
      review1: '고객후기(30자이내)', review2: '고객후기', review3: '고객후기',
    },
    formSections: {
      sub: { title: '상품 / 서비스 (최대 3개)', tags: ['BEST', 'NEW', 'SPECIAL'] },
      staff: null,
      extra: [
        { id: 'openHours', label: '영업시간', placeholder: '평일 09:00 – 18:00' },
        { id: 'parking', label: '주차', placeholder: '건물 내 주차 가능' },
      ],
      reviews: { label: '고객 후기', who: '네이버 방문자' },
    },
  },
};

// 현재 선택된 업종 스키마 반환
function getSchema() {
  const tpl = document.getElementById('sgTemplate')?.value || 'pilates';
  return INDUSTRY_SCHEMA[tpl] || INDUSTRY_SCHEMA.pilates;
}
