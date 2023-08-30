import { ImageResponse } from 'next/server';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Web3 Club Africa';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'linear-gradient(to bottom, #022c43, #34495e)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    fontFamily: 'Arial, sans-serif',
                    textAlign: 'center',
                    fontSize: '4rem'
                }}
            >
                Web3 Club Africa
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}
