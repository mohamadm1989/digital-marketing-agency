'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TextRevealProps {
    text: string;
    className?: string;
}

export default function TextReveal({ text, className = '' }: TextRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "start 0.25"], // Adjust based on when you want the reveal to happen
    });

    const words = text.split(/\s+/);

    return (
        <div ref={containerRef} className={`relative z-10 ${className}`}>
            <p className="flex flex-wrap text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] gap-x-[0.4em] gap-y-[0.2em]">
                {words.map((word, i) => {
                    const start = i / words.length;
                    const end = start + (1 / words.length);

                    return (
                        <Word key={i} progress={scrollYProgress} range={[start, end]}>
                            {word}
                        </Word>
                    );
                })}
            </p>
        </div>
    );
}

interface WordProps {
    children: React.ReactNode;
    progress: any;
    range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
    const opacity = useTransform(progress, range, [0.15, 1]);

    return (
        <span className="relative">
            <span className="absolute inset-0 opacity-[0.1] block select-none" aria-hidden="true">{children}</span>
            <motion.span style={{ opacity }} className="relative block">
                {children}
            </motion.span>
        </span>
    );
}
