// next.config.js
/** @type {import('next').NextConfig} */

const isGithub = false;
const nextConfig = {
  assetPrefix: isGithub ? "/yugenspace" : "",
  env: {
    ASSET_PREFIX: isGithub ? "/yugenspace" : "",
  },
  output: isGithub ? "export" : undefined,
  basePath: isGithub ? "/yugenspace" : "",
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
