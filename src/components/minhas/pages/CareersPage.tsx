'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../PageHeader';
import { Reveal, StaggerGroup, StaggerItem } from '../Reveal';
import SectionHeading from '../SectionHeading';
import { useNav } from '../NavigationContext';
import {
  MapPin, Briefcase, Clock, ArrowUpRight, Search, X, Send, CheckCircle2,
  Building2, Code2, Palette, TrendingUp, Users, Zap,
} from 'lucide-react';

interface Job {
  id: string;
  title: string;
  type: string;
  department: string;
  location: string;
  description: string;
  requirements: string;
  salary: string | null;
  postedAt: string;
}

const DEPARTMENT_ICONS: Record<string, any> = {
  Engineering: Code2,
  Design: Palette,
  Sales: TrendingUp,
  Marketing: Users,
  Product: Briefcase,
};

const TYPE_COLORS: Record<string, string> = {
  'Full-time': '#2563EB',
  'Part-time': '#10B981',
  'Internship': '#F59E0B',
  'Contract': '#6366F1',
};

const FILTERS = ['All', 'Full-time', 'Part-time', 'Internship', 'Contract'];
const DEPARTMENTS = ['All', 'Engineering', 'Design', 'Sales', 'Marketing', 'Product'];
const LOCATIONS = ['All', 'Lahore', 'Islamabad', 'Karachi', 'Remote'];

