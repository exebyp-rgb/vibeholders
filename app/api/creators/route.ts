import { NextResponse } from 'next/server';
// import { getRequestContext } from '@cloudflare/next-on-pages'; 
import { D1Client } from '@/lib/db';

export const runtime = 'edge';

export async function GET(request: Request) {
    // In Cloudflare Pages, env is in request context
    // const { env } = getRequestContext(); 
    // For local dev without wrangler, we return mock data or empty

    // MOCK for now since we don't have local D1
    const mockCreators = [
        { id: '1', name: 'Neon Rider', vibeColor: '#05d9e8', position: { top: '30%', left: '20%' }, slug: 'neon-rider' },
        { id: '2', name: 'Cyber Zen', vibeColor: '#ff2a6d', position: { top: '50%', left: '50%' }, slug: 'cyber-zen' },
        // ...
    ];

    return NextResponse.json({ creators: mockCreators });
}

export async function POST(request: Request) {
    // Handle new vibe submission
    return NextResponse.json({ success: true, message: "Mock submission received" });
}
