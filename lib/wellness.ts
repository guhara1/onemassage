/**
 * 웰니스 가이드 목록의 카테고리 정의와 페이지네이션 헬퍼.
 * 글이 늘어나도(100~200편) 목록을 카테고리 허브 + 페이지로 나눠
 * 크롤링·내부링크·가독성을 안정적으로 유지하기 위한 구조.
 */
import { posts, type Post } from "@/data/posts";
import { areas } from "@/data/areas";

/** 한 페이지에 노출하는 글 수 */
export const POSTS_PER_PAGE = 12;

export interface WellnessCategory {
  /** URL 슬러그 */
  slug: string;
  /** Post.category 와 일치하는 라벨 */
  label: string;
  /** 허브 페이지 SEO 타이틀 */
  title: string;
  /** 허브 페이지 소개 + 메타 설명 */
  description: string;
}

/**
 * 카테고리 정의. label 은 각 글의 category 필드와 정확히 일치해야 한다.
 * 새 카테고리를 추가할 때 이 배열에만 등록하면 허브·사이트맵에 자동 반영된다.
 */
export const wellnessCategories: WellnessCategory[] = [
  {
    slug: "massage-care",
    label: "마사지 전후 관리",
    title: "마사지 전후 관리",
    description:
      "마사지 전 준비와 마사지 후 관리 방법을 정리한 글 모음입니다. 수분 보충, 휴식, 컨디션 점검처럼 효과를 오래 유지하고 몸의 부담을 줄이는 생활 정보를 다룹니다.",
  },
  {
    slug: "office-fatigue",
    label: "직장인 피로 관리",
    title: "직장인 피로 관리",
    description:
      "장시간 앉아 일하는 직장인의 목·어깨·허리 피로와 자세 습관을 관리하는 정보 모음입니다. 야근, 통근, 재택근무 등 상황별로 일상에서 실천할 수 있는 방법을 안내합니다.",
  },
  {
    slug: "workout-recovery",
    label: "운동 후 회복",
    title: "운동 후 회복",
    description:
      "운동 후 근육 회복과 마사지 활용법을 다루는 글 모음입니다. 회복에 도움이 되는 경우와 피해야 하는 경우를 구분해 안전하게 참고할 수 있도록 정리했습니다.",
  },
  {
    slug: "sleep-rest",
    label: "수면과 휴식",
    title: "수면과 휴식",
    description:
      "수면의 질과 휴식을 돕는 이완 정보 모음입니다. 잠들기 전 루틴과 긴장 완화 방법처럼 일상에서 가볍게 실천할 수 있는 내용을 다룹니다.",
  },
  {
    slug: "service-guide",
    label: "출장마사지 이용 가이드",
    title: "출장마사지 이용 가이드",
    description:
      "출장마사지를 처음 이용하는 분을 위한 예약·준비·이용 절차 안내 모음입니다. 합법 업체 확인, 예약 변경, 위생 기준처럼 안전하고 합리적인 선택에 필요한 정보를 정리했습니다.",
  },
  {
    slug: "safety-guide",
    label: "서비스 안전 가이드",
    title: "서비스 안전 가이드",
    description:
      "안전하고 신뢰할 수 있는 서비스 이용을 위한 점검 기준 모음입니다. 예약 전 확인 사항, 합법 서비스 식별, 부적절한 요청 대응 등 이용자 보호에 초점을 맞췄습니다.",
  },
];

export function getCategoryBySlug(slug: string): WellnessCategory | undefined {
  return wellnessCategories.find((c) => c.slug === slug);
}

export function getCategoryByLabel(label: string): WellnessCategory | undefined {
  return wellnessCategories.find((c) => c.label === label);
}

/** 업데이트일 기준 최신순 정렬 (목록·아카이브 공통 순서) */
export function sortedPosts(): Post[] {
  return [...posts].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

/** 특정 카테고리(label)의 글을 최신순으로 반환 */
export function postsInCategory(label: string): Post[] {
  return sortedPosts().filter((p) => p.category === label);
}

/** 전체 글 수 기준 총 페이지 수 (최소 1) */
export function totalPagesOf(count: number): number {
  return Math.max(1, Math.ceil(count / POSTS_PER_PAGE));
}

/** 1부터 시작하는 page 번호에 해당하는 글 슬라이스 */
export function pageSlice<T>(list: T[], page: number): T[] {
  const start = (page - 1) * POSTS_PER_PAGE;
  return list.slice(start, start + POSTS_PER_PAGE);
}

/**
 * 글의 지역 매핑.
 * 지역 매거진 글은 slug 가 지역 slug 로 시작한다(예: gangnam-office-... → gangnam).
 * 일반 가이드 글은 지역이 없다(undefined).
 */
export function getPostAreaSlug(post: Post): string | undefined {
  const area = areas.find((a) => post.slug.startsWith(`${a.slug}-`));
  return area?.slug;
}

/** 특정 지역의 매거진 글 (지역 페이지에서 사용) */
export function postsForArea(areaSlug: string): Post[] {
  return sortedPosts().filter((p) => getPostAreaSlug(p) === areaSlug);
}

/**
 * 글 상세의 "이어 읽을 관련 글" 계산.
 * 우선순위: 같은 지역 → 같은 카테고리 순으로 채우고, 자기 자신은 제외한다.
 */
export function getRelatedPosts(post: Post, limit = 3): Post[] {
  const areaSlug = getPostAreaSlug(post);
  const pool = sortedPosts().filter((p) => p.slug !== post.slug);
  const sameArea = areaSlug ? pool.filter((p) => getPostAreaSlug(p) === areaSlug) : [];
  const sameCategory = pool.filter(
    (p) => p.category === post.category && !sameArea.includes(p),
  );
  const seen = new Set<string>();
  const result: Post[] = [];
  for (const p of [...sameArea, ...sameCategory]) {
    if (seen.has(p.slug)) continue;
    seen.add(p.slug);
    result.push(p);
    if (result.length >= limit) break;
  }
  return result;
}
