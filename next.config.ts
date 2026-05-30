import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages 등 정적 호스팅에 배포하기 위한 정적 export (out/ 생성)
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  // 정적 export 환경에서는 Next.js 이미지 최적화 서버를 사용할 수 없음
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
