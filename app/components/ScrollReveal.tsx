'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

/* ─── Premium easing curves from the Blueprint reference ─── */
const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;
const IMAGE_EASE = [0.16, 1, 0.3, 1] as const;

type ScrollRevealProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    duration?: number;
    distance?: number;
    once?: boolean;
    blur?: boolean;
    /** Use heavier animation for images/large elements */
    heavy?: boolean;
};

export default function ScrollReveal({
    children,
    className = '',
    delay = 0,
    direction = 'up',
    duration = 1,
    distance = 40,
    once = true,
    blur = true,
    heavy = false,
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: '-20%' });

    const directionOffset = {
        up: { x: 0, y: distance },
        down: { x: 0, y: -distance },
        left: { x: distance, y: 0 },
        right: { x: -distance, y: 0 },
        none: { x: 0, y: 0 },
    };

    const blurAmount = heavy ? 'blur(30px)' : 'blur(10px)';

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{
                opacity: 0,
                x: directionOffset[direction].x,
                y: directionOffset[direction].y,
                scale: heavy ? 0.9 : 1,
                filter: blur ? blurAmount : 'blur(0px)',
            }}
            animate={isInView ? {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                filter: 'blur(0px)',
            } : {
                opacity: 0,
                x: directionOffset[direction].x,
                y: directionOffset[direction].y,
                scale: heavy ? 0.9 : 1,
                filter: blur ? blurAmount : 'blur(0px)',
            }}
            transition={{
                duration: heavy ? 1.8 : duration,
                ease: heavy ? IMAGE_EASE : PREMIUM_EASE,
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerContainer({
    children,
    className = '',
    staggerDelay = 0.15,
    delayChildren = 0.2,
}: {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
    delayChildren?: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-20%' });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({
    children,
    className = '',
    direction = 'up',
    distance = 30,
}: {
    children: React.ReactNode;
    className?: string;
    direction?: 'up' | 'down' | 'left' | 'right';
    distance?: number;
}) {
    const directionOffset = {
        up: { x: 0, y: distance },
        down: { x: 0, y: -distance },
        left: { x: distance, y: 0 },
        right: { x: -distance, y: 0 },
    };

    return (
        <motion.div
            className={className}
            variants={{
                hidden: {
                    opacity: 0,
                    x: directionOffset[direction].x,
                    y: directionOffset[direction].y,
                    filter: 'blur(10px)',
                },
                visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    filter: 'blur(0px)',
                    transition: {
                        duration: 1,
                        ease: PREMIUM_EASE,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}
