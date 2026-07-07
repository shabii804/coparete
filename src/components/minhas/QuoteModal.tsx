'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, ArrowLeft, FileText, Upload, Sparkles } from 'lucide-react';

const STEPS = ['Service', 'Budget', 'Timeline', 'Details', 'Review'];

const SERVICES = [
  'Real Estate Development',
  'Trading & Distribution',
  'Technology Solutions',
  'Energy Projects',
  'Logistics & Warehousing',
  'Investment Partnership',
  'Custom / Other',
];

const BUDGETS = ['< $10K', '$10K – $50K', '$50K – $100K', '$100K – $500K', '$500K+'];

const TIMELINES = ['ASAP ( Rush)', '1 – 3 months', '3 – 6 months', '6 – 12 months', 'Just exploring'];

export default function QuoteModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    service: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    company: '',
    phone: '',
    details: '',
    file: null as File | null,
  });

  const update = (k: keyof typeof data, v: any) => setData((d) => ({ ...d, [k]: v }));

  const canProceed = () => {
    if (step === 0) return !!data.service;
    if (step === 1) return !!data.budget;
    if (step === 2) return !!data.timeline;
    if (step === 3) return !!data.name && !!data.email;
    return true;
  };

  const next = () => { if (step < STEPS.length - 1) setStep(step + 1); };
  const back = () => { if (step > 0) setStep(step - 1); };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(0);
      setData({ service: '', budget: '', timeline: '', name: '', email: '', company: '', phone: '', details: '', file: null });
    }, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#0F172A]/60 backdrop-blur-md overflow-y-auto"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl my-8 rounded-3xl bg-white shadow-premium-lg overflow-hidden"
          >
            {/* Decorative top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB] via-[#10B981] to-[#F59E0B]" />

            {/* Header */}
            <div className="flex items-center justify-between p-5 md:p-7 border-b border-[#E2E8F0]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#10B981] inline-flex items-center justify-center shadow-glow-blue">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-base md:text-lg font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                    Request a Quote
                  </div>
                  <div className="text-[11px] text-[#64748B]">Step {step + 1} of {STEPS.length} · {STEPS[step]}</div>
                </div>
              </div>
              <button
                onClick={handleClose}
                aria-label="Close"
                className="w-9 h-9 rounded-xl inline-flex items-center justify-center bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:bg-white hover:text-[#0F172A] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Progress bar */}
            <div className="h-1 bg-[#F8FAFC]">
              <motion.div
                className="h-full bg-gradient-to-r from-[#2563EB] to-[#10B981]"
                animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            {/* Body */}
            <div className="p-5 md:p-7 min-h-[18rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Step 0 — Service */}
                  {step === 0 && (
                    <div>
                      <h3 className="text-xl font-bold text-[#0F172A] mb-1" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                        What can we help you with?
                      </h3>
                      <p className="text-sm text-[#475569] mb-5">Select the service that best matches your need.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {SERVICES.map((s) => (
                          <button
                            key={s}
                            onClick={() => update('service', s)}
                            className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all duration-300 ${
                              data.service === s
                                ? 'border-[#2563EB] bg-[#2563EB]/8 shadow-premium'
                                : 'border-[#E2E8F0] bg-white hover:border-[#2563EB]/40'
                            }`}
                          >
                            <span className="text-sm font-medium text-[#0F172A]">{s}</span>
                            {data.service === s && (
                              <span className="w-5 h-5 rounded-full bg-[#2563EB] inline-flex items-center justify-center">
                                <Check className="w-3 h-3 text-white" />
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 1 — Budget */}
                  {step === 1 && (
                    <div>
                      <h3 className="text-xl font-bold text-[#0F172A] mb-1" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                        What's your budget range?
                      </h3>
                      <p className="text-sm text-[#475569] mb-5">This helps us scope the right solution. Honest ranges only — no commitment.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {BUDGETS.map((b) => (
                          <button
                            key={b}
                            onClick={() => update('budget', b)}
                            className={`p-4 rounded-xl border text-center font-semibold transition-all duration-300 ${
                              data.budget === b
                                ? 'border-[#10B981] bg-[#10B981]/8 text-[#0F172A] shadow-premium'
                                : 'border-[#E2E8F0] bg-white text-[#475569] hover:border-[#10B981]/40'
                            }`}
                            style={{ fontFamily: 'var(--font-display), sans-serif' }}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2 — Timeline */}
                  {step === 2 && (
                    <div>
                      <h3 className="text-xl font-bold text-[#0F172A] mb-1" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                        When do you need this delivered?
                      </h3>
                      <p className="text-sm text-[#475569] mb-5">We'll match our process to your urgency.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {TIMELINES.map((t) => (
                          <button
                            key={t}
                            onClick={() => update('timeline', t)}
                            className={`p-4 rounded-xl border text-center font-medium transition-all duration-300 ${
                              data.timeline === t
                                ? 'border-[#F59E0B] bg-[#F59E0B]/8 text-[#0F172A] shadow-premium'
                                : 'border-[#E2E8F0] bg-white text-[#475569] hover:border-[#F59E0B]/40'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3 — Details */}
                  {step === 3 && (
                    <div>
                      <h3 className="text-xl font-bold text-[#0F172A] mb-1" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                        Tell us about you
                      </h3>
                      <p className="text-sm text-[#475569] mb-5">We'll be in touch within one business day.</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <input
                          placeholder="Full name *"
                          value={data.name}
                          onChange={(e) => update('name', e.target.value)}
                          className="px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
                        />
                        <input
                          type="email"
                          placeholder="Email *"
                          value={data.email}
                          onChange={(e) => update('email', e.target.value)}
                          className="px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
                        />
                        <input
                          placeholder="Company"
                          value={data.company}
                          onChange={(e) => update('company', e.target.value)}
                          className="px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
                        />
                        <input
                          placeholder="Phone"
                          value={data.phone}
                          onChange={(e) => update('phone', e.target.value)}
                          className="px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
                        />
                      </div>
                      <textarea
                        rows={3}
                        placeholder="Project details, requirements, scope..."
                        value={data.details}
                        onChange={(e) => update('details', e.target.value)}
                        className="mt-3 w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all resize-none"
                      />
                      <label className="mt-3 flex items-center gap-3 p-4 rounded-xl border border-dashed border-[#E2E8F0] hover:border-[#2563EB] cursor-pointer transition-colors">
                        <Upload className="w-5 h-5 text-[#2563EB]" />
                        <span className="text-sm text-[#475569] flex-1">
                          {data.file ? data.file.name : 'Attach a brief or RFP (optional)'}
                        </span>
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => update('file', e.target.files?.[0] || null)}
                        />
                      </label>
                    </div>
                  )}

                  {/* Step 4 — Review */}
                  {step === 4 && (
                    <div>
                      <h3 className="text-xl font-bold text-[#0F172A] mb-1" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                        Review your request
                      </h3>
                      <p className="text-sm text-[#475569] mb-5">Make sure everything looks right before sending.</p>
                      <div className="space-y-2.5">
                        {[
                          { label: 'Service', value: data.service },
                          { label: 'Budget', value: data.budget },
                          { label: 'Timeline', value: data.timeline },
                          { label: 'Name', value: data.name },
                          { label: 'Email', value: data.email },
                          { label: 'Company', value: data.company || '—' },
                          { label: 'Phone', value: data.phone || '—' },
                          { label: 'Attachment', value: data.file ? data.file.name : 'None' },
                        ].map((row) => (
                          <div key={row.label} className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                            <span className="text-xs uppercase tracking-wider text-[#64748B] font-semibold">{row.label}</span>
                            <span className="text-sm font-medium text-[#0F172A] text-right">{row.value || '—'}</span>
                          </div>
                        ))}
                      </div>
                      {data.details && (
                        <div className="mt-3 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                          <div className="text-xs uppercase tracking-wider text-[#64748B] font-semibold mb-1">Details</div>
                          <p className="text-sm text-[#475569]">{data.details}</p>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer with nav */}
            <div className="flex items-center justify-between p-5 md:p-7 border-t border-[#E2E8F0] bg-[#F8FAFC]">
              <button
                onClick={back}
                disabled={step === 0}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-[#475569] bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              {/* Step dots */}
              <div className="flex gap-1.5">
                {STEPS.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === step ? 'w-8 bg-gradient-to-r from-[#2563EB] to-[#10B981]' :
                      i < step ? 'w-1.5 bg-[#10B981]' : 'w-1.5 bg-[#CBD5E1]'
                    }`}
                  />
                ))}
              </div>

              {step < STEPS.length - 1 ? (
                <button
                  onClick={next}
                  disabled={!canProceed()}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1E40AF] shadow-premium hover:shadow-glow-blue disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleClose}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#10B981] to-[#059669] shadow-glow-emerald hover:-translate-y-0.5 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  Submit Request
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
