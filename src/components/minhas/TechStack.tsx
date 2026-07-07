'use client';

import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import SectionHeading from './SectionHeading';
import {
  Code2, Cloud, Database, Cpu, Layers, GitBranch, Container,
  Boxes, Zap, Shield, Gauge, Workflow, Brain, Bot, Blocks, Wifi, Server, Smartphone,
} from 'lucide-react';

const TECHS = [
  { name: 'React', icon: Code2, color: '#61DAFB' },
  { name: 'Next.js', icon: Layers, color: '#0F172A' },
  { name: 'TypeScript', icon: Code2, color: '#3178C6' },
  { name: 'Node.js', icon: Boxes, color: '#339933' },
  { name: 'Python', icon: Code2, color: '#3776AB' },
  { name: 'PostgreSQL', icon: Database, color: '#4169E1' },
  { name: 'AWS', icon: Cloud, color: '#FF9900' },
  { name: 'Docker', icon: Container, color: '#2496ED' },
  { name: 'Kubernetes', icon: Boxes, color: '#326CE5' },
  { name: 'OpenAI', icon: Brain, color: '#10A37F' },
  { name: 'LangChain', icon: Bot, color: '#1C3C3C' },
  { name: 'GraphQL', icon: Workflow, color: '#E10098' },
  { name: 'Redis', icon: Zap, color: '#DC382D' },
  { name: 'TensorFlow', icon: Brain, color: '#FF6F00' },
  { name: 'Electron', icon: Smartphone, color: '#47848F' },
  { name: 'Blockchain', icon: Blocks, color: '#F7931A' },
  { name: 'IoT', icon: Wifi, color: '#2563EB' },
  { name: 'Microservices', icon: Server, color: '#6366F1' },
];

export default function TechStack() {
  const items = [...TECHS, ...TECHS];
  return (
    <section className="relative py-10 md:py-14 bg-white overflow-hidden border-y border-[#E2E8F0]">
      <div className="container-premium relative">
        <Reveal>
          <p className="text-center text-[11px] md:text-xs font-semibold uppercase tracking-[0.3em] text-[#64748B] mb-6 md:mb-8">
            Built with a world-class modern tech stack
          </p>
        </Reveal>
      </div>

      {/* Marquee row 1 — moves left */}
      <div className="marquee-mask">
        <div className="flex w-max animate-marquee gap-3 md:gap-4 px-4">
          {items.map((t, i) => {
            const Icon = t.icon;
            return (
              <div
                key={`r1-${i}`}
                className="group flex items-center gap-2.5 px-4 md:px-5 py-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:bg-white hover:shadow-premium transition-all duration-400 flex-shrink-0"
              >
                <div
                  className="w-9 h-9 rounded-xl inline-flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: `${t.color}15` }}
                >
                  <Icon className="w-4.5 h-4.5" style={{ color: t.color, width: '1.125rem', height: '1.125rem' }} />
                </div>
                <span className="text-sm md:text-base font-bold text-[#0F172A] whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                  {t.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Marquee row 2 — moves right (reverse) */}
      <div className="marquee-mask mt-3 md:mt-4">
        <div className="flex w-max animate-marquee-reverse gap-3 md:gap-4 px-4">
          {[...items].reverse().map((t, i) => {
            const Icon = t.icon;
            return (
              <div
                key={`r2-${i}`}
                className="group flex items-center gap-2.5 px-4 md:px-5 py-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#10B981]/40 hover:bg-white hover:shadow-premium transition-all duration-400 flex-shrink-0"
              >
                <div
                  className="w-9 h-9 rounded-xl inline-flex items-center justify-center transition-transform group-hover:scale-110 group-hover:-rotate-6"
                  style={{ background: `${t.color}15` }}
                >
                  <Icon className="w-4.5 h-4.5" style={{ color: t.color, width: '1.125rem', height: '1.125rem' }} />
                </div>
                <span className="text-sm md:text-base font-bold text-[#0F172A] whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                  {t.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
