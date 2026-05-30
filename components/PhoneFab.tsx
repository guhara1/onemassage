import { siteConfig } from "@/lib/site";

/**
 * 모바일 전용 전화 연결 플로팅 버튼.
 * 화면 우측 하단(푸터 영역 위)에 고정되며, 수화기 아이콘이 흔들리고
 * 뒤로 펄스 링이 퍼져 시선을 끈다. 데스크톱(lg 이상)에서는 헤더의
 * 전화 상담 버튼이 있으므로 숨긴다.
 */
export function PhoneFab() {
  return (
    <a
      href={siteConfig.phoneHref}
      aria-label={`전화 예약 ${siteConfig.phone}`}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-forest-700 text-white shadow-premium-lg ring-2 ring-white/70 transition-transform active:scale-95 lg:hidden"
    >
      {/* 펄스 링 */}
      <span
        aria-hidden="true"
        className="phone-fab-pulse absolute inset-0 rounded-full bg-forest-700"
      />
      {/* 수화기 아이콘 (흔들림) */}
      <svg
        aria-hidden="true"
        className="phone-fab-icon relative"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    </a>
  );
}
