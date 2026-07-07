'use client';

import { Reveal } from './Reveal';
import { ArrowUpRight, Linkedin, Twitter, Facebook, Instagram, Mail } from 'lucide-react';

const FOOTER_LINKS = [
  {
    title: 'Company',
    links: ['About Us', 'Our Team', 'Careers', 'News & Media', 'Investor Relations'],
  },
  {
    title: 'Divisions',
    links: ['Real Estate', 'Trading', 'Technology', 'Energy', 'Logistics', 'Investments'],
  },
  {
    title: 'Resources',
    links: ['Case Studies', 'Insights', 'Sustainability', 'Press Kit', 'Contact'],
  },
];

const SOCIAL = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0F172A] text-white overflow-hidden">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB] to-transparent" />
      <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />

      {/* Newsletter */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <Reveal>
              <h3 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Subscribe to our <span className="text-gradient-gold">newsletter</span>
              </h3>
              <p className="mt-3 text-sm text-white/60 max-w-md leading-relaxed">
                Quarterly insights on our projects, industry trends, and the future of
                diversified enterprise. No spam, ever.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3"
              >
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#2563EB] focus:bg-white/10 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#0F172A] bg-white hover:bg-[#F8FAFC] shadow-premium hover:-translate-y-0.5 transition-all"
                >
                  Subscribe
                  <ArrowUpRight className="w-4 h-4 text-[#2563EB] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-14 md:py-20">
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl overflow-hidden shadow-premium">
                <img src="/minhas-logo.svg" alt="Minhas Enterprises" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-lg font-semibold" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                  Minhas Enterprises
                </div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-[#2563EB] font-medium">
                  Building Tomorrow, Today
                </div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              A diversified conglomerate delivering excellence across real estate, trading,
              technology, energy, and logistics — building with integrity since 2001.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-2">
              {SOCIAL.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 inline-flex items-center justify-center text-white/60 hover:text-white hover:bg-[#2563EB] hover:border-[#2563EB] transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col, i) => (
            <Reveal key={col.title} delay={0.05 * i}>
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 font-semibold mb-5">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/70 hover:text-white inline-flex items-center gap-1.5 group transition-colors"
                      >
                        {link}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Minhas Enterprises. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
