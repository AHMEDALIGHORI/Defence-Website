'use client';

import { motion } from 'framer-motion';
import { droneData } from '@/data/droneData';

interface ShowcaseSectionProps {
    videoPath: string;
    title: string;
    subtitle: string;
    align?: 'left' | 'center' | 'right';
}

const ShowcaseSection = ({
    videoPath,
    title,
    subtitle,
    align = 'center'
}: ShowcaseSectionProps) => (
    <section className="relative w-full h-[110vh] bg-black overflow-hidden flex flex-col items-center justify-center border-t border-white/5">
        {/* Background Video */}
        <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
            <source src={videoPath} type="video/mp4" />
        </video>

        {/* Content */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-20%", once: true }}
            transition={{ duration: 1 }}
            className={`relative z-10 max-w-7xl mx-auto px-6 w-full ${align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center'
                }`}
        >
            <div
                className={`inline-block ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
                    }`}
            >
                <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 tracking-tighter mb-6 drop-shadow-2xl font-space">
                    {title}
                </h2>
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium max-w-2xl leading-relaxed font-rajdhani">
                    {subtitle}
                </p>
            </div>
        </motion.div>

        {/* Top/Bottom Gradients */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none" />
    </section>
);

export default function CloseupGalleryVideo() {
    return (
        <div id="specs" className="bg-black text-white relative z-20">
            {/* Intro Section */}
            <div className="py-32 md:py-40 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-sm font-bold font-space text-blue-500 mb-6 tracking-[0.3em] uppercase">
                        Engineering Mastery
                    </h3>
                    <p className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                        Forged from titanium.
                        <br />
                        <span className="text-gray-500">Powered by intelligence.</span>
                    </p>
                </motion.div>
            </div>

            {/* Feature Showcases */}
            {droneData.features.map((feature) => (
                <ShowcaseSection
                    key={feature.id}
                    videoPath={feature.videoPath}
                    title={feature.title}
                    subtitle={feature.subtitle}
                    align={feature.align}
                />
            ))}

            {/* Spotlight CTA */}
            <section className="py-24 md:py-40 bg-black text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-[90rem] mx-auto rounded-[2rem] md:rounded-[3rem] bg-zinc-900/50 border border-white/10 p-12 md:p-24 lg:p-32 overflow-hidden relative"
                >
                    {/* Background Glow */}
                    <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-b from-white/5 to-transparent rotate-45 pointer-events-none" />

                    <div className="relative z-10">
                        <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-8 tracking-tighter">
                            Ready to deploy.
                        </h2>
                        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                            From tactical reconnaissance to full-spectrum operations,
                            The Executioner delivers unmatched precision.
                        </p>
                        <button className="px-12 py-5 md:py-6 bg-blue-600 text-white text-lg font-bold font-space rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_50px_rgba(0,122,255,0.5)]">
                            Order Now
                        </button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
