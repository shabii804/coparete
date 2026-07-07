'use client';

import { useState, useEffect } from 'react';
import { Reveal } from './Reveal';
import { getIcon } from './IconResolver';

// Fallback tech data (used while loading)
const FALLBACK_TECHS = [
  { name: 'React', icon: 'Code2', color: '#61DAFB' },
  { name: 'Next.js', icon: 'Layers', color: '#0F172A' },
  { name: 'TypeScript', icon: 'Code2', color: '#3178C6' },
  { name: 'Node.js', icon: 'Boxes', color: '#339933' },
  { name: 'Python', icon: 'Code2', color: '#3776AB' },
  { name: 'PostgreSQL', icon: 'Database', color: '#4169E1' },
  { name: 'AWS', icon: 'Cloud', color: '#FF9900' },
  { name: 'Docker', icon: 'Container', color: '#2496ED' },
  { name: 'Kubernetes', icon: 'Boxes', color: '#326CE5' },
  { name: 'OpenAI', icon: 'Brain', color: '#10A37F' },
  { name: 'LangChain', icon: 'Bot', color: '#1C3C3C' },
  { name: 'GraphQL', icon: 'Workflow', color: '#E10098' },
  { name: 'Redis', icon: 'Zap', color: '#DC382D' },
  { name: 'TensorFlow', icon: 'Brain', color: '#FF6F00' },
  { name: 'Electron', icon: 'Smartphone', color: '#47848F' },
  { name: 'Blockchain', icon: 'Blocks', color: '#F7931A' },
  { name: 'IoT', icon: 'Wifi', color: '#2563EB' },
  { name: 'Microservices', icon: 'Server', color: '#6366F1' },
];

export default function TechStack() {
  const [techs, setTechs] = useState(FALLBACK_TECHS);

  useEffect(() => {
    fetch('/api/techstack').then(r => r.json()).then(data => {
      if (Array.isArray(data) && data.length > 0) {
        setTechs(data.map(t => ({ name: t.name, icon: t.icon, color: t.color })));
      }
    }).catch(() => {});
  }, []);

  const items = [...techs, ...techs];

  return (
    <section className="relative py-10 md:py-14 bg-white overflow-hidden border-y border-[#E2E8F0]">
      <div className="absolute top-0 left-0 w-[28rem] h-[28rem] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }} />

      <div className="container-premium relative">
        <Reveal>
          <div className="text-center mb-6 md:mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/8 text-[#2563EB] text-[10px] font-semibold tracking-wider uppercase mb-2">
              <span className="w-1 h-1 rounded-full bg-[#2563EB]" />
              Our Tech Stack
            </span>
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.3em] text-[#64748B]">
              Built with a world-class modern tech stack
            </p>
          </div>
        </Reveal>
      </div>

      {/* Marquee row 1 — moves left */}
      <div className="marquee-mask">
        <div className="flex w-max animate-marquee gap-2 sm:gap-2.5 md:gap-3 px-4">
          {items.map((t, i) => {
            const Icon = getIcon(t.icon);
            return (
              <div key={`r1-${i}`}
                className="group flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2.5 md:py-3 rounded-xl md:rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-400 flex-shrink-0 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ background: t.color }} />
                <div className="relative w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg md:rounded-xl inline-flex items-center justify-center transition-all duration-400 group-hover:scale-110 group-hover:rotate-6" style={{ background: `${t.color}15` }}>
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5" style={{ color: t.color }} strokeWidth={2} />
                  <div className="absolute inset-0 rounded-lg md:rounded-xl opacity-0 group-hover:opacity-30 blur-md transition-opacity" style={{ background: t.color }} />
                </div>
                <span className="text-xs sm:text-sm md:text-base font-bold text-[#0F172A] whitespace-nowrap" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{t.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Marquee row 2 — moves right (reverse) */}
      <div className="marquee-mask mt-2 sm:mt-2.5 md:mt-3">
        <div className="flex w-max animate-marquee-reverse gap-2 sm:gap-2.5 md:gap-3 px-4">
          {[...items].reverse().map((t, i) => {
            const Icon = getIcon(t.icon);
            return (
              <div key={`r2-${i}`}
                className="group flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2.5 md:py-3 rounded-xl md:rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-400 flex-shrink-0 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ background: t.color }} />
                <div className="relative w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg md:rounded-xl inline-flex items-center justify-center transition-all duration-400 group-hover:scale-110 group-hover:-rotate-6" style={{ background: `${t.color}15` }}>
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5" style={{ color: t.color }} strokeWidth={2} />
                  <div className="absolute inset-0 rounded-lg md:rounded-xl opacity-0 group-hover:opacity-30 blur-md transition-opacity" style={{ background: t.color }} />
                </div>
                <span className="text-xs sm:text-sm md:text-base font-bold text-[#0F172A] whitespace-nowrap" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{t.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
