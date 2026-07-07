'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, Briefcase, Mail, FileText, Users, LogOut, Plus, Edit2,
  Trash2, X, Save, CheckCircle2, Cpu, Package, Building2, PenTool, Star,
  Repeat, Code2, ArrowUp, ArrowDown, Search,
} from 'lucide-react';
import { useNav } from '../NavigationContext';

const ADMIN_PASSWORD = 'minhas2026';

type AdminTab = 'dashboard' | 'services' | 'products' | 'industries' | 'team' | 'blog' | 'testimonials' | 'devmodels' | 'techstack' | 'jobs' | 'applications' | 'quotes' | 'messages';

const TABS: { id: AdminTab; label: string; icon: any; apiType?: string }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'services', label: 'Services', icon: Cpu, apiType: 'services' },
  { id: 'products', label: 'Products', icon: Package, apiType: 'products' },
  { id: 'industries', label: 'Industries', icon: Building2, apiType: 'industries' },
  { id: 'team', label: 'Team', icon: Users, apiType: 'team' },
  { id: 'blog', label: 'Blog', icon: PenTool, apiType: 'blog' },
  { id: 'testimonials', label: 'Testimonials', icon: Star, apiType: 'testimonials' },
  { id: 'devmodels', label: 'Dev Models', icon: Repeat, apiType: 'devmodels' },
  { id: 'techstack', label: 'Tech Stack', icon: Code2, apiType: 'techstack' },
  { id: 'jobs', label: 'Jobs', icon: Briefcase, apiType: 'jobs' },
  { id: 'applications', label: 'Applications', icon: Users },
  { id: 'quotes', label: 'Quotes', icon: FileText },
  { id: 'messages', label: 'Messages', icon: Mail },
];

