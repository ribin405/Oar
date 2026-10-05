import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Temporary placeholder photography (see src/lib/images.ts) is hosted
    // on Wikimedia Commons pending real Oar operational photography.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/wikipedia/commons/**",
      },
    ],
  },
};

export default nextConfig;
