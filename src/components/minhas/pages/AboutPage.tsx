'use client';

import { motion } from 'framer-motion';
import PageHeader from '../PageHeader';
import CTA from '../CTA';
import { Reveal, StaggerGroup, StaggerItem } from '../Reveal';
import SectionHeading from '../SectionHeading';
import Process from '../Process';
import Technologies from '../Technologies';
import { useNav } from '../NavigationContext';
import { Target, Eye, Heart, CheckCircle2, Award, BadgeCheck, ArrowUpRight, Calendar } from 'lucide-react';

const PILLARS = [
  { icon: Target, title: 'Our Mission', text: 'To deliver world-class products and services that empower communities and create lasting value across every industry we touch. We measure our success not only in financial returns but in the positive impact we create for our clients, employees, and the communities we operate in.' },
  { icon: Eye, title: 'Our Vision', text: 'To be the most trusted diversified enterprise in the region, recognized globally for innovation, integrity, and impact. We envision a future where Minhas Enterprises is the first name that comes to mind when organizations seek a partner for transformative, large-scale projects.' },
  { icon: Heart, title: 'Our Values', text: 'Integrity, excellence, and stewardship guide every decision — we build relationships as carefully as we build businesses. Our values are not posters on a wall; they are the operating system that governs how we hire, how we partner, and how we deliver.' },
];

const TIMELINE = [
  { year: '2001', title: 'The Beginning', desc: 'Minhas Enterprises is founded as a single real estate venture in Lahore.' },
  { year: '2005', title: 'Trading Division', desc: 'Expanded into trading and distribution, opening our first warehouse.' },
  { year: '2009', title: 'Technology Arm', desc: 'Launched our technology division to digitalize internal operations.' },
  { year: '2013', title: 'Energy Investment', desc: 'Entered the renewable energy sector with our first solar project.' },
  { year: '2017', title: 'Logistics Network', desc: 'Built a 500,000 sq ft automated logistics hub in Islamabad.' },
  { year: '2020', title: 'Global Expansion', desc: 'Crossed 100+ international projects across 12 countries.' },
  { year: '2023', title: 'Product Launch', desc: 'Released MinhasERP and TradeBridge as commercial software products.' },
  { year: '2026', title: 'Today', desc: '1,200+ professionals, 6 divisions, 180+ projects delivered worldwide.' },
];

const ACHIEVEMENTS = [
  { title: 'Best Corporate Group 2024', org: 'Pakistan Business Awards' },
  { title: 'Excellence in Sustainability', org: 'South Asia ESG Forum' },
  { title: 'Tech Innovation of the Year', org: 'Asia Tech Summit' },
  { title: 'Top Employer Award', org: 'HR Federation Pakistan' },
  { title: 'Best Real Estate Developer', org: 'Property Awards Asia' },
  { title: 'Energy Transition Leader', org: 'Clean Power Coalition' },
];

const CERTIFICATIONS = [
  'SOC 2 Type II',
  'ISO 27001',
  'ISO 9001:2015',
  'ISO 14001',
  'OHSAS 18001',
  'GDPR Compliant',
];

