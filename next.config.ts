import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Cho phép production build hoàn thành ngay cả khi dự án có lỗi TypeScript
    ignoreBuildErrors: true,
  },
  eslint: {
    // Tương tự, bỏ qua lỗi ESLint nếu có
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
