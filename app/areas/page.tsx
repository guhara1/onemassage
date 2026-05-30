import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AreaCard } from "@/components/AreaCard";
import { CTASection } from "@/components/CTASection";
import { PageHero, Section, Container, Notice } from "@/components/ui";
import { areas } from "@/data/areas";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "방문 가능 지역 | 서울 방문 마사지 안내",
  description:
    "실제 서비스 가능한 지역만 안내합니다. 강남·송파·마포 등 지역별 도착 가능 시간, 출장비, 준비사항을 확인하고 예약하세요.",
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
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <AreaCard key={a.slug} area={a} />
          ))}
        </div>
        <div className="mt-8">
          <Notice tone="info">
            현재 운영 중인 지역 외 방문은 예약 상담 시 가능 여부를 확인해 안내드립니다. 서비스
            가능 지역은 실제 운영 데이터에 따라 점진적으로 확대됩니다.
          </Notice>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
