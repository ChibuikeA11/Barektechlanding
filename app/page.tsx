import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ToolsMarquee from '../components/ToolsMarquee';
import Portfolio from '../components/Portfolio';
import HowWeBuild from '../components/HowWeBuild';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-background text-text selection:bg-accent/20 selection:text-c-fg-em">
      <Navbar />
      <main>
        <Hero />
        <ToolsMarquee />
        <Portfolio />
        <HowWeBuild />
        <About />
        <Testimonials />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
