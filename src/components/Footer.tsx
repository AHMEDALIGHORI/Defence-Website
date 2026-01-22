'use client';

import { motion } from 'framer-motion';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        products: [
            { name: 'Executioner', href: '#' },
            { name: 'Sentinel Series', href: '#' },
            { name: 'Recon Platform', href: '#' },
            { name: 'Fleet Systems', href: '#' },
        ],
        company: [
            { name: 'About', href: '#' },
            { name: 'Careers', href: '#' },
            { name: 'Press', href: '#' },
            { name: 'Partners', href: '#' },
        ],
        resources: [
            { name: 'Documentation', href: '#' },
            { name: 'Training', href: '#' },
            { name: 'Support', href: '#' },
            { name: 'Status', href: '#' },
        ],
        legal: [
            { name: 'Privacy', href: '#' },
            { name: 'Terms', href: '#' },
            { name: 'Compliance', href: '#' },
            { name: 'Export Policy', href: '#' },
        ],
    };

    return (
        <footer id="contact" className="bg-exec-carbon border-t border-white/5 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                {/* Top Section */}
                <div className="grid lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-400 rounded-xl flex items-center justify-center shadow-lg">
                                    <span className="text-black font-bold text-xl">D</span>
                                </div>
                                <span className="font-space font-bold tracking-[0.1em] text-white text-lg">
                                    DEFENSE INDUSTRIES
                                </span>
                            </div>
                            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
                                Pioneering next-generation autonomous defense systems.
                                Precision engineering for a safer tomorrow.
                            </p>

                            {/* Newsletter */}
                            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                                <h4 className="font-space font-bold text-sm tracking-wider mb-4">
                                    MISSION UPDATES
                                </h4>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm font-rajdhani placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 transition-colors"
                                    />
                                    <button className="px-6 py-3 bg-blue-600 text-white font-space font-bold text-xs rounded-lg hover:bg-blue-500 transition-colors">
                                        SUBSCRIBE
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-3 grid sm:grid-cols-4 gap-8">
                        {Object.entries(footerLinks).map(([category, links], idx) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                            >
                                <h4 className="font-space font-bold text-sm tracking-wider text-white/70 mb-4 uppercase">
                                    {category}
                                </h4>
                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                className="text-gray-400 hover:text-white transition-colors text-sm"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Copyright */}
                    <p className="text-gray-500 text-sm font-space">
                        © {currentYear} Defense Industries. All rights reserved.
                    </p>

                    {/* Certifications */}
                    <div className="flex items-center gap-6">
                        <span className="text-xs font-space text-white/30 tracking-wider">ISO 9001</span>
                        <span className="text-xs font-space text-white/30 tracking-wider">ITAR COMPLIANT</span>
                        <span className="text-xs font-space text-white/30 tracking-wider">NATO CERTIFIED</span>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {[
                            { name: 'linkedin', url: 'https://www.linkedin.com/' },
                            { name: 'twitter', url: 'https://twitter.com/' },
                            { name: 'youtube', url: 'https://www.youtube.com/' }
                        ].map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
                            >
                                <span className="sr-only">{social.name}</span>
                                <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                                    {social.name === 'linkedin' && (
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    )}
                                    {social.name === 'twitter' && (
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    )}
                                    {social.name === 'youtube' && (
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    )}
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
