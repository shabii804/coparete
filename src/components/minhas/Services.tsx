'use client';

import { motion } from 'framer-motion';
import { Reveal, StaggerGroup, StaggerItem } from './Reveal';
import { Building2, ShoppingBag, Cpu, Zap, Truck, ShieldCheck, ArrowUpRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Building2,
    title: 'Real Estate',
    desc: 'Premium residential, commercial, and mixed-use developments that redefine skylines and enrich communities.',
    color: '#2563EB',
    items: ['Residential Towers', 'Commercial Spaces', 'Mixed-Use Developments'],
  },
  {
    icon: ShoppingBag,
    title: 'Trading & Distribution',
    desc: 'A global supply network delivering quality products across consumer, industrial, and specialty categories.',
    color: '#10B981',
    items: ['Consumer Goods', 'Industrial Supply', 'Specialty Imports'],
  },
  {
    icon: Cpu,
    title: 'Technology',
    desc: 'Software, cloud, and digital transformation solutions that help enterprises operate smarter and faster.',
    color: '#D4AF37',
    items: ['Software Solutions', 'Cloud Infrastructure', 'Digital Transformation'],
  },
  {
    icon: Zap,
    title: 'Energy',
    desc: 'Sustainable energy investments spanning solar, wind, and next-generation clean power infrastructure.',
    color: '#2563EB',
    items: ['Solar Farms', 'Wind Projects', 'Clean Infrastructure'],
  },
  {
    icon: Truck,
    title: 'Logistics',
    desc: 'End-to-end logistics and warehousing infrastructure connecting markets with reliability and speed.',
    color: '#10B981',
    items: ['Warehousing', 'Freight Network', 'Cold Chain'],
  },
  {
    icon: ShieldCheck,
    title: 'Investments',
    desc: 'Strategic capital deployment across high-growth ventures, with disciplined governance and long-term focus.',
    color: '#D4AF37',
    items: ['Venture Capital', 'Private Equity', 'Strategic Holdings'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-12 md:py-16 bg-[#F8FAFC] overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 bg-dot opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-80 h-80 md:w-96 md:h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-[#2563EB] text-[11px] font-semibold tracking-wider uppercase shadow-soft">
              <span className="w-1 h-1 rounded-full bg-[#2563EB]" />
              What We Do
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 md:mt-5 text-fluid-3xl md:text-fluid-4xl font-semibold leading-[1.08] text-[#0F172A]">
              Six divisions.{' '}
              <span className="text-gradient-royal">One standard of excellence.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 md:mt-5 text-fluid-base md:text-fluid-lg text-[#475569] leading-relaxed">
              Our diversified portfolio lets us serve clients across multiple industries while
              maintaining the depth, focus, and operational rigor each sector demands.
            </p>
          </Reveal>
        </div>

        {/* Service grid */}
        <StaggerGroup className="mt-6 md:mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" stagger={0.09}>
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={s.title}>
                <div className="group relative h-full p-6 md:p-7 rounded-3xl bg-white border border-[#E2E8F0] hover-lift hover:shadow-premium-lg overflow-hidden">
                  {/* Gradient accent on hover */}
                  <div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle, ${s.color}40, transparent 70%)` }}
                  />

                  {/* Modern icon with gradient morph */}
                  <div
                    className="relative w-14 h-14 rounded-2xl inline-flex items-center justify-center mb-5 md:mb-6 transition-all duration-500"
                    style={{ background: `linear-gradient(135deg, ${s.color}15, ${s.color}25)` }}
                  >
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}cc)`, boxShadow: `0 8px 24px ${s.color}40` }}
                    />
                    <Icon className="relative w-7 h-7 transition-colors duration-500 group-hover:text-white"
                      style={{ color: s.color }} />
                  </div>

                  <h3 className="text-xl font-semibold text-[#0F172A] mb-2.5 md:mb-3" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed mb-5">{s.desc}</p>

                  <ul className="space-y-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-xs text-[#475569]">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.color }} />
                        {it}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="mt-5 md:mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F172A] group-hover:text-[#2563EB] transition-colors"
                  >
                    Learn more
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
