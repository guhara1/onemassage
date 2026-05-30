import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { PageHero, Section, SectionTitle, Container } from "@/components/ui";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "방문 마사지 서비스 안내 | 웰니스 홈케어 종류",
  description:
    "아로마 릴렉스, 스포츠 근육, 오피스 피로, 커플·가족 방문 케어까지. 목적에 맞는 합법 웰니스 방문 마사지 서비스를 비교해 선택하세요.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="서비스"
        title="방문 케어 서비스"
        description="목적과 컨디션에 맞춰 선택할 수 있는 합법 웰니스 방문 마사지 서비스입니다."
      />
      <Container className="pt-6">
        <Breadcrumbs items={[{ name: "서비스", href: "/services" }]} />
      </Container>

      <Section className="pt-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      <Section id="compare" className="bg-forest-50/60">
        <SectionTitle
          title="서비스 비교표"
          description="대상과 특징을 한눈에 비교해 보세요."
        />
        <div className="overflow-x-auto rounded-2xl border border-forest-100 bg-white shadow-sm">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-forest-700 text-white">
                <th scope="col" className="px-4 py-3 font-semibold">서비스</th>
                <th scope="col" className="px-4 py-3 font-semibold">추천 대상</th>
                <th scope="col" className="px-4 py-3 font-semibold">특징</th>
                <th scope="col" className="px-4 py-3 text-right font-semibold">60분 기준</th>
              </tr>
            </thead>
            <tbody>
              {services.map((s, i) => (
                <tr key={s.slug} className={i % 2 === 0 ? "bg-white" : "bg-forest-50/50"}>
                  <th scope="row" className="px-4 py-3 align-top font-medium text-forest-900">
                    {s.name}
                  </th>
                  <td className="px-4 py-3 align-top text-forest-600">{s.audience[0]}</td>
                  <td className="px-4 py-3 align-top text-forest-600">{s.cardDescription}</td>
                  <td className="px-4 py-3 text-right align-top text-forest-700">
                    {s.prices[0]?.price}
                  </td>
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
