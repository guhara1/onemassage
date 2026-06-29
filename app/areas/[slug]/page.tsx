import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { ReviewCard } from "@/components/ReviewCard";
import { Section, Container, SectionTitle } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import {
  ArrowIcon,
  CalendarIcon,
  CarIcon,
  CheckIcon,
  ClockIcon,
  GridIcon,
  PinIcon,
  ReceiptIcon,
  ShieldIcon,
  SparkleIcon,
  StarIcon,
  UserCheckIcon,
} from "@/components/icons";
import { OtherAreaLinks } from "@/components/AreaLinks";
import { areas, getArea } from "@/data/areas";
import { getService } from "@/data/services";
import { reviews } from "@/data/reviews";
import { getAuthor } from "@/data/authors";
import { postsForArea } from "@/lib/wellness";
import { buildMetadata } from "@/lib/metadata";
import { localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return buildMetadata({
    title: area.seoTitle,
    description: area.metaDescription,
    path: `/areas/${area.slug}`,
  });
}

const internalLinks = [
  { href: "/pricing", label: "출장마사지 요금 안내", icon: ReceiptIcon },
  { href: "/booking", label: "예약 진행 방법", icon: CalendarIcon },
  { href: "/trust/safety-hygiene", label: "위생·안전 정책", icon: ShieldIcon },
  { href: "/trust/therapist-standards", label: "테라피스트 검증 기준", icon: UserCheckIcon },
  { href: "/reviews", label: "실제 고객 후기", icon: StarIcon },
  { href: "/services", label: "전체 서비스 보기", icon: GridIcon },
];

