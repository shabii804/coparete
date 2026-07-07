'use client';

import { motion } from 'framer-motion';
import { Reveal, StaggerGroup, StaggerItem } from './Reveal';
import SectionHeading from './SectionHeading';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';

const POSTS = [
  {
    title: 'Why diversified enterprises outperform single-sector peers',
    excerpt: 'A look at the data behind why spreading risk across industries creates more resilient returns — and how Minhas approaches it.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Strategy',
    date: 'Jun 24, 2026',
    readTime: '6 min',
  },
  {
    title: 'The case for solar in South Asia: 5 lessons from GreenGrid',
    excerpt: 'What we learned building a 120MW solar farm — and what other developers should know before going utility-scale.',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Energy',
    date: 'Jun 12, 2026',
    readTime: '8 min',
  },
  {
    title: 'Building ERP that people actually want to use',
    excerpt: 'Inside the design decisions behind MinhasERP — and the user research that shaped every module.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Product',
    date: 'May 30, 2026',
    readTime: '5 min',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-[32rem] h-[32rem] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }} />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-10">
          <SectionHeading
            align="left"
            eyebrow="From the Blog"
            eyebrowColor="emerald"
            title={<>Insights from <span className="text-gradient-royal">our team.</span></>}
            description="Strategy, engineering, and operations thinking from the people building Minhas Enterprises."
          />
          <Reveal delay={0.2}>
            <a href="#blog" className="group hidden md:inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[#0F172A] bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:bg-white hover:shadow-premium transition-all whitespace-nowrap">
              View all articles
              <ArrowUpRight className="w-4 h-4 text-[#2563EB] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <StaggerGroup className="mt-10 md:mt-14 grid md:grid-cols-3 gap-5 md:gap-6" stagger={0.1}>
          {POSTS.map((p) => (
            <StaggerItem key={p.title}>
              <a
                href="#blog"
                className="group block h-full rounded-2xl md:rounded-3xl bg-white border border-[#E2E8F0] hover:border-transparent hover:shadow-premium-lg overflow-hidden transition-all duration-500"
              >
                {/* Image */}
                <div className="relative img-zoom aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full glass-dark text-[10px] font-semibold uppercase tracking-wider text-white">
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-3 text-[11px] text-[#64748B] mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {p.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {p.readTime}
                    </span>
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-[#0F172A] leading-snug mb-2 group-hover:text-[#2563EB] transition-colors"
                    style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                    {p.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#475569] leading-relaxed mb-4">{p.excerpt}</p>

                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] group-hover:gap-2.5 transition-all">
                    Read more
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.2}>
          <div className="mt-8 md:hidden text-center">
            <a href="#blog" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[#0F172A] bg-[#F8FAFC] border border-[#E2E8F0]">
              View all articles
              <ArrowUpRight className="w-4 h-4 text-[#2563EB]" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
