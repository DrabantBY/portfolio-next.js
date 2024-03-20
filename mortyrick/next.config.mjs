/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    baseUrl: "https://rickandmortyapi.com/api/",
  },
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
};

export default nextConfig;
