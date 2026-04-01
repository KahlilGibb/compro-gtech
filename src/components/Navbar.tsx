"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About Us", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-12 h-12 bg-white rounded-lg p-1">
                        <Image
                            src="/logo_gtech.png"
                            alt="Gynetra Tech Solutions Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className={`font-heading font-bold text-xl tracking-tight transition-colors ${isScrolled ? "text-blue-950" : "text-white"}`}>
                        Gynetra Tech Solutions
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`font-medium text-sm transition-colors ${isScrolled
                                ? "text-slate-600 hover:text-blue-900"
                                : "text-white/90 hover:text-yellow-500"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="#contact"
                        className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${isScrolled
                            ? "bg-yellow-500 text-blue-950 hover:bg-yellow-400"
                            : "bg-yellow-500 text-blue-950 hover:bg-yellow-400"
                            }`}
                    >
                        Get in Touch
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={isScrolled ? "text-slate-800" : "text-white"} size={24} />
                    ) : (
                        <Menu className={isScrolled ? "text-slate-800" : "text-white"} size={24} />
                    )}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-6 md:hidden flex flex-col gap-4"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-slate-700 font-medium py-2 border-b border-gray-50 hover:text-blue-900 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </motion.div>
            )}
        </header>
    );
}
