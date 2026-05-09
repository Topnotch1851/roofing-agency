import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow Windsurf browser preview proxy + LAN hosts in dev
  allowedDevOrigins: ["127.0.0.1", "localhost", "10.131.142.109"],
  images: {
    // Serve picsum unoptimized in dev/demo to avoid upstream timeouts
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
      { protocol: "https", hostname: "a.basemaps.cartocdn.com" },
      { protocol: "https", hostname: "b.basemaps.cartocdn.com" },
      { protocol: "https", hostname: "c.basemaps.cartocdn.com" },
      { protocol: "https", hostname: "d.basemaps.cartocdn.com" },
    ],
  },
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react", "framer-motion"],
  },
};

export default nextConfig;
