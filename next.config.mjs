/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portfolio_new",
  assetPrefix: "/portfolio_new/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
