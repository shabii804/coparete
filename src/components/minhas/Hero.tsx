'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, FileText, Play, Building2, Globe2, Award, Users, TrendingUp, ShieldCheck, Sparkles } from 'lucide-react';
import { useNav } from './NavigationContext';

const STATS = [
  { icon: Award, label: 'Years Experience', value: 25, suffix: '+', color: '#2563EB' },
  { icon: Building2, label: 'Projects Completed', value: 180, suffix: '+', color: '#10B981' },
  { icon: Globe2, label: 'Business Units', value: 42, suffix: '', color: '#F59E0B' },
  { icon: Users, label: 'Employees Worldwide', value: 1200, suffix: '+', color: '#2563EB' },
];

const TRUST_BADGES = [
  { icon: ShieldCheck, label: 'ISO Certified' },
  { icon: Award, label: '25+ Years' },
  { icon: Globe2, label: 'Global Presence' },
  { icon: Sparkles, label: 'Award Winning' },
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

export default function Hero({ visible }: { visible: boolean }) {
  const { navigate, openQuote } = useNav();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 120]);
  const contentY = useTransform(scrollY, [0, 800], [0, 40]);
  const overlayOpacity = useTransform(scrollY, [0, 600], [1, 0.5]);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#F8FAFC]">
      {/* ===== Background: corporate skyscraper image ===== */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <div className="absolute inset-0 scale-105">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=85"
            alt="Modern corporate skyscraper"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        {/* White gradient overlay for readability (premium light look) */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/75 to-white/95"
          style={{ opacity: overlayOpacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/50 to-white/30" />
        {/* Thin premium grid background — subtle */}
        <div className="absolute inset-0 bg-grid-premium" />
      </motion.div>

      {/* ===== Decorative: soft gradient blobs + glowing circles ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft blue blob top-left */}
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.4), transparent 70%)' }}
          animate={{ y: [0, 30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Soft emerald blob bottom-right */}
        <motion.div
          className="absolute bottom-0 -right-20 w-[28rem] h-[28rem] rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.4), transparent 70%)' }}
          animate={{ y: [0, -40, 0], x: [0, -20, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Soft gold accent blob */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.4), transparent 70%)' }}
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Animated glowing circles */}
        <motion.div
          className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-[#2563EB]"
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-1.5 h-1.5 rounded-full bg-[#10B981]"
          animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-[#F59E0B]"
          animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </div>

      {/* ===== Hero content ===== */}
      <motion.div
        className="relative z-10 container-premium min-h-screen flex flex-col justify-center pt-32 pb-20"
        style={{ y: contentY }}
      >
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          {/* ===== LEFT COLUMN ===== */}
          <div className="max-w-2xl">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E2E8F0] shadow-[0_4px_12px_rgba(0,0,0,0.04)] mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-[#0F172A]">
                A Diversified Conglomerate · Est. 2001
              </span>
            </motion.div>

            {/* Premium headline */}
            <h1
              className="hero-heading-premium text-[2.5rem] sm:text-[3.25rem] lg:text-[4.5rem] xl:text-[5rem]"
            >
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={visible ? { y: '0%' } : {}}
                  transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  Building the Future
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={visible ? { y: '0%' } : {}}
                  transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  with <span className="text-[#2563EB]">Innovation</span>,
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={visible ? { y: '0%' } : {}}
                  transition={{ delay: 0.65, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  Integrity & Excellence.
                </motion.span>
              </span>
            </h1>

            {/* Premium paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.85, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 hero-paragraph-premium"
            >
              Minhas Enterprises is a diversified group delivering excellence across industries —
              from real estate and trading to technology and energy. We build with integrity,
              innovate with purpose, and grow alongside the communities we serve.
            </motion.p>

            {/* Premium buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <button
                onClick={openQuote}
                className="btn-premium-primary group w-full sm:w-auto"
              >
                <FileText className="w-4 h-4 md:w-5 md:h-5" />
                Get a Free Quote
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => navigate('about')}
                className="btn-premium-secondary group w-full sm:w-auto"
              >
                <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#2563EB] to-[#10B981] inline-flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                </span>
                Our Story
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#94A3B8] mb-3">
                Trusted by Industry Leaders
              </p>
              <div className="flex flex-wrap gap-2">
                {TRUST_BADGES.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <motion.span
                      key={b.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={visible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1.3 + i * 0.08, duration: 0.5 }}
                      className="trust-badge"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#2563EB]" />
                      {b.label}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* ===== RIGHT COLUMN: Floating dashboard cards ===== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative h-[500px]"
          >
            {/* Main dashboard card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="float-card-premium absolute top-0 right-0 w-[360px] p-6 z-10"
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#94A3B8] font-semibold">Annual Revenue</div>
                  <div className="text-2xl font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>$2.4B</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] inline-flex items-center justify-center shadow-[0_8px_20px_rgba(37,99,235,0.3)]">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
              </div>
              {/* Mini chart bars */}
              <div className="flex items-end gap-1.5 h-16 mb-3">
                {[40, 55, 45, 70, 60, 85, 75, 95].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={visible ? { height: `${h}%` } : {}}
                    transition={{ delay: 1 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 rounded-t-md"
                    style={{
                      background: i === 7
                        ? 'linear-gradient(180deg, #2563EB, #1D4ED8)'
                        : 'linear-gradient(180deg, rgba(37,99,235,0.25), rgba(37,99,235,0.1))',
                    }}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#10B981] font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +18.2% YoY
                </span>
                <span className="text-[#94A3B8]">2026 YTD</span>
              </div>
            </motion.div>

            {/* Floating card 2: Live projects */}
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="float-card-premium absolute top-[200px] left-0 w-[280px] p-5 z-20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] inline-flex items-center justify-center shadow-[0_8px_20px_rgba(16,185,129,0.3)]">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>Active Projects</div>
                  <div className="text-[11px] text-[#64748B]">Across 6 divisions</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Real Estate', value: '32', color: '#2563EB' },
                  { label: 'Energy', value: '18', color: '#10B981' },
                  { label: 'Tech', value: '24', color: '#F59E0B' },
                ].map((s) => (
                  <div key={s.label} className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                    <div className="text-base font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif', color: s.color }}>{s.value}</div>
                    <div className="text-[9px] text-[#64748B] uppercase tracking-wide">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating card 3: Global presence */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="float-card-premium absolute bottom-0 right-8 w-[300px] p-5 z-30"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] inline-flex items-center justify-center shadow-[0_8px_20px_rgba(245,158,11,0.3)]">
                  <Globe2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>Global Presence</div>
                  <div className="text-[11px] text-[#64748B]">12 countries · 4 continents</div>
                </div>
              </div>
              {/* Mini world dots */}
              <div className="flex items-center gap-1.5 mt-3">
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={visible ? { scale: 1 } : {}}
                    transition={{ delay: 1.5 + i * 0.05 }}
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: i % 3 === 0 ? '#2563EB' : i % 3 === 1 ? '#10B981' : '#F59E0B',
                      opacity: 0.6 + (i % 3) * 0.15,
                    }}
                  />
                ))}
                <span className="text-[10px] text-[#64748B] ml-1">+ more</span>
              </div>
            </motion.div>

            {/* Decorative glowing circle behind cards */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.2), transparent 70%)' }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>

        {/* ===== Stats row — full width below ===== */}
        <motion.div
          initial="hidden"
          animate={visible ? 'show' : 'hidden'}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 1.5 } } }}
          className="mt-16 lg:mt-20"
        >
          {/* Desktop: 4 in a row / Tablet: 2x2 / Mobile: horizontal scroll */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.95 },
                    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="stat-card-premium p-5 md:p-6"
                >
                  <div
                    className="w-11 h-11 rounded-xl inline-flex items-center justify-center mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${s.color}18, ${s.color}28)`,
                      boxShadow: `0 4px 12px ${s.color}20`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: s.color }} />
                  </div>
                  <div className="text-3xl md:text-4xl font-extrabold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif', letterSpacing: '-0.02em' }}>
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1.5 text-xs md:text-sm font-medium text-[#64748B]">
                    {s.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile: horizontal scrollable carousel */}
          <div className="md:hidden -mx-6 px-6 overflow-x-auto no-scrollbar flex gap-3 snap-x snap-mandatory">
            {STATS.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={visible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.5 + STATS.indexOf(s) * 0.1, duration: 0.6 }}
                  className="stat-card-premium p-5 flex-shrink-0 w-[200px] snap-center"
                >
                  <div
                    className="w-10 h-10 rounded-xl inline-flex items-center justify-center mb-3"
                    style={{
                      background: `linear-gradient(135deg, ${s.color}18, ${s.color}28)`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: s.color }} />
                  </div>
                  <div className="text-3xl font-extrabold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif', letterSpacing: '-0.02em' }}>
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-xs font-medium text-[#64748B]">{s.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#64748B] font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-[#94A3B8] flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
