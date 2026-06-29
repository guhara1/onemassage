import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { ServiceCard } from "@/components/ServiceCard";
import { AreaCard } from "@/components/AreaCard";
import { ReviewCard } from "@/components/ReviewCard";
import { CTASection } from "@/components/CTASection";
import { HomeAreaLongTailLinks } from "@/components/AreaLinks";
import { PricingTable } from "@/components/PricingTable";
import { Section, SectionTitle, Container, Button, Card, Notice } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { reviews } from "@/data/reviews";
import { posts } from "@/data/posts";
import { buildMetadata } from "@/lib/metadata";
import { localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "출장마사지 예약 | 전문 테라피스트 웰니스 홈케어",
  description:
    "강남·수원·인천·용인·부산·성남 예약제 출장마사지. 검증된 전문 테라피스트가 방문하는 합법 웰니스 홈케어입니다.",
  path: "/",
});

const steps = [
  { n: "1", t: "지역 및 시간 선택", d: "방문 지역과 희망 시간을 알려 주세요." },
  { n: "2", t: "서비스 선택", d: "케어 종류와 이용 시간을 선택합니다." },
  { n: "3", t: "예약 확인", d: "상담원이 가능 여부를 확인해 안내합니다." },
  { n: "4", t: "테라피스트 방문", d: "검증된 테라피스트가 방문합니다." },
  { n: "5", t: "관리 후 피드백", d: "마무리 후 간단한 피드백을 드립니다." },
];

const safety = [
  "손 소독 및 위생 관리",
  "도구 관리 및 청결 유지",
  "예약자 정보 사전 확인",
  "불법·부적절 요청 거절",
  "고객과 테라피스트 보호 정책",
];

export default function HomePage() {
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      <JsonLd data={localBusinessSchema({ reviews })} />
      <Hero />

      {/* 신뢰 배지 */}
      <Section>
        <SectionTitle
          title="안심하고 예약할 수 있도록"
          description="원마사지는 합법성과 투명성을 최우선으로 운영합니다."
          center
        />
        <TrustBadges />
      </Section>

      {/* 서비스 요약 */}
      <Section className="bg-forest-50/60">
        <SectionTitle title="방문 케어 서비스" description="목적에 맞는 웰니스 케어를 선택하세요." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      {/* 이용 절차 */}
      <Section>
        <SectionTitle title="이용 절차" description="간단한 5단계로 편안하게 예약하세요." />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <li key={s.n} className="rounded-2xl border border-forest-100 bg-white p-5 shadow-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-700 text-sm font-bold text-white">
                {s.n}
              </span>
              <p className="mt-3 font-semibold text-forest-900">{s.t}</p>
              <p className="mt-1 text-sm text-forest-500">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 요금 미리보기 */}
      <Section className="bg-forest-50/60" id="pricing-preview">
        <SectionTitle
          title="요금 미리보기"
          description="60분·90분·120분 기준 요금입니다. 심야 시간, 지역별 출장비, 주차비가 발생할 수 있으며 예약 전 별도 안내합니다."
        />
        <PricingTable />
        <div className="mt-6">
          <Button href="/pricing" variant="outline">
            전체 요금·환불 기준 보기
          </Button>
        </div>
      </Section>

      {/* 방문 가능 지역 */}
      <Section>
        <SectionTitle
          title="방문 가능 지역"
          description="실제 서비스 가능한 지역만 안내합니다. 지역별 도착 시간과 출장비를 확인하세요."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <AreaCard key={a.slug} area={a} />
          ))}
        </div>
        <div className="mt-6">
          <Button href="/areas" variant="outline">
            전체 지역 보기
          </Button>
        </div>

        {/* 지역 × 인기 케어 롱테일 내부링크 */}
        <div className="mt-10">
          <SectionTitle
            title="지역별 인기 케어 바로가기"
            description="찾으시는 지역과 케어를 바로 선택해 예약 안내를 확인하세요."
          />
          <HomeAreaLongTailLinks />
        </div>
      </Section>

      {/* 고객 후기 */}
      <Section className="bg-forest-50/60">
        <SectionTitle
          title="고객 후기"
          description="실제 이용 고객의 후기만 게시합니다. 허위·과장 후기는 사용하지 않습니다."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>
        <div className="mt-6">
          <Button href="/reviews" variant="outline">
            후기 더 보기
          </Button>
        </div>
      </Section>

      {/* 위생·안전 정책 */}
      <Section>
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div>
            <SectionTitle
              title="위생과 안전을 우선합니다"
              description="고객과 테라피스트 모두를 보호하기 위한 정책을 운영합니다."
            />
            <Button href="/trust/safety-hygiene">위생·안전 정책 자세히</Button>
          </div>
          <Card>
            <ul className="space-y-3">
              {safety.map((item) => (
                <li key={item} className="flex items-start gap-3 text-forest-800">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-forest-600" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* 웰니스 가이드 최신글 */}
      <Section className="bg-forest-50/60">
        <SectionTitle title="웰니스 가이드" description="작성자와 검수 정보를 함께 제공하는 정보성 콘텐츠입니다." />
        <div className="grid gap-5 md:grid-cols-3">
          {latestPosts.map((p) => (
            <Link
              key={p.slug}
              href={`/wellness-guide/${p.slug}`}
              className="group flex flex-col rounded-2xl border border-forest-100 bg-white p-6 shadow-sm transition-all hover:border-forest-300 hover:shadow-md"
            >
              <span className="text-xs font-medium text-forest-500">{p.category}</span>
              <h3 className="mt-2 text-base font-semibold text-forest-900 group-hover:text-forest-700">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-forest-600">{p.summary}</p>
              <time dateTime={p.updatedAt} className="mt-4 text-xs text-forest-400">
                업데이트 {p.updatedAt}
              </time>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Button href="/wellness-guide" variant="outline">
            가이드 전체 보기
          </Button>
        </div>
      </Section>

      <Container className="pb-4">
        <Notice tone="info">
          본 서비스는 의료 행위가 아니며 질병의 진단·치료를 목적으로 하지 않습니다. 건전한
          웰니스 목적의 합법 출장마사지 서비스만 제공합니다.
        </Notice>
      </Container>

      <CTASection />
    </>
  );
}
