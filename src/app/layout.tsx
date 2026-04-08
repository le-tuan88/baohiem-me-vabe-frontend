import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import "../styles/wordpress.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://baohiemmevabe.com.vn"),
  title: {
    default: "Bảo Hiểm Mẹ và Bé | Dai-ichi Life",
    template: "%s | Bảo Hiểm Mẹ và Bé",
  },
  description: "Giải pháp bảo vệ toàn diện cho mẹ và bé bằng các gói bảo hiểm chất lượng của Dai-ichi Life.",
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
  alternates: {
    canonical: "https://baohiemmevabe.com.vn/",
  },
  openGraph: {
    title: "Bảo Hiểm Mẹ và Bé",
    description: "Giải pháp bảo vệ toàn diện cho mẹ và bé bằng các gói bảo hiểm chất lượng.",
    url: "https://baohiemmevabe.com.vn",
    siteName: "Bảo Hiểm Mẹ và Bé",
    images: [
      {
        url: "/hero-mevabe.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bảo Hiểm Mẹ và Bé",
    description: "Giải pháp bảo vệ toàn diện cho mẹ và bé bằng các gói bảo hiểm chất lượng.",
    images: ["/hero-mevabe.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD: Thông tin website - KHÔNG bao gồm SearchAction vì frontend không có search
  // (SearchAction sẽ làm Google crawl ?s={search_term_string} và gây lỗi GSC)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bảo Hiểm Mẹ và Bé",
    "url": "https://baohiemmevabe.com.vn/",
    "description": "Giải pháp bảo vệ toàn diện cho mẹ và bé bằng các gói bảo hiểm chất lượng của Dai-ichi Life.",
    "inLanguage": "vi-VN"
  };

  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${beVietnamPro.className} antialiased min-h-screen flex flex-col`}
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
