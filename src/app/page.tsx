'use client';

import { useEffect, useState } from 'react';
import Preloader from '@/components/minhas/Preloader';
import Navbar from '@/components/minhas/Navbar';
import Hero from '@/components/minhas/Hero';
import About from '@/components/minhas/About';
import Services from '@/components/minhas/Services';
import Impact from '@/components/minhas/Impact';
import Projects from '@/components/minhas/Projects';
import Testimonials from '@/components/minhas/Testimonials';
import Contact from '@/components/minhas/Contact';
import Footer from '@/components/minhas/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Lock body scroll during preloader
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
    // Slight delay so the blur-to-clear reveal reads as a transition
    setTimeout(() => setShowContent(true), 80);
  };

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
        <Navbar visible={showContent} />
        <main className="flex-1">
          <Hero visible={showContent} />
          <About />
          <Services />
          <Impact />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
