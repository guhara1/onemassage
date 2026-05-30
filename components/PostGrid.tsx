import Link from "next/link";
import type { Post } from "@/data/posts";
import { getAuthor } from "@/data/authors";

/** 웰니스 가이드 글 카드 그리드 (목록·카테고리·페이지 공통) */
export function PostGrid({ posts }: { posts: Post[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((p) => {
        const author = getAuthor(p.author);
        return (
          <Link
            key={p.slug}
            href={`/wellness-guide/${p.slug}`}
            className="group flex flex-col rounded-2xl border border-forest-100 bg-white p-6 shadow-sm transition-all hover:border-forest-300 hover:shadow-md"
          >
            <span className="text-xs font-medium text-forest-500">{p.category}</span>
            <h2 className="mt-2 text-lg font-semibold text-forest-900 group-hover:text-forest-700">
              {p.title}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-forest-600">{p.summary}</p>
            <div className="mt-4 flex items-center justify-between text-xs text-forest-400">
              <span>{author?.name}</span>
              <time dateTime={p.updatedAt}>업데이트 {p.updatedAt}</time>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
