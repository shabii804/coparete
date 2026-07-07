'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote:
      'Minhas Enterprises delivered our headquarters six months ahead of schedule without compromising on a single detail. Their attention to craft is unmatched in the region.',
    name: 'Ayesha Rahman',
    title: 'CEO, Nucleus Holdings',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    quote:
      'We partnered with their technology division to modernize a 30-year-old supply chain. The result was a 40% reduction in operating cost and a platform we still build on today.',
    name: 'David Chen',
    title: 'COO, Meridian Logistics',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    quote:
      'Working with Minhas feels less like dealing with a conglomerate and more like working with a family that happens to have extraordinary resources. Trust is everything.',
    name: 'Sara Al-Mansoori',
    title: 'Founder, Aurora Ventures',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    quote:
      'Their energy team brought our solar project from concept to grid connection in under two years. A masterclass in disciplined execution and long-term thinking.',
    name: 'Imran Siddiqui',
    title: 'MD, Helix Energy',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = TESTIMONIALS[index];

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="relative py-20 md:py-32 bg-[#F8FAFC] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[44rem] md:w-[50rem] md:h-[50rem] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }} />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-[#2563EB] text-[11px] font-semibold tracking-wider uppercase shadow-soft">
              <span className="w-1 h-1 rounded-full bg-[#2563EB]" />
              Voices
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 md:mt-5 text-fluid-3xl md:text-fluid-4xl font-semibold leading-[1.08] text-[#0F172A]">
              Trusted by leaders across{' '}
              <span className="text-gradient-royal">industries.</span>
            </h2>
          </Reveal>
        </div>

        {/* Testimonial card */}
        <div className="mt-10 md:mt-14 max-w-4xl mx-auto">
          <Reveal y={30}>
            <div className="relative p-6 md:p-12 rounded-2xl md:rounded-3xl bg-white border border-[#E2E8F0] shadow-premium-lg overflow-hidden">
              {/* Quote icon */}
              <div className="absolute -top-4 -left-2 w-24 h-24 md:w-32 md:h-32 opacity-[0.08] pointer-events-none">
                <Quote className="w-full h-full text-[#2563EB]" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-5 md:mb-6">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-2xl leading-relaxed text-[#0F172A] font-medium"
                    style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                    "{current.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="mt-6 md:mt-8 flex items-center gap-3 md:gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden ring-2 ring-[#2563EB]/30 shadow-soft">
                        <img src={current.avatar} alt={current.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#10B981] border-2 border-white flex items-center justify-center">
                        <span className="text-[8px] text-white font-bold">✓</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-[#0F172A] text-sm md:text-base">{current.name}</div>
                      <div className="text-[11px] md:text-xs text-[#64748B]">{current.title}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="mt-6 md:mt-8 flex items-center justify-between border-t border-[#E2E8F0] pt-5 md:pt-6">
                <div className="flex gap-1.5">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      aria-label={`Testimonial ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === index ? 'w-8 bg-gradient-to-r from-[#2563EB] to-[#10B981]' : 'w-1.5 bg-[#CBD5E1] hover:bg-[#94A3B8]'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => go(-1)}
                    aria-label="Previous testimonial"
                    className="w-9 h-9 md:w-10 md:h-10 rounded-xl inline-flex items-center justify-center bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all"
                  >
                    <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                  <button
                    onClick={() => go(1)}
                    aria-label="Next testimonial"
                    className="w-9 h-9 md:w-10 md:h-10 rounded-xl inline-flex items-center justify-center bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all"
                  >
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
