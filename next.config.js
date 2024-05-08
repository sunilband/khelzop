/** @type {import('next').NextConfig} */

// PWA code
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  // disable: process.env.NODE_ENV === "development",
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.gamezop.com",
        port: "",
      },
    ],
  },
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/v1/games/list/:path*",
        destination: "https://dev-meteor.gamezop.com/v1/games/list/:path*",
      },
    ];
  },
};

module.exports = withPWA(nextConfig);
