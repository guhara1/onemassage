import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { PageHero, Section, Container, Card, Notice, Button, SectionTitle } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { services, getService } from "@/data/services";
import { reviews } from "@/data/reviews";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.seoTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <h2 className="text-lg font-semibold text-forest-900">{title}</h2>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-forest-700">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-forest-500" aria-hidden="true">
              <circle cx="12" cy="12" r="3" fill="currentColor" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const url = `${siteConfig.url}/services/${service.slug}`;
  const serviceReviews = reviews.filter((r) => r.service === service.name);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: service.name,
            description: service.metaDescription,
            url,
            reviews: serviceReviews.length > 0 ? serviceReviews : undefined,
          }),
          faqSchema(service.faqs),
        ]}
      />
      <PageHero eyebrow="서비스" title={service.h1} description={service.summary} />
      <Container className="pt-6">
        <Breadcrumbs
          items={[
            { name: "서비스", href: "/services" },
            { name: service.name, href: `/services/${service.slug}` },
          ]}
        />
      </Container>

      <Section className="pt-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-base leading-relaxed text-forest-700">{service.intro}</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <List title="누구에게 적합한가" items={service.audience} />
              <List title="관리 목적" items={service.purpose} />
              <List title="진행 방식" items={service.process} />
              <List title="준비사항" items={service.preparation} />
            </div>

            <div className="mt-6">
              <Notice tone="warning" title="이용 전 안내">
                {service.caution}
              </Notice>
            </div>

            <div className="mt-10">
              <SectionTitle title="자주 묻는 질문" />
              <FAQAccordion items={service.faqs} />
            </div>
          </div>

          {/* 사이드: 요금 + 예약 */}
          <aside className="lg:sticky lg:top-20 lg:self-start">
            <Card>
              <h2 className="text-lg font-semibold text-forest-900">요금 안내</h2>
              <ul className="mt-3 divide-y divide-forest-100">
                {service.prices.map((p) => (
                  <li key={p.duration} className="flex items-center justify-between py-2.5 text-sm">
                    <span className="text-forest-600">{p.duration}</span>
                    <span className="font-semibold text-forest-900">{p.price}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs leading-relaxed text-forest-500">
                심야 시간, 지역별 출장비, 주차비가 발생할 수 있으며 예약 전 별도 안내합니다.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <Button href="/booking">이 서비스 예약하기</Button>
                <Button href="/pricing" variant="outline">
                  전체 요금 보기
                </Button>
              </div>
            </Card>

            <div className="mt-4 text-sm text-forest-600">
              <Link href="/services" className="hover:underline">
                ← 다른 서비스 둘러보기
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
