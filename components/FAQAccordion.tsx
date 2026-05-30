"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-forest-100 overflow-hidden rounded-2xl border border-forest-100 bg-white shadow-sm">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="text-base font-medium text-forest-900">
                  {item.question}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className={cn(
                    "shrink-0 text-forest-500 transition-transform",
                    isOpen && "rotate-180",
                  )}
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </h3>
            {isOpen && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-forest-600">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
