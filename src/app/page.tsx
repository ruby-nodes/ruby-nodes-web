import Hero from "@/components/hero/hero";
import fs from "fs";
import path from "path";
import { title } from "process";
import z from "zod";

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
export const getAllMdxMetadata = () => {
  const directoryPath = path.join(process.cwd(), "src/app/news/demo");

  const fileNames = fs.readdirSync(directoryPath);

  const allMetadata = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const filePath = path.join(directoryPath, fileName);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const metadata = parseMetadata(fileContent);
      return metadata;
    });

  const schema = z.array(
    z.object({ title: z.string(), description: z.string(), date: z.date() })
  );
  return schema.parse(allMetadata);
};

export default function Home() {
  const allMetadata = getAllMdxMetadata();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-c-bg text-c-text">
      {/* {allMetadata.map((metadata) => (
        <article key={metadata.title} className="mb-12">
          <h2 className="text-2xl font-bold">{metadata.title}</h2>
          <p className="text-c-text-inactive">{metadata.date.toDateString()}</p>
          <p>{metadata.description}</p>
        </article>
      ))} */}
      <Hero
        title="Boundless Networks, Flawless Rubies"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis et nulla et imperdiet. Sed vitae tincidunt elit, pulvinar laoreet ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra,"
        cta={{
          href: "#",
          title: "Get Started",
        }}
      />
    </main>
  );
}
