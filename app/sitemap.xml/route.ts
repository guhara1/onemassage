import { getAllUrls, buildSitemapXml } from "@/lib/seo-urls";

// 정적 export 환경에서 파일로 출력
export const dynamic = "force-static";

/**
 * sitemap.xml — 네이버 서치어드바이저 제출용.
 * 구글/네이버 모두 동일 스펙(sitemaps.org)을 따르므로 내용은 sitemap1.xml과 같고,
 * 검색엔진별로 별도 제출·관리하기 쉽도록 파일을 분리한다.
 */
export function GET() {
  const xml = buildSitemapXml(getAllUrls());
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
