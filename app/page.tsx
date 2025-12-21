"use client";

export const runtime = 'edge';

import Image from "next/image";
import Header from "@/components/Stage/Header";
import HeroBackground from "@/components/Stage/HeroBackground";
import CreatorIcon from "@/components/Stage/CreatorIcon";
import CreatorCard from "@/components/CreatorCard/CreatorCard";
import NavMenu from "@/components/Nav/NavMenu";
import { useState } from "react";

// Mock data for initial visualization
const MOCK_CREATORS = [
  { id: '1', name: 'Neon Rider', vibeColor: '#05d9e8', position: { top: '30%', left: '20%' } },
  { id: '2', name: 'Cyber Zen', vibeColor: '#ff2a6d', position: { top: '50%', left: '50%' } },
  { id: '3', name: 'Night Owl', vibeColor: '#d23bff', position: { top: '65%', left: '80%' } },
  { id: '4', name: 'Urban Explorer', vibeColor: '#00ff9f', position: { top: '25%', left: '70%' } },
];

export default function Home() {
  const [selectedCreatorId, setSelectedCreatorId] = useState<string | null>(null);

  const handleCreatorClick = (id: string) => {
    setSelectedCreatorId(id);
  };

  const selectedCreator = MOCK_CREATORS.find(c => c.id === selectedCreatorId);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      <HeroBackground city="Neo Tokyo" />
      <Header />

      {/* Stage Area */}
      <div className="absolute inset-0 w-full h-full z-[var(--z-scene)]">
        {MOCK_CREATORS.map((creator) => (
          <CreatorIcon
            key={creator.id}
            name={creator.name}
            vibeColor={creator.vibeColor}
            position={creator.position}
            onClick={() => handleCreatorClick(creator.id)}
          />
        ))}
      </div>

      {/* Navigation */}
      <NavMenu />

      {/* Creator Card Overlay */}
      {selectedCreator && (
        <CreatorCard
          creator={{
            ...selectedCreator,
            tags: ['Cyberpunk', 'Neon', 'NightLife'], // Mock tags
            outUrl: '/out/neon-rider', // Mock url
            videoUrl: undefined // Will use fallback
          }}
          onClose={() => setSelectedCreatorId(null)}
        />
      )}

      {/* TODO: Navigation */}
    </main>
  );
}
