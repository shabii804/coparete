'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal, StaggerGroup, StaggerItem } from './Reveal';
import SectionHeading from './SectionHeading';
import { useNav } from './NavigationContext';
import { Mail, Phone, MapPin, Send, MessageCircle, Sparkles, ArrowRight, FileText } from 'lucide-react';

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
  { icon: Mail, label: 'Email', value: 'hello@minhas-enterprises.com' },
  { icon: Phone, label: 'Phone', value: '+92 42 111 222 333' },
  { icon: MapPin, label: 'Office', value: 'Gulberg III, Lahore, Pakistan' },
];

export default function ContactSection() {
  const { openQuote } = useNav();
  return (
    <section id="contact" className="relative py-10 md:py-14 bg-white overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[32rem] h-[32rem] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
      <div className="container-premium relative">
        <SectionHeading
          eyebrow="Contact Us"
          eyebrowColor="blue"
          title={<>Let's start a <span className="text-gradient-royal">conversation.</span></>}
          description="Have a project in mind? Reach out — we'll respond within one business day."
        />

        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          {/* Left — info */}
          <div>
            <StaggerGroup className="grid sm:grid-cols-3 gap-3" stagger={0.08}>
              {CONTACT_INFO.map((c) => {
                const Icon = c.icon;
                return (
                  <StaggerItem key={c.label}>
                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:bg-white hover:shadow-premium transition-all">
                      <div className="icon-modern w-9 h-9 mb-2.5"><Icon className="w-4 h-4" /></div>
                      <div className="text-[10px] uppercase tracking-wider text-[#64748B] font-semibold mb-0.5">{c.label}</div>
                      <div className="text-xs text-[#0F172A] font-medium">{c.value}</div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>

            {/* WhatsApp + Quote */}
            <Reveal delay={0.2}>
              <div className="mt-3 p-4 rounded-2xl bg-gradient-to-br from-[#10B981]/8 to-[#2563EB]/8 border border-[#E2E8F0]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#10B981] inline-flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0F172A]">Prefer WhatsApp?</div>
                    <div className="text-[10px] text-[#475569]">Chat instantly during office hours.</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <a href="#" className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-white bg-[#10B981] hover:bg-[#059669] transition-colors">
                    <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                  </a>
                  <button onClick={openQuote} className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:-translate-y-0.5 transition-all">
                    <FileText className="w-3.5 h-3.5" /> Get a Quote
                  </button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal delay={0.15}>
            <form onSubmit={(e) => e.preventDefault()} className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-premium">
              <div className="grid sm:grid-cols-2 gap-3">
                <Field label="Full Name" placeholder="Your name" />
                <Field label="Email" placeholder="you@company.com" type="email" />
              </div>
              <div className="mt-3 grid sm:grid-cols-2 gap-3">
                <Field label="Company" placeholder="Company name" />
                <Field label="Phone" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="mt-3">
                <label className="block text-[10px] font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5">Message</label>
                <textarea rows={3} placeholder="Tell us about your project..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 transition-all resize-none" />
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <p className="text-[10px] text-[#64748B]">We respect your privacy.</p>
                <MagneticButton type="submit"
                  className="group inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1E40AF] shadow-premium hover:shadow-glow-blue">
                  Send Message
                  <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </MagneticButton>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = 'text' }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="block text-[10px] font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5">{label}</label>
      <input type={type} placeholder={placeholder}
        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 transition-all" />
    </div>
  );
}
