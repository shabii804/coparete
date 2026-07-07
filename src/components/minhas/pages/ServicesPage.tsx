'use client';

import { useState, useEffect } from 'react';
import PageHeader from '../PageHeader';
import CTA from '../CTA';
import { Reveal } from '../Reveal';
import FAQ from '../FAQ';
import { getIcon } from '../IconResolver';
import { Check, Code2, Cloud, Shield } from 'lucide-react';

function parseJSON(val: string | null | undefined, fallback: any[] = []): any[] {
  if (!val) return fallback;
  try { return JSON.parse(val); } catch { return fallback; }
}

// Fallback data
const FALLBACK_SERVICES = [
  {
    icon: 'Cpu', title: 'ERP Systems', color: '#2563EB',
    desc: 'Unified enterprise resource planning platforms that bring finance, HR, inventory, and operations under one roof.',
    features: ['Multi-company accounting', 'HR & payroll', 'Real-time inventory', 'CRM', 'Dashboards', 'REST API'],
    benefits: ['40% cost reduction', '3x faster close', 'Single source of truth', 'SOC 2 compliant'],
  },
  {
    icon: 'Brain', title: 'AI & Machine Learning', color: '#10B981',
    desc: 'Practical AI solutions that drive real business outcomes — from LLM-powered chatbots to predictive analytics.',
    features: ['LLM integration', 'Custom chatbots', 'Document processing', 'Computer vision', 'Predictive analytics', 'RAG pipelines'],
    benefits: ['Automate tasks', 'Faster decisions', 'Personalized experiences', 'Reduced costs'],
  },
  {
    icon: 'ShoppingCart', title: 'POS Systems', color: '#F59E0B',
    desc: 'Cloud-based point-of-sale systems for retail, restaurants, and omnichannel commerce.',
    features: ['Fast checkout', 'Inventory sync', 'Integrated payments', 'Offline mode', 'Multi-location', 'Loyalty'],
    benefits: ['Faster checkout', 'Omnichannel accuracy', 'Higher repeat rates', 'Sales analytics'],
  },
  {
    icon: 'GraduationCap', title: 'School Management', color: '#6366F1',
    desc: 'Complete school and campus management software — from admissions to grading.',
    features: ['Admissions', 'Attendance', 'Grading', 'Timetable', 'Online classes', 'Fee management'],
    benefits: ['45% less admin work', 'Better engagement', 'Paperless', 'Real-time insights'],
  },
  {
    icon: 'Monitor', title: 'Desktop Applications', color: '#14B8A6',
    desc: 'Cross-platform desktop applications built with Electron and Tauri.',
    features: ['Cross-platform', 'Offline-first', 'Auto-update', 'Native menus', 'Hardware integration', 'Code-signed'],
    benefits: ['Works offline', 'Native performance', 'Lower SaaS costs', 'Hardware support'],
  },
  {
    icon: 'Database', title: 'Custom Software', color: '#EC4899',
    desc: 'Tailored web, mobile, and backend software built to your exact specifications.',
    features: ['Web apps', 'Mobile apps', 'Backend APIs', 'Database design', 'Cloud architecture', 'DevOps'],
    benefits: ['Built for your workflow', 'Scalable', 'Maintainable', 'Dedicated support'],
  },
];

const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
];

export default function ServicesPage() {
  const [services, setServices] = useState(FALLBACK_SERVICES);

  useEffect(() => {
    fetch('/api/services').then(r => r.json()).then(data => {
      if (Array.isArray(data) && data.length > 0) {
        setServices(data.map(s => ({
          icon: s.icon || 'Cpu',
          title: s.title,
          color: s.color || '#2563EB',
          desc: s.description,
          features: parseJSON(s.features, []),
          benefits: parseJSON(s.benefits, []),
        })));
      }
    }).catch(() => {});
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        eyebrowColor="blue"
        title={<>Software solutions for <span className="text-gradient-royal">every business need.</span></>}
        subtitle="From ERP to AI, POS to school management — we engineer products that scale with your business."
      />

      <section className="relative py-8 md:py-12 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[32rem] h-[32rem] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
        <div className="container-premium relative space-y-8 md:space-y-12">
          {services.map((s, idx) => {
            const Icon = getIcon(s.icon);
            const reversed = idx % 2 === 1;
            return (
              <Reveal key={idx} y={30}>
                <div id={`service-${idx}`} className={`grid lg:grid-cols-2 gap-6 lg:gap-10 items-center ${reversed ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={reversed ? 'lg:col-start-2' : ''}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-premium-lg img-zoom">
                      <img src={SERVICE_IMAGES[idx % SERVICE_IMAGES.length]} alt={s.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
                      <div className="absolute top-3 left-3 w-11 h-11 rounded-xl inline-flex items-center justify-center shadow-glow-blue"
                        style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}cc)` }}>
                        <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                  <div className={reversed ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: s.color, fontFamily: 'var(--font-display), sans-serif' }}>
                      Service 0{idx + 1}
                    </span>
                    <h2 className="mt-1.5 text-fluid-2xl font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{s.title}</h2>
                    <p className="mt-3 text-fluid-sm text-[#475569] leading-relaxed">{s.desc}</p>
                    <div className="mt-5 grid sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A] mb-2.5">Features</h4>
                        <ul className="space-y-1.5">
                          {s.features.slice(0, 6).map((f: string, i: number) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-[#475569]">
                              <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.color }} />{f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A] mb-2.5">Benefits</h4>
                        <ul className="space-y-1.5">
                          {s.benefits.map((b: string, i: number) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-[#475569]">
                              <Check className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0" />{b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      <span className="px-2 py-1 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[10px] text-[#475569] inline-flex items-center gap-1"><Code2 className="w-3 h-3" /> Modern Stack</span>
                      <span className="px-2 py-1 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[10px] text-[#475569] inline-flex items-center gap-1"><Cloud className="w-3 h-3" /> Cloud-Native</span>
                      <span className="px-2 py-1 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[10px] text-[#475569] inline-flex items-center gap-1"><Shield className="w-3 h-3" /> SOC 2</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <FAQ />
      <CTA />
    </>
  );
}
