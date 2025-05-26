/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  images: {
    unoptimized: true,
    path: process.env.NODE_ENV === 'production' ? '/Portfolio/_next/image' : '/_next/image',
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
}

module.exports = nextConfig 