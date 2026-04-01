"use client";

import { motion } from "framer-motion";
import { Smartphone, Combine, AreaChart, PenTool } from "lucide-react";

export default function ServicesSection() {
    const services = [
        {
            icon: <Smartphone strokeWidth={1.5} size={32} />,
            title: "Custom Software Development",
            description: "Tailor-made Mobile (iOS & Android) and Web Base Applications mapped exactly to your business logic and operational workflow.",
            color: "bg-blue-50 text-blue-900 border-blue-100",
            accent: "bg-blue-900"
        },
        {
            icon: <Combine strokeWidth={1.5} size={32} />,
            title: "IoT & System Integration",
            description: "Seamless connection of external architecture. We specialize in uniting smart machinery (vending units, sensors) with digital apps.",
            color: "bg-amber-50 text-amber-600 border-amber-100",
            accent: "bg-yellow-500"
        },
        {
            icon: <AreaChart strokeWidth={1.5} size={32} />,
            title: "IT Blueprint & Consulting",
            description: "We audit, plan, and architect your long-term digital transformation roadmap, ensuring sustainable technology infrastructure.",
            color: "bg-emerald-50 text-emerald-600 border-emerald-100",
            accent: "bg-emerald-500"
        },
        {
            icon: <PenTool strokeWidth={1.5} size={32} />,
            title: "UI/UX Experience Design",
            description: "Modern, scalable, and highly intuitive user interfaces designed to maximize customer engagement and operational efficiency.",
            color: "bg-purple-50 text-purple-600 border-purple-100",
            accent: "bg-purple-500"
        }
    ];

    return (
        <section id="services" className="py-24 bg-slate-50 relative">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-blue-900 font-semibold tracking-wider text-sm uppercase mb-3 flex items-center justify-center gap-2">
                            <span className="w-8 h-[2px] bg-yellow-500 block" />
                            Our Excellence
                            <span className="w-8 h-[2px] bg-yellow-500 block" />
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
                            Solutions that Scale with You
                        </h3>
                        <p className="text-slate-600 font-light">
                            From high-level strategic consulting to deep technical integration, our core services are designed to build a solid foundation for your digital ecosystem.
                        </p>
                    </motion.div>
                </div>

                {/* Services Grid (Bento Box style) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto text-left">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-900/20 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Interactive background reveal */}
                            <div className={`absolute -right-20 -top-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${service.accent}`} />

                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 border ${service.color} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                                {service.icon}
                            </div>

                            <h4 className="text-xl font-heading font-bold text-slate-800 mb-4 group-hover:text-blue-900 transition-colors">
                                {service.title}
                            </h4>
                            <p className="text-slate-600 font-light leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
