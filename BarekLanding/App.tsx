import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import GlobalReach from './components/GlobalReach';
import Mission from './components/Mission';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#0c0a09] text-stone-200 selection:bg-stone-800 selection:text-stone-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <GlobalReach />
        <Mission />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;