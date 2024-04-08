import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu/menu";
import Footer from "@/components/footer/footer";
import { twMerge } from "tailwind-merge";
import Container from "@/components/common/Container";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(rubik.className, "bg-c-bg text-c-text")}>
        <Menu />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
