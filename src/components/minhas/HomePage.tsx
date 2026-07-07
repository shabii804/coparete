'use client';

import { motion } from 'framer-motion';
import Hero from './Hero';
import TechStack from './TechStack';
import Industries from './Industries';
import DevModels from './DevModels';
import MissionVision from './MissionVision';
import ContactSection from './ContactSection';
import { Reveal, StaggerGroup, StaggerItem } from './Reveal';
import SectionHeading from './SectionHeading';
import { useNav } from './NavigationContext';
import {
  ArrowUpRight, Cpu, Brain, ShoppingCart, GraduationCap, Monitor, Database,
  Target, Eye, Heart, Zap, Shield, Users, Code2, Star, Quote,
} from 'lucide-react';

// Tech company services — with premium gradient icons
const SERVICES_PREVIEW = [
  {
    icon: Cpu, title: 'ERP Systems', desc: 'Unified enterprise platforms for finance, HR, inventory, and operations.',
    gradient: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #60A5FA 100%)', glow: 'rgba(37, 99, 235, 0.35)',
  },
  {
    icon: Brain, title: 'AI & Machine Learning', desc: 'LLM integrations, computer vision, and predictive analytics.',
    gradient: 'linear-gradient(135deg, #059669 0%, #10B981 50%, #34D399 100%)', glow: 'rgba(16, 185, 129, 0.35)',
  },
  {
    icon: ShoppingCart, title: 'POS Systems', desc: 'Cloud POS for retail, restaurants, and omnichannel commerce.',
    gradient: 'linear-gradient(135deg, #D97706 0%, #F59E0B 50%, #FBBF24 100%)', glow: 'rgba(245, 158, 11, 0.35)',
  },
  {
    icon: GraduationCap, title: 'School Management', desc: 'LMS, admissions, attendance, and parent portals.',
    gradient: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 50%, #818CF8 100%)', glow: 'rgba(99, 102, 241, 0.35)',
  },
  {
    icon: Monitor, title: 'Desktop Applications', desc: 'Cross-platform desktop apps built with Electron & Tauri.',
    gradient: 'linear-gradient(135deg, #0F766E 0%, #14B8A6 50%, #5EEAD4 100%)', glow: 'rgba(20, 184, 166, 0.35)',
  },
  {
    icon: Database, title: 'Custom Software', desc: 'Tailored web, mobile, and backend solutions at scale.',
    gradient: 'linear-gradient(135deg, #BE185D 0%, #EC4899 50%, #F472B6 100%)', glow: 'rgba(236, 72, 153, 0.35)',
  },
];

const PILLARS = [
  {
    icon: Target, title: 'Our Mission', text: 'Building software that empowers businesses to operate smarter.',
    gradient: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #60A5FA 100%)', glow: 'rgba(37, 99, 235, 0.35)',
  },
  {
    icon: Eye, title: 'Our Vision', text: 'To be the most trusted technology partner in the region.',
    gradient: 'linear-gradient(135deg, #059669 0%, #10B981 50%, #34D399 100%)', glow: 'rgba(16, 185, 129, 0.35)',
  },
  {
    icon: Heart, title: 'Our Values', text: 'Innovation, integrity, and excellence in every line of code.',
    gradient: 'linear-gradient(135deg, #D97706 0%, #F59E0B 50%, #FBBF24 100%)', glow: 'rgba(245, 158, 11, 0.35)',
  },
];

const PROJECTS_PREVIEW = [
  {
    title: 'MinhasERP', category: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    desc: 'Unified ERP for finance, HR, and operations.',
    gradient: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #60A5FA 100%)', glow: 'rgba(37, 99, 235, 0.4)', color: '#2563EB',
    stat: '500+ companies',
  },
  {
    title: 'EduFlow LMS', category: 'Education',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    desc: 'Learning management for 12K+ students.',
    gradient: 'linear-gradient(135deg, #059669 0%, #10B981 50%, #34D399 100%)', glow: 'rgba(16, 185, 129, 0.4)', color: '#10B981',
    stat: '12K+ students',
  },
  {
    title: 'RetailOne POS', category: 'Retail',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    desc: 'Omnichannel POS across 50 stores.',
    gradient: 'linear-gradient(135deg, #D97706 0%, #F59E0B 50%, #FBBF24 100%)', glow: 'rgba(245, 158, 11, 0.4)', color: '#F59E0B',
    stat: '50+ stores',
  },
];

