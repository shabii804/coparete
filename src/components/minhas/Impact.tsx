'use client';

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';
import { TrendingUp, Users, Building, Leaf } from 'lucide-react';

const IMPACT = [
  { icon: Building, value: 180, suffix: '+', label: 'Projects Delivered', desc: 'Across residential, commercial, and infrastructure segments.' },
  { icon: Users, value: 1200, suffix: '+', label: 'Professionals', desc: 'A multidisciplinary team spanning six industries.' },
  { icon: TrendingUp, value: 2.4, suffix: 'B', prefix: '$', label: 'Annual Revenue', desc: 'Sustained, profitable growth across the group.', decimals: 1 },
  { icon: Leaf, value: 35, suffix: '%', label: 'Renewable Mix', desc: 'Of our energy portfolio from renewable sources.' },
];

function ImpactCounter({ value, decimals = 0, prefix = '', suffix = '' }: {
  value: number; decimals?: number; prefix?: string; suffix?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  const formatted = display.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{formatted}{suffix}
    </span>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="relative py-24 md:py-32 overflow-hidden bg-[#0F172A]">
      {/* Decorative gradients */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
        <div className="absolute bottom-0 right-1/4 w-[36rem] h-[36rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-white text-xs font-semibold tracking-wider uppercase">
              <span className="w-1 h-1 rounded-full bg-[#10B981]" />
              Our Impact
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-[1.1] text-white">
              Numbers that{' '}
              <span className="text-gradient-gold">tell our story.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed">
              Two decades of disciplined growth, dedicated teams, and a relentless focus on
              delivering value — measured not only in revenue, but in lives improved.
            </p>
          </Reveal>
        </div>

        {/* Impact grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {IMPACT.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.label} delay={i * 0.1} y={30}>
                <div className="group relative h-full p-7 rounded-3xl glass-dark border border-white/10 hover:border-white/30 hover-lift overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                    style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.5), transparent 70%)' }} />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#10B981] inline-flex items-center justify-center mb-5 shadow-glow-blue">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                      <ImpactCounter
                        value={s.value}
                        decimals={'decimals' in s ? (s.decimals as number) : 0}
                        prefix={'prefix' in s ? (s.prefix as string) : ''}
                        suffix={s.suffix}
                      />
                    </div>
                    <div className="mt-3 text-sm font-semibold text-white tracking-wide">
                      {s.label}
                    </div>
                    <div className="mt-2 text-xs text-white/60 leading-relaxed">
                      {s.desc}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
