'use client';

import { motion } from 'framer-motion';
import PageHeader from '../PageHeader';
import CTA from '../CTA';
import { Reveal, StaggerGroup, StaggerItem } from '../Reveal';
import { Linkedin, Twitter, Sparkles, Briefcase, GraduationCap, Award } from 'lucide-react';

const TEAM = [
  { name: 'Imran Minhas', role: 'Founder & Chairman', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', accent: '#2563EB', experience: '30+ years', skills: ['Strategy', 'Real Estate', 'M&A', 'Leadership'] },
  { name: 'Ayesha Minhas', role: 'Chief Executive Officer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', accent: '#10B981', experience: '18 years', skills: ['Operations', 'Growth', 'Strategy', 'Finance'] },
  { name: 'Bilal Ahmed', role: 'Chief Technology Officer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', accent: '#F59E0B', experience: '15 years', skills: ['Cloud', 'Architecture', 'AI/ML', 'DevOps'] },
  { name: 'Sana Khan', role: 'Chief Operating Officer', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', accent: '#2563EB', experience: '16 years', skills: ['Logistics', 'Supply Chain', 'Process', 'P&L'] },
  { name: 'Omar Farooq', role: 'VP, Real Estate', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', accent: '#10B981', experience: '20 years', skills: ['Development', 'Construction', 'Sales', 'Finance'] },
  { name: 'Fatima Ali', role: 'VP, Technology', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', accent: '#F59E0B', experience: '12 years', skills: ['Product', 'Engineering', 'UX', 'Agile'] },
  { name: 'Hassan Raza', role: 'VP, Energy', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', accent: '#2563EB', experience: '17 years', skills: ['Renewables', 'Project Finance', 'PPA', 'Grid'] },
  { name: 'Zara Sheikh', role: 'VP, Investments', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', accent: '#10B981', experience: '14 years', skills: ['VC', 'Due Diligence', 'Portfolio', 'Deal Flow'] },
];

const VALUES = [
  { label: 'Integrity', desc: 'We do what we say.' },
  { label: 'Excellence', desc: 'We sweat the details.' },
  { label: 'Stewardship', desc: 'We build for the long term.' },
  { label: 'Innovation', desc: 'We challenge the status quo.' },
];

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Team"
        eyebrowColor="emerald"
        title={<>The people behind <span className="text-gradient-royal">the enterprise.</span></>}
        subtitle="Our leadership brings together decades of cross-industry experience — united by a shared commitment to building with intention and leading with integrity."
      />

      {/* Team grid */}
      <section className="relative py-8 md:py-12 bg-white overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[36rem] h-[36rem] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }} />
        <div className="container-premium">
          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.07}>
            {TEAM.map((m) => (
              <StaggerItem key={m.name}>
                <div className="group relative rounded-3xl overflow-hidden bg-[#F8FAFC] border border-[#E2E8F0] hover:border-transparent hover:shadow-premium-lg transition-all">
                  <div className="relative img-zoom aspect-[4/5] overflow-hidden">
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity mix-blend-overlay"
                      style={{ background: `linear-gradient(135deg, ${m.accent}, transparent)` }} />
                    {/* Social */}
                    <div className="absolute bottom-3 right-3 flex gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                      <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-xl glass-dark inline-flex items-center justify-center text-white hover:bg-[#2563EB]"><Linkedin className="w-4 h-4" /></a>
                      <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-xl glass-dark inline-flex items-center justify-center text-white hover:bg-[#2563EB]"><Twitter className="w-4 h-4" /></a>
                    </div>
                    {/* Name + role */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <div className="text-base font-bold" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{m.name}</div>
                      <div className="text-[11px] font-medium uppercase tracking-wider" style={{ color: m.accent === '#F59E0B' ? '#FBBF24' : m.accent === '#10B981' ? '#34D399' : '#60A5FA' }}>{m.role}</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2 text-xs text-[#64748B]">
                      <Briefcase className="w-3 h-3" /> {m.experience}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {m.skills.map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded-md bg-white border border-[#E2E8F0] text-[10px] text-[#475569]">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-8 md:py-12 bg-[#F8FAFC] overflow-hidden">
        <div className="container-premium">
          <Reveal>
            <div className="p-8 md:p-10 rounded-3xl bg-white border border-[#E2E8F0]">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#475569]">What we stand for</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {VALUES.map((v, i) => (
                  <motion.div key={v.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.05 * i }}
                    className="border-l-2 border-[#2563EB]/30 pl-4">
                    <div className="text-base md:text-lg font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{v.label}</div>
                    <div className="text-xs text-[#64748B] mt-1">{v.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Careers teaser */}
      <section className="relative py-8 md:py-12 bg-white overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-4 md:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/8 text-[#10B981] text-[11px] font-semibold tracking-wider uppercase mb-5">
              <GraduationCap className="w-3 h-3" /> Careers
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold text-[#0F172A]">Join our <span className="text-gradient-royal">growing team.</span></h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-fluid-base text-[#475569] leading-relaxed">We're always looking for exceptional people — engineers, strategists, builders, and dreamers who want to do the best work of their careers alongside a team that holds itself to the highest standard.</p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-[#475569]"><Award className="w-4 h-4 text-[#F59E0B]" /> Competitive compensation</div>
              <div className="flex items-center gap-2 text-sm text-[#475569]"><Sparkles className="w-4 h-4 text-[#2563EB]" /> Learning budget</div>
              <div className="flex items-center gap-2 text-sm text-[#475569]"><Briefcase className="w-4 h-4 text-[#10B981]" /> Remote-friendly</div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA title={<>Ready to build something <span className="text-gradient-gold">extraordinary?</span></>} />
    </>
  );
}
