/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'images.unsplash.com'],
  },
  target: 'serverless'
}

module.exports = nextConfig

