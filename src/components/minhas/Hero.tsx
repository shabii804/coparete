'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, ChevronDown, Sparkles, TrendingUp, Globe2, Award, FileText } from 'lucide-react';

const HERO_HEADLINE_LINES = ['Building Tomorrow,', 'Today.'];

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
      {display.toLocaleString()}{suffix}
    </span>
  );
}

export default function Hero({ visible, onQuoteClick }: { visible: boolean; onQuoteClick?: () => void }) {
  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 700], [0, 140]);
  const contentY = useTransform(scrollY, [0, 700], [0, 60]);
  const overlayOpacity = useTransform(scrollY, [0, 500], [1, 0.6]);

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background video with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: videoY }}>
        <div className="absolute inset-0 scale-110">
          <video
            className="w-full h-full object-cover"
            autoPlay muted loop playsInline
            poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          >
            <source src="https://cdn.coverr.co/videos/coverr-modern-corporate-building-7234/1080p.mp4" type="video/mp4" />
          </video>
        </div>
        <motion.div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" style={{ opacity: overlayOpacity }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </motion.div>

      {/* Floating background shapes — animated blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-64 h-64 md:w-80 md:h-80 rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.55), transparent 70%)' }}
          animate={{ y: [0, 30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 -right-32 w-80 h-80 md:w-96 md:h-96 rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.55), transparent 70%)' }}
          animate={{ y: [0, -40, 0], x: [0, -20, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 left-1/4 w-64 h-64 md:w-72 md:h-72 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.5), transparent 70%)' }}
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-16 h-16 md:w-20 md:h-20 rounded-2xl border-2 border-[#2563EB]/20"
          animate={{ rotate: [0, 360], y: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#10B981]/25"
          animate={{ rotate: [0, -360], y: [0, -16, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-8 h-8 md:w-10 md:h-10 rotate-45 bg-gradient-to-br from-[#F59E0B]/30 to-transparent"
          animate={{ rotate: [45, 405], y: [0, 14, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Content with parallax */}
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 min-h-[100svh] flex flex-col justify-center pt-28 pb-20"
        style={{ y: contentY }}
      >
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full glass border border-white/60 shadow-soft mb-6 md:mb-7"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
            </span>
            <span className="text-[11px] md:text-xs font-medium tracking-wide text-[#0F172A]">
              A Diversified Conglomerate · Est. 2001
            </span>
          </motion.div>

          <h1 className="text-fluid-5xl font-extrabold leading-[1.02] text-[#0F172A] tracking-tight">
            {HERO_HEADLINE_LINES.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-1">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={visible ? { y: '0%' } : {}}
                  transition={{ delay: 0.4 + i * 0.18, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {i === 1 ? <span className="text-gradient-triple">{line}</span> : line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.95, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 md:mt-7 text-fluid-base md:text-fluid-lg text-[#475569] leading-relaxed max-w-2xl"
          >
            Minhas Enterprises is a diversified group delivering excellence across industries —
            from real estate and trading to technology and energy. We build with integrity,
            innovate with purpose, and grow alongside the communities we serve.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 md:mt-9 flex flex-wrap items-center gap-3 md:gap-4"
          >
            <button
              onClick={onQuoteClick}
              className="group inline-flex items-center gap-2 px-5 md:px-7 py-3 md:py-4 rounded-2xl text-sm md:text-base font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1E40AF] shadow-premium-lg hover:shadow-glow-blue transition-all duration-500 hover:-translate-y-1"
            >
              <FileText className="w-4 h-4 md:w-5 md:h-5" />
              Get a Free Quote
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              href="#about"
              className="group inline-flex items-center gap-2 px-5 md:px-7 py-3 md:py-4 rounded-2xl text-sm md:text-base font-semibold text-[#0F172A] bg-white/80 backdrop-blur-md border border-[#E2E8F0] hover:border-[#2563EB] hover:bg-white shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-1"
            >
              <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#2563EB] to-[#10B981] inline-flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-3 h-3 md:w-3.5 md:h-3.5 text-white fill-white ml-0.5" />
              </span>
              Our Story
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={visible ? 'show' : 'hidden'}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 1.4 } } }}
            className="mt-12 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl"
          >
            {STATS.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.95 },
                    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="group relative p-4 md:p-5 rounded-2xl glass-strong border border-white/70 shadow-premium hover:shadow-glow-blue transition-shadow duration-500"
                >
                  <div className="icon-modern w-9 h-9 mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-[11px] md:text-xs font-medium text-[#64748B] tracking-wide">
                    {s.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#64748B] font-medium">Scroll</span>
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
