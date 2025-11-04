import React from 'react';
import { motion } from 'framer-motion';

export default function GameplayHighlights() {
  return (
    <section id="play" className="relative overflow-hidden bg-[#05070d] py-20 text-white">
      {/* Animated gradient canvas-like backdrop */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl"
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-40 -bottom-40 h-[28rem] w-[28rem] rounded-full bg-amber-400/20 blur-3xl"
          animate={{ x: [0, -30, 10, 0], y: [0, 25, -15, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,149,255,0.12),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video overflow-hidden rounded-2xl border border-blue-300/20 bg-black/40 shadow-xl backdrop-blur"
          >
            {/* Dummy cinematic canvas using layered gradients */}
            <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(64,180,255,0.2),transparent,rgba(255,199,0,0.18),transparent)] animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(64,180,255,0.2),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(255,199,0,0.18),transparent_45%)]" />
            <div className="absolute inset-0 grid place-items-center">
              <h3 className="text-xl font-bold tracking-wide text-blue-50 drop-shadow">Fast-paced 5v5 Action</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold">
              <span className="bg-gradient-to-r from-blue-300 via-white to-amber-200 bg-clip-text text-transparent">
                Gameplay Highlights
              </span>
            </h2>
            <p className="mt-3 text-blue-100/80">
              Push lanes, secure objectives, and outplay your rivals with precise skill shots and epic combos. Every match is a new cinematic story.
            </p>
            <ul className="mt-6 space-y-3 text-blue-100/80">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-300" /> Ranked and Classic modes</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-300" /> 100+ heroes with unique roles</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-300" /> Quick matchmaking and fair play</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
