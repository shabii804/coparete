'use client';

import PageHeader from '../PageHeader';
import CTA from '../CTA';
import { Reveal } from '../Reveal';
import { useNav } from '../NavigationContext';
import { Check, Cloud, Shield, Database, ArrowUpRight, Star, FileText, BookOpen, Cpu, Brain, ShoppingCart, GraduationCap, Monitor } from 'lucide-react';

const PRODUCTS = [
  {
    name: 'MinhasERP', tagline: 'Enterprise Resource Planning', color: '#2563EB', badge: 'Most Popular',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    overview: 'MinhasERP is a unified enterprise platform that brings finance, HR, inventory, and operations under one roof. Built for mid-to-large enterprises, it replaces fragmented spreadsheets and legacy systems with a single source of truth — accessible from any device, anywhere.',
    features: ['Multi-company, multi-currency accounting', 'HR & payroll with self-service portal', 'Real-time inventory across warehouses', 'CRM with pipeline and automation', 'Customizable dashboards and reports', 'Role-based access control', 'REST API and webhooks', 'Mobile apps (iOS & Android)'],
    modules: ['Finance & Accounting', 'HR & Payroll', 'Inventory & Warehousing', 'CRM & Sales', 'Procurement', 'Manufacturing', 'Project Management', 'Analytics & BI'],
    benefits: ['40% reduction in operational costs', '3x faster month-end close', 'Single source of truth across teams', 'SOC 2 compliant data security'],
    price: 'From $499/mo',
  },
  {
    name: 'EduFlow LMS', tagline: 'School Management System', color: '#10B981', badge: 'For Education',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    overview: 'EduFlow is a complete school and campus management platform — from admissions and attendance to grading, parent portals, and online classes. Designed for K-12 schools, universities, and tutoring centers.',
    features: ['Online admissions & enrollment', 'Attendance (biometric, QR, manual)', 'Grading & report cards', 'Timetable scheduling', 'Online classes & LMS', 'Fee management & invoicing', 'Parent & student portals', 'Library & transport management'],
    modules: ['Admissions', 'Attendance', 'Grading', 'LMS', 'Fee Management', 'Timetable', 'Parent Portal', 'Analytics'],
    benefits: ['45% reduction in admin workload', 'Better parent engagement', 'Paperless operations', 'Real-time student insights'],
    price: 'From $1/student/mo',
  },
  {
    name: 'RetailOne POS', tagline: 'Point of Sale & Retail', color: '#F59E0B', badge: 'For Retail',
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    overview: 'RetailOne is a cloud-based POS system for retail, restaurants, and omnichannel commerce. Fast checkout, real-time inventory sync, integrated payments, and deep analytics — all in an intuitive interface your staff will love.',
    features: ['Lightning-fast checkout', 'Real-time inventory sync', 'Integrated payments (card, wallet)', 'Offline mode with auto-sync', 'Multi-location management', 'Loyalty & promotions', 'Kitchen display system (KDS)', 'Mobile POS tablets'],
    modules: ['POS', 'Inventory', 'Payments', 'Loyalty', 'Analytics', 'Multi-Location', 'KDS', 'Mobile App'],
    benefits: ['Faster checkout, shorter queues', 'Omnichannel inventory accuracy', 'Higher repeat purchase rates', 'Detailed sales analytics'],
    price: 'From $29/store/mo',
  },
  {
    name: 'MinhasAI', tagline: 'AI & Automation Platform', color: '#2563EB', badge: 'New',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    overview: 'MinhasAI is our AI and automation platform — embed LLM-powered chatbots, document processing, and predictive analytics into your products and workflows. Practical AI that drives real business outcomes.',
    features: ['LLM integration (OpenAI, open-source)', 'Custom chatbots & assistants', 'Document processing & OCR', 'Computer vision models', 'Predictive analytics', 'RAG pipelines', 'Workflow automation', 'Model monitoring'],
    modules: ['Chatbots', 'Document AI', 'Vision', 'Analytics', 'Automation', 'RAG', 'Monitoring', 'API'],
    benefits: ['Automate repetitive tasks', 'Faster, more accurate decisions', 'Personalized customer experiences', 'Reduced operational costs'],
    price: 'Custom',
  },
];

export default function ProductsPage() {
  const { openQuote } = useNav();
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
          {PRODUCTS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.name} y={30}>
                <div id={`product-${idx}`} className="rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] overflow-hidden shadow-premium">
                  {/* Hero image */}
                  <div className="relative aspect-[21/9] overflow-hidden img-zoom">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${p.color}30, transparent)` }} />
                    {p.badge && (
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide text-white" style={{ background: p.color }}>
                        {p.badge}
                      </div>
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
                    {/* Overview */}
                    <p className="text-fluid-sm text-[#475569] leading-relaxed max-w-3xl">{p.overview}</p>

                    {/* Features + Modules */}
                    <div className="mt-6 grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A] mb-3">Key Features</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {p.features.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-xs text-[#475569]">
                              <Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: p.color }} />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A] mb-3">Modules</h3>
                        <div className="flex flex-wrap gap-1.5">
                          {p.modules.map((m) => (
                            <span key={m} className="px-2.5 py-1 rounded-lg bg-white border border-[#E2E8F0] text-xs font-medium text-[#0F172A]">
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mt-6 p-4 rounded-xl bg-white border border-[#E2E8F0]">
                      <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A] mb-2.5">Benefits</h3>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                        {p.benefits.map((b) => (
                          <div key={b} className="flex items-center gap-2 text-[11px] text-[#475569]">
                            <Star className="w-3.5 h-3.5 flex-shrink-0" style={{ color: p.color }} />
                            {b}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech badges + CTA */}
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
                          <FileText className="w-3.5 h-3.5" />
                          Request Demo
                          <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
