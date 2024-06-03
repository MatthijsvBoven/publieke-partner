const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = {
  i18n: {
    locales: ['nl-NL'],
    defaultLocale: 'nl-NL',
    localeDetection: false,
    domains: [
      {
        domain: 'depubliekepartner.nl',
        defaultLocale: 'nl-NL',
      },
    ],
  },
  reactStrictMode: false,
  transpilePackages: ['@publiekepartner/components'],
  trailingSlash: false,
  // eslint-disable-next-line preferArrow/prefer-arrow-functions
  async headers() {
    const headers = []
    if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') {
      headers.push({
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
        source: '/:path*',
      })
    }
    return headers
  },
}

module.exports = withBundleAnalyzer(module.exports, { silent: true })
