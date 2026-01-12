'use client';

import { Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-6 px-4">
      <h1 className="text-lg font-light tracking-widest text-white/90 uppercase">
        your vibe
      </h1>
      
      <button
        onClick={onMenuClick}
        className="fixed top-6 right-4 p-2 text-white/80 hover:text-white transition-colors"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>
    </header>
  );
}
