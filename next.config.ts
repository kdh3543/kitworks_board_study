import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://openapi.naver.com/:path*",
      },
    ];
  },
  images: {
    domains: ["shopping-phinf.pstatic.net"],
  },
};

export default nextConfig;
