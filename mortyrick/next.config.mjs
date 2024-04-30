/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    baseUrl: 'https://rickandmortyapi.com/api/',
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
        port: '',
        pathname: '/api/character/avatar/**',
      },
    ],
  },
};

export default nextConfig;
