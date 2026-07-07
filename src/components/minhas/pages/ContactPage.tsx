'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../PageHeader';
import { Reveal, StaggerGroup, StaggerItem } from '../Reveal';
import FAQ from '../FAQ';
import { useNav } from '../NavigationContext';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Navigation, Sparkles } from 'lucide-react';

function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.3, y: y * 0.3 });
  };
  const reset = () => setPos({ x: 0, y: 0 });
  return (
    <motion.button ref={ref} onMouseMove={handleMove} onMouseLeave={reset} animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 16 }} className={className}>
      {children}
    </motion.button>
  );
}

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'hello@minhas-enterprises.com', href: 'mailto:hello@minhas-enterprises.com' },
  { icon: Phone, label: 'Phone', value: '+92 42 111 222 333', href: 'tel:+9242111222333' },
  { icon: MapPin, label: 'Headquarters', value: 'Minhas Tower, Gulberg III, Lahore, Pakistan', href: '#' },
  { icon: Clock, label: 'Office Hours', value: 'Mon – Sat · 9:00 AM – 6:00 PM PKT', href: '#' },
];

export default function ContactPage() {
  const { openQuote } = useNav();
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        eyebrowColor="blue"
        title={<>Let's start a <span className="text-gradient-royal">conversation.</span></>}
        subtitle="Reach out through any channel below — a member of our team will respond within one business day."
      />

      <section className="relative py-8 md:py-12 bg-white overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[36rem] h-[36rem] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left — info + map */}
            <div>
              <StaggerGroup className="grid sm:grid-cols-2 gap-4" stagger={0.08}>
                {CONTACT_INFO.map((c) => {
                  const Icon = c.icon;
                  return (
                    <StaggerItem key={c.label}>
                      <a href={c.href} className="group block p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:bg-white hover:shadow-premium transition-all">
                        <div className="icon-modern w-10 h-10 mb-3"><Icon className="w-5 h-5" /></div>
                        <div className="text-[10px] uppercase tracking-wider text-[#64748B] font-semibold mb-1">{c.label}</div>
                        <div className="text-sm text-[#0F172A] font-medium">{c.value}</div>
                      </a>
                    </StaggerItem>
                  );
                })}
              </StaggerGroup>

              {/* WhatsApp + Quote */}
              <Reveal delay={0.3}>
                <div className="mt-4 p-5 rounded-2xl bg-gradient-to-br from-[#10B981]/8 to-[#2563EB]/8 border border-[#E2E8F0]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#10B981] inline-flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#0F172A]">Prefer WhatsApp?</div>
                      <div className="text-xs text-[#475569]">Chat with us instantly during office hours.</div>
                    </div>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#10B981] hover:bg-[#059669] transition-colors">
                    <MessageCircle className="w-4 h-4" /> Start WhatsApp Chat
                  </a>
                </div>
              </Reveal>

              {/* Map placeholder */}
              <Reveal delay={0.4}>
                <div className="mt-4 rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-premium aspect-[16/10] relative bg-[#F8FAFC]">
                  <div className="absolute inset-0 bg-grid opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-[#2563EB]/30 animate-pulse-ring" />
                      <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E40AF] inline-flex items-center justify-center shadow-glow-blue">
                        <MapPin className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>Minhas Tower</div>
                      <div className="text-xs text-[#64748B]">Gulberg III, Lahore, Pakistan</div>
                    </div>
                    <a href="#" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-[#2563EB] bg-white border border-[#E2E8F0] hover:shadow-soft transition-all">
                      <Navigation className="w-3.5 h-3.5" /> Get Directions
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right — form */}
            <Reveal delay={0.2}>
              <form onSubmit={(e) => e.preventDefault()} className="p-6 md:p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-premium">
                <h3 className="text-xl font-bold text-[#0F172A] mb-1" style={{ fontFamily: 'var(--font-display), sans-serif' }}>Send us a message</h3>
                <p className="text-sm text-[#475569] mb-6">Fill out the form and we'll get back to you within one business day.</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name" placeholder="Your name" />
                  <Field label="Email" placeholder="you@company.com" type="email" />
                </div>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <Field label="Company" placeholder="Company name" />
                  <Field label="Phone" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="mt-4">
                  <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-2">How can we help?</label>
                  <textarea rows={5} placeholder="Tell us about your project, partnership, or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 transition-all resize-none" />
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-xs text-[#64748B]">We respect your privacy. Your details stay confidential.</p>
                  <MagneticButton type="submit"
                    className="group inline-flex items-center gap-2 px-5 md:px-6 py-3 md:py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1E40AF] shadow-premium hover:shadow-glow-blue">
                    Send Message
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </MagneticButton>
                </div>

                {/* Quick quote CTA */}
                <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-[#2563EB]/8 to-[#10B981]/8">
                    <Sparkles className="w-5 h-5 text-[#F59E0B] flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm font-bold text-[#0F172A]">Have a specific project in mind?</div>
                      <div className="text-xs text-[#475569]">Use our multi-step quote form for a detailed response.</div>
                    </div>
                    <button onClick={openQuote} className="text-xs font-semibold text-white px-4 py-2 rounded-lg bg-gradient-to-r from-[#2563EB] to-[#1E40AF] hover:-translate-y-0.5 transition-transform whitespace-nowrap">
                      Get a Quote
                    </button>
                  </div>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}

function Field({ label, placeholder, type = 'text' }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-2">{label}</label>
      <input type={type} placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 transition-all" />
    </div>
  );
}
