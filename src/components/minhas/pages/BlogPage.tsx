'use client';

import { useState } from 'react';
import PageHeader from '../PageHeader';
import CTA from '../CTA';
import { Reveal, StaggerGroup, StaggerItem } from '../Reveal';
import { Calendar, Clock, ArrowUpRight, Search, Tag } from 'lucide-react';

const CATEGORIES = ['All', 'Strategy', 'Energy', 'Product', 'Technology', 'Leadership'];

const POSTS = [
  { title: 'Why diversified enterprises outperform single-sector peers', excerpt: 'A look at the data behind why spreading risk across industries creates more resilient returns — and how Minhas approaches it.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', category: 'Strategy', date: 'Jun 24, 2026', readTime: '6 min', featured: true },
  { title: 'The case for solar in South Asia: 5 lessons from GreenGrid', excerpt: 'What we learned building a 120MW solar farm — and what other developers should know before going utility-scale.', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', category: 'Energy', date: 'Jun 12, 2026', readTime: '8 min' },
  { title: 'Building ERP that people actually want to use', excerpt: 'Inside the design decisions behind MinhasERP — and the user research that shaped every module.', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', category: 'Product', date: 'May 30, 2026', readTime: '5 min' },
  { title: 'Our journey to SOC 2 Type II compliance', excerpt: 'Why we invested in security early, what the audit process was really like, and what we learned along the way.', image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', category: 'Technology', date: 'May 18, 2026', readTime: '7 min' },
  { title: 'Leading through uncertainty: lessons from 2025', excerpt: 'Our CEO shares the principles that guided our decisions through a volatile year — and what we are carrying forward.', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', category: 'Leadership', date: 'May 5, 2026', readTime: '10 min' },
  { title: 'How we cut logistics costs by 25% with route optimization', excerpt: 'A technical deep-dive into the algorithm and infrastructure behind our fleet optimization system.', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', category: 'Technology', date: 'Apr 22, 2026', readTime: '9 min' },
  { title: 'The real estate market in 2026: what we are watching', excerpt: 'Trends, risks, and opportunities in residential and commercial real estate across South Asia this year.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', category: 'Strategy', date: 'Apr 10, 2026', readTime: '6 min' },
  { title: 'Designing for scale: architecture principles at Minhas', excerpt: 'The engineering culture and architectural patterns that let us ship fast without breaking things.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', category: 'Technology', date: 'Mar 28, 2026', readTime: '8 min' },
];

export default function BlogPage() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = POSTS.filter((p) => {
    const matchCat = category === 'All' || p.category === category;
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered.find((p) => p.featured) || filtered[0];
  const rest = filtered.filter((p) => p !== featured);

  return (
    <>
      <PageHeader
        eyebrow="Blog & Insights"
        eyebrowColor="gold"
        title={<>Ideas worth <span className="text-gradient-royal">building on.</span></>}
        subtitle="Strategy, engineering, and operations thinking from the people building Minhas Enterprises."
      />

      {/* Search + Categories */}
      <section className="relative py-8 bg-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all ${
                  category === c
                    ? 'bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white shadow-premium'
                    : 'bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0] hover:border-[#2563EB]/40'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="relative py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <Reveal y={30}>
              <a href="#" className="group grid lg:grid-cols-2 gap-6 lg:gap-10 rounded-3xl overflow-hidden bg-[#F8FAFC] border border-[#E2E8F0] hover:shadow-premium-lg transition-all">
                <div className="img-zoom relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#10B981] text-[10px] font-bold uppercase tracking-wider text-white">
                    Featured
                  </div>
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-xs text-[#64748B] mb-3">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#2563EB]/8 text-[#2563EB] font-semibold"><Tag className="w-3 h-3" />{featured.category}</span>
                    <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{featured.date}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
                  </div>
                  <h2 className="text-fluid-2xl md:text-fluid-3xl font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors leading-tight" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-fluid-base text-[#475569] leading-relaxed">{featured.excerpt}</p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB]">
                    Read article
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </a>
            </Reveal>
          </div>
        </section>
      )}

      {/* Article grid */}
      <section className="relative py-12 md:py-16 bg-[#F8FAFC] overflow-hidden">
        <div className="container-premium">
          {rest.length > 0 && (
            <>
              <h3 className="text-lg font-bold text-[#0F172A] mb-6" style={{ fontFamily: 'var(--font-display), sans-serif' }}>Latest articles</h3>
              <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.07}>
                {rest.map((p) => (
                  <StaggerItem key={p.title}>
                    <a href="#" className="group block h-full rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-premium-lg overflow-hidden transition-all">
                      <div className="img-zoom relative aspect-[16/10] overflow-hidden">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                        <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full glass-dark text-[10px] font-semibold text-white">{p.category}</div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 text-[11px] text-[#64748B] mb-2">
                          <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{p.date}</span>
                          <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
                          <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{p.readTime}</span>
                        </div>
                        <h4 className="text-base font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors leading-snug mb-2" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{p.title}</h4>
                        <p className="text-xs text-[#475569] leading-relaxed line-clamp-2">{p.excerpt}</p>
                      </div>
                    </a>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </>
          )}
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#64748B]">No articles found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
