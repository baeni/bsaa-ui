/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bsaa0.wordpress.com'
            },
        ],
    },
};

export default nextConfig;
