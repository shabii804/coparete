'use client';

import { useEffect, useState } from 'react';
import Preloader from '@/components/minhas/Preloader';
import Navbar from '@/components/minhas/Navbar';
import Hero from '@/components/minhas/Hero';
import TrustedClients from '@/components/minhas/TrustedClients';
import About from '@/components/minhas/About';
import Services from '@/components/minhas/Services';
import Products from '@/components/minhas/Products';
import Industries from '@/components/minhas/Industries';
import WhyChooseUs from '@/components/minhas/WhyChooseUs';
import Impact from '@/components/minhas/Impact';
import Process from '@/components/minhas/Process';
import Projects from '@/components/minhas/Projects';
import Technologies from '@/components/minhas/Technologies';
import Testimonials from '@/components/minhas/Testimonials';
import Team from '@/components/minhas/Team';
import Blog from '@/components/minhas/Blog';
import FAQ from '@/components/minhas/FAQ';
import Contact from '@/components/minhas/Contact';
import Footer from '@/components/minhas/Footer';
import QuoteModal from '@/components/minhas/QuoteModal';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  const handlePreloaderComplete = () => {
    setLoading(false);
    setTimeout(() => setShowContent(true), 80);
  };

  const openQuote = () => setQuoteOpen(true);
  const closeQuote = () => setQuoteOpen(false);

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}

      <div
        className="relative min-h-screen flex flex-col bg-white transition-all duration-1000"
        style={{
          filter: loading ? 'blur(14px)' : 'blur(0px)',
          opacity: loading ? 0.4 : 1,
        }}
      >
        <Navbar visible={showContent} onQuoteClick={openQuote} />
        <main className="flex-1">
          <Hero visible={showContent} onQuoteClick={openQuote} />
          <TrustedClients />
          <About />
          <Services />
          <Products />
          <Industries />
          <WhyChooseUs />
          <Impact />
          <Process />
          <Projects />
          <Technologies />
          <Testimonials />
          <Team />
          <Blog />
          <FAQ />
          <Contact onQuoteClick={openQuote} />
        </main>
        <Footer />
      </div>

      <QuoteModal open={quoteOpen} onClose={closeQuote} />
    </>
  );
}
