'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { ARCHETYPE_LIST } from '@/lib/constants/archetypes';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Load creators from Supabase
    const [creators, setCreators] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
          async function loadCreators() {
                  try {
                                    const { createClient } = await import('@/lib/supabase');
                                                const supabase = createClient();
                            
                            const { data, error } = await supabase
                              .from('creators')
                              .select('*');

                            if (data) {
                                        console.log('Loaded creators:', data);
                                        setCreators(data);
                                      }
                            if (error) console.error('Error loading creators:', error);
                          } catch (err) {
                            console.error('Error:', err);
                          } finally {
                            setLoading(false);
                          }
                }
          loadCreators();
        }, []);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#0a0512]">
      {/* Background */}
      <div className="absolute inset-0 bg-black opacity-80" />
      
      {/* Header */}
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      
      {/* Menu */}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      {/* Content Area */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Welcome to VibeHolders
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Discover creators through 12 unique archetypes
          </p>
          
          {/* Archetype Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto px-4">
            {ARCHETYPE_LIST.map((archetype) => (
              <div
                key={archetype.id}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
                style={{ borderColor: `${archetype.color}20` }}
              >
                <span className="text-4xl">{archetype.emoji}</span>
                <span className="text-sm text-white/90 font-medium">
                  {archetype.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-white/60 text-sm uppercase tracking-wider">
          VibeHolders © 2024
        </p>
      </div>
    </main>
  );
}
