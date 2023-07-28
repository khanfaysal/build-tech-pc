/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['http://localhost:5000/products'], 
  },
}

module.exports = nextConfig
