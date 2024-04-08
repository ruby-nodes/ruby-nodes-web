import fs from "fs";
import path from "path";
import { z } from "zod";
// Helper function to read and parse the metadata from an MDX file
const parseMetadata = (fileContent: string) => {
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
export const getNewsMetadata = () => {
  const directoryPath = path.join(process.cwd(), "src/app/news/article");

  const subdirectiories = fs
    .readdirSync(directoryPath, {
      withFileTypes: true,
    })
    .filter((dirent) => dirent.isDirectory());

  const allMetadata = subdirectiories.map((dirent) => {
    const filePath = path.join(directoryPath, dirent.name, "page.mdx");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const metadata = parseMetadata(fileContent);
    return metadata;
  });

  const schema = z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      imgSrc: z.string(),
      href: z.string(),
    })
  );
  return schema.parse(allMetadata);
};
