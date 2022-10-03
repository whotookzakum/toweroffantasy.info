/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US"
  },
  async redirects() {
    return [
      {
        source: '/ads.txt',
        destination: 'https://kumo.network-n.com/adstxt/?id=pa_3bc69c80',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