export default function CareersPage() {
  const { navigate } = useNav();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [typeFilter, setTypeFilter] = useState('All');
  const [deptFilter, setDeptFilter] = useState('All');
  const [locFilter, setLocFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applyOpen, setApplyOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await fetch('/api/jobs');
      const data = await res.json();
      setJobs(data);
    } catch (e) {
      console.error('Failed to fetch jobs:', e);
    } finally {
      setLoading(false);
    }
  };

  const filtered = jobs.filter((j) => {
    if (typeFilter !== 'All' && j.type !== typeFilter) return false;
    if (deptFilter !== 'All' && j.department !== deptFilter) return false;
    if (locFilter !== 'All' && j.location !== locFilter) return false;
    if (search && !j.title.toLowerCase().includes(search.toLowerCase()) && !j.description.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    setApplyOpen(true);
    setSubmitted(false);
  };

  const submitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    try {
      await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, jobId: selectedJob?.id }),
      });
      setSubmitted(true);
    } catch (e) {
      console.error('Failed to submit:', e);
    }
  };

  const formatTimeAgo = (date: string) => {
    const diff = Date.now() - new Date(date).getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days === 0) return 'Today';
    if (days === 1) return '1 day ago';
    if (days < 7) return `${days} days ago`;
    return `${Math.floor(days / 7)} week${Math.floor(days / 7) > 1 ? 's' : ''} ago`;
  };

  return (
    <>
      <PageHeader
        eyebrow="Careers"
        eyebrowColor="emerald"
        title={<>Join our team & <span className="text-gradient-royal">build the future.</span></>}
        subtitle="We're hiring engineers, designers, and interns. Find your next role and apply today."
      />

      {/* Stats bar */}
      <section className="relative py-6 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="container-premium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: Briefcase, label: 'Open Positions', value: jobs.length, color: '#2563EB' },
              { icon: Code2, label: 'Engineering Roles', value: jobs.filter(j => j.department === 'Engineering').length, color: '#10B981' },
              { icon: Zap, label: 'Internships', value: jobs.filter(j => j.type === 'Internship').length, color: '#F59E0B' },
              { icon: Users, label: 'Team Size', value: '1.2K+', color: '#6366F1' },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="p-3 rounded-xl bg-white border border-[#E2E8F0] text-center">
                  <Icon className="w-5 h-5 mx-auto mb-1.5" style={{ color: s.color }} />
                  <div className="text-xl font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{s.value}</div>
                  <div className="text-[10px] text-[#64748B]">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job listings */}
      <section className="relative py-8 md:py-12 bg-white overflow-hidden">
        <div className="container-premium relative">
          {/* Search + Filters */}
          <Reveal>
            <div className="mb-6 space-y-3">
              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search jobs..."
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
                />
              </div>
              {/* Filters */}
              <div className="flex flex-wrap gap-2 justify-center">
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    onClick={() => setTypeFilter(f)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      typeFilter === f
                        ? 'bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white shadow-premium'
                        : 'bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0] hover:border-[#2563EB]/40'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
              {/* Location filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                {LOCATIONS.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLocFilter(l)}
                    className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all ${
                      locFilter === l
                        ? 'bg-[#10B981] text-white'
                        : 'bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0] hover:border-[#10B981]/40'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Results count */}
          <div className="text-center mb-4">
            <p className="text-xs text-[#64748B]">
              {filtered.length} position{filtered.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {/* Job cards */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-sm text-[#64748B]">Loading jobs...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-sm text-[#64748B]">No jobs match your filters. Try adjusting them.</p>
            </div>
          ) : (
            <StaggerGroup className="grid md:grid-cols-2 gap-4" stagger={0.06}>
              {filtered.map((job) => {
                const DeptIcon = DEPARTMENT_ICONS[job.department] || Briefcase;
                const typeColor = TYPE_COLORS[job.type] || '#2563EB';
                const requirements = JSON.parse(job.requirements || '[]');
                return (
                  <StaggerItem key={job.id}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="group relative h-full p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-transparent hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all overflow-hidden"
                    >
                      {/* Top accent */}
                      <div className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                        style={{ background: typeColor }} />
                      {/* Glow */}
                      <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                        style={{ background: `radial-gradient(circle, ${typeColor}30, transparent 70%)` }} />

                      <div className="relative">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-xl inline-flex items-center justify-center"
                              style={{ background: `linear-gradient(135deg, ${typeColor}, ${typeColor}cc)`, boxShadow: `0 6px 16px ${typeColor}30` }}>
                              <DeptIcon className="w-5 h-5 text-white" strokeWidth={2} />
                            </div>
                            <div>
                              <h3 className="text-base font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{job.title}</h3>
                              <p className="text-[10px] text-[#64748B] font-medium">{job.department}</p>
                            </div>
                          </div>
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold text-white" style={{ background: typeColor }}>
                            {job.type}
                          </span>
                        </div>

                        {/* Meta */}
                        <div className="flex flex-wrap gap-3 mb-3 text-[11px] text-[#64748B]">
                          <span className="inline-flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                          <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{formatTimeAgo(job.postedAt)}</span>
                          {job.salary && <span className="inline-flex items-center gap-1 font-semibold" style={{ color: typeColor }}>{job.salary}</span>}
                        </div>

                        {/* Description */}
                        <p className="text-xs text-[#475569] leading-relaxed mb-3 line-clamp-2">{job.description}</p>

                        {/* Requirements */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {requirements.slice(0, 3).map((r: string, i: number) => (
                            <span key={i} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[10px] font-medium text-[#475569]">
                              <CheckCircle2 className="w-2.5 h-2.5" style={{ color: typeColor }} />
                              {r}
                            </span>
                          ))}
                          {requirements.length > 3 && (
                            <span className="px-2 py-0.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[10px] text-[#64748B]">
                              +{requirements.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* Apply button */}
                        <button
                          onClick={() => handleApply(job)}
                          className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white transition-all hover:-translate-y-0.5"
                          style={{ background: `linear-gradient(135deg, ${typeColor}, ${typeColor}cc)`, boxShadow: `0 6px 16px ${typeColor}30` }}
                        >
                          Apply Now
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          )}
        </div>
      </section>

      {/* Apply Modal */}
      <AnimatePresence>
        {applyOpen && selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#0F172A]/60 backdrop-blur-md overflow-y-auto"
            onClick={() => setApplyOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg my-8 rounded-2xl bg-white shadow-premium-lg overflow-hidden"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: TYPE_COLORS[selectedJob.type] || '#2563EB' }} />

              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-[#E2E8F0]">
                <div>
                  <h3 className="text-base font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
                    {submitted ? 'Application Submitted!' : `Apply for ${selectedJob.title}`}
                  </h3>
                  <p className="text-[11px] text-[#64748B]">{selectedJob.department} · {selectedJob.location}</p>
                </div>
                <button onClick={() => setApplyOpen(false)} className="w-9 h-9 rounded-xl inline-flex items-center justify-center bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:bg-white">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="p-5">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-[#10B981]/10 inline-flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-[#10B981]" />
                    </div>
                    <h4 className="text-base font-bold text-[#0F172A] mb-2">Thank you for applying!</h4>
                    <p className="text-xs text-[#475569] leading-relaxed max-w-sm mx-auto">
                      We've received your application for <strong>{selectedJob.title}</strong>. Our HR team will review it and get back to you within 5 business days.
                    </p>
                    <button
                      onClick={() => setApplyOpen(false)}
                      className="mt-5 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] shadow-premium"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submitApplication} className="space-y-3">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5">Full Name *</label>
                        <input name="name" required placeholder="Your name" className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5">Email *</label>
                        <input name="email" type="email" required placeholder="you@email.com" className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5">Phone</label>
                        <input name="phone" placeholder="+92 300 0000000" className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5">Resume URL</label>
                        <input name="resume" placeholder="LinkedIn or portfolio URL" className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5">Cover Letter</label>
                      <textarea name="coverLetter" rows={3} placeholder="Why are you a good fit for this role?" className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all resize-none" />
                    </div>
                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] shadow-premium hover:shadow-glow-blue transition-all">
                      <Send className="w-4 h-4" />
                      Submit Application
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
