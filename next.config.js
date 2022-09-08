/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/*',
        headers: [
          {
            key: 'cache-control',
            value: 'public',
          },
          {
            key: 'cache-control',
            value: 'max-age=604800',
          },
        ],
      },
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US"
  }
}

module.exports = nextConfig
