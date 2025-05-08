// next.config.js
/** @type {import('next').NextConfig} */

const isGithub = false;
const nextConfig = {
  assetPrefix: isGithub ? "/yugenspace" : "",
  output: isGithub ? "export" : undefined,
  basePath: isGithub ? "/yugenspace" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
