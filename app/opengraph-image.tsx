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
                    <div
                        style={{
                            width: '80px',
                            height: '80px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: '#fce34d',
                            borderRadius: '12px',
                            color: 'black',
                            fontSize: '50px',
                            fontWeight: 'bold',
                            fontFamily: 'sans-serif'
                        }}
                    >
                        X
                    </div>
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
