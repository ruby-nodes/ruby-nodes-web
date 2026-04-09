import { Metadata } from "next";
import PageMdx from "./page.mdx";

export const metadata: Metadata = {
  title: "Ruby Nodes Secures Sui Mainnet Validator Slot",
  description: "We're thrilled to announce that our Sui mainnet validator is now live after two years of deep involvement in the Sui ecosystem.",
  openGraph: {
    title: "Ruby Nodes Secures Sui Mainnet Validator Slot",
    description: "We're thrilled to announce that our Sui mainnet validator is now live after two years of deep involvement in the Sui ecosystem.",
    images: [
      {
        url: "https://rubynodes.io/ruby_sui_validator.png",
        width: 1200,
        height: 630,
        alt: "Ruby Nodes Secures Sui Mainnet Validator Slot",
      },
    ],
    type: "article",
    url: "https://rubynodes.io/news/article/1/ruby-sui-validator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruby Nodes Secures Sui Mainnet Validator Slot",
    description: "We're thrilled to announce that our Sui mainnet validator is now live after two years of deep involvement in the Sui ecosystem.",
    images: ["https://rubynodes.io/ruby_sui_validator.png"],
  },
};

export default function ArticlePage() {
  return <PageMdx />;
}
