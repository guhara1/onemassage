import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageHero, Section, Container, Card, Notice } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "테라피스트 검증 기준 | 신뢰센터",
  description:
    "원마사지는 경력 확인, 서비스·위생 교육, 안전 정책 동의, 후기 기반 품질 관리 등 테라피스트 검증 기준을 운영합니다.",
  path: "/trust/therapist-standards",
});

const standards = [
  { t: "경력 확인", d: "관련 경력과 활동 이력을 사전에 확인합니다." },
  { t: "서비스 교육", d: "케어 절차와 고객 응대 기준에 대한 교육을 진행합니다." },
  { t: "위생 교육", d: "손 위생과 도구 관리 등 위생 기준 교육을 이수합니다." },
  { t: "고객 응대 교육", d: "예약 안내부터 마무리까지 응대 기준을 교육합니다." },
  { t: "안전 정책 동의", d: "고객·테라피스트 보호를 위한 안전 정책에 동의합니다." },
  { t: "후기 기반 품질 관리", d: "이용 후기를 바탕으로 서비스 품질을 점검합니다." },
];

export default function TherapistStandardsPage() {
  return (
    <>
      <PageHero
        eyebrow="신뢰센터"
        title="테라피스트 검증 기준"
        description="검증된 전문 테라피스트가 안정적인 케어를 제공할 수 있도록 기준을 운영합니다."
      />
      <Container className="pt-6">
        <Breadcrumbs items={[{ name: "테라피스트 검증 기준", href: "/trust/therapist-standards" }]} />
      </Container>

      <Section className="pt-8">
        <div className="mx-auto mb-10 max-w-3xl space-y-4 text-base leading-relaxed text-forest-700">
          <p>
            방문 마사지는 테라피스트가 고객의 사적인 공간으로 직접 방문한다는 점에서, 매장 서비스보다
            신뢰와 검증이 더 중요합니다. 원마사지는 누가 방문하는지, 어떤 기준으로 선발·관리되는지를
            투명하게 공개하는 것이 고객과 테라피스트 모두를 보호하는 출발점이라고 봅니다. 아래는
            테라피스트가 활동하기 위해 거치는 검증·교육 기준입니다.
          </p>
          <p>
            검증은 한 번으로 끝나지 않습니다. 활동을 시작한 이후에도 이용 후기와 운영 과정에서
            확인되는 내용을 바탕으로 서비스 품질을 지속적으로 점검하며, 기준에 미치지 못하거나 안전
            정책에 어긋나는 경우에는 재교육·재배정 또는 이용 제한 조치를 진행합니다.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((s) => (
            <Card key={s.t}>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-forest-50 text-forest-700">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="font-semibold text-forest-900">{s.t}</h2>
              <p className="mt-1 text-sm leading-relaxed text-forest-600">{s.d}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Card>
            <h2 className="text-lg font-semibold text-forest-900">지속적인 품질 관리</h2>
            <p className="mt-2 text-sm leading-relaxed text-forest-600">
              테라피스트는 활동 시작 이후에도 위생 기준 준수, 시간 약속, 고객 응대 태도, 안전 정책
              이행 여부를 점검받습니다. 이용 후기는 단순한 홍보 수단이 아니라 품질을 확인하고
              개선하는 자료로 활용되며, 반복적으로 기준에 미치지 못하는 경우 활동이 제한됩니다.
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-forest-900">문제 발생 시 대응</h2>
            <p className="mt-2 text-sm leading-relaxed text-forest-600">
              서비스 과정에서 문제가 확인되면 상황을 확인한 뒤 재배정 또는 이용 제한 기준에 따라
              조치하며, 고객 안전과 신뢰를 최우선으로 처리합니다. 안전을 위협하거나 부적절한 요청이
              있는 환경에서는 테라피스트 보호를 위해 서비스가 중단될 수 있습니다.
            </p>
          </Card>
        </div>

        <div className="mt-8">
          <Notice tone="warning">
            테라피스트 검증·교육 기준은 건전한 웰니스 서비스 품질과 안전을 위한 것이며, 의료
            자격이나 치료 행위를 보장하는 것이 아닙니다. 통증·질환과 관련된 관리가 필요한 경우에는
            의료 전문가와 상담해 주세요.
          </Notice>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
