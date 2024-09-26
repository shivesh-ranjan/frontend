/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  basePath: "/frontend",
  reactStrictMode: true,
};

export default nextConfig;
