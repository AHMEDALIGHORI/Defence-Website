'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a')
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-white/80 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: position.x - 8,
                    y: position.y - 8,
                    scale: isHovered ? 2.5 : 1,
                }}
                transition={{
                    type: 'spring',
                    damping: 30,
                    stiffness: 200,
                    mass: 0.5, // Faster follow for the main dot
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-white/50 rounded-full pointer-events-none z-[9998]"
                animate={{
                    x: position.x - 16,
                    y: position.y - 16,
                    scale: isHovered ? 1.5 : 1,
                }}
                transition={{
                    type: 'spring',
                    damping: 40,
                    stiffness: 150,
                    mass: 0.8, // Slight lag for the ring
                }}
            >
                {/* Tactical Crosshairs (visible only on hover) */}
                {isHovered && (
                    <>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-white/80 -translate-y-full" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-white/80 translate-y-full" />
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-white/80 -translate-x-full" />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-white/80 translate-x-full" />
                    </>
                )}
            </motion.div>
        </>
    );
}
