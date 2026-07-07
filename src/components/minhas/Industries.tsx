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
                  className="group flex items-center gap-2 px-3 sm:px-3.5 md:px-4 py-2.5 md:py-3 rounded-xl md:rounded-2xl border flex-shrink-0 transition-all hover:scale-105"
                  style={{ background: ind.bg, borderColor: `${ind.color}30` }}
                >
                  <div
                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg md:rounded-xl inline-flex items-center justify-center transition-transform group-hover:rotate-6"
                    style={{ background: `linear-gradient(135deg, ${ind.color}, ${ind.color}cc)`, boxShadow: `0 4px 12px ${ind.color}40` }}
                  >
                    <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
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

          <StaggerGroup className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4" stagger={0.06}>
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <StaggerItem key={ind.name}>
                  <button
                    onClick={() => navigate('industries')}
                    className="group relative block w-full text-left p-4 md:p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-transparent hover:shadow-premium-lg overflow-hidden transition-all duration-500 hover-lift h-full"
                  >
                    {/* Colorful accent on hover */}
                    <div
                      className="absolute -top-12 -right-12 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                      style={{ background: `radial-gradient(circle, ${ind.color}50, transparent 70%)` }}
                    />

                    <div className="flex items-start justify-between mb-3">
                      <div
                        className="relative w-11 h-11 md:w-12 md:h-12 rounded-xl inline-flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                        style={{ background: `linear-gradient(135deg, ${ind.color}, ${ind.color}cc)`, boxShadow: `0 6px 16px ${ind.color}30` }}
                      >
                        <Icon className="relative w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#0F172A] transition-colors" />
                    </div>

                    <h3 className="text-sm md:text-base font-bold text-[#0F172A] mb-1"
                      style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                      {ind.name}
                    </h3>
                    <p className="text-[11px] md:text-xs text-[#475569] leading-relaxed">{ind.desc}</p>
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
