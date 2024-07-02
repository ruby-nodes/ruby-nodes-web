import fs from "fs";
import path from "path";
import { z } from "zod";

const plainArticleSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  imgSrc: z.string(),
  slug: z.string(),
});

// Helper function to read and parse the metadata from an MDX file
const parseMetadata = (fileContent: string) => {
  console.log(fileContent);
  // Match the content between "export const metadata =" and the next semicolon
  const metadataMatch = fileContent.match(
    /export\s+const\s+metadata\s*=\s*({[\s\S]*?});/
  );

  if (metadataMatch) {
    // Attempt to evaluate the matched content as an object
    try {
      const metadata = eval("(" + metadataMatch[1] + ")");
      return metadata;
    } catch (error) {
      console.error("Error parsing metadata: ", error);
    }
  }

  return null;
};

// Function to get metadata from all .mdx files in a directory
export function getArticles(opts?: { limit?: number }) {
  const directoryPath = path.join(
    process.cwd(),
    "src/app/news/article/[index]"
  );

  const subdirectiories = fs
    .readdirSync(directoryPath, {
      withFileTypes: true,
    })
    .filter((dirent) => dirent.isDirectory());

  const allMetadata = subdirectiories.map((dirent) => {
    const filePath = path.join(directoryPath, dirent.name, "page.mdx");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const metadata = parseMetadata(fileContent);
    return {
      ...metadata,
      slug: dirent.name,
    };
  });

  const schema = z.array(plainArticleSchema);
  const parsed = schema.parse(allMetadata);
  const sorted = parsed.sort((a, b) => b.date.getTime() - a.date.getTime());
  const withIndex = sorted.map((article, index) => ({
    ...article,
    index: index + 1,
  }));

  const withUrls = withIndex.map((article) => ({
    ...article,
    href: `/news/article/${article.index}/${article.slug}`,
  }));

  return {
    total: sorted.length,
    data: opts?.limit ? withUrls.slice(0, opts.limit) : withUrls,
  };
}

export function getArticleByIndex(index: number) {
  const article = getArticles().data.find((article) => article.index === index);
  return article;
}

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  imgSrc: z.string(),
  slug: z.string(),
  href: z.string(),
  index: z.number(),
});

const fetchArticlesSchema = z.object({
  total: z.number(),
  data: z.array(articleSchema),
});

export type Article = z.infer<typeof articleSchema>;
export type FetchArticlesResponse = z.infer<typeof fetchArticlesSchema>;

//const API_URL = `${process.env.NEXT_PUBLIC_PROTOCOL ?? "https"}://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`;
const API_URL = "http://localhost:3000/api";
export async function fetchArticles(params?: { limit?: number }) {
  console.log("------------------------");
  console.log(API_URL);
  const data = await (await fetch(`${API_URL}/article`)).json();

  const parsed = fetchArticlesSchema.parse(data);
  return params?.limit
    ? { ...parsed, data: parsed.data.slice(0, params.limit) }
    : parsed;
}
