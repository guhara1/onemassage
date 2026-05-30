import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { posts } from "@/data/posts";
import { authors } from "@/data/authors";

// 정적 export(output: "export")에서 sitemap.xml을 생성하기 위해 필요
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  // 정적 페이지 (예약 완료 등 noindex 페이지는 제외)
  const staticPaths = [
    "/",
    "/services",
    "/pricing",
    "/booking",
    "/areas",
    "/about",
    "/trust/therapist-standards",
    "/trust/safety-hygiene",
    "/reviews",
    "/wellness-guide",
    "/faq",
    "/contact",
    "/editorial-policy",
    "/privacy",
    "/terms",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: p === "/" ? "weekly" : "monthly",
    priority: p === "/" ? 1 : 0.7,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const areaEntries: MetadataRoute.Sitemap = areas.map((a) => ({
    url: `${base}/areas/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/wellness-guide/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const authorEntries: MetadataRoute.Sitemap = authors.map((a) => ({
    url: `${base}/authors/${a.slug}`,
    lastModified: new Date(a.updatedAt),
    changeFrequency: "monthly",
    priority: 0.4,
  }));

  return [
    ...staticEntries,
    ...serviceEntries,
    ...areaEntries,
    ...postEntries,
    ...authorEntries,
  ];
}
