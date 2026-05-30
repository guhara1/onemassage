import type { Review } from "@/data/reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`별점 ${rating}점 (5점 만점)`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          className={i < rating ? "text-gold-400" : "text-forest-200"}
          aria-hidden="true"
        >
          <path
            d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.2l5.9-.9L12 3Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-forest-100 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <Stars rating={review.rating} />
        {review.sponsored && (
          <span className="rounded-full bg-sand-100 px-2 py-0.5 text-xs text-forest-600">
            협찬 표기
          </span>
        )}
      </div>
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-forest-700">
        “{review.content}”
      </blockquote>
      <figcaption className="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-xs text-forest-500">
        <span className="font-medium text-forest-700">{review.area}</span>
        <span>·</span>
        <span>{review.service}</span>
        <span>·</span>
        <span>{review.duration}</span>
        <span>·</span>
        <time dateTime={review.date}>{review.date}</time>
      </figcaption>
    </figure>
  );
}
