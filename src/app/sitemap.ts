import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/news";
import { isPreview, publicPages, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (isPreview) return [];
  return [
    ...publicPages.map((pathname) => ({ url: siteUrl(pathname) })),
    ...getArticles().data.map((article) => ({
      url: siteUrl(article.href),
      lastModified: article.date,
    })),
  ];
}
