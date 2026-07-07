'use client';

import { motion } from 'framer-motion';
import Hero from './Hero';
import TrustedClients from './TrustedClients';
import { Reveal, StaggerGroup, StaggerItem } from './Reveal';
import SectionHeading from './SectionHeading';
import { useNav } from './NavigationContext';
import CTA from './CTA';
import {
  ArrowUpRight, Building2, ShoppingBag, Cpu, Zap, Truck, ShieldCheck,
  Target, Eye, Heart, TrendingUp, Users, Award, Leaf, Star, Quote, ArrowRight,
} from 'lucide-react';

const SERVICES_PREVIEW = [
  { icon: Building2, title: 'Real Estate', desc: 'Premium residential, commercial, and mixed-use developments.', color: '#2563EB' },
  { icon: ShoppingBag, title: 'Trading & Distribution', desc: 'Global supply network across consumer and industrial categories.', color: '#10B981' },
  { icon: Cpu, title: 'Technology', desc: 'Software, cloud, and digital transformation solutions.', color: '#F59E0B' },
  { icon: Zap, title: 'Energy', desc: 'Sustainable solar, wind, and clean power infrastructure.', color: '#2563EB' },
  { icon: Truck, title: 'Logistics', desc: 'End-to-end warehousing and freight infrastructure.', color: '#10B981' },
  { icon: ShieldCheck, title: 'Investments', desc: 'Strategic capital across high-growth ventures.', color: '#F59E0B' },
];

const PILLARS = [
  { icon: Target, title: 'Our Mission', text: 'Delivering world-class products that empower communities.' },
  { icon: Eye, title: 'Our Vision', text: 'To be the most trusted diversified enterprise globally.' },
  { icon: Heart, title: 'Our Values', text: 'Integrity, excellence, and stewardship in every decision.' },
];

const REASONS = [
  { icon: ShieldCheck, title: 'Trusted & Reliable', desc: 'Two decades of consistent delivery and ethical governance.' },
  { icon: TrendingUp, title: 'Proven ROI', desc: 'Average client ROI of 280% within the first year.' },
  { icon: Users, title: 'Expert Team', desc: '1,200+ specialists spanning six industries under one roof.' },
];

const IMPACT = [
  { icon: Building2, value: '180+', label: 'Projects Delivered' },
  { icon: Users, value: '1.2K+', label: 'Professionals' },
  { icon: Award, value: '42', label: 'Industry Awards' },
  { icon: Leaf, value: '35%', label: 'Renewable Mix' },
];

