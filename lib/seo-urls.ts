/**
 * 사이트 전체 색인 대상 URL의 단일 소스.
 * sitemap.xml(네이버) · sitemap1.xml(구글) · rss.xml 이 모두 이 목록을 공유한다.
 * 새 페이지가 생기면 이곳에만 반영하면 모든 색인 파일에 자동 적용된다.
 */
import { siteConfig } from "@/lib/site";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { posts, type Post } from "@/data/posts";
import { authors } from "@/data/authors";
import {
  wellnessCategories,
  postsInCategory,
  sortedPosts,
  totalPagesOf,
} from "@/lib/wellness";

export interface SeoUrl {
  loc: string;
  lastmod: Date;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

/** 색인 대상 전체 URL (절대경로) */
export function getAllUrls(): SeoUrl[] {
  const base = siteConfig.url;
  const now = new Date();

  const staticPaths: { path: string; priority: number; changefreq: SeoUrl["changefreq"] }[] = [
    { path: "/", priority: 1.0, changefreq: "daily" },
    { path: "/services", priority: 0.9, changefreq: "weekly" },
    { path: "/pricing", priority: 0.9, changefreq: "weekly" },
    { path: "/booking", priority: 0.8, changefreq: "monthly" },
    { path: "/areas", priority: 0.9, changefreq: "weekly" },
    { path: "/about", priority: 0.6, changefreq: "monthly" },
    { path: "/trust/therapist-standards", priority: 0.6, changefreq: "monthly" },
    { path: "/trust/safety-hygiene", priority: 0.6, changefreq: "monthly" },
    { path: "/reviews", priority: 0.7, changefreq: "weekly" },
    { path: "/wellness-guide", priority: 0.8, changefreq: "daily" },
    { path: "/faq", priority: 0.7, changefreq: "monthly" },
    { path: "/contact", priority: 0.5, changefreq: "monthly" },
    { path: "/editorial-policy", priority: 0.4, changefreq: "yearly" },
    { path: "/privacy", priority: 0.3, changefreq: "yearly" },
    { path: "/terms", priority: 0.3, changefreq: "yearly" },
  ];

  const urls: SeoUrl[] = staticPaths.map((p) => ({
    loc: `${base}${p.path}`,
    lastmod: now,
    changefreq: p.changefreq,
    priority: p.priority,
  }));

  for (const s of services) {
    urls.push({ loc: `${base}/services/${s.slug}`, lastmod: now, changefreq: "monthly", priority: 0.8 });
  }

  for (const a of areas) {
    urls.push({ loc: `${base}/areas/${a.slug}`, lastmod: now, changefreq: "weekly", priority: 0.8 });
  }

  for (const p of posts) {
    urls.push({
      loc: `${base}/wellness-guide/${p.slug}`,
      lastmod: new Date(p.updatedAt),
      changefreq: "monthly",
      priority: 0.7,
    });
  }

  for (const a of authors) {
    urls.push({
      loc: `${base}/authors/${a.slug}`,
      lastmod: new Date(a.updatedAt),
      changefreq: "monthly",
      priority: 0.4,
    });
  }

  // 카테고리 허브 + 카테고리 페이지네이션
  for (const c of wellnessCategories) {
    urls.push({
      loc: `${base}/wellness-guide/category/${c.slug}`,
      lastmod: now,
      changefreq: "weekly",
      priority: 0.6,
    });
    const total = totalPagesOf(postsInCategory(c.label).length);
    for (let n = 2; n <= total; n++) {
      urls.push({
        loc: `${base}/wellness-guide/category/${c.slug}/page/${n}`,
        lastmod: now,
        changefreq: "weekly",
        priority: 0.4,
      });
    }
  }

  // 전체 목록 페이지네이션 (2페이지 이상)
  const guideTotal = totalPagesOf(sortedPosts().length);
  for (let n = 2; n <= guideTotal; n++) {
    urls.push({
      loc: `${base}/wellness-guide/page/${n}`,
      lastmod: now,
      changefreq: "weekly",
      priority: 0.4,
    });
  }

  return urls;
}

/** RSS 대상: 웰니스 가이드 글만, 최신 업데이트순 */
export function getFeedPosts(): Post[] {
  return sortedPosts();
}

/** XML 특수문자 이스케이프 */
export function xmlEscape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** 공유 URL 목록으로 표준 sitemaps.org XML 생성 */
export function buildSitemapXml(urls: SeoUrl[]): string {
  const items = urls
    .map(
      (u) =>
        `  <url>\n` +
        `    <loc>${xmlEscape(u.loc)}</loc>\n` +
        `    <lastmod>${u.lastmod.toISOString()}</lastmod>\n` +
        `    <changefreq>${u.changefreq}</changefreq>\n` +
        `    <priority>${u.priority.toFixed(1)}</priority>\n` +
        `  </url>`,
    )
    .join("\n");
  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `${items}\n` +
    `</urlset>\n`
  );
}
