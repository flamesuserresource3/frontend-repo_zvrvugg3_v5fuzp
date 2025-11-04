import React, { useRef } from 'react';
import HeroSection from './components/HeroSection';
import HeroShowcase from './components/HeroShowcase';
import GameplayHighlights from './components/GameplayHighlights';
import CommunityEsports from './components/CommunityEsports';
import { Youtube, Instagram, Twitter } from 'lucide-react';

export default function App() {
  const heroesRef = useRef(null);
  const scrollToHeroes = () => {
    heroesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#05070d] text-white selection:bg-blue-600/40 selection:text-white">
      <HeroSection onExplore={scrollToHeroes} />

      {/* Anchor for Explore button */}
      <div ref={heroesRef} />
      <HeroShowcase />
      <GameplayHighlights />
      <CommunityEsports />

      {/* Footer */}
      <footer className="relative bg-[#05070d] py-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,149,255,0.12),transparent_60%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-blue-100/80">© Moonton, 2025</p>
            <p className="text-xs text-blue-100/60">Fan-made cinematic landing experience</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-blue-50 backdrop-blur transition hover:bg-white/10"
              href="https://youtube.com" target="_blank" rel="noreferrer"
            >
              <Youtube size={18} className="text-red-400" /> YouTube
            </a>
            <a
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-blue-50 backdrop-blur transition hover:bg-white/10"
              href="https://instagram.com" target="_blank" rel="noreferrer"
            >
              <Instagram size={18} className="text-pink-400" /> Instagram
            </a>
            <a
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-blue-50 backdrop-blur transition hover:bg-white/10"
              href="https://twitter.com" target="_blank" rel="noreferrer"
            >
              <Twitter size={18} className="text-blue-300" /> X
            </a>
            <a
              className="group inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-black/30 px-3 py-2 text-sm text-amber-200/90 backdrop-blur transition hover:bg-black/40"
              href="#heroes"
            >
              Explore Heroes
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
