"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, Phone } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { name: "Trang chủ", href: "/" },
        { name: "Thai sản", href: "/bao-hiem-thai-san" },
        { name: "Nhi khoa", href: "/nhi-khoa" },
        { name: "Combo gia đình", href: "/combo-gia-dinh" },
        { name: "Blog", href: "/blog" },
        { name: "Quy trình", href: "/quy-trinh" },
        { name: "Liên hệ", href: "/lien-he" },
    ];

    return (
        <header className="bg-brand-pink text-brand-text shadow-sm sticky top-0 z-[100]">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between relative z-50">
                <Link href="/" className="flex items-center gap-4 font-bold text-2xl">
                    <Image 
                        src="/images/favicon.ico" 
                        alt="Bảo Hiểm Mẹ và Bé Logo" 
                        width={120} 
                        height={120} 
                        className="w-20 h-20 md:w-28 md:h-28 object-contain"
                    />
                    <span className="leading-tight text-3xl">Mẹ & Bé</span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center gap-7 font-medium">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`hover:text-rose-600 transition-colors text-lg ${pathname === link.href ? "text-rose-600 font-bold" : ""}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://zalo.me/0909129916"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-mint text-brand-text hover:bg-emerald-300 px-6 py-3 rounded-full font-bold shadow-md transition-all flex items-center gap-2 ml-2"
                    >
                        <Phone className="w-5 h-5" /> Tư vấn ngay
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 text-brand-text"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-20 left-0 w-full bg-white shadow-2xl flex flex-col lg:hidden border-t border-gray-100 overflow-hidden z-40"
                    >
                        <nav className="flex flex-col p-4 gap-2">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`px-5 py-3 rounded-xl text-lg ${pathname === link.href ? "bg-brand-pink/40 text-rose-600 font-bold" : "hover:bg-gray-50 text-gray-700 font-medium"}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://zalo.me/0909129916"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 mb-2 bg-rose-500 text-white hover:bg-rose-600 px-5 py-4 rounded-xl font-bold shadow-md transition-all flex justify-center items-center gap-2 text-lg"
                            >
                                <Phone className="w-6 h-6" /> Nhắn Zalo: 0909.129.916
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
