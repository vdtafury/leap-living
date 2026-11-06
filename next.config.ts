import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the live preview free of Next.js dev overlays and badges.
  devIndicators: false,
  images: {
    // Include a 1440 entry so a 1440px-wide full-bleed hero is served at its
    // real pixel width instead of the 1920 step (which Next clamps to the
    // 1800px source and the browser then density-corrects / upscales).
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048, 3840],
    qualities: [75, 85],
  },
};

export default nextConfig;
