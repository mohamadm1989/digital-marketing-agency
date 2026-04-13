import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Legacy Solutions Digital Agency';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'black',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <svg
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        fill="none"
                    >
                        <path d="M50 5L90 28L50 51L10 28L50 5Z" fill="white" opacity="0.9" />
                        <path d="M10 28L50 51V95L10 72V28Z" fill="white" opacity="0.5" />
                        <path d="M50 51L90 28V72L50 95V51Z" fill="#fce34d" />
                    </svg>
                    <div style={{ fontSize: '70px', fontWeight: 'bold', color: 'white', fontFamily: 'sans-serif' }}>
                        Legacy Solutions
                    </div>
                </div>
                <div style={{ marginTop: '20px', fontSize: '32px', color: '#888', fontWeight: 500, fontFamily: 'sans-serif' }}>
                    Digital Agency | Design, Development & Marketing
                </div>
            </div>
        ),
        { ...size }
    );
}
