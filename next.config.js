/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US"
  },
  webpack: (config) => {
    config.cache = true;
    return config;
  }
}

module.exports = nextConfig
