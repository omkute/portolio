import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      new URL('https://avatars.githubusercontent.com/u/142393952?v=4'),
    ],
  },
}

export default nextConfig;
