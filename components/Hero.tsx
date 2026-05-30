import { Button, Container } from "./ui";
import { ShieldIcon, CalendarIcon, UserCheckIcon, ReceiptIcon } from "./icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-forest-50 to-white">
      <Container className="py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-100 px-3 py-1 text-xs font-semibold text-forest-700">
              합법 웰니스 출장마사지 · 예약제 운영
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-forest-900 md:text-5xl">
              전문 테라피스트가 방문하는
              <br />
              웰니스 마사지 홈케어
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-forest-600 md:text-lg">
              피로가 쌓인 하루, 고객님의 공간에서 편안하게 관리받으세요. 예약제 출장마사지
              서비스로, 테라피스트 검증·위생 관리·요금 안내를 투명하게 운영합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/booking">지금 예약하기</Button>
              <Button href="/pricing" variant="outline">
                요금 확인하기
              </Button>
            </div>
            <p className="mt-5 text-sm text-forest-500">
              건전한 웰니스 목적의 서비스만 제공합니다. 부적절한 요청은 접수되지 않습니다.
            </p>
          </div>

          {/* 비주얼 영역: 청결·전문성을 표현하는 추상 카드 (선정적 이미지 미사용) */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { t: "위생 관리", d: "손 소독 · 도구 관리", Icon: ShieldIcon, tone: "text-mint-500 bg-mint-400/15" },
                { t: "예약제 운영", d: "시간·지역 사전 확인", Icon: CalendarIcon, tone: "text-forest-600 bg-forest-50" },
                { t: "검증 기준", d: "경력·교육·안전 동의", Icon: UserCheckIcon, tone: "text-gold-500 bg-gold-400/15" },
                { t: "투명 요금", d: "출장비·심야 별도 표기", Icon: ReceiptIcon, tone: "text-forest-700 bg-sand-100" },
              ].map((c) => (
                <div
                  key={c.t}
                  className="rounded-2xl border border-forest-100 bg-white p-5 shadow-premium transition-transform hover:-translate-y-1"
                >
                  <div className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl ${c.tone}`}>
                    <c.Icon width={22} height={22} />
                  </div>
                  <p className="font-semibold text-forest-900">{c.t}</p>
                  <p className="mt-1 text-sm text-forest-500">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
