'use client';

import { motion } from 'framer-motion';
import { Reveal, StaggerGroup, StaggerItem } from './Reveal';
import SectionHeading from './SectionHeading';
import { useNav } from './NavigationContext';
import {
  GraduationCap, HeartPulse, ShoppingBag, Factory, Building2, Home,
  UtensilsCrossed, Truck, Landmark, ArrowUpRight,
} from 'lucide-react';

// Each industry has a distinct, vibrant brand-style color
const INDUSTRIES = [
  { icon: GraduationCap, name: 'Education', desc: 'LMS, student portals, and campus management.', color: '#3B82F6', bg: '#EFF6FF' },
  { icon: HeartPulse, name: 'Healthcare', desc: 'EMR, telemedicine, and patient platforms.', color: '#EC4899', bg: '#FDF2F8' },
  { icon: ShoppingBag, name: 'Retail', desc: 'POS, e-commerce, and inventory tools.', color: '#F59E0B', bg: '#FFFBEB' },
  { icon: Factory, name: 'Manufacturing', desc: 'ERP, supply chain, and maintenance.', color: '#6366F1', bg: '#EEF2FF' },
  { icon: Building2, name: 'Real Estate', desc: 'Property management, CRM, and portals.', color: '#10B981', bg: '#ECFDF5' },
  { icon: Home, name: 'Construction', desc: 'Project tracking, BIM, and contractors.', color: '#F97316', bg: '#FFF7ED' },
  { icon: UtensilsCrossed, name: 'Restaurants', desc: 'POS, kitchen displays, and delivery.', color: '#EF4444', bg: '#FEF2F2' },
  { icon: Truck, name: 'Logistics', desc: 'Fleet, route optimization, and WMS.', color: '#06B6D4', bg: '#ECFEFF' },
  { icon: Landmark, name: 'Government', desc: 'Citizen services, e-governance, compliance.', color: '#8B5CF6', bg: '#F5F3FF' },
];

// Marquee items — colorful "logo chips"
const MARQUEE_ITEMS = [...INDUSTRIES, ...INDUSTRIES];

export default function Industries() {
  const { navigate } = useNav();

  return (
    <section id="industries" className="relative py-10 md:py-14 bg-[#F8FAFC] overflow-hidden">
      <div className="absolute inset-0 bg-dot opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[32rem] h-[32rem] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }} />

      <div className="relative">
        {/* Colorful marquee at top — colorful industry logos */}
        <div className="marquee-mask mb-8 md:mb-10">
          <div className="flex w-max animate-marquee gap-2 sm:gap-2.5 md:gap-3 px-4">
            {MARQUEE_ITEMS.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div
                  key={`m-${i}`}
                  className="group flex items-center gap-2 px-3 sm:px-3.5 md:px-4 py-2.5 md:py-3 rounded-xl md:rounded-2xl border flex-shrink-0 transition-all hover:scale-105 relative overflow-hidden"
                  style={{ background: ind.bg, borderColor: `${ind.color}30` }}
                >
                  <div
                    className="relative w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg md:rounded-xl inline-flex items-center justify-center transition-transform group-hover:rotate-6 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg, ${ind.color}, ${ind.color}cc)`, boxShadow: `0 4px 12px ${ind.color}40` }}
                  >
                    <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" strokeWidth={2} />
                    {/* Shine */}
                    <div className="absolute inset-0 rounded-lg md:rounded-xl overflow-hidden">
                      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-30 group-hover:opacity-60 transition-opacity"
                        style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)' }} />
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm md:text-sm font-bold whitespace-nowrap" style={{ color: ind.color, fontFamily: 'var(--font-display), sans-serif' }}>
                    {ind.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container-premium">
          <SectionHeading
            eyebrow="Industries We Serve"
            eyebrowColor="gold"
            title={<>Deep expertise across <span className="text-gradient-royal">nine industries.</span></>}
            description="We don't believe in one-size-fits-all. Each industry has its own challenges, regulations, and rhythms — and we build accordingly."
          />

          <StaggerGroup className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4" stagger={0.07}>
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <StaggerItem key={ind.name}>
                  <button
                    onClick={() => navigate('industries')}
                    className="group relative block w-full p-4 md:p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-transparent hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-500 h-full text-center"
                  >
                    {/* Top gradient accent line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                      style={{ background: `linear-gradient(90deg, ${ind.color}, transparent)` }}
                    />
                    {/* Centered glow on hover */}
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(circle, ${ind.color}40, transparent 70%)` }}
                    />

                    <div className="relative flex flex-col items-center">
                      {/* Premium gradient icon — centered */}
                      <div
                        className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl inline-flex items-center justify-center mb-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                        style={{ background: `linear-gradient(135deg, ${ind.color}, ${ind.color}cc)`, boxShadow: `0 8px 24px ${ind.color}40` }}
                      >
                        <Icon className="relative w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={2} />
                        {/* Shine */}
                        <div className="absolute inset-0 rounded-2xl overflow-hidden">
                          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                            style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)' }} />
                        </div>
                        {/* Pulse ring */}
                        <div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                          style={{ border: `2px solid ${ind.color}99`, animation: 'pulse-ring 2s ease-out infinite' }}
                        />
                      </div>

                      <h3 className="text-sm md:text-base font-bold text-[#0F172A] mb-1"
                        style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                        {ind.name}
                      </h3>
                      <p className="text-[11px] md:text-xs text-[#475569] leading-relaxed">{ind.desc}</p>

                      {/* Learn more — appears on hover */}
                      <div className="mt-2.5 inline-flex items-center gap-1 text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0" style={{ color: ind.color }}>
                        Learn More
                        <ArrowUpRight className="w-3 h-3" />
                      </div>
                    </div>
                  </button>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
