/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['imgnike-a.akamaihd.net'],
    imageSizes: [16, 32, 48, 64, 96, 128, 216, 256, 384, 510, 668, 3500],
  },
};

module.exports = nextConfig;
