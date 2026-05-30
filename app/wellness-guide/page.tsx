import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero, Section, Container, Notice } from "@/components/ui";
import { posts } from "@/data/posts";
import { getAuthor } from "@/data/authors";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "웰니스 가이드 | 피로·근육·수면 관리 정보",
  description:
    "방문 마사지 이용 가이드와 직장인 피로 관리, 운동 후 회복, 수면·휴식 등 검수를 거친 웰니스 정보를 제공합니다. 작성자와 업데이트일을 함께 표기합니다.",
  path: "/wellness-guide",
});

const categories = [
  "마사지 전후 관리",
  "직장인 피로 관리",
  "운동 후 회복",
  "수면과 휴식",
  "방문 마사지 이용 가이드",
  "서비스 안전 가이드",
];

export default function WellnessGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="웰니스 가이드"
        title="웰니스 가이드"
        description="안전하고 합리적인 선택을 돕기 위해 작성·검수된 정보성 콘텐츠입니다."
      />
      <Container className="pt-6">
        <Breadcrumbs items={[{ name: "웰니스 가이드", href: "/wellness-guide" }]} />
      </Container>

      <Section className="pt-8">
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <span key={c} className="rounded-full bg-forest-50 px-3 py-1 text-sm text-forest-700">
              {c}
            </span>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => {
            const author = getAuthor(p.author);
            return (
              <Link
                key={p.slug}
                href={`/wellness-guide/${p.slug}`}
                className="group flex flex-col rounded-2xl border border-forest-100 bg-white p-6 shadow-sm transition-all hover:border-forest-300 hover:shadow-md"
              >
                <span className="text-xs font-medium text-forest-500">{p.category}</span>
                <h2 className="mt-2 text-lg font-semibold text-forest-900 group-hover:text-forest-700">
                  {p.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-forest-600">{p.summary}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-forest-400">
                  <span>{author?.name}</span>
                  <time dateTime={p.updatedAt}>업데이트 {p.updatedAt}</time>
                </div>
              </Link>
            );
          })}
        </div>

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
