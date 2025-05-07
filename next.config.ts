// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is the key setting for static export
  output: "export",

  // Required for Next.js Image Optimization to work correctly on static hosting
  // services like GitHub Pages without a server.
  images: {
    unoptimized: true,
  },

  // If your GitHub Pages site is at "https://<username>.github.io/<repository-name>/"
  // Uncomment and set these:
  basePath: "/yugenspace",
  assetPrefix: "/yugenspace/",

  // Add any other Next.js configurations you have.
};

module.exports = nextConfig;
