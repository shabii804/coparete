'use client';

import PageHeader from '../PageHeader';
import CTA from '../CTA';
import { Reveal, StaggerGroup, StaggerItem } from '../Reveal';
import { GraduationCap, HeartPulse, ShoppingBag, Factory, Building2, Home, UtensilsCrossed, Truck, Landmark, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

const INDUSTRIES = [
  {
    icon: GraduationCap, name: 'Education', color: '#2563EB',
    challenges: ['Outdated learning management systems', 'Fragmented student data across departments', 'Low engagement in remote and hybrid learning', 'Manual administrative processes'],
    solutions: ['LMS with live classes and recordings', 'Unified student information system', 'Mobile-first engagement tools', 'Automated admissions and grading'],
    story: 'Deployed a unified campus management platform for a 12,000-student university, reducing admin workload by 45%.',
  },
  {
    icon: HeartPulse, name: 'Healthcare', color: '#10B981',
    challenges: ['Siloed patient records across facilities', 'Slow appointment scheduling', 'Compliance and data security burdens', 'Limited telemedicine capabilities'],
    solutions: ['EMR with cross-facility sharing', 'Online appointment booking', 'HIPAA-compliant infrastructure', 'Integrated telemedicine module'],
    story: 'Built a telemedicine platform serving 200K+ patients across 15 clinics, reducing wait times by 60%.',
  },
  {
    icon: ShoppingBag, name: 'Retail', color: '#F59E0B',
    challenges: ['Inventory mismatches across channels', 'Slow checkout during peak hours', 'Limited customer insights', 'Omnichannel complexity'],
    solutions: ['Unified POS and e-commerce', 'Real-time inventory sync', 'Customer analytics dashboard', 'Omnichannel loyalty program'],
    story: 'Implemented an omnichannel retail platform for a 50-store chain, increasing repeat purchases by 35%.',
  },
  {
    icon: Factory, name: 'Manufacturing', color: '#2563EB',
    challenges: ['Unplanned equipment downtime', 'Supply chain visibility gaps', 'Quality control inconsistencies', 'Rising operational costs'],
    solutions: ['ERP with production planning', 'IoT-based predictive maintenance', 'Quality management system', 'Supply chain analytics'],
    story: 'Deployed a predictive maintenance system for a textile manufacturer, cutting downtime by 40%.',
  },
  {
    icon: Building2, name: 'Real Estate', color: '#10B981',
    challenges: ['Manual property management', 'Slow tenant communication', 'Fragmented financial tracking', 'Limited market visibility'],
    solutions: ['Property management platform', 'Tenant portal and messaging', 'Integrated accounting', 'Market analytics and CRM'],
    story: 'Launched a property management suite for a 2,000-unit portfolio, reducing vacancy rates by 22%.',
  },
  {
    icon: Home, name: 'Construction', color: '#F59E0B',
    challenges: ['Project schedule overruns', 'Budget leakage across contractors', 'Safety compliance tracking', 'Document chaos'],
    solutions: ['Project tracking dashboard', 'Contractor management portal', 'Safety compliance module', 'BIM and document management'],
    story: 'Built a project tracking system for a $200M development, delivering 3 months ahead of schedule.',
  },
  {
    icon: UtensilsCrossed, name: 'Restaurants', color: '#2563EB',
    challenges: ['Long wait times during peak hours', 'Delivery integration complexity', 'Inventory spoilage', 'Inconsistent customer experience'],
    solutions: ['Cloud-based POS system', 'Delivery aggregator integration', 'Inventory and recipe management', 'Customer loyalty program'],
    story: 'Rolled out a POS + delivery platform across 30 restaurant locations, boosting average order value by 18%.',
  },
  {
    icon: Truck, name: 'Logistics', color: '#10B981',
    challenges: ['Route inefficiency', 'Limited shipment visibility', 'Warehouse space utilization', 'Customs and compliance delays'],
    solutions: ['Route optimization engine', 'Real-time shipment tracking', 'WMS with automation', 'Customs documentation automation'],
    story: 'Implemented a route optimization system for a 200-vehicle fleet, reducing fuel costs by 25%.',
  },
  {
    icon: Landmark, name: 'Government', color: '#F59E0B',
    challenges: ['Legacy systems and paper processes', 'Citizen service accessibility', 'Data security and compliance', 'Inter-departmental coordination'],
    solutions: ['Citizen service portals', 'E-governance workflow automation', 'Secure, compliant infrastructure', 'Inter-departmental data exchange'],
    story: 'Built a citizen services portal processing 500K+ applications annually with 99.9% uptime.',
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries We Serve"
        eyebrowColor="gold"
        title={<>Deep expertise across <span className="text-gradient-royal">nine industries.</span></>}
        subtitle="We don't believe in one-size-fits-all. Each industry has its own challenges, regulations, and rhythms — and we build accordingly."
      />

      <section className="relative py-16 md:py-24 bg-[#F8FAFC] overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8 space-y-6">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.name} delay={i * 0.03}>
                <div className="group rounded-3xl bg-white border border-[#E2E8F0] hover:shadow-premium-lg transition-all overflow-hidden">
                  <div className="grid lg:grid-cols-[auto_1fr_1fr_1fr] gap-0">
                    {/* Icon + name */}
                    <div className="p-6 md:p-8 flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3 lg:border-r border-[#E2E8F0]">
                      <div className="w-14 h-14 rounded-2xl inline-flex items-center justify-center flex-shrink-0"
                        style={{ background: `linear-gradient(135deg, ${ind.color}15, ${ind.color}25)` }}>
                        <Icon className="w-7 h-7" style={{ color: ind.color }} />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider" style={{ color: ind.color }}>Industry 0{i + 1}</div>
                        <h3 className="text-xl font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{ind.name}</h3>
                      </div>
                    </div>
                    {/* Challenges */}
                    <div className="p-6 md:p-8 lg:border-r border-[#E2E8F0]">
                      <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-4">
                        <AlertTriangle className="w-3.5 h-3.5 text-[#F59E0B]" /> Challenges
                      </h4>
                      <ul className="space-y-2">
                        {ind.challenges.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-xs text-[#475569] leading-relaxed">
                            <span className="w-1 h-1 rounded-full bg-[#F59E0B] mt-1.5 flex-shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Solutions */}
                    <div className="p-6 md:p-8 lg:border-r border-[#E2E8F0]">
                      <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-4">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> Our Solutions
                      </h4>
                      <ul className="space-y-2">
                        {ind.solutions.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-xs text-[#475569] leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0 mt-0.5" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Success story */}
                    <div className="p-6 md:p-8 bg-[#F8FAFC]">
                      <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-3">
                        <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" /> Success Story
                      </h4>
                      <p className="text-xs text-[#475569] leading-relaxed italic">{ind.story}</p>
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
