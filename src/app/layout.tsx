// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trading Services",
  description: "Professional trading services platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <footer className="bg-gray-50 border-t">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <p className="text-center text-gray-600">
              © {new Date().getFullYear()} Trading Services. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}