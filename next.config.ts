import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // architecture.md §39 — modern formats for all photographic assets.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
