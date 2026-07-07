'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Reveal, StaggerGroup, StaggerItem } from './Reveal';
import SectionHeading from './SectionHeading';
import { Repeat, GitBranch, Waves, Rocket, Users, Target, Search, PenTool, Code2, TestTube, Cloud, RefreshCw, ArrowRight, Zap, Clock, TrendingUp } from 'lucide-react';

const MODELS = [
  {
    icon: Repeat, name: 'Agile',
    gradient: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #60A5FA 100%)',
    glow: 'rgba(37, 99, 235, 0.4)',
    color: '#2563EB',
    desc: 'Iterative sprints with continuous feedback, ideal for evolving requirements and fast delivery.',
    steps: ['Sprint Planning', 'Daily Standups', 'Sprint Review', 'Retrospective'],
    best: 'Startups & SaaS products',
  },
  {
    icon: Users, name: 'Scrum',
    gradient: 'linear-gradient(135deg, #059669 0%, #10B981 50%, #34D399 100%)',
    glow: 'rgba(16, 185, 129, 0.4)',
    color: '#10B981',
    desc: 'Structured Agile framework with dedicated roles (PO, SM, Dev) and time-boxed sprints.',
    steps: ['Product Backlog', 'Sprint (2-4 weeks)', 'Scrum Ceremonies', 'Increment Delivery'],
    best: 'Mid-to-large product teams',
  },
  {
    icon: Waves, name: 'Waterfall',
    gradient: 'linear-gradient(135deg, #D97706 0%, #F59E0B 50%, #FBBF24 100%)',
    glow: 'rgba(245, 158, 11, 0.4)',
    color: '#F59E0B',
    desc: 'Sequential phases where each stage completes before the next begins. Predictable and documented.',
    steps: ['Requirements', 'Design', 'Implementation', 'Testing & Deployment'],
    best: 'Enterprise & regulated industries',
  },
  {
    icon: GitBranch, name: 'DevOps',
    gradient: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 50%, #818CF8 100%)',
    glow: 'rgba(99, 102, 241, 0.4)',
    color: '#6366F1',
    desc: 'CI/CD pipelines with automated testing and deployment for continuous, reliable delivery.',
    steps: ['Code', 'Build & Test', 'Deploy', 'Monitor & Iterate'],
    best: 'Cloud & SaaS at scale',
  },
  {
    icon: Rocket, name: 'Lean',
    gradient: 'linear-gradient(135deg, #0F766E 0%, #14B8A6 50%, #5EEAD4 100%)',
    glow: 'rgba(20, 184, 166, 0.4)',
    color: '#14B8A6',
    desc: 'Build-Measure-Learn loops to ship MVPs fast, validate, and iterate based on real data.',
    steps: ['Identify', 'Build MVP', 'Measure', 'Learn & Pivot'],
    best: 'Early-stage startups',
  },
  {
    icon: Target, name: 'Hybrid',
    gradient: 'linear-gradient(135deg, #BE185D 0%, #EC4899 50%, #F472B6 100%)',
    glow: 'rgba(236, 72, 153, 0.4)',
    color: '#EC4899',
    desc: 'Blends Agile flexibility with Waterfall structure — best of both for complex projects.',
    steps: ['Plan (Waterfall)', 'Execute (Agile)', 'Review', 'Deploy'],
    best: 'Enterprise transformations',
  },
];

const PROCESS_STEPS = [
  { num: '01', icon: Search, title: 'Discovery', desc: 'Understand goals, users, and constraints.', gradient: 'linear-gradient(135deg, #2563EB, #3B82F6)', color: '#2563EB' },
  { num: '02', icon: PenTool, title: 'Design', desc: 'Wireframes, prototypes, and UX flows.', gradient: 'linear-gradient(135deg, #059669, #10B981)', color: '#10B981' },
  { num: '03', icon: Code2, title: 'Develop', desc: 'Engineering with modern stacks & CI/CD.', gradient: 'linear-gradient(135deg, #D97706, #F59E0B)', color: '#F59E0B' },
  { num: '04', icon: TestTube, title: 'Test', desc: 'Automated + manual QA across devices.', gradient: 'linear-gradient(135deg, #4F46E5, #6366F1)', color: '#6366F1' },
  { num: '05', icon: Cloud, title: 'Deploy', desc: 'Zero-downtime release with monitoring.', gradient: 'linear-gradient(135deg, #0F766E, #14B8A6)', color: '#14B8A6' },
  { num: '06', icon: RefreshCw, title: 'Iterate', desc: 'Analytics, feedback, and improvement.', gradient: 'linear-gradient(135deg, #BE185D, #EC4899)', color: '#EC4899' },
];

