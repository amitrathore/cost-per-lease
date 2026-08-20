import type { NextConfig } from "next";

const pagesBasePath = process.env.GITHUB_ACTIONS === "true" ? "/cost-per-lease" : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  turbopack: { root: process.cwd() },
  basePath: pagesBasePath,
  assetPrefix: pagesBasePath,
};

export default nextConfig;
