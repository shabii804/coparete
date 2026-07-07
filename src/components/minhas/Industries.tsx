'use client';

import { motion } from 'framer-motion';
import { Reveal, StaggerGroup, StaggerItem } from './Reveal';
import SectionHeading from './SectionHeading';
import { GraduationCap, HeartPulse, ShoppingBag, Factory, Building2, Home, UtensilsCrossed, Truck, Landmark, ArrowUpRight } from 'lucide-react';

const INDUSTRIES = [
  { icon: GraduationCap, name: 'Education', desc: 'LMS, student portals, and campus management systems.', color: '#2563EB' },
  { icon: HeartPulse, name: 'Healthcare', desc: 'EMR, telemedicine, and patient engagement platforms.', color: '#10B981' },
  { icon: ShoppingBag, name: 'Retail', desc: 'POS, e-commerce, and inventory optimization tools.', color: '#F59E0B' },
  { icon: Factory, name: 'Manufacturing', desc: 'ERP, supply chain, and predictive maintenance.', color: '#2563EB' },
  { icon: Building2, name: 'Real Estate', desc: 'Property management, CRM, and tenant portals.', color: '#10B981' },
  { icon: Home, name: 'Construction', desc: 'Project tracking, BIM, and contractor management.', color: '#F59E0B' },
  { icon: UtensilsCrossed, name: 'Restaurants', desc: 'POS, kitchen displays, and delivery integrations.', color: '#2563EB' },
  { icon: Truck, name: 'Logistics', desc: 'Fleet management, route optimization, WMS.', color: '#10B981' },
  { icon: Landmark, name: 'Government', desc: 'Citizen services, e-governance, and compliance.', color: '#F59E0B' },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-20 md:py-32 bg-[#F8FAFC] overflow-hidden">
      <div className="absolute inset-0 bg-dot opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[36rem] h-[36rem] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }} />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Industries We Serve"
          eyebrowColor="gold"
          title={<>Deep expertise across <span className="text-gradient-royal">nine industries.</span></>}
          description="We don't believe in one-size-fits-all. Each industry has its own challenges, regulations, and rhythms — and we build accordingly."
        />

        <StaggerGroup className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-5" stagger={0.07}>
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <StaggerItem key={ind.name}>
                <a
                  href="#contact"
                  className="group relative block p-5 md:p-7 rounded-2xl md:rounded-3xl bg-white border border-[#E2E8F0] hover:border-transparent hover:shadow-premium-lg overflow-hidden transition-all duration-500 hover-lift h-full"
                >
                  {/* Gradient accent on hover */}
                  <div
                    className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle, ${ind.color}50, transparent 70%)` }}
                  />

                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl inline-flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{ background: `linear-gradient(135deg, ${ind.color}15, ${ind.color}25)` }}
                    >
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: `linear-gradient(135deg, ${ind.color}, ${ind.color}cc)` }}
                      />
                      <Icon className="relative w-6 h-6 md:w-7 md:h-7 transition-colors duration-500 group-hover:text-white"
                        style={{ color: ind.color }} />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#2563EB] transition-colors" />
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-[#0F172A] mb-1.5"
                    style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                    {ind.name}
                  </h3>
                  <p className="text-xs md:text-sm text-[#475569] leading-relaxed">{ind.desc}</p>
                </a>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
