export interface NavChild {
  label: string;
  href: string;
}

/** 드롭다운 내 소제목 그룹 (예: 지역안내의 서울/경기·인천/부산) */
export interface NavGroup {
  label: string;
  children: NavChild[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
  /** 그룹형 드롭다운 (children보다 우선해 렌더) */
  groups?: NavGroup[];
}

export const mainNav: NavItem[] = [
  { label: "홈", href: "/" },
  {
    label: "서비스",
    href: "/services",
    children: [
      { label: "아로마 릴렉스 케어", href: "/services/aroma-relax-care" },
      { label: "스포츠 근육 케어", href: "/services/sports-muscle-care" },
      { label: "오피스 피로 케어", href: "/services/office-fatigue-care" },
      { label: "커플·가족 방문 케어", href: "/services/family-couple-care" },
      { label: "서비스 비교표", href: "/services#compare" },
    ],
  },
  {
    label: "이용안내",
    href: "/pricing",
    children: [
      { label: "예약 방법", href: "/booking" },
      { label: "요금 안내", href: "/pricing" },
      { label: "방문 가능 지역", href: "/areas" },
      { label: "준비사항", href: "/faq#preparation" },
      { label: "자주 묻는 질문", href: "/faq" },
    ],
  },
  {
    label: "지역안내",
    href: "/areas",
    children: [{ label: "전체 지역 보기", href: "/areas" }],
    groups: [
      {
        label: "서울",
        children: [
          { label: "강남 출장마사지", href: "/areas/gangnam" },
          { label: "송파 출장마사지", href: "/areas/songpa" },
          { label: "마포 출장마사지", href: "/areas/mapo" },
        ],
      },
      {
        label: "경기·인천",
        children: [
          { label: "수원 출장마사지", href: "/areas/suwon" },
          { label: "용인 출장마사지", href: "/areas/yongin" },
          { label: "성남 출장마사지", href: "/areas/seongnam" },
          { label: "인천 출장마사지", href: "/areas/incheon" },
        ],
      },
      {
        label: "부산",
        children: [{ label: "부산 출장마사지", href: "/areas/busan" }],
      },
    ],
  },
  {
    label: "신뢰센터",
    href: "/about",
    children: [
      { label: "회사 소개", href: "/about" },
      { label: "테라피스트 검증 기준", href: "/trust/therapist-standards" },
      { label: "위생·안전 정책", href: "/trust/safety-hygiene" },
      { label: "고객 후기", href: "/reviews" },
      { label: "환불·취소 정책", href: "/pricing#refund" },
    ],
  },
  {
    label: "웰니스 가이드",
    href: "/wellness-guide",
    children: [
      { label: "전체 글 보기", href: "/wellness-guide" },
      { label: "편집 정책", href: "/editorial-policy" },
    ],
  },
  {
    label: "고객지원",
    href: "/contact",
    children: [
      { label: "문의하기", href: "/contact" },
      { label: "개인정보처리방침", href: "/privacy" },
      { label: "이용약관", href: "/terms" },
      { label: "편집 정책", href: "/editorial-policy" },
    ],
  },
];
