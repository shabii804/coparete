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
    <section className="relative py-14 md:py-20 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-[32rem] h-[32rem] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />

      <div className="container-premium relative">
        <SectionHeading
          eyebrow="Technologies We Use"
          eyebrowColor="emerald"
          title={<>Modern stacks, <span className="text-gradient-royal">battle-tested at scale.</span></>}
          description="We invest in the best tools for each job — and our engineers are fluent in the technologies powering today's leading enterprises."
        />
      </div>

      {/* Marquee row 1 */}
      <div className="mt-8 md:mt-10 marquee-mask">
        <div className="flex w-max animate-marquee gap-2.5 md:gap-3 px-4">
          {items.map((t, i) => {
            const Icon = t.icon;
            return (
              <div
                key={`r1-${i}`}
                className="group flex items-center gap-2.5 px-4 md:px-5 py-2.5 md:py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:bg-white hover:shadow-premium transition-all duration-400 flex-shrink-0"
              >
                <div className="w-8 h-8 rounded-lg inline-flex items-center justify-center"
                  style={{ background: `${t.color}15` }}>
                  <Icon className="w-4 h-4" style={{ color: t.color }} />
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

      {/* Marquee row 2 — reverse direction */}
      <div className="mt-2.5 md:mt-3 marquee-mask">
        <div className="flex w-max animate-marquee-reverse gap-2.5 md:gap-3 px-4">
          {[...items].reverse().map((t, i) => {
            const Icon = t.icon;
            return (
              <div
                key={`r2-${i}`}
                className="group flex items-center gap-2.5 px-4 md:px-5 py-2.5 md:py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#10B981]/40 hover:bg-white hover:shadow-premium transition-all duration-400 flex-shrink-0"
              >
                <div className="w-8 h-8 rounded-lg inline-flex items-center justify-center"
                  style={{ background: `${t.color}15` }}>
                  <Icon className="w-4 h-4" style={{ color: t.color }} />
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

      {/* Bottom stat strip */}
      <Reveal delay={0.2}>
        <div className="container-premium mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-3">
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
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="p-4 rounded-xl bg-gradient-to-br from-[#F8FAFC] to-white border border-[#E2E8F0] text-center"
              >
                <Icon className="w-4 h-4 mx-auto text-[#2563EB] mb-1.5" />
                <div className="text-lg font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                  {s.value}
                </div>
                <div className="text-[10px] text-[#64748B] uppercase tracking-wider mt-0.5">{s.label}</div>
              </motion.div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
