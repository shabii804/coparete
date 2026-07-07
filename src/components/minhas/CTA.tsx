'use client';
import { Reveal } from './Reveal';
import { useNav } from './NavigationContext';
import { ArrowRight, FileText, Sparkles } from 'lucide-react';

interface CTAProps {
  title?: React.ReactNode;
  subtitle?: string;
}

export default function CTA({
  title = <>Ready to start your <span className="text-gradient-gold">next chapter?</span></>,
  subtitle = "Whether you're exploring an investment, planning a development, or seeking a strategic partner — our team is ready to help you turn ambition into impact.",
}: CTAProps) {
  const { navigate, openQuote } = useNav();
  return (
    <section className="relative py-8 md:py-12 bg-white overflow-hidden">
      <div className="container-premium">
        <Reveal y={16} blur>
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] p-6 md:p-9 shadow-premium-lg">
            <div className="absolute -top-32 -right-32 w-64 h-64 md:w-80 md:h-80 rounded-full opacity-30 blur-3xl"
              style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 md:w-80 md:h-80 rounded-full opacity-25 blur-3xl"
              style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }} />
            <div className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }} />

            <div className="relative text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-dark text-white text-[10px] font-semibold tracking-wider uppercase">
                <Sparkles className="w-3 h-3 text-[#F59E0B]" />
                Let's Build Together
              </span>
              <h2 className="mt-2.5 text-fluid-xl md:text-fluid-2xl font-bold leading-[1.12] text-white">
                {title}
              </h2>
              <p className="mt-2 text-xs md:text-fluid-sm text-white/70 leading-relaxed">
                {subtitle}
              </p>
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                <button
                  onClick={openQuote}
                  className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 md:py-3 rounded-xl text-xs md:text-sm font-semibold text-[#0F172A] bg-white hover:bg-[#F8FAFC] shadow-premium-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto"
                >
                  <FileText className="w-4 h-4 text-[#2563EB]" />
                  Get a Free Quote
                  <ArrowRight className="w-3.5 h-3.5 text-[#2563EB] transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => navigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 md:py-3 rounded-xl text-xs md:text-sm font-semibold text-white glass-dark border border-white/20 hover:border-white/40 transition-all w-full sm:w-auto"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
