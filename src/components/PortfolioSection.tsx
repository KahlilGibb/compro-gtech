"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

export default function PortfolioSection() {
    const projects = [
        {
            client: "PT. Olah Limbah Owaste",
            title: "Smart Waste Management Ecosystem",
            description: "End-to-End integration of IoT Vending Machines with a comprehensive Mobile Application for automated waste tracking and rewards.",
            tags: ["Mobile App", "IoT Integration", "Backend System"],
            color: "from-emerald-500 to-teal-700",
            link: "https://owaste.cloud/",
            image: "/logo-owaste-white-on-green.png"
        },
        {
            client: "Bank Aceh",
            title: "Enterprise Digital Solution",
            description: "Tailored IT consulting and system optimization to support secure and scalable banking operations.",
            tags: ["IT Consulting", "System Architecture", "Security"],
            color: "from-blue-600 to-blue-950",
            link: "",
            image: "/logo-bank-aceh.webp"
        },
        {
            client: "Bank DKI",
            title: "Banking System Enhancement",
            description: "Strategic technological upgrades and performance optimizations for regional banking infrastructure.",
            tags: ["System Optimization", "Banking", "Consulting"],
            color: "from-red-500 to-orange-600",
            link: "",
            image: "/bank-dki-logo-png_seeklogo-246991.png"
        },
        {
            client: "Aspenda",
            title: "Digital Transformation Initiative",
            description: "Comprehensive software development tailored to streamline internal workflows and data processing.",
            tags: ["Web Application", "Process Automation"],
            color: "from-purple-600 to-indigo-800",
            link: "",
            image: "/aspenda.jpg"
        }
    ];

    return (
        <section id="portfolio" className="py-24 bg-white relative">
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-blue-900 font-semibold tracking-wider text-sm uppercase mb-3 flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-yellow-500 block" />
                            Our Portfolio
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 leading-tight">
                            Delivering Excellence across Industries.
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-slate-500 font-light max-w-md">
                            A glimpse into our successful partnerships and the technological milestones we've achieved alongside our esteemed clients.
                        </p>
                    </motion.div>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => {
                        const content = (
                            <>
                                {/* Image or Aesthetic Abstract Color Placeholder */}
                                <div className={`h-64 relative overflow-hidden bg-gradient-to-br transition-all duration-500 ${!project.image ? project.color : 'bg-slate-200'}`}>
                                    {project.image ? (
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    ) : (
                                        <>
                                            <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                                            {/* Decorative abstract shapes */}
                                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 blur-2xl rounded-full group-hover:bg-white/20 transition-all duration-700" />
                                            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-black/20 blur-xl rounded-full" />
                                        </>
                                    )}

                                    {/* Hover overlay link icon */}
                                    {project.link && (
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
                                            <div className="p-4 bg-white/20 backdrop-blur-md rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                                                <ArrowUpRight size={28} />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-8 pb-10 relative bg-white transform -translate-y-4 rounded-t-3xl mx-2 group-hover:-translate-y-6 transition-transform duration-500 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-sm font-semibold text-blue-900 uppercase tracking-wider">
                                            {project.client}
                                        </span>
                                    </div>

                                    <h4 className={`text-2xl font-heading font-bold text-slate-800 mb-3 transition-colors ${project.link ? 'group-hover:text-blue-900' : ''}`}>
                                        {project.title}
                                    </h4>

                                    <p className="text-slate-600 font-light mb-6 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </>
                        );

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className={`group relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm transition-all duration-500 ${project.link ? 'hover:shadow-2xl cursor-pointer' : ''}`}
                            >
                                {project.link ? (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                                        {content}
                                    </a>
                                ) : (
                                    <div className="block w-full h-full">
                                        {content}
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
