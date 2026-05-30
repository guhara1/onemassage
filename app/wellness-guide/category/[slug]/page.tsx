import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero, Section, Container, Notice } from "@/components/ui";
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

export function generateStaticParams() {
  return wellnessCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return buildMetadata({
    title: `${category.title} | 웰니스 가이드`,
    description: category.metaDescription ?? category.description,
    path: `/wellness-guide/category/${category.slug}`,
  });
}

export default async function WellnessCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const all = postsInCategory(category.label);
  const totalPages = totalPagesOf(all.length);
  const pagePosts = pageSlice(all, 1);
  const basePath = `/wellness-guide/category/${category.slug}`;

  return (
    <>
      <JsonLd
        data={itemListSchema({
          name: `${category.title} | 웰니스 가이드`,
          description: category.description,
          url: `${siteConfig.url}${basePath}`,
          items: pagePosts.map((p) => ({
            name: p.title,
            url: `${siteConfig.url}/wellness-guide/${p.slug}`,
          })),
        })}
      />

      <PageHero eyebrow="웰니스 가이드" title={category.title} description={category.description} />
      <Container className="pt-6">
        <Breadcrumbs
          items={[
            { name: "웰니스 가이드", href: "/wellness-guide" },
            { name: category.title, href: basePath },
          ]}
        />
      </Container>

      <Section className="pt-8">
        <CategoryChips activeSlug={category.slug} />

        {all.length > 0 ? (
          <>
            <PostGrid posts={pagePosts} />
            <Pagination basePath={basePath} page={1} totalPages={totalPages} />
          </>
        ) : (
          <Notice tone="info">
            이 카테고리의 글을 준비 중입니다.{" "}
            <Link href="/wellness-guide" className="font-medium underline">
              전체 가이드 보기
            </Link>
          </Notice>
        )}
      </Section>
    </>
  );
}
