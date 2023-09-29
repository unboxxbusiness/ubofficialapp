/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
       
      },
      {
        protocol: 'https',
        hostname: 'cdn.rareblocks.xyz',
       
      },
      
    ],
  },
}