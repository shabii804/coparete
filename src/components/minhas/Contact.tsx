'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { Mail, Phone, MapPin, ArrowRight, Send, Clock, Sparkles } from 'lucide-react';

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
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 16 }}
      className={className}
    >
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

export default function Contact({ onQuoteClick }: { onQuoteClick?: () => void }) {
  return (
    <section id="contact" className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[36rem] h-[36rem] md:w-[40rem] md:h-[40rem] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-0 w-[32rem] h-[32rem] md:w-[36rem] md:h-[36rem] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }} />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* CTA banner */}
        <Reveal y={30} blur>
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] p-7 md:p-16 shadow-premium-lg">
            {/* Decorative */}
            <div className="absolute -top-32 -right-32 w-72 h-72 md:w-96 md:h-96 rounded-full opacity-30 blur-3xl"
              style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
            <div className="absolute -bottom-32 -left-32 w-72 h-72 md:w-96 md:h-96 rounded-full opacity-25 blur-3xl"
              style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }} />
            <div className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }} />

            <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-8 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full glass-dark text-white text-[11px] font-semibold tracking-wider uppercase">
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                  Let's Build Together
                </span>
                <h2 className="mt-4 md:mt-5 text-fluid-2xl md:text-fluid-4xl font-semibold leading-[1.08] text-white">
                  Ready to start your{' '}
                  <span className="text-gradient-gold">next chapter?</span>
                </h2>
                <p className="mt-4 md:mt-5 text-fluid-base md:text-fluid-lg text-white/70 leading-relaxed max-w-xl">
                  Whether you're exploring an investment, planning a development, or seeking a
                  strategic partner — our team is ready to help you turn ambition into impact.
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:items-end">
                <button
                  onClick={onQuoteClick}
                  className="group inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-2xl text-sm md:text-base font-semibold text-[#0F172A] bg-white hover:bg-[#F8FAFC] shadow-premium-lg hover:-translate-y-1 transition-all duration-500"
                >
                  Start a Conversation
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#2563EB] transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <a
                  href="mailto:hello@minhas-enterprises.com"
                  className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-2xl text-sm md:text-base font-semibold text-white glass-dark border border-white/20 hover:border-white/40 transition-all"
                >
                  Email Us Directly
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Contact info + form */}
        <div className="mt-12 md:mt-16 grid lg:grid-cols-2 gap-8 md:gap-10">
          {/* Left — info */}
          <div>
            <Reveal>
              <h3 className="text-fluid-2xl md:text-fluid-3xl font-semibold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                Get in touch
              </h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3 md:mt-4 text-fluid-base text-[#475569] leading-relaxed max-w-md">
                Reach out through any channel below — a member of our team will respond within
                one business day.
              </p>
            </Reveal>

            <div className="mt-6 md:mt-8 grid sm:grid-cols-2 gap-3 md:gap-4">
              {CONTACT_INFO.map((c, i) => {
                const Icon = c.icon;
                return (
                  <Reveal key={c.label} delay={0.15 + i * 0.05}>
                    <a
                      href={c.href}
                      className="group block p-4 md:p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:bg-white hover:shadow-premium transition-all duration-400"
                    >
                      <div className="icon-modern w-10 h-10 mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-[#64748B] font-semibold mb-1">
                        {c.label}
                      </div>
                      <div className="text-sm text-[#0F172A] font-medium">{c.value}</div>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Right — form */}
          <Reveal delay={0.2}>
            <form
              id="contact-form"
              onSubmit={(e) => e.preventDefault()}
              className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-premium"
            >
              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                <Field label="Full Name" placeholder="Your name" />
                <Field label="Email" placeholder="you@company.com" type="email" />
              </div>
              <div className="mt-3 md:mt-4 grid sm:grid-cols-2 gap-3 md:gap-4">
                <Field label="Company" placeholder="Company name" />
                <Field label="Phone" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="mt-3 md:mt-4">
                <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-2">
                  How can we help?
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project, partnership, or inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 transition-all resize-none"
                />
              </div>

              <div className="mt-5 md:mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs text-[#64748B]">
                  We respect your privacy. Your details stay confidential.
                </p>
                <MagneticButton
                  type="submit"
                  className="group inline-flex items-center gap-2 px-5 md:px-6 py-3 md:py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1E40AF] shadow-premium hover:shadow-glow-blue"
                >
                  Send Message
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </MagneticButton>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = 'text',
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 transition-all"
      />
    </div>
  );
}
