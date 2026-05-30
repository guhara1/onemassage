import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { AuthorBox } from "@/components/AuthorBox";
import { CTASection } from "@/components/CTASection";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Section, Container, Notice, SectionTitle } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { SparkleIcon, ArrowIcon, PinIcon, ClockIcon, CalendarIcon } from "@/components/icons";
import { posts, getPost } from "@/data/posts";
import { getAuthor } from "@/data/authors";
import { getService } from "@/data/services";
import { getArea } from "@/data/areas";
import { buildMetadata } from "@/lib/metadata";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { getRelatedPosts, getPostAreaSlug, getCategoryByLabel } from "@/lib/wellness";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.summary,
    path: `/wellness-guide/${post.slug}`,
  });
}

/** 본문 글자 수 기준 대략적인 읽기 시간(분) */
function readingMinutes(post: { sections: { body: string[] }[]; keyTakeaway: string }) {
  const chars =
    post.keyTakeaway.length +
    post.sections.reduce((sum, s) => sum + s.body.reduce((a, b) => a + b.length, 0), 0);
  // 한국어 분당 약 500자 기준
  return Math.max(1, Math.round(chars / 500));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const author = getAuthor(post.author);
  const reviewer = post.reviewer ? getAuthor(post.reviewer) : undefined;
  const url = `${siteConfig.url}/wellness-guide/${post.slug}`;
  const related = post.relatedServices
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const relatedPosts = getRelatedPosts(post, 3);
  const areaSlug = getPostAreaSlug(post);
  const area = areaSlug ? getArea(areaSlug) : undefined;
  const category = getCategoryByLabel(post.category);
  const minutes = readingMinutes(post);

  return (
    <>
      <ReadingProgress />

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "홈", url: "/" },
            { name: "웰니스 가이드", url: "/wellness-guide" },
            { name: post.title, url: `/wellness-guide/${post.slug}` },
          ]),
          ...(author
            ? [
                articleSchema({
                  title: post.title,
                  description: post.summary,
                  url,
                  authorName: author.name,
                  authorUrl: `${siteConfig.url}/authors/${author.slug}`,
                  publishedAt: post.publishedAt,
                  updatedAt: post.updatedAt,
                }),
              ]
            : []),
          faqSchema(post.faqs),
        ]}
      />

      {/* ── 프리미엄 히어로 ─────────────────────────── */}
      <header className="article-hero-bg relative overflow-hidden">
        <Container className="relative py-12 md:py-16">
          {/* 빵부스러기 */}
          <nav aria-label="현재 위치" className="flex flex-wrap items-center gap-1.5 text-sm text-forest-100/70">
            <Link href="/" className="hover:text-white">홈</Link>
            <span aria-hidden="true" className="text-forest-100/40">/</span>
            <Link href="/wellness-guide" className="hover:text-white">웰니스 가이드</Link>
            <span aria-hidden="true" className="text-forest-100/40">/</span>
            <span className="text-white/90 line-clamp-1">{post.title}</span>
          </nav>

          <div className="mt-7 max-w-3xl">
            <Link
              href={category ? `/wellness-guide/category/${category.slug}` : "/wellness-guide"}
              className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-gold-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-400 transition-colors hover:bg-gold-400/20"
            >
              <SparkleIcon width={13} height={13} />
              {post.category}
            </Link>

            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white md:text-[2.6rem] md:leading-[1.2]">
              {post.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-forest-100/85 md:text-lg">
              {post.summary}
            </p>

            {/* 메타 스트립 */}
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-forest-100/80">
              {author && (
                <span className="inline-flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-400 text-xs font-bold text-forest-950">
                    {author.name.charAt(0)}
                  </span>
                  <Link href={`/authors/${author.slug}`} className="font-medium text-white hover:underline">
                    {author.name}
                  </Link>
                </span>
              )}
              <span className="inline-flex items-center gap-1.5">
                <CalendarIcon width={15} height={15} className="text-gold-400" />
                업데이트 <time dateTime={post.updatedAt}>{post.updatedAt}</time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ClockIcon width={15} height={15} className="text-gold-400" />
                약 {minutes}분 분량
              </span>
            </div>
          </div>
        </Container>
      </header>

      {/* ── 본문 카드 (히어로 위로 살짝 겹침) ─────────── */}
      <Container className="relative z-10 -mt-6 md:-mt-8">
        <article className="mx-auto max-w-3xl rounded-3xl border border-forest-100 bg-white p-6 shadow-premium-lg sm:p-9 md:p-12">
          {/* 핵심 답변 */}
          <div className="relative overflow-hidden rounded-2xl border border-gold-400/30 bg-gradient-to-br from-sand-50 to-white p-5 sm:p-6">
            <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-gold-400 to-gold-500" />
            <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-gold-500">
              <SparkleIcon width={14} height={14} />
              핵심 답변
            </p>
            <p className="mt-2 text-[15px] font-medium leading-relaxed text-forest-800 sm:text-base">
              {post.keyTakeaway}
            </p>
          </div>

          {/* 본문 */}
          <div className="article-body mt-9">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </section>
            ))}
          </div>

          {post.caution && (
            <div className="mt-8">
              <Notice tone="warning" title="주의사항">
                {post.caution}
              </Notice>
            </div>
          )}

          {post.consultWhen && (
            <div className="mt-4">
              <Notice tone="info" title="전문가 상담이 필요한 경우">
                {post.consultWhen}
              </Notice>
            </div>
          )}

          {/* 참고 자료 */}
          {post.references.length > 0 && (
            <div className="mt-9 rounded-2xl bg-forest-50 p-5 sm:p-6">
              <h2 className="text-sm font-bold text-forest-700">참고 자료</h2>
              <ul className="mt-2.5 space-y-1.5 text-sm text-forest-500">
                {post.references.map((r) => (
                  <li key={r} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-forest-300" />
                    <span className="leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 작성자 */}
          {author && (
            <div className="mt-9">
              <AuthorBox
                author={author}
                reviewer={reviewer}
                publishedAt={post.publishedAt}
                updatedAt={post.updatedAt}
              />
            </div>
          )}

          {/* 면책 */}
          <p className="mt-8 border-t border-forest-100 pt-6 text-sm leading-relaxed text-forest-500">
            본 콘텐츠는 일반적인 웰니스 정보 제공을 목적으로 하며, 의학적 진단이나 치료를 대신하지
            않습니다. 증상이 지속되거나 우려되는 경우 의료 전문가와 상담하세요.{" "}
            <Link href="/editorial-policy" className="font-medium text-forest-700 hover:underline">
              편집·검수 기준 보기 →
            </Link>
          </p>
        </article>
      </Container>

      {/* ── 지역 안내 배너 ───────────────────────────── */}
      {area && (
        <Container className="mt-10">
          <div className="mx-auto max-w-3xl">
            <Link
              href={`/areas/${area.slug}`}
              className="group flex items-center gap-4 overflow-hidden rounded-2xl border border-forest-100 bg-white p-5 shadow-premium transition-all hover:-translate-y-0.5 hover:border-forest-300"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest-700 text-white">
                <PinIcon width={22} height={22} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-forest-500">지역 안내</p>
                <p className="mt-0.5 font-bold text-forest-900">
                  {area.name} 출장마사지 예약·가능 지역 보기
                </p>
              </div>
              <ArrowIcon
                width={18}
                height={18}
                className="shrink-0 text-forest-300 transition-transform group-hover:translate-x-0.5 group-hover:text-forest-600"
              />
            </Link>
          </div>
        </Container>
      )}

      {/* ── 관련 서비스 ─────────────────────────────── */}
      {related.length > 0 && (
        <Container className="mt-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-lg font-bold text-forest-900">관련 서비스</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-forest-100 bg-white px-5 py-4 text-sm font-medium text-forest-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-forest-300 hover:shadow-premium"
                >
                  {s.name}
                  <ArrowIcon
                    width={16}
                    height={16}
                    className="text-forest-300 transition-transform group-hover:translate-x-0.5 group-hover:text-forest-600"
                  />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      )}

      {/* ── FAQ ─────────────────────────────────────── */}
      {post.faqs.length > 0 && (
        <Container className="mt-12">
          <div className="mx-auto max-w-3xl">
            <SectionTitle title="자주 묻는 질문" />
            <FAQAccordion items={post.faqs} />
          </div>
        </Container>
      )}

      {/* ── 이어 읽으면 좋은 글 ──────────────────────── */}
      {relatedPosts.length > 0 && (
        <Section className="pt-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold tracking-tight text-forest-900">이어 읽으면 좋은 글</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((p) => {
                const a = getAuthor(p.author);
                return (
                  <Link
                    key={p.slug}
                    href={`/wellness-guide/${p.slug}`}
                    className="group flex flex-col rounded-2xl border border-forest-100 bg-white p-5 shadow-premium transition-all hover:-translate-y-1 hover:border-forest-300"
                  >
                    <span className="text-xs font-semibold text-gold-500">{p.category}</span>
                    <h3 className="mt-2 flex-1 text-base font-bold leading-snug text-forest-900 group-hover:text-forest-700">
                      {p.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-forest-600">
                      {p.summary}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-forest-700">
                      자세히 보기
                      <ArrowIcon
                        width={15}
                        height={15}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </span>
                    <span className="sr-only">{a?.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </Section>
      )}

      <CTASection />
    </>
  );
}
