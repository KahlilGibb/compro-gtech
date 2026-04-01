"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-3 group mb-6 inline-flex">
                            <div className="relative w-10 h-10 bg-white rounded-lg p-1">
                                <Image
                                    src="/logo_gtech.png"
                                    alt="Gynetra Tech Solutions Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-heading font-bold text-xl tracking-tight text-white">
                                Gynetra Tech Solutions
                            </span>
                        </Link>
                        <p className="text-slate-400 font-light max-w-sm mb-6 leading-relaxed">
                            Empowering innovations and connecting the future. We deliver premium IT consulting and robust system integration for enterprises seeking to scale.
                        </p>
                        <div className="flex gap-4">
                            {[Linkedin, Twitter, Instagram, Github].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-900 hover:text-white transition-all hover:-translate-y-1"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm font-light text-slate-400">
                            <li><Link href="#about" className="hover:text-yellow-500 transition-colors">About Us</Link></li>
                            <li><Link href="#services" className="hover:text-yellow-500 transition-colors">Our Services</Link></li>
                            <li><Link href="#portfolio" className="hover:text-yellow-500 transition-colors">Portfolio Showcase</Link></li>
                            <li><Link href="#contact" className="hover:text-yellow-500 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal / Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm font-light text-slate-400">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm font-light text-center md:text-left">
                        &copy; {currentYear} Gynetra Tech Solutions. Built in Jakarta. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
