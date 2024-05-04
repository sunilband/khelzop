/** @type {import('next').NextConfig} */
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

module.exports = nextConfig;
