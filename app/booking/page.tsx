import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookingForm } from "@/components/BookingForm";
import { PageHero, Section, Container, Card } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "방문 마사지 예약하기 | 지역·시간 선택",
  description:
    "방문 지역과 희망 시간을 선택해 예약을 신청하세요. 상담원이 가능 시간과 지역을 확인해 연락드립니다. 건전한 웰니스 목적의 서비스만 제공합니다.",
  path: "/booking",
});

const infoSteps = [
  "예약 신청서를 작성합니다.",
  "상담원이 가능 시간·지역을 확인해 연락드립니다.",
  "예약이 확정되면 방문 안내를 드립니다.",
];

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="예약"
        title="방문 마사지 예약하기"
        description="아래 정보를 입력해 주시면 상담원이 가능 시간과 지역을 확인해 연락드립니다."
      />
      <Container className="pt-6">
        <Breadcrumbs items={[{ name: "예약하기", href: "/booking" }]} />
      </Container>

      <Section className="pt-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <BookingForm />
            </Card>
          </div>
          <aside className="space-y-4">
            <Card>
              <h2 className="text-base font-semibold text-forest-900">예약 진행 안내</h2>
              <ol className="mt-3 space-y-3">
                {infoSteps.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm text-forest-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest-100 text-xs font-bold text-forest-700">
                      {i + 1}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </Card>
            <Card>
              <h2 className="text-base font-semibold text-forest-900">안전 정책</h2>
              <p className="mt-2 text-sm leading-relaxed text-forest-600">
                테라피스트와 고객 모두의 안전을 위해 부적절한 요청은 접수되지 않으며, 현장에서도
                서비스가 중단될 수 있습니다.
              </p>
            </Card>
          </aside>
        </div>
      </Section>
    </>
  );
}
