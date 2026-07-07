'use client';

import PageHeader from '../PageHeader';
import CTA from '../CTA';
import { Reveal } from '../Reveal';
import { useNav } from '../NavigationContext';
import { Check, Cloud, Shield, Database, ArrowUpRight, Star, FileText, BookOpen } from 'lucide-react';

const PRODUCTS = [
  {
    name: 'MinhasERP',
    tagline: 'Enterprise Resource Planning',
    color: '#2563EB',
    badge: 'Most Popular',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    overview: 'MinhasERP is a unified enterprise platform that brings finance, HR, inventory, and operations under one roof. Built for mid-to-large enterprises, it replaces fragmented spreadsheets and legacy systems with a single source of truth — accessible from any device, anywhere.',
    features: ['Multi-company, multi-currency accounting', 'HR & payroll with self-service portal', 'Real-time inventory across warehouses', 'CRM with pipeline and automation', 'Customizable dashboards and reports', 'Role-based access control', 'REST API and webhooks', 'Mobile apps (iOS & Android)'],
    modules: ['Finance & Accounting', 'HR & Payroll', 'Inventory & Warehousing', 'CRM & Sales', 'Procurement', 'Manufacturing', 'Project Management', 'Analytics & BI'],
    benefits: ['40% reduction in operational costs', '3x faster month-end close', 'Single source of truth across teams', 'SOC 2 compliant data security'],
    price: 'From $499/mo',
  },
  {
    name: 'TradeBridge',
    tagline: 'B2B Trading Platform',
    color: '#10B981',
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    overview: 'TradeBridge connects suppliers and buyers on a single intelligent platform with smart contracts, real-time analytics, and built-in payments. Designed for B2B trading networks, it handles everything from RFQs to fulfillment — processing over $400M in annual transactions.',
    features: ['Smart contract automation', 'Real-time market analytics', 'Embedded payments & escrow', 'Multi-party logistics tracking', 'Supplier verification & ratings', 'Custom workflow builder', 'API for ERP integration', 'Audit trail and compliance'],
    modules: ['Marketplace', 'Smart Contracts', 'Payments & Escrow', 'Logistics', 'Analytics', 'Compliance', 'Supplier Portal', 'Buyer Portal'],
    benefits: ['60% faster deal cycles', 'Reduced dispute resolution time', 'Transparent, auditable transactions', 'Lower transaction costs'],
    price: 'Custom',
  },
  {
    name: 'Skyline CRM',
    tagline: 'Customer Relationship Suite',
    color: '#F59E0B',
    badge: '',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    overview: 'Skyline CRM helps sales teams track leads, manage pipelines, and delight customers across every touchpoint. With email sync, call logging, and automation built in, your team spends less time on admin and more time closing deals — all in an intuitive interface your team will actually use.',
    features: ['Visual pipeline management', 'Two-way email sync', 'Call logging & recording', 'Meeting scheduler', 'Automated follow-ups', 'Custom fields and tags', 'Team collaboration', 'Mobile app with offline mode'],
    modules: ['Lead Management', 'Sales Pipeline', 'Email & Calls', 'Meeting Scheduler', 'Automation', 'Reporting', 'Team Chat', 'Mobile App'],
    benefits: ['35% increase in conversion rates', '50% less time on admin tasks', 'Better forecast accuracy', 'Improved customer retention'],
    price: 'From $29/user/mo',
  },
];

export default function ProductsPage() {
  const { openQuote } = useNav();
  return (
    <>
      <PageHeader
        eyebrow="Our Products"
        eyebrowColor="emerald"
        title={<>Software that <span className="text-gradient-royal">powers your operations.</span></>}
        subtitle="A suite of enterprise-grade products built and battle-tested across our divisions — ready to deploy in your business today."
      />

      <section className="relative py-8 md:py-12 bg-white overflow-hidden">
        <div className="container-premium space-y-16 md:space-y-24">
          {PRODUCTS.map((p, idx) => (
            <Reveal key={p.name} y={40}>
              <div id={`product-${idx}`} className="rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] overflow-hidden shadow-premium">
                {/* Hero image */}
                <div className="relative aspect-[21/9] overflow-hidden img-zoom">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${p.color}30, transparent)` }} />
                  {p.badge && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide text-white" style={{ background: p.color }}>
                      {p.badge}
                    </div>
                  )}
                  <div className="absolute bottom-5 left-5 md:left-8 text-white">
                    <div className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{p.name}</div>
                    <div className="text-sm uppercase tracking-wider opacity-80">{p.tagline}</div>
                  </div>
                </div>

                <div className="p-6 md:p-10">
                  {/* Overview */}
                  <p className="text-fluid-base text-[#475569] leading-relaxed max-w-3xl">{p.overview}</p>

                  {/* Features + Modules */}
                  <div className="mt-8 grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-[#0F172A] mb-4">Key Features</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-[#475569]">
                            <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: p.color }} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-[#0F172A] mb-4">Modules</h3>
                      <div className="flex flex-wrap gap-2">
                        {p.modules.map((m) => (
                          <span key={m} className="px-3 py-1.5 rounded-lg bg-white border border-[#E2E8F0] text-xs font-medium text-[#0F172A]">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mt-8 p-5 rounded-2xl bg-white border border-[#E2E8F0]">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#0F172A] mb-3">Benefits</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {p.benefits.map((b) => (
                        <div key={b} className="flex items-center gap-2 text-xs text-[#475569]">
                          <Star className="w-3.5 h-3.5 flex-shrink-0" style={{ color: p.color }} />
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech badges + CTA */}
                  <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#E2E8F0]">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 rounded-md bg-white border border-[#E2E8F0] text-[10px] text-[#475569] inline-flex items-center gap-1"><Cloud className="w-3 h-3" /> Cloud</span>
                      <span className="px-2 py-1 rounded-md bg-white border border-[#E2E8F0] text-[10px] text-[#475569] inline-flex items-center gap-1"><Shield className="w-3 h-3" /> SOC 2</span>
                      <span className="px-2 py-1 rounded-md bg-white border border-[#E2E8F0] text-[10px] text-[#475569] inline-flex items-center gap-1"><Database className="w-3 h-3" /> API</span>
                      <span className="px-2 py-1 rounded-md bg-white border border-[#E2E8F0] text-[10px] text-[#475569] inline-flex items-center gap-1"><BookOpen className="w-3 h-3" /> Docs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="text-[10px] text-[#64748B] uppercase">Pricing</div>
                        <div className="text-sm font-bold text-[#0F172A]">{p.price}</div>
                      </div>
                      <button onClick={openQuote} className="group inline-flex items-center gap-1.5 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                        style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)`, boxShadow: `0 4px 20px ${p.color}30` }}>
                        <FileText className="w-4 h-4" />
                        Request Demo
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
