/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Enable static optimization for better SEO
  output: 'standalone',
  // Generate static pages at build time
  generateBuildId: async () => {
    return 'invoice-gen-build'
  },
}

module.exports = nextConfig
