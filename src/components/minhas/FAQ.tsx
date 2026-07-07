'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';
import SectionHeading from './SectionHeading';
import { Plus, MessageCircleQuestion } from 'lucide-react';

const FAQS = [
  {
    q: 'What industries does Minhas Enterprises serve?',
    a: 'We serve nine core industries: Education, Healthcare, Retail, Manufacturing, Construction, Real Estate, Restaurants, Logistics, and Government. Each industry has a dedicated team with deep domain expertise.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Project timelines vary by scope. A standard web application takes 8–12 weeks, while enterprise ERP implementations can span 4–9 months. We provide detailed timelines after the discovery phase and commit to delivery dates.',
  },
  {
    q: 'Do you offer post-launch support and maintenance?',
    a: 'Yes — every project includes 90 days of free post-launch support. After that, we offer flexible retainers covering 24/7 monitoring, updates, security patches, and feature enhancements with response times as low as 15 minutes.',
  },
  {
    q: 'What is your pricing model?',
    a: 'We offer three models: fixed-price for well-defined scopes, time-and-materials for evolving projects, and dedicated teams for ongoing partnerships. Most engagements start with a paid discovery sprint (1–2 weeks) to define scope accurately.',
  },
  {
    q: 'Can you work with our existing team or vendors?',
    a: 'Absolutely. We frequently integrate with in-house teams, external agencies, and existing technology stacks. Our process includes clear handoff documentation, code reviews, and knowledge transfer to ensure seamless collaboration.',
  },
  {
    q: 'How do you handle data security and compliance?',
    a: 'We are SOC 2 Type II certified and follow ISO 27001 practices. All data is encrypted in transit and at rest, access is role-based with audit logging, and we sign NDAs and DPAs before any engagement begins.',
  },
  {
    q: 'Do you sign NDAs and own intellectual property?',
    a: 'Yes. We sign mutual NDAs before detailed discussions. Upon final payment, all IP — code, designs, documentation — transfers to you. We retain no rights to your custom work.',
  },
  {
    q: 'What happens after I request a quote?',
    a: 'Within one business day, a solutions architect will reach out to schedule a 30-minute discovery call. We then provide a detailed proposal with scope, timeline, and pricing — typically within 5 business days.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-20 md:py-32 bg-[#F8FAFC] overflow-hidden">
      <div className="absolute top-0 right-0 w-[32rem] h-[32rem] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F59E0B, transparent 70%)' }} />

      <div className="relative mx-auto max-w-4xl px-4 md:px-8">
        <SectionHeading
          eyebrow="FAQ"
          eyebrowColor="gold"
          title={<>Answers to <span className="text-gradient-royal">common questions.</span></>}
          description="Can't find what you're looking for? Reach out — our team is happy to help."
        />

        <div className="mt-10 md:mt-14 space-y-3">
          {FAQS.map((faq, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={i} delay={i * 0.04}>
                <div
                  className={`rounded-2xl border transition-all duration-400 overflow-hidden ${
                    open
                      ? 'bg-white border-[#2563EB]/30 shadow-premium'
                      : 'bg-white border-[#E2E8F0] hover:border-[#2563EB]/20'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                    aria-expanded={open}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className={`w-8 h-8 rounded-lg inline-flex items-center justify-center flex-shrink-0 transition-colors ${
                        open ? 'bg-gradient-to-br from-[#2563EB] to-[#10B981]' : 'bg-[#F8FAFC] border border-[#E2E8F0]'
                      }`}>
                        <MessageCircleQuestion className={`w-4 h-4 ${open ? 'text-white' : 'text-[#2563EB]'}`} />
                      </div>
                      <span className="text-sm md:text-base font-semibold text-[#0F172A]"
                        style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                        {faq.q}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className={`w-8 h-8 rounded-lg inline-flex items-center justify-center flex-shrink-0 transition-colors ${
                        open ? 'bg-[#2563EB]/10 text-[#2563EB]' : 'bg-[#F8FAFC] text-[#475569]'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6 pl-16 md:pl-[4.5rem]">
                          <p className="text-sm md:text-base text-[#475569] leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 md:mt-10 text-center p-6 md:p-8 rounded-2xl bg-white border border-[#E2E8F0]">
            <p className="text-sm text-[#475569] mb-3">Still have questions?</p>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1E40AF] shadow-premium hover:-translate-y-0.5 transition-all">
              Talk to our team
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