const CONTENT_FIELDS: Record<string, { key: string; label: string; type: 'text' | 'textarea' | 'json' | 'checkbox' | 'select' | 'image' }[]> = {
  services: [
    { key: 'title', label: 'Title', type: 'text' },
    { key: 'description', label: 'Description', type: 'textarea' },
    { key: 'icon', label: 'Icon (Lucide name)', type: 'text' },
    { key: 'image', label: 'Image URL', type: 'image' },
    { key: 'color', label: 'Color (hex)', type: 'text' },
    { key: 'gradient', label: 'Gradient CSS', type: 'text' },
    { key: 'glow', label: 'Glow color', type: 'text' },
    { key: 'features', label: 'Features (one per line)', type: 'json' },
    { key: 'benefits', label: 'Benefits (one per line)', type: 'json' },
    { key: 'sortOrder', label: 'Sort Order', type: 'text' },
    { key: 'active', label: 'Active', type: 'checkbox' },
  ],
  products: [
    { key: 'name', label: 'Name', type: 'text' },
    { key: 'tagline', label: 'Tagline', type: 'text' },
    { key: 'description', label: 'Description', type: 'textarea' },
    { key: 'image', label: 'Image URL', type: 'image' },
    { key: 'price', label: 'Price', type: 'text' },
    { key: 'badge', label: 'Badge', type: 'text' },
    { key: 'icon', label: 'Icon', type: 'text' },
    { key: 'color', label: 'Color', type: 'text' },
    { key: 'gradient', label: 'Gradient', type: 'text' },
    { key: 'glow', label: 'Glow', type: 'text' },
    { key: 'features', label: 'Features (one per line)', type: 'json' },
    { key: 'modules', label: 'Modules (one per line)', type: 'json' },
    { key: 'benefits', label: 'Benefits (one per line)', type: 'json' },
    { key: 'sortOrder', label: 'Sort Order', type: 'text' },
    { key: 'active', label: 'Active', type: 'checkbox' },
  ],
  industries: [
    { key: 'name', label: 'Name', type: 'text' },
    { key: 'description', label: 'Description', type: 'textarea' },
    { key: 'icon', label: 'Icon', type: 'text' },
    { key: 'image', label: 'Image URL', type: 'image' },
    { key: 'color', label: 'Color', type: 'text' },
    { key: 'bg', label: 'Background color', type: 'text' },
    { key: 'challenges', label: 'Challenges (one per line)', type: 'json' },
    { key: 'solutions', label: 'Solutions (one per line)', type: 'json' },
    { key: 'story', label: 'Success Story', type: 'textarea' },
    { key: 'sortOrder', label: 'Sort Order', type: 'text' },
    { key: 'active', label: 'Active', type: 'checkbox' },
  ],
  team: [
    { key: 'name', label: 'Name', type: 'text' },
    { key: 'role', label: 'Role', type: 'text' },
    { key: 'bio', label: 'Bio', type: 'textarea' },
    { key: 'image', label: 'Image URL', type: 'image' },
    { key: 'accent', label: 'Accent color', type: 'text' },
    { key: 'experience', label: 'Experience', type: 'text' },
    { key: 'skills', label: 'Skills (one per line)', type: 'json' },
    { key: 'linkedin', label: 'LinkedIn URL', type: 'text' },
    { key: 'twitter', label: 'Twitter URL', type: 'text' },
    { key: 'sortOrder', label: 'Sort Order', type: 'text' },
    { key: 'active', label: 'Active', type: 'checkbox' },
  ],
  blog: [
    { key: 'title', label: 'Title', type: 'text' },
    { key: 'excerpt', label: 'Excerpt', type: 'textarea' },
    { key: 'content', label: 'Content', type: 'textarea' },
    { key: 'image', label: 'Image URL', type: 'image' },
    { key: 'category', label: 'Category', type: 'text' },
    { key: 'author', label: 'Author', type: 'text' },
    { key: 'readTime', label: 'Read Time', type: 'text' },
    { key: 'published', label: 'Published', type: 'checkbox' },
    { key: 'featured', label: 'Featured', type: 'checkbox' },
  ],
  testimonials: [
    { key: 'quote', label: 'Quote', type: 'textarea' },
    { key: 'name', label: 'Name', type: 'text' },
    { key: 'title', label: 'Title / Company', type: 'text' },
    { key: 'avatar', label: 'Avatar URL', type: 'image' },
    { key: 'rating', label: 'Rating (1-5)', type: 'text' },
    { key: 'sortOrder', label: 'Sort Order', type: 'text' },
    { key: 'active', label: 'Active', type: 'checkbox' },
  ],
  devmodels: [
    { key: 'name', label: 'Name', type: 'text' },
    { key: 'description', label: 'Description', type: 'textarea' },
    { key: 'icon', label: 'Icon', type: 'text' },
    { key: 'image', label: 'Image URL', type: 'image' },
    { key: 'color', label: 'Color', type: 'text' },
    { key: 'gradient', label: 'Gradient', type: 'text' },
    { key: 'glow', label: 'Glow', type: 'text' },
    { key: 'steps', label: 'Steps (one per line)', type: 'json' },
    { key: 'best', label: 'Best For', type: 'text' },
    { key: 'sortOrder', label: 'Sort Order', type: 'text' },
    { key: 'active', label: 'Active', type: 'checkbox' },
  ],
  techstack: [
    { key: 'name', label: 'Name', type: 'text' },
    { key: 'icon', label: 'Icon', type: 'text' },
    { key: 'color', label: 'Color', type: 'text' },
    { key: 'sortOrder', label: 'Sort Order', type: 'text' },
    { key: 'active', label: 'Active', type: 'checkbox' },
  ],
  jobs: [
    { key: 'title', label: 'Title', type: 'text' },
    { key: 'type', label: 'Type', type: 'text' },
    { key: 'department', label: 'Department', type: 'text' },
    { key: 'location', label: 'Location', type: 'text' },
    { key: 'description', label: 'Description', type: 'textarea' },
    { key: 'requirements', label: 'Requirements (one per line)', type: 'json' },
    { key: 'salary', label: 'Salary', type: 'text' },
    { key: 'active', label: 'Active', type: 'checkbox' },
  ],
};

