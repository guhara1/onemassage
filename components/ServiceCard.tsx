import Link from "next/link";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-forest-100 bg-white p-6 shadow-sm transition-all hover:border-forest-300 hover:shadow-md"
    >
      <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-forest-50 text-forest-700">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 21s-7-4.35-7-9.5A4.5 4.5 0 0 1 12 8a4.5 4.5 0 0 1 7 3.5C19 16.65 12 21 12 21Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-forest-900">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-forest-600">
        {service.cardDescription}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-forest-700 group-hover:gap-2">
        자세히 보기
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
