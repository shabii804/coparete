'use client';

import PageHeader from '../PageHeader';
import CTA from '../CTA';
import { Reveal } from '../Reveal';
import FAQ from '../FAQ';
import { Cpu, Brain, ShoppingCart, GraduationCap, Monitor, Database, Check, Code2, Cloud, Shield } from 'lucide-react';

const SERVICES = [
  {
    icon: Cpu, title: 'ERP Systems', color: '#2563EB',
    desc: 'Unified enterprise resource planning platforms that bring finance, HR, inventory, and operations under one roof. Built for mid-to-large enterprises, our ERP replaces fragmented spreadsheets and legacy systems with a single source of truth — accessible from any device, anywhere.',
    features: ['Multi-company accounting', 'HR & payroll with self-service', 'Real-time inventory across warehouses', 'CRM with pipeline automation', 'Customizable dashboards', 'REST API & webhooks', 'Role-based access control', 'Mobile apps (iOS & Android)'],
    benefits: ['40% reduction in operational costs', '3x faster month-end close', 'Single source of truth across teams', 'SOC 2 compliant security'],
  },
  {
    icon: Brain, title: 'AI & Machine Learning', color: '#10B981',
    desc: 'Practical AI solutions that drive real business outcomes. From LLM-powered chatbots and document processing to computer vision and predictive analytics, we help organizations embed intelligence into their products and workflows — responsibly and at scale.',
    features: ['LLM integration (OpenAI, open-source)', 'Custom chatbots & assistants', 'Document processing & OCR', 'Computer vision models', 'Predictive analytics', 'Recommendation engines', 'RAG pipelines', 'MLOps & model monitoring'],
    benefits: ['Automate repetitive tasks', 'Faster, more accurate decisions', 'Personalized customer experiences', 'Reduced operational costs'],
  },
  {
    icon: ShoppingCart, title: 'POS Systems', color: '#F59E0B',
    desc: 'Cloud-based point-of-sale systems for retail, restaurants, and omnichannel commerce. Fast checkout, real-time inventory sync, integrated payments, and deep analytics — all in an intuitive interface your staff will love.',
    features: ['Lightning-fast checkout', 'Real-time inventory sync', 'Integrated payments (card, wallet)', 'Offline mode with auto-sync', 'Multi-location management', 'Loyalty & promotions', 'Kitchen display system (KDS)', 'Mobile POS tablets'],
    benefits: ['Faster checkout, shorter queues', 'Omnichannel inventory accuracy', 'Higher repeat purchase rates', 'Detailed sales analytics'],
  },
  {
    icon: GraduationCap, title: 'School Management', color: '#2563EB',
    desc: 'Complete school and campus management software — from admissions and attendance to grading, parent portals, and online classes. Designed for K-12 schools, universities, and tutoring centers.',
    features: ['Online admissions & enrollment', 'Attendance (biometric, QR, manual)', 'Grading & report cards', 'Timetable scheduling', 'Online classes & LMS', 'Fee management & invoicing', 'Parent & student portals', 'Library & transport management'],
    benefits: ['45% reduction in admin workload', 'Better parent engagement', 'Paperless operations', 'Real-time student insights'],
  },
  {
    icon: Monitor, title: 'Desktop Applications', color: '#10B981',
    desc: 'Cross-platform desktop applications built with Electron and Tauri. Whether you need an offline-first POS, a specialized industry tool, or a companion app for your SaaS — we ship native-feeling desktop apps for Windows, macOS, and Linux.',
    features: ['Cross-platform (Win/Mac/Linux)', 'Offline-first architecture', 'Auto-update mechanism', 'Native menus & shortcuts', 'Hardware integration (printers, scanners)', 'Secure local data storage', 'Custom branding & theming', 'Code-signed installers'],
    benefits: ['Works without internet', 'Native performance & UX', 'Lower SaaS infrastructure costs', 'Hardware peripheral support'],
  },
  {
    icon: Database, title: 'Custom Software', color: '#F59E0B',
    desc: 'Tailored web, mobile, and backend software built to your exact specifications. From MVPs to enterprise platforms, we handle the full lifecycle — discovery, design, engineering, QA, deployment, and ongoing support.',
    features: ['Web applications (React, Next.js)', 'Mobile apps (iOS, Android, React Native)', 'Backend APIs (Node.js, Python, Go)', 'Database design & optimization', 'Cloud architecture (AWS, GCP, Azure)', 'DevOps & CI/CD pipelines', 'Third-party integrations', '24/7 monitoring & support'],
    benefits: ['Built for your exact workflow', 'Scalable from day one', 'Modern, maintainable codebase', 'Dedicated support team'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        eyebrowColor="blue"
        title={<>Software solutions for <span className="text-gradient-royal">every business need.</span></>}
        subtitle="From ERP to AI, POS to school management — we engineer products that scale with your business."
      />

      {/* Services detail */}
      <section className="relative py-8 md:py-12 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[32rem] h-[32rem] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
        <div className="container-premium relative space-y-8 md:space-y-12">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            const reversed = idx % 2 === 1;
            return (
              <Reveal key={s.title} y={30}>
                <div id={`service-${idx}`} className={`grid lg:grid-cols-2 gap-6 lg:gap-10 items-center ${reversed ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Visual */}
                  <div className={reversed ? 'lg:col-start-2' : ''}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-premium-lg img-zoom">
                      <img src={[
                        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                        'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                        'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                      ][idx]} alt={s.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
                      <div className="absolute top-3 left-3 w-11 h-11 rounded-xl inline-flex items-center justify-center shadow-glow-blue"
                        style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}cc)` }}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  {/* Content */}
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
                          {s.features.slice(0, 6).map((f) => (
                            <li key={f} className="flex items-center gap-2 text-xs text-[#475569]">
                              <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.color }} />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A] mb-2.5">Benefits</h4>
                        <ul className="space-y-1.5">
                          {s.benefits.map((b) => (
                            <li key={b} className="flex items-center gap-2 text-xs text-[#475569]">
                              <Check className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* Tech badges */}
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
