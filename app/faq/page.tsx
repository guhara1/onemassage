import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { PageHero, Section, Container, Card } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "자주 묻는 질문 | 출장마사지 이용 안내",
  description:
    "출장마사지 합법 여부, 이용 가능 공간, 준비사항, 적합하지 않은 경우, 테라피스트 지정, 후기 관리 등 자주 묻는 질문을 정리했습니다.",
  path: "/faq",
});

const prep = [
  "편안하고 독립적인 공간",
  "깨끗한 수건",
  "환기 가능한 환경",
  "정확한 주소와 출입 정보",
];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow="이용안내"
        title="자주 묻는 질문"
        description="궁금한 점을 빠르게 확인하세요. 더 궁금한 내용은 상담으로 문의해 주세요."
      />
      <Container className="pt-6">
        <Breadcrumbs items={[{ name: "자주 묻는 질문", href: "/faq" }]} />
      </Container>

      <Section className="pt-8">
        <FAQAccordion items={faqs} />
      </Section>

      <Section className="pt-0" id="preparation">
        <Card>
          <h2 className="text-lg font-semibold text-forest-900">준비사항</h2>
          <p className="mt-2 text-sm text-forest-600">
            편안한 케어를 위해 아래 항목을 준비해 주세요. 서비스에 따라 별도 안내가 제공됩니다.
          </p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {prep.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm text-forest-700">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 text-forest-600" aria-hidden="true">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {p}
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <CTASection />
    </>
  );
}
