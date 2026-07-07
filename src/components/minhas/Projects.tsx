'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';
import { ArrowUpRight, MapPin } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Skyline Residences',
    category: 'Real Estate',
    location: 'Lahore, PK',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    desc: 'A 32-floor luxury residential tower redefining urban living.',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    title: 'GreenGrid Solar',
    category: 'Energy',
    location: 'Sindh, PK',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    desc: '120MW utility-scale solar farm powering 80,000 homes.',
    span: '',
  },
  {
    title: 'TradeBridge Platform',
    category: 'Technology',
    location: 'Digital',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    desc: 'B2B trading platform processing $400M annually.',
    span: '',
  },
  {
    title: 'North Hub Logistics',
    category: 'Logistics',
    location: 'Islamabad, PK',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    desc: '500,000 sq ft automated warehousing facility.',
    span: '',
  },
  {
    title: 'Heritage Trade Center',
    category: 'Real Estate',
    location: 'Karachi, PK',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    desc: 'Mixed-use commercial complex spanning 18 floors.',
    span: 'lg:col-span-2',
  },
];

const FILTERS = ['All', 'Real Estate', 'Energy', 'Technology', 'Logistics'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[32rem] h-[32rem] md:w-[36rem] md:h-[36rem] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }} />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-[#10B981]/8 text-[#10B981] text-[11px] font-semibold tracking-wider uppercase">
                <span className="w-1 h-1 rounded-full bg-[#10B981]" />
                Featured Projects
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 md:mt-5 text-fluid-3xl md:text-fluid-4xl font-semibold leading-[1.08] text-[#0F172A]">
                Work that{' '}
                <span className="text-gradient-royal">speaks for itself.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 md:mt-5 text-fluid-base md:text-fluid-lg text-[#475569] leading-relaxed">
                A selection of recent projects across our divisions — each one a testament to
                craft, scale, and long-term thinking.
              </p>
            </Reveal>
          </div>

          {/* Filters */}
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3.5 md:px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                    filter === f
                      ? 'bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white shadow-premium'
                      : 'bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:text-[#0F172A]'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Projects grid */}
        <motion.div
          layout
          className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 auto-rows-[16rem] md:auto-rows-[18rem] lg:auto-rows-[20rem]"
        >
          <AnimatePresence>
            {visible.map((p, i) => (
              <motion.a
                key={p.title}
                href="#contact"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden rounded-2xl md:rounded-3xl shadow-premium hover:shadow-premium-lg ${p.span}`}
              >
                {/* Image */}
                <div className="img-zoom absolute inset-0">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/0 via-transparent to-[#10B981]/0 group-hover:from-[#2563EB]/20 group-hover:to-[#10B981]/20 transition-all duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end text-white">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-semibold uppercase tracking-wider">
                      {p.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] text-white/70">
                      <MapPin className="w-3 h-3" />
                      {p.location}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-2xl font-semibold" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs md:text-sm text-white/80 max-w-md leading-relaxed">
                    {p.desc}
                  </p>
                  <div className="mt-2 md:mt-3 inline-flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                    View Case Study
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
