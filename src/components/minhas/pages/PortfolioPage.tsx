'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../PageHeader';
import CTA from '../CTA';
import { Reveal } from '../Reveal';
import { ArrowUpRight, MapPin } from 'lucide-react';

const PROJECTS = [
  { title: 'Skyline Residences', category: 'Real Estate', location: 'Lahore, PK', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', desc: 'A 32-floor luxury residential tower redefining urban living.', tech: ['Next.js', 'Node.js', 'AWS'] },
  { title: 'GreenGrid Solar', category: 'Energy', location: 'Sindh, PK', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', desc: '120MW utility-scale solar farm powering 80,000 homes.', tech: ['IoT', 'Python', 'GCP'] },
  { title: 'TradeBridge Platform', category: 'Technology', location: 'Digital', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', desc: 'B2B trading platform processing $400M annually.', tech: ['React', 'GraphQL', 'PostgreSQL'] },
  { title: 'North Hub Logistics', category: 'Logistics', location: 'Islamabad, PK', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', desc: '500,000 sq ft automated warehousing facility.', tech: ['WMS', 'RFID', 'React Native'] },
  { title: 'Heritage Trade Center', category: 'Real Estate', location: 'Karachi, PK', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', desc: 'Mixed-use commercial complex spanning 18 floors.', tech: ['BIM', 'Project Mgmt', 'ERP'] },
  { title: 'Helix Energy Portal', category: 'Energy', location: 'Balochistan, PK', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', desc: 'Wind farm monitoring dashboard for 80 turbines.', tech: ['Vue.js', 'InfluxDB', 'Grafana'] },
  { title: 'Apex Retail Chain', category: 'Technology', location: 'Pan-Pakistan', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', desc: 'Omnichannel POS across 50 store locations.', tech: ['React', 'Node.js', 'Redis'] },
  { title: 'Bloom Café Network', category: 'Logistics', location: 'Lahore, PK', image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', desc: 'Supply chain for 30 café locations with cold chain.', tech: ['WMS', 'Cold Chain', 'Analytics'] },
  { title: 'Civic Services Portal', category: 'Technology', location: 'Government', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', desc: 'E-governance portal processing 500K applications/year.', tech: ['Next.js', 'PostgreSQL', 'Kubernetes'] },
];

const FILTERS = ['All', 'Real Estate', 'Energy', 'Technology', 'Logistics'];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        eyebrowColor="blue"
        title={<>Work that <span className="text-gradient-royal">speaks for itself.</span></>}
        subtitle="A selection of recent projects across our divisions — each one a testament to craft, scale, and long-term thinking."
      />

      <section className="relative py-10 md:py-16 bg-white overflow-hidden">
        <div className="container-premium">
          {/* Filters */}
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-10">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    filter === f
                      ? 'bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white shadow-premium'
                      : 'bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:text-[#0F172A]'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {visible.map((p, i) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl shadow-premium hover:shadow-premium-lg aspect-[4/5]"
                >
                  <div className="img-zoom absolute inset-0">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent" />
                  <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="px-2 py-0.5 rounded-full bg-white/15 backdrop-blur text-[10px] font-semibold uppercase">{p.category}</span>
                      <span className="inline-flex items-center gap-1 text-[10px] text-white/70"><MapPin className="w-3 h-3" />{p.location}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{p.title}</h3>
                    <p className="text-xs text-white/80 mb-3">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span key={t} className="px-1.5 py-0.5 rounded text-[9px] bg-white/10 backdrop-blur">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
