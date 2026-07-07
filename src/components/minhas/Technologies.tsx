'use client';

import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import SectionHeading from './SectionHeading';
import {
  Code2, Cloud, Database, Cpu, Layers, GitBranch, Container,
  Boxes, Zap, Shield, Gauge, Workflow,
} from 'lucide-react';

const TECHS = [
  { name: 'React', icon: Code2, color: '#61DAFB' },
  { name: 'Next.js', icon: Layers, color: '#FFFFFF' },
  { name: 'TypeScript', icon: Code2, color: '#3178C6' },
  { name: 'Node.js', icon: Boxes, color: '#339933' },
  { name: 'Python', icon: Code2, color: '#3776AB' },
  { name: 'PostgreSQL', icon: Database, color: '#4169E1' },
  { name: 'AWS', icon: Cloud, color: '#FF9900' },
  { name: 'Docker', icon: Container, color: '#2496ED' },
  { name: 'Kubernetes', icon: Boxes, color: '#326CE5' },
  { name: 'Git', icon: GitBranch, color: '#F05032' },
  { name: 'GraphQL', icon: Workflow, color: '#E10098' },
  { name: 'Redis', icon: Zap, color: '#DC382D' },
];

export default function Technologies() {
  const items = [...TECHS, ...TECHS];
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-[32rem] h-[32rem] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Technologies We Use"
          eyebrowColor="emerald"
          title={<>Modern stacks, <span className="text-gradient-royal">battle-tested at scale.</span></>}
          description="We invest in the best tools for each job — and our engineers are fluent in the technologies powering today's leading enterprises."
        />
      </div>

      {/* Marquee row 1 */}
      <div className="mt-12 md:mt-16 marquee-mask">
        <div className="flex w-max animate-marquee gap-3 md:gap-4 px-4">
          {items.map((t, i) => {
            const Icon = t.icon;
            return (
              <div
                key={`r1-${i}`}
                className="group flex items-center gap-3 px-5 md:px-7 py-4 md:py-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:bg-white hover:shadow-premium transition-all duration-400 flex-shrink-0"
              >
                <div className="w-10 h-10 rounded-xl inline-flex items-center justify-center"
                  style={{ background: `${t.color}15` }}>
                  <Icon className="w-5 h-5" style={{ color: t.color }} />
                </div>
                <span className="text-base md:text-lg font-bold text-[#0F172A] whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                  {t.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Marquee row 2 — reverse direction */}
      <div className="mt-3 md:mt-4 marquee-mask">
        <div className="flex w-max animate-marquee-reverse gap-3 md:gap-4 px-4">
          {[...items].reverse().map((t, i) => {
            const Icon = t.icon;
            return (
              <div
                key={`r2-${i}`}
                className="group flex items-center gap-3 px-5 md:px-7 py-4 md:py-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#10B981]/40 hover:bg-white hover:shadow-premium transition-all duration-400 flex-shrink-0"
              >
                <div className="w-10 h-10 rounded-xl inline-flex items-center justify-center"
                  style={{ background: `${t.color}15` }}>
                  <Icon className="w-5 h-5" style={{ color: t.color }} />
                </div>
                <span className="text-base md:text-lg font-bold text-[#0F172A] whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                  {t.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom stat strip */}
      <Reveal delay={0.2}>
        <div className="mx-auto max-w-7xl px-4 md:px-8 mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Shield, label: 'SOC 2 Certified', value: '100%' },
            { icon: Gauge, label: 'Avg. Lighthouse Score', value: '94' },
            { icon: Cpu, label: 'Services Deployed', value: '500+' },
            { icon: Zap, label: 'API Calls Daily', value: '12M' },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="p-5 rounded-2xl bg-gradient-to-br from-[#F8FAFC] to-white border border-[#E2E8F0] text-center"
              >
                <Icon className="w-5 h-5 mx-auto text-[#2563EB] mb-2" />
                <div className="text-2xl font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                  {s.value}
                </div>
                <div className="text-[11px] text-[#64748B] uppercase tracking-wider mt-1">{s.label}</div>
              </motion.div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
