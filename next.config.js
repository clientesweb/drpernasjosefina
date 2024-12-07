/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'images.unsplash.com'],
  },
  // Enable static exports
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

