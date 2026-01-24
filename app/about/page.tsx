import React from 'react';
import Navbar from '../../components/Navbar';
import AboutPageContent from '../../components/AboutPage';
import Footer from '../../components/Footer';

export const dynamic = 'force-dynamic';

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-background text-text selection:bg-[var(--gray-7)] selection:text-[var(--gray-12)]">
      <Navbar />
      <main className="pt-24">
        <AboutPageContent />
      </main>
      <Footer />
    </div>
  );
}
