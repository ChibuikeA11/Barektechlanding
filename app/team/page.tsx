import React from 'react';
import Navbar from '../../components/Navbar';
import Team from '../../components/Team';
import Footer from '../../components/Footer';

export const dynamic = 'force-dynamic';

export default function TeamPage() {
  return (
    <div className="min-h-screen w-full bg-background text-text selection:bg-[var(--gray-7)] selection:text-[var(--gray-12)]">
      <Navbar />
      <main className="pt-24">
        <Team />
      </main>
      <Footer />
    </div>
  );
}
