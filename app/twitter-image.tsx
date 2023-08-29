import { ImageResponse } from 'next/server';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

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
            <div className="w-full h-full bg-gradient-to-b from-blue-500 to-blue-700 flex items-center justify-center text-white p-10">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Web3 Club Africa</h1>
                    <p className="text-2xl">Empowering Africa through Web3 Innovation</p>
                </div>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}
