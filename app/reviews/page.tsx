import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ReviewCard } from "@/components/ReviewCard";
import { CTASection } from "@/components/CTASection";
import { PageHero, Section, Container, Notice, Card } from "@/components/ui";
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
        <div className="mx-auto mb-8 max-w-3xl space-y-4 text-base leading-relaxed text-forest-700">
          <p>
            후기는 방문 마사지를 선택할 때 가장 현실적인 참고 자료입니다. 그만큼 조작되거나 과장된
            후기는 고객의 판단을 흐릴 수 있어, 원마사지는 후기를 신중하게 운영합니다. 이 페이지에
            게시되는 후기는 실제 예약·이용 고객이 남긴 내용만을 대상으로 하며, 이용 지역·서비스
            종류·이용 시간·평점·작성일을 함께 표기해 맥락을 투명하게 보여드립니다.
          </p>
          <p>
            별점을 부풀리거나 존재하지 않는 후기를 만들어 구조화 데이터(평점 마크업)에 표시하는
            방식은 사용하지 않습니다. 대가성(협찬) 후기가 있는 경우에는 별도로 표기하며, 서비스에
            아쉬움을 남긴 후기라도 임의로 삭제하지 않습니다. 다만 개인을 특정할 수 있는 정보가
            담긴 내용은 고객 보호를 위해 표시 방식을 조정할 수 있습니다.
          </p>
        </div>

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

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Card>
            <h2 className="text-lg font-semibold text-forest-900">후기는 어떻게 검수되나요</h2>
            <p className="mt-2 text-sm leading-relaxed text-forest-600">
              후기는 실제 예약 이력과 연결되는지 확인한 뒤 게시합니다. 동일 문구의 반복, 서비스와
              무관한 홍보성 내용, 개인정보가 포함된 내용은 검수 과정에서 걸러지며, 사실과 다른
              과장 표현은 게시하지 않습니다.
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-forest-900">후기를 남기고 싶다면</h2>
            <p className="mt-2 text-sm leading-relaxed text-forest-600">
              서비스를 이용하신 뒤 느낀 점을 솔직하게 남겨 주시면, 다른 고객의 선택과 서비스 품질
              개선에 큰 도움이 됩니다. 후기 작성 방법은 이용 후 안내를 통해 확인하실 수 있습니다.
            </p>
          </Card>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
