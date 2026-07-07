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
    <section className="relative pt-20 md:pt-24 pb-6 md:pb-8 overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white">
      {/* Decorative blobs — subtle */}
      <div className="absolute top-0 -left-20 w-56 h-56 rounded-full opacity-[0.08] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
      <div className="absolute top-8 -right-20 w-64 h-64 rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }} />
      {/* Thin grid pattern */}
      <div className="absolute inset-0 bg-grid-premium pointer-events-none" />

      <div className="container-premium relative">
        {/* Back button — compact, tight to navbar */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('home')}
          className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E2E8F0] shadow-soft text-xs font-medium text-[#475569] hover:text-[#0F172A] hover:border-[#2563EB]/30 transition-all mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          Home
        </motion.button>

        <Reveal>
          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase ${EYEBROW_STYLES[eyebrowColor]}`}>
            <span className="w-1 h-1 rounded-full" style={{ background: eyebrowColor === 'emerald' ? '#10B981' : eyebrowColor === 'gold' ? '#F59E0B' : '#2563EB' }} />
            {eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mt-2.5 text-fluid-3xl md:text-fluid-4xl font-bold text-[#0F172A] leading-[1.12] max-w-3xl">
            {title}
          </h1>
        </Reveal>

        {subtitle && (
          <Reveal delay={0.12}>
            <p className="mt-2.5 text-fluid-sm text-[#475569] leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
