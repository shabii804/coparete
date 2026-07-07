'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ChevronDown, Sparkles, TrendingUp, Globe2, Award } from 'lucide-react';

const HERO_HEADLINE_LINES = [
  'Building Tomorrow,',
  'Today.',
];

const STATS = [
  { icon: TrendingUp, label: 'Years of Excellence', value: 25, suffix: '+' },
  { icon: Globe2, label: 'Global Projects', value: 180, suffix: '+' },
  { icon: Award, label: 'Industry Awards', value: 42, suffix: '' },
  { icon: Sparkles, label: 'Team Members', value: 1200, suffix: '+' },
];

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(value * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Hero({ visible }: { visible: boolean }) {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-modern-corporate-building-7234/1080p.mp4"
            type="video/mp4"
          />
        </video>
        {/* Soft white overlay for readability */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/85" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      {/* Floating background shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.55), transparent 70%)' }}
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 -right-32 w-96 h-96 rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.55), transparent 70%)' }}
          animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 left-1/4 w-72 h-72 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.5), transparent 70%)' }}
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 min-h-screen flex flex-col justify-center pt-28 pb-16">
        <div className="max-w-4xl">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/60 shadow-soft mb-7"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
            </span>
            <span className="text-xs font-medium tracking-wide text-[#0F172A]">
              A Diversified Conglomerate · Est. 2001
            </span>
          </motion.div>

          {/* Headline line by line */}
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] text-[#0F172A] tracking-tight">
            {HERO_HEADLINE_LINES.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={visible ? { y: '0%' } : {}}
                  transition={{ delay: 0.4 + i * 0.18, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                >
                  {i === 1 ? (
                    <span className="text-gradient-royal">{line}</span>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Subtitle fades upward */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 text-lg md:text-xl text-[#475569] leading-relaxed max-w-2xl"
          >
            Minhas Enterprises is a diversified group delivering excellence across industries —
            from real estate and trading to technology and energy. We build with integrity,
            innovate with purpose, and grow alongside the communities we serve.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#services"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1E40AF] shadow-premium-lg hover:shadow-glow-blue transition-all duration-500 hover:-translate-y-1"
            >
              Explore Our Work
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold text-[#0F172A] bg-white/80 backdrop-blur-md border border-[#E2E8F0] hover:border-[#2563EB] hover:bg-white shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-1"
            >
              <Play className="w-4 h-4 text-[#2563EB] group-hover:scale-110 transition-transform" />
              Our Story
            </a>
          </motion.div>

          {/* Stats cards — appear one after another */}
          <motion.div
            initial="hidden"
            animate={visible ? 'show' : 'hidden'}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 1.4 } },
            }}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl"
          >
            {STATS.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.95 },
                    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="group relative p-5 rounded-2xl glass-strong border border-white/70 shadow-premium hover-lift hover:shadow-glow-blue"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563EB]/10 to-[#10B981]/10 inline-flex items-center justify-center mb-3 group-hover:from-[#2563EB] group-hover:to-[#10B981] transition-all duration-500">
                    <Icon className="w-4 h-4 text-[#2563EB] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div className="text-3xl font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-xs font-medium text-[#64748B] tracking-wide">
                    {s.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#64748B] font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-7 h-11 rounded-full border-2 border-[#94A3B8] flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"
          />
        </motion.div>
        <ChevronDown className="w-3 h-3 text-[#94A3B8]" />
      </motion.div>
    </section>
  );
}
