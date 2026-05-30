import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero, Section, Container } from "@/components/ui";
import { PostGrid } from "@/components/PostGrid";
import { Pagination } from "@/components/Pagination";
import { CategoryChips } from "@/components/CategoryChips";
import { JsonLd } from "@/components/JsonLd";
import {
  wellnessCategories,
  getCategoryBySlug,
  postsInCategory,
  pageSlice,
  totalPagesOf,
} from "@/lib/wellness";
import { buildMetadata } from "@/lib/metadata";
import { itemListSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

/** 각 카테고리의 2페이지부터 정적 생성 */
export function generateStaticParams() {
  const params: { slug: string; page: string }[] = [];
  for (const c of wellnessCategories) {
    const total = totalPagesOf(postsInCategory(c.label).length);
    for (let n = 2; n <= total; n++) params.push({ slug: c.slug, page: String(n) });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; page: string }>;
}): Promise<Metadata> {
  const { slug, page } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return buildMetadata({
    title: `${category.title} (${page}페이지) | 웰니스 가이드`,
    description: category.description,
    path: `/wellness-guide/category/${category.slug}/page/${page}`,
  });
}

export default async function WellnessCategoryPagedPage({
  params,
}: {
  params: Promise<{ slug: string; page: string }>;
}) {
  const { slug, page } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const pageNum = Number(page);
  const all = postsInCategory(category.label);
  const totalPages = totalPagesOf(all.length);

  if (!Number.isInteger(pageNum) || pageNum < 2 || pageNum > totalPages) notFound();

  const pagePosts = pageSlice(all, pageNum);
  const basePath = `/wellness-guide/category/${category.slug}`;

  return (
    <>
      <JsonLd
        data={itemListSchema({
          name: `${category.title} (${pageNum}페이지) | 웰니스 가이드`,
          description: category.description,
          url: `${siteConfig.url}${basePath}/page/${pageNum}`,
          items: pagePosts.map((p) => ({
            name: p.title,
            url: `${siteConfig.url}/wellness-guide/${p.slug}`,
          })),
        })}
      />

      <PageHero
        eyebrow="웰니스 가이드"
        title={category.title}
        description={`${category.title} ${pageNum}페이지입니다.`}
      />
      <Container className="pt-6">
        <Breadcrumbs
          items={[
            { name: "웰니스 가이드", href: "/wellness-guide" },
            { name: category.title, href: basePath },
            { name: `${pageNum}페이지`, href: `${basePath}/page/${pageNum}` },
          ]}
        />
      </Container>

      <Section className="pt-8">
        <CategoryChips activeSlug={category.slug} />
        <PostGrid posts={pagePosts} />
        <Pagination basePath={basePath} page={pageNum} totalPages={totalPages} />
      </Section>
    </>
  );
}
