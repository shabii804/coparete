'use client';

import PageHeader from '../PageHeader';
import CTA from '../CTA';
import { Reveal, StaggerGroup, StaggerItem } from '../Reveal';
import FAQ from '../FAQ';
import { Building2, ShoppingBag, Cpu, Zap, Truck, ShieldCheck, Check, ArrowUpRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Building2, title: 'Real Estate', color: '#2563EB',
    desc: 'Premium residential, commercial, and mixed-use developments that redefine skylines and enrich communities. From luxury residential towers to large-scale commercial complexes, we handle every stage — land acquisition, design, construction, and post-handover property management.',
    features: ['Residential Towers', 'Commercial Spaces', 'Mixed-Use Developments', 'Property Management', 'Land Acquisition', 'Interior Design'],
    benefits: ['End-to-end project delivery', 'Premium locations and finishes', 'On-time, on-budget execution', 'Long-term asset management'],
  },
  {
    icon: ShoppingBag, title: 'Trading & Distribution', color: '#10B981',
    desc: 'A global supply network delivering quality products across consumer, industrial, and specialty categories. Our trading division leverages strategic partnerships across Asia, Europe, and the Middle East to source and distribute at competitive margins without compromising on quality.',
    features: ['Consumer Goods', 'Industrial Supply', 'Specialty Imports', 'Wholesale Distribution', 'Supply Chain Consulting', 'Quality Assurance'],
    benefits: ['Global supplier network', 'Competitive pricing', 'Reliable delivery', 'Quality-controlled sourcing'],
  },
  {
    icon: Cpu, title: 'Technology', color: '#F59E0B',
    desc: 'Software, cloud, and digital transformation solutions that help enterprises operate smarter and faster. Our technology division builds custom software, deploys cloud infrastructure, and leads digital transformation programs for clients across industries — from startups to enterprises.',
    features: ['Software Solutions', 'Cloud Infrastructure', 'Digital Transformation', 'Mobile Applications', 'API Integration', 'Data Analytics'],
    benefits: ['Modern tech stack', 'Scalable architecture', 'Agile delivery', '24/7 support and monitoring'],
  },
  {
    icon: Zap, title: 'Energy', color: '#2563EB',
    desc: 'Sustainable energy investments spanning solar, wind, and next-generation clean power infrastructure. We develop, finance, and operate utility-scale renewable energy projects that deliver both environmental impact and attractive long-term returns for our partners.',
    features: ['Solar Farms', 'Wind Projects', 'Clean Infrastructure', 'Energy Storage', 'Grid Integration', 'Sustainability Consulting'],
    benefits: ['Utility-scale experience', 'PPA negotiation expertise', 'Grid connection management', 'Long-term O&M support'],
  },
  {
    icon: Truck, title: 'Logistics', color: '#10B981',
    desc: 'End-to-end logistics and warehousing infrastructure connecting markets with reliability and speed. Our logistics division operates automated warehouses, manages freight networks, and provides cold-chain solutions that keep goods moving efficiently across the region.',
    features: ['Warehousing', 'Freight Network', 'Cold Chain', 'Last-Mile Delivery', 'Inventory Management', 'Customs Clearance'],
    benefits: ['Automated facilities', 'Real-time tracking', 'Temperature-controlled storage', 'Pan-regional coverage'],
  },
  {
    icon: ShieldCheck, title: 'Investments', color: '#F59E0B',
    desc: 'Strategic capital deployment across high-growth ventures, with disciplined governance and long-term focus. Our investment arm provides venture capital, growth equity, and strategic holdings to companies that align with our values and complement our existing divisions.',
    features: ['Venture Capital', 'Private Equity', 'Strategic Holdings', 'M&A Advisory', 'Portfolio Management', 'Due Diligence'],
    benefits: ['Patient, long-term capital', 'Operational expertise', 'Industry network access', 'Disciplined governance'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        eyebrowColor="blue"
        title={<>Six divisions. <span className="text-gradient-royal">One standard of excellence.</span></>}
        subtitle="Explore each of our service divisions in detail — what we offer, the benefits, and how we deliver."
      />

      {/* Services detail */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[36rem] h-[36rem] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8 space-y-12 md:space-y-20">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            const reversed = idx % 2 === 1;
            return (
              <Reveal key={s.title} y={40}>
                <div id={`service-${idx}`} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${reversed ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Visual */}
                  <div className={reversed ? 'lg:col-start-2' : ''}>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-premium-lg img-zoom">
                      <img src={[
                        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                        'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                        'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                        'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                      ][idx]} alt={s.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
                      <div className="absolute top-4 left-4 w-14 h-14 rounded-2xl inline-flex items-center justify-center shadow-glow-blue"
                        style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}cc)` }}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className={reversed ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: s.color, fontFamily: 'var(--font-display), sans-serif' }}>
                      Division 0{idx + 1}
                    </span>
                    <h2 className="mt-2 text-fluid-2xl md:text-fluid-3xl font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{s.title}</h2>
                    <p className="mt-4 text-fluid-base text-[#475569] leading-relaxed">{s.desc}</p>
                    <div className="mt-6 grid sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-3">Features</h4>
                        <ul className="space-y-2">
                          {s.features.map((f) => (
                            <li key={f} className="flex items-center gap-2 text-sm text-[#475569]">
                              <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.color }} />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {s.benefits.map((b) => (
                            <li key={b} className="flex items-center gap-2 text-sm text-[#475569]">
                              <Check className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      <CTA />
    </>
  );
}
