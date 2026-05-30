import { siteConfig } from "@/lib/site";
import { getFeedPosts, xmlEscape } from "@/lib/seo-urls";
import { getAuthor } from "@/data/authors";

export const dynamic = "force-static";

/**
 * rss.xml — 웰니스 가이드 글 RSS 2.0 피드.
 * 새 글 발행 시 색인 발견을 앞당기고, 피드 구독·뉴스 수집에도 활용된다.
 */
export function GET() {
  const base = siteConfig.url;
  const feedUrl = `${base}/rss.xml`;
  const posts = getFeedPosts();
  const lastBuild = posts.length
    ? new Date(posts[0].updatedAt).toUTCString()
    : new Date().toUTCString();

  const items = posts
    .map((p) => {
      const link = `${base}/wellness-guide/${p.slug}`;
      const author = getAuthor(p.author);
      const pubDate = new Date(p.publishedAt).toUTCString();
      return (
        `    <item>\n` +
        `      <title>${xmlEscape(p.title)}</title>\n` +
        `      <link>${xmlEscape(link)}</link>\n` +
        `      <guid isPermaLink="true">${xmlEscape(link)}</guid>\n` +
        `      <description>${xmlEscape(p.summary)}</description>\n` +
        `      <category>${xmlEscape(p.category)}</category>\n` +
        (author ? `      <dc:creator>${xmlEscape(author.name)}</dc:creator>\n` : "") +
        `      <pubDate>${pubDate}</pubDate>\n` +
        `    </item>`
      );
    })
    .join("\n");

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">\n` +
    `  <channel>\n` +
    `    <title>${xmlEscape(siteConfig.name)} 웰니스 가이드</title>\n` +
    `    <link>${xmlEscape(`${base}/wellness-guide`)}</link>\n` +
    `    <description>${xmlEscape(siteConfig.description)}</description>\n` +
    `    <language>ko</language>\n` +
    `    <lastBuildDate>${lastBuild}</lastBuildDate>\n` +
    `    <atom:link href="${xmlEscape(feedUrl)}" rel="self" type="application/rss+xml" />\n` +
    `${items}\n` +
    `  </channel>\n` +
    `</rss>\n`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
