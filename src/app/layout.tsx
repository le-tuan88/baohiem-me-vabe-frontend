import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bảo Hiểm Mẹ và Bé",
  description: "Giải pháp bảo vệ toàn diện cho mẹ và bé bằng các gói bảo hiểm chất lượng.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Header */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer - Mint Green */}
        <footer className="bg-brand-mint text-brand-text py-8 border-t border-brand-mint/50">
          <div className="container mx-auto px-4 text-center">
            <p className="font-semibold mb-2 text-lg">Bảo Hiểm Mẹ và Bé</p>
            <p className="opacity-80 mb-4">Giải pháp bảo vệ mầm non tương lai với các gói bảo hiểm giáo dục và sức khỏe.</p>
            <p className="text-sm opacity-70">© {new Date().getFullYear()} Bản quyền thuộc về baohiemmevabe.com.vn</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
