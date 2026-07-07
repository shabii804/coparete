'use client';

import { Reveal } from './Reveal';
import { useNav, type PageId } from './NavigationContext';
import { ArrowUpRight, Linkedin, Twitter, Facebook, Instagram, Mail, MapPin, Phone, Send } from 'lucide-react';

const FOOTER_COLS: { title: string; links: { label: string; page?: PageId }[] }[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', page: 'about' },
      { label: 'Our Team', page: 'team' },
      { label: 'Careers', page: 'team' },
      { label: 'Blog', page: 'blog' },
      { label: 'Contact', page: 'contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Real Estate', page: 'services' },
      { label: 'Trading', page: 'services' },
      { label: 'Technology', page: 'services' },
      { label: 'Energy', page: 'services' },
      { label: 'Logistics', page: 'services' },
      { label: 'Investments', page: 'services' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'MinhasERP', page: 'products' },
      { label: 'TradeBridge', page: 'products' },
      { label: 'Skyline CRM', page: 'products' },
      { label: 'Pricing', page: 'products' },
      { label: 'Request Demo', page: 'products' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Education', page: 'industries' },
      { label: 'Healthcare', page: 'industries' },
      { label: 'Retail', page: 'industries' },
      { label: 'Manufacturing', page: 'industries' },
      { label: 'Real Estate', page: 'industries' },
      { label: 'Government', page: 'industries' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Portfolio', page: 'portfolio' },
      { label: 'Case Studies', page: 'portfolio' },
      { label: 'Insights', page: 'blog' },
      { label: 'Get a Quote', page: 'contact' },
      { label: 'Contact', page: 'contact' },
    ],
  },
];

const SOCIAL = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
];

export default function Footer() {
  const { navigate } = useNav();
  return (
    <footer className="relative bg-[#0F172A] text-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB] to-transparent" />
      <div className="absolute -top-32 left-1/4 w-80 h-80 md:w-96 md:h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
      <div className="absolute -bottom-32 right-1/4 w-72 h-72 md:w-80 md:h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }} />

      {/* Newsletter */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
            <Reveal>
              <h3 className="text-fluid-2xl md:text-fluid-3xl font-bold" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                Subscribe to our <span className="text-gradient-gold">newsletter</span>
              </h3>
              <p className="mt-3 text-sm text-white/60 max-w-md leading-relaxed">
                Quarterly insights on our projects, industry trends, and the future of diversified enterprise. No spam, ever.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input type="email" placeholder="you@company.com"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#2563EB] focus:bg-white/10 transition-all" />
                </div>
                <button type="submit"
                  className="group inline-flex items-center justify-center gap-2 px-5 md:px-6 py-3.5 rounded-xl text-sm font-semibold text-[#0F172A] bg-white hover:bg-[#F8FAFC] shadow-premium hover:-translate-y-0.5 transition-all">
                  Subscribe
                  <Send className="w-4 h-4 text-[#2563EB] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-[1.4fr_repeat(5,1fr)] gap-8 md:gap-8">
          {/* Brand */}
          <div>
            <button onClick={() => navigate('home')} className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl overflow-hidden shadow-premium">
                <img src="/minhas-logo.svg" alt="Minhas Enterprises" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-base md:text-lg font-bold" style={{ fontFamily: 'var(--font-display), sans-serif' }}>Minhas Enterprises</div>
                <div className="text-[9px] md:text-[10px] uppercase tracking-[0.32em] text-[#2563EB] font-medium mt-0.5">Building Tomorrow, Today</div>
              </div>
            </button>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              A diversified conglomerate delivering excellence across real estate, trading, technology, energy, and logistics — building with integrity since 2001.
            </p>
            <div className="mt-5 space-y-2 text-xs text-white/60">
              <div className="flex items-start gap-2"><MapPin className="w-3.5 h-3.5 text-[#2563EB] flex-shrink-0 mt-0.5" /><span>Minhas Tower, Gulberg III, Lahore, Pakistan</span></div>
              <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#2563EB] flex-shrink-0" /><span>+92 42 111 222 333</span></div>
              <div className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#2563EB] flex-shrink-0" /><span>hello@minhas-enterprises.com</span></div>
            </div>
            <div className="mt-6 flex gap-2">
              {SOCIAL.map((s) => {
                const Icon = s.icon;
                return (
                  <a key={s.label} href={s.href} aria-label={s.label}
                    className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 border border-white/10 inline-flex items-center justify-center text-white/60 hover:text-white hover:bg-[#2563EB] hover:border-[#2563EB] transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map((col, i) => (
            <Reveal key={col.title} delay={0.05 * i}>
              <div>
                <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-semibold mb-4 md:mb-5">{col.title}</h4>
                <ul className="space-y-2.5 md:space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <button onClick={() => link.page && navigate(link.page)}
                        className="text-sm text-white/70 hover:text-white inline-flex items-center gap-1.5 group transition-colors text-left">
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
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
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-5 md:py-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Minhas Enterprises. All rights reserved.</p>
          <div className="flex items-center gap-4 md:gap-6 text-xs text-white/50 flex-wrap justify-center">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
