'use client';

import { useState, useEffect } from 'react';
import PageHeader from '../PageHeader';
import CTA from '../CTA';
import { Reveal } from '../Reveal';
import { getIcon } from '../IconResolver';
import { AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

function parseJSON(val: string | null | undefined, fallback: any[] = []): any[] {
  if (!val) return fallback;
  try { return JSON.parse(val); } catch { return fallback; }
}

const FALLBACK_INDUSTRIES = [
  { icon: 'GraduationCap', name: 'Education', color: '#3B82F6', bg: '#EFF6FF', challenges: ['Outdated LMS','Fragmented data'], solutions: ['LMS with live classes','Unified SIS'], story: 'Deployed a unified campus platform for 12,000 students.' },
  { icon: 'HeartPulse', name: 'Healthcare', color: '#EC4899', bg: '#FDF2F8', challenges: ['Siloed records','Slow scheduling'], solutions: ['EMR with sharing','Online booking'], story: 'Built a telemedicine platform serving 200K+ patients.' },
  { icon: 'ShoppingBag', name: 'Retail', color: '#F59E0B', bg: '#FFFBEB', challenges: ['Inventory mismatches','Slow checkout'], solutions: ['Unified POS','Real-time sync'], story: 'Implemented omnichannel retail for a 50-store chain.' },
  { icon: 'Factory', name: 'Manufacturing', color: '#6366F1', bg: '#EEF2FF', challenges: ['Unplanned downtime','Supply chain gaps'], solutions: ['ERP with production planning','IoT predictive maintenance'], story: 'Deployed predictive maintenance, cutting downtime by 40%.' },
  { icon: 'Building2', name: 'Real Estate', color: '#10B981', bg: '#ECFDF5', challenges: ['Manual management','Slow communication'], solutions: ['Property platform','Tenant portal'], story: 'Launched a property suite for a 2,000-unit portfolio.' },
  { icon: 'Home', name: 'Construction', color: '#F97316', bg: '#FFF7ED', challenges: ['Schedule overruns','Budget leakage'], solutions: ['Project tracking','Contractor portal'], story: 'Built project tracking for a $200M development.' },
  { icon: 'UtensilsCrossed', name: 'Restaurants', color: '#EF4444', bg: '#FEF2F2', challenges: ['Long wait times','Delivery complexity'], solutions: ['Cloud POS','Delivery integration'], story: 'Rolled out POS + delivery across 30 locations.' },
  { icon: 'Truck', name: 'Logistics', color: '#06B6D4', bg: '#ECFEFF', challenges: ['Route inefficiency','Limited visibility'], solutions: ['Route optimization','Real-time tracking'], story: 'Implemented route optimization for a 200-vehicle fleet.' },
  { icon: 'Landmark', name: 'Government', color: '#8B5CF6', bg: '#F5F3FF', challenges: ['Legacy systems','Accessibility'], solutions: ['Citizen portals','Workflow automation'], story: 'Built a citizen services portal processing 500K+ applications.' },
];

export default function IndustriesPage() {
  const [industries, setIndustries] = useState(FALLBACK_INDUSTRIES);

  useEffect(() => {
    fetch('/api/industries').then(r => r.json()).then(data => {
      if (Array.isArray(data) && data.length > 0) {
        setIndustries(data.map(ind => ({
          icon: ind.icon || 'Building2',
          name: ind.name,
          color: ind.color,
          bg: ind.bg,
          challenges: parseJSON(ind.challenges, []),
          solutions: parseJSON(ind.solutions, []),
          story: ind.story,
        })));
      }
    }).catch(() => {});
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Industries We Serve"
        eyebrowColor="gold"
        title={<>Deep expertise across <span className="text-gradient-royal">nine industries.</span></>}
        subtitle="We don't believe in one-size-fits-all. Each industry has its own challenges, regulations, and rhythms — and we build accordingly."
      />

      {/* Colorful industries marquee */}
      <section className="relative py-6 md:py-8 bg-white border-b border-[#E2E8F0] overflow-hidden">
        <div className="marquee-mask">
          <div className="flex w-max animate-marquee gap-2.5 md:gap-3 px-4">
            {[...industries, ...industries].map((ind, i) => {
              const Icon = getIcon(ind.icon);
              return (
                <div key={`m-${i}`} className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl border flex-shrink-0 transition-all hover:scale-105"
                  style={{ background: ind.bg, borderColor: `${ind.color}30` }}>
                  <div className="w-8 h-8 rounded-lg inline-flex items-center justify-center transition-transform group-hover:rotate-6 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg, ${ind.color}, ${ind.color}cc)`, boxShadow: `0 4px 12px ${ind.color}40` }}>
                    <Icon className="w-4 h-4 text-white" strokeWidth={2} />
                  </div>
                  <span className="text-sm font-bold whitespace-nowrap" style={{ color: ind.color, fontFamily: 'var(--font-display), sans-serif' }}>{ind.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-8 md:py-12 bg-[#F8FAFC] overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-40 pointer-events-none" />
        <div className="container-premium relative space-y-4">
          {industries.map((ind, i) => {
            const Icon = getIcon(ind.icon);
            return (
              <Reveal key={i} delay={i * 0.03}>
                <div className="group rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-premium-lg transition-all overflow-hidden">
                  <div className="grid lg:grid-cols-[auto_1fr_1fr_1fr] gap-0">
                    <div className="p-5 md:p-6 flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3 lg:border-r border-[#E2E8F0]">
                      <div className="w-12 h-12 rounded-xl inline-flex items-center justify-center flex-shrink-0"
                        style={{ background: `linear-gradient(135deg, ${ind.color}, ${ind.color}cc)`, boxShadow: `0 6px 16px ${ind.color}30` }}>
                        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: ind.color }}>Industry 0{i + 1}</div>
                        <h3 className="text-base font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{ind.name}</h3>
                      </div>
                    </div>
                    <div className="p-5 md:p-6 lg:border-r border-[#E2E8F0]">
                      <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#0F172A] mb-3">
                        <AlertTriangle className="w-3 h-3 text-[#F59E0B]" /> Challenges
                      </h4>
                      <ul className="space-y-1.5">
                        {ind.challenges.map((c: string, ci: number) => (
                          <li key={ci} className="flex items-start gap-2 text-[11px] text-[#475569] leading-relaxed">
                            <span className="w-1 h-1 rounded-full bg-[#F59E0B] mt-1.5 flex-shrink-0" />{c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-5 md:p-6 lg:border-r border-[#E2E8F0]">
                      <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#0F172A] mb-3">
                        <CheckCircle2 className="w-3 h-3 text-[#10B981]" /> Our Solutions
                      </h4>
                      <ul className="space-y-1.5">
                        {ind.solutions.map((s: string, si: number) => (
                          <li key={si} className="flex items-start gap-2 text-[11px] text-[#475569] leading-relaxed">
                            <CheckCircle2 className="w-3 h-3 text-[#10B981] flex-shrink-0 mt-0.5" />{s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-5 md:p-6 bg-[#F8FAFC]">
                      <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#0F172A] mb-2">
                        <ArrowRight className="w-3 h-3 text-[#2563EB]" /> Success Story
                      </h4>
                      <p className="text-[11px] text-[#475569] leading-relaxed italic">{ind.story}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}
