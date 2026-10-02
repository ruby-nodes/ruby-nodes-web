import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  experimental: {
    useTypeScriptCli: false,
  },
};

export default withMDX()(nextConfig);
