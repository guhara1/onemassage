export interface Author {
  slug: string;
  name: string;
  role: string;
  career: string[];
  expertise: string[];
  /** 연락 가능 채널 */
  contact: string;
  updatedAt: string;
  bio: string;
}

export const authors: Author[] = [
  {
    slug: "wellness-editor",
    name: "이서연",
    role: "웰니스 콘텐츠 에디터",
    career: [
      "건강·라이프스타일 매체 콘텐츠 기획 8년",
      "방문 케어 이용 가이드 콘텐츠 다수 작성",
    ],
    expertise: ["출장마사지 이용 가이드", "직장인 피로 관리", "수면·휴식 루틴"],
    contact: "editorial@onemassage.example.com",
    updatedAt: "2026-05-20",
    bio: "고객이 안전하고 합리적으로 방문 웰니스 서비스를 선택할 수 있도록 쉽고 정확한 정보를 전달하는 데 집중합니다.",
  },
  {
    slug: "therapy-reviewer",
    name: "박준호",
    role: "테라피 검수 담당",
    career: [
      "스포츠·생활 마사지 현장 경력 12년",
      "테라피스트 교육 및 위생 가이드 운영",
    ],
    expertise: ["근육 이완 관리", "운동 후 회복", "위생·안전 정책"],
    contact: "review@onemassage.example.com",
    updatedAt: "2026-05-18",
    bio: "건강·운동 회복과 관련된 콘텐츠가 과장 없이 안전하게 작성되도록 현장 경험을 바탕으로 검수합니다.",
  },
];

export function getAuthor(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}
