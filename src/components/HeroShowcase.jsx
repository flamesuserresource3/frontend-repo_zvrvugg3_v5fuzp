import React from 'react';
import { motion } from 'framer-motion';

const HEROES = [
  { name: 'Alucard', role: 'Fighter', color: 'from-blue-700 to-blue-400' },
  { name: 'Miya', role: 'Marksman', color: 'from-indigo-700 to-cyan-400' },
  { name: 'Layla', role: 'Marksman', color: 'from-sky-700 to-emerald-400' },
  { name: 'Kagura', role: 'Mage', color: 'from-purple-700 to-fuchsia-400' },
  { name: 'Gusion', role: 'Assassin', color: 'from-teal-700 to-cyan-400' },
  { name: 'Tigreal', role: 'Tank', color: 'from-slate-700 to-blue-400' },
];

function HeroCard({ name, role, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-2xl border border-blue-300/20 bg-gradient-to-br p-6 shadow-lg backdrop-blur-md hover:shadow-blue-500/20"
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-20 transition-opacity duration-300 group-hover:opacity-30`} />
      <div className="relative">
        <div className="h-40 w-full rounded-xl bg-gradient-to-br from-black/30 to-black/0 ring-1 ring-white/10">
          {/* Fake 3D rotation via CSS on hover */}
          <div className="h-full w-full transform-gpu rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(64,180,255,0.35),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(255,199,0,0.25),transparent_40%)] transition-transform duration-500 group-hover:rotate-1 group-hover:scale-[1.02] group-hover:[transform:perspective(900px)_rotateX(6deg)_rotateY(-6deg)]" />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white drop-shadow">{name}</h3>
            <p className="text-sm text-blue-100/70">{role}</p>
          </div>
          <span className="rounded-full border border-amber-300/30 bg-black/30 px-3 py-1 text-xs text-amber-200/90">3D</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroShowcase() {
  return (
    <section id="heroes" className="relative bg-[#070910] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,149,255,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-extrabold"
        >
          <span className="bg-gradient-to-r from-blue-300 via-white to-amber-200 bg-clip-text text-transparent">
            Hero Showcase
          </span>
        </motion.h2>
        <p className="mt-3 text-center text-blue-100/80">
          Hover a card to feel the 3D motion. Choose your legend.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HEROES.map((h) => (
            <HeroCard key={h.name} {...h} />
          ))}
        </div>
      </div>
    </section>
  );
}
