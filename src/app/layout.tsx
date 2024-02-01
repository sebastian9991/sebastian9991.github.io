import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sebastian C. Sabry Website",
  description: "Portfolio Website, MLE, SWE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
