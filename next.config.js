/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  experimental: {
    runtime: "experimental-edge",
  },
  swcMinify: true,
};

module.exports = nextConfig;
