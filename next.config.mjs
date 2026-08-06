/**
 * GitHub Pages serves the project site from /<repo>, so the asset prefix and
 * router base path have to be set at build time. Set NEXT_PUBLIC_BASE_PATH=""
 * when deploying to a custom domain or a user/org page.
 */
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? '/Mobile-Repair-Service-Center';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
