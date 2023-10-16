/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //permite fazer a renderização de imagems de sites
    remotePatterns: [{ hostname: 'images.unsplash.com' }],
  },
  experimental: {
    serverActions: true, //ativa as actions de server
  },
}

module.exports = nextConfig
