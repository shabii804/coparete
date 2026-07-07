'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Industries', href: '#industries' },
  { label: 'Portfolio', href: '#projects' },
  { label: 'Team', href: '#team' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ visible, onQuoteClick }: { visible: boolean; onQuoteClick?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24));

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace('#', ''));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -120, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: -120, opacity: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-3 md:px-6 pt-3 md:pt-4"
    >
      <nav
        className={cn(
          'mx-auto max-w-7xl flex items-center justify-between rounded-2xl px-3 md:px-6 py-2.5 md:py-3 transition-all duration-500 ease-premium',
          scrolled
            ? 'glass-strong shadow-premium border border-[#E2E8F0]'
            : 'bg-white/40 backdrop-blur-md border border-white/30'
        )}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 md:gap-3 group flex-shrink-0">
          <motion.div
            whileHover={{ rotate: 8, scale: 1.06 }}
            transition={{ type: 'spring', stiffness: 300, damping: 14 }}
            className="w-9 h-9 md:w-10 md:h-10 rounded-xl overflow-hidden shadow-soft"
          >
            <img src="/minhas-logo.svg" alt="Minhas Enterprises" className="w-full h-full object-contain" />
          </motion.div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-sm md:text-[15px] font-bold tracking-tight text-[#0F172A]"
              style={{ fontFamily: 'var(--font-display), sans-serif' }}>
              Minhas
            </span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.32em] text-[#2563EB] font-medium mt-0.5">
              Enterprises
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden xl:flex items-center gap-0.5">
          {NAV_LINKS.map((l) => {
            const id = l.href.replace('#', '');
            const active = activeSection === id;
            return (
              <li key={l.href} className="relative">
                <a
                  href={l.href}
                  className={cn(
                    'relative px-3 py-2 text-[13px] font-medium transition-colors duration-300',
                    active ? 'text-[#0F172A]' : 'text-[#475569] hover:text-[#0F172A]'
                  )}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-0.5 h-[2px] bg-gradient-to-r from-[#2563EB] to-[#10B981] rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={onQuoteClick}
            className="hidden md:inline-flex items-center gap-1.5 px-4 lg:px-5 py-2 md:py-2.5 rounded-xl text-[13px] font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1E40AF] shadow-premium hover:shadow-glow-blue transition-all duration-300 hover:-translate-y-0.5"
          >
            <FileText className="w-3.5 h-3.5 md:w-4 md:h-4" />
            Get a Quote
            <ArrowUpRight className="w-3 h-3 md:w-3.5 md:h-3.5" />
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
            className="xl:hidden w-10 h-10 inline-flex items-center justify-center rounded-xl bg-white/60 border border-[#E2E8F0] text-[#0F172A] hover:bg-white transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — full-screen style */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden fixed inset-0 top-0 left-0 z-40 bg-white/95 backdrop-blur-xl"
          >
            {/* Decorative blobs */}
            <div className="absolute top-20 -left-20 w-72 h-72 rounded-full opacity-30 blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
            <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }} />

            <div className="relative flex items-center justify-between p-4 md:p-6">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl overflow-hidden shadow-soft">
                  <img src="/minhas-logo.svg" alt="Minhas Enterprises" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-sm font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>Minhas</span>
                  <span className="text-[10px] uppercase tracking-[0.32em] text-[#2563EB] font-medium mt-0.5">Enterprises</span>
                </div>
              </div>
              <button
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="w-11 h-11 inline-flex items-center justify-center rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] shadow-soft"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <motion.ul
              className="relative flex flex-col items-center justify-center gap-1 px-6 py-8"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
            >
              {NAV_LINKS.map((l, i) => {
                const id = l.href.replace('#', '');
                const active = activeSection === id;
                return (
                  <motion.li
                    key={l.href}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                    }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'text-3xl md:text-4xl font-bold transition-colors',
                        active ? 'text-gradient-royal' : 'text-[#0F172A] hover:text-[#2563EB]'
                      )}
                      style={{ fontFamily: 'var(--font-display), sans-serif' }}
                    >
                      {l.label}
                    </a>
                  </motion.li>
                );
              })}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="relative px-6 pb-10 flex flex-col items-center gap-3"
            >
              <button
                onClick={() => { setMobileOpen(false); onQuoteClick?.(); }}
                className="w-full max-w-xs inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-base font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1E40AF] shadow-premium-lg"
              >
                <FileText className="w-4 h-4" />
                Get a Quote
              </button>
              <a href="#contact" onClick={() => setMobileOpen(false)} className="text-sm text-[#475569]">
                Or contact us directly →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
