export interface PostSection {
  heading: string;
  body: string[];
}

export interface PostFaq {
  question: string;
  answer: string;
}

export interface Post {
  slug: string;
  title: string;
  category: string;
  summary: string;
  /** 작성자 slug */
  author: string;
  /** 검수자 slug (건강·통증·운동 회복 글에 표시) */
  reviewer?: string;
  publishedAt: string;
  updatedAt: string;
  /** 핵심 답변 (요약) */
  keyTakeaway: string;
  sections: PostSection[];
  /** 주의사항 */
  caution?: string;
  /** 전문가 상담이 필요한 경우 */
  consultWhen?: string;
  /** 관련 서비스 slug */
  relatedServices: string[];
  faqs: PostFaq[];
  /** 참고 자료 */
  references: string[];
}

export const posts: Post[] = [
  {
    slug: "visit-massage-preparation-checklist",
    title: "방문 마사지 받기 전 준비해야 할 7가지",
    category: "방문 마사지 이용 가이드",
    summary:
      "처음 방문 마사지를 이용하기 전, 편안하고 안전한 케어를 위해 미리 준비하면 좋은 7가지를 정리했습니다.",
    author: "wellness-editor",
    publishedAt: "2026-04-10",
    updatedAt: "2026-05-20",
    keyTakeaway:
      "공간 정리, 수건과 환기 준비, 컨디션 공유, 정확한 주소·출입 정보 전달만 미리 챙겨도 방문 케어가 훨씬 편안해집니다.",
    sections: [
      {
        heading: "1. 편안하고 독립적인 공간 확보",
        body: [
          "방문 마사지는 고객의 공간에서 진행되므로, 베드나 매트를 펼 수 있는 평평하고 조용한 공간이 필요합니다.",
          "주변 물건을 미리 정리해 두면 준비 시간이 줄고 더 안정적으로 케어를 받을 수 있습니다.",
        ],
      },
      {
        heading: "2. 수건과 환기 준비",
        body: [
          "깨끗한 수건을 여유 있게 준비하고, 케어 전후로 환기가 가능한 환경을 만들어 두는 것이 좋습니다.",
          "서비스에 따라 추가로 준비할 물품은 예약 시 별도로 안내받을 수 있습니다.",
        ],
      },
      {
        heading: "3. 컨디션과 선호 강도 공유",
        body: [
          "최근 피로 부위, 통증 여부, 선호하는 강도를 미리 알려 주면 더 맞춤화된 케어가 가능합니다.",
          "부상이나 기저질환이 있다면 반드시 사전에 공유해 주세요.",
        ],
      },
      {
        heading: "4. 정확한 주소와 출입 정보 전달",
        body: [
          "오피스텔·아파트는 공동현관 출입 방법, 동·호수, 주차 가능 여부를 미리 알려 주면 도착이 원활합니다.",
        ],
      },
      {
        heading: "5. 이용 전 가벼운 수분 섭취",
        body: [
          "케어 전후로 물을 적당히 마시면 한결 가벼운 느낌으로 휴식할 수 있습니다. 과식은 피하는 것이 좋습니다.",
        ],
      },
      {
        heading: "6. 충분한 휴식 시간 확보",
        body: [
          "케어 직후 바로 외출이나 업무를 잡기보다, 잠시 쉴 수 있는 일정으로 예약하면 효과적으로 휴식할 수 있습니다.",
        ],
      },
      {
        heading: "7. 안전 정책 확인",
        body: [
          "본 서비스는 건전한 웰니스 목적의 케어만 제공합니다. 예약 전 안전 정책을 함께 확인해 주세요.",
        ],
      },
    ],
    caution:
      "마사지는 의료 행위가 아니며 질병의 진단·치료를 대신하지 않습니다.",
    consultWhen:
      "급성 통증, 고열, 염증, 골절, 수술 직후, 임신 중이거나 특정 질환이 있는 경우 이용 전 의료 전문가와 상담하세요.",
    relatedServices: ["aroma-relax-care", "office-fatigue-care"],
    faqs: [
      {
        question: "준비물이 꼭 있어야 하나요?",
        answer:
          "기본적으로 깨끗한 수건과 편안한 공간이면 충분합니다. 서비스별 추가 안내는 예약 시 제공됩니다.",
      },
    ],
    references: ["원마사지 위생·안전 정책", "원마사지 이용안내 준비사항"],
  },
  {
    slug: "why-drink-water-after-massage",
    title: "마사지 후 물을 마셔야 하는 이유",
    category: "마사지 전후 관리",
    summary:
      "마사지 후 수분 섭취가 권장되는 이유와, 무리 없이 컨디션을 관리하는 방법을 알아봅니다.",
    author: "wellness-editor",
    reviewer: "therapy-reviewer",
    publishedAt: "2026-04-18",
    updatedAt: "2026-05-15",
    keyTakeaway:
      "마사지 후에는 평소처럼 적당량의 물을 나눠 마시고, 충분히 쉬는 것이 편안한 회복에 도움이 됩니다.",
    sections: [
      {
        heading: "마사지 후 수분 섭취가 권장되는 이유",
        body: [
          "근육 이완 후에는 몸이 나른해지며 휴식 모드로 전환됩니다. 이때 적당한 수분 섭취는 평소 컨디션 관리에 도움이 됩니다.",
          "다만 '독소 배출' 같은 과장된 효과를 기대하기보다는, 일상적인 수분 관리 차원으로 이해하는 것이 좋습니다.",
        ],
      },
      {
        heading: "어떻게 마시는 것이 좋을까",
        body: [
          "한 번에 많이 마시기보다 미지근한 물을 여러 번 나눠 마시는 것이 편안합니다.",
          "카페인이나 알코올보다는 물이나 따뜻한 차가 휴식에 도움이 됩니다.",
        ],
      },
    ],
    caution:
      "신장 질환 등으로 수분 섭취량을 조절해야 하는 경우, 평소 주치의의 안내를 우선하세요.",
    consultWhen:
      "수분 섭취 제한이 필요한 질환이 있는 경우 전문가의 안내를 따르세요.",
    relatedServices: ["aroma-relax-care"],
    faqs: [
      {
        question: "찬물보다 따뜻한 물이 나은가요?",
        answer:
          "정답은 없지만, 이완 직후에는 미지근하거나 따뜻한 물이 더 편안하게 느껴지는 경우가 많습니다.",
      },
    ],
    references: ["일반 건강 수분 섭취 가이드"],
  },
  {
    slug: "desk-worker-shoulder-fatigue-care",
    title: "장시간 앉아 있는 직장인을 위한 어깨 피로 관리법",
    category: "직장인 피로 관리",
    summary:
      "오래 앉아 일하는 직장인의 어깨 긴장을 줄이는 생활 습관과 스트레칭 포인트를 소개합니다.",
    author: "wellness-editor",
    reviewer: "therapy-reviewer",
    publishedAt: "2026-04-25",
    updatedAt: "2026-05-22",
    keyTakeaway:
      "한 시간에 한 번 일어나기, 모니터 높이 맞추기, 가벼운 목·어깨 스트레칭만 꾸준히 해도 어깨 피로가 한결 줄어듭니다.",
    sections: [
      {
        heading: "왜 어깨가 자주 뭉칠까",
        body: [
          "장시간 같은 자세로 앉아 있으면 목과 어깨 주변 근육이 지속적으로 긴장 상태에 놓입니다.",
          "모니터가 너무 낮거나 마우스 위치가 멀면 어깨가 앞으로 말리며 피로가 가중됩니다.",
        ],
      },
      {
        heading: "자리에서 할 수 있는 관리 습관",
        body: [
          "한 시간에 한 번은 일어나 가볍게 움직이고, 어깨를 천천히 돌려 줍니다.",
          "모니터 상단이 눈높이에 오도록 맞추고, 등받이에 허리를 기대 바른 자세를 유지합니다.",
          "목을 좌우로 천천히 기울이는 스트레칭을 무리하지 않는 범위에서 반복합니다.",
        ],
      },
      {
        heading: "케어가 도움이 되는 경우",
        body: [
          "생활 습관 개선과 함께 정기적인 오피스 피로 케어를 병행하면 긴장 완화에 도움이 될 수 있습니다.",
        ],
      },
    ],
    caution:
      "스트레칭 중 찌릿한 통증이나 저림이 느껴지면 즉시 멈추세요. 이 글은 일반적인 생활 정보이며 의학적 진단을 대신하지 않습니다.",
    consultWhen:
      "팔 저림, 지속되는 통증, 움직임 제한이 있다면 의료 전문가와 상담하세요.",
    relatedServices: ["office-fatigue-care", "sports-muscle-care"],
    faqs: [
      {
        question: "스트레칭은 하루에 몇 번이 적당한가요?",
        answer:
          "정해진 횟수보다 '자주, 짧게'가 핵심입니다. 근무 중 틈틈이 가볍게 반복하는 것이 좋습니다.",
      },
    ],
    references: ["직장인 자세·근골격 일반 관리 가이드"],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
