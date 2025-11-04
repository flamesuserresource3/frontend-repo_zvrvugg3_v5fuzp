import React, { useRef, useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';

// Simple particle canvas background for subtle aura/nebula effect
function ParticlesBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [dpr, setDpr] = useState(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let particles = Array.from({ length: 70 }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0006,
    }));

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      setDpr(ratio);
      canvas.width = canvas.clientWidth * ratio;
      canvas.height = canvas.clientHeight * ratio;
    };
    resize();

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Deep space gradient
      const grad = ctx.createRadialGradient(
        w * 0.5,
        h * 0.6,
        0,
        w * 0.5,
        h * 0.6,
        Math.max(w, h) * 0.7
      );
      grad.addColorStop(0, 'rgba(0, 120, 255, 0.15)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0.0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Floating particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
        const px = p.x * w;
        const py = p.y * h;
        const alpha = 0.25 + 0.55 * p.z;
        ctx.beginPath();
        ctx.arc(px, py, p.r * dpr, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(64, 180, 255, ${alpha})`;
        ctx.shadowColor = 'rgba(64,180,255,0.6)';
        ctx.shadowBlur = 8 * dpr;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationRef.current = requestAnimationFrame(render);
    };

    animationRef.current = requestAnimationFrame(render);
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [dpr]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ width: '100%', height: '100%' }}
    />
  );
}

export default function HeroSection({ onExplore }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -80]);
  const scale = useTransform(scrollY, [0, 600], [1, 0.95]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#05070d] text-white">
      {/* 3D Scene */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6pQ3yxY8Kc3oLJ6U/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* Particles & Aura */}
      <ParticlesBackground />

      {/* Blue/Gold gradient glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,149,255,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,198,0,0.12),transparent_55%)]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wider"
          style={{ textShadow: '0 8px 32px rgba(64,180,255,0.5)' }}
        >
          <span className="bg-gradient-to-br from-blue-300 via-blue-200 to-amber-200 bg-clip-text text-transparent">
            Enter the Land of Dawn
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-4 max-w-2xl text-blue-100/80"
        >
          A heroic, cinematic arena of fast-paced 5v5 battles. Master your hero, conquer the map, and rise as a legend.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#play"
            className="group inline-flex items-center rounded-full border border-blue-400/40 bg-gradient-to-br from-blue-600 to-blue-400 px-6 py-3 font-semibold text-white shadow-[0_0_20px_rgba(64,180,255,0.4)] transition hover:shadow-[0_0_32px_rgba(64,180,255,0.6)]"
          >
            Play Now
          </a>
          <button
            onClick={onExplore}
            className="inline-flex items-center rounded-full border border-amber-300/30 bg-black/30 px-6 py-3 font-semibold text-amber-200/90 backdrop-blur-md hover:bg-black/40 transition"
          >
            Explore Heroes
          </button>
        </motion.div>

        {/* Light beams */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-[120vw] -translate-x-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(0,149,255,0.25),transparent_60%)]" />
      </div>
    </section>
  );
}
