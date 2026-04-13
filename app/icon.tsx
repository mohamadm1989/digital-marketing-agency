import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'transparent',
                }}
            >
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 100 100"
                    fill="none"
                >
                    <path d="M50 5L90 28L50 51L10 28L50 5Z" fill="#1e3f20" opacity="0.9" />
                    <path d="M10 28L50 51V95L10 72V28Z" fill="#1e3f20" opacity="0.5" />
                    <path d="M50 51L90 28V72L50 95V51Z" fill="#fce34d" />
                </svg>
            </div>
        ),
        { ...size }
    );
}
