/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.com', // Replace with the external image's domain
        port: '',
        pathname: '/**',
      },
    ],
  },
   async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // {
          //   key: "Content-Security-Policy",
          //   value: "default-src 'self'; script-src 'self'; style-src 'self';",
          // },
        ],
      },
    ];
  },
};

export default nextConfig;
