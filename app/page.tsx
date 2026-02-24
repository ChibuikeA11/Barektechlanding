import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ToolsMarquee from '../components/ToolsMarquee';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import GlobalReach from '../components/GlobalReach';
import Mission from '../components/Mission';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-background text-text selection:bg-[var(--gray-7)] selection:text-[var(--gray-12)]">
      <Navbar />
      <main>
        <Hero />
        <ToolsMarquee />
        <About />
        <Portfolio />
        <GlobalReach />
        <Mission />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
