'use client';

import { motion } from 'framer-motion';
import { Reveal, StaggerGroup, StaggerItem } from './Reveal';
import SectionHeading from './SectionHeading';
import { Repeat, GitBranch, Waves, Rocket, Users, Target } from 'lucide-react';

const MODELS = [
  {
    icon: Repeat,
    name: 'Agile',
    color: '#2563EB',
    desc: 'Iterative sprints with continuous feedback, ideal for evolving requirements and fast delivery.',
    steps: ['Sprint Planning', 'Daily Standups', 'Sprint Review', 'Retrospective'],
    best: 'Startups & SaaS products',
  },
  {
    icon: Users,
    name: 'Scrum',
    color: '#10B981',
    desc: 'Structured Agile framework with dedicated roles (PO, SM, Dev) and time-boxed sprints.',
    steps: ['Product Backlog', 'Sprint (2-4 weeks)', 'Scrum Ceremonies', 'Increment Delivery'],
    best: 'Mid-to-large product teams',
  },
  {
    icon: Waves,
    name: 'Waterfall',
    color: '#F59E0B',
    desc: 'Sequential phases where each stage completes before the next begins. Predictable and documented.',
    steps: ['Requirements', 'Design', 'Implementation', 'Testing & Deployment'],
    best: 'Enterprise & regulated industries',
  },
  {
    icon: GitBranch,
    name: 'DevOps',
    color: '#2563EB',
    desc: 'CI/CD pipelines with automated testing and deployment for continuous, reliable delivery.',
    steps: ['Code', 'Build & Test', 'Deploy', 'Monitor & Iterate'],
    best: 'Cloud & SaaS at scale',
  },
  {
    icon: Rocket,
    name: 'Lean',
    color: '#10B981',
    desc: 'Build-Measure-Learn loops to ship MVPs fast, validate, and iterate based on real data.',
    steps: ['Identify', 'Build MVP', 'Measure', 'Learn & Pivot'],
    best: 'Early-stage startups',
  },
  {
    icon: Target,
    name: 'Hybrid',
    color: '#F59E0B',
    desc: 'Blends Agile flexibility with Waterfall structure — best of both for complex projects.',
    steps: ['Plan (Waterfall)', 'Execute (Agile)', 'Review', 'Deploy'],
    best: 'Enterprise transformations',
  },
];

const STEPS = [
  { num: '01', title: 'Discovery', desc: 'Understand goals, users, and constraints.' },
  { num: '02', title: 'Design', desc: 'Wireframes, prototypes, and UX flows.' },
  { num: '03', title: 'Develop', desc: 'Engineering with modern stacks & CI/CD.' },
  { num: '04', title: 'Test', desc: 'Automated + manual QA across devices.' },
  { num: '05', title: 'Deploy', desc: 'Zero-downtime release with monitoring.' },
  { num: '06', title: 'Iterate', desc: 'Analytics, feedback, and improvement.' },
];

export default function DevModels() {
  return (
    <section className="relative py-10 md:py-14 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-[32rem] h-[32rem] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
      <div className="container-premium relative">
        <SectionHeading
          eyebrow="Software Development Models"
          eyebrowColor="emerald"
          title={<>How we <span className="text-gradient-royal">build software.</span></>}
          description="We pick the right development model for your project — from Agile sprints to Waterfall for regulated industries."
        />

        {/* Models grid */}
        <StaggerGroup className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.07}>
          {MODELS.map((m) => {
            const Icon = m.icon;
            return (
              <StaggerItem key={m.name}>
                <div className="group h-full p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-white hover:border-[#2563EB]/30 hover-lift hover:shadow-premium transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="relative w-11 h-11 rounded-xl inline-flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{
                        background: `linear-gradient(135deg, ${m.color}, ${m.color}cc)`,
                        boxShadow: `0 6px 16px ${m.color}30`,
                      }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{m.name}</h3>
                      <p className="text-[10px] text-[#64748B] font-medium">Best for: {m.best}</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed mb-3">{m.desc}</p>
                  {/* Steps */}
                  <div className="flex flex-wrap gap-1.5">
                    {m.steps.map((s, i) => (
                      <span key={s} className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white border border-[#E2E8F0] text-[10px] font-medium text-[#475569]">
                        <span className="font-bold" style={{ color: m.color }}>{i + 1}</span>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {/* Development Process — horizontal step flow */}
        <Reveal delay={0.2}>
          <div className="mt-8 p-5 md:p-6 rounded-2xl bg-gradient-to-br from-[#F8FAFC] to-white border border-[#E2E8F0]">
            <h3 className="text-sm font-bold text-[#0F172A] mb-4 text-center" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
              Our Standard Development Process
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative text-center"
                >
                  <div className="w-10 h-10 mx-auto rounded-xl bg-gradient-to-br from-[#2563EB] to-[#10B981] inline-flex items-center justify-center shadow-[0_4px_12px_rgba(37,99,235,0.2)] mb-2">
                    <span className="text-xs font-bold text-white" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{step.num}</span>
                  </div>
                  <div className="text-xs font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{step.title}</div>
                  <div className="text-[10px] text-[#64748B] mt-0.5 leading-tight">{step.desc}</div>
                  {/* Connector arrow (desktop) */}
                  {i < STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-5 -right-2 text-[#CBD5E1]">→</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
