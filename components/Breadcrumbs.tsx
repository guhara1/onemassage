import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export interface Crumb {
  name: string;
  href: string;
}

/** 빵부스러기 내비게이션 + BreadcrumbList 구조화 데이터 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full: Crumb[] = [{ name: "홈", href: "/" }, ...items];

  return (
    <>
      <nav aria-label="현재 위치" className="text-sm text-forest-500">
        <ol className="flex flex-wrap items-center gap-1.5">
          {full.map((item, i) => {
            const isLast = i === full.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {isLast ? (
                  <span aria-current="page" className="font-medium text-forest-700">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link href={item.href} className="hover:text-forest-700 hover:underline">
                      {item.name}
                    </Link>
                    <span aria-hidden="true" className="text-forest-300">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(full.map((c) => ({ name: c.name, url: c.href })))} />
    </>
  );
}
