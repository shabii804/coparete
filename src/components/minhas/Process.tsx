'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal } from './Reveal';
import SectionHeading from './SectionHeading';
import { Search, PenTool, Code2, TestTube, Rocket, RefreshCw } from 'lucide-react';

const STEPS = [
  { icon: Search, title: 'Discovery', desc: 'We dive deep into your business, goals, and constraints to define the right scope.', color: '#2563EB' },
  { icon: PenTool, title: 'Design', desc: 'Wireframes, prototypes, and visual systems crafted to match your brand and audience.', color: '#10B981' },
  { icon: Code2, title: 'Development', desc: 'Engineering with modern stacks, code reviews, and continuous integration.', color: '#F59E0B' },
  { icon: TestTube, title: 'Testing', desc: 'Automated and manual QA across devices, browsers, and edge cases.', color: '#2563EB' },
  { icon: Rocket, title: 'Launch', desc: 'Smooth deployment with zero downtime, monitoring, and on-call support.', color: '#10B981' },
  { icon: RefreshCw, title: 'Iterate', desc: 'Post-launch optimization, analytics review, and continuous improvement.', color: '#F59E0B' },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative py-14 md:py-20 bg-[#F8FAFC] overflow-hidden">
      {/* Light decorative */}
      <div className="absolute inset-0 bg-dot opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[36rem] h-[36rem] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/4 w-[32rem] h-[32rem] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }} />

      <div className="container-premium relative">
        <SectionHeading
          eyebrow="Development Process"
          eyebrowColor="emerald"
          title={<>From idea to impact in <span className="text-gradient-royal">six disciplined steps.</span></>}
          description="A transparent, repeatable process that has delivered 180+ projects across our divisions."
        />

        {/* Timeline */}
        <div ref={ref} className="mt-14 md:mt-20 relative">
          {/* Animated progress line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-[2px] bg-[#E2E8F0]">
            <motion.div
              className="h-full origin-left"
              style={{
                scaleX: lineScale,
                background: 'linear-gradient(90deg, #2563EB, #10B981, #F59E0B)',
              }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 md:gap-4">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={i * 0.1}>
                  <div className="group relative">
                    {/* Step number circle */}
                    <div className="relative z-10 mx-auto lg:mx-0 w-24 h-24 mb-5">
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                        className="relative w-full h-full rounded-2xl bg-white border border-[#E2E8F0] shadow-premium inline-flex items-center justify-center overflow-hidden"
                      >
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}88)` }}
                        />
                        <Icon className="relative w-8 h-8 transition-colors duration-500 group-hover:text-white"
                          style={{ color: step.color }} />
                        {/* Step number */}
                        <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white text-[#0F172A] text-xs font-bold inline-flex items-center justify-center shadow-premium border border-[#E2E8F0]"
                          style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                          {i + 1}
                        </span>
                      </motion.div>
                    </div>

                    <div className="text-center lg:text-left">
                      <h3 className="text-base md:text-lg font-bold text-[#0F172A] mb-1.5"
                        style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                        {step.title}
                      </h3>
                      <p className="text-xs md:text-sm text-[#475569] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
