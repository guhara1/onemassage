import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

/**
 * robots.txt — 구글·네이버 색인을 가장 빠르게 받도록 구성.
 * - 주요 봇(Googlebot, 네이버 Yeti, Bingbot, Daum)을 명시적으로 전체 허용
 * - 색인 불필요 경로(예약 완료)만 차단
 * - 두 사이트맵(sitemap.xml=네이버, sitemap1.xml=구글)과 RSS를 모두 고지
 */
export function GET() {
  const base = siteConfig.url;
  const lines = [
    "# 모든 크롤러 기본 허용",
    "User-agent: *",
    "Allow: /",
    "Disallow: /booking/complete",
    "",
    "# 구글",
    "User-agent: Googlebot",
    "Allow: /",
    "",
    "User-agent: Googlebot-Image",
    "Allow: /",
    "",
    "# 네이버",
    "User-agent: Yeti",
    "Allow: /",
    "",
    "# 빙",
    "User-agent: Bingbot",
    "Allow: /",
    "",
    "# 다음(카카오)",
    "User-agent: Daum",
    "Allow: /",
    "",
    `Sitemap: ${base}/sitemap.xml`,
    `Sitemap: ${base}/sitemap1.xml`,
    `Sitemap: ${base}/rss.xml`,
    `Host: ${base}`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
