/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['fr'],
    defaultLocale: 'fr',
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
