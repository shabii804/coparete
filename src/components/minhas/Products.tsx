'use client';

import { motion } from 'framer-motion';
import { Reveal, StaggerGroup, StaggerItem } from './Reveal';
import SectionHeading from './SectionHeading';
import { ArrowUpRight, Check, Star, Cloud, Database, Shield } from 'lucide-react';

const PRODUCTS = [
  {
    name: 'MinhasERP',
    tagline: 'Enterprise Resource Planning',
    desc: 'Unified platform for finance, HR, inventory, and operations — built for scale.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    price: 'From $499/mo',
    badge: 'Most Popular',
    modules: ['Finance', 'HR & Payroll', 'Inventory', 'CRM'],
    color: '#2563EB',
  },
  {
    name: 'TradeBridge',
    tagline: 'B2B Trading Platform',
    desc: 'Connect suppliers and buyers with smart contracts and real-time analytics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    price: 'Custom',
    badge: 'New',
    modules: ['Smart Contracts', 'Analytics', 'Payments', 'Logistics'],
    color: '#10B981',
  },
  {
    name: 'Skyline CRM',
    tagline: 'Customer Relationship Suite',
    desc: 'Track leads, manage pipelines, and delight customers across every touchpoint.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    price: 'From $29/user/mo',
    badge: '',
    modules: ['Lead Tracking', 'Pipeline', 'Email Sync', 'Reporting'],
    color: '#F59E0B',
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[36rem] h-[36rem] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Featured Products"
          eyebrowColor="emerald"
          title={<>Software that <span className="text-gradient-royal">powers your operations.</span></>}
          description="A suite of enterprise-grade products built and battle-tested across our divisions — ready to deploy in your business today."
        />

        <StaggerGroup className="mt-12 md:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" stagger={0.1}>
          {PRODUCTS.map((p) => (
            <StaggerItem key={p.name}>
              <div className="group h-full flex flex-col rounded-3xl bg-white border border-[#E2E8F0] hover:border-transparent hover:shadow-premium-lg overflow-hidden transition-all duration-500">
                {/* Image */}
                <div className="relative img-zoom aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${p.color}30, transparent)` }} />

                  {/* Badge */}
                  {p.badge && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide text-white"
                      style={{ background: p.color }}>
                      {p.badge}
                    </div>
                  )}

                  {/* Product name on image */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="text-xl font-bold" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                      {p.name}
                    </div>
                    <div className="text-[11px] uppercase tracking-wider opacity-80">{p.tagline}</div>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-5 md:p-6">
                  <p className="text-sm text-[#475569] leading-relaxed">{p.desc}</p>

                  {/* Modules */}
                  <ul className="mt-4 grid grid-cols-2 gap-1.5">
                    {p.modules.map((m) => (
                      <li key={m} className="flex items-center gap-1.5 text-xs text-[#475569]">
                        <Check className="w-3 h-3 flex-shrink-0" style={{ color: p.color }} />
                        {m}
                      </li>
                    ))}
                  </ul>

                  {/* Tech badges */}
                  <div className="mt-4 flex gap-2">
                    <span className="px-2 py-1 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[10px] text-[#475569] inline-flex items-center gap-1">
                      <Cloud className="w-3 h-3" /> Cloud
                    </span>
                    <span className="px-2 py-1 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[10px] text-[#475569] inline-flex items-center gap-1">
                      <Shield className="w-3 h-3" /> SOC 2
                    </span>
                    <span className="px-2 py-1 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[10px] text-[#475569] inline-flex items-center gap-1">
                      <Database className="w-3 h-3" /> API
                    </span>
                  </div>

                  {/* Footer */}
                  <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-[#64748B] uppercase tracking-wider">Pricing</div>
                      <div className="text-sm font-bold text-[#0F172A]">{p.price}</div>
                    </div>
                    <button className="group/btn inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                      style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)` }}>
                      Request Demo
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.3}>
          <div className="mt-10 md:mt-12 text-center">
            <a href="#contact" className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#0F172A] bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:bg-white hover:shadow-premium transition-all">
              View all products
              <ArrowUpRight className="w-4 h-4 text-[#2563EB] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
