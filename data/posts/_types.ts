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
  /** 검색엔진 메타 설명(80자 이내). 없으면 summary 사용 */
  metaDescription?: string;
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