const PROJECTS_PREVIEW = [
  { title: 'Skyline Residences', category: 'Real Estate', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { title: 'GreenGrid Solar', category: 'Energy', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { title: 'TradeBridge Platform', category: 'Technology', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
];

const TEAM_PREVIEW = [
  { name: 'Imran Minhas', role: 'Founder & Chairman', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Ayesha Minhas', role: 'Chief Executive Officer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Bilal Ahmed', role: 'Chief Technology Officer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Sana Khan', role: 'Chief Operating Officer', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
];

const TESTIMONIAL = {
  quote: 'Minhas Enterprises delivered our headquarters six months ahead of schedule without compromising on a single detail.',
  name: 'Ayesha Rahman',
  title: 'CEO, Nucleus Holdings',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
};

export default function HomePage({ visible }: { visible: boolean }) {
  const { navigate } = useNav();

  return (
    <>
      {/* 1. Hero */}
      <Hero visible={visible} />

      {/* 2. Trusted Clients */}
      <TrustedClients />

      {/* 3. About Preview */}
      <section id="about" className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[32rem] h-[32rem] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
        <div className="container-premium relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <Reveal y={30} blur>
              <div className="relative">
                <div className="img-zoom relative rounded-3xl overflow-hidden shadow-premium-lg aspect-[4/3]">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Minhas Enterprises" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent" />
                </div>
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-4 -left-3 md:-left-6 p-3 rounded-2xl glass-strong border border-white/70 shadow-premium-lg">
                  <div className="text-2xl font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>5+</div>
                  <div className="text-[10px] text-[#475569]">Industries served</div>
                </motion.div>
              </div>
            </Reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="About Minhas"
                title={<>A legacy of trust, built across <span className="text-gradient-royal">industries.</span></>}
              />
              <Reveal delay={0.15}>
                <p className="mt-3 text-fluid-sm text-[#475569] leading-relaxed">
                  From a single venture founded in 2001, Minhas Enterprises has grown into a diversified
                  group spanning real estate, trading, technology, and energy. Our journey has been shaped
                  by an unwavering commitment to quality and a deep sense of responsibility to the communities we serve.
                </p>
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

      {/* 4. Services Preview */}
      <section id="services" className="relative py-14 md:py-20 bg-[#F8FAFC] overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-40 pointer-events-none" />
        <div className="container-premium relative">
          <SectionHeading
            eyebrow="What We Do"
            title={<>Six divisions. <span className="text-gradient-royal">One standard of excellence.</span></>}
            description="Our diversified portfolio serves clients across multiple industries with depth and focus."
          />
          <StaggerGroup className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.07}>
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
            <div className="mt-7 text-center">
              <button onClick={() => navigate('services')} className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#0F172A] bg-white border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:shadow-premium transition-all">
                View All Services
                <ArrowUpRight className="w-3.5 h-3.5 text-[#2563EB] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[32rem] h-[32rem] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
        <div className="container-premium relative">
          <SectionHeading
            eyebrow="Why Choose Us"
            eyebrowColor="emerald"
            title={<>Three reasons clients <span className="text-gradient-royal">choose Minhas.</span></>}
          />
          <StaggerGroup className="mt-8 grid md:grid-cols-3 gap-4" stagger={0.08}>
            {REASONS.map((r, i) => {
              const Icon = r.icon;
              return (
                <StaggerItem key={r.title}>
                  <div className="group relative h-full p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-white hover:border-[#2563EB]/30 hover-lift hover:shadow-premium transition-all overflow-hidden">
                    <span className="absolute top-3 right-4 text-4xl font-extrabold text-[#0F172A]/5" style={{ fontFamily: 'var(--font-display), sans-serif' }}>0{i + 1}</span>
                    <div className="icon-modern w-12 h-12 mb-4"><Icon className="w-6 h-6" /></div>
                    <h3 className="text-base font-bold text-[#0F172A] mb-1.5" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{r.title}</h3>
                    <p className="text-xs text-[#475569] leading-relaxed">{r.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* 6. Impact Stats — fixed to prevent overflow */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-[#0F172A]">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[32rem] h-[32rem] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
          <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }} />
        </div>
        <div className="absolute inset-0 bg-grid-dark opacity-[0.06] pointer-events-none" />
        <div className="container-premium relative">
          <SectionHeading
            eyebrow="Our Impact"
            eyebrowColor="dark"
            title={<>Numbers that <span className="text-gradient-gold">tell our story.</span></>}
          />
          <StaggerGroup className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4" stagger={0.08}>
            {IMPACT.map((s) => {
              const Icon = s.icon;
              return (
                <StaggerItem key={s.label}>
                  <div className="group p-4 md:p-5 rounded-2xl glass-dark border border-white/10 hover:border-white/30 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#10B981] inline-flex items-center justify-center mb-3 shadow-glow-blue group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    {/* Fixed: use text-2xl/3xl and break-words to prevent overflow */}
                    <div className="text-2xl md:text-3xl font-bold text-white break-words" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                      {s.value}
                    </div>
                    <div className="mt-1 text-[11px] md:text-xs font-medium text-white/70">{s.label}</div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* 7. Featured Projects Preview */}
      <section id="projects" className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="container-premium relative">
          <SectionHeading
            eyebrow="Featured Projects"
            eyebrowColor="gold"
            title={<>Work that <span className="text-gradient-royal">speaks for itself.</span></>}
          />
          <StaggerGroup className="mt-8 grid md:grid-cols-3 gap-4" stagger={0.08}>
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
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal delay={0.2}>
            <div className="mt-7 text-center">
              <button onClick={() => navigate('portfolio')} className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#0F172A] bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:shadow-premium transition-all">
                View Full Portfolio
                <ArrowUpRight className="w-3.5 h-3.5 text-[#2563EB] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. Team Preview — NEW */}
      <section className="relative py-14 md:py-20 bg-[#F8FAFC] overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-40 pointer-events-none" />
        <div className="container-premium relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <SectionHeading
              align="left"
              eyebrow="Our Team"
              eyebrowColor="emerald"
              title={<>Meet the people behind <span className="text-gradient-royal">the enterprise.</span></>}
            />
            <Reveal delay={0.15}>
              <button onClick={() => navigate('team')} className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#0F172A] bg-white border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:shadow-premium transition-all whitespace-nowrap">
                View Full Team
                <ArrowUpRight className="w-3.5 h-3.5 text-[#2563EB] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Reveal>
          </div>
          <StaggerGroup className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4" stagger={0.08}>
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

      {/* 9. Testimonial highlight */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #F59E0B, transparent 70%)' }} />
        <div className="container-premium relative max-w-3xl text-center">
          <Reveal>
            <Quote className="w-10 h-10 text-[#2563EB]/15 mx-auto mb-4" />
          </Reveal>
          <Reveal delay={0.08}>
            <blockquote className="text-fluid-lg md:text-fluid-xl font-medium text-[#0F172A] leading-relaxed" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
              "{TESTIMONIAL.quote}"
            </blockquote>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#2563EB]/30">
                <img src={TESTIMONIAL.avatar} alt={TESTIMONIAL.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-[#0F172A]">{TESTIMONIAL.name}</div>
                <div className="text-[11px] text-[#64748B]">{TESTIMONIAL.title}</div>
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

      {/* 10. CTA */}
      <CTA />
    </>
  );
}
