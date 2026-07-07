'use client';

import { motion } from 'framer-motion';
import { Building2, ShoppingBag, Plane, Car, Dumbbell, Coffee, Smartphone, Zap } from 'lucide-react';

// Stylized client "logos" — wordmarks with icons
const CLIENTS = [
  { name: 'Nucleus Holdings', icon: Building2 },
  { name: 'Meridian Logistics', icon: ShoppingBag },
  { name: 'Aurora Ventures', icon: Plane },
  { name: 'Helix Energy', icon: Zap },
  { name: 'Vertex Auto', icon: Car },
  { name: 'Apex Fitness', icon: Dumbbell },
  { name: 'Bloom Café', icon: Coffee },
  { name: 'Pixel Labs', icon: Smartphone },
];

export default function TrustedClients() {
  const items = [...CLIENTS, ...CLIENTS];
  return (
    <section className="relative py-12 md:py-16 bg-white border-y border-[#E2E8F0] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8 mb-6 md:mb-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.3em] text-[#64748B]"
        >
          Trusted by industry leaders across the globe
        </motion.p>
      </div>

      <div className="marquee-mask">
        <div className="flex w-max animate-marquee gap-3 md:gap-4 px-4">
          {items.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="group flex items-center gap-2.5 px-5 md:px-7 py-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:bg-white hover:shadow-premium transition-all duration-400 flex-shrink-0"
              >
                <Icon className="w-5 h-5 text-[#2563EB] group-hover:scale-110 transition-transform" />
                <span className="text-sm md:text-base font-bold text-[#0F172A] whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                  {c.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
