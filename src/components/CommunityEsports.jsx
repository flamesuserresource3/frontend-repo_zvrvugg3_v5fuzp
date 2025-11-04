import React from 'react';
import { motion } from 'framer-motion';

const TEAMS = [
  { name: 'EVOS', title: 'Chasing Glory', glow: 'from-blue-400/40 to-cyan-300/30' },
  { name: 'RRQ', title: 'Kings of Kings', glow: 'from-amber-400/40 to-orange-300/30' },
  { name: 'ONIC', title: 'The Spark of Speed', glow: 'from-yellow-400/40 to-emerald-300/30' },
  { name: 'Blacklist', title: 'Code Breakers', glow: 'from-slate-300/40 to-blue-300/30' },
];

function TeamCard({ name, title, glow }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-blue-300/20 bg-black/30 p-6 backdrop-blur-md"
    >
      <div className={`pointer-events-none absolute -inset-20 rounded-full bg-gradient-to-br ${glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`} />
      <div className="relative">
        <h4 className="text-xl font-bold text-white drop-shadow">{name} Esports</h4>
        <p className="mt-1 text-blue-100/80">{title}</p>
        <div className="mt-6 h-32 w-full rounded-xl bg-gradient-to-br from-white/5 to-white/0 ring-1 ring-white/10" />
      </div>
    </motion.div>
  );
}

export default function CommunityEsports() {
  return (
    <section className="relative bg-[#070910] py-20 text-white">
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
            Community & Esports
          </span>
        </motion.h2>
        <p className="mt-3 text-center text-blue-100/80">
          Join millions of players and follow pro teams competing across the globe.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAMS.map((t) => (
            <TeamCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
