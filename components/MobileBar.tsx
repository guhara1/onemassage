import Link from "next/link";
import { siteConfig } from "@/lib/site";

/** 모바일 하단 고정 버튼: 전화 · 예약하기 */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-forest-200 bg-white shadow-[0_-2px_12px_rgba(0,0,0,0.06)] lg:hidden">
      <a
        href={siteConfig.phoneHref}
        className="flex flex-col items-center justify-center gap-0.5 border-r border-forest-100 py-2.5 text-xs font-medium text-forest-800"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M3 5a2 2 0 0 1 2-2h2.3a1 1 0 0 1 .95.68l1 3a1 1 0 0 1-.25 1L7.6 9.3a12 12 0 0 0 5.1 5.1l1.62-1.4a1 1 0 0 1 1-.25l3 1a1 1 0 0 1 .68.95V17a2 2 0 0 1-2 2A14 14 0 0 1 3 5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
        전화
      </a>
      <Link
        href="/booking"
        className="flex flex-col items-center justify-center gap-0.5 bg-forest-700 py-2.5 text-xs font-semibold text-white"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7 3v3m10-3v3M4 8h16M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
        예약하기
      </Link>
    </div>
  );
}
