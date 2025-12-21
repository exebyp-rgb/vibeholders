
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // 1. Log Click Async (Fire and forget in standard backend, but in Edge we might await or use waitUntil)
    console.log(`[CLICK_LOG] Outbound click for ${slug}`);

    // TODO: Use D1Client to fetch real URL for this creator
    // const client = new D1Client(env);
    // const creator = await client.getCreatorBySlug(slug);

    const destination = `https://instagram.com/${slug}`; // Fallback logic

    // 2. Redirect
    return NextResponse.redirect(destination);
}
