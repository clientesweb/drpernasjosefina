/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'images.unsplash.com'],
  },
  // Add output configuration for static export
  output: 'standalone',
}

module.exports = nextConfig

