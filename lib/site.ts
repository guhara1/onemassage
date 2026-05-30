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
  // 연락처
  phone: "0508-202-4743",
  phoneHref: "tel:0508-202-4743",
  email: "help@1massage.club",
  hours: "매일 10:00 ~ 02:00 (예약제 운영)",
  // 사업자 정보
  business: {
    company: "YH LAB",
    ceo: "김유환",
    registrationNumber: "815-26-00585",
    address: "경기도 파주시 청석로 268",
    addressLocality: "파주시",
    addressRegion: "경기도",
    postalCode: "10930",
    privacyOfficer: "김유환",
  },
  social: {
    instagram: "",
    blog: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
