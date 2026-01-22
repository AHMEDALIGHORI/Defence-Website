'use client';

import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { droneData } from '@/data/droneData';

export default function HeroSectionVideo() {
    return (
        <section id="overview" className="relative w-full h-screen overflow-hidden bg-black">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={droneData.hero.videoPath} type="video/mp4" />
            </video>

            {/* Top Gradient */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/90 to-transparent pointer-events-none" />

            {/* Bottom Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-[32rem] bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 h-full max-w-[1920px] mx-auto px-12">
                {/* Top HUD Elements */}
                <div className="absolute top-28 left-0 right-0 flex justify-between px-12 pointer-events-none">
                    {/* Live Feed Indicator */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-5 py-2.5"
                    >
                        <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="font-space font-bold text-xs tracking-[0.2em]">LIVE FEED</span>
                    </motion.div>

                    {/* Commander Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex items-center gap-4 bg-black/40 backdrop-blur-md rounded-full px-5 py-2 border border-white/10"
                    >
                        <div className="text-right">
                            <p className="text-xs font-bold font-space">CMD. ALPHA</p>
                            <p className="text-[10px] text-white/50 uppercase tracking-wider">COMMAND</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center border border-white/20">
                            <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Weapon Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute top-[40%] left-[20%] hidden lg:flex flex-col items-center gap-2 pointer-events-none"
                >
                    <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-bold font-space tracking-wider">VULCAN M134 ROTARY</span>
                    </div>
                    <div className="h-24 w-[1px] bg-gradient-to-b from-blue-500/50 to-transparent dashed-line" />
                </motion.div>

                {/* Bottom Right Telemetry */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="absolute bottom-12 right-12 bg-black/80 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-8 w-80 shadow-2xl hidden lg:block"
                >
                    <div className="flex justify-between items-start mb-6">
                        {/* Compass */}
                        <div className="relative w-24 h-24">
                            <div className="absolute inset-0 rounded-full border-2 border-white/10 border-t-white/80 animate-spin-slow" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-1 h-1 bg-white rounded-full" />
                            </div>
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[8px] font-space text-white/60">N</div>
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] font-space text-white/40">S</div>
                            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[8px] font-space text-white/40">W</div>
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[8px] font-space text-white/40">E</div>
                        </div>

                        {/* Heading Info */}
                        <div className="text-right">
                            <p className="text-[10px] font-space text-white/40 tracking-widest">HEADING</p>
                            <p className="text-5xl font-bold font-space">182°</p>
                            <p className="text-xs text-blue-400 font-bold tracking-widest mt-1">LOCKED</p>
                        </div>
                    </div>

                    {/* Telemetry Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                        <div>
                            <p className="text-[9px] font-space text-white/40 tracking-widest">ALTITUDE</p>
                            <p className="text-lg font-bold font-space">2,847m</p>
                        </div>
                        <div>
                            <p className="text-[9px] font-space text-white/40 tracking-widest">VELOCITY</p>
                            <p className="text-lg font-bold font-space">287km/h</p>
                        </div>
                    </div>
                </motion.div>

                {/* Main Title - Bottom Left */}
                <div className="absolute bottom-12 left-12 max-w-5xl pointer-events-none">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="relative">
                            <h1 className="text-7xl md:text-8xl lg:text-[9rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/40 leading-[0.85] tracking-tighter drop-shadow-2xl">
                                THE
                                <br />
                                EXECUTIONER
                            </h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="mt-8 pl-6 border-l-2 border-white/40 pointer-events-auto"
                        >
                            <p className="text-lg md:text-xl font-rajdhani text-gray-200 max-w-xl">
                                {droneData.hero.subtitle}
                            </p>
                            <div className="flex gap-4 mt-6">
                                <MagneticButton className="px-8 py-3 bg-white text-black font-bold font-space text-sm tracking-widest rounded transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                                    INITIATE
                                </MagneticButton>
                                <MagneticButton className="px-8 py-3 border border-white/30 text-white font-bold font-space text-sm tracking-widest rounded backdrop-blur-md hover:bg-white/10 transition-all duration-300">
                                    SPECS
                                </MagneticButton>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] font-space text-white/40 tracking-widest">SCROLL</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-[1px] h-8 bg-gradient-to-b from-white/60 to-transparent"
                />
            </motion.div>
        </section>
    );
}
