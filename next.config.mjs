import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  outputFileTracingIncludes: {
    "/news": ["./src/app/news/article/**/*.mdx"],
    "/news/article/**": ["./src/app/news/article/**/*.mdx"],
    "/api/article": ["./src/app/news/article/**/*.mdx"],
  },
  experimental: {
    useTypeScriptCli: false,
  },
};

export default withMDX()(nextConfig);
