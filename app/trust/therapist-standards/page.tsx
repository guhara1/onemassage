import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageHero, Section, Container, Card } from "@/components/ui";
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

        <div className="mt-8">
          <Card>
            <h2 className="text-lg font-semibold text-forest-900">문제 발생 시 대응</h2>
            <p className="mt-2 text-sm leading-relaxed text-forest-600">
              서비스 과정에서 문제가 확인되면 재배정 또는 이용 제한 기준에 따라 조치하며, 고객
              안전과 신뢰를 우선으로 처리합니다.
            </p>
          </Card>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
