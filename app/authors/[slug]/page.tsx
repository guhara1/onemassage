import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero, Section, Container, Card } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { authors, getAuthor } from "@/data/authors";
import { posts } from "@/data/posts";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) return {};
  return buildMetadata({
    title: `${author.name} | ${author.role}`,
    description: `${author.name} (${author.role})의 소개와 작성·검수한 글 목록입니다. ${author.bio}`,
    path: `/authors/${author.slug}`,
  });
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) notFound();

  const written = posts.filter((p) => p.author === author.slug);
  const reviewed = posts.filter((p) => p.reviewer === author.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: author.name,
          jobTitle: author.role,
          description: author.bio,
          url: `${siteConfig.url}/authors/${author.slug}`,
          worksFor: { "@type": "Organization", name: siteConfig.name },
        }}
      />
      <PageHero eyebrow="작성자" title={author.name} description={author.role} />
      <Container className="pt-6">
        <Breadcrumbs items={[{ name: author.name, href: `/authors/${author.slug}` }]} />
      </Container>

      <Section className="pt-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <aside className="space-y-4">
            <Card>
              <p className="leading-relaxed text-forest-700">{author.bio}</p>
              <dl className="mt-4 space-y-2 text-sm">
                <div>
                  <dt className="text-forest-500">전문 분야</dt>
                  <dd className="mt-1 flex flex-wrap gap-1.5">
                    {author.expertise.map((e) => (
                      <span key={e} className="rounded-full bg-forest-50 px-2.5 py-1 text-xs text-forest-700">
                        {e}
                      </span>
                    ))}
                  </dd>
                </div>
                <div className="pt-2">
                  <dt className="text-forest-500">연락 가능 채널</dt>
                  <dd className="mt-1 text-forest-800">{author.contact}</dd>
                </div>
                <div className="pt-2">
                  <dt className="text-forest-500">최근 업데이트</dt>
                  <dd className="mt-1 text-forest-800">{author.updatedAt}</dd>
                </div>
              </dl>
            </Card>
            <Card>
              <h2 className="font-semibold text-forest-900">경력</h2>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-forest-600">
                {author.career.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Card>
          </aside>

          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold text-forest-900">작성한 글</h2>
            <ul className="mt-3 space-y-2">
              {written.length > 0 ? (
                written.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/wellness-guide/${p.slug}`}
                      className="flex items-center justify-between rounded-lg border border-forest-100 px-4 py-3 text-sm text-forest-800 transition-colors hover:bg-forest-50"
                    >
                      {p.title}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))
              ) : (
                <li className="text-sm text-forest-500">작성한 글이 없습니다.</li>
              )}
            </ul>

            <h2 className="mt-8 text-lg font-semibold text-forest-900">검수한 글</h2>
            <ul className="mt-3 space-y-2">
              {reviewed.length > 0 ? (
                reviewed.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/wellness-guide/${p.slug}`}
                      className="flex items-center justify-between rounded-lg border border-forest-100 px-4 py-3 text-sm text-forest-800 transition-colors hover:bg-forest-50"
                    >
                      {p.title}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))
              ) : (
                <li className="text-sm text-forest-500">검수한 글이 없습니다.</li>
              )}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
