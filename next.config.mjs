/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cms.imgrio.com'
            }
        ],
    },
};

export default nextConfig;
