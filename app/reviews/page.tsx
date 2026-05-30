import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ReviewCard } from "@/components/ReviewCard";
import { CTASection } from "@/components/CTASection";
import { PageHero, Section, Container, Notice } from "@/components/ui";
import { reviews } from "@/data/reviews";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "실제 고객 후기 | 방문 마사지 이용 후기",
  description:
    "실제 예약 고객의 후기만 게시합니다. 이용 지역·서비스·시간·평점·작성일을 함께 표기하며, 허위·과장 후기는 사용하지 않습니다.",
  path: "/reviews",
});

const principles = [
  "실제 예약 고객 후기만 게시",
  "허위 후기 금지",
  "대가성 후기는 표시",
  "부정 후기 임의 삭제 금지",
  "개인정보 노출 방지",
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="신뢰센터"
        title="실제 고객 후기"
        description="투명한 후기 운영을 위해 검수 정책을 적용합니다."
      />
      <Container className="pt-6">
        <Breadcrumbs items={[{ name: "고객 후기", href: "/reviews" }]} />
      </Container>

      <Section className="pt-8">
        <Notice tone="info" title="후기 운영 원칙">
          <ul className="mt-1 list-inside list-disc space-y-0.5">
            {principles.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </Notice>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
