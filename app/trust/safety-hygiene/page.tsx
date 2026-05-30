import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageHero, Section, Container, Card } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "위생·안전 정책 | 신뢰센터",
  description:
    "손 위생, 도구 관리, 예약 정보 확인, 부적절한 요청 거절, 개인정보 보호, 긴급 상황 대응까지. 고객과 테라피스트를 보호하는 위생·안전 정책을 안내합니다.",
  path: "/trust/safety-hygiene",
});

const policies = [
  { t: "손 위생", d: "방문 전후 손 소독을 시행합니다." },
  { t: "도구 관리", d: "사용 도구를 청결하게 관리하고 점검합니다." },
  { t: "예약 정보 확인", d: "예약자 정보와 방문 조건을 사전에 확인합니다." },
  { t: "고객 컨디션 사전 확인", d: "서비스 전 컨디션과 주의사항을 확인합니다." },
  { t: "부적절한 요청 거절", d: "건전한 웰니스 목적 외 요청은 접수·진행되지 않습니다." },
  { t: "테라피스트 보호", d: "테라피스트의 안전과 권리를 보호합니다." },
  { t: "고객 개인정보 보호", d: "예약 정보는 목적 범위 내에서만 처리합니다." },
  { t: "긴급 상황 대응", d: "긴급 상황 발생 시 대응 기준에 따라 조치합니다." },
];

export default function SafetyHygienePage() {
  return (
    <>
      <PageHero
        eyebrow="신뢰센터"
        title="위생과 안전을 우선하는 방문 케어 정책"
        description="고객과 테라피스트 모두가 안심할 수 있는 환경을 위해 정책을 운영합니다."
      />
      <Container className="pt-6">
        <Breadcrumbs items={[{ name: "위생·안전 정책", href: "/trust/safety-hygiene" }]} />
      </Container>

      <Section className="pt-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {policies.map((p) => (
            <Card key={p.t}>
              <h2 className="font-semibold text-forest-900">{p.t}</h2>
              <p className="mt-1 text-sm leading-relaxed text-forest-600">{p.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
