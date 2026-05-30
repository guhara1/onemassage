import Link from "next/link";
import type { Author } from "@/data/authors";

export function AuthorBox({
  author,
  reviewer,
  publishedAt,
  updatedAt,
}: {
  author: Author;
  reviewer?: Author;
  publishedAt?: string;
  updatedAt?: string;
}) {
  return (
    <div className="rounded-2xl border border-forest-100 bg-forest-50 p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-700 text-base font-bold text-white">
          {author.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="text-sm text-forest-500">작성자</p>
          <Link
            href={`/authors/${author.slug}`}
            className="text-base font-semibold text-forest-900 hover:underline"
          >
            {author.name}
          </Link>
          <p className="text-sm text-forest-600">{author.role}</p>
          <p className="mt-1 text-sm leading-relaxed text-forest-600">{author.bio}</p>
        </div>
      </div>

      {reviewer && (
        <div className="mt-4 border-t border-forest-200 pt-4 text-sm text-forest-600">
          <span className="text-forest-500">검수: </span>
          <Link href={`/authors/${reviewer.slug}`} className="font-medium text-forest-800 hover:underline">
            {reviewer.name}
          </Link>{" "}
          ({reviewer.role})
        </div>
      )}

      {(publishedAt || updatedAt) && (
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-forest-500">
          {publishedAt && (
            <span>
              작성일 <time dateTime={publishedAt}>{publishedAt}</time>
            </span>
          )}
          {updatedAt && (
            <span>
              업데이트 <time dateTime={updatedAt}>{updatedAt}</time>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
