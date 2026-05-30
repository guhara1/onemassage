import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// 정적 export(output: "export")에서 robots.txt를 생성하기 위해 필요
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // 예약 완료 페이지 등 색인 불필요 경로 차단
      disallow: ["/booking/complete"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
