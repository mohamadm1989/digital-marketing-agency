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
                    background: 'black',
                    borderRadius: '4px',
                }}
            >
                <div style={{ color: '#fce34d', fontSize: 24, fontWeight: 'bold', fontFamily: 'sans-serif' }}>X</div>
            </div>
        ),
        { ...size }
    );
}
