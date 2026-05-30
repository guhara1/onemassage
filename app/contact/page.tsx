import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero, Section, Container, Card, Button } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "문의하기 | 고객지원",
  description:
    "예약 상담, 서비스 문의는 전화로 연락해 주세요. 운영 시간과 고객지원 채널을 안내합니다.",
  path: "/contact",
});

const notices = [
  { t: "운영 시간 안내", d: "예약제로 운영되며, 상담 가능 시간 내에 순차적으로 답변드립니다." },
  { t: "안전 정책 안내", d: "건전한 웰니스 목적 외 요청은 접수되지 않습니다." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="고객지원"
        title="문의하기"
        description="예약 상담과 서비스 문의를 도와드립니다."
      />
      <Container className="pt-6">
        <Breadcrumbs items={[{ name: "문의하기", href: "/contact" }]} />
      </Container>

      <Section className="pt-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <Card>
              <h2 className="text-lg font-semibold text-forest-900">연락처</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between border-b border-forest-100 pb-2">
                  <dt className="text-forest-500">전화 상담</dt>
                  <dd>
                    <a href={siteConfig.phoneHref} className="font-medium text-forest-900 hover:underline">
                      {siteConfig.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between border-b border-forest-100 pb-2">
                  <dt className="text-forest-500">이메일</dt>
                  <dd className="font-medium text-forest-900">{siteConfig.email}</dd>
                </div>
                <div className="flex justify-between border-b border-forest-100 pb-2">
                  <dt className="text-forest-500">운영시간</dt>
                  <dd className="font-medium text-forest-900">{siteConfig.hours}</dd>
                </div>
              </dl>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button href={siteConfig.phoneHref}>전화 상담</Button>
                <Button href="/booking" variant="secondary">
                  예약하기
                </Button>
              </div>
            </Card>
          </div>

          <div className="space-y-4">
            {notices.map((n) => (
              <Card key={n.t}>
                <h2 className="font-semibold text-forest-900">{n.t}</h2>
                <p className="mt-1 text-sm leading-relaxed text-forest-600">{n.d}</p>
              </Card>
            ))}
            <Card>
              <h2 className="font-semibold text-forest-900">공지사항</h2>
              <p className="mt-1 text-sm leading-relaxed text-forest-600">
                현재 등록된 공지사항이 없습니다. 운영 관련 안내는 이 영역을 통해 업데이트됩니다.
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
