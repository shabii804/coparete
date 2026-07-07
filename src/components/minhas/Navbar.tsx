'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Impact', href: '#impact' },
  { label: 'Projects', href: '#projects' },
  { label: 'Voices', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ visible }: { visible: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24));

  // Active section observer
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
            <span className="text-sm md:text-[15px] font-semibold tracking-tight text-[#0F172A]"
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
                    'relative px-3.5 py-2 text-[13px] font-medium transition-colors duration-300',
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
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 px-4 lg:px-5 py-2 md:py-2.5 rounded-xl text-[13px] font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1E40AF] shadow-premium hover:shadow-glow-blue transition-all duration-300 hover:-translate-y-0.5"
          >
            Get in Touch
            <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
            className="xl:hidden w-10 h-10 inline-flex items-center justify-center rounded-xl bg-white/60 border border-[#E2E8F0] text-[#0F172A] hover:bg-white transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="xl:hidden mx-auto max-w-7xl mt-2 overflow-hidden rounded-2xl glass-strong border border-[#E2E8F0] shadow-premium"
          >
            <ul className="flex flex-col p-3">
              {NAV_LINKS.map((l, i) => {
                const id = l.href.replace('#', '');
                const active = activeSection === id;
                return (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'block px-4 py-3 text-sm font-medium rounded-xl transition-colors',
                        active
                          ? 'text-[#2563EB] bg-[#2563EB]/8'
                          : 'text-[#475569] hover:text-[#2563EB] hover:bg-[#F8FAFC]'
                      )}
                    >
                      {l.label}
                    </a>
                  </motion.li>
                );
              })}
              <li className="p-2">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1E40AF] shadow-premium"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
