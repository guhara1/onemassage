import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero, Section, Container } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "개인정보처리방침",
  description:
    "원마사지의 개인정보 수집 항목, 수집 목적, 보관 기간, 제3자 제공 여부, 예약 정보 처리, 쿠키 사용, 개인정보 보호책임자를 안내합니다.",
  path: "/privacy",
});

const sections: { h: string; body: string[] }[] = [
  {
    h: "1. 수집 항목",
    body: [
      "예약 상담을 위해 이름, 연락처, 방문 지역, 상세 주소, 희망 일시, 서비스 종류, 요청사항을 수집합니다.",
    ],
  },
  {
    h: "2. 수집 목적",
    body: [
      "예약 접수 및 상담, 방문 일정 조율, 서비스 제공과 고객 안내를 위해 개인정보를 이용합니다.",
    ],
  },
  {
    h: "3. 보관 기간",
    body: [
      "수집한 개인정보는 이용 목적이 달성된 후 관련 법령이 정한 기간 또는 내부 방침에 따라 지체 없이 파기합니다.",
    ],
  },
  {
    h: "4. 제3자 제공 여부",
    body: [
      "법령에 근거하거나 이용자가 동의한 경우를 제외하고 개인정보를 제3자에게 제공하지 않습니다. 서비스 제공에 필요한 범위 내에서 담당 테라피스트에게 방문에 필요한 정보가 전달될 수 있습니다.",
    ],
  },
  {
    h: "5. 예약 정보 처리",
    body: ["예약 정보는 예약 상담 및 서비스 제공 목적 범위 내에서만 처리합니다."],
  },
  {
    h: "6. 민감정보 수집 금지",
    body: [
      "건강 관련 민감정보는 원칙적으로 수집하지 않으며, 안전한 서비스 제공을 위해 필요한 주의사항은 이용자가 자발적으로 제공한 범위에서만 활용합니다.",
    ],
  },
  {
    h: "7. 쿠키 사용 여부",
    body: [
      "서비스 품질 개선과 이용 통계를 위해 쿠키 또는 유사 기술을 사용할 수 있으며, 브라우저 설정에서 거부할 수 있습니다.",
    ],
  },
  {
    h: "8. 개인정보 보호책임자 및 문의",
    body: [
      `개인정보 보호책임자: ${siteConfig.business.privacyOfficer} / 문의: ${siteConfig.email}`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="고객지원" title="개인정보처리방침" />
      <Container className="pt-6">
        <Breadcrumbs items={[{ name: "개인정보처리방침", href: "/privacy" }]} />
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
            * 본 방침은 예시이며 실제 운영 환경과 관련 법령에 맞게 검토·보완해야 합니다.
          </p>
        </div>
      </Section>
    </>
  );
}
