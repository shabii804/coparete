'use client';

import { useState, useEffect } from 'react';
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
import { getIcon } from './IconResolver';
import {
  ArrowUpRight, Zap, Shield, Users, Code2, Monitor, Brain, ShoppingCart, Database,
  Target, Eye, Heart, Star, Quote,
} from 'lucide-react';

// Helper to parse JSON string fields
function parseJSON(val: string | null | undefined, fallback: any[] = []): any[] {
  if (!val) return fallback;
  try { return JSON.parse(val); } catch { return fallback; }
}

// Default fallback data (used while loading or if API fails)
const FALLBACK_SERVICES = [
  { title: 'ERP Systems', desc: 'Unified enterprise platforms for finance, HR, inventory, and operations.', icon: 'Cpu', gradient: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #60A5FA 100%)', glow: 'rgba(37, 99, 235, 0.35)' },
  { title: 'AI & Machine Learning', desc: 'LLM integrations, computer vision, and predictive analytics.', icon: 'Brain', gradient: 'linear-gradient(135deg, #059669 0%, #10B981 50%, #34D399 100%)', glow: 'rgba(16, 185, 129, 0.35)' },
  { title: 'POS Systems', desc: 'Cloud POS for retail, restaurants, and omnichannel commerce.', icon: 'ShoppingCart', gradient: 'linear-gradient(135deg, #D97706 0%, #F59E0B 50%, #FBBF24 100%)', glow: 'rgba(245, 158, 11, 0.35)' },
  { title: 'School Management', desc: 'LMS, admissions, attendance, and parent portals.', icon: 'GraduationCap', gradient: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 50%, #818CF8 100%)', glow: 'rgba(99, 102, 241, 0.35)' },
  { title: 'Desktop Applications', desc: 'Cross-platform desktop apps built with Electron & Tauri.', icon: 'Monitor', gradient: 'linear-gradient(135deg, #0F766E 0%, #14B8A6 50%, #5EEAD4 100%)', glow: 'rgba(20, 184, 166, 0.35)' },
  { title: 'Custom Software', desc: 'Tailored web, mobile, and backend solutions at scale.', icon: 'Database', gradient: 'linear-gradient(135deg, #BE185D 0%, #EC4899 50%, #F472B6 100%)', glow: 'rgba(236, 72, 153, 0.35)' },
];

const FALLBACK_PROJECTS = [
  { title: 'MinhasERP', category: 'Enterprise', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', desc: 'Unified ERP for finance, HR, and operations.', color: '#2563EB', gradient: 'linear-gradient(135deg, #2563EB, #3B82F6)', stat: '500+ companies' },
  { title: 'EduFlow LMS', category: 'Education', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', desc: 'Learning management for 12K+ students.', color: '#10B981', gradient: 'linear-gradient(135deg, #059669, #10B981)', stat: '12K+ students' },
  { title: 'RetailOne POS', category: 'Retail', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', desc: 'Omnichannel POS across 50 stores.', color: '#F59E0B', gradient: 'linear-gradient(135deg, #D97706, #F59E0B)', stat: '50+ stores' },
];

const FALLBACK_TEAM = [
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

const PILLARS = [
  { icon: Target, title: 'Our Mission', text: 'Building software that empowers businesses to operate smarter.', gradient: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #60A5FA 100%)', glow: 'rgba(37, 99, 235, 0.35)' },
  { icon: Eye, title: 'Our Vision', text: 'To be the most trusted technology partner in the region.', gradient: 'linear-gradient(135deg, #059669 0%, #10B981 50%, #34D399 100%)', glow: 'rgba(16, 185, 129, 0.35)' },
  { icon: Heart, title: 'Our Values', text: 'Innovation, integrity, and excellence in every line of code.', gradient: 'linear-gradient(135deg, #D97706 0%, #F59E0B 50%, #FBBF24 100%)', glow: 'rgba(245, 158, 11, 0.35)' },
];

const TESTIMONIAL_FALLBACK = {
  quote: 'Minhas Enterprises rebuilt our entire ERP in 6 months — on time, on budget, and beyond what we imagined.',
  name: 'Ayesha Rahman',
  title: 'CEO, Nucleus Holdings',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
};

export default function HomePage({ visible }: { visible: boolean }) {
  const { navigate } = useNav();
  const [services, setServices] = useState<any[]>(FALLBACK_SERVICES);
  const [products, setProducts] = useState<any[]>(FALLBACK_PROJECTS);
  const [team, setTeam] = useState<any[]>(FALLBACK_TEAM);
  const [testimonial, setTestimonial] = useState(TESTIMONIAL_FALLBACK);

  // Fetch all content from APIs on mount
  useEffect(() => {
    // Services
    fetch('/api/services').then(r => r.json()).then(data => {
      if (Array.isArray(data) && data.length > 0) {
        setServices(data.map(s => ({
          title: s.title,
          desc: s.description,
          icon: s.icon || 'Cpu',
          image: s.image,
          gradient: s.gradient || 'linear-gradient(135deg, #2563EB, #3B82F6)',
          glow: s.glow || 'rgba(37, 99, 235, 0.35)',
        })));
      }
    }).catch(() => {});

    // Products (for portfolio preview)
    fetch('/api/products').then(r => r.json()).then(data => {
      if (Array.isArray(data) && data.length > 0) {
        setProducts(data.map(p => ({
          title: p.name,
          category: p.badge || p.tagline || 'Product',
          image: p.image,
          desc: p.tagline || p.description,
          color: p.color || '#2563EB',
          gradient: p.gradient || 'linear-gradient(135deg, #2563EB, #3B82F6)',
          stat: p.price || '',
        })));
      }
    }).catch(() => {});

    // Team
    fetch('/api/team').then(r => r.json()).then(data => {
      if (Array.isArray(data) && data.length > 0) {
        setTeam(data.map(m => ({
          name: m.name,
          role: m.role,
          image: m.image,
        })));
      }
    }).catch(() => {});

    // Testimonials (get first one)
    fetch('/api/testimonials').then(r => r.json()).then(data => {
      if (Array.isArray(data) && data.length > 0) {
        const t = data[0];
        setTestimonial({
          quote: t.quote,
          name: t.name,
          title: t.title,
          avatar: t.avatar,
        });
      }
    }).catch(() => {});
  }, []);

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
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-4 -left-3 md:-left-6 p-3 rounded-2xl glass-strong border border-white/70 shadow-premium-lg">
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
              <SectionHeading align="left" eyebrow="About Minhas" title={<>A technology company building <span className="text-gradient-royal">software that matters.</span></>} />
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
                        <span className="w-5 h-5 rounded-md inline-flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" style={{ background: c.gradient }}>
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
                        <div className="relative w-10 h-10 rounded-xl inline-flex items-center justify-center mb-2.5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                          style={{ background: p.gradient, boxShadow: `0 6px 16px ${p.glow}` }}>
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

      {/* 3. Services — DYNAMIC from API */}
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
            {services.map((s, idx) => {
              const Icon = getIcon(s.icon);
              return (
                <StaggerItem key={idx}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                    className="group h-full p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-transparent hover:shadow-[0_20px_50px_rgba(0,0,0,0.10)] transition-all overflow-hidden relative text-center"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: s.gradient }} />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle, ${s.glow}, transparent 70%)` }} />
                    <div className="relative flex flex-col items-center">
                      <motion.div
                        whileHover={{ scale: 1.12, rotate: 4 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                        className="relative w-16 h-16 rounded-2xl inline-flex items-center justify-center mb-4"
                        style={{ background: s.gradient, boxShadow: `0 12px 32px ${s.glow}, 0 4px 12px ${s.glow}` }}
                      >
                        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                        <div className="absolute inset-0 rounded-2xl overflow-hidden">
                          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                            style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)' }} />
                        </div>
                      </motion.div>
                      <h3 className="text-base font-bold text-[#0F172A] mb-1.5" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{s.title}</h3>
                      <p className="text-xs text-[#475569] leading-relaxed">{s.desc}</p>
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

      {/* 4. Tech Stack (moving marquee) — fetches from API */}
      <TechStack />

      {/* 5 & 6. Industries (grid + colorful moving marquee) — fetches from API */}
      <Industries />

      {/* 7. Software Development Models — fetches from API */}
      <DevModels />

      {/* 8. Portfolio — DYNAMIC from products API */}
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
            {products.map((p, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className="group relative overflow-hidden rounded-2xl shadow-premium hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] aspect-[4/3] cursor-pointer"
                >
                  <div className="img-zoom absolute inset-0">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/95 via-[#0F172A]/30 to-transparent" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-overlay" style={{ background: p.gradient }} />
                  <div className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: p.gradient }} />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full glass-dark text-[10px] font-semibold uppercase tracking-wider text-white">{p.category}</span>
                    {p.stat && <span className="px-2.5 py-1 rounded-full text-[10px] font-bold text-white" style={{ background: p.color }}>{p.stat}</span>}
                  </div>
                  <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                    <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{p.title}</h3>
                    <p className="text-xs text-white/80 mb-3">{p.desc}</p>
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                      <span className="px-3 py-1.5 rounded-lg" style={{ background: p.color }}>View Case Study</span>
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
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. Team — DYNAMIC from API */}
      <section className="relative py-10 md:py-14 bg-[#F8FAFC] overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-40 pointer-events-none" />
        <div className="container-premium relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <SectionHeading align="left" eyebrow="Our Team" eyebrowColor="emerald" title={<>Meet the people behind <span className="text-gradient-royal">the technology.</span></>} />
            <Reveal delay={0.15}>
              <button onClick={() => navigate('team')} className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#0F172A] bg-white border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:shadow-premium transition-all whitespace-nowrap">
                View Full Team
                <ArrowUpRight className="w-3.5 h-3.5 text-[#2563EB] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Reveal>
          </div>
          <StaggerGroup className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4" stagger={0.08}>
            {team.map((m, idx) => (
              <StaggerItem key={idx}>
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

      {/* 10. Testimonial — DYNAMIC from API */}
      <section className="relative py-10 md:py-14 bg-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #F59E0B, transparent 70%)' }} />
        <div className="container-premium relative max-w-3xl text-center">
          <Reveal>
            <Quote className="w-10 h-10 text-[#2563EB]/15 mx-auto mb-4" />
          </Reveal>
          <Reveal delay={0.08}>
            <blockquote className="text-fluid-lg md:text-fluid-xl font-medium text-[#0F172A] leading-relaxed" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
              "{testimonial.quote}"
            </blockquote>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#2563EB]/30">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-[#0F172A]">{testimonial.name}</div>
                <div className="text-[11px] text-[#64748B]">{testimonial.title}</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-5 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 11. Contact Us */}
      <ContactSection />
    </>
  );
}
