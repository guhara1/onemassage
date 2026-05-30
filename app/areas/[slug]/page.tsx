import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { ReviewCard } from "@/components/ReviewCard";
import { PageHero, Section, Container, Card, SectionTitle } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { areas, getArea } from "@/data/areas";
import { getService } from "@/data/services";
import { reviews } from "@/data/reviews";
import { buildMetadata } from "@/lib/metadata";
import { localBusinessSchema, serviceSchema, faqSchema } from "@/lib/schema";
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

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema({ areaServed: `${area.name} 일대`, url }),
          serviceSchema({
            name: `${area.name} 출장마사지`,
            description: area.metaDescription,
            url,
            areaServed: `${area.name} 일대`,
          }),
          faqSchema(area.faqs),
        ]}
      />
      <PageHero eyebrow="지역안내" title={area.h1} description={area.label} />
      <Container className="pt-6">
        <Breadcrumbs
          items={[
            { name: "지역안내", href: "/areas" },
            { name: area.name, href: `/areas/${area.slug}` },
          ]}
        />
      </Container>

      <Section className="pt-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-base leading-relaxed text-forest-700">{area.intro}</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Card>
                <h2 className="text-base font-semibold text-forest-900">평균 도착 가능 시간</h2>
                <p className="mt-2 text-sm text-forest-600">{area.arrivalTime}</p>
              </Card>
              <Card>
                <h2 className="text-base font-semibold text-forest-900">예약 가능 시간</h2>
                <p className="mt-2 text-sm text-forest-600">{area.availableHours}</p>
              </Card>
            </div>

            <div className="mt-5">
              <Card>
                <h2 className="text-base font-semibold text-forest-900">주요 방문 가능 구역</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {area.zones.map((z) => (
                    <span key={z} className="rounded-full bg-forest-50 px-3 py-1 text-sm text-forest-700">
                      {z}
                    </span>
                  ))}
                </div>
              </Card>
            </div>

            <div className="mt-5">
              <Card>
                <h2 className="text-base font-semibold text-forest-900">
                  주차·아파트·오피스텔 방문 시 유의사항
                </h2>
                <ul className="mt-3 space-y-2">
                  {area.buildingNotes.map((n) => (
                    <li key={n} className="flex items-start gap-3 text-sm text-forest-700">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-forest-500" aria-hidden="true">
                        <circle cx="12" cy="12" r="3" fill="currentColor" />
                      </svg>
                      {n}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <div className="mt-5">
              <Card>
                <h2 className="text-base font-semibold text-forest-900">지역별 출장비</h2>
                <p className="mt-2 text-sm leading-relaxed text-forest-600">{area.travelFee}</p>
              </Card>
            </div>

            <div className="mt-10">
              <SectionTitle title={`${area.name} 지역 FAQ`} />
              <FAQAccordion items={area.faqs} />
            </div>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-20 lg:self-start">
            <Card>
              <h2 className="text-base font-semibold text-forest-900">
                {area.name}에서 많이 선택하는 서비스
              </h2>
              <ul className="mt-3 space-y-2">
                {popular.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="flex items-center justify-between rounded-lg border border-forest-100 px-3 py-2.5 text-sm text-forest-800 transition-colors hover:bg-forest-50"
                    >
                      {s.name}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/booking"
                className="mt-4 block rounded-lg bg-forest-700 px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-forest-800"
              >
                {area.name} 방문 예약하기
              </Link>
            </Card>
          </aside>
        </div>
      </Section>

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
