import Link from "next/link";
import type { Area } from "@/data/areas";
import { ArrowIcon, ClockIcon, PinIcon } from "@/components/icons";

export function AreaCard({ area }: { area: Area }) {
  return (
    <Link
      href={`/areas/${area.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-forest-100 bg-white p-6 shadow-premium transition-all hover:-translate-y-1 hover:border-forest-300 hover:shadow-premium-lg"
    >
      {/* 상단 골드 액센트 라인 */}
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-400 to-mint-400 opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-50 text-forest-700 transition-colors group-hover:bg-forest-700 group-hover:text-white">
          <PinIcon width={22} height={22} />
        </span>
        <span className="text-xs font-semibold uppercase tracking-wide text-gold-500">
          출장마사지
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-forest-900">{area.label}</h3>
      <p className="mt-2 flex items-center gap-1.5 text-sm text-forest-500">
        <ClockIcon width={15} height={15} />
        {area.arrivalTime}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {area.zones.slice(0, 5).map((z) => (
          <span
            key={z}
            className="rounded-full border border-forest-100 bg-forest-50 px-2.5 py-1 text-xs font-medium text-forest-700"
          >
            {z}
          </span>
        ))}
      </div>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700">
        지역 안내 보기
        <ArrowIcon
          width={16}
          height={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
