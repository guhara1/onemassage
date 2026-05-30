import { Section, Container, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <Section>
      <Container className="max-w-xl text-center">
        <p className="text-sm font-semibold text-forest-500">404</p>
        <h1 className="mt-2 text-2xl font-bold text-forest-900 md:text-3xl">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="mt-4 leading-relaxed text-forest-600">
          요청하신 페이지가 이동되었거나 존재하지 않습니다. 아래 버튼으로 이동해 주세요.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">홈으로</Button>
          <Button href="/services" variant="outline">
            서비스 보기
          </Button>
        </div>
      </Container>
    </Section>
  );
}
