import { Rubik } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu/menu";
import Footer from "@/components/footer/footer";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";

const rubik = Rubik({ subsets: ["latin"] });

const protocol = process.env.NEXT_PUBLIC_PROTOCOL ?? "https";
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL 
  ? `${protocol}://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  icons: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="overflow-x-hidden scroll-auto lg:scroll-smooth overscroll-none"
    >
      <body
        className={twMerge(
          rubik.className,
          "bg-c-bg text-c-text overflow-x-hidden"
        )}
      >
        <Menu />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