const STATS = [
  { icon: Zap, value: 96, suffix: '%', label: 'On-Time Delivery', gradient: 'linear-gradient(135deg, #2563EB, #3B82F6)', color: '#2563EB' },
  { icon: Clock, value: 180, suffix: '+', label: 'Projects Completed', gradient: 'linear-gradient(135deg, #059669, #10B981)', color: '#10B981' },
  { icon: TrendingUp, value: 280, suffix: '%', label: 'Avg Client ROI', gradient: 'linear-gradient(135deg, #D97706, #F59E0B)', color: '#F59E0B' },
  { icon: Users, value: 1200, suffix: '+', label: 'Engineers & Experts', gradient: 'linear-gradient(135deg, #4F46E5, #6366F1)', color: '#6366F1' },
];

function AnimatedCounter({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(value * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString()}{suffix}
    </span>
  );
}

export default function DevModels() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lineGlow = useTransform(scrollYProgress, [0, 1], ['0 0 0px rgba(37,99,235,0)', '0 0 20px rgba(37,99,235,0.5)']);

  return (
    <section className="relative py-10 md:py-14 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-[32rem] h-[32rem] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }} />
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-premium opacity-50 pointer-events-none" />

      <div className="container-premium relative">
        <SectionHeading
          eyebrow="Software Development Models"
          eyebrowColor="emerald"
          title={<>How we <span className="text-gradient-royal">build software.</span></>}
          description="We pick the right development model for your project — from Agile sprints to Waterfall for regulated industries."
        />

        {/* Models grid — modern centered cards */}
        <StaggerGroup className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.08}>
          {MODELS.map((m) => {
            const Icon = m.icon;
            return (
              <StaggerItem key={m.name}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className="group relative h-full p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-transparent hover:shadow-[0_20px_50px_rgba(0,0,0,0.10)] transition-all overflow-hidden text-center"
                >
                  {/* Top gradient accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    style={{ background: m.gradient }}
                  />
                  {/* Centered glow on hover */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${m.glow}, transparent 70%)` }}
                  />

                  <div className="relative flex flex-col items-center">
                    {/* Premium gradient icon — centered */}
                    <motion.div
                      whileHover={{ scale: 1.12, rotate: 4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                      className="relative w-16 h-16 rounded-2xl inline-flex items-center justify-center mb-4"
                      style={{ background: m.gradient, boxShadow: `0 12px 32px ${m.glow}, 0 4px 12px ${m.glow}` }}
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                      {/* Shine sweep */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <div
                          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                          style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)' }}
                        />
                      </div>
                      {/* Pulse ring */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                        style={{ border: `2px solid ${m.color}99`, animation: 'pulse-ring 2s ease-out infinite' }}
                      />
                    </motion.div>

                    <h3 className="text-base font-bold text-[#0F172A] mb-1" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{m.name}</h3>
                    <p className="text-[10px] font-semibold mb-2" style={{ color: m.color }}>Best for: {m.best}</p>
                    <p className="text-xs text-[#475569] leading-relaxed mb-3">{m.desc}</p>

                    {/* Steps — centered */}
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {m.steps.map((s, i) => (
                        <span key={s} className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[10px] font-medium text-[#475569]">
                          <span className="font-bold" style={{ color: m.color }}>{i + 1}</span>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {/* Animated Stats — count up when in view */}
        <StaggerGroup className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3" stagger={0.1}>
          {STATS.map((s) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={s.label}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className="group relative p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all overflow-hidden text-center"
                >
                  {/* Top accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    style={{ background: s.gradient }}
                  />
                  {/* Glow */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${s.color}40, transparent 70%)` }}
                  />
                  <div className="relative flex flex-col items-center">
                    <div
                      className="w-11 h-11 rounded-xl inline-flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                      style={{ background: s.gradient, boxShadow: `0 8px 20px ${s.color}30` }}
                    >
                      <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <div className="text-3xl md:text-4xl font-extrabold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif', letterSpacing: '-0.02em' }}>
                      <AnimatedCounter value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-[11px] text-[#64748B] mt-1">{s.label}</div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {/* Modern Development Process — connected timeline with glow */}
        <div ref={timelineRef} className="mt-10 md:mt-12">
          <Reveal>
            <div className="text-center mb-6 md:mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/8 text-[#2563EB] text-[10px] font-semibold tracking-wider uppercase">
                <span className="w-1 h-1 rounded-full bg-[#2563EB]" />
                Our Standard Process
              </span>
              <h3 className="mt-2.5 text-fluid-xl md:text-fluid-2xl font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                From idea to <span className="text-gradient-royal">impact.</span>
              </h3>
            </div>
          </Reveal>

          {/* Desktop/tablet horizontal timeline */}
          <div className="hidden md:block relative">
            {/* Background line */}
            <div className="absolute top-10 lg:top-12 left-0 right-0 h-[2px] bg-[#E2E8F0]" />
            {/* Animated progress line with glow */}
            <motion.div
              className="absolute top-10 lg:top-12 left-0 right-0 h-[2px] origin-left"
              style={{
                scaleX: lineScale,
                background: 'linear-gradient(90deg, #2563EB, #10B981, #F59E0B)',
                boxShadow: lineGlow,
              }}
            />

            <StaggerGroup className="grid grid-cols-6 gap-2 lg:gap-3" stagger={0.1}>
              {PROCESS_STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <StaggerItem key={step.num}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                      className="group relative text-center"
                    >
                      {/* Step circle with icon */}
                      <div className="relative w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-2.5 lg:mb-3">
                        {/* Glow ring on hover */}
                        <div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500"
                          style={{ background: `radial-gradient(circle, ${step.color}, transparent 70%)` }}
                        />
                        {/* Main circle */}
                        <motion.div
                          whileHover={{ rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                          className="relative w-full h-full rounded-2xl bg-white border-2 border-[#E2E8F0] shadow-[0_8px_24px_rgba(0,0,0,0.06)] inline-flex items-center justify-center group-hover:border-transparent transition-all overflow-hidden"
                        >
                          {/* Gradient fill on hover */}
                          <div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{ background: step.gradient, boxShadow: `0 12px 32px ${step.color}40` }}
                          />
                          <Icon className="relative w-6 h-6 lg:w-7 lg:h-7 transition-colors duration-500 group-hover:text-white" style={{ color: step.color }} strokeWidth={2} />
                          {/* Shine sweep */}
                          <div className="absolute inset-0 rounded-2xl overflow-hidden">
                            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                              style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)' }} />
                          </div>
                          {/* Step number badge */}
                          <span
                            className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white text-[#0F172A] text-[11px] font-bold inline-flex items-center justify-center shadow-premium border border-[#E2E8F0] group-hover:scale-110 transition-transform"
                            style={{ fontFamily: 'var(--font-display), sans-serif' }}
                          >
                            {step.num}
                          </span>
                        </motion.div>
                      </div>

                      <h4 className="text-sm font-bold text-[#0F172A] mb-1" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                        {step.title}
                      </h4>
                      <p className="text-[11px] text-[#64748B] leading-relaxed px-2">{step.desc}</p>

                      {/* Arrow connector (between steps) */}
                      {i < PROCESS_STEPS.length - 1 && (
                        <div className="absolute top-12 -right-2 z-10 w-4 h-4 rounded-full bg-white border border-[#E2E8F0] inline-flex items-center justify-center shadow-soft">
                          <ArrowRight className="w-2.5 h-2.5 text-[#94A3B8]" />
                        </div>
                      )}
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden relative pl-12">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-[#E2E8F0]" />
            <motion.div
              className="absolute left-6 top-0 bottom-0 w-[2px] origin-top"
              style={{
                scaleY: lineScale,
                background: 'linear-gradient(180deg, #2563EB, #10B981, #F59E0B)',
              }}
            />

            <StaggerGroup className="space-y-4" stagger={0.1}>
              {PROCESS_STEPS.map((step) => {
                const Icon = step.icon;
                return (
                  <StaggerItem key={step.num}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="group relative flex items-start gap-4"
                    >
                      {/* Circle */}
                      <div className="absolute -left-12 w-12 h-12 rounded-xl bg-white border-2 border-[#E2E8F0] shadow-[0_4px_12px_rgba(0,0,0,0.05)] inline-flex items-center justify-center overflow-hidden">
                        <div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ background: step.gradient }}
                        />
                        <Icon className="relative w-5 h-5 transition-colors group-hover:text-white" style={{ color: step.color }} strokeWidth={2} />
                      </div>
                      {/* Content */}
                      <div className="flex-1 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] group-hover:bg-white group-hover:shadow-premium transition-all">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-xs font-bold" style={{ color: step.color, fontFamily: 'var(--font-display), sans-serif' }}>{step.num}</span>
                          <h4 className="text-sm font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{step.title}</h4>
                        </div>
                        <p className="text-[11px] text-[#64748B] leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
