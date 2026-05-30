import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageHero, Section, Container, Card, Notice } from "@/components/ui";
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
        <div className="mx-auto mb-10 max-w-3xl space-y-4 text-base leading-relaxed text-forest-700">
          <p>
            방문 케어는 고객의 공간에서 이루어지기 때문에 위생과 안전이 무엇보다 중요합니다.
            원마사지는 매 방문마다 동일한 기준이 지켜지도록 위생·안전 정책을 운영하며, 이는 고객의
            건강과 신뢰를 지키는 동시에 테라피스트를 보호하기 위한 약속이기도 합니다. 아래 항목은
            예약 단계부터 방문, 마무리까지 적용되는 기준입니다.
          </p>
          <p>
            위생 관리는 방문 전후 손 소독과 사용 도구의 청결 유지를 기본으로 합니다. 안전 관리는
            예약자 정보와 방문 조건을 사전에 확인하고, 서비스 전 고객의 컨디션과 주의사항을
            점검하는 것에서 시작합니다. 건전한 웰니스 목적 외의 부적절하거나 불법적인 요청은 예약
            단계에서 접수되지 않으며, 현장에서도 서비스가 즉시 중단될 수 있습니다.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {policies.map((p) => (
            <Card key={p.t}>
              <h2 className="font-semibold text-forest-900">{p.t}</h2>
              <p className="mt-1 text-sm leading-relaxed text-forest-600">{p.d}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Card>
            <h2 className="text-lg font-semibold text-forest-900">고객님께 부탁드리는 점</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-forest-600">
              <li>· 환기가 가능한 깨끗하고 독립적인 공간과 수건을 준비해 주세요.</li>
              <li>· 통증·부상·기저질환 등 사전에 알아두면 좋은 컨디션을 공유해 주세요.</li>
              <li>· 정확한 주소와 건물 출입 방법을 미리 안내해 주시면 안전한 방문에 도움이 됩니다.</li>
              <li>· 테라피스트의 안전과 권리를 존중해 주세요.</li>
            </ul>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-forest-900">긴급 상황 대응</h2>
            <p className="mt-2 text-sm leading-relaxed text-forest-600">
              서비스 중 고객의 컨디션에 이상이 느껴지거나 안전이 우려되는 상황이 발생하면 즉시
              케어를 중단하고 상황에 맞는 조치를 진행합니다. 필요한 경우 보호자 연락이나 외부
              도움을 요청하며, 안전을 위협하는 환경에서는 테라피스트 보호를 위해 서비스가 제공되지
              않을 수 있습니다.
            </p>
          </Card>
        </div>

        <div className="mt-8">
          <Notice tone="warning">
            본 위생·안전 정책은 건전한 웰니스 방문 케어를 안전하게 제공하기 위한 것이며, 의료
            행위나 질병의 진단·치료를 대신하지 않습니다. 건강상 우려가 있는 경우 이용 전 의료
            전문가와 상담해 주세요.
          </Notice>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
