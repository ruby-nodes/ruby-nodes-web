import {
  ArticleLayout,
  articleMetadata,
} from "@/components/news/ArticleLayout";

export function generateMetadata() {
  return articleMetadata("demo7");
}

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ index: string }>;
}) {
  return (
    <ArticleLayout slug="demo7" params={params}>
      {children}
    </ArticleLayout>
  );
}
