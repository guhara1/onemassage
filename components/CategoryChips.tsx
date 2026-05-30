import Link from "next/link";
import { wellnessCategories } from "@/lib/wellness";
import { cn } from "@/lib/utils";

/** 웰니스 가이드 카테고리 필터 칩 (클릭 시 카테고리 허브로 이동) */
export function CategoryChips({ activeSlug }: { activeSlug?: string }) {
  const base =
    "rounded-full px-3 py-1 text-sm transition-colors";
  return (
    <nav className="mb-6 flex flex-wrap gap-2" aria-label="카테고리">
      <Link
        href="/wellness-guide"
        className={cn(
          base,
          activeSlug
            ? "bg-forest-50 text-forest-700 hover:bg-forest-100"
            : "bg-forest-700 font-semibold text-white",
        )}
      >
        전체
      </Link>
      {wellnessCategories.map((c) => {
        const active = c.slug === activeSlug;
        return (
          <Link
            key={c.slug}
            href={`/wellness-guide/category/${c.slug}`}
            className={cn(
              base,
              active
                ? "bg-forest-700 font-semibold text-white"
                : "bg-forest-50 text-forest-700 hover:bg-forest-100",
            )}
          >
            {c.label}
          </Link>
        );
      })}
    </nav>
  );
}
