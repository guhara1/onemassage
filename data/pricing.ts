export interface PriceTier {
  duration: string;
  price: string;
}

export interface PricingMenuItem {
  /** 카테고리 태그 (예: "DRY · 건식") */
  tag: string;
  /** 코스명 */
  name: string;
  /** 한 줄 설명 */
  description: string;
  /** 인기 코스 강조 배지 */
  best?: boolean;
  tiers: PriceTier[];
}

/**
 * 요금표 카드용 코스 메뉴.
 * 상세페이지·예약폼은 data/services.ts 를 사용하므로 이 데이터와 독립적입니다.
 */
export const pricingMenu: PricingMenuItem[] = [
  {
    tag: "DRY · 건식",
    name: "타이 건식",
    description:
      "옷을 입은 상태로 진행하는 정통 건식 케어. 깊은 압과 관절 가동 범위 확장으로 하루의 긴장을 풀어줍니다.",
    tiers: [
      { duration: "60분", price: "80,000원" },
      { duration: "90분", price: "100,000원" },
      { duration: "120분", price: "120,000원" },
    ],
  },
  {
    tag: "WET · 오일",
    name: "아로마 습식",
    description:
      "엄선한 에센셜 오일을 이용한 부드러운 오일 케어. 향과 촉감으로 편안한 휴식을 돕습니다.",
    tiers: [
      { duration: "60분", price: "90,000원" },
      { duration: "90분", price: "110,000원" },
      { duration: "120분", price: "130,000원" },
    ],
  },
  {
    tag: "SIGNATURE · 오일",
    name: "감성케어 오일",
    description:
      "강도보다 호흡에 맞춘 차분한 오일 케어. 안정적인 압으로 신경을 진정시키는 시그니처 코스입니다.",
    tiers: [
      { duration: "60분", price: "100,000원" },
      { duration: "90분", price: "120,000원" },
      { duration: "120분", price: "140,000원" },
    ],
  },
  {
    tag: "VVIP · 풀바디",
    name: "VVIP 전신케어",
    description:
      "건식과 오일을 한 코스로. 발끝부터 어깨까지 빈틈없이 이어지는 풀바디 시그니처 케어입니다.",
    best: true,
    tiers: [
      { duration: "60분", price: "110,000원" },
      { duration: "90분", price: "130,000원" },
      { duration: "120분", price: "150,000원" },
      { duration: "150분", price: "180,000원" },
    ],
  },
  {
    tag: "KOREAN · 매니저 지정",
    name: "한국인 스웨디시",
    description:
      "한국인 매니저 지정 매칭. 섬세한 강도 조절과 편안한 의사소통을 함께 약속합니다.",
    tiers: [
      { duration: "60분", price: "150,000원" },
      { duration: "90분", price: "190,000원" },
    ],
  },
  {
    tag: "MEN · 남성 전용",
    name: "남성 스웨디시",
    description:
      "남성 고객을 위한 전담 매니저 배정. 사전 통화로 컨디션과 강도를 정한 뒤 방문합니다.",
    tiers: [
      { duration: "60분", price: "100,000원" },
      { duration: "90분", price: "130,000원" },
      { duration: "120분", price: "160,000원" },
    ],
  },
];
