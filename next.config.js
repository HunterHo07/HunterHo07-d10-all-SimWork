/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/d10-all-SimWork',
  assetPrefix: '/d10-all-SimWork/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
