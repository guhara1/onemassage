import { pricingMenu } from "@/data/pricing";

/** 코스별 카드형 요금표 (카테고리 태그 + 시간별 가격) */
export function PricingTable() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {pricingMenu.map((item) => (
        <div
          key={item.name}
          className="relative flex flex-col rounded-2xl border border-forest-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          {item.best && (
            <span className="absolute right-5 top-5 rounded-full bg-gold-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              BEST
            </span>
          )}
          <p className="text-xs font-semibold uppercase tracking-wide text-gold-500">
            {item.tag}
          </p>
          <h3 className="mt-1 text-xl font-bold text-forest-900">{item.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-forest-600">
            {item.description}
          </p>
          <dl className="mt-5 space-y-2 border-t border-forest-100 pt-4">
            {item.tiers.map((tier) => (
              <div
                key={tier.duration}
                className="flex items-center justify-between text-sm"
              >
                <dt className="text-forest-500">{tier.duration}</dt>
                <dd className="font-semibold text-forest-900">{tier.price}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}
