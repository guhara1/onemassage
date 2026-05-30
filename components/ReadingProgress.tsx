"use client";

import { useEffect, useState } from "react";

/**
 * 글 읽기 진행 바.
 * 문서 스크롤 비율(0~1)을 상단 골드 라인의 가로 스케일로 표시한다.
 */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0;
      setProgress(ratio);
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className="reading-progress"
      style={{ ["--progress" as string]: progress }}
      aria-hidden="true"
    />
  );
}
