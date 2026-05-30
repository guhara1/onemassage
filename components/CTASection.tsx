import { Button, Container } from "./ui";

export function CTASection({
  title = "지금 가능한 방문 시간을 확인해보세요.",
  description = "예약 신청 후 상담원이 가능 시간과 지역을 확인해 연락드립니다.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-forest-700">
      <Container className="py-14 text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-forest-100">{description}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button href="/booking" variant="secondary">
            지금 예약하기
          </Button>
          <Button
            href="/pricing"
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10"
          >
            요금 확인하기
          </Button>
        </div>
      </Container>
    </section>
  );
}
