/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US"
  },
  webpack: (config) => {
    config.cache = false;
    return config;
  }
}

module.exports = nextConfig
