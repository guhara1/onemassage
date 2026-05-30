import { services } from "@/data/services";

/** 시간별 기본 요금표 (서비스별 60/90/120분) */
export function PricingTable() {
  const durations = ["60분", "90분", "120분"];

  return (
    <div className="overflow-x-auto rounded-2xl border border-forest-100 shadow-sm">
      <table className="w-full min-w-[480px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-forest-700 text-white">
            <th scope="col" className="px-4 py-3 font-semibold">
              서비스
            </th>
            {durations.map((d) => (
              <th key={d} scope="col" className="px-4 py-3 text-right font-semibold">
                {d}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {services.map((s, idx) => (
            <tr
              key={s.slug}
              className={idx % 2 === 0 ? "bg-white" : "bg-forest-50/50"}
            >
              <th scope="row" className="px-4 py-3 font-medium text-forest-900">
                {s.name}
              </th>
              {durations.map((d) => {
                const price = s.prices.find((p) => p.duration.startsWith(d.replace("분", "")) || p.duration.includes(d));
                return (
                  <td key={d} className="px-4 py-3 text-right text-forest-700">
                    {price ? price.price : "-"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
