"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { mainNav } from "@/lib/nav";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();

  // 라우트가 바뀌면 모든 메뉴를 닫는다 (클릭 후 드롭다운이 남는 문제 방지)
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-forest-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label={`${siteConfig.name} 홈으로`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-700 text-sm font-bold text-white">
            원
          </span>
          <span className="text-lg font-bold text-forest-800">{siteConfig.name}</span>
        </Link>

        {/* 데스크톱 메뉴 */}
        <nav className="hidden lg:flex lg:items-center lg:gap-1" aria-label="주요 메뉴">
          {mainNav.map((item) => {
            const hasDropdown = Boolean(item.groups || item.children);
            const isOpen = openMenu === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasDropdown && setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-forest-800 transition-colors hover:bg-forest-50 hover:text-forest-900"
                  onClick={() => setOpenMenu(null)}
                >
                  {item.label}
                </Link>
                {hasDropdown && (
                  <div
                    className={cn(
                      "absolute left-0 top-full z-50 rounded-xl border border-forest-100 bg-white p-3 shadow-lg transition-all",
                      isOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0",
                    )}
                  >
                  {item.groups ? (
                    <>
                      <div className="flex gap-5">
                        {item.groups.map((grp) => (
                          <div key={grp.label} className="min-w-36">
                            <p className="px-3 pb-1.5 text-xs font-bold uppercase tracking-wide text-gold-500">
                              {grp.label}
                            </p>
                            {grp.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block whitespace-nowrap rounded-lg px-3 py-2 text-sm text-forest-700 transition-colors hover:bg-forest-50"
                                onClick={() => setOpenMenu(null)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="mt-2 flex items-center justify-center gap-1 rounded-lg border-t border-forest-100 pt-3 text-sm font-semibold text-forest-700 transition-colors hover:text-forest-900"
                          onClick={() => setOpenMenu(null)}
                        >
                          {child.label} →
                        </Link>
                      ))}
                    </>
                  ) : (
                    <div className="min-w-52">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-sm text-forest-700 transition-colors hover:bg-forest-50"
                          onClick={() => setOpenMenu(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* 우측 CTA */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={siteConfig.phoneHref}
            className="rounded-lg px-3 py-2 text-sm font-medium text-forest-800 transition-colors hover:bg-forest-50"
          >
            전화 상담
          </a>
          <a
            href={siteConfig.kakao}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-forest-200 px-3 py-2 text-sm font-medium text-forest-800 transition-colors hover:bg-forest-50"
          >
            카카오 상담
          </a>
          <Link
            href="/booking"
            className="rounded-lg bg-forest-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-forest-800"
          >
            예약하기
          </Link>
        </div>

        {/* 모바일 메뉴 토글 */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-forest-800 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="메뉴 열기"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* 모바일 메뉴 패널 */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <nav className="max-h-[70vh] space-y-1 overflow-y-auto border-t border-forest-100 px-4 py-3" aria-label="모바일 메뉴">
          {mainNav.map((item) => (
            <div key={item.label} className="py-1">
              <Link
                href={item.href}
                className="block rounded-md px-2 py-2 text-base font-semibold text-forest-900"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.groups ? (
                <div className="ml-2 space-y-2 border-l border-forest-100 pl-3">
                  {item.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-md px-2 py-1.5 text-sm font-medium text-forest-700"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                  {item.groups.map((grp) => (
                    <div key={grp.label}>
                      <p className="px-2 pb-0.5 pt-1 text-xs font-bold uppercase tracking-wide text-gold-500">
                        {grp.label}
                      </p>
                      {grp.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-md px-2 py-1.5 text-sm text-forest-600"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                item.children && (
                  <div className="ml-2 border-l border-forest-100 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-2 py-1.5 text-sm text-forest-600"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
