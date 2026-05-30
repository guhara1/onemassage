import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PricingTable } from "@/components/PricingTable";
import { CTASection } from "@/components/CTASection";
import { PageHero, Section, SectionTitle, Container, Card, Notice } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "방문 마사지 요금 안내 | 시간별 가격과 출장비",
  description:
    "방문 마사지 요금을 60분·90분·120분 기준으로 투명하게 안내합니다. 심야 추가 비용, 지역별 출장비, 환불·취소 기준을 예약 전에 확인하세요.",
  path: "/pricing",
});

const additional = [
  { t: "심야 시간 추가 비용", d: "운영 시간 외 심야 예약 시 추가 비용이 발생할 수 있습니다." },
  { t: "지역별 출장비", d: "기본 출장 구역 외 지역은 출장비가 별도로 발생할 수 있습니다." },
  { t: "주차비", d: "방문지 주차 여건에 따라 주차비가 발생할 수 있습니다." },
  { t: "예약 변경 수수료", d: "예약 변경·취소 시점에 따라 수수료가 적용될 수 있습니다." },
];

const included = [
  "테라피스트 방문",
  "기본 위생 준비",
  "서비스 전 컨디션 확인",
  "서비스 후 간단 피드백",
];

const notIncluded = ["의료 진단", "치료 행위", "의약품 제공", "부적절하거나 불법적인 서비스"];

const refundRows = [
  { when: "이용 24시간 전까지", fee: "무료 취소·변경" },
  { when: "이용 24시간 이내", fee: "예약금의 일부 수수료 발생 가능" },
  { when: "방문 당일 또는 노쇼", fee: "수수료 발생 가능 (사전 고지 기준 적용)" },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="이용안내"
        title="방문 마사지 요금 안내"
        description="모든 요금과 추가 비용을 예약 전에 투명하게 안내합니다."
      />
      <Container className="pt-6">
        <Breadcrumbs items={[{ name: "요금 안내", href: "/pricing" }]} />
      </Container>

      <Section className="pt-8">
        <SectionTitle title="기본 요금표" description="60분·90분·120분 기준 요금입니다." />
        <PricingTable />
      </Section>

      <Section className="pt-0">
        <SectionTitle title="추가 비용 안내" />
        <div className="grid gap-4 sm:grid-cols-2">
          {additional.map((a) => (
            <Card key={a.t}>
              <p className="font-semibold text-forest-900">{a.t}</p>
              <p className="mt-1 text-sm text-forest-600">{a.d}</p>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <Notice tone="info">
            추가 비용이 발생하는 경우 예약 확정 전 정확한 금액을 명확히 고지합니다.
          </Notice>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-lg font-semibold text-forest-900">포함 사항</h2>
            <ul className="mt-3 space-y-2">
              {included.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-forest-700">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-forest-600" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {i}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-forest-900">미포함 사항</h2>
            <ul className="mt-3 space-y-2">
              {notIncluded.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-forest-700">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-forest-400" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  {i}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section className="pt-0" id="refund">
        <SectionTitle
          title="환불·취소 기준"
          description="예약 전 반드시 확인해 주세요. 정확한 기준은 이용약관을 따릅니다."
        />
        <div className="overflow-x-auto rounded-2xl border border-forest-100 shadow-sm">
          <table className="w-full min-w-[420px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-forest-700 text-white">
                <th scope="col" className="px-4 py-3 font-semibold">취소·변경 시점</th>
                <th scope="col" className="px-4 py-3 font-semibold">수수료 기준</th>
              </tr>
            </thead>
            <tbody>
              {refundRows.map((r, i) => (
                <tr key={r.when} className={i % 2 === 0 ? "bg-white" : "bg-forest-50/50"}>
                  <th scope="row" className="px-4 py-3 font-medium text-forest-900">{r.when}</th>
                  <td className="px-4 py-3 text-forest-700">{r.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
