/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@demo/ui", "@demo/api"],
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
