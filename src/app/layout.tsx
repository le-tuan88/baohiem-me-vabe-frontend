import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Heart } from "lucide-react";

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
        {/* Header - Pink Pastel */}
        <header className="bg-brand-pink text-brand-text shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Heart className="text-rose-500 fill-rose-500" />
              <span>Mẹ & Bé</span>
            </Link>
            <nav className="hidden md:flex gap-6 font-medium">
              <Link href="/" className="hover:text-rose-600 transition-colors">Trang chủ</Link>
              <Link href="/blog" className="hover:text-rose-600 transition-colors">Kiến thức</Link>
              <Link href="/quy-trinh-boi-thuong" className="hover:text-rose-600 transition-colors">Bồi thường</Link>
              <Link href="/lien-he" className="hover:text-rose-600 transition-colors">Liên hệ</Link>
            </nav>
          </div>
        </header>

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
