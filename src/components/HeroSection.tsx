"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, ShieldCheck, Cpu } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center pt-28 pb-32 overflow-hidden bg-blue-950">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950" />
            <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/20 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-yellow-500/10 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left pt-12 lg:pt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                            <span className="text-sm font-medium text-white/90">
                                IT Consultant & System Integration
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-tight mb-6">
                            Empowering Innovations, <br className="hidden md:block" />
                            <span className="text-yellow-500">
                                Connecting the Future.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-blue-200 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                            Elevate your business with end-to-end integration, custom software, and smart IoT solutions tailored to your enterprise goals.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <a
                                href="#services"
                                className="px-8 py-4 rounded-full bg-yellow-500 text-blue-950 font-bold text-lg transition-transform hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(234,179,8,0.5)] flex items-center gap-2"
                            >
                                Discover Solutions
                                <ArrowRight size={20} />
                            </a>
                            <a
                                href="#portfolio"
                                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-lg transition-colors backdrop-blur-sm"
                            >
                                View Portfolio
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Right Graphic / Abstract UI element */}
                <div className="flex-1 hidden lg:flex justify-center items-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative w-[450px] h-[450px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-white/5 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl p-8 flex flex-col gap-6 transform rotate-3 hover:rotate-0 transition-transform duration-700">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="text-xs text-white/50 font-mono">system_v2.0</div>
                            </div>

                            <div className="bg-white/5 rounded-xl p-4 flex items-center gap-4 border border-white/5">
                                <div className="p-3 rounded-lg bg-yellow-500/20 text-yellow-500">
                                    <Cpu size={24} />
                                </div>
                                <div>
                                    <div className="h-2 w-24 bg-white/20 rounded-full mb-2" />
                                    <div className="h-2 w-16 bg-white/10 rounded-full" />
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-1 bg-white/5 rounded-xl p-4 flex flex-col gap-2 border border-white/5">
                                    <Code size={20} className="text-blue-300" />
                                    <div className="h-1.5 w-full bg-white/20 rounded-full mt-2" />
                                    <div className="h-1.5 w-2/3 bg-white/10 rounded-full" />
                                </div>
                                <div className="flex-1 bg-white/5 rounded-xl p-4 flex flex-col gap-2 border border-white/5">
                                    <ShieldCheck size={20} className="text-emerald-300" />
                                    <div className="h-1.5 w-full bg-white/20 rounded-full mt-2" />
                                    <div className="h-1.5 w-1/2 bg-white/10 rounded-full" />
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