export default function AboutPage() {
  const { navigate } = useNav();
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={<>A legacy of trust, built across <span className="text-gradient-royal">industries and generations.</span></>}
        subtitle="From a single venture in 2001 to a diversified conglomerate spanning six industries — discover the story, values, and people behind Minhas Enterprises."
      />

      {/* Company Story */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[36rem] h-[36rem] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal y={40} blur>
              <div className="img-zoom relative rounded-3xl overflow-hidden shadow-premium-lg aspect-[4/3]">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Our team" className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <div>
              <SectionHeading align="left" eyebrow="Our Story" title={<>From one venture to a <span className="text-gradient-royal">diversified group.</span></>} />
              <Reveal delay={0.2}><p className="mt-5 text-fluid-base text-[#475569] leading-relaxed">Minhas Enterprises began in 2001 with a single real estate project in Lahore. What started as a family venture has grown over two decades into a diversified conglomerate spanning real estate, trading, technology, energy, logistics, and investments — employing over 1,200 professionals across 12 countries.</p></Reveal>
              <Reveal delay={0.3}><p className="mt-4 text-fluid-base text-[#475569] leading-relaxed">Our growth has been deliberate, not opportunistic. Each new division was launched only when we were confident we could bring the same standard of excellence that defined our real estate roots. This discipline has earned us the trust of clients, partners, and communities — and it remains the foundation of everything we build today.</p></Reveal>
              <Reveal delay={0.4}><p className="mt-4 text-fluid-base text-[#475569] leading-relaxed">Every project we undertake — whether a tower rising above the skyline or a digital platform transforming how people work — is held to the same standard: build it once, build it well, and build it to last.</p></Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="relative py-16 md:py-24 bg-[#F8FAFC] overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading eyebrow="What Drives Us" eyebrowColor="emerald" title={<>Mission, vision, and <span className="text-gradient-royal">values.</span></>} />
          <StaggerGroup className="mt-12 grid md:grid-cols-3 gap-5" stagger={0.12}>
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <StaggerItem key={p.title}>
                  <div className="group h-full p-7 rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#2563EB]/40 hover-lift hover:shadow-premium transition-all">
                    <div className="icon-modern w-12 h-12 mb-5"><Icon className="w-6 h-6" /></div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-3" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{p.title}</h3>
                    <p className="text-sm text-[#475569] leading-relaxed">{p.text}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* History Timeline */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-4 md:px-8">
          <SectionHeading eyebrow="Our Journey" eyebrowColor="gold" title={<>Milestones along the <span className="text-gradient-royal">way.</span></>} />
          <div className="mt-12 relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#2563EB] via-[#10B981] to-[#F59E0B] opacity-20" />
            <div className="space-y-8">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.05}>
                  <div className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#2563EB] to-[#10B981] ring-4 ring-white shadow-premium mt-1" />
                    {/* Content */}
                    <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                      <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:shadow-premium transition-shadow">
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] mb-1" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                          <Calendar className="w-3 h-3" />{t.year}
                        </div>
                        <h3 className="text-base font-bold text-[#0F172A] mb-1" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{t.title}</h3>
                        <p className="text-xs text-[#475569] leading-relaxed">{t.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements + Certifications */}
      <section className="relative py-16 md:py-24 bg-[#F8FAFC] overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading eyebrow="Recognition" title={<>Awards & <span className="text-gradient-royal">certifications.</span></>} />
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* Awards */}
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-5 flex items-center gap-2" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                <Award className="w-5 h-5 text-[#F59E0B]" /> Recent Awards
              </h3>
              <div className="space-y-3">
                {ACHIEVEMENTS.map((a, i) => (
                  <Reveal key={a.title} delay={i * 0.05}>
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-premium transition-shadow">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F59E0B]/15 to-[#F59E0B]/25 inline-flex items-center justify-center">
                        <Award className="w-5 h-5 text-[#F59E0B]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#0F172A]">{a.title}</div>
                        <div className="text-xs text-[#64748B]">{a.org}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            {/* Certifications */}
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-5 flex items-center gap-2" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                <BadgeCheck className="w-5 h-5 text-[#2563EB]" /> Certifications & Compliance
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {CERTIFICATIONS.map((c, i) => (
                  <Reveal key={c} delay={i * 0.05}>
                    <div className="flex items-center gap-2 p-4 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#2563EB]/40 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                      <span className="text-sm font-medium text-[#0F172A]">{c}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process (light themed) */}
      <Process />

      {/* Technologies */}
      <Technologies />

      {/* Leadership preview → link to Team */}
      <section className="relative py-16 md:py-24 bg-[#F8FAFC] overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
            <SectionHeading align="left" eyebrow="Leadership" eyebrowColor="emerald" title={<>Meet the people behind <span className="text-gradient-royal">the enterprise.</span></>} />
            <Reveal delay={0.2}>
              <button onClick={() => navigate('team')} className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#0F172A] bg-white border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:shadow-premium transition-all whitespace-nowrap">
                View Full Team
                <ArrowUpRight className="w-4 h-4 text-[#2563EB] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Reveal>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'Imran Minhas', role: 'Founder & Chairman', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
              { name: 'Ayesha Minhas', role: 'Chief Executive Officer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
              { name: 'Bilal Ahmed', role: 'Chief Technology Officer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
              { name: 'Sana Khan', role: 'Chief Operating Officer', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
            ].map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="group relative rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] hover:shadow-premium-lg transition-all">
                  <div className="img-zoom aspect-[4/5] overflow-hidden">
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent" />
                    <div className="absolute bottom-0 p-4 text-white">
                      <div className="font-bold" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{m.name}</div>
                      <div className="text-[11px] text-[#60A5FA] uppercase tracking-wider">{m.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA title={<>Want to be part of <span className="text-gradient-gold">our story?</span></>} subtitle="Explore career opportunities or get in touch — we're always looking for exceptional people." />
    </>
  );
}
