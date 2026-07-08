'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../PageHeader';
import CTA from '../CTA';
import { Reveal } from '../Reveal';
import { ArrowUpRight } from 'lucide-react';

function parseJSON(val: string | null | undefined, fallback: any[] = []): any[] {
  if (!val) return fallback;
  try { return JSON.parse(val); } catch { return fallback; }
}

const FALLBACK_PROJECTS = [
  { id: '1', title: 'MinhasERP', category: 'Enterprise', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', desc: 'Unified ERP for finance, HR, and operations.', tech: ['Next.js','Node.js','AWS'], color: '#2563EB', gradient: 'linear-gradient(135deg, #2563EB, #3B82F6)', stat: '500+ companies' },
  { id: '2', title: 'EduFlow LMS', category: 'Education', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', desc: 'Learning management for 12K+ students.', tech: ['React','GraphQL','PostgreSQL'], color: '#10B981', gradient: 'linear-gradient(135deg, #059669, #10B981)', stat: '12K+ students' },
  { id: '3', title: 'RetailOne POS', category: 'Retail', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', desc: 'Omnichannel POS across 50 stores.', tech: ['React','Node.js','Redis'], color: '#F59E0B', gradient: 'linear-gradient(135deg, #D97706, #F59E0B)', stat: '50+ stores' },
  { id: '4', title: 'MinhasAI', category: 'Technology', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', desc: 'AI & automation platform.', tech: ['Python','OpenAI','LangChain'], color: '#6366F1', gradient: 'linear-gradient(135deg, #4F46E5, #6366F1)', stat: 'Custom' },
];

export default function PortfolioPage() {
  const [projects, setProjects] = useState(FALLBACK_PROJECTS);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetch('/api/products').then(r => r.json()).then(data => {
      if (Array.isArray(data) && data.length > 0) {
        setProjects(data.map(p => ({
          id: p.id,
          title: p.name,
          category: p.badge || p.tagline || 'Product',
          image: p.image,
          desc: p.tagline || p.description,
          tech: parseJSON(p.modules, []),
          color: p.color || '#2563EB',
          gradient: p.gradient || 'linear-gradient(135deg, #2563EB, #3B82F6)',
          stat: p.price || '',
        })));
      }
    }).catch(() => {});
  }, []);

  const FILTERS = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        eyebrowColor="blue"
        title={<>Work that <span className="text-gradient-royal">speaks for itself.</span></>}
        subtitle="A selection of recent projects across our divisions — each one a testament to craft, scale, and long-term thinking."
      />

      <section className="relative py-8 md:py-12 bg-white overflow-hidden">
        <div className="container-premium relative">
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-10">
              {FILTERS.map((f) => (
                <button key={f} onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    filter === f ? 'bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white shadow-premium' : 'bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0] hover:border-[#2563EB]/40'
                  }`}>{f}</button>
              ))}
            </div>
          </Reveal>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {visible.map((p, i) => (
                <motion.div key={p.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl shadow-premium hover:shadow-premium-lg aspect-[4/5]">
                  <div className="img-zoom absolute inset-0">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-overlay" style={{ background: p.gradient }} />
                  <div className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: p.gradient }} />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full glass-dark text-[10px] font-semibold uppercase text-white">{p.category}</span>
                    {p.stat && <span className="px-2.5 py-1 rounded-full text-[10px] font-bold text-white" style={{ background: p.color }}>{p.stat}</span>}
                  </div>
                  <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                    <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{p.title}</h3>
                    <p className="text-xs text-white/80 mb-3">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t: string, ti: number) => (
                        <span key={ti} className="px-1.5 py-0.5 rounded text-[9px] bg-white/10 backdrop-blur">{t}</span>
                      ))}
                    </div>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                      <span className="px-3 py-1.5 rounded-lg" style={{ background: p.color }}>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
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
