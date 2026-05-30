import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero, Section, Container } from "@/components/ui";
import { PostGrid } from "@/components/PostGrid";
import { Pagination } from "@/components/Pagination";
import { CategoryChips } from "@/components/CategoryChips";
import { JsonLd } from "@/components/JsonLd";
import { sortedPosts, pageSlice, totalPagesOf } from "@/lib/wellness";
import { buildMetadata } from "@/lib/metadata";
import { itemListSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

/** 2페이지부터 정적 생성 (1페이지는 /wellness-guide 가 담당) */
export function generateStaticParams() {
  const total = totalPagesOf(sortedPosts().length);
  const params: { page: string }[] = [];
  for (let n = 2; n <= total; n++) params.push({ page: String(n) });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  return buildMetadata({
    title: `웰니스 가이드 (${page}페이지) | 피로·근육·수면 관리 정보`,
    description:
      "출장마사지 이용 가이드와 직장인 피로 관리, 운동 후 회복, 수면·휴식 등 검수를 거친 웰니스 정보 모음입니다.",
    path: `/wellness-guide/page/${page}`,
  });
}

export default async function WellnessGuidePagedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const pageNum = Number(page);
  const all = sortedPosts();
  const totalPages = totalPagesOf(all.length);

  if (!Number.isInteger(pageNum) || pageNum < 2 || pageNum > totalPages) notFound();

  const pagePosts = pageSlice(all, pageNum);

  return (
    <>
      <JsonLd
        data={itemListSchema({
          name: `웰니스 가이드 (${pageNum}페이지)`,
          description:
            "출장마사지 이용 가이드와 피로·근육·수면 관리 등 검수를 거친 웰니스 정보 모음.",
          url: `${siteConfig.url}/wellness-guide/page/${pageNum}`,
          items: pagePosts.map((p) => ({
            name: p.title,
            url: `${siteConfig.url}/wellness-guide/${p.slug}`,
          })),
        })}
      />

      <PageHero
        eyebrow="웰니스 가이드"
        title="웰니스 가이드"
        description={`전체 글 ${pageNum}페이지입니다.`}
      />
      <Container className="pt-6">
        <Breadcrumbs
          items={[
            { name: "웰니스 가이드", href: "/wellness-guide" },
            { name: `${pageNum}페이지`, href: `/wellness-guide/page/${pageNum}` },
          ]}
        />
      </Container>

      <Section className="pt-8">
        <CategoryChips />
        <PostGrid posts={pagePosts} />
        <Pagination basePath="/wellness-guide" page={pageNum} totalPages={totalPages} />
      </Section>
    </>
  );
}
