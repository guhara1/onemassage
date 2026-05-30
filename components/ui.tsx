import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** 콘텐츠 폭을 제한하는 공통 컨테이너 */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

/** 페이지 상단 헤더 영역 (H1 + 설명) */
export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-forest-100 bg-forest-50">
      <Container className="py-12 md:py-16">
        {eyebrow && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-forest-500">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl font-bold tracking-tight text-forest-900 md:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-forest-600 md:text-lg">
            {description}
          </p>
        )}
      </Container>
    </div>
  );
}

/** 섹션 구분용 래퍼 */
export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-12 md:py-16", className)}>
      <Container>{children}</Container>
    </section>
  );
}

/** 섹션 제목 */
export function SectionTitle({
  title,
  description,
  center,
}: {
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("mb-8", center && "text-center")}>
      <h2 className="text-2xl font-bold tracking-tight text-forest-900 md:text-3xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 text-base leading-relaxed text-forest-600",
            center && "mx-auto max-w-2xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
};

/** 링크형 버튼 */
export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const styles = {
    primary: "bg-forest-700 text-white hover:bg-forest-800",
    secondary: "bg-sand-200 text-forest-900 hover:bg-sand-300",
    outline:
      "border border-forest-300 text-forest-800 hover:bg-forest-50",
  }[variant];

  const classes = cn(
    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors",
    styles,
    className,
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

/** 카드 컨테이너 */
export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-forest-100 bg-white p-6 shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** 안내/주의 박스 */
export function Notice({
  title,
  children,
  tone = "info",
}: {
  title?: string;
  children: ReactNode;
  tone?: "info" | "warning";
}) {
  const toneStyles = {
    info: "border-forest-200 bg-forest-50 text-forest-800",
    warning: "border-sand-300 bg-sand-50 text-forest-900",
  }[tone];
  return (
    <div className={cn("rounded-xl border p-4 text-sm leading-relaxed", toneStyles)}>
      {title && <p className="mb-1 font-semibold">{title}</p>}
      <div>{children}</div>
    </div>
  );
}
