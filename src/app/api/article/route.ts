import { getArticles } from "@/lib/news";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const news = getArticles();

  return NextResponse.json({ ...news });
}
