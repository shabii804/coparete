'use client';

import { motion } from 'framer-motion';
import { Reveal, StaggerGroup, StaggerItem } from './Reveal';
import { Linkedin, Twitter, ArrowUpRight, Sparkles } from 'lucide-react';

const TEAM = [
  {
    name: 'Imran Minhas',
    role: 'Founder & Chairman',
    bio: 'Three decades building diversified enterprises across South Asia and the Gulf.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    accent: '#2563EB',
  },
  {
    name: 'Ayesha Minhas',
    role: 'Chief Executive Officer',
    bio: 'Leads strategy and operations across all six divisions with a focus on sustainable growth.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    accent: '#10B981',
  },
  {
    name: 'Bilal Ahmed',
    role: 'Chief Technology Officer',
    bio: 'Drives digital transformation, cloud infrastructure, and our technology division.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    accent: '#F59E0B',
  },
  {
    name: 'Sana Khan',
    role: 'Chief Operating Officer',
    bio: 'Oversees logistics, trading, and the operational backbone of the group.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    accent: '#2563EB',
  },
];

const VALUES = [
  { label: 'Integrity', desc: 'We do what we say.' },
  { label: 'Excellence', desc: 'We sweat the details.' },
  { label: 'Stewardship', desc: 'We build for the long term.' },
  { label: 'Innovation', desc: 'We challenge the status quo.' },
];

export default function Team() {
  return (
    <section id="team" className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-[36rem] h-[36rem] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-0 w-[32rem] h-[32rem] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }} />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-[#10B981]/8 text-[#10B981] text-[11px] font-semibold tracking-wider uppercase">
                <span className="w-1 h-1 rounded-full bg-[#10B981]" />
                Leadership
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 md:mt-5 text-fluid-3xl md:text-fluid-4xl font-semibold leading-[1.08] text-[#0F172A]">
                The people behind{' '}
                <span className="text-gradient-royal">the enterprise.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 md:mt-5 text-fluid-base md:text-fluid-lg text-[#475569] leading-relaxed">
                Our leadership brings together decades of cross-industry experience — united by a
                shared commitment to building with intention and leading with integrity.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-5 md:px-6 py-3 md:py-3.5 rounded-xl text-sm font-semibold text-[#0F172A] bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:bg-white hover:shadow-premium transition-all duration-400 whitespace-nowrap"
            >
              Join our team
              <ArrowUpRight className="w-4 h-4 text-[#2563EB] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        {/* Team grid */}
        <StaggerGroup className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6" stagger={0.1}>
          {TEAM.map((m) => (
            <StaggerItem key={m.name}>
              <div className="group relative rounded-3xl overflow-hidden bg-[#F8FAFC] border border-[#E2E8F0] hover:border-transparent hover:shadow-premium-lg transition-all duration-500">
                {/* Image */}
                <div className="relative img-zoom aspect-[4/5] overflow-hidden">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/20 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-500" />
                  {/* Color accent overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-overlay"
                    style={{ background: `linear-gradient(135deg, ${m.accent}, transparent)` }}
                  />

                  {/* Social icons — appear on hover */}
                  <div className="absolute bottom-3 right-3 flex gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <a
                      href="#"
                      aria-label={`${m.name} on LinkedIn`}
                      className="w-9 h-9 rounded-xl glass-dark inline-flex items-center justify-center text-white hover:bg-[#2563EB] transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      aria-label={`${m.name} on Twitter`}
                      className="w-9 h-9 rounded-xl glass-dark inline-flex items-center justify-center text-white hover:bg-[#2563EB] transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Name + role on image (mobile-friendly: always visible) */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white">
                    <div className="text-base md:text-lg font-semibold" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                      {m.name}
                    </div>
                    <div
                      className="text-[11px] md:text-xs font-medium uppercase tracking-wider mt-0.5"
                      style={{ color: m.accent === '#F59E0B' ? '#FBBF24' : m.accent === '#10B981' ? '#34D399' : '#60A5FA' }}
                    >
                      {m.role}
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="p-4 md:p-5">
                  <p className="text-xs md:text-sm text-[#475569] leading-relaxed">{m.bio}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Values strip */}
        <Reveal delay={0.1}>
          <div className="mt-16 md:mt-20 p-6 md:p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <div className="flex items-center gap-2 mb-5 md:mb-6">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#475569]">
                What we stand for
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
              {VALUES.map((v, i) => (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                  className="border-l-2 border-[#2563EB]/30 pl-4"
                >
                  <div className="text-base md:text-lg font-semibold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                    {v.label}
                  </div>
                  <div className="text-xs text-[#64748B] mt-1">{v.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
