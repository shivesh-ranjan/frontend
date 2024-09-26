/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  basePath: "/frontend",
  reactStrictMode: true,
};

module.exports = nextConfig;
