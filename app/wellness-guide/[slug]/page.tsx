import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { AuthorBox } from "@/components/AuthorBox";
import { CTASection } from "@/components/CTASection";
import { Section, Container, Card, Notice, SectionTitle } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { posts, getPost } from "@/data/posts";
import { getAuthor } from "@/data/authors";
import { getService } from "@/data/services";
import { getArea } from "@/data/areas";
import { buildMetadata } from "@/lib/metadata";
import { articleSchema, faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { getRelatedPosts, getPostAreaSlug } from "@/lib/wellness";

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

  return (
    <>
      {author && (
        <JsonLd
          data={[
            articleSchema({
              title: post.title,
              description: post.summary,
              url,
              authorName: author.name,
              authorUrl: `${siteConfig.url}/authors/${author.slug}`,
              publishedAt: post.publishedAt,
              updatedAt: post.updatedAt,
            }),
            faqSchema(post.faqs),
          ]}
        />
      )}

      <Container className="pt-8">
        <Breadcrumbs
          items={[
            { name: "웰니스 가이드", href: "/wellness-guide" },
            { name: post.title, href: `/wellness-guide/${post.slug}` },
          ]}
        />
      </Container>

      <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <p className="text-sm font-semibold text-forest-500">{post.category}</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-forest-900 md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-forest-600">{post.summary}</p>

        <div className="mt-6">
          {author && (
            <AuthorBox
              author={author}
              reviewer={reviewer}
              publishedAt={post.publishedAt}
              updatedAt={post.updatedAt}
            />
          )}
        </div>

        <div className="mt-8 rounded-2xl bg-forest-50 p-5">
          <p className="text-sm font-semibold text-forest-700">핵심 답변</p>
          <p className="mt-1 leading-relaxed text-forest-800">{post.keyTakeaway}</p>
        </div>

        <div className="prose-custom mt-8 space-y-8">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold text-forest-900">{section.heading}</h2>
              {section.body.map((p, i) => (
                <p key={i} className="mt-3 leading-relaxed text-forest-700">
                  {p}
                </p>
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

        {related.length > 0 && (
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-forest-900">관련 서비스</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="flex items-center justify-between rounded-lg border border-forest-100 px-4 py-3 text-sm text-forest-800 transition-colors hover:bg-forest-50"
                >
                  {s.name}
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {area && (
          <div className="mt-10">
            <Link
              href={`/areas/${area.slug}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-forest-100 bg-forest-50 px-5 py-4 transition-colors hover:bg-forest-100"
            >
              <div>
                <p className="text-xs font-semibold text-forest-500">지역 안내</p>
                <p className="mt-0.5 font-semibold text-forest-900">
                  {area.name} 출장마사지 예약·가능 지역 보기
                </p>
              </div>
              <span aria-hidden="true" className="text-forest-400 transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        )}

        {post.faqs.length > 0 && (
          <div className="mt-10">
            <SectionTitle title="자주 묻는 질문" />
            <FAQAccordion items={post.faqs} />
          </div>
        )}

        {relatedPosts.length > 0 && (
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-forest-900">이어 읽으면 좋은 글</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/wellness-guide/${p.slug}`}
                  className="group flex flex-col rounded-xl border border-forest-100 bg-white p-4 transition-all hover:border-forest-300 hover:shadow-sm"
                >
                  <span className="text-xs font-medium text-forest-500">{p.category}</span>
                  <span className="mt-1.5 text-sm font-semibold leading-snug text-forest-900 group-hover:text-forest-700">
                    {p.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {post.references.length > 0 && (
          <div className="mt-10 border-t border-forest-100 pt-6">
            <h2 className="text-sm font-semibold text-forest-700">참고 자료</h2>
            <ul className="mt-2 list-inside list-disc text-sm text-forest-500">
              {post.references.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 text-sm text-forest-500">
          <Link href="/editorial-policy" className="hover:underline">
            편집·검수 기준 보기 →
          </Link>
        </div>
      </article>

      <Section className="pt-0">
        <Card>
          <p className="text-sm leading-relaxed text-forest-600">
            본 콘텐츠는 일반적인 웰니스 정보 제공을 목적으로 하며, 의학적 진단이나 치료를
            대신하지 않습니다. 증상이 지속되거나 우려되는 경우 의료 전문가와 상담하세요.
          </p>
        </Card>
      </Section>

      <CTASection />
    </>
  );
}
