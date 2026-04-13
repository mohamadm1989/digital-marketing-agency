import React from 'react';

interface LogoProps {
    className?: string;
    width?: number;
    height?: number;
}

export default function Logo({ className = '', width = 36, height = 36 }: LogoProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            {/* Top Face - Solid (90% Opacity) */}
            <path d="M50 5L90 28L50 51L10 28L50 5Z" fill="currentColor" opacity="0.9" />
            {/* Left Face - Translucent (50% Opacity) */}
            <path d="M10 28L50 51V95L10 72V28Z" fill="currentColor" opacity="0.5" />
            {/* Right Face - Yellow Accent */}
            <path d="M50 51L90 28V72L50 95V51Z" fill="#fce34d" />
        </svg>
    );
}
