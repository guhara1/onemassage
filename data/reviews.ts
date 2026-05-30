export interface Review {
  id: string;
  area: string;
  service: string;
  duration: string;
  rating: number;
  date: string;
  content: string;
  /** 대가성(협찬) 여부 표기 — 투명성 정책 */
  sponsored: boolean;
}

/**
 * 후기 운영 원칙:
 * - 실제 예약 고객 후기만 게시 / 허위 후기 금지
 * - 대가성 후기는 sponsored: true 로 표시
 * - 부정 후기 임의 삭제 금지 / 개인정보 노출 방지
 *
 * 주의: 아래는 사이트 구축용 예시 데이터입니다. 실제 운영 시에는
 * 검증된 실제 고객 후기로 교체해야 하며, 후기 기반 구조화 데이터(Review)는
 * 실제 후기가 페이지에 노출될 때에만 사용합니다.
 */
export const reviews: Review[] = [
  {
    id: "r1",
    area: "강남",
    service: "오피스 피로 케어",
    duration: "90분",
    rating: 5,
    date: "2026-05-12",
    content:
      "야근이 많아 어깨가 늘 뭉쳐 있었는데, 강도를 세심하게 맞춰 주셔서 편안했습니다. 위생 준비도 꼼꼼했고 예약 안내가 명확했어요.",
    sponsored: false,
  },
  {
    id: "r2",
    area: "수원",
    service: "아로마 릴렉스 케어",
    duration: "60분",
    rating: 5,
    date: "2026-05-08",
    content:
      "수면 전에 받았는데 부드러운 진행 덕분에 푹 쉴 수 있었습니다. 시간 약속을 잘 지켜 주셔서 좋았어요.",
    sponsored: false,
  },
  {
    id: "r3",
    area: "인천",
    service: "스포츠 근육 케어",
    duration: "90분",
    rating: 4,
    date: "2026-04-29",
    content:
      "운동 후 종아리와 허벅지 피로가 심했는데 부위별로 신경 써 주셨습니다. 다음엔 120분으로 받아보려고 해요.",
    sponsored: false,
  },
  {
    id: "r4",
    area: "강남",
    service: "아로마 릴렉스 케어",
    duration: "120분",
    rating: 5,
    date: "2026-04-20",
    content:
      "출장 중 숙소에서 이용했는데 예약부터 방문, 마무리까지 전 과정이 투명하고 안정적이었습니다.",
    sponsored: false,
  },
];
