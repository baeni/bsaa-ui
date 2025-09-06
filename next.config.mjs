/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.bsaa.dev',
      },
    ],
  },
};

export default nextConfig;
