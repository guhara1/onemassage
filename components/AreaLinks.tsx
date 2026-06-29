import Link from "next/link";
import { areas } from "@/data/areas";
import { getService } from "@/data/services";
import { ArrowIcon, PinIcon } from "@/components/icons";

/**
 * 홈 — "지역 × 인기 서비스" 롱테일 내부링크 섹션.
 * 각 지역의 상세 페이지와, 그 지역에서 많이 찾는 서비스로 향하는
 * 설명형 앵커 텍스트(예: "강남 아로마 릴렉스 케어")를 함께 노출해
 * 지역·서비스 토픽 클러스터의 내부링크를 강화한다.
 */
export function HomeAreaLongTailLinks() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {areas.map((area) => {
        const popular = area.popularServices
          .map((s) => getService(s))
          .filter((s): s is NonNullable<typeof s> => Boolean(s))
          .slice(0, 3);
        return (
          <div
            key={area.slug}
            className="flex flex-col rounded-2xl border border-forest-100 bg-white p-5 shadow-sm transition-all hover:border-forest-300 hover:shadow-premium"
          >
            <Link
              href={`/areas/${area.slug}`}
              className="group inline-flex items-center gap-2 text-base font-bold text-forest-900 hover:text-forest-700"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-forest-50 text-forest-700 transition-colors group-hover:bg-forest-700 group-hover:text-white">
                <PinIcon width={16} height={16} />
              </span>
              {area.label}
              <ArrowIcon
                width={15}
                height={15}
                className="text-forest-300 transition-transform group-hover:translate-x-0.5 group-hover:text-forest-600"
              />
            </Link>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {popular.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex rounded-full border border-forest-100 bg-forest-50 px-3 py-1 text-xs font-medium text-forest-700 transition-colors hover:border-forest-300 hover:bg-white"
                  >
                    {area.name} {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

/**
 * 지역 상세 — "다른 지역 출장마사지" 교차 링크.
 * 지역 페이지끼리 서로 연결해 지역 클러스터의 내부링크 깊이를 높인다.
 */
export function OtherAreaLinks({ currentSlug }: { currentSlug: string }) {
  const others = areas.filter((a) => a.slug !== currentSlug);
  if (others.length === 0) return null;
  return (
    <div className="mt-8 rounded-2xl border border-forest-100 bg-white p-6 shadow-premium">
      <div className="flex items-center gap-2">
        <PinIcon width={20} height={20} className="text-forest-600" />
        <h2 className="text-base font-bold text-forest-900">다른 지역 출장마사지</h2>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {others.map((a) => (
          <Link
            key={a.slug}
            href={`/areas/${a.slug}`}
            className="group inline-flex items-center gap-1.5 rounded-full border border-forest-100 bg-forest-50 px-3.5 py-1.5 text-sm font-medium text-forest-700 transition-all hover:-translate-y-0.5 hover:border-forest-300 hover:bg-white"
          >
            {a.label}
            <ArrowIcon
              width={14}
              height={14}
              className="text-forest-300 transition-transform group-hover:translate-x-0.5 group-hover:text-forest-600"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
