'use client';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNav } from './NavigationContext';
import { Reveal } from './Reveal';

interface PageHeaderProps {
  eyebrow: string;
  eyebrowColor?: 'blue' | 'emerald' | 'gold';
  title: React.ReactNode;
  subtitle?: string;
}

const EYEBROW_STYLES = {
  blue: 'bg-[#2563EB]/8 text-[#2563EB]',
  emerald: 'bg-[#10B981]/8 text-[#10B981]',
  gold: 'bg-[#F59E0B]/10 text-[#F59E0B]',
};

export default function PageHeader({ eyebrow, eyebrowColor = 'blue', title, subtitle }: PageHeaderProps) {
  const { navigate } = useNav();
  return (
    <section className="relative pt-32 md:pt-40 pb-10 md:pb-14 overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white">
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 rounded-full opacity-[0.08] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
      <div className="absolute top-32 -right-20 w-80 h-80 rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }} />
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none mask-fade-b" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('home')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#E2E8F0] shadow-soft text-sm font-medium text-[#475569] hover:text-[#0F172A] hover:border-[#2563EB]/30 hover:shadow-premium transition-all mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </motion.button>

        <Reveal>
          <span className={`inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase ${EYEBROW_STYLES[eyebrowColor]}`}>
            <span className="w-1 h-1 rounded-full" style={{ background: eyebrowColor === 'emerald' ? '#10B981' : eyebrowColor === 'gold' ? '#F59E0B' : '#2563EB' }} />
            {eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-4 md:mt-5 text-fluid-4xl md:text-fluid-5xl font-bold text-[#0F172A] leading-[1.05] max-w-4xl">
            {title}
          </h1>
        </Reveal>

        {subtitle && (
          <Reveal delay={0.2}>
            <p className="mt-4 md:mt-5 text-fluid-base md:text-fluid-lg text-[#475569] leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
