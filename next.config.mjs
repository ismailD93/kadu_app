/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  // async redirects() {
  //   return [
  //     {
  //       source: '/home',
  //       destination: '/home',
  //       permanent: true,
  //     },
  //   ];
  // },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
