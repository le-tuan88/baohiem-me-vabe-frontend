import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      // Redirect http về https (defense in depth)
      {
        source: "/:path*",
        has: [{ type: "header", key: "x-forwarded-proto", value: "http" }],
        destination: "https://baohiemmevabe.com.vn/:path*",
        permanent: true,
      },
      // Redirect www về non-www
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.baohiemmevabe.com.vn" }],
        destination: "https://baohiemmevabe.com.vn/:path*",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/wp-content/:path*",
        destination: "https://quanly.baohiemmevabe.com.vn/wp-content/:path*",
      },
      {
        source: "/wp-includes/:path*",
        destination: "https://quanly.baohiemmevabe.com.vn/wp-includes/:path*",
      },
    ];
  },
};


export default nextConfig;
