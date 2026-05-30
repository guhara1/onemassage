import Link from "next/link";
import type { Area } from "@/data/areas";

export function AreaCard({ area }: { area: Area }) {
  return (
    <Link
      href={`/areas/${area.slug}`}
      className="group flex flex-col rounded-2xl border border-forest-100 bg-white p-6 shadow-sm transition-all hover:border-forest-300 hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-forest-900">{area.label}</h3>
      <p className="mt-2 text-sm text-forest-500">{area.arrivalTime}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {area.zones.slice(0, 5).map((z) => (
          <span
            key={z}
            className="rounded-full bg-forest-50 px-2.5 py-1 text-xs text-forest-700"
          >
            {z}
          </span>
        ))}
      </div>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-forest-700 group-hover:gap-2">
        지역 안내 보기
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
