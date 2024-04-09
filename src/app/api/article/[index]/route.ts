import { getArticleByIndex, getArticles } from "@/lib/news";
import { NextRequest, NextResponse } from "next/server";

export async function generateStaticParams() {
  const news = getArticles();

  return news.data.map((article) => ({
    params: { index: article.index.toString() },
  }));
}

export async function GET(
  _: NextRequest,
  { params: { index } }: { params: { index: string } }
) {
  const news = getArticleByIndex(parseInt(index, 10));

  return NextResponse.json(news);
}
