'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, FileText, ChevronRight, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNav, type PageId } from './NavigationContext';

const NAV_LINKS: { label: string; page: PageId }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Services', page: 'services' },
  { label: 'Products', page: 'products' },
  { label: 'Industries', page: 'industries' },
  { label: 'Portfolio', page: 'portfolio' },
  { label: 'Team', page: 'team' },
  { label: 'Blog', page: 'blog' },
  { label: 'Contact', page: 'contact' },
];

export default function Navbar({ visible }: { visible: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { navigate, currentPage, openQuote } = useNav();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 16));

  const handleNav = (page: PageId) => {
    navigate(page);
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-3 md:px-5 pt-2.5"
    >
      <nav
        className={cn(
          'mx-auto max-w-6xl flex items-center justify-between rounded-2xl px-4 md:px-5 transition-all duration-400 ease-premium',
          scrolled
            ? 'h-14 bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.06)]'
            : 'h-16 bg-white/50 backdrop-blur-md border border-white/30'
        )}
      >
        {/* Logo — left */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2.5 group flex-shrink-0"
        >
          <motion.div
            whileHover={{ rotate: 8, scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 300, damping: 14 }}
            className="w-9 h-9 rounded-xl overflow-hidden shadow-soft"
          >
            <img src="/minhas-logo.svg" alt="Minhas Enterprises" className="w-full h-full object-contain" />
          </motion.div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-sm font-bold tracking-tight text-[#0F172A]"
              style={{ fontFamily: 'var(--font-display), sans-serif' }}>
              Minhas
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#2563EB] font-semibold mt-0.5">
              Enterprises
            </span>
          </div>
        </button>

        {/* Desktop nav — centered, modern pill style */}
        <div className="hidden xl:flex items-center gap-0.5 p-1 rounded-xl bg-[#F8FAFC]/70 border border-[#E2E8F0]/60">
          {NAV_LINKS.map((l) => {
            const active = currentPage === l.page;
            return (
              <button
                key={l.page}
                onClick={() => handleNav(l.page)}
                className={cn(
                  'relative px-3 py-1.5 text-[13px] font-medium rounded-lg transition-all duration-300',
                  active
                    ? 'text-white'
                    : 'text-[#475569] hover:text-[#0F172A]'
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] shadow-[0_4px_12px_rgba(37,99,235,0.3)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{l.label}</span>
              </button>
            );
          })}
        </div>

        {/* CTA — right */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={openQuote}
            className="hidden md:inline-flex items-center gap-1.5 h-9 px-4 rounded-xl text-[13px] font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] shadow-[0_6px_16px_rgba(37,99,235,0.25)] hover:shadow-[0_10px_24px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <FileText className="w-3.5 h-3.5" />
            Get a Quote
            <ArrowRight className="w-3 h-3 hidden lg:inline" />
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
            className="xl:hidden w-10 h-10 inline-flex items-center justify-center rounded-xl bg-white/70 border border-[#E2E8F0] text-[#0F172A] hover:bg-white transition-colors shadow-soft"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — full-screen modern overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden fixed inset-0 top-0 left-0 z-40 bg-white"
          >
            {/* Decorative blobs */}
            <div className="absolute top-20 -left-20 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
            <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }} />

            <div className="relative flex items-center justify-between p-4 md:p-6 border-b border-[#E2E8F0]">
              <button onClick={() => handleNav('home')} className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl overflow-hidden shadow-soft">
                  <img src="/minhas-logo.svg" alt="Minhas Enterprises" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-sm font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>Minhas</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#2563EB] font-semibold mt-0.5">Enterprises</span>
                </div>
              </button>
              <button
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="w-11 h-11 inline-flex items-center justify-center rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] shadow-soft"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <motion.ul
              className="relative flex flex-col px-4 md:px-6 py-6"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } }}
            >
              {NAV_LINKS.map((l, i) => {
                const active = currentPage === l.page;
                return (
                  <motion.li
                    key={l.page}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
                    }}
                  >
                    <button
                      onClick={() => handleNav(l.page)}
                      className={cn(
                        'w-full flex items-center justify-between py-3.5 border-b border-[#E2E8F0]/60 text-left',
                        active ? 'text-[#2563EB]' : 'text-[#0F172A]'
                      )}
                    >
                      <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                        {l.label}
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="text-xs text-[#94A3B8] font-mono">0{i + 1}</span>
                        <ChevronRight className={cn('w-5 h-5 transition-transform', active ? 'text-[#2563EB] translate-x-1' : 'text-[#94A3B8]')} />
                      </span>
                    </button>
                  </motion.li>
                );
              })}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative px-4 md:px-6 pb-10 flex flex-col gap-3"
            >
              <button
                onClick={() => { setMobileOpen(false); openQuote(); }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-base font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] shadow-[0_12px_30px_rgba(37,99,235,0.25)]"
              >
                <FileText className="w-4 h-4" />
                Get a Free Quote
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
