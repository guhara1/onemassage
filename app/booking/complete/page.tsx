import type { Metadata } from "next";
import { Section, Container, Button } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

// 예약 완료 페이지는 색인하지 않습니다 (noindex).
export const metadata: Metadata = buildMetadata({
  title: "예약 신청 완료",
  description: "예약 신청이 접수되었습니다.",
  path: "/booking/complete",
  noindex: true,
});

export default function BookingCompletePage() {
  return (
    <Section>
      <Container className="max-w-xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest-100 text-forest-700">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="mt-6 text-2xl font-bold text-forest-900 md:text-3xl">
          예약 신청이 접수되었습니다
        </h1>
        <p className="mt-4 leading-relaxed text-forest-600">
          담당자가 가능 시간과 세부 내용을 확인한 뒤 연락드리겠습니다. 문의사항이 있으시면 전화로
          연락해 주세요.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">홈으로</Button>
          <Button href="/faq" variant="outline">
            자주 묻는 질문
          </Button>
        </div>
      </Container>
    </Section>
  );
}
