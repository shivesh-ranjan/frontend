/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/frontend",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
