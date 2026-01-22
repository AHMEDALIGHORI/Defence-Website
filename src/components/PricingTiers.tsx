'use client';

import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { droneData } from '@/data/droneData';

export default function PricingTiers() {
    return (
        <section id="pricing" className="py-24 md:py-32 bg-black relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h3 className="text-sm font-bold font-space text-blue-500 mb-6 tracking-[0.3em] uppercase">
                        Deployment Options
                    </h3>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                        Choose Your Configuration
                    </h2>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {droneData.pricing.map((tier, index) => (
                        <motion.div
                            key={tier.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative rounded-3xl p-8 lg:p-10 transition-all duration-500 group ${tier.highlighted
                                ? 'bg-gradient-to-b from-blue-600/20 to-transparent border border-blue-500/50 scale-105'
                                : 'bg-white/5 border border-white/10 hover:border-white/20'
                                }`}
                        >
                            {/* Popular Badge */}
                            {tier.highlighted && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-blue-600 rounded-full">
                                    <span className="text-xs font-bold font-space tracking-widest">MOST POPULAR</span>
                                </div>
                            )}

                            {/* Tier Name */}
                            <h3 className="text-lg font-space font-bold text-white/70 mb-4 tracking-wider">
                                {tier.name}
                            </h3>

                            {/* Price */}
                            <div className="mb-8">
                                <span className="text-4xl lg:text-5xl font-bold font-space text-white">
                                    {tier.price}
                                </span>
                                {tier.price !== "Custom Quote" && (
                                    <span className="text-white/40 ml-2">USD</span>
                                )}
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 mb-10">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <svg
                                            className={`w-5 h-5 flex-shrink-0 ${tier.highlighted ? 'text-blue-400' : 'text-white/40'
                                                }`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="font-rajdhani">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <MagneticButton
                                className={`w-full py-4 rounded-xl font-bold font-space text-sm tracking-wider transition-all duration-300 ${tier.highlighted
                                    ? 'bg-blue-600 text-white hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(0,122,255,0.4)]'
                                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                                    }`}
                            >
                                {tier.price === "Custom Quote" ? "CONTACT SALES" : "SELECT TIER"}
                            </MagneticButton>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-center text-white/40 mt-16 text-sm font-space"
                >
                    All configurations include 24/7 mission support and satellite uplink integration.
                </motion.p>
            </div>
        </section>
    );
}
