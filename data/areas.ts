export interface AreaFaq {
  question: string;
  answer: string;
}

export interface Area {
  slug: string;
  name: string;
  /** 메뉴/카드용 표기 */
  label: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  /** 지역 고유 소개 본문 */
  intro: string;
  /** 평균 도착 가능 시간 */
  arrivalTime: string;
  /** 주요 방문 가능 구역 */
  zones: string[];
  /** 주차·아파트·오피스텔 방문 유의사항 */
  buildingNotes: string[];
  /** 해당 지역에서 많이 선택하는 서비스 (service slug) */
  popularServices: string[];
  /** 지역별 출장비 안내 */
  travelFee: string;
  /** 예약 가능 시간 */
  availableHours: string;
  faqs: AreaFaq[];
  focusKeyword: string;
}

export const areas: Area[] = [
  {
    slug: "gangnam",
    name: "강남",
    label: "강남 방문 마사지",
    seoTitle: "강남 방문 마사지 | 예약제 웰니스 홈케어",
    metaDescription:
      "강남 방문 마사지 예약 안내. 강남역·역삼·선릉·삼성·논현 등 주요 생활권 방문 가능 시간, 출장비, 준비사항, 많이 선택하는 서비스를 투명하게 안내합니다.",
    h1: "강남 방문 마사지 예약 안내",
    intro:
      "강남 지역은 직장인, 출장객, 야간 업무 후 피로 관리를 원하는 고객의 예약 문의가 많은 지역입니다. 강남역, 역삼, 선릉, 삼성, 논현 등 주요 생활권을 중심으로 방문 가능 시간을 확인해 안내합니다. 이 페이지에서는 강남 지역 예약 가능 시간, 출장비, 준비사항, 많이 선택하는 서비스를 투명하게 확인할 수 있습니다.",
    arrivalTime: "예약 확인 후 평균 30~50분 내 도착 가능 (교통 상황에 따라 변동)",
    zones: ["강남역", "역삼", "선릉", "삼성", "논현", "신논현", "도곡"],
    buildingNotes: [
      "오피스텔·주상복합은 건물 출입 규정과 방문자 등록 절차를 사전 확인합니다.",
      "주차가 어려운 구역이 많아 주차비가 발생할 수 있습니다.",
      "심야 시간대 공동현관 출입 방법을 예약 시 미리 안내받으세요.",
    ],
    popularServices: ["office-fatigue-care", "aroma-relax-care", "sports-muscle-care"],
    travelFee: "강남 주요 생활권은 기본 출장 가능 구역입니다. 일부 구역은 출장비가 별도 발생할 수 있으며 예약 전 고지합니다.",
    availableHours: "운영 시간 내 예약 가능 (심야 시간은 가능 여부 확인 후 안내)",
    faqs: [
      {
        question: "강남 오피스텔도 방문 가능한가요?",
        answer:
          "건물 출입 규정과 주차 가능 여부에 따라 달라질 수 있습니다. 예약 전 상세 주소 확인 후 안내드립니다.",
      },
      {
        question: "심야 예약도 가능한가요?",
        answer:
          "운영 시간 내 가능 여부를 확인해 안내합니다. 심야 추가 비용이 있다면 예약 전 명확히 고지합니다.",
      },
      {
        question: "부적절한 요청을 하면 어떻게 되나요?",
        answer:
          "건전한 웰니스 목적 외 요청은 접수되지 않으며, 현장에서도 서비스가 중단될 수 있습니다.",
      },
    ],
    focusKeyword: "강남 방문 마사지",
  },
  {
    slug: "songpa",
    name: "송파",
    label: "송파 방문 마사지",
    seoTitle: "송파 방문 마사지 | 예약제 웰니스 홈케어",
    metaDescription:
      "송파 방문 마사지 예약 안내. 잠실·문정·가락·방이 등 주거·업무 생활권 방문 가능 시간, 출장비, 준비사항, 많이 선택하는 서비스를 투명하게 안내합니다.",
    h1: "송파 방문 마사지 예약 안내",
    intro:
      "송파 지역은 대단지 아파트와 업무 시설이 함께 있어 가족 단위 고객과 직장인 고객의 문의가 고르게 많은 지역입니다. 잠실, 문정, 가락, 방이, 석촌 등 주요 생활권을 중심으로 방문 가능 시간을 안내합니다. 대단지 아파트 방문이 많은 만큼 출입과 주차 안내를 꼼꼼히 확인합니다.",
    arrivalTime: "예약 확인 후 평균 35~55분 내 도착 가능 (교통 상황에 따라 변동)",
    zones: ["잠실", "문정", "가락", "방이", "석촌", "송파동", "거여·마천"],
    buildingNotes: [
      "대단지 아파트는 방문 차량 등록과 단지 내 주차 안내를 예약 시 확인합니다.",
      "단지 내 동·호수와 공동현관 비밀번호를 미리 공유해 주시면 도착이 원활합니다.",
      "야간 방문 시 경비실 출입 절차를 사전 안내드립니다.",
    ],
    popularServices: ["aroma-relax-care", "family-couple-care", "office-fatigue-care"],
    travelFee: "송파 주요 생활권은 기본 출장 가능 구역입니다. 외곽 구역은 출장비가 별도 발생할 수 있으며 예약 전 고지합니다.",
    availableHours: "운영 시간 내 예약 가능 (심야 시간은 가능 여부 확인 후 안내)",
    faqs: [
      {
        question: "잠실 대단지 아파트도 방문 가능한가요?",
        answer:
          "방문 차량 등록과 단지 출입 규정 확인 후 가능합니다. 예약 시 동·호수와 출입 방법을 함께 알려 주세요.",
      },
      {
        question: "가족이 함께 받을 수 있나요?",
        answer:
          "커플·가족 방문 케어로 같은 공간에서 순차 이용이 가능합니다. 인원과 공간 조건을 예약 시 확인합니다.",
      },
      {
        question: "주차는 어떻게 하나요?",
        answer:
          "단지 또는 인근 주차 여건에 따라 주차비가 발생할 수 있으며, 예약 전 안내드립니다.",
      },
    ],
    focusKeyword: "송파 방문 마사지",
  },
  {
    slug: "mapo",
    name: "마포",
    label: "마포 방문 마사지",
    seoTitle: "마포 방문 마사지 | 예약제 웰니스 홈케어",
    metaDescription:
      "마포 방문 마사지 예약 안내. 홍대·합정·상암·공덕 등 업무·주거 생활권 방문 가능 시간, 출장비, 준비사항, 많이 선택하는 서비스를 투명하게 안내합니다.",
    h1: "마포 방문 마사지 예약 안내",
    intro:
      "마포 지역은 미디어·IT 기업이 모인 상암 업무지구와 홍대·합정 생활권, 공덕 일대 주거지가 어우러진 지역입니다. 야근이 잦은 직장인과 1인 가구의 피로 관리 문의가 많아, 오피스 피로 케어와 아로마 릴렉스 케어 예약이 많습니다.",
    arrivalTime: "예약 확인 후 평균 35~55분 내 도착 가능 (교통 상황에 따라 변동)",
    zones: ["홍대", "합정", "상암", "공덕", "망원", "연남", "대흥"],
    buildingNotes: [
      "상암 업무지구 빌딩은 야간 출입 절차와 방문자 등록을 사전 확인합니다.",
      "원룸·오피스텔이 많아 공동현관 출입 방법을 미리 안내받으면 좋습니다.",
      "주말·심야 홍대 인근은 교통 혼잡으로 도착이 지연될 수 있습니다.",
    ],
    popularServices: ["office-fatigue-care", "aroma-relax-care", "sports-muscle-care"],
    travelFee: "마포 주요 생활권은 기본 출장 가능 구역입니다. 외곽 구역은 출장비가 별도 발생할 수 있으며 예약 전 고지합니다.",
    availableHours: "운영 시간 내 예약 가능 (심야 시간은 가능 여부 확인 후 안내)",
    faqs: [
      {
        question: "상암 사무실로 방문 가능한가요?",
        answer:
          "독립적이고 안전한 공간이라면 가능합니다. 빌딩 야간 출입 규정과 방문자 등록 절차를 예약 시 확인합니다.",
      },
      {
        question: "원룸·오피스텔도 방문하나요?",
        answer:
          "방문 가능합니다. 공동현관 출입 방법과 상세 주소를 예약 시 함께 알려 주세요.",
      },
      {
        question: "심야에도 예약되나요?",
        answer:
          "운영 시간 내 가능 여부를 확인해 안내하며, 심야 추가 비용이 있을 경우 예약 전 고지합니다.",
      },
    ],
    focusKeyword: "마포 방문 마사지",
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
