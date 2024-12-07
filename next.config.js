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
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals = [
        ...(config.externals || []),
        'react-hook-form',
        '@hookform/resolvers/zod',
        'zod',
      ]
    }
    return config
  },
}

module.exports = nextConfig

