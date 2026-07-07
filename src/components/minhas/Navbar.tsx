'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Impact', href: '#impact' },
  { label: 'Projects', href: '#projects' },
  { label: 'Voices', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ visible }: { visible: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -120, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: -120, opacity: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4"
    >
      <nav
        className={cn(
          'mx-auto max-w-7xl flex items-center justify-between rounded-2xl px-4 md:px-7 py-3 transition-all duration-500',
          scrolled
            ? 'glass-strong shadow-premium border border-[#E2E8F0]'
            : 'bg-white/40 backdrop-blur-md border border-white/30'
        )}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-soft transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
            <img src="/minhas-logo.svg" alt="Minhas Enterprises" className="w-full h-full object-contain" />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight text-[#0F172A]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Minhas
            </span>
            <span className="text-[10px] uppercase tracking-[0.32em] text-[#2563EB] font-medium">
              Enterprises
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative px-4 py-2 text-sm font-medium text-[#475569] hover:text-[#0F172A] transition-colors duration-300 group"
              >
                {l.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#2563EB] to-[#10B981] rounded-full transition-all duration-300 group-hover:w-[60%]" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1E40AF] shadow-premium hover:shadow-glow-blue transition-all duration-300 hover:-translate-y-0.5"
          >
            Get in Touch
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-xl bg-white/60 border border-[#E2E8F0] text-[#0F172A]"
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
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden mx-auto max-w-7xl mt-2 overflow-hidden rounded-2xl glass-strong border border-[#E2E8F0] shadow-premium"
          >
            <ul className="flex flex-col p-4">
              {NAV_LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <a
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-[#475569] hover:text-[#2563EB] hover:bg-[#F8FAFC] rounded-xl transition-colors"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
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