export default async function AreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const url = `${siteConfig.url}/areas/${area.slug}`;
  const popular = area.popularServices
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const areaReviews = reviews.filter((r) => r.area === area.name);
  const areaPosts = postsForArea(area.slug);

  const stats = [
    { icon: ClockIcon, label: "평균 도착", value: area.arrivalTime },
    { icon: CalendarIcon, label: "예약 가능", value: area.availableHours },
    { icon: CarIcon, label: "지역별 출장비", value: area.travelFee },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "홈", url: "/" },
            { name: "지역안내", url: "/areas" },
            { name: `${area.name} 출장마사지`, url: `/areas/${area.slug}` },
          ]),
          localBusinessSchema({
            areaServed: `${area.name} 일대`,
            url,
            reviews: areaReviews.length > 0 ? areaReviews : undefined,
          }),
          serviceSchema({
            name: `${area.name} 출장마사지`,
            description: area.metaDescription,
            url,
            areaServed: `${area.name} 일대`,
            reviews: areaReviews.length > 0 ? areaReviews : undefined,
          }),
          faqSchema(area.faqs),
        ]}
      />

      {/* ── 프리미엄 히어로 ───────────────────────────── */}
      <section className="area-hero-bg relative overflow-hidden">
        <Container className="relative py-14 md:py-20">
          <div className="flex items-center gap-2 text-sm text-forest-100/80">
            <Link href="/" className="hover:text-white">홈</Link>
            <span aria-hidden="true">/</span>
            <Link href="/areas" className="hover:text-white">지역안내</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">{area.name}</span>
          </div>

          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-gold-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-400">
              <PinIcon width={14} height={14} />
              {area.name} 지역 출장마사지
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              {area.h1}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-forest-100/90 md:text-lg">
              {area.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 rounded-xl bg-gold-400 px-6 py-3 text-sm font-bold text-forest-950 shadow-premium transition-transform hover:-translate-y-0.5"
              >
                {area.name} 방문 예약하기
                <ArrowIcon width={18} height={18} />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                요금 확인하기
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 플로팅 통계 스트립 ───────────────────────── */}
      <Container className="relative z-10 -mt-8 md:-mt-10">
        <div className="grid gap-px overflow-hidden rounded-2xl bg-forest-100 shadow-premium-lg sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="flex gap-3 bg-white p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-50 text-forest-700">
                <s.icon width={20} height={20} />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-forest-500">
                  {s.label}
                </p>
                <p className="mt-1 text-sm leading-snug text-forest-800">{s.value}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Section className="pt-10 md:pt-14">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* ── 본문 ─────────────────────────────────── */}
          <div className="lg:col-span-2">
            {/* 방문 가능 구역 */}
            <div className="rounded-2xl border border-forest-100 bg-white p-6 shadow-premium">
              <div className="flex items-center gap-2">
                <PinIcon width={20} height={20} className="text-forest-600" />
                <h2 className="text-base font-bold text-forest-900">주요 방문 가능 구역</h2>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {area.zones.map((z) => (
                  <span
                    key={z}
                    className="inline-flex items-center gap-1.5 rounded-full border border-forest-100 bg-forest-50 px-3.5 py-1.5 text-sm font-medium text-forest-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                    {z}
                  </span>
                ))}
              </div>
            </div>

            {/* 건물 유의사항 */}
            <div className="mt-6 rounded-2xl border border-forest-100 bg-white p-6 shadow-premium">
              <div className="flex items-center gap-2">
                <ShieldIcon width={20} height={20} className="text-forest-600" />
                <h2 className="text-base font-bold text-forest-900">
                  주차·아파트·오피스텔 방문 시 유의사항
                </h2>
              </div>
              <ul className="mt-4 space-y-3">
                {area.buildingNotes.map((n) => (
                  <li key={n} className="flex items-start gap-3 text-sm leading-relaxed text-forest-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint-400/15 text-mint-500">
                      <CheckIcon width={13} height={13} />
                    </span>
                    {n}
                  </li>
                ))}
              </ul>
            </div>

            {/* 지역 이용 가이드 (번호 + 골드 보더) */}
            {area.guide && area.guide.length > 0 && (
              <div className="mt-10">
                <div className="mb-6 flex items-center gap-2">
                  <SparkleIcon width={22} height={22} className="text-gold-500" />
                  <h2 className="text-2xl font-bold tracking-tight text-forest-900">
                    {area.name} 출장마사지 이용 가이드
                  </h2>
                </div>
                <div className="space-y-5">
                  {area.guide.map((section, idx) => (
                    <section
                      key={section.heading}
                      className="guide-prose rounded-2xl border border-forest-100 bg-white p-6 shadow-premium md:p-7"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-forest-700 text-sm font-bold text-white">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <h3 className="pt-1 text-lg font-bold text-forest-900 md:text-xl">
                          {section.heading}
                        </h3>
                      </div>
                      <div className="mt-4 border-l-2 border-gold-400/50 pl-4 md:pl-5">
                        {section.body?.map((p, i) => (
                          <p key={i} className="mt-3 text-[15px] text-forest-700 first:mt-0">
                            {p}
                          </p>
                        ))}
                        {section.subsections?.map((sub) => (
                          <div key={sub.heading} className="mt-5">
                            <h4 className="flex items-center gap-2 text-base font-semibold text-forest-800">
                              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                              {sub.heading}
                            </h4>
                            {sub.body.map((p, i) => (
                              <p key={i} className="mt-2 text-[15px] text-forest-700">
                                {p}
                              </p>
                            ))}
                          </div>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ */}
            <div className="mt-10">
              <SectionTitle title={`${area.name} 지역 FAQ`} />
              <FAQAccordion items={area.faqs} />
            </div>

            {/* 지역 매거진 글 (토픽 클러스터 내부 링크) */}
            {areaPosts.length > 0 && (
              <div className="mt-10">
                <div className="mb-5 flex items-center gap-2">
                  <SparkleIcon width={22} height={22} className="text-gold-500" />
                  <h2 className="text-2xl font-bold tracking-tight text-forest-900">
                    {area.name} 웰니스 매거진
                  </h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {areaPosts.map((p) => {
                    const a = getAuthor(p.author);
                    return (
                      <Link
                        key={p.slug}
                        href={`/wellness-guide/${p.slug}`}
                        className="group flex flex-col rounded-2xl border border-forest-100 bg-white p-5 shadow-premium transition-all hover:-translate-y-0.5 hover:border-forest-300"
                      >
                        <span className="text-xs font-medium text-forest-500">{p.category}</span>
                        <h3 className="mt-1.5 text-base font-bold leading-snug text-forest-900 group-hover:text-forest-700">
                          {p.title}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-forest-600">
                          {p.summary}
                        </p>
                        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-forest-700">
                          자세히 보기
                          <ArrowIcon
                            width={15}
                            height={15}
                            className="transition-transform group-hover:translate-x-0.5"
                          />
                        </span>
                        <span className="sr-only">{a?.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 내부 링크 타일 */}
            <div className="mt-8 rounded-2xl border border-forest-100 bg-gradient-to-br from-forest-50 to-white p-6 shadow-premium">
              <h2 className="text-base font-bold text-forest-900">함께 확인하면 좋은 안내</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {internalLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="group flex items-center gap-3 rounded-xl border border-forest-100 bg-white px-4 py-3 text-sm font-medium text-forest-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-forest-300 hover:shadow-premium"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-forest-50 text-forest-700 transition-colors group-hover:bg-forest-700 group-hover:text-white">
                      <l.icon width={18} height={18} />
                    </span>
                    <span className="flex-1">{l.label}</span>
                    <ArrowIcon
                      width={16}
                      height={16}
                      className="text-forest-300 transition-transform group-hover:translate-x-0.5 group-hover:text-forest-600"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* 다른 지역 출장마사지 교차 링크 */}
            <OtherAreaLinks currentSlug={area.slug} />
          </div>

          {/* ── 스티키 사이드바 ───────────────────────── */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-forest-100 bg-white shadow-premium-lg">
              <div className="area-hero-bg p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-400">
                  지금 예약하기
                </p>
                <p className="mt-2 text-lg font-bold leading-snug text-white">
                  {area.name}에서 가능한
                  <br />
                  방문 시간을 확인하세요
                </p>
                <Link
                  href="/booking"
                  className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-gold-400 px-4 py-3 text-sm font-bold text-forest-950 transition-transform hover:-translate-y-0.5"
                >
                  {area.name} 방문 예약하기
                  <ArrowIcon width={18} height={18} />
                </Link>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2">
                  <SparkleIcon width={18} height={18} className="text-gold-500" />
                  <h2 className="text-sm font-bold text-forest-900">
                    {area.name}에서 많이 선택하는 케어
                  </h2>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {popular.map((s, i) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group flex items-center gap-3 rounded-xl border border-forest-100 px-3 py-2.5 text-sm transition-all hover:border-forest-300 hover:bg-forest-50"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gold-400/15 text-xs font-bold text-gold-500">
                          {i + 1}
                        </span>
                        <span className="flex-1 font-medium text-forest-800">{s.name}</span>
                        <ArrowIcon
                          width={15}
                          height={15}
                          className="text-forest-300 transition-transform group-hover:translate-x-0.5"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* ── 후기 ─────────────────────────────────────── */}
      {areaReviews.length > 0 && (
        <Section className="bg-forest-50/60 pt-0">
          <SectionTitle title={`${area.name} 고객 후기`} description="실제 이용 고객의 후기입니다." />
          <div className="grid gap-5 sm:grid-cols-2">
            {areaReviews.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        </Section>
      )}

      <CTASection />
    </>
  );
}
