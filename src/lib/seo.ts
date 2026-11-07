import type { Metadata } from "next";

function canonicalOrigin() {
  const configured = process.env.SITE_URL;
  if (!configured) return "https://rubynodes.io";
  const url = new URL(configured);
  if (
    !["https:", "http:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      "SITE_URL must be an absolute HTTP(S) origin without a path, credentials, query or fragment.",
    );
  }
  return url.origin;
}

export const siteOrigin = canonicalOrigin();
export const isPreview =
  process.env.VERCEL_ENV === "preview" ||
  process.env.VERCEL_ENV === "development";
export const siteUrl = (pathname: string) =>
  new URL(pathname, `${siteOrigin}/`).toString();
export const organizationId = siteUrl("/#organization");

export function pageMetadata(
  pathname: string,
  title: string,
  description: string,
  options: { noindex?: boolean; image?: string; publishedTime?: string } = {},
): Metadata {
  const image = options.image ?? "/opengraph-image.jpg";
  return {
    title,
    description,
    alternates: { canonical: siteUrl(pathname) },
    ...(isPreview || options.noindex
      ? { robots: { index: false, follow: !options.noindex } }
      : {}),
    openGraph: {
      title,
      description,
      url: siteUrl(pathname),
      siteName: "Ruby Nodes",
      locale: "en_US",
      type: options.publishedTime ? "article" : "website",
      ...(options.publishedTime
        ? { publishedTime: options.publishedTime }
        : {}),
      images: [{ url: siteUrl(image), alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@RubyNodes",
      title,
      description,
      images: [siteUrl(options.image ?? "/twitter-image.jpg")],
    },
  };
}

export const publicPages = [
  "/",
  "/institutional",
  "/validator-services",
  "/protocol-services",
  "/private-infrastructure",
  "/sui-consensus-observer",
  "/canton-validator",
  "/peaq-rpc",
  "/0g-rpc",
  "/apps-and-tooling",
  "/security",
  "/news",
  "/privacy-policy",
  "/devops-pozice",
];
