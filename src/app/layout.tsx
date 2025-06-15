import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import GithubLink from "@/components/GithubLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouTube Title Analysis Dashboard",
  description: "Interactive 3D visualization of YouTube title analysis results",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen`}>
        <div className="container mx-auto px-4 py-8">
          <Navigation />
          {children}
        </div>
        <GithubLink />
      </body>
    </html>
  );
}
