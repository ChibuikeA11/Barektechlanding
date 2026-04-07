import React from 'react';
import Navbar from '../../components/Navbar';
import Team from '../../components/Team';
import Footer from '../../components/Footer';

export const dynamic = 'force-dynamic';

export default function TeamPage() {
  return (
    <div className="min-h-screen w-full bg-background text-text selection:bg-accent/20 selection:text-c-fg-em">
      <Navbar />
      <main className="pt-24">
        <Team />
      </main>
      <Footer />
    </div>
  );
}
