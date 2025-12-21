
import { Metadata } from 'next';
import Link from 'next/link';

export const runtime = 'edge';

interface Props {
    params: Promise<{ vibe: string }>;
}

// Generate Metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { vibe: rawVibe } = await params;
    const vibe = rawVibe.charAt(0).toUpperCase() + rawVibe.slice(1);
    return {
        title: `${vibe} Aesthetic & Vibe - Visual Discovery | VibeHolders`,
        description: `Explore the ${vibe} vibe.Curated visual inspiration, creators, and aesthetics for the ${vibe} style.Updated daily.`,
        alternates: {
            canonical: `https://vibeholders.com/vibes/${rawVibe}`,
        },
    };
}

export default async function VibePage({ params }: Props) {
    const { vibe: rawVibe } = await params;
    const vibe = rawVibe.charAt(0).toUpperCase() + rawVibe.slice(1);

    return (
        <main className="min-h-screen bg-black text-white p-8 md:p-16 max-w-4xl mx-auto">
            <Link href="/" className="text-gray-500 hover:text-white uppercase tracking-widest text-sm mb-8 block">← Back to Stage</Link>

            <article className="prose prose-invert prose-lg">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 neon-text-glow text-[var(--color-neon-blue)]">{vibe} Vibe</h1>

                {/* Definition Block */}
                <section className="mb-12 border-l-4 border-[var(--color-neon-pink)] pl-6 py-2 bg-white/5">
                    <h2 className="text-xl font-bold uppercase tracking-widest text-gray-400 mb-2">Definition</h2>
                    <p className="text-xl text-gray-200">
                        The <strong>{vibe}</strong> aesthetic is characterized by distinctive visual elements that evoke a specific mood or atmosphere.
                        It focuses on immersive experiences, color palettes, and thematic consistency.
                    </p>
                </section>

                {/* How We Curate */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-[var(--color-neon-green)]">How We Curate {vibe}</h2>
                    <p>
                        Our curation process for {vibe} involves selecting creators who embody the core visual language of the style.
                        We look for:
                    </p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
                        <li>High-fidelity visual storytelling.</li>
                        <li>Consistent color grading and atmospheric depth.</li>
                        <li>Authentic representation of the {vibe} lifestyle.</li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-4">Last Updated: {new Date().toLocaleDateString()}</p>
                </section>

                {/* Structured List / FAQ */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-bold text-white">What defines the {vibe} vibe?</h3>
                            <p className="text-gray-400">It is defined by its unique blend of visual cues and emotional resonance, often found in specific urban or natural settings.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">Where can I find {vibe} creators?</h3>
                            <p className="text-gray-400">VibeHolders curates the best creators. Explore our stage to find active profiles.</p>
                        </div>
                    </div>
                </section>
            </article>
        </main>
    );
}

