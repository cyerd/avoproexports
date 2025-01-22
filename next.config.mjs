/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com', // Replace with the external image's domain
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
