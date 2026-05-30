import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero, Section, Container } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "이용약관",
  description:
    "원마사지 서비스 정의, 예약 절차, 결제 및 취소, 환불 기준, 고객 의무, 테라피스트 보호 정책, 부적절한 요청 금지, 면책 조항, 분쟁 해결 절차를 안내합니다.",
  path: "/terms",
});

const sections: { h: string; body: string[] }[] = [
  {
    h: "제1조 (서비스 정의)",
    body: [
      "본 서비스는 검증된 전문 테라피스트가 고객의 공간을 방문해 제공하는 합법 웰니스 방문 마사지 서비스입니다. 의료 행위가 아니며 질병의 진단·치료를 목적으로 하지 않습니다.",
    ],
  },
  {
    h: "제2조 (예약 절차)",
    body: [
      "이용자는 예약 신청서를 통해 방문 지역과 희망 시간을 신청하며, 상담원이 가능 여부를 확인해 예약을 확정합니다.",
    ],
  },
  {
    h: "제3조 (결제 및 취소)",
    body: [
      "요금과 추가 비용은 예약 확정 전에 고지되며, 취소·변경 시점에 따라 수수료가 적용될 수 있습니다.",
    ],
  },
  {
    h: "제4조 (환불 기준)",
    body: [
      "환불은 취소·변경 시점에 따른 기준을 적용하며, 자세한 내용은 요금 안내 페이지의 환불·취소 기준을 따릅니다.",
    ],
  },
  {
    h: "제5조 (고객 의무)",
    body: [
      "이용자는 정확한 예약 정보를 제공하고, 안전하고 독립적인 이용 공간을 마련하며, 건전한 웰니스 목적으로 서비스를 이용해야 합니다.",
    ],
  },
  {
    h: "제6조 (테라피스트 보호 정책)",
    body: [
      "테라피스트의 안전과 권리를 보호하며, 안전을 위협하는 환경에서는 서비스가 제공되지 않을 수 있습니다.",
    ],
  },
  {
    h: "제7조 (부적절한 요청 금지)",
    body: [
      "건전한 웰니스 목적 외의 부적절하거나 불법적인 요청은 접수되지 않으며, 현장에서도 서비스가 즉시 중단될 수 있습니다.",
    ],
  },
  {
    h: "제8조 (서비스 중단 기준)",
    body: [
      "안전 위협, 부적절한 요청, 약관 위반 등의 사유가 있는 경우 서비스 제공이 중단될 수 있습니다.",
    ],
  },
  {
    h: "제9조 (면책 조항)",
    body: [
      "본 서비스는 일반적인 웰니스 케어를 제공하며, 의료적 효과를 보장하지 않습니다. 이용자의 기저질환 등으로 인한 문제에 대해서는 사전 고지 및 전문가 상담 권고를 따릅니다.",
    ],
  },
  {
    h: "제10조 (분쟁 해결 절차)",
    body: [
      "서비스 이용과 관련한 분쟁은 상호 협의를 우선하며, 협의가 어려운 경우 관련 법령과 절차에 따라 해결합니다.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="고객지원" title="이용약관" />
      <Container className="pt-6">
        <Breadcrumbs items={[{ name: "이용약관", href: "/terms" }]} />
      </Container>

      <Section className="pt-8">
        <div className="mx-auto max-w-3xl space-y-7">
          {sections.map((s) => (
            <section key={s.h}>
              <h2 className="text-lg font-semibold text-forest-900">{s.h}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-2 leading-relaxed text-forest-700">
                  {p}
                </p>
              ))}
            </section>
          ))}
          <p className="text-sm text-forest-400">
            * 본 약관은 예시이며 실제 운영 환경과 관련 법령에 맞게 검토·보완해야 합니다.
          </p>
        </div>
      </Section>
    </>
  );
}
