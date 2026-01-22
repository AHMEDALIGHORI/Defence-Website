'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-6 left-0 right-0 z-50 transition-all duration-300"
        >
            <div
                className={`max-w-7xl mx-auto px-6 transition-all duration-500 ${scrolled
                    ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-4 w-full'
                    : 'mt-2 bg-white/5 backdrop-blur-md border border-white/10 py-3 rounded-full'
                    }`}
            >
                <div className="flex justify-between items-center px-4">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-400 rounded-lg flex items-center justify-center shadow-lg">
                            <span className="text-black font-bold text-lg">D</span>
                        </div>
                        <span className="font-space font-bold tracking-[0.15em] text-white text-sm">
                            DEFENSE INDUSTRIES
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex gap-8">
                        {['OVERVIEW', 'SPECS', 'PRICING', 'CONTACT'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="font-rajdhani text-sm tracking-wide text-white/70 hover:text-white transition-colors duration-300 relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <MagneticButton
                        className={`px-6 py-2.5 font-bold font-space text-xs rounded-lg transition-all duration-300 ${scrolled
                            ? 'bg-white text-black hover:bg-gray-200'
                            : 'bg-white text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]'
                            }`}
                    >
                        INQUIRE
                    </MagneticButton>
                </div>
            </div>
        </motion.nav>
    );
}
