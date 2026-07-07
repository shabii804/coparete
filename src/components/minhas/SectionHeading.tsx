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
    <div className={`${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      <Reveal>
        <span className={`inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase ${EYEBROW_STYLES[eyebrowColor]}`}>
          <span className="w-1 h-1 rounded-full" style={{ background: dotColor }} />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-4 md:mt-5 text-fluid-3xl md:text-fluid-4xl font-bold leading-[1.08] text-[#0F172A]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className={`mt-4 md:mt-5 text-fluid-base md:text-fluid-lg text-[#475569] leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
