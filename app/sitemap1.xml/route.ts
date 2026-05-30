import { getAllUrls, buildSitemapXml } from "@/lib/seo-urls";

export const dynamic = "force-static";

/**
 * sitemap1.xml — 구글 서치콘솔 제출용.
 * sitemap.xml(네이버)과 동일한 URL 목록을 공유한다.
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
