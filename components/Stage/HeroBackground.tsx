import Image from 'next/image';

interface HeroBackgroundProps {
    imagePath?: string;
    city?: string;
}

export default function HeroBackground({
    imagePath = '/backgrounds/bg-default.webp',
    city = 'Unknown City'
}: HeroBackgroundProps) {
    return (
        <div className="fixed inset-0 z-[var(--z-background)] w-full h-full overflow-hidden">
            {/* Fallback color if image fails or loading */}
            <div className="absolute inset-0 bg-[#050505]" />

            {/* We use a simple img tag or Next Image depending on opt. 
          For full cover background, Next Image fill is good. */}
            {/* 
          Note: Since we are using an absolute path for image from public, 
          we need to ensure it exists. For now, we render a placeholder gradient if strictly needed,
          but here we assume the file will be placed there.
      */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[20s] ease-linear hover:scale-105"
                style={{
                    backgroundImage: `url(${imagePath})`,
                    // Fallback gradient simulating a neon city night
                    backgroundColor: '#000',
                }}
                role="img"
                aria-label={`Atmospheric background of ${city}`}
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

            {/* Neon Atmospheric Glow Overlay */}
            <div className="absolute inset-0 opacity-30 bg-gradient-to-tr from-[var(--color-neon-blue)]/10 to-[var(--color-neon-pink)]/10 mix-blend-overlay pointer-events-none" />
        </div>
    );
}
