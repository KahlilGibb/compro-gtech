"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target, Lightbulb, ShieldCheck, Clock } from "lucide-react";

export default function AboutSection() {
    const coreValues = [
        { title: "Innovation", icon: <Lightbulb size={24} className="text-yellow-500" />, desc: "Constant technological advancement." },
        { title: "Integrity", icon: <ShieldCheck size={24} className="text-blue-500" />, desc: "Transparent and honest consulting." },
        { title: "Excellence", icon: <CheckCircle2 size={24} className="text-emerald-500" />, desc: "Top-tier quality in every delivery." },
        { title: "On-Time", icon: <Clock size={24} className="text-purple-500" />, desc: "Strict adherence to project timelines." },
    ];

    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 transform -skew-x-12 translate-x-16" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Text Content */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-blue-900 font-semibold tracking-wider text-sm uppercase mb-3 flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-yellow-500 block" />
                                About Us
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                                Pioneering Digital Transformation Since 2024.
                            </h3>

                            <div className="prose prose-lg text-slate-600 mb-8 font-light">
                                <p>
                                    Founded on <strong>January 16, 2024</strong>, Gynetra Tech Solutions (GTS) emerged from a vision to solve real-world challenges through technology. Our journey began with the <strong>O-Waste project</strong>—a smart ecosystem integrating Vending Machines with Mobile Applications.
                                </p>
                                <p>
                                    This success in combining IoT hardware with intelligent software laid our foundation. Today, GTS stands as a premier IT Consulting firm focused on helping businesses scale through tailored software, seamless system integration, and end-to-end digital frameworks.
                                </p>
                            </div>

                            {/* Core Values Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                                {coreValues.map((value, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                                        className="flex gap-4 items-start"
                                    >
                                        <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl shadow-sm">
                                            {value.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-heading font-semibold text-slate-900">{value.title}</h4>
                                            <p className="text-sm text-slate-500 leading-relaxed">{value.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Visual Content (Vision/Mission Dashboard aesthetic) */}
                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="bg-slate-900 rounded-2xl shadow-2xl p-8 relative border border-slate-700 overflow-hidden"
                        >
                            {/* Abstract overlay */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900 opacity-20 blur-3xl rounded-full" />
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-500 opacity-10 blur-2xl rounded-full" />

                            <div className="relative z-10 flex flex-col gap-8">
                                {/* Vision Box */}
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-yellow-500/20 text-yellow-500 rounded-lg">
                                            <Target size={24} />
                                        </div>
                                        <h4 className="text-xl font-heading font-bold text-white">Our Vision</h4>
                                    </div>
                                    <p className="text-slate-300 font-light leading-relaxed">
                                        To be the leading technology partner in Indonesia, delivering innovative solutions that drive business growth and create a positive impact on society.
                                    </p>
                                </div>

                                {/* Mission Box */}
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                                    <h4 className="text-xl font-heading font-bold text-white mb-4">Our Missions</h4>
                                    <ul className="space-y-3 text-slate-300 font-light text-sm">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 size={18} className="text-yellow-500 mt-0.5 shrink-0" />
                                            <span>Deliver high-quality IT consulting and Custom Web/Mobile Development.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 size={18} className="text-yellow-500 mt-0.5 shrink-0" />
                                            <span>Provide intelligent End-to-End integration, bridging robust hardware with smart software.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 size={18} className="text-yellow-500 mt-0.5 shrink-0" />
                                            <span>Prioritize client satisfaction with strict On-Time Delivery.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 size={18} className="text-yellow-500 mt-0.5 shrink-0" />
                                            <span>Continuously innovate by adopting global technology trends.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
