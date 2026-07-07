'use client';

import { useEffect, useState } from 'react';
import Preloader from '@/components/minhas/Preloader';
import Navbar from '@/components/minhas/Navbar';
import ScrollProgress from '@/components/minhas/ScrollProgress';
import HomePage from '@/components/minhas/HomePage';
import AboutPage from '@/components/minhas/pages/AboutPage';
import ServicesPage from '@/components/minhas/pages/ServicesPage';
import ProductsPage from '@/components/minhas/pages/ProductsPage';
import IndustriesPage from '@/components/minhas/pages/IndustriesPage';
import PortfolioPage from '@/components/minhas/pages/PortfolioPage';
import TeamPage from '@/components/minhas/pages/TeamPage';
import BlogPage from '@/components/minhas/pages/BlogPage';
import ContactPage from '@/components/minhas/pages/ContactPage';
import Footer from '@/components/minhas/Footer';
import QuoteModal from '@/components/minhas/QuoteModal';
import { NavProvider, type PageId } from '@/components/minhas/NavigationContext';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [page, setPage] = useState<PageId>('home');
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [loading]);

  const handlePreloaderComplete = () => {
    setLoading(false);
    setTimeout(() => setShowContent(true), 80);
  };

  const navigate = (p: PageId) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openQuote = () => setQuoteOpen(true);
  const closeQuote = () => setQuoteOpen(false);

  return (
    <NavProvider value={{ navigate, currentPage: page, openQuote }}>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}

      <div
        className="relative min-h-screen flex flex-col bg-white transition-all duration-1000"
        style={{
          filter: loading ? 'blur(14px)' : 'blur(0px)',
          opacity: loading ? 0.4 : 1,
        }}
      >
        <ScrollProgress />
        <Navbar visible={showContent} />
        <main className="flex-1">
          {page === 'home' && <HomePage visible={showContent} />}
          {page === 'about' && <AboutPage />}
          {page === 'services' && <ServicesPage />}
          {page === 'products' && <ProductsPage />}
          {page === 'industries' && <IndustriesPage />}
          {page === 'portfolio' && <PortfolioPage />}
          {page === 'team' && <TeamPage />}
          {page === 'blog' && <BlogPage />}
          {page === 'contact' && <ContactPage />}
        </main>
        <Footer />
      </div>

      <QuoteModal open={quoteOpen} onClose={closeQuote} />
    </NavProvider>
  );
}
