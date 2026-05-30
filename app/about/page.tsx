import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageHero, Section, Container, Card, Notice } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "회사 소개 | 방문 웰니스 마사지 운영 원칙",
  description:
    "원마사지는 합법성과 투명성을 최우선으로 운영하는 방문 웰니스 케어 서비스입니다. 운영 원칙, 사업자 정보, 고객·테라피스트 보호 원칙을 공개합니다.",
  path: "/about",
});

const principles = [
  { t: "합법 운영", d: "건전한 웰니스 목적의 합법 출장마사지 서비스만 제공합니다." },
  { t: "투명한 정보", d: "요금, 출장비, 취소 기준, 사업자 정보를 투명하게 공개합니다." },
  { t: "위생·안전 우선", d: "손 위생과 도구 관리, 안전 정책을 우선합니다." },
  { t: "검증된 테라피스트", d: "경력·교육·안전 정책 동의를 거친 테라피스트가 방문합니다." },
  { t: "부적절 요청 거절", d: "부적절하거나 불법적인 요청은 접수되지 않습니다." },
  { t: "고객·테라피스트 보호", d: "양측 모두를 보호하는 정책을 운영합니다." },
];

export default function AboutPage() {
  const b = siteConfig.business;
  return (
    <>
      <PageHero
        eyebrow="신뢰센터"
        title="투명하게 운영하는 방문 웰니스 케어 서비스"
        description="원마사지는 고객이 안심하고 예약할 수 있는 합법적이고 투명한 방문 웰니스 브랜드를 지향합니다."
      />
      <Container className="pt-6">
        <Breadcrumbs items={[{ name: "회사 소개", href: "/about" }]} />
      </Container>

      <Section className="pt-8">
        <div className="max-w-3xl">
          <h2 className="text-xl font-semibold text-forest-900">브랜드 미션</h2>
          <p className="mt-3 leading-relaxed text-forest-700">
            검증된 전문 테라피스트가 고객의 공간으로 방문하는 합법 방문 웰니스 케어 서비스를
            제공합니다. 검색엔진을 속이는 구조보다 고객이 직접 봐도 신뢰할 수 있는 구조가
            장기적으로 더 강하다는 원칙으로 운영합니다.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <Card key={p.t}>
              <h3 className="font-semibold text-forest-900">{p.t}</h3>
              <p className="mt-1 text-sm leading-relaxed text-forest-600">{p.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <Card>
          <h2 className="text-lg font-semibold text-forest-900">사업자 정보</h2>
          <dl className="mt-4 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
            <div className="flex justify-between border-b border-forest-100 pb-2">
              <dt className="text-forest-500">상호</dt>
              <dd className="font-medium text-forest-900">{b.company}</dd>
            </div>
            <div className="flex justify-between border-b border-forest-100 pb-2">
              <dt className="text-forest-500">대표자</dt>
              <dd className="font-medium text-forest-900">{b.ceo}</dd>
            </div>
            <div className="flex justify-between border-b border-forest-100 pb-2">
              <dt className="text-forest-500">사업자등록번호</dt>
              <dd className="font-medium text-forest-900">{b.registrationNumber}</dd>
            </div>
            <div className="flex justify-between border-b border-forest-100 pb-2">
              <dt className="text-forest-500">주소</dt>
              <dd className="font-medium text-forest-900">{b.address}</dd>
            </div>
            <div className="flex justify-between border-b border-forest-100 pb-2">
              <dt className="text-forest-500">고객지원</dt>
              <dd className="font-medium text-forest-900">{siteConfig.phone}</dd>
            </div>
            <div className="flex justify-between border-b border-forest-100 pb-2">
              <dt className="text-forest-500">운영시간</dt>
              <dd className="font-medium text-forest-900">{siteConfig.hours}</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs text-forest-400">
            * 위 정보는 예시 값이며 실제 운영 시 정확한 사업자 정보로 교체해야 합니다.
          </p>
        </Card>
      </Section>

      <Container className="pb-4">
        <Notice tone="warning">
          본 서비스는 의료 행위가 아니며 질병의 진단·치료를 목적으로 하지 않습니다.
          성인·유흥·불법 서비스와 무관합니다.
        </Notice>
      </Container>

      <CTASection />
    </>
  );
}
