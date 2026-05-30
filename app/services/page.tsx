import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { PageHero, Section, SectionTitle, Container } from "@/components/ui";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "출장마사지 서비스 안내 | 웰니스 홈케어 종류",
  description:
    "아로마 릴렉스, 스포츠 근육, 오피스 피로, 커플·가족 방문 케어까지. 목적에 맞는 합법 웰니스 출장마사지 서비스를 비교해 선택하세요.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="서비스"
        title="방문 케어 서비스"
        description="목적과 컨디션에 맞춰 선택할 수 있는 합법 웰니스 출장마사지 서비스입니다."
      />
      <Container className="pt-6">
        <Breadcrumbs items={[{ name: "서비스", href: "/services" }]} />
      </Container>

      <Section className="pt-8">
        <div className="mx-auto mb-10 max-w-3xl space-y-4 text-base leading-relaxed text-forest-700">
          <p>
            원마사지의 방문 케어는 매장으로 이동하지 않고 자택·숙소·사무실 등 고객님이 편안한
            공간에서 전문 테라피스트의 관리를 받는 합법 웰니스 서비스입니다. 모든 케어는 예약제로
            운영되며, 예약 단계에서 방문 지역과 시간, 선호하는 강도, 집중이 필요한 부위, 건물 출입
            조건을 미리 확인해 방문 당일의 준비 시간을 줄이고 한정된 시간을 온전히 휴식에 쓸 수
            있도록 돕습니다.
          </p>
          <p>
            서비스는 목적에 따라 네 가지로 나뉩니다. 부드러운 리듬으로 긴장을 풀고 편안한 휴식을
            돕는 <strong>아로마 릴렉스 케어</strong>, 운동 후 회복과 반복 사용으로 인한 뻐근함을
            관리하는 <strong>스포츠 근육 케어</strong>, 장시간 앉아 일하는 분의 목·어깨·등 피로를
            중심으로 진행하는 <strong>오피스 피로 케어</strong>, 그리고 같은 공간에서 가족·커플이
            순차적으로 이용하는 <strong>커플·가족 방문 케어</strong>입니다. 각 서비스는 추천 대상과
            진행 방식, 주의사항이 서로 다르므로 아래 카드에서 상세 내용을 확인하고 선택하시기를
            권장합니다.
          </p>
          <p>
            모든 서비스는 의료 행위가 아니며 질병의 진단·치료를 목적으로 하지 않습니다. 급성 통증,
            염증, 고열, 골절, 수술 직후, 임신 중이거나 특정 기저질환이 있는 경우에는 이용 전 의료
            전문가와 상담해 주세요. 또한 건전한 웰니스 목적의 케어만 제공하며, 부적절하거나 불법적인
            요청은 예약 단계에서 접수되지 않고 현장에서도 서비스가 중단될 수 있습니다.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <SectionTitle
          title="어떤 케어를 선택해야 할까요?"
          description="컨디션과 목적을 기준으로 선택하면 더 만족스러운 휴식이 됩니다."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-forest-100 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-forest-900">휴식과 이완이 우선이라면</h3>
            <p className="mt-2 text-sm leading-relaxed text-forest-600">
              잠들기 전 긴장을 풀고 싶거나 강한 압이 부담스러운 분께는 아로마 릴렉스 케어를
              추천합니다. 부드러운 리듬과 안정적인 분위기를 중심으로 진행해 편안한 휴식을 돕습니다.
            </p>
          </div>
          <div className="rounded-2xl border border-forest-100 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-forest-900">근육 피로 회복이 필요하다면</h3>
            <p className="mt-2 text-sm leading-relaxed text-forest-600">
              운동 후 뻐근함이나 반복적인 신체 사용으로 인한 긴장이 있다면 스포츠 근육 케어가
              적합합니다. 부위별로 강도를 조절하며 단계적으로 진행합니다.
            </p>
          </div>
          <div className="rounded-2xl border border-forest-100 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-forest-900">장시간 앉아 일한다면</h3>
            <p className="mt-2 text-sm leading-relaxed text-forest-600">
              회의·운전·컴퓨터 작업으로 목과 어깨가 자주 뭉친다면 오피스 피로 케어를 추천합니다.
              상체를 중심으로 전반적인 피로를 관리합니다.
            </p>
          </div>
          <div className="rounded-2xl border border-forest-100 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-forest-900">함께 받고 싶다면</h3>
            <p className="mt-2 text-sm leading-relaxed text-forest-600">
              가족·부부·커플이 같은 공간에서 휴식을 나누고 싶다면 커플·가족 방문 케어를 이용하세요.
              인원과 공간 조건에 따라 순차 또는 동시 진행 여부를 사전에 확인합니다.
            </p>
          </div>
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
