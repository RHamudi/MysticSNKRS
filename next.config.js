/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['imgnike-a.akamaihd.net'],
  },
};

module.exports = nextConfig;
