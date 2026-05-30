import { siteConfig } from "./site";

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
export function localBusinessSchema(opts?: { areaServed?: string; url?: string }) {
  return {
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
}

/** Service 구조화 데이터 */
export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  areaServed?: string;
}) {
  return {
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
