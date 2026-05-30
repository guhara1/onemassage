import Link from "next/link";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  {
    title: "서비스",
    links: [
      { label: "아로마 릴렉스 케어", href: "/services/aroma-relax-care" },
      { label: "스포츠 근육 케어", href: "/services/sports-muscle-care" },
      { label: "오피스 피로 케어", href: "/services/office-fatigue-care" },
      { label: "커플·가족 방문 케어", href: "/services/family-couple-care" },
    ],
  },
  {
    title: "이용안내",
    links: [
      { label: "요금 안내", href: "/pricing" },
      { label: "예약하기", href: "/booking" },
      { label: "방문 가능 지역", href: "/areas" },
      { label: "자주 묻는 질문", href: "/faq" },
    ],
  },
  {
    title: "신뢰센터",
    links: [
      { label: "회사 소개", href: "/about" },
      { label: "테라피스트 검증 기준", href: "/trust/therapist-standards" },
      { label: "위생·안전 정책", href: "/trust/safety-hygiene" },
      { label: "고객 후기", href: "/reviews" },
    ],
  },
  {
    title: "고객지원",
    links: [
      { label: "문의하기", href: "/contact" },
      { label: "웰니스 가이드", href: "/wellness-guide" },
      { label: "편집 정책", href: "/editorial-policy" },
      { label: "공지사항", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-forest-100 bg-forest-950 text-forest-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-600 text-sm font-bold text-white">
                원
              </span>
              <span className="text-lg font-bold text-white">{siteConfig.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-forest-200">
              검증된 전문 테라피스트가 고객님의 공간으로 방문하는 합법 웰니스 마사지 서비스입니다.
              건전한 웰니스 목적의 서비스만 제공합니다.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-white">{group.title}</h3>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-forest-200 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 사업자 정보 */}
        <div className="mt-10 border-t border-forest-800 pt-8 text-xs leading-relaxed text-forest-300">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>{siteConfig.business.company}</span>
            <span>대표 {siteConfig.business.ceo}</span>
            <span>사업자등록번호 {siteConfig.business.registrationNumber}</span>
            <span>{siteConfig.business.address}</span>
          </div>
          <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
            <span>고객지원 {siteConfig.phone}</span>
            <span>{siteConfig.email}</span>
            <span>운영시간 {siteConfig.hours}</span>
            <span>개인정보 보호책임자 {siteConfig.business.privacyOfficer}</span>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href="/privacy" className="font-medium text-forest-100 hover:text-white">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="text-forest-300 hover:text-white">
              이용약관
            </Link>
            <Link href="/editorial-policy" className="text-forest-300 hover:text-white">
              편집 정책
            </Link>
            <span className="text-forest-400">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </span>
          </div>
          <p className="mt-4 text-forest-400">
            본 사이트는 의료 행위를 제공하지 않으며, 질병의 진단·치료를 목적으로 하지 않습니다.
            성인·유흥·불법 서비스와 무관한 합법 웰니스 출장마사지 서비스입니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
