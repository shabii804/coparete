-- ============================================
-- Minhas Enterprises — Supabase Schema
-- Run this in your Supabase SQL Editor
-- ============================================

-- ===== USERS =====
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  password TEXT,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===== JOBS =====
CREATE TABLE IF NOT EXISTS jobs (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  title TEXT NOT NULL,
  type TEXT NOT NULL,
  department TEXT NOT NULL,
  location TEXT NOT NULL,
  description TEXT NOT NULL,
  requirements TEXT, -- JSON array
  salary TEXT,
  posted_at TIMESTAMPTZ DEFAULT NOW(),
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS job_applications (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  job_id TEXT REFERENCES jobs(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  resume TEXT,
  cover_letter TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===== LEADS =====
CREATE TABLE IF NOT EXISTS quote_requests (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  service TEXT,
  budget TEXT,
  timeline TEXT,
  name TEXT,
  email TEXT,
  company TEXT,
  phone TEXT,
  details TEXT,
  file TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  name TEXT,
  email TEXT,
  company TEXT,
  phone TEXT,
  message TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===== SERVICES =====
CREATE TABLE IF NOT EXISTS services (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT DEFAULT 'Cpu',
  image TEXT,
  color TEXT DEFAULT '#2563EB',
  gradient TEXT DEFAULT 'linear-gradient(135deg, #2563EB, #3B82F6)',
  glow TEXT DEFAULT 'rgba(37,99,235,0.35)',
  features TEXT, -- JSON array
  benefits TEXT, -- JSON array
  sort_order INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===== PRODUCTS =====
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  name TEXT NOT NULL,
  tagline TEXT,
  description TEXT,
  image TEXT,
  price TEXT,
  badge TEXT,
  icon TEXT DEFAULT 'Cpu',
  color TEXT DEFAULT '#2563EB',
  gradient TEXT DEFAULT 'linear-gradient(135deg, #2563EB, #3B82F6)',
  glow TEXT DEFAULT 'rgba(37,99,235,0.35)',
  features TEXT, -- JSON array
  modules TEXT, -- JSON array
  benefits TEXT, -- JSON array
  sort_order INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===== INDUSTRIES =====
CREATE TABLE IF NOT EXISTS industries (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT DEFAULT 'Building2',
  image TEXT,
  color TEXT DEFAULT '#2563EB',
  bg TEXT DEFAULT '#EFF6FF',
  challenges TEXT, -- JSON array
  solutions TEXT, -- JSON array
  story TEXT,
  sort_order INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===== TEAM =====
CREATE TABLE IF NOT EXISTS team_members (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  name TEXT NOT NULL,
  role TEXT,
  bio TEXT,
  image TEXT,
  accent TEXT DEFAULT '#2563EB',
  experience TEXT,
  skills TEXT, -- JSON array
  linkedin TEXT,
  twitter TEXT,
  sort_order INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===== BLOG =====
CREATE TABLE IF NOT EXISTS blog_posts (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  image TEXT,
  category TEXT,
  author TEXT,
  read_time TEXT,
  published BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===== TESTIMONIALS =====
CREATE TABLE IF NOT EXISTS testimonials (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  quote TEXT NOT NULL,
  name TEXT NOT NULL,
  title TEXT,
  avatar TEXT,
  rating INTEGER DEFAULT 5,
  sort_order INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===== DEV MODELS =====
CREATE TABLE IF NOT EXISTS dev_models (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT DEFAULT 'Repeat',
  image TEXT,
  color TEXT DEFAULT '#2563EB',
  gradient TEXT DEFAULT 'linear-gradient(135deg, #2563EB, #3B82F6)',
  glow TEXT DEFAULT 'rgba(37,99,235,0.35)',
  steps TEXT, -- JSON array
  best TEXT,
  sort_order INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===== TECH STACK =====
CREATE TABLE IF NOT EXISTS tech_items (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  name TEXT NOT NULL,
  icon TEXT DEFAULT 'Code2',
  color TEXT DEFAULT '#2563EB',
  sort_order INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===== SITE SETTINGS =====
CREATE TABLE IF NOT EXISTS site_settings (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  key TEXT UNIQUE NOT NULL,
  value TEXT
);

-- ===== ENABLE ROW LEVEL SECURITY =====
-- Public can read active content
-- Only authenticated admins can write
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE industries ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE dev_models ENABLE ROW LEVEL SECURITY;
ALTER TABLE tech_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Public read services" ON services FOR SELECT USING (active = true);
CREATE POLICY "Public read products" ON products FOR SELECT USING (active = true);
CREATE POLICY "Public read industries" ON industries FOR SELECT USING (active = true);
CREATE POLICY "Public read team" ON team_members FOR SELECT USING (active = true);
CREATE POLICY "Public read blog" ON blog_posts FOR SELECT USING (published = true);
CREATE POLICY "Public read testimonials" ON testimonials FOR SELECT USING (active = true);
CREATE POLICY "Public read dev_models" ON dev_models FOR SELECT USING (active = true);
CREATE POLICY "Public read tech" ON tech_items FOR SELECT USING (active = true);
CREATE POLICY "Public read jobs" ON jobs FOR SELECT USING (active = true);
CREATE POLICY "Public read settings" ON site_settings FOR SELECT USING (true);

-- Public can insert applications, quotes, messages
CREATE POLICY "Public insert applications" ON job_applications FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert quotes" ON quote_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert messages" ON contact_messages FOR INSERT WITH CHECK (true);

-- Authenticated users (admins) can do everything
CREATE POLICY "Admin manage services" ON services FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin manage products" ON products FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin manage industries" ON industries FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin manage team" ON team_members FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin manage blog" ON blog_posts FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin manage testimonials" ON testimonials FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin manage dev_models" ON dev_models FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin manage tech" ON tech_items FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin manage jobs" ON jobs FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin manage settings" ON site_settings FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin read applications" ON job_applications FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admin read quotes" ON quote_requests FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admin read messages" ON contact_messages FOR SELECT TO authenticated USING (true);
