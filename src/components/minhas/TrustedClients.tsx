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
    <section className="relative py-8 md:py-10 bg-white border-y border-[#E2E8F0] overflow-hidden">
      <div className="container-premium mb-4 md:mb-5 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.3em] text-[#64748B]"
        >
          Trusted by industry leaders across the globe
        </motion.p>
      </div>

      <div className="marquee-mask">
        <div className="flex w-max animate-marquee gap-2.5 md:gap-3 px-4">
          {items.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="group flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:bg-white hover:shadow-premium transition-all duration-400 flex-shrink-0"
              >
                <Icon className="w-4 h-4 text-[#2563EB] group-hover:scale-110 transition-transform" />
                <span className="text-xs md:text-sm font-bold text-[#0F172A] whitespace-nowrap"
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
