'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image, { ImageProps } from 'next/image';

interface ParallaxImageProps extends Omit<ImageProps, 'src'> {
    src: string;
    speed?: number; // 1 is normal, 0 is fixed, 0.5 moves at half speed
    sizes?: string;
}

export default function ParallaxImage({ src, alt, speed = 0.5, className, sizes = '100vw', ...props }: ParallaxImageProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress within the container's viewport area
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"], // Starts when element enters bottom, ends when it leaves top
    });

    // Transform scroll progress (0 to 1) into a Y offset
    // By default, it moves from -20% to 20% of its own height to create the parallax
    const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden w-full h-full">
            {/* We make the image slightly taller than the container (e.g., 140%) to allow room for it to move up and down without exposing the container background */}
            <motion.div
                style={{ y }}
                className="absolute -top-[20%] -bottom-[20%] -left-[5%] -right-[5%] w-[110%] h-[140%]"
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes={sizes}
                    className={`object-cover object-center ${className || ''}`}
                    {...props}
                />
            </motion.div>
        </div>
    );
}
