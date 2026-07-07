'use client';

import { Reveal } from './Reveal';
import { useNav, type PageId } from './NavigationContext';
import { ArrowUpRight, Linkedin, Twitter, Facebook, Instagram, Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';

const FOOTER_COLS: { title: string; links: { label: string; page?: PageId }[] }[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', page: 'about' },
      { label: 'Our Team', page: 'team' },
      { label: 'Blog', page: 'blog' },
      { label: 'Contact', page: 'contact' },
    ],
  },
  {
    title: 'Divisions',
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
      { label: 'Request Demo', page: 'products' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Portfolio', page: 'portfolio' },
      { label: 'Industries', page: 'industries' },
      { label: 'Insights', page: 'blog' },
      { label: 'Get a Quote', page: 'contact' },
    ],
  },
];

const SOCIAL = [
  { icon: Linkedin, label: 'LinkedIn', href: '#', color: '#0A66C2' },
  { icon: Twitter, label: 'Twitter', href: '#', color: '#1DA1F2' },
  { icon: Facebook, label: 'Facebook', href: '#', color: '#1877F2' },
  { icon: Instagram, label: 'Instagram', href: '#', color: '#E4405F' },
];

export default function Footer() {
  const { navigate, openQuote } = useNav();
  return (
    <footer className="relative bg-[#0F172A] text-white overflow-hidden">
      {/* Top gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB] to-transparent" />
      <div className="absolute -top-32 left-1/4 w-80 h-80 md:w-96 md:h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
      <div className="absolute -bottom-32 right-1/4 w-72 h-72 md:w-80 md:h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }} />

      {/* Newsletter + CTA banner (compact) */}
      <div className="relative border-b border-white/10">
        <div className="container-premium py-8 md:py-10">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-5 md:gap-8 items-center">
            <Reveal>
              <div>
                <h3 className="text-fluid-xl md:text-fluid-2xl font-bold" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                  Subscribe to our <span className="text-gradient-gold">newsletter</span>
                </h3>
                <p className="mt-1.5 text-xs text-white/60 max-w-md leading-relaxed">
                  Quarterly insights on projects, trends, and the future of diversified enterprise. No spam, ever.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input type="email" placeholder="you@company.com"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#2563EB] focus:bg-white/10 transition-all" />
                </div>
                <button type="submit"
                  className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[#0F172A] bg-white hover:bg-[#F8FAFC] shadow-premium hover:-translate-y-0.5 transition-all whitespace-nowrap">
                  Subscribe
                  <Send className="w-3.5 h-3.5 text-[#2563EB] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Main footer — compact */}
      <div className="relative container-premium py-10 md:py-14">
        <div className="grid lg:grid-cols-[1.5fr_repeat(4,1fr)] gap-8">
          {/* Brand */}
          <div>
            <button onClick={() => navigate('home')} className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-premium">
                <img src="/minhas-logo.svg" alt="Minhas Enterprises" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-base font-bold" style={{ fontFamily: 'var(--font-display), sans-serif' }}>Minhas Enterprises</div>
                <div className="text-[9px] uppercase tracking-[0.32em] text-[#2563EB] font-medium mt-0.5">Building Tomorrow, Today</div>
              </div>
            </button>
            <p className="text-xs text-white/60 leading-relaxed max-w-xs">
              A diversified conglomerate delivering excellence across real estate, trading, technology, energy, and logistics since 2001.
            </p>

            {/* Contact info compact */}
            <div className="mt-4 space-y-1.5 text-[11px] text-white/60">
              <div className="flex items-start gap-2"><MapPin className="w-3 h-3 text-[#2563EB] flex-shrink-0 mt-0.5" /><span>Minhas Tower, Gulberg III, Lahore, Pakistan</span></div>
              <div className="flex items-center gap-2"><Phone className="w-3 h-3 text-[#2563EB] flex-shrink-0" /><span>+92 42 111 222 333</span></div>
              <div className="flex items-center gap-2"><Mail className="w-3 h-3 text-[#2563EB] flex-shrink-0" /><span>hello@minhas-enterprises.com</span></div>
            </div>

            {/* Social — colorful */}
            <div className="mt-4 flex gap-2">
              {SOCIAL.map((s) => {
                const Icon = s.icon;
                return (
                  <a key={s.label} href={s.href} aria-label={s.label}
                    className="w-9 h-9 rounded-lg inline-flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = s.color; e.currentTarget.style.borderColor = s.color; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns — compact */}
          {FOOTER_COLS.map((col, i) => (
            <Reveal key={col.title} delay={0.05 * i}>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold mb-3">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <button onClick={() => link.page && navigate(link.page)}
                        className="text-xs text-white/70 hover:text-white inline-flex items-center gap-1 group transition-colors text-left">
                        {link.label}
                        <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* CTA strip — Get a Quote */}
      <div className="relative border-t border-white/10">
        <div className="container-premium py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-white/60">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Have a project in mind?</span>
          </div>
          <button onClick={openQuote}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-[#0F172A] bg-white hover:bg-[#F8FAFC] transition-all hover:-translate-y-0.5">
            Get a Free Quote
            <ArrowUpRight className="w-3 h-3 text-[#2563EB]" />
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="container-premium py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-white/50">© {new Date().getFullYear()} Minhas Enterprises. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px] text-white/50 flex-wrap justify-center">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
