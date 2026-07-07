'use client';

import { useState, useEffect } from 'react';
import PageHeader from '../PageHeader';
import CTA from '../CTA';
import { Reveal } from '../Reveal';
import { useNav } from '../NavigationContext';
import { getIcon } from '../IconResolver';
import { Check, Cloud, Shield, Database, ArrowUpRight, Star, FileText, BookOpen } from 'lucide-react';

function parseJSON(val: string | null | undefined, fallback: any[] = []): any[] {
  if (!val) return fallback;
  try { return JSON.parse(val); } catch { return fallback; }
}

const FALLBACK_PRODUCTS = [
  { name: 'MinhasERP', tagline: 'Enterprise Resource Planning', color: '#2563EB', badge: 'Most Popular', icon: 'Cpu', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', overview: 'Unified enterprise platform for finance, HR, inventory, and operations.', features: ['Multi-company accounting','HR & payroll','Real-time inventory','CRM'], modules: ['Finance','HR','Inventory','CRM'], benefits: ['40% cost reduction','3x faster close'], price: 'From $499/mo' },
  { name: 'EduFlow LMS', tagline: 'School Management System', color: '#10B981', badge: 'For Education', icon: 'GraduationCap', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', overview: 'Complete school and campus management platform.', features: ['Admissions','Attendance','Grading','LMS'], modules: ['Admissions','Attendance','Grading','LMS'], benefits: ['45% less admin work','Better engagement'], price: 'From $1/student/mo' },
  { name: 'RetailOne POS', tagline: 'Point of Sale & Retail', color: '#F59E0B', badge: 'For Retail', icon: 'ShoppingCart', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', overview: 'Cloud-based POS for retail and restaurants.', features: ['Fast checkout','Inventory sync','Payments','Offline mode'], modules: ['POS','Inventory','Payments','Loyalty'], benefits: ['Faster checkout','Higher repeat rates'], price: 'From $29/store/mo' },
  { name: 'MinhasAI', tagline: 'AI & Automation Platform', color: '#6366F1', badge: 'New', icon: 'Brain', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', overview: 'Embed LLM-powered chatbots and predictive analytics.', features: ['LLM integration','Chatbots','Document AI','Vision'], modules: ['Chatbots','Document AI','Vision','Analytics'], benefits: ['Automate tasks','Faster decisions'], price: 'Custom' },
];

export default function ProductsPage() {
  const { openQuote } = useNav();
  const [products, setProducts] = useState(FALLBACK_PRODUCTS);

  useEffect(() => {
    fetch('/api/products').then(r => r.json()).then(data => {
      if (Array.isArray(data) && data.length > 0) {
        setProducts(data.map(p => ({
          name: p.name,
          tagline: p.tagline,
          color: p.color || '#2563EB',
          badge: p.badge,
          icon: p.icon || 'Cpu',
          image: p.image,
          overview: p.description,
          features: parseJSON(p.features, []),
          modules: parseJSON(p.modules, []),
          benefits: parseJSON(p.benefits, []),
          price: p.price,
        })));
      }
    }).catch(() => {});
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Our Products"
        eyebrowColor="emerald"
        title={<>Products that <span className="text-gradient-royal">power businesses.</span></>}
        subtitle="A suite of enterprise-grade software products — battle-tested across industries and ready to deploy in your business today."
      />

      <section className="relative py-8 md:py-12 bg-white overflow-hidden">
        <div className="container-premium relative space-y-8 md:space-y-12">
          {products.map((p, idx) => {
            const Icon = getIcon(p.icon);
            return (
              <Reveal key={idx} y={30}>
                <div id={`product-${idx}`} className="rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] overflow-hidden shadow-premium">
                  <div className="relative aspect-[21/9] overflow-hidden img-zoom">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${p.color}30, transparent)` }} />
                    {p.badge && (
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide text-white" style={{ background: p.color }}>{p.badge}</div>
                    )}
                    <div className="absolute bottom-4 left-4 md:left-8 text-white flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl inline-flex items-center justify-center shadow-glow-blue" style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)` }}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl md:text-3xl font-extrabold" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{p.name}</div>
                        <div className="text-xs uppercase tracking-wider opacity-80">{p.tagline}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 md:p-8">
                    <p className="text-fluid-sm text-[#475569] leading-relaxed max-w-3xl">{p.overview}</p>
                    <div className="mt-6 grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A] mb-3">Key Features</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {p.features.map((f: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-[#475569]">
                              <Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: p.color }} />{f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A] mb-3">Modules</h3>
                        <div className="flex flex-wrap gap-1.5">
                          {p.modules.map((m: string, i: number) => (
                            <span key={i} className="px-2.5 py-1 rounded-lg bg-white border border-[#E2E8F0] text-xs font-medium text-[#0F172A]">{m}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-4 rounded-xl bg-white border border-[#E2E8F0]">
                      <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A] mb-2.5">Benefits</h3>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                        {p.benefits.map((b: string, i: number) => (
                          <div key={i} className="flex items-center gap-2 text-[11px] text-[#475569]">
                            <Star className="w-3.5 h-3.5 flex-shrink-0" style={{ color: p.color }} />{b}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-5 border-t border-[#E2E8F0]">
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2 py-1 rounded-md bg-white border border-[#E2E8F0] text-[10px] text-[#475569] inline-flex items-center gap-1"><Cloud className="w-3 h-3" /> Cloud</span>
                        <span className="px-2 py-1 rounded-md bg-white border border-[#E2E8F0] text-[10px] text-[#475569] inline-flex items-center gap-1"><Shield className="w-3 h-3" /> SOC 2</span>
                        <span className="px-2 py-1 rounded-md bg-white border border-[#E2E8F0] text-[10px] text-[#475569] inline-flex items-center gap-1"><Database className="w-3 h-3" /> API</span>
                        <span className="px-2 py-1 rounded-md bg-white border border-[#E2E8F0] text-[10px] text-[#475569] inline-flex items-center gap-1"><BookOpen className="w-3 h-3" /> Docs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="text-[10px] text-[#64748B] uppercase">Pricing</div>
                          <div className="text-xs font-bold text-[#0F172A]">{p.price}</div>
                        </div>
                        <button onClick={openQuote} className="group inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white transition-all hover:-translate-y-0.5"
                          style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)`, boxShadow: `0 4px 16px ${p.color}30` }}>
                          <FileText className="w-3.5 h-3.5" />Request Demo<ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                      </div>
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
