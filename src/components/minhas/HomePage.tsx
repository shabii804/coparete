'use client';

import { motion } from 'framer-motion';
import Hero from './Hero';
import TechStack from './TechStack';
import Industries from './Industries';
import DevModels from './DevModels';
import ContactSection from './ContactSection';
import { Reveal, StaggerGroup, StaggerItem } from './Reveal';
import SectionHeading from './SectionHeading';
import { useNav } from './NavigationContext';
import {
  ArrowUpRight, Cpu, Brain, ShoppingCart, GraduationCap, Monitor, Database,
  Target, Eye, Heart, Zap, Shield, Users, Code2, Star, Quote,
} from 'lucide-react';

// Tech company services
const SERVICES_PREVIEW = [
  { icon: Cpu, title: 'ERP Systems', desc: 'Unified enterprise platforms for finance, HR, inventory, and operations.', color: '#2563EB' },
  { icon: Brain, title: 'AI & Machine Learning', desc: 'LLM integrations, computer vision, and predictive analytics.', color: '#10B981' },
  { icon: ShoppingCart, title: 'POS Systems', desc: 'Cloud POS for retail, restaurants, and omnichannel commerce.', color: '#F59E0B' },
  { icon: GraduationCap, title: 'School Management', desc: 'LMS, admissions, attendance, and parent portals.', color: '#2563EB' },
  { icon: Monitor, title: 'Desktop Applications', desc: 'Cross-platform desktop apps built with Electron & Tauri.', color: '#10B981' },
  { icon: Database, title: 'Custom Software', desc: 'Tailored web, mobile, and backend solutions at scale.', color: '#F59E0B' },
];

const PILLARS = [
  { icon: Target, title: 'Our Mission', text: 'Building software that empowers businesses to operate smarter.' },
  { icon: Eye, title: 'Our Vision', text: 'To be the most trusted technology partner in the region.' },
  { icon: Heart, title: 'Our Values', text: 'Innovation, integrity, and excellence in every line of code.' },
];

const PROJECTS_PREVIEW = [
  { title: 'MinhasERP', category: 'Enterprise', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', desc: 'Unified ERP for finance, HR, and operations.' },
  { title: 'EduFlow LMS', category: 'Education', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', desc: 'Learning management for 12K+ students.' },
  { title: 'RetailOne POS', category: 'Retail', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', desc: 'Omnichannel POS across 50 stores.' },
];

const TEAM_PREVIEW = [
  { name: 'Imran Minhas', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Ayesha Minhas', role: 'CTO', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Bilal Ahmed', role: 'VP of Engineering', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Sana Khan', role: 'Head of Product', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
];

const CAPABILITIES = [
  { icon: Code2, label: 'Web Apps' },
  { icon: Monitor, label: 'Desktop Apps' },
  { icon: Brain, label: 'AI/ML' },
  { icon: ShoppingCart, label: 'POS' },
  { icon: Database, label: 'ERP' },
  { icon: Zap, label: 'Automation' },
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
            <div>
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
                <div className="mt-4 flex flex-wrap gap-2">
                  {CAPABILITIES.map((c) => {
                    const Icon = c.icon;
                    return (
                      <span key={c.label} className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#0F172A]">
                        <Icon className="w-3.5 h-3.5 text-[#2563EB]" />
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
                      <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                        <div className="icon-modern w-8 h-8 mb-2.5"><Icon className="w-4 h-4" /></div>
                        <div className="text-xs font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{p.title}</div>
                        <p className="text-[11px] text-[#475569] mt-1 leading-relaxed">{p.text}</p>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerGroup>
              <Reveal delay={0.3}>
                <button onClick={() => navigate('about')} className="group mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#2563EB] bg-[#2563EB]/8 hover:bg-[#2563EB] hover:text-white transition-all">
                  Learn More
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services */}
      <section id="services" className="relative py-10 md:py-14 bg-[#F8FAFC] overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-40 pointer-events-none" />
        <div className="container-premium relative">
          <SectionHeading
            eyebrow="What We Build"
            title={<>Software solutions for <span className="text-gradient-royal">every business need.</span></>}
            description="From ERP to AI, POS to school management — we engineer products that scale."
          />
          <StaggerGroup className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.07}>
            {SERVICES_PREVIEW.map((s) => {
              const Icon = s.icon;
              return (
                <StaggerItem key={s.title}>
                  <div className="group h-full p-5 rounded-2xl bg-white border border-[#E2E8F0] hover-lift hover:shadow-premium transition-all">
                    <div className="relative w-12 h-12 rounded-xl inline-flex items-center justify-center mb-4 transition-all duration-500"
                      style={{ background: `linear-gradient(135deg, ${s.color}15, ${s.color}25)` }}>
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}cc)` }} />
                      <Icon className="relative w-6 h-6 transition-colors group-hover:text-white" style={{ color: s.color }} />
                    </div>
                    <h3 className="text-base font-bold text-[#0F172A] mb-1.5" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{s.title}</h3>
                    <p className="text-xs text-[#475569] leading-relaxed">{s.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
          <Reveal delay={0.2}>
            <div className="mt-6 text-center">
              <button onClick={() => navigate('services')} className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#0F172A] bg-white border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:shadow-premium transition-all">
                View All Services
                <ArrowUpRight className="w-3.5 h-3.5 text-[#2563EB] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
        <div className="container-premium relative">
          <SectionHeading
            eyebrow="Featured Products"
            eyebrowColor="gold"
            title={<>Products that <span className="text-gradient-royal">power businesses.</span></>}
          />
          <StaggerGroup className="mt-6 grid md:grid-cols-3 gap-4" stagger={0.08}>
            {PROJECTS_PREVIEW.map((p) => (
              <StaggerItem key={p.title}>
                <div className="group relative overflow-hidden rounded-2xl shadow-premium hover:shadow-premium-lg aspect-[4/3]">
                  <div className="img-zoom absolute inset-0">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent" />
                  <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                    <span className="px-2 py-0.5 rounded-full bg-white/15 backdrop-blur text-[10px] font-semibold uppercase tracking-wider w-fit mb-1.5">{p.category}</span>
                    <h3 className="text-base font-bold" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{p.title}</h3>
                    <p className="text-[11px] text-white/80 mt-0.5">{p.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal delay={0.2}>
            <div className="mt-6 text-center">
              <button onClick={() => navigate('portfolio')} className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#0F172A] bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:shadow-premium transition-all">
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
          <StaggerGroup className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4" stagger={0.08}>
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
