/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 如果你需要加载外部图片，可以在这里添加域名
    domains: [],
  },
  // 如果你使用了实验性功能，可以在这里启用
  experimental: {
    serverActions: true,
  }
}

module.exports = nextConfig