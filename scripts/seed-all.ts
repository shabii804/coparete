import { db } from '../src/lib/db';

async function main() {
  console.log('Seeding all content...');

  // ===== SERVICES =====
  await db.service.deleteMany({});
  const services = [
    { title: 'ERP Systems', description: 'Unified enterprise platforms for finance, HR, inventory, and operations.', icon: 'Cpu', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', color: '#2563EB', gradient: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #60A5FA 100%)', glow: 'rgba(37, 99, 235, 0.35)', features: JSON.stringify(['Multi-company accounting','HR & payroll','Real-time inventory','CRM','Customizable dashboards','REST API','Role-based access','Mobile apps']), benefits: JSON.stringify(['40% reduction in operational costs','3x faster month-end close','Single source of truth','SOC 2 compliant']), sortOrder: 0 },
    { title: 'AI & Machine Learning', description: 'LLM integrations, computer vision, and predictive analytics.', icon: 'Brain', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', color: '#10B981', gradient: 'linear-gradient(135deg, #059669 0%, #10B981 50%, #34D399 100%)', glow: 'rgba(16, 185, 129, 0.35)', features: JSON.stringify(['LLM integration','Custom chatbots','Document processing','Computer vision','Predictive analytics','Recommendation engines','RAG pipelines','MLOps']), benefits: JSON.stringify(['Automate repetitive tasks','Faster decisions','Personalized experiences','Reduced costs']), sortOrder: 1 },
    { title: 'POS Systems', description: 'Cloud POS for retail, restaurants, and omnichannel commerce.', icon: 'ShoppingCart', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', color: '#F59E0B', gradient: 'linear-gradient(135deg, #D97706 0%, #F59E0B 50%, #FBBF24 100%)', glow: 'rgba(245, 158, 11, 0.35)', features: JSON.stringify(['Lightning-fast checkout','Real-time inventory','Integrated payments','Offline mode','Multi-location','Loyalty & promotions','KDS','Mobile POS']), benefits: JSON.stringify(['Faster checkout','Omnichannel accuracy','Higher repeat rates','Sales analytics']), sortOrder: 2 },
    { title: 'School Management', description: 'LMS, admissions, attendance, and parent portals.', icon: 'GraduationCap', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', color: '#6366F1', gradient: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 50%, #818CF8 100%)', glow: 'rgba(99, 102, 241, 0.35)', features: JSON.stringify(['Online admissions','Attendance','Grading','Timetable','Online classes','Fee management','Parent portals','Library']), benefits: JSON.stringify(['45% less admin work','Better engagement','Paperless','Real-time insights']), sortOrder: 3 },
    { title: 'Desktop Applications', description: 'Cross-platform desktop apps built with Electron & Tauri.', icon: 'Monitor', image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', color: '#14B8A6', gradient: 'linear-gradient(135deg, #0F766E 0%, #14B8A6 50%, #5EEAD4 100%)', glow: 'rgba(20, 184, 166, 0.35)', features: JSON.stringify(['Cross-platform','Offline-first','Auto-update','Native menus','Hardware integration','Secure storage','Custom branding','Code-signed']), benefits: JSON.stringify(['Works without internet','Native performance','Lower SaaS costs','Hardware support']), sortOrder: 4 },
    { title: 'Custom Software', description: 'Tailored web, mobile, and backend solutions at scale.', icon: 'Database', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', color: '#EC4899', gradient: 'linear-gradient(135deg, #BE185D 0%, #EC4899 50%, #F472B6 100%)', glow: 'rgba(236, 72, 153, 0.35)', features: JSON.stringify(['Web applications','Mobile apps','Backend APIs','Database design','Cloud architecture','DevOps & CI/CD','Integrations','24/7 support']), benefits: JSON.stringify(['Built for your workflow','Scalable','Maintainable','Dedicated support']), sortOrder: 5 },
  ];
  for (const s of services) await db.service.create({ data: s });
  console.log(`✓ Seeded ${services.length} services`);

  // ===== PRODUCTS =====
  await db.product.deleteMany({});
  const products = [
    { name: 'MinhasERP', tagline: 'Enterprise Resource Planning', description: 'Unified enterprise platform for finance, HR, inventory, and operations.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', price: 'From $499/mo', badge: 'Most Popular', icon: 'Cpu', color: '#2563EB', gradient: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #60A5FA 100%)', glow: 'rgba(37, 99, 235, 0.4)', features: JSON.stringify(['Multi-company accounting','HR & payroll','Real-time inventory','CRM','Dashboards','REST API','Role-based access','Mobile apps']), modules: JSON.stringify(['Finance','HR & Payroll','Inventory','CRM','Procurement','Manufacturing','Projects','Analytics']), benefits: JSON.stringify(['40% cost reduction','3x faster close','Single source of truth','SOC 2 compliant']), sortOrder: 0 },
    { name: 'EduFlow LMS', tagline: 'School Management System', description: 'Complete school and campus management platform.', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', price: 'From $1/student/mo', badge: 'For Education', icon: 'GraduationCap', color: '#10B981', gradient: 'linear-gradient(135deg, #059669 0%, #10B981 50%, #34D399 100%)', glow: 'rgba(16, 185, 129, 0.4)', features: JSON.stringify(['Online admissions','Attendance','Grading','Timetable','Online classes','Fee management','Parent portal','Library']), modules: JSON.stringify(['Admissions','Attendance','Grading','LMS','Fees','Timetable','Parent Portal','Analytics']), benefits: JSON.stringify(['45% less admin work','Better engagement','Paperless','Real-time insights']), sortOrder: 1 },
    { name: 'RetailOne POS', tagline: 'Point of Sale & Retail', description: 'Cloud-based POS for retail and restaurants.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', price: 'From $29/store/mo', badge: 'For Retail', icon: 'ShoppingCart', color: '#F59E0B', gradient: 'linear-gradient(135deg, #D97706 0%, #F59E0B 50%, #FBBF24 100%)', glow: 'rgba(245, 158, 11, 0.4)', features: JSON.stringify(['Fast checkout','Inventory sync','Integrated payments','Offline mode','Multi-location','Loyalty','KDS','Mobile POS']), modules: JSON.stringify(['POS','Inventory','Payments','Loyalty','Analytics','Multi-Location','KDS','Mobile']), benefits: JSON.stringify(['Faster checkout','Omnichannel accuracy','Higher repeat rates','Sales analytics']), sortOrder: 2 },
    { name: 'MinhasAI', tagline: 'AI & Automation Platform', description: 'Embed LLM-powered chatbots and predictive analytics.', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', price: 'Custom', badge: 'New', icon: 'Brain', color: '#6366F1', gradient: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 50%, #818CF8 100%)', glow: 'rgba(99, 102, 241, 0.4)', features: JSON.stringify(['LLM integration','Chatbots','Document AI','Computer vision','Predictive analytics','RAG','Automation','Monitoring']), modules: JSON.stringify(['Chatbots','Document AI','Vision','Analytics','Automation','RAG','Monitoring','API']), benefits: JSON.stringify(['Automate tasks','Faster decisions','Personalized experiences','Reduced costs']), sortOrder: 3 },
  ];
  for (const p of products) await db.product.create({ data: p });
  console.log(`✓ Seeded ${products.length} products`);

  // ===== INDUSTRIES =====
  await db.industry.deleteMany({});
  const industries = [
    { name: 'Education', description: 'LMS, student portals, and campus management.', icon: 'GraduationCap', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', color: '#3B82F6', bg: '#EFF6FF', challenges: JSON.stringify(['Outdated LMS','Fragmented data','Low engagement','Manual processes']), solutions: JSON.stringify(['LMS with live classes','Unified SIS','Mobile engagement','Automated admissions']), story: 'Deployed a unified campus platform for 12,000 students, reducing admin workload by 45%.', sortOrder: 0 },
    { name: 'Healthcare', description: 'EMR, telemedicine, and patient platforms.', icon: 'HeartPulse', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', color: '#EC4899', bg: '#FDF2F8', challenges: JSON.stringify(['Siloed records','Slow scheduling','Compliance burdens','Limited telemedicine']), solutions: JSON.stringify(['EMR with sharing','Online booking','HIPAA infrastructure','Telemedicine']), story: 'Built a telemedicine platform serving 200K+ patients across 15 clinics.', sortOrder: 1 },
    { name: 'Retail', description: 'POS, e-commerce, and inventory tools.', icon: 'ShoppingBag', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', color: '#F59E0B', bg: '#FFFBEB', challenges: JSON.stringify(['Inventory mismatches','Slow checkout','Limited insights','Omnichannel complexity']), solutions: JSON.stringify(['Unified POS','Real-time sync','Analytics dashboard','Loyalty program']), story: 'Implemented omnichannel retail for a 50-store chain, increasing repeat purchases by 35%.', sortOrder: 2 },
    { name: 'Manufacturing', description: 'ERP, supply chain, and maintenance.', icon: 'Factory', image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', color: '#6366F1', bg: '#EEF2FF', challenges: JSON.stringify(['Unplanned downtime','Supply chain gaps','Quality inconsistencies','Rising costs']), solutions: JSON.stringify(['ERP with production planning','IoT predictive maintenance','Quality management','Analytics']), story: 'Deployed predictive maintenance for a textile manufacturer, cutting downtime by 40%.', sortOrder: 3 },
    { name: 'Real Estate', description: 'Property management, CRM, and portals.', icon: 'Building2', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', color: '#10B981', bg: '#ECFDF5', challenges: JSON.stringify(['Manual management','Slow communication','Fragmented finances','Limited visibility']), solutions: JSON.stringify(['Property platform','Tenant portal','Integrated accounting','Market analytics']), story: 'Launched a property suite for a 2,000-unit portfolio, reducing vacancy by 22%.', sortOrder: 4 },
    { name: 'Construction', description: 'Project tracking, BIM, and contractors.', icon: 'Home', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', color: '#F97316', bg: '#FFF7ED', challenges: JSON.stringify(['Schedule overruns','Budget leakage','Safety tracking','Document chaos']), solutions: JSON.stringify(['Project tracking','Contractor portal','Safety compliance','BIM management']), story: 'Built project tracking for a $200M development, delivering 3 months ahead of schedule.', sortOrder: 5 },
    { name: 'Restaurants', description: 'POS, kitchen displays, and delivery.', icon: 'UtensilsCrossed', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', color: '#EF4444', bg: '#FEF2F2', challenges: JSON.stringify(['Long wait times','Delivery complexity','Inventory spoilage','Inconsistent experience']), solutions: JSON.stringify(['Cloud POS','Delivery integration','Inventory management','Loyalty program']), story: 'Rolled out POS + delivery across 30 locations, boosting average order value by 18%.', sortOrder: 6 },
    { name: 'Logistics', description: 'Fleet, route optimization, and WMS.', icon: 'Truck', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', color: '#06B6D4', bg: '#ECFEFF', challenges: JSON.stringify(['Route inefficiency','Limited visibility','Warehouse utilization','Customs delays']), solutions: JSON.stringify(['Route optimization','Real-time tracking','WMS automation','Customs automation']), story: 'Implemented route optimization for a 200-vehicle fleet, reducing fuel costs by 25%.', sortOrder: 7 },
    { name: 'Government', description: 'Citizen services, e-governance, compliance.', icon: 'Landmark', image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', color: '#8B5CF6', bg: '#F5F3FF', challenges: JSON.stringify(['Legacy systems','Accessibility','Security','Coordination']), solutions: JSON.stringify(['Citizen portals','Workflow automation','Secure infrastructure','Data exchange']), story: 'Built a citizen services portal processing 500K+ applications annually.', sortOrder: 8 },
  ];
  for (const ind of industries) await db.industry.create({ data: ind });
  console.log(`✓ Seeded ${industries.length} industries`);

  // ===== TEAM =====
  await db.teamMember.deleteMany({});
  const team = [
    { name: 'Imran Minhas', role: 'Founder & CEO', bio: 'Three decades building diversified enterprises across South Asia and the Gulf.', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', accent: '#2563EB', experience: '30+ years', skills: JSON.stringify(['Strategy','Leadership','M&A','Real Estate']) },
    { name: 'Ayesha Minhas', role: 'Chief Technology Officer', bio: 'Leads engineering and product strategy across all divisions.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', accent: '#10B981', experience: '18 years', skills: JSON.stringify(['Cloud','Architecture','AI/ML','DevOps']) },
    { name: 'Bilal Ahmed', role: 'VP of Engineering', bio: 'Drives digital transformation and cloud infrastructure.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', accent: '#F59E0B', experience: '15 years', skills: JSON.stringify(['Product','Engineering','UX','Agile']) },
    { name: 'Sana Khan', role: 'Head of Product', bio: 'Oversees product operations and logistics.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', accent: '#6366F1', experience: '16 years', skills: JSON.stringify(['Logistics','Supply Chain','Process','P&L']) },
  ];
  for (const m of team) await db.teamMember.create({ data: m });
  console.log(`✓ Seeded ${team.length} team members`);

  // ===== BLOG =====
  await db.blogPost.deleteMany({});
  const posts = [
    { title: 'Why diversified enterprises outperform single-sector peers', excerpt: 'A look at the data behind why spreading risk across industries creates more resilient returns.', content: 'Full article content here...', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', category: 'Strategy', author: 'Imran Minhas', readTime: '6 min', published: true, featured: true },
    { title: 'The case for solar in South Asia: 5 lessons from GreenGrid', excerpt: 'What we learned building a 120MW solar farm.', content: 'Full article content...', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', category: 'Energy', author: 'Bilal Ahmed', readTime: '8 min', published: true, featured: false },
    { title: 'Building ERP that people actually want to use', excerpt: 'Inside the design decisions behind MinhasERP.', content: 'Full article content...', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', category: 'Product', author: 'Sana Khan', readTime: '5 min', published: true, featured: false },
  ];
  for (const p of posts) await db.blogPost.create({ data: p });
  console.log(`✓ Seeded ${posts.length} blog posts`);

  // ===== TESTIMONIALS =====
  await db.testimonial.deleteMany({});
  const testimonials = [
    { quote: 'Minhas Enterprises delivered our headquarters six months ahead of schedule without compromising on a single detail.', name: 'Ayesha Rahman', title: 'CEO, Nucleus Holdings', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', rating: 5, sortOrder: 0 },
    { quote: 'We partnered with their technology division to modernize a 30-year-old supply chain. The result was a 40% reduction in operating cost.', name: 'David Chen', title: 'COO, Meridian Logistics', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', rating: 5, sortOrder: 1 },
    { quote: 'Working with Minhas feels less like dealing with a conglomerate and more like working with a family.', name: 'Sara Al-Mansoori', title: 'Founder, Aurora Ventures', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', rating: 5, sortOrder: 2 },
  ];
  for (const t of testimonials) await db.testimonial.create({ data: t });
  console.log(`✓ Seeded ${testimonials.length} testimonials`);

  // ===== DEV MODELS =====
  await db.devModel.deleteMany({});
  const devModels = [
    { name: 'Agile', description: 'Iterative sprints with continuous feedback, ideal for evolving requirements and fast delivery.', icon: 'Repeat', color: '#2563EB', gradient: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #60A5FA 100%)', glow: 'rgba(37, 99, 235, 0.4)', steps: JSON.stringify(['Sprint Planning','Daily Standups','Sprint Review','Retrospective']), best: 'Startups & SaaS products', sortOrder: 0 },
    { name: 'Scrum', description: 'Structured Agile framework with dedicated roles and time-boxed sprints.', icon: 'Users', color: '#10B981', gradient: 'linear-gradient(135deg, #059669 0%, #10B981 50%, #34D399 100%)', glow: 'rgba(16, 185, 129, 0.4)', steps: JSON.stringify(['Product Backlog','Sprint (2-4 weeks)','Scrum Ceremonies','Increment Delivery']), best: 'Mid-to-large product teams', sortOrder: 1 },
    { name: 'Waterfall', description: 'Sequential phases where each stage completes before the next begins.', icon: 'Waves', color: '#F59E0B', gradient: 'linear-gradient(135deg, #D97706 0%, #F59E0B 50%, #FBBF24 100%)', glow: 'rgba(245, 158, 11, 0.4)', steps: JSON.stringify(['Requirements','Design','Implementation','Testing & Deployment']), best: 'Enterprise & regulated industries', sortOrder: 2 },
    { name: 'DevOps', description: 'CI/CD pipelines with automated testing and deployment.', icon: 'GitBranch', color: '#6366F1', gradient: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 50%, #818CF8 100%)', glow: 'rgba(99, 102, 241, 0.4)', steps: JSON.stringify(['Code','Build & Test','Deploy','Monitor & Iterate']), best: 'Cloud & SaaS at scale', sortOrder: 3 },
    { name: 'Lean', description: 'Build-Measure-Learn loops to ship MVPs fast.', icon: 'Rocket', color: '#14B8A6', gradient: 'linear-gradient(135deg, #0F766E 0%, #14B8A6 50%, #5EEAD4 100%)', glow: 'rgba(20, 184, 166, 0.4)', steps: JSON.stringify(['Identify','Build MVP','Measure','Learn & Pivot']), best: 'Early-stage startups', sortOrder: 4 },
    { name: 'Hybrid', description: 'Blends Agile flexibility with Waterfall structure.', icon: 'Target', color: '#EC4899', gradient: 'linear-gradient(135deg, #BE185D 0%, #EC4899 50%, #F472B6 100%)', glow: 'rgba(236, 72, 153, 0.4)', steps: JSON.stringify(['Plan (Waterfall)','Execute (Agile)','Review','Deploy']), best: 'Enterprise transformations', sortOrder: 5 },
  ];
  for (const m of devModels) await db.devModel.create({ data: m });
  console.log(`✓ Seeded ${devModels.length} dev models`);

  // ===== TECH STACK =====
  await db.techItem.deleteMany({});
  const techItems = [
    { name: 'React', icon: 'Code2', color: '#61DAFB', sortOrder: 0 },
    { name: 'Next.js', icon: 'Layers', color: '#0F172A', sortOrder: 1 },
    { name: 'TypeScript', icon: 'Code2', color: '#3178C6', sortOrder: 2 },
    { name: 'Node.js', icon: 'Boxes', color: '#339933', sortOrder: 3 },
    { name: 'Python', icon: 'Code2', color: '#3776AB', sortOrder: 4 },
    { name: 'PostgreSQL', icon: 'Database', color: '#4169E1', sortOrder: 5 },
    { name: 'AWS', icon: 'Cloud', color: '#FF9900', sortOrder: 6 },
    { name: 'Docker', icon: 'Container', color: '#2496ED', sortOrder: 7 },
    { name: 'Kubernetes', icon: 'Boxes', color: '#326CE5', sortOrder: 8 },
    { name: 'OpenAI', icon: 'Brain', color: '#10A37F', sortOrder: 9 },
    { name: 'LangChain', icon: 'Bot', color: '#1C3C3C', sortOrder: 10 },
    { name: 'GraphQL', icon: 'Workflow', color: '#E10098', sortOrder: 11 },
    { name: 'Redis', icon: 'Zap', color: '#DC382D', sortOrder: 12 },
    { name: 'TensorFlow', icon: 'Brain', color: '#FF6F00', sortOrder: 13 },
    { name: 'Electron', icon: 'Smartphone', color: '#47848F', sortOrder: 14 },
    { name: 'Blockchain', icon: 'Blocks', color: '#F7931A', sortOrder: 15 },
    { name: 'IoT', icon: 'Wifi', color: '#2563EB', sortOrder: 16 },
    { name: 'Microservices', icon: 'Server', color: '#6366F1', sortOrder: 17 },
  ];
  for (const t of techItems) await db.techItem.create({ data: t });
  console.log(`✓ Seeded ${techItems.length} tech items`);

  // ===== JOBS (re-seed) =====
  await db.job.deleteMany({});
  const jobs = [
    { title: 'Senior Full-Stack Engineer', type: 'Full-time', department: 'Engineering', location: 'Lahore', description: 'Build ERP, AI, and POS systems using React, Node.js, and TypeScript.', requirements: JSON.stringify(['5+ years React/Node.js','Strong TypeScript','PostgreSQL','Cloud experience']), salary: 'PKR 400K - 600K / month' },
    { title: 'AI/ML Engineer', type: 'Full-time', department: 'Engineering', location: 'Remote', description: 'Build LLM-powered chatbots, computer vision models, and predictive analytics.', requirements: JSON.stringify(['3+ years ML','Python + TensorFlow','LLM integration','RAG pipelines']), salary: 'PKR 350K - 550K / month' },
    { title: 'Frontend Developer Intern', type: 'Internship', department: 'Engineering', location: 'Lahore', description: 'Learn to build modern web apps with React, Next.js, and Tailwind CSS.', requirements: JSON.stringify(['Basic HTML/CSS/JS','React familiarity','Eager to learn','3-6 months available']), salary: 'PKR 40K - 60K / month' },
    { title: 'Product Designer (UI/UX)', type: 'Full-time', department: 'Design', location: 'Lahore', description: 'Design beautiful, intuitive interfaces for our products.', requirements: JSON.stringify(['3+ years UI/UX','Figma expertise','Portfolio','Design systems']), salary: 'PKR 250K - 400K / month' },
    { title: 'Software Engineering Intern', type: 'Internship', department: 'Engineering', location: 'Remote', description: 'Work alongside senior engineers on real projects.', requirements: JSON.stringify(['CS student or grad','Basic programming','Git/GitHub','3 months minimum']), salary: 'PKR 35K - 50K / month' },
    { title: 'DevOps Engineer', type: 'Full-time', department: 'Engineering', location: 'Islamabad', description: 'Manage CI/CD pipelines, Kubernetes clusters, and cloud infrastructure.', requirements: JSON.stringify(['3+ years DevOps','Docker + Kubernetes','AWS/GCP cert','CI/CD experience']), salary: 'PKR 300K - 500K / month' },
    { title: 'QA Engineer Intern', type: 'Internship', department: 'Engineering', location: 'Lahore', description: 'Learn automated and manual testing across web, mobile, and desktop.', requirements: JSON.stringify(['Attention to detail','Basic programming','Testing concepts','3 months']), salary: 'PKR 30K - 45K / month' },
    { title: 'Sales Executive', type: 'Full-time', department: 'Sales', location: 'Karachi', description: 'Drive sales of our ERP, POS, and software products.', requirements: JSON.stringify(['2+ years B2B sales','Tech industry','Communication skills','CRM experience']), salary: 'PKR 200K - 350K + commission' },
  ];
  for (const j of jobs) await db.job.create({ data: j });
  console.log(`✓ Seeded ${jobs.length} jobs`);

  console.log('\n✅ All content seeded successfully!');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await db.$disconnect(); });
