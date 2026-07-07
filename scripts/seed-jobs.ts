import { db } from '../src/lib/db';

async function main() {
  // Clear existing jobs
  await db.job.deleteMany({});

  const jobs = [
    {
      title: 'Senior Full-Stack Engineer',
      type: 'Full-time',
      department: 'Engineering',
      location: 'Lahore',
      description: 'Join our engineering team to build ERP, AI, and POS systems using React, Node.js, and TypeScript. You will work on products used by thousands of businesses worldwide.',
      requirements: JSON.stringify(['5+ years React/Node.js experience', 'Strong TypeScript skills', 'Experience with PostgreSQL', 'Cloud (AWS/GCP) experience', 'Team leadership']),
      salary: 'PKR 400K - 600K / month',
    },
    {
      title: 'AI/ML Engineer',
      type: 'Full-time',
      department: 'Engineering',
      location: 'Remote',
      description: 'Build LLM-powered chatbots, computer vision models, and predictive analytics systems. Work with OpenAI, LangChain, and TensorFlow to ship practical AI solutions.',
      requirements: JSON.stringify(['3+ years ML experience', 'Python + TensorFlow/PyTorch', 'LLM integration experience', 'RAG pipeline knowledge']),
      salary: 'PKR 350K - 550K / month',
    },
    {
      title: 'Frontend Developer Intern',
      type: 'Internship',
      department: 'Engineering',
      location: 'Lahore',
      description: 'Learn to build modern web apps with React, Next.js, and Tailwind CSS. Perfect for final-year students or recent graduates looking to start their career in tech.',
      requirements: JSON.stringify(['Basic HTML/CSS/JS knowledge', 'Familiarity with React is a plus', 'Eager to learn', 'Available 3-6 months']),
      salary: 'PKR 40K - 60K / month',
    },
    {
      title: 'Product Designer (UI/UX)',
      type: 'Full-time',
      department: 'Design',
      location: 'Lahore',
      description: 'Design beautiful, intuitive interfaces for our ERP, POS, and school management products. Create wireframes, prototypes, and design systems in Figma.',
      requirements: JSON.stringify(['3+ years UI/UX experience', 'Figma expertise', 'Portfolio of web/mobile designs', 'Understanding of design systems']),
      salary: 'PKR 250K - 400K / month',
    },
    {
      title: 'Software Engineering Intern',
      type: 'Internship',
      department: 'Engineering',
      location: 'Remote',
      description: 'Work alongside senior engineers on real projects — ERP modules, POS features, and AI integrations. Gain hands-on experience with modern tech stacks.',
      requirements: JSON.stringify(['CS student or recent grad', 'Basic programming skills', 'Git/GitHub familiarity', 'Available 3 months minimum']),
      salary: 'PKR 35K - 50K / month',
    },
    {
      title: 'DevOps Engineer',
      type: 'Full-time',
      department: 'Engineering',
      location: 'Islamabad',
      description: 'Manage CI/CD pipelines, Kubernetes clusters, and cloud infrastructure. Ensure 99.9% uptime across all our products and services.',
      requirements: JSON.stringify(['3+ years DevOps experience', 'Docker + Kubernetes', 'AWS/GCP certification', 'CI/CD pipeline experience']),
      salary: 'PKR 300K - 500K / month',
    },
    {
      title: 'QA Engineer Intern',
      type: 'Internship',
      department: 'Engineering',
      location: 'Lahore',
      description: 'Learn automated and manual testing across web, mobile, and desktop applications. Write test cases, report bugs, and help us ship quality software.',
      requirements: JSON.stringify(['Attention to detail', 'Basic programming knowledge', 'Familiarity with testing concepts', 'Available 3 months']),
      salary: 'PKR 30K - 45K / month',
    },
    {
      title: 'Sales & Business Development Executive',
      type: 'Full-time',
      department: 'Sales',
      location: 'Karachi',
      description: 'Drive sales of our ERP, POS, and software products. Build relationships with enterprise clients and close deals that grow our business.',
      requirements: JSON.stringify(['2+ years B2B sales experience', 'Tech industry knowledge', 'Strong communication skills', 'CRM experience']),
      salary: 'PKR 200K - 350K + commission',
    },
  ];

  for (const job of jobs) {
    await db.job.create({ data: job });
  }

  console.log(`Seeded ${jobs.length} jobs`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
