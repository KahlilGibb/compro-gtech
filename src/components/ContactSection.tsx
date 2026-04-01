"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";

export default function ContactSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleWhatsAppSubmit = (e: FormEvent) => {
        e.preventDefault();
        const text = `Hello Gynetra Tech Solutions!\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/628891903324?text=${encodedText}`, "_blank");
    };
    return (
        <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-transparent to-transparent opacity-50 pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-500 rounded-full blur-[150px] opacity-5 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Text & Contact Info */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-yellow-500 font-semibold tracking-wider text-sm uppercase mb-3 flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-yellow-500 block" />
                                Get in Touch
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                                Ready to transform your business?
                            </h3>
                            <p className="text-slate-300 font-light mb-12 max-w-lg leading-relaxed">
                                Whether you need a full-scale IT blueprint or custom software development, our team of experts is ready to assist you. Contact us today to discuss your next big venture.
                            </p>

                            <div className="space-y-8">
                                {[
                                    { icon: <MapPin size={24} />, title: "Headquarters", detail: "Bekasi, Indonesia" },
                                    { icon: <Mail size={24} />, title: "Email Us", detail: "gynetratechsolutions@gmail.com" },
                                    { icon: <Phone size={24} />, title: "Call Us", detail: "+628216422141" },
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5 }}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-yellow-500 group-hover:bg-yellow-500 group-hover:text-blue-950 transition-all duration-300">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                                            <p className="text-slate-300 font-light">{item.detail}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Contact Form */}
                    <div className="flex justify-center items-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="w-full max-w-md bg-white rounded-3xl p-10 shadow-2xl relative"
                        >
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <MessageSquare size={32} />
                                </div>
                                <h4 className="text-2xl font-heading font-bold text-slate-900">Let&apos;s Connect</h4>
                                <p className="text-slate-500 text-sm mt-2">Reach out for inquiries or consultations.</p>
                            </div>

                            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Full Name"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
                                />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email Address"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
                                />
                                <textarea
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="How can we help you?"
                                    rows={4}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors resize-none"
                                />
                                <button type="submit" className="w-full py-4 bg-blue-900 hover:bg-blue-950 text-white rounded-xl font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                                    Send Message
                                </button>
                            </form>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
