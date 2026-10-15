# Minhas Enterprises — Premium Corporate Tech Website

A world-class, fully responsive corporate website for **Minhas Enterprises**, a technology company specializing in ERP systems, AI solutions, POS platforms, school management software, and desktop applications. Built with Next.js 16, TypeScript, Tailwind CSS 4, Framer Motion, and Prisma ORM.

![Tech Stack](https://img.shields.io/badge/Next.js-16-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-4-38BDF8) ![Prisma](https://img.shields.io/badge/Prisma-6-2D3748) ![Supabase Ready](https://img.shields.io/badge/Supabase-Ready-3ECF8E)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Admin Panel (CMS)](#admin-panel-cms)
- [Database Schema](#database-schema)
- [API Routes](#api-routes)
- [Deploying to Supabase](#deploying-to-supabase)
- [Content Management](#content-management)
- [License](#license)

---

## 📖 Overview

Minhas Enterprises is a full-stack technology company website with a complete CMS admin panel. Every piece of content on the website — services, products, industries, team members, blog posts, testimonials, tech stack, development models, jobs, and internships — is **fully manageable from the admin panel** and stored in a database. Content changes in the admin panel instantly appear on the live website.

### Key Highlights

- **Premium Design** — Apple/Stripe/Vercel-inspired aesthetic with glassmorphism, gradient icons, and smooth animations
- **Full CMS** — Admin panel manages ALL website content (13 content types)
- **Database-Driven** — All content stored in database, served via REST APIs
- **Supabase-Ready** — Includes complete SQL schema with Row Level Security (RLS)
- **Fully Responsive** — Mobile, tablet, and desktop optimized
- **SEO Optimized** — Semantic HTML, structured data, OpenGraph, Twitter Cards
- **Accessible** — WCAG AA compliant, keyboard navigation, ARIA labels, reduced motion support

---

## ✨ Features

### Website Pages

| Page | Description |
|------|-------------|
| **Home** | Hero, About, Mission/Vision, Services, Tech Stack, Industries, Dev Models, Portfolio, Team, Testimonials, Contact |
| **About** | Company story, timeline, awards, certifications, development process, technologies |
| **Services** | 6 services (ERP, AI, POS, School Mgmt, Desktop Apps, Custom Software) with full details |
| **Products** | 4 products (MinhasERP, EduFlow LMS, RetailOne POS, MinhasAI) with pricing & demo requests |
| **Industries** | 9 industries with challenges, solutions, and success stories |
| **Portfolio** | Filterable project gallery with case study links |
| **Team** | 8 team members with photos, roles, skills, and social links |
| **Blog** | Searchable & filterable blog with featured articles |
| **Careers** | Job/internship listings with filters and application form |
| **Contact** | Contact form, WhatsApp, office info, and map |
| **Admin Panel** | Full CMS dashboard with 13 management tabs |

### Interactive Features

- **Premium Loading Animation** — 7-stage preloader with logo reveal, letter-by-letter name, progress bar
- **Sticky Glassmorphism Navbar** — Blue gradient, 80px thick, active page indicator, glassmorphism
- **Floating WhatsApp Button** — Sticky bottom-right with pulse rings and auto-tooltip
- **Multi-Step Quote Modal** — 5-step form (Service → Budget → Timeline → Details → Review)
- **Scroll Progress Bar** — Thin gradient bar at top of viewport
- **Animated Counters** — Statistics count up when scrolled into view
- **Horizontal Tech Stack Marquee** — Dual-direction infinite marquees
- **Colorful Industries Marquee** — Each industry with distinct brand colors
- **Development Process Timeline** — Scroll-linked animated gradient progress line
- **Magnetic Buttons** — Spring physics on hover
- **Parallax Hero** — Background video + content move at different speeds

### Admin Panel (CMS)

The admin panel (accessible at footer → "Admin Panel", password: `minhas2026`) provides full CRUD management for:

1. **Dashboard** — Live stats (jobs, applications, quotes, messages)
2. **Services** — Title, description, icon, image, color, gradient, features, benefits
3. **Products** — Name, tagline, description, image, price, badge, features, modules, benefits
4. **Industries** — Name, description, icon, image, color, challenges, solutions, success story
5. **Team Members** — Name, role, bio, image, experience, skills, social links
6. **Blog Posts** — Title, excerpt, content, image, category, author, published/featured flags
7. **Testimonials** — Quote, name, title, avatar, rating
8. **Dev Models** — Name, description, icon, steps, best-for (Agile, Scrum, Waterfall, DevOps, Lean, Hybrid)
9. **Tech Stack** — Name, icon, color (React, Next.js, TypeScript, etc.)
10. **Jobs** — Title, type, department, location, description, requirements, salary
11. **Applications** — View job applications submitted via Careers page
12. **Quote Requests** — View quotes submitted via multi-step modal
13. **Messages** — View contact form submissions

### Lead Generation

- **Multi-step Quote Modal** — Triggered from navbar, hero, and CTA buttons; saves to database
- **Contact Form** — Saves messages to database with name, email, company, phone, message
- **Job Application Form** — Saves applications with resume URL and cover letter
- **WhatsApp Button** — Direct link to WhatsApp with pre-filled message

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 16 | React framework with App Router |
| **TypeScript** | 5 | Type-safe development |
| **Tailwind CSS** | 4 | Utility-first styling |
| **Framer Motion** | 12 | Animations & transitions |
| **Prisma ORM** | 6 | Database abstraction layer |
| **SQLite** | — | Local development database |
| **Supabase** | — | Production database (PostgreSQL + RLS) |
| **Lucide React** | — | Icon library |
| **Manrope** | — | Display font (headings) |
| **Inter** | — | Body font |
| **shadcn/ui** | — | UI component library |

---

## 📁 Project Structure

```
minhas-enterprises/
├── prisma/
│   ├── schema.prisma              # Prisma schema (15 models)
│   └── supabase-schema.sql        # Supabase SQL with RLS policies
├── public/
│   ├── minhas-logo.svg            # Brand logo
│   ├── logo.svg                   # Favicon
│   └── robots.txt
├── scripts/
│   ├── seed-all.ts                # Seeds all content tables
│   └── seed-jobs.ts               # Seeds jobs only
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── [type]/route.ts           # Dynamic CRUD for all content types
│   │   │   ├── [type]/[id]/route.ts     # Dynamic update/delete by ID
│   │   │   ├── jobs/route.ts             # Jobs GET/POST
│   │   │   ├── jobs/[id]/route.ts        # Jobs PUT/DELETE
│   │   │   ├── applications/route.ts     # Job applications POST
│   │   │   ├── admin/stats/route.ts      # Dashboard statistics
│   │   │   ├── admin/applications/route.ts # View all applications
│   │   │   ├── quote-requests/route.ts  # Quote requests POST
│   │   │   └── contact-messages/route.ts # Contact messages POST
│   │   ├── globals.css            # Global styles + animations + utilities
│   │   ├── layout.tsx             # Root layout (fonts, SEO metadata, schema.org)
│   │   └── page.tsx               # Main page (routing + preloader + admin + WhatsApp)
│   ├── components/
│   │   ├── minhas/
│   │   │   ├── pages/             # Dedicated page components
│   │   │   │   ├── AboutPage.tsx
│   │   │   │   ├── AdminPage.tsx  # Full CMS admin panel
│   │   │   │   ├── BlogPage.tsx
│   │   │   │   ├── CareersPage.tsx
│   │   │   │   ├── ContactPage.tsx
│   │   │   │   ├── IndustriesPage.tsx
│   │   │   │   ├── PortfolioPage.tsx
│   │   │   │   ├── ProductsPage.tsx
│   │   │   │   ├── ServicesPage.tsx
│   │   │   │   └── TeamPage.tsx
│   │   │   ├── Navbar.tsx          # Sticky blue glassmorphism navbar
│   │   │   ├── Hero.tsx           # Two-column hero with floating cards
│   │   │   ├── HomePage.tsx       # Landing page (fetches all content from APIs)
│   │   │   ├── Footer.tsx         # Dark premium footer
│   │   │   ├── Preloader.tsx      # 7-stage loading animation
│   │   │   ├── QuoteModal.tsx     # 5-step quote form
│   │   │   ├── WhatsAppButton.tsx # Sticky floating WhatsApp
│   │   │   ├── ScrollProgress.tsx # Top gradient progress bar
│   │   │   ├── TechStack.tsx      # Dual-direction marquee
│   │   │   ├── Industries.tsx     # Colorful marquee + grid
│   │   │   ├── DevModels.tsx      # SDLC models + process timeline
│   │   │   ├── MissionVision.tsx  # Mission/Vision/Values cards
│   │   │   ├── ContactSection.tsx # Contact form (saves to DB)
│   │   │   ├── IconResolver.ts    # String → Lucide icon mapper
│   │   │   ├── NavigationContext.tsx # Client-side routing context
│   │   │   └── ... (Reveal, SectionHeading, CTA, etc.)
│   │   └── ui/                    # shadcn/ui components
│   └── lib/
│       ├── db.ts                  # Prisma client
│       └── supabase.ts            # Supabase client utilities
├── .env.example                   # Environment variable template
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ or **Bun** runtime
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/shabii804/coparete.git
cd coparete

# Install dependencies
bun install

# Set up the database (SQLite for local development)
bun run db:push

# Seed all content (services, products, industries, team, blog, etc.)
bun run scripts/seed-all.ts

# Start the development server
bun run dev
```

The site will be available at `http://localhost:3000`

### Admin Panel Access

1. Scroll to the footer → click **"Admin Panel"**
2. Enter password: `minhas2026`
3. Manage all content from the dashboard

---

## 🔐 Admin Panel (CMS)

The admin panel is a full CMS that manages ALL website content. It's accessible at the footer "Admin Panel" link.

### Admin Tabs

| Tab | Content Type | Key Fields |
|-----|-------------|------------|
| Dashboard | Statistics | Jobs count, applications, quotes, messages |
| Services | Service | Title, description, icon, image, color, gradient, features, benefits |
| Products | Product | Name, tagline, description, image, price, badge, features, modules |
| Industries | Industry | Name, description, icon, image, color, challenges, solutions, story |
| Team | TeamMember | Name, role, bio, image, experience, skills, social links |
| Blog | BlogPost | Title, excerpt, content, image, category, author, published, featured |
| Testimonials | Testimonial | Quote, name, title, avatar, rating |
| Dev Models | DevModel | Name, description, icon, steps, best-for |
| Tech Stack | TechItem | Name, icon, color |
| Jobs | Job | Title, type, department, location, description, requirements, salary |
| Applications | JobApplication | (Read-only) Submitted applications |
| Quotes | QuoteRequest | (Read-only) Submitted quote requests |
| Messages | ContactMessage | (Read-only) Contact form messages |

### CMS Features

- **Create / Edit / Delete** for all content types
- **Toggle Active/Hidden** — show/hide content without deleting
- **Image Preview** — live image preview when entering image URLs
- **Search** — filter content by name/title
- **Sort Order** — control display order
- **JSON Fields** — features, requirements, skills edited as one-per-line textareas
- **Dynamic Icons** — Lucide icon names stored as strings, resolved to components at runtime

---

## 🗄 Database Schema

The Prisma schema defines 15 models:

### Content Models (CMS-managed)

| Model | Purpose | Key Fields |
|-------|---------|------------|
| `Service` | Services offered | title, description, icon, image, color, gradient, glow, features, benefits |
| `Product` | Software products | name, tagline, description, image, price, badge, features, modules, benefits |
| `Industry` | Industries served | name, description, icon, image, color, bg, challenges, solutions, story |
| `TeamMember` | Team members | name, role, bio, image, accent, experience, skills, linkedin, twitter |
| `BlogPost` | Blog articles | title, excerpt, content, image, category, author, readTime, published, featured |
| `Testimonial` | Customer testimonials | quote, name, title, avatar, rating |
| `DevModel` | Development models | name, description, icon, steps, best |
| `TechItem` | Tech stack items | name, icon, color |
| `SiteSetting` | Site-wide settings | key, value |

### Lead Capture Models

| Model | Purpose | Key Fields |
|-------|---------|------------|
| `Job` | Job/internship postings | title, type, department, location, description, requirements, salary, active |
| `JobApplication` | Job applications | jobId, name, email, phone, resume, coverLetter, status |
| `QuoteRequest` | Quote form submissions | service, budget, timeline, name, email, company, phone, details |
| `ContactMessage` | Contact form submissions | name, email, company, phone, message, status |

---

## 🔌 API Routes

### Dynamic Content API

All content types share a single dynamic API:

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/{type}` | List all items (active only by default) |
| `GET` | `/api/{type}?active=false` | List all items including hidden |
| `POST` | `/api/{type}` | Create new item |
| `PUT` | `/api/{type}/{id}` | Update item |
| `DELETE` | `/api/{type}/{id}` | Delete item |

**Supported types:** `services`, `products`, `industries`, `team`, `blog`, `testimonials`, `devmodels`, `techstack`

### Dedicated APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/jobs` | List all active jobs |
| `POST` | `/api/jobs` | Create a job |
| `PUT` | `/api/jobs/{id}` | Update a job |
| `DELETE` | `/api/jobs/{id}` | Delete a job |
| `POST` | `/api/applications` | Submit a job application |
| `GET` | `/api/admin/applications` | View all applications |
| `GET` | `/api/admin/stats` | Dashboard statistics |
| `POST` | `/api/quote-requests` | Submit a quote request |
| `POST` | `/api/contact-messages` | Submit a contact message |

---

## ☁️ Deploying to Supabase

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note your **Project URL**, **Anon Key**, and **Service Role Key** from Settings → API

### 2. Run the SQL Schema

1. Open Supabase SQL Editor
2. Copy and paste the contents of `prisma/supabase-schema.sql`
3. Click **Run** — this creates all tables with Row Level Security (RLS) policies

### 3. Configure Environment Variables

Create a `.env` file:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Database (for Prisma — point to Supabase PostgreSQL)
DATABASE_URL=postgresql://postgres:your-password@db.your-project.supabase.co:5432/postgres

# Admin
ADMIN_PASSWORD=your-secure-password
```

### 4. Seed Content

```bash
bun run scripts/seed-all.ts
```

### 5. Deploy

Deploy to Vercel, Netlify, or any Next.js-compatible hosting platform.

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Royal Blue | `#2563EB` | Primary accent |
| Emerald Green | `#10B981` | Secondary accent |
| Gold/Amber | `#F59E0B` | Highlight accent |
| Dark Slate | `#0F172A` | Headings text |
| Slate Gray | `#475569` | Body text |
| Light Gray | `#F8FAFC` | Section backgrounds |
| White | `#FFFFFF` | Card backgrounds |
| Light Border | `#E2E8F0` | Borders |

### Typography

- **Headings:** Manrope (800 weight, -0.035em letter-spacing)
- **Body:** Inter (400/500/600 weight)
- **Fluid Type Scale:** Clamp-based responsive sizes from mobile to desktop

### Spacing

- **8px spacing system** — all padding/margins follow 8px multiples
- **Container:** max-width 72rem (1152px) with responsive padding

### Animations

- Framer Motion for all animations
- Spring physics on hover interactions
- Scroll-triggered reveals with `useInView`
- Scroll-linked progress lines with `useScroll` + `useTransform`
- Stagger children for card grids
- GPU transforms only (y, scale, opacity) for 60fps performance

---

## 📝 Content Management

### How Content Flows

```
Admin Panel → API → Database → API → Website
```

1. Admin logs in and creates/edits/deletes content
2. Content saves to database via REST API
3. Website pages fetch content from the same APIs on page load
4. Changes appear instantly on the live website

### Adding a New Service (Example)

1. Go to Admin Panel → Services tab → Click "Add"
2. Fill in: Title, Description, Icon (Lucide name), Image URL, Color, Gradient, Features, Benefits
3. Click "Create"
4. The service immediately appears on the homepage Services section and the Services page

### Managing Jobs/Internships

1. Go to Admin Panel → Jobs tab → Click "Add Job"
2. Fill in: Title, Type (Full-time/Internship/Contract), Department, Location, Description, Requirements, Salary
3. Click "Create"
4. The job immediately appears on the Careers page with an apply button

---

## 📄 License

This project is proprietary software owned by Minhas Enterprises.

---

## 👨‍💻 Author

**shabii804**  
GitHub: [@shabii804](https://github.com/shabii804)  
Repository: [https://github.com/shabii804/coparete](https://github.com/shabii804/coparete)