const TEAM_PREVIEW = [
  { name: 'Imran Minhas', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Ayesha Minhas', role: 'CTO', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Bilal Ahmed', role: 'VP of Engineering', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Sana Khan', role: 'Head of Product', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
];

const CAPABILITIES = [
  { icon: Code2, label: 'Web Apps', gradient: 'linear-gradient(135deg, #2563EB, #3B82F6)' },
  { icon: Monitor, label: 'Desktop Apps', gradient: 'linear-gradient(135deg, #0F766E, #14B8A6)' },
  { icon: Brain, label: 'AI/ML', gradient: 'linear-gradient(135deg, #059669, #10B981)' },
  { icon: ShoppingCart, label: 'POS', gradient: 'linear-gradient(135deg, #D97706, #F59E0B)' },
  { icon: Database, label: 'ERP', gradient: 'linear-gradient(135deg, #4F46E5, #6366F1)' },
  { icon: Zap, label: 'Automation', gradient: 'linear-gradient(135deg, #BE185D, #EC4899)' },
];

export default function HomePage({ visible }: { visible: boolean }) {
  const { navigate } = useNav();

  return (
    <>
      {/* 1. Hero (short) */}
      <Hero visible={visible} />

      {/* 2. About Us */}
      <section id="about" className="relative py-10 md:py-14 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[32rem] h-[32rem] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
        <div className="container-premium relative">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <Reveal y={30} blur>
              <div className="relative">
                <div className="img-zoom relative rounded-2xl overflow-hidden shadow-premium-lg aspect-[4/3]">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Minhas Enterprises team" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent" />
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-4 -left-3 md:-left-6 p-3 rounded-2xl glass-strong border border-white/70 shadow-premium-lg"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#10B981] inline-flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-sm font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>6+</div>
                  </div>
                  <div className="text-[10px] text-[#475569]">Core capabilities</div>
                </motion.div>
              </div>
            </Reveal>
            <div className="text-center lg:text-left">
              <SectionHeading
                align="left"
                eyebrow="About Minhas"
                title={<>A technology company building <span className="text-gradient-royal">software that matters.</span></>}
              />
              <Reveal delay={0.15}>
                <p className="mt-3 text-fluid-sm text-[#475569] leading-relaxed">
                  Minhas Enterprises is a full-stack technology company specializing in ERP systems,
                  AI solutions, POS platforms, school management software, and desktop applications.
                  For over two decades, we've helped businesses digitize, automate, and scale.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-4 flex flex-wrap gap-2 justify-center lg:justify-start">
                  {CAPABILITIES.map((c) => {
                    const Icon = c.icon;
                    return (
                      <span key={c.label} className="group inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#0F172A] hover:bg-white hover:shadow-soft transition-all">
                        <span
                          className="w-5 h-5 rounded-md inline-flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                          style={{ background: c.gradient }}
                        >
                          <Icon className="w-3 h-3 text-white" strokeWidth={2.5} />
                        </span>
                        {c.label}
                      </span>
                    );
                  })}
                </div>
              </Reveal>
              <StaggerGroup className="mt-5 grid sm:grid-cols-3 gap-3" stagger={0.08}>
                {PILLARS.map((p) => {
                  const Icon = p.icon;
                  return (
                    <StaggerItem key={p.title}>
                      <div className="group p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-white hover:shadow-premium transition-all text-center sm:text-left">
                        <div
                          className="relative w-10 h-10 rounded-xl inline-flex items-center justify-center mb-2.5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                          style={{ background: p.gradient, boxShadow: `0 6px 16px ${p.glow}` }}
                        >
                          <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                          <div className="absolute inset-0 rounded-xl overflow-hidden">
                            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-30 group-hover:opacity-50 transition-opacity"
                              style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)' }} />
                          </div>
                        </div>
                        <div className="text-xs font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{p.title}</div>
                        <p className="text-[11px] text-[#475569] mt-1 leading-relaxed">{p.text}</p>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerGroup>
              <Reveal delay={0.3}>
                <div className="mt-5 flex justify-center lg:justify-start">
                  <button onClick={() => navigate('about')} className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#2563EB] bg-[#2563EB]/8 hover:bg-[#2563EB] hover:text-white transition-all">
                    Learn More
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5. Mission / Vision / Values */}
      <MissionVision />

      {/* 3. Services */}
      <section id="services" className="relative py-10 md:py-14 bg-[#F8FAFC] overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 left-0 w-[32rem] h-[32rem] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-0 w-[32rem] h-[32rem] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }} />
        <div className="container-premium relative">
          <SectionHeading
            eyebrow="What We Build"
            title={<>Software solutions for <span className="text-gradient-royal">every business need.</span></>}
            description="From ERP to AI, POS to school management — we engineer products that scale."
          />
          <StaggerGroup className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.08}>
            {SERVICES_PREVIEW.map((s) => {
              const Icon = s.icon;
              return (
                <StaggerItem key={s.title}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                    className="group h-full p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-transparent hover:shadow-[0_20px_50px_rgba(0,0,0,0.10)] transition-all overflow-hidden relative text-center"
                  >
                    {/* Top gradient accent line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                      style={{ background: s.gradient }}
                    />
                    {/* Centered glow on hover */}
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(circle, ${s.glow}, transparent 70%)` }}
                    />
                    <div className="relative flex flex-col items-center">
                      {/* Premium gradient icon — centered */}
                      <motion.div
                        whileHover={{ scale: 1.12, rotate: 4 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                        className="relative w-16 h-16 rounded-2xl inline-flex items-center justify-center mb-4"
                        style={{ background: s.gradient, boxShadow: `0 12px 32px ${s.glow}, 0 4px 12px ${s.glow}` }}
                      >
                        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                        {/* Shine sweep */}
                        <div className="absolute inset-0 rounded-2xl overflow-hidden">
                          <div
                            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                            style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)' }}
                          />
                        </div>
                        {/* Pulse ring on hover */}
                        <div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                          style={{ border: `2px solid ${s.glow.replace('0.35', '0.6')}`, animation: 'pulse-ring 2s ease-out infinite' }}
                        />
                      </motion.div>
                      <h3 className="text-base font-bold text-[#0F172A] mb-1.5" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{s.title}</h3>
                      <p className="text-xs text-[#475569] leading-relaxed">{s.desc}</p>
                      {/* Learn more arrow — appears on hover */}
                      <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0" style={{ color: s.glow.replace('rgba(', '').replace(')', '').split(',')[0].trim() === '37' ? '#2563EB' : s.glow.replace('rgba(', '').replace(')', '').split(',')[0].trim() === '16' ? '#10B981' : s.glow.includes('99, 102, 241') ? '#6366F1' : s.glow.includes('20, 184, 166') ? '#14B8A6' : s.glow.includes('236, 72, 153') ? '#EC4899' : '#F59E0B' }}>
                        Learn More
                        <ArrowUpRight className="w-3 h-3" />
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
          <Reveal delay={0.2}>
            <div className="mt-6 text-center">
              <button onClick={() => navigate('services')} className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] shadow-[0_8px_24px_rgba(37,99,235,0.25)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 transition-all">
                View All Services
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Tech Stack (moving marquee) */}
      <TechStack />

      {/* 5 & 6. Industries (grid + colorful moving marquee) */}
      <Industries />

      {/* 7. Software Development Models */}
      <DevModels />

      {/* 8. Portfolio */}
      <section id="projects" className="relative py-10 md:py-14 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[32rem] h-[32rem] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #F59E0B, transparent 70%)' }} />
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
        <div className="container-premium relative">
          <SectionHeading
            eyebrow="Featured Products"
            eyebrowColor="gold"
            title={<>Products that <span className="text-gradient-royal">power businesses.</span></>}
          />
          <StaggerGroup className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" stagger={0.1}>
            {PROJECTS_PREVIEW.map((p) => (
              <StaggerItem key={p.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className="group relative overflow-hidden rounded-2xl shadow-premium hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] aspect-[4/3] cursor-pointer"
                >
                  {/* Image with zoom */}
                  <div className="img-zoom absolute inset-0">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/95 via-[#0F172A]/30 to-transparent" />
                  {/* Color accent overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-overlay"
                    style={{ background: p.gradient }}
                  />
                  {/* Top gradient accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    style={{ background: p.gradient }}
                  />

                  {/* Category badge + stat — top */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full glass-dark text-[10px] font-semibold uppercase tracking-wider text-white">
                      {p.category}
                    </span>
                    <span
                      className="px-2.5 py-1 rounded-full text-[10px] font-bold text-white"
                      style={{ background: p.color }}
                    >
                      {p.stat}
                    </span>
                  </div>

                  {/* Content — bottom */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                    <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{p.title}</h3>
                    <p className="text-xs text-white/80 mb-3">{p.desc}</p>
                    {/* View Case Study button — slides in on hover */}
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                      <span className="px-3 py-1.5 rounded-lg" style={{ background: p.color }}>
                        View Case Study
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal delay={0.2}>
            <div className="mt-6 text-center">
              <button onClick={() => navigate('portfolio')} className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] shadow-[0_8px_24px_rgba(37,99,235,0.25)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 transition-all">
                View All Products
                <ArrowUpRight className="w-3.5 h-3.5 text-[#2563EB] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. Team */}
      <section className="relative py-10 md:py-14 bg-[#F8FAFC] overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-40 pointer-events-none" />
        <div className="container-premium relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <SectionHeading
              align="left"
              eyebrow="Our Team"
              eyebrowColor="emerald"
              title={<>Meet the people behind <span className="text-gradient-royal">the technology.</span></>}
            />
            <Reveal delay={0.15}>
              <button onClick={() => navigate('team')} className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#0F172A] bg-white border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:shadow-premium transition-all whitespace-nowrap">
                View Full Team
                <ArrowUpRight className="w-3.5 h-3.5 text-[#2563EB] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Reveal>
          </div>
          <StaggerGroup className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4" stagger={0.08}>
            {TEAM_PREVIEW.map((m) => (
              <StaggerItem key={m.name}>
                <div className="group relative rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] hover:shadow-premium-lg transition-all">
                  <div className="relative img-zoom aspect-[4/5] overflow-hidden">
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                      <div className="text-sm font-bold" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{m.name}</div>
                      <div className="text-[10px] uppercase tracking-wider text-[#60A5FA]">{m.role}</div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 10. Contact Us */}
      <ContactSection />
    </>
  );
}
