import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NavMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Hamburger Button (Fixed Top-Right) */}
            <div className="fixed top-8 right-8 z-[var(--z-nav)]">
                <Button
                    variant="ghost"
                    onClick={toggleMenu}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors group"
                    aria-label="Menu"
                >
                    <div className={`w-8 h-8 flex flex-col justify-center gap-1.5 transition-all duration-300 ${isOpen ? 'rotate-90' : ''}`}>
                        <span className={`h-0.5 w-8 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`h-0.5 w-8 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
                        <span className={`h-0.5 w-8 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </Button>
            </div>

            {/* Full Screen Menu Overlay */}
            <div
                className={`
          fixed inset-0 z-[var(--z-modal)] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center
          transition-all duration-500 ease-in-out
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
            >
                <nav className="flex flex-col gap-8 text-center animate-in slide-in-from-bottom-10 fade-in duration-700 delay-100" // Animation only triggers on mount if using shadcn, here standard CSS class needs support or we rely on opacity
                >
                    {/* Using simple Transition classes for visibility logic */}
                    {isOpen && (
                        <>
                            <a href="#" className="text-4xlfont-bold text-white hover:text-[var(--color-neon-blue)] neon-text-glow transition-colors uppercase tracking-widest" onClick={toggleMenu}>
                                Search Vibe
                            </a>
                            <Link href="/add-vibe" className="text-4xl font-bold text-white hover:text-[var(--color-neon-pink)] neon-text-glow transition-colors uppercase tracking-widest" onClick={toggleMenu}>
                                Add Vibe
                            </Link>
                        </>
                    )}
                </nav>

                {/* Footer in Menu */}
                <div className="absolute bottom-10 text-white/30 text-xs tracking-widest">
                    VIBEHOLDERS © 2024
                </div>
            </div>
        </>
    );
}
