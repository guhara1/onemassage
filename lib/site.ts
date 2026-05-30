/**
 * 사이트 전역 설정.
 * 브랜드, 연락처, 사업자 정보 등 여러 곳에서 재사용되는 값을 한곳에서 관리한다.
 */

export const siteConfig = {
  name: "원마사지",
  brand: "원마사지",
  tagline: "전문 테라피스트가 방문하는 웰니스 마사지 홈케어",
  description:
    "검증된 전문 테라피스트가 고객님의 공간으로 방문하는 합법 웰니스 마사지 서비스입니다. 요금, 지역, 위생 정책, 예약 절차를 투명하게 안내합니다.",
  // 배포 시 실제 도메인으로 교체하세요.
  url: "https://onemassage.example.com",
  locale: "ko_KR",
  // 연락처 (실제 운영 정보로 교체하세요)
  phone: "1600-0000",
  phoneHref: "tel:1600-0000",
  kakao: "https://pf.kakao.com/_onemassage",
  email: "help@onemassage.example.com",
  hours: "매일 10:00 ~ 02:00 (예약제 운영)",
  // 사업자 정보 (실제 등록 정보로 교체하세요)
  business: {
    company: "원마사지 웰니스",
    ceo: "홍길동",
    registrationNumber: "000-00-00000",
    address: "서울특별시 강남구 테헤란로 000",
    addressLocality: "서울특별시",
    addressRegion: "강남구",
    postalCode: "06000",
    privacyOfficer: "김개인",
  },
  social: {
    instagram: "",
    blog: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
