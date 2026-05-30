import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AreaCard } from "@/components/AreaCard";
import { CTASection } from "@/components/CTASection";
import { PageHero, Section, Container, Notice } from "@/components/ui";
import { areas } from "@/data/areas";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "방문 가능 지역 | 출장마사지 안내",
  description:
    "실제 서비스 가능한 지역만 안내합니다. 강남·수원·인천·용인·부산·성남 등 지역별 도착 가능 시간, 출장비, 준비사항을 확인하고 예약하세요.",
  path: "/areas",
});

export default function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="지역안내"
        title="방문 가능 지역"
        description="실제 서비스 가능한 지역만 운영합니다. 지역별 고유 안내를 확인하세요."
      />
      <Container className="pt-6">
        <Breadcrumbs items={[{ name: "지역안내", href: "/areas" }]} />
      </Container>

      <Section className="pt-8">
        <div className="mx-auto mb-10 max-w-3xl space-y-4 text-base leading-relaxed text-forest-700">
          <p>
            원마사지는 실제로 안정적인 방문이 가능한 지역만 페이지로 안내합니다. 지역명을 단순히
            바꿔 끼운 복사 페이지를 대량으로 만들지 않으며, 각 지역마다 평균 도착 가능 시간, 주요
            방문 가능 구역, 건물 유형별 유의사항, 출장비, 예약 가능 시간을 고유하게 정리합니다.
            이렇게 하는 이유는 고객님이 예약 전에 실제 방문 조건을 정확히 가늠할 수 있어야 하기
            때문입니다.
          </p>
          <p>
            현재 안내 중인 지역은 서울(강남·송파·마포), 경기·인천(수원·용인·성남·인천), 부산입니다.
            강남·마포·성남은 직장인과 출장객의 야간 피로 관리 문의가 많고, 송파·수원·용인은 대단지
            아파트와 신도시를 중심으로 가족 단위 문의가 고르게 많으며, 인천·부산은 업무·관광 생활권과
            출장객 수요가 어우러진 지역입니다. 각 지역 카드를 눌러 해당 생활권의 세부 안내를 확인하실
            수 있습니다.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <AreaCard key={a.slug} area={a} />
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-forest-100 bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-forest-900">도착 시간은 어떻게 정해지나요</h2>
            <p className="mt-2 text-sm leading-relaxed text-forest-600">
              평균 도착 시간은 예약 확인 시점과 교통 상황, 테라피스트의 위치에 따라 달라집니다.
              각 지역 페이지에 표기된 시간은 일반적인 기준이며, 예약 확정 단계에서 정확한 방문
              가능 시간을 다시 안내드립니다.
            </p>
          </div>
          <div className="rounded-2xl border border-forest-100 bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-forest-900">출장비와 추가 비용</h2>
            <p className="mt-2 text-sm leading-relaxed text-forest-600">
              주요 생활권은 기본 출장 가능 구역으로 운영하며, 외곽 구역이나 심야 시간대에는
              출장비·심야 추가 비용·주차비가 발생할 수 있습니다. 추가 비용이 있는 경우 예약 확정
              전에 정확한 금액을 명확히 고지합니다.
            </p>
          </div>
          <div className="rounded-2xl border border-forest-100 bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-forest-900">아파트·오피스텔 방문</h2>
            <p className="mt-2 text-sm leading-relaxed text-forest-600">
              건물 출입 규정, 방문 차량 등록, 공동현관 출입 방법은 단지·건물마다 다릅니다. 예약 시
              상세 주소와 동·호수, 출입 방법을 함께 알려 주시면 도착과 방문이 한결 원활합니다.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Notice tone="info">
            현재 운영 중인 지역 외 방문은 예약 상담 시 가능 여부를 확인해 안내드립니다. 서비스
            가능 지역은 실제 예약·운영 데이터가 확인된 곳을 중심으로 점진적으로 확대하며, 무리하게
            지역 페이지를 늘려 검색 노출만 노리는 방식은 사용하지 않습니다.
          </Notice>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