export default function AdminPage() {
  const { navigate } = useNav();
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [tab, setTab] = useState<AdminTab>('dashboard');
  const [stats, setStats] = useState<any>(null);
  const [items, setItems] = useState<any[]>([]);
  const [applications, setApplications] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [search, setSearch] = useState('');

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/admin/stats');
      const data = await res.json();
      setStats(data);
    } catch (e) { console.error(e); }
  };

  const fetchItems = async (apiType: string) => {
    try {
      const res = await fetch(`/api/${apiType}?active=false`);
      const data = await res.json();
      setItems(data);
    } catch (e) { console.error(e); }
  };

  const fetchApplications = async () => {
    try {
      const res = await fetch('/api/admin/applications');
      const data = await res.json();
      setApplications(data);
    } catch (e) { console.error(e); }
  };

  useEffect(() => {
    if (!authed) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchStats();
    const currentTab = TABS.find(t => t.id === tab);
    if (currentTab?.apiType && currentTab.apiType !== 'jobs') {
       
      fetchItems(currentTab.apiType);
    } else if (tab === 'jobs') {
       
      fetchItems('jobs');
    } else if (tab === 'applications') {
       
      fetchApplications();
    }
  }, [authed, tab]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
      setError('');
    } else {
      setError('Incorrect password. Try: minhas2026');
    }
  };

  const deleteItem = async (apiType: string, id: string) => {
    if (!confirm('Delete this item?')) return;
    await fetch(`/api/${apiType}/${id}`, { method: 'DELETE' });
    fetchItems(apiType);
     
    fetchStats();
  };

  const toggleActive = async (apiType: string, item: any) => {
    const isActive = item.active !== undefined ? item.active : item.published;
    const updateData = apiType === 'blog' ? { published: !isActive } : { active: !isActive };
    await fetch(`/api/${apiType}/${item.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData),
    });
    fetchItems(apiType);
  };

  // ===== LOGIN SCREEN =====
  if (!authed) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-[#F8FAFC] overflow-hidden pt-20">
        <div className="absolute top-20 -left-20 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
        <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md mx-4 p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-premium-lg"
        >
          <div className="text-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] inline-flex items-center justify-center mb-4 shadow-glow-blue">
              <LayoutDashboard className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-xl font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>Admin Panel</h1>
            <p className="text-xs text-[#64748B] mt-1">Manage all website content</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-3">
            <div>
              <label className="block text-[10px] font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter admin password"
                className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all" />
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button type="submit" className="w-full px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] shadow-premium hover:shadow-glow-blue transition-all">Sign In</button>
          </form>
          <div className="mt-4 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <p className="text-[10px] text-[#64748B] text-center">Demo password: <span className="font-bold text-[#2563EB]">minhas2026</span></p>
          </div>
          <button onClick={() => navigate('home')} className="mt-4 w-full text-xs text-[#64748B] hover:text-[#0F172A] transition-colors">← Back to website</button>
        </motion.div>
      </section>
    );
  }

  const currentTab = TABS.find(t => t.id === tab);
  const apiType = currentTab?.apiType || '';
  const fields = apiType ? CONTENT_FIELDS[apiType] || [] : [];

  const filteredItems = items.filter(item => {
    if (!search) return true;
    const text = (item.title || item.name || item.quote || '').toLowerCase();
    return text.includes(search.toLowerCase());
  });

  return (
    <section className="relative min-h-screen pt-20 bg-[#F8FAFC]">
      <div className="container-premium py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>Admin Dashboard</h1>
            <p className="text-xs text-[#64748B]">Manage all website content — fully customizable</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => navigate('home')} className="px-3 py-2 rounded-lg text-xs font-medium text-[#475569] bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] transition-all">View Site</button>
            <button onClick={() => setAuthed(false)} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-white bg-red-500 hover:bg-red-600 transition-all"><LogOut className="w-3.5 h-3.5" />Logout</button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-1 mb-6 p-1.5 rounded-xl bg-white border border-[#E2E8F0] shadow-soft">
          {TABS.map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${active ? 'bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white shadow-premium' : 'text-[#475569] hover:bg-[#F8FAFC]'}`}>
                <Icon className="w-3.5 h-3.5" />{t.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            {/* DASHBOARD */}
            {tab === 'dashboard' && stats && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[{ icon: Briefcase, label: 'Active Jobs', value: stats.counts.jobs, gradient: 'linear-gradient(135deg, #2563EB, #3B82F6)' },
                    { icon: Users, label: 'Applications', value: stats.counts.applications, gradient: 'linear-gradient(135deg, #059669, #10B981)' },
                    { icon: FileText, label: 'Quote Requests', value: stats.counts.quotes, gradient: 'linear-gradient(135deg, #D97706, #F59E0B)' },
                    { icon: Mail, label: 'Messages', value: stats.counts.messages, gradient: 'linear-gradient(135deg, #4F46E5, #6366F1)' },
                  ].map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.label} className="p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-soft">
                        <div className="w-10 h-10 rounded-xl inline-flex items-center justify-center mb-3" style={{ background: s.gradient }}><Icon className="w-5 h-5 text-white" /></div>
                        <div className="text-2xl font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{s.value}</div>
                        <div className="text-[11px] text-[#64748B]">{s.label}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-soft">
                    <h3 className="text-sm font-bold text-[#0F172A] mb-3 flex items-center gap-2" style={{ fontFamily: 'var(--font-display), sans-serif' }}><Users className="w-4 h-4 text-[#10B981]" />Recent Applications</h3>
                    {stats.recentApplications?.length === 0 ? <p className="text-xs text-[#64748B]">No applications yet.</p> :
                      <div className="space-y-2">{stats.recentApplications?.map((app: any) => (
                        <div key={app.id} className="flex items-center gap-3 p-2 rounded-lg bg-[#F8FAFC]">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2563EB] to-[#10B981] inline-flex items-center justify-center text-white text-xs font-bold">{app.name.charAt(0)}</div>
                          <div className="flex-1 min-w-0"><div className="text-xs font-semibold text-[#0F172A] truncate">{app.name}</div><div className="text-[10px] text-[#64748B] truncate">{app.job?.title || 'Unknown'}</div></div>
                          <span className="text-[10px] text-[#64748B]">{new Date(app.createdAt).toLocaleDateString()}</span>
                        </div>
                      ))}</div>}
                  </div>
                  <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-soft">
                    <h3 className="text-sm font-bold text-[#0F172A] mb-3 flex items-center gap-2" style={{ fontFamily: 'var(--font-display), sans-serif' }}><FileText className="w-4 h-4 text-[#F59E0B]" />Recent Quote Requests</h3>
                    {stats.recentQuotes?.length === 0 ? <p className="text-xs text-[#64748B]">No quote requests yet.</p> :
                      <div className="space-y-2">{stats.recentQuotes?.map((quote: any) => (
                        <div key={quote.id} className="flex items-center gap-3 p-2 rounded-lg bg-[#F8FAFC]">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#D97706] inline-flex items-center justify-center text-white"><FileText className="w-4 h-4" /></div>
                          <div className="flex-1 min-w-0"><div className="text-xs font-semibold text-[#0F172A] truncate">{quote.name}</div><div className="text-[10px] text-[#64748B] truncate">{quote.service} · {quote.budget}</div></div>
                          <span className="text-[10px] text-[#64748B]">{new Date(quote.createdAt).toLocaleDateString()}</span>
                        </div>
                      ))}</div>}
                  </div>
                </div>
              </div>
            )}

            {/* CONTENT MANAGER (Services, Products, etc.) */}
            {apiType && tab !== 'jobs' && tab !== 'applications' && tab !== 'quotes' && tab !== 'messages' && tab !== 'dashboard' && (
              <div>
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h3 className="text-sm font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>Manage {currentTab?.label} ({items.length})</h3>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#94A3B8]" />
                      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." className="pl-9 pr-3 py-1.5 rounded-lg bg-white border border-[#E2E8F0] text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] w-40" />
                    </div>
                    <button onClick={() => { setEditingItem(null); setShowModal(true); }} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] shadow-premium hover:-translate-y-0.5 transition-all"><Plus className="w-3.5 h-3.5" />Add</button>
                  </div>
                </div>
                <div className="space-y-2">
                  {filteredItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E2E8F0] shadow-soft">
                      {item.image || item.avatar ? (
                        <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 border border-[#E2E8F0]">
                          <img src={item.image || item.avatar} alt="" className="w-full h-full object-cover" />
                        </div>
                      ) : item.color ? (
                        <div className="w-8 h-8 rounded-lg flex-shrink-0" style={{ background: item.gradient || item.color }} />
                      ) : null}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-bold text-[#0F172A] truncate">{item.title || item.name || item.quote?.substring(0, 40) + '...'}</span>
                          {item.badge && <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white bg-[#F59E0B]">{item.badge}</span>}
                          {item.category && <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#2563EB]/8 text-[#2563EB]">{item.category}</span>}
                        </div>
                        <div className="text-[11px] text-[#64748B] truncate">{item.description || item.tagline || item.role || item.excerpt || ''}</div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button onClick={() => toggleActive(apiType, item)} className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold transition-all ${(item.active !== undefined ? item.active : item.published) ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-gray-100 text-gray-500'}`}>{(item.active !== undefined ? item.active : item.published) ? 'Active' : 'Hidden'}</button>
                        <button onClick={() => { setEditingItem(item); setShowModal(true); }} className="w-7 h-7 rounded-lg inline-flex items-center justify-center bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:text-[#2563EB] transition-all"><Edit2 className="w-3 h-3" /></button>
                        <button onClick={() => deleteItem(apiType, item.id)} className="w-7 h-7 rounded-lg inline-flex items-center justify-center bg-red-50 border border-red-100 text-red-500 hover:bg-red-100 transition-all"><Trash2 className="w-3 h-3" /></button>
                      </div>
                    </div>
                  ))}
                  {filteredItems.length === 0 && <div className="text-center py-8 text-sm text-[#64748B]">No items found.</div>}
                </div>
              </div>
            )}

            {/* JOBS */}
            {tab === 'jobs' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>Manage Jobs ({items.length})</h3>
                  <button onClick={() => { setEditingItem(null); setShowModal(true); }} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] shadow-premium hover:-translate-y-0.5 transition-all"><Plus className="w-3.5 h-3.5" />Add Job</button>
                </div>
                <div className="space-y-2">
                  {items.map((job) => (
                    <div key={job.id} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E2E8F0] shadow-soft">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#10B981] inline-flex items-center justify-center flex-shrink-0"><Briefcase className="w-4 h-4 text-white" /></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2"><span className="text-sm font-bold text-[#0F172A] truncate">{job.title}</span><span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white" style={{ background: job.type === 'Internship' ? '#F59E0B' : '#2563EB' }}>{job.type}</span>{!job.active && <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white bg-gray-400">Inactive</span>}</div>
                        <div className="text-[11px] text-[#64748B]">{job.department} · {job.location} · {job.salary || 'No salary'}</div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button onClick={() => toggleActive('jobs', job)} className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold transition-all ${job.active ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-gray-100 text-gray-500'}`}>{job.active ? 'Active' : 'Hidden'}</button>
                        <button onClick={() => { setEditingItem(job); setShowModal(true); }} className="w-7 h-7 rounded-lg inline-flex items-center justify-center bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:text-[#2563EB] transition-all"><Edit2 className="w-3 h-3" /></button>
                        <button onClick={() => deleteItem('jobs', job.id)} className="w-7 h-7 rounded-lg inline-flex items-center justify-center bg-red-50 border border-red-100 text-red-500 hover:bg-red-100 transition-all"><Trash2 className="w-3 h-3" /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* APPLICATIONS */}
            {tab === 'applications' && (
              <div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'var(--font-display), sans-serif' }}>Job Applications ({applications.length})</h3>
                <div className="space-y-2">
                  {applications.map((app) => (
                    <div key={app.id} className="p-3 rounded-xl bg-white border border-[#E2E8F0] shadow-soft">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2563EB] to-[#10B981] inline-flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{app.name.charAt(0)}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap"><span className="text-sm font-bold text-[#0F172A]">{app.name}</span><span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#2563EB]/8 text-[#2563EB]">{app.job?.title || 'Unknown'}</span></div>
                          <div className="text-[11px] text-[#64748B] mt-0.5">{app.email}{app.phone && ` · ${app.phone}`}</div>
                          {app.coverLetter && <p className="text-xs text-[#475569] mt-1.5 line-clamp-2">{app.coverLetter}</p>}
                          <div className="text-[10px] text-[#94A3B8] mt-1">{new Date(app.createdAt).toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {applications.length === 0 && <div className="text-center py-8 text-sm text-[#64748B]">No applications yet.</div>}
                </div>
              </div>
            )}

            {/* QUOTES */}
            {tab === 'quotes' && stats && (
              <div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'var(--font-display), sans-serif' }}>Quote Requests</h3>
                <div className="space-y-2">
                  {stats.recentQuotes?.map((quote: any) => (
                    <div key={quote.id} className="p-3 rounded-xl bg-white border border-[#E2E8F0] shadow-soft">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#D97706] inline-flex items-center justify-center text-white flex-shrink-0"><FileText className="w-4 h-4" /></div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap"><span className="text-sm font-bold text-[#0F172A]">{quote.name}</span><span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#F59E0B]/10 text-[#F59E0B]">{quote.service}</span><span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#10B981]/10 text-[#10B981]">{quote.budget}</span><span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#2563EB]/10 text-[#2563EB]">{quote.timeline}</span></div>
                          <div className="text-[11px] text-[#64748B] mt-0.5">{quote.email}{quote.company && ` · ${quote.company}`}{quote.phone && ` · ${quote.phone}`}</div>
                          {quote.details && <p className="text-xs text-[#475569] mt-1.5">{quote.details}</p>}
                          <div className="text-[10px] text-[#94A3B8] mt-1">{new Date(quote.createdAt).toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {stats.recentQuotes?.length === 0 && <div className="text-center py-8 text-sm text-[#64748B]">No quote requests yet.</div>}
                </div>
              </div>
            )}

            {/* MESSAGES */}
            {tab === 'messages' && stats && (
              <div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'var(--font-display), sans-serif' }}>Contact Messages</h3>
                <div className="space-y-2">
                  {stats.recentMessages?.map((msg: any) => (
                    <div key={msg.id} className="p-3 rounded-xl bg-white border border-[#E2E8F0] shadow-soft">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6366F1] to-[#818CF8] inline-flex items-center justify-center text-white flex-shrink-0"><Mail className="w-4 h-4" /></div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap"><span className="text-sm font-bold text-[#0F172A]">{msg.name}</span>{msg.company && <span className="text-[10px] text-[#64748B]">· {msg.company}</span>}</div>
                          <div className="text-[11px] text-[#64748B] mt-0.5">{msg.email}{msg.phone && ` · ${msg.phone}`}</div>
                          <p className="text-xs text-[#475569] mt-1.5">{msg.message}</p>
                          <div className="text-[10px] text-[#94A3B8] mt-1">{new Date(msg.createdAt).toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {stats.recentMessages?.length === 0 && <div className="text-center py-8 text-sm text-[#64748B]">No messages yet.</div>}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Edit/Create Modal */}
      <ContentModal
        open={showModal}
        onClose={() => setShowModal(false)}
        item={editingItem}
        fields={fields}
        apiType={apiType || 'jobs'}
        onSave={async (data) => {
          if (editingItem) {
            await fetch(`/api/${apiType}/${editingItem.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
          } else {
            await fetch(`/api/${apiType}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
          }
          setShowModal(false);
          if (apiType) fetchItems(apiType);
           
    fetchStats();
        }}
      />
    </section>
  );
}

// ===== CONTENT MODAL =====
function ContentModal({ open, onClose, item, fields, apiType, onSave }: {
  open: boolean; onClose: () => void; item: any;
  fields: { key: string; label: string; type: string }[];
  apiType: string; onSave: (data: any) => void;
}) {
  const [form, setForm] = useState<any>({});

  useEffect(() => {
    if (item) {
      const newForm: any = {};
      fields.forEach(f => {
        let val = item[f.key];
        if (f.type === 'json' && val) {
          try { val = JSON.parse(val).join('\n'); } catch { val = ''; }
        }
        newForm[f.key] = val ?? (f.type === 'checkbox' ? false : '');
      });
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setForm(newForm);
    } else {
      const newForm: any = {};
      fields.forEach(f => { newForm[f.key] = f.type === 'checkbox' ? false : f.type === 'text' && f.key === 'sortOrder' ? '0' : ''; });
       
      setForm(newForm);
    }
  }, [item, open, fields]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data: any = {};
    fields.forEach(f => {
      let val = form[f.key];
      if (f.type === 'json') {
        val = JSON.stringify((val || '').split('\n').filter((r: string) => r.trim()));
      } else if (f.type === 'checkbox') {
        val = !!val;
      } else if (f.key === 'sortOrder' || f.key === 'rating') {
        val = parseInt(val) || 0;
      }
      data[f.key] = val;
    });
    onSave(data);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#0F172A]/60 backdrop-blur-md overflow-y-auto"
          onClick={onClose}>
          <motion.div initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg my-8 rounded-2xl bg-white shadow-premium-lg overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB] to-[#10B981]" />
            <div className="flex items-center justify-between p-5 border-b border-[#E2E8F0] sticky top-0 bg-white z-10">
              <h3 className="text-base font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display), sans-serif' }}>{item ? 'Edit' : 'Add'} {apiType}</h3>
              <button onClick={onClose} className="w-9 h-9 rounded-xl inline-flex items-center justify-center bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:bg-white"><X className="w-4 h-4" /></button>
            </div>
            <form onSubmit={handleSubmit} className="p-5 space-y-3 max-h-[60vh] overflow-y-auto">
              {fields.map((f) => (
                <div key={f.key}>
                  <label className="block text-[10px] font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5">{f.label}</label>
                  {f.type === 'textarea' ? (
                    <textarea value={form[f.key] || ''} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} rows={3}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all resize-none" />
                  ) : f.type === 'json' ? (
                    <textarea value={form[f.key] || ''} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} rows={4}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all resize-none" />
                  ) : f.type === 'checkbox' ? (
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={!!form[f.key]} onChange={(e) => setForm({ ...form, [f.key]: e.target.checked })} className="w-4 h-4 rounded" />
                      <span className="text-xs text-[#0F172A] font-medium">{form[f.key] ? 'Yes' : 'No'}</span>
                    </label>
                  ) : f.type === 'image' ? (
                    <div className="space-y-2">
                      <input value={form[f.key] || ''} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} placeholder="https://..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all" />
                      {form[f.key] && (
                        <div className="relative w-full h-32 rounded-xl overflow-hidden border border-[#E2E8F0]">
                          <img src={form[f.key]} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                      )}
                    </div>
                  ) : (
                    <input value={form[f.key] || ''} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all" />
                  )}
                </div>
              ))}
              <div className="flex gap-2 pt-2 sticky bottom-0 bg-white">
                <button type="button" onClick={onClose} className="flex-1 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#475569] bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-white transition-all">Cancel</button>
                <button type="submit" className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] shadow-premium hover:shadow-glow-blue transition-all"><Save className="w-3.5 h-3.5" />{item ? 'Update' : 'Create'}</button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
