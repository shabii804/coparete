'use client';

import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  eyebrowColor?: 'blue' | 'emerald' | 'gold' | 'dark';
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

const EYEBROW_STYLES = {
  blue: 'bg-[#2563EB]/8 text-[#2563EB]',
  emerald: 'bg-[#10B981]/8 text-[#10B981]',
  gold: 'bg-[#F59E0B]/10 text-[#F59E0B]',
  dark: 'glass-dark text-white',
};

export default function SectionHeading({
  eyebrow,
  eyebrowColor = 'blue',
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const dotColor = eyebrowColor === 'emerald' ? '#10B981' : eyebrowColor === 'gold' ? '#F59E0B' : '#2563EB';
  return (
    <div className={`${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-xl'} ${className}`}>
      <Reveal>
        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase ${EYEBROW_STYLES[eyebrowColor]}`}>
          <span className="w-1 h-1 rounded-full" style={{ background: dotColor }} />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-3 text-fluid-2xl md:text-fluid-3xl font-bold leading-[1.12] text-[#0F172A]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.15}>
          <p className={`mt-3 text-fluid-sm md:text-fluid-base text-[#475569] leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
