/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [],
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '',
  trailingSlash: true,
  distDir: 'out',
  async rewrites() {
    return [
      {
        source: '/Portfolio',
        destination: '/',
      },
    ]
  },
}

export default nextConfig 