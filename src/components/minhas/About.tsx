'use client';

import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { Building2, Target, Eye, Heart, CheckCircle2, ArrowUpRight } from 'lucide-react';

const PILLARS = [
  { icon: Target, title: 'Our Mission', text: 'To deliver world-class products and services that empower communities and create lasting value across every industry we touch.' },
  { icon: Eye, title: 'Our Vision', text: 'To be the most trusted diversified enterprise in the region, recognized globally for innovation, integrity, and impact.' },
  { icon: Heart, title: 'Our Values', text: 'Integrity, excellence, and stewardship guide every decision — we build relationships as carefully as we build businesses.' },
];

const HIGHLIGHTS = [
  'Multi-industry expertise',
  'Sustainable growth model',
  'Customer-first philosophy',
  'Ethical governance',
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — image collage */}
          <Reveal y={40} blur>
            <div className="relative">
              {/* Main image */}
              <div className="img-zoom relative rounded-3xl overflow-hidden shadow-premium-lg aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Minhas Enterprises corporate headquarters"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent" />
              </div>

              {/* Floating accent card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 lg:-left-12 w-56 p-5 rounded-2xl glass-strong border border-white/70 shadow-premium-lg"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#10B981] inline-flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                    5+
                  </div>
                </div>
                <div className="text-xs text-[#475569] leading-relaxed">
                  Industries served under one unified vision of excellence.
                </div>
              </motion.div>

              {/* Floating accent badge top-right */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 lg:-right-8 px-4 py-2.5 rounded-2xl glass-strong border border-white/70 shadow-premium"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#D4AF37] text-lg">★</span>
                  <span className="text-xs font-semibold text-[#0F172A]">Trusted Since 2001</span>
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* Right — copy */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2563EB]/8 text-[#2563EB] text-xs font-semibold tracking-wider uppercase">
                <span className="w-1 h-1 rounded-full bg-[#2563EB]" />
                About Minhas Enterprises
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-[1.1] text-[#0F172A]">
                A legacy of trust, built across{' '}
                <span className="text-gradient-royal">industries and generations.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-base md:text-lg text-[#475569] leading-relaxed">
                From a single venture founded in 2001, Minhas Enterprises has grown into a diversified
                group spanning real estate, trading, technology, and energy. Our journey has been shaped
                by an unwavering commitment to quality, a relentless drive for innovation, and a deep
                sense of responsibility to the communities we serve.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-4 text-base md:text-lg text-[#475569] leading-relaxed">
                Every project we undertake — whether a tower rising above the skyline or a digital
                platform transforming how people work — is held to the same standard: build it once,
                build it well, and build it to last.
              </p>
            </Reveal>

            {/* Highlights */}
            <Reveal delay={0.4}>
              <ul className="mt-7 grid grid-cols-2 gap-3">
                {HIGHLIGHTS.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-[#0F172A] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.5}>
              <a
                href="#services"
                className="group mt-9 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#2563EB] bg-[#2563EB]/8 hover:bg-[#2563EB] hover:text-white transition-all duration-400"
              >
                Discover our divisions
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-24 grid md:grid-cols-3 gap-6">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={0.1 * i} y={30}>
                <div className="group h-full p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:bg-white hover-lift hover:shadow-premium transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#10B981] inline-flex items-center justify-center mb-5 shadow-glow-blue group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0F172A]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#475569] leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
