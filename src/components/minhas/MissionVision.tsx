'use client';

import { motion } from 'framer-motion';
import { Reveal, StaggerGroup, StaggerItem } from './Reveal';
import SectionHeading from './SectionHeading';
import { Target, Eye, Heart, Zap, Shield, Sparkles } from 'lucide-react';

const PILLARS = [
  {
    icon: Target,
    title: 'Our Mission',
    color: '#2563EB',
    text: 'To build software that empowers businesses to operate smarter, faster, and at scale. We measure success by the impact our products create for our clients, their teams, and the communities they serve.',
    highlights: ['Empower businesses', 'Create lasting impact', 'Operate smarter'],
  },
  {
    icon: Eye,
    title: 'Our Vision',
    color: '#10B981',
    text: 'To be the most trusted technology partner in the region — recognized globally for innovation, integrity, and the quality of our craft. We envision a future where every business, regardless of size, has access to world-class software.',
    highlights: ['Trusted partner', 'Global recognition', 'Accessible technology'],
  },
  {
    icon: Heart,
    title: 'Our Values',
    color: '#F59E0B',
    text: 'Innovation, integrity, and excellence guide every line of code we write. We sweat the details, honor our commitments, and build relationships as carefully as we build products — for the long term.',
    highlights: ['Innovation', 'Integrity', 'Excellence'],
  },
];

const STATS = [
  { icon: Zap, value: '180+', label: 'Projects Shipped', color: '#2563EB' },
  { icon: Shield, value: '25+', label: 'Years of Trust', color: '#10B981' },
  { icon: Sparkles, value: '42', label: 'Industry Awards', color: '#F59E0B' },
];

export default function MissionVision() {
  return (
    <section className="relative py-10 md:py-14 bg-[#F8FAFC] overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-[36rem] h-[36rem] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/4 w-[32rem] h-[32rem] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }} />
      {/* Dot pattern */}
      <div className="absolute inset-0 bg-dot opacity-40 pointer-events-none" />

      <div className="container-premium relative">
        <SectionHeading
          eyebrow="Who We Are"
          eyebrowColor="blue"
          title={<>Driven by purpose, <span className="text-gradient-royal">guided by values.</span></>}
          description="The principles that shape every decision we make and every product we build."
        />

        {/* Mission / Vision / Values cards */}
        <StaggerGroup className="mt-6 grid md:grid-cols-3 gap-4" stagger={0.1}>
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={p.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group relative h-full p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-transparent hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all overflow-hidden"
                >
                  {/* Top gradient accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }}
                  />
                  {/* Glow on hover */}
                  <div
                    className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle, ${p.color}40, transparent 70%)` }}
                  />

                  <div className="relative">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                      className="relative w-14 h-14 rounded-2xl inline-flex items-center justify-center mb-4"
                      style={{
                        background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)`,
                        boxShadow: `0 8px 24px ${p.color}30`,
                      }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                      {/* Pulse ring */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse-ring"
                        style={{ border: `2px solid ${p.color}` }}
                      />
                    </motion.div>

                    <h3 className="text-lg font-bold text-[#0F172A] mb-2" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                      {p.title}
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed mb-4">{p.text}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1.5">
                      {p.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium border"
                          style={{
                            background: `${p.color}10`,
                            color: p.color,
                            borderColor: `${p.color}25`,
                          }}
                        >
                          <span className="w-1 h-1 rounded-full" style={{ background: p.color }} />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {/* Stats strip */}
        <StaggerGroup className="mt-6 grid grid-cols-3 gap-3" stagger={0.1}>
          {STATS.map((s) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={s.label}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className="group p-4 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-premium transition-all text-center"
                >
                  <div
                    className="w-10 h-10 rounded-xl inline-flex items-center justify-center mb-2.5 mx-auto group-hover:scale-110 transition-transform"
                    style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}cc)`, boxShadow: `0 4px 12px ${s.color}30` }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-extrabold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif', letterSpacing: '-0.02em' }}>
                    {s.value}
                  </div>
                  <div className="text-[11px] text-[#64748B] mt-0.5">{s.label}</div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
