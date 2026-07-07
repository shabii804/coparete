'use client';

import { motion } from 'framer-motion';
import { Reveal, StaggerGroup, StaggerItem } from './Reveal';
import SectionHeading from './SectionHeading';
import { ShieldCheck, Clock, Users, Headphones, Award, TrendingUp } from 'lucide-react';

const REASONS = [
  { icon: ShieldCheck, title: 'Trusted & Reliable', desc: 'Two decades of consistent delivery, ethical governance, and long-term partnerships across industries.', color: '#2563EB' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'Disciplined project management ensures we ship when promised — 96% of projects delivered ahead of schedule.', color: '#10B981' },
  { icon: Users, title: 'Expert Team', desc: '1,200+ specialists spanning engineering, design, strategy, and operations under one roof.', color: '#F59E0B' },
  { icon: Headphones, title: '24/7 Support', desc: 'Round-the-clock dedicated support with average response time under 15 minutes for critical issues.', color: '#2563EB' },
  { icon: Award, title: 'Award-Winning', desc: '42 industry awards recognizing our work across real estate, technology, and energy divisions.', color: '#10B981' },
  { icon: TrendingUp, title: 'Proven ROI', desc: 'Average client ROI of 280% within the first year of partnering with Minhas Enterprises.', color: '#F59E0B' },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[36rem] h-[36rem] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-0 w-[32rem] h-[32rem] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F59E0B, transparent 70%)' }} />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={<>Six reasons clients <span className="text-gradient-royal">choose Minhas.</span></>}
          description="We don't just deliver projects — we build partnerships rooted in accountability, craft, and measurable outcomes."
        />

        <StaggerGroup className="mt-12 md:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" stagger={0.09}>
          {REASONS.map((r) => {
            const Icon = r.icon;
            return (
              <StaggerItem key={r.title}>
                <div className="group relative h-full p-6 md:p-7 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-white hover:border-[#2563EB]/30 hover-lift hover:shadow-premium transition-all duration-500">
                  {/* Number watermark */}
                  <span className="absolute top-4 right-5 text-5xl md:text-6xl font-extrabold text-[#0F172A]/5 group-hover:text-[#2563EB]/10 transition-colors"
                    style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                    0{REASONS.indexOf(r) + 1}
                  </span>

                  <div
                    className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl inline-flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg, ${r.color}15, ${r.color}25)` }}
                  >
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(135deg, ${r.color}, ${r.color}cc)`, boxShadow: `0 8px 24px ${r.color}40` }}
                    />
                    <Icon className="relative w-6 h-6 md:w-7 md:h-7 transition-colors duration-500 group-hover:text-white"
                      style={{ color: r.color }} />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-[#0F172A] mb-2.5"
                    style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                    {r.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{r.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
