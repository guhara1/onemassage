import Link from "next/link";

/**
 * 목록 페이지네이션.
 * page 1 은 basePath 자체, 그 외에는 `${basePath}/page/{n}` 로 연결한다.
 * 현재 페이지 기준 앞뒤 1칸 + 처음/끝을 노출하고 나머지는 …으로 생략한다.
 */
export function Pagination({
  basePath,
  page,
  totalPages,
}: {
  basePath: string;
  page: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  const href = (n: number) => (n === 1 ? basePath : `${basePath}/page/${n}`);

  // 노출할 페이지 번호 계산 (1, 현재±1, 마지막 + 생략 표시)
  const pages: (number | "…")[] = [];
  const add = (n: number) => {
    if (n >= 1 && n <= totalPages && !pages.includes(n)) pages.push(n);
  };
  add(1);
  if (page - 1 > 2) pages.push("…");
  add(page - 1);
  add(page);
  add(page + 1);
  if (page + 1 < totalPages - 1) pages.push("…");
  add(totalPages);

  return (
    <nav className="mt-10 flex items-center justify-center gap-1.5" aria-label="페이지 이동">
      {page > 1 && (
        <Link
          href={href(page - 1)}
          rel="prev"
          className="rounded-lg border border-forest-200 px-3 py-2 text-sm font-medium text-forest-700 transition-colors hover:bg-forest-50"
        >
          이전
        </Link>
      )}

      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`gap-${i}`} className="px-2 text-sm text-forest-400">
            …
          </span>
        ) : p === page ? (
          <span
            key={p}
            aria-current="page"
            className="rounded-lg bg-forest-700 px-3.5 py-2 text-sm font-semibold text-white"
          >
            {p}
          </span>
        ) : (
          <Link
            key={p}
            href={href(p)}
            className="rounded-lg border border-forest-200 px-3.5 py-2 text-sm font-medium text-forest-700 transition-colors hover:bg-forest-50"
          >
            {p}
          </Link>
        ),
      )}

      {page < totalPages && (
        <Link
          href={href(page + 1)}
          rel="next"
          className="rounded-lg border border-forest-200 px-3 py-2 text-sm font-medium text-forest-700 transition-colors hover:bg-forest-50"
        >
          다음
        </Link>
      )}
    </nav>
  );
}
