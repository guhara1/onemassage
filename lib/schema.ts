import { siteConfig } from "./site";
import type { Review } from "@/data/reviews";

/** 후기 배열의 평균 평점 (소수 첫째자리 반올림) */
function averageRating(reviews: Review[]): number {
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}

/** AggregateRating 구조화 데이터 — 실제 페이지에 노출되는 후기에만 사용 */
export function aggregateRatingSchema(reviews: Review[]) {
  return {
    "@type": "AggregateRating",
    ratingValue: averageRating(reviews),
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1,
  };
}

/** 개별 Review 구조화 데이터 — 페이지에 실제 노출되는 후기를 그대로 마크업 */
export function reviewSchema(r: Review) {
  return {
    "@type": "Review",
    author: { "@type": "Person", name: `${r.area} 이용 고객` },
    datePublished: r.date,
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: r.content,
    name: `${r.area} ${r.service} ${r.duration} 이용 후기`,
  };
}

/** localBusiness/Service 등에 후기·평점을 덧붙이는 헬퍼 */
function withReviews<T extends Record<string, unknown>>(
  base: T,
  reviews?: Review[],
): T {
  if (!reviews || reviews.length === 0) return base;
  return {
    ...base,
    aggregateRating: aggregateRatingSchema(reviews),
    review: reviews.map(reviewSchema),
  };
}

/** Organization 구조화 데이터 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.business.address,
      addressLocality: siteConfig.business.addressLocality,
      addressRegion: siteConfig.business.addressRegion,
      postalCode: siteConfig.business.postalCode,
      addressCountry: "KR",
    },
  };
}

/** WebSite 구조화 데이터 */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "ko",
  };
}

/** LocalBusiness 구조화 데이터 (홈/지역 페이지) */
export function localBusinessSchema(opts?: {
  areaServed?: string;
  url?: string;
  reviews?: Review[];
}) {
  const base = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: siteConfig.name,
    url: opts?.url ?? siteConfig.url,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "₩₩",
    openingHours: "Mo-Su 10:00-02:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.business.address,
      addressLocality: siteConfig.business.addressLocality,
      addressRegion: siteConfig.business.addressRegion,
      postalCode: siteConfig.business.postalCode,
      addressCountry: "KR",
    },
    ...(opts?.areaServed ? { areaServed: opts.areaServed } : {}),
  };
  return withReviews(base, opts?.reviews);
}

/** Service 구조화 데이터 */
export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  areaServed?: string;
  reviews?: Review[];
}) {
  const base = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    ...(opts.areaServed ? { areaServed: opts.areaServed } : {}),
  };
  return withReviews(base, opts.reviews);
}

/** BreadcrumbList 구조화 데이터 */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

/** FAQPage 구조화 데이터 (실제 FAQ가 페이지에 노출될 때만 사용) */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/** CollectionPage + ItemList 구조화 데이터 (목록·카테고리 허브) */
export function itemListSchema(opts: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    inLanguage: "ko",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: opts.items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: it.url,
        name: it.name,
      })),
    },
  };
}

/** Article 구조화 데이터 (블로그 글) */
export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  authorName: string;
  authorUrl: string;
  publishedAt: string;
  updatedAt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    datePublished: opts.publishedAt,
    dateModified: opts.updatedAt,
    inLanguage: "ko",
    author: {
      "@type": "Person",
      name: opts.authorName,
      url: opts.authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
