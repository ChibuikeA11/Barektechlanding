import React from 'react';
import Navbar from '../../components/Navbar';
import AboutPageContent from '../../components/AboutPage';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-[#0c0a09] text-stone-200 selection:bg-stone-800 selection:text-stone-100">
      <Navbar />
      <main className="pt-24">
        <AboutPageContent />
      </main>
      <Footer />
    </div>
  );
}
