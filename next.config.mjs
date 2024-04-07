/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'scontent-cdg4-2.xx.fbcdn.net',
                port: '',
                pathname: '**',
            },
        ],
    }
};

export default nextConfig;
