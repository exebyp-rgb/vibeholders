import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const pages = [
        'about', 'contact', 'terms', 'privacy',
        'editorial-policy', 'dmca', 'disclosure',
        'press', 'get-on-the-map'
    ];
    return pages.map((slug) => ({ slug }));
}

export default async function StaticPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const title = slug.replace(/-/g, ' ').toUpperCase();

    const VALID_PAGES = [
        'about', 'contact', 'terms', 'privacy',
        'editorial-policy', 'dmca', 'disclosure',
        'press', 'get-on-the-map'
    ];

    if (!VALID_PAGES.includes(slug)) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white p-8 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 neon-text-glow text-[var(--color-neon-purple)]">{title}</h1>
            <div className="prose prose-invert">
                <p className="text-gray-300">
                    This is a placeholder for the <strong>{title}</strong> page.
                    Legal and trust content goes here.
                </p>
                <p className="text-gray-400 text-sm mt-8">
                    Last updated: {new Date().toLocaleDateString()}
                </p>
            </div>
        </main>
    );
}
