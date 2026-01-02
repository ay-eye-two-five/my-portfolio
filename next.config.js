/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 1. Remove "unoptimized: true" so Next.js can generate Retina versions
    // 2. Allow quality 100 (it is not allowed by default)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    qualities: [75, 100], 
  },
}

module.exports = nextConfig