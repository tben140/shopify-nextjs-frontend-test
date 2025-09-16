export default {
  experimental: {
    ppr: true,
    inlineCss: true,
    useCache: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
    ],
  },
  allowedDevOrigins: [
    "0050ae3c8300.ngrok-free.app",
    "*.0050ae3c8300.ngrok-free.app",
  ],
};
