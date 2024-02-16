/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async rewrites() {
    const localeRewrites = ['de'].map((item) => ({
      source: `/${item}`,
      destination: `/${item}/home`,
    }));
    return [...localeRewrites];
  },
  async redirects() {
    const localeRedirects = ['de'].map((item) => ({
      source: `/${item}/home`,
      destination: `/${item}`,
      permanent: true,
    }));
    return [...localeRedirects];
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
