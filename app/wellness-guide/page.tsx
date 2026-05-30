import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero, Section, Container, Notice } from "@/components/ui";
import { PostGrid } from "@/components/PostGrid";
import { Pagination } from "@/components/Pagination";
import { CategoryChips } from "@/components/CategoryChips";
import { JsonLd } from "@/components/JsonLd";
import { sortedPosts, pageSlice, totalPagesOf } from "@/lib/wellness";
import { buildMetadata } from "@/lib/metadata";
import { itemListSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "웰니스 가이드 | 피로·근육·수면 관리 정보",
  description:
    "출장마사지 이용 가이드와 직장인 피로, 운동 후 회복, 수면·휴식 등 검수를 거친 웰니스 정보를 제공합니다.",
  path: "/wellness-guide",
});

export default function WellnessGuidePage() {
  const all = sortedPosts();
  const totalPages = totalPagesOf(all.length);
  const pagePosts = pageSlice(all, 1);

  return (
    <>
      <JsonLd
        data={itemListSchema({
          name: "웰니스 가이드",
          description:
            "출장마사지 이용 가이드와 피로·근육·수면 관리 등 검수를 거친 웰니스 정보 모음.",
          url: `${siteConfig.url}/wellness-guide`,
          items: pagePosts.map((p) => ({
            name: p.title,
            url: `${siteConfig.url}/wellness-guide/${p.slug}`,
          })),
        })}
      />

      <PageHero
        eyebrow="웰니스 가이드"
        title="웰니스 가이드"
        description="안전하고 합리적인 선택을 돕기 위해 작성·검수된 정보성 콘텐츠입니다."
      />
      <Container className="pt-6">
        <Breadcrumbs items={[{ name: "웰니스 가이드", href: "/wellness-guide" }]} />
      </Container>

      <Section className="pt-8">
        <div className="mx-auto mb-10 max-w-3xl space-y-4 text-base leading-relaxed text-forest-700">
          <p>
            웰니스 가이드는 출장마사지를 처음 이용하거나, 일상 피로·근육 긴장·수면 문제를 스스로
            관리하고 싶은 분들을 위한 정보성 콘텐츠 공간입니다. 검색 순위를 올리기 위해 대량으로
            찍어내는 글이 아니라, 고객이 안전하고 합리적인 선택을 할 수 있도록 돕는 것을 목적으로
            작성합니다.
          </p>
          <p>
            모든 글에는 작성자, 작성일, 업데이트일을 표기하며, 건강·통증·운동 회복과 관련된 글에는
            검수자를 함께 표시합니다. 검수자가 없는 주제는 치료나 의학적 효과를 단정하는 표현을
            피하고, 누구나 일상에서 참고할 수 있는 생활 정보 수준으로 다룹니다. 정보가 바뀌거나
            보완이 필요하면 글을 업데이트하고 업데이트일을 갱신합니다.
          </p>
          <p>
            아래 카테고리는 마사지 전후 관리, 직장인 피로 관리, 운동 후 회복, 수면과 휴식,
            출장마사지 이용 가이드, 서비스 안전 가이드로 구성됩니다. 관심 있는 카테고리를 눌러 해당
            주제의 글만 모아 볼 수 있습니다.
          </p>
        </div>

        <CategoryChips />

        <PostGrid posts={pagePosts} />

        <Pagination basePath="/wellness-guide" page={1} totalPages={totalPages} />

        <div className="mt-8">
          <Notice tone="info">
            모든 정보성 글에는 작성자·작성일·업데이트일을 표기하며, 건강 관련 글에는 검수자와
            주의사항을 함께 제공합니다. 자세한 기준은{" "}
            <Link href="/editorial-policy" className="font-medium underline">
              편집 정책
            </Link>
            을 확인하세요.
          </Notice>
        </div>
      </Section>
    </>
  );
}
