import React from 'react';
import Navbar from '../../components/Navbar';
import Team from '../../components/Team';
import Footer from '../../components/Footer';

export default function TeamPage() {
  return (
    <div className="min-h-screen w-full bg-[#0c0a09] text-stone-200 selection:bg-stone-800 selection:text-stone-100">
      <Navbar />
      <main className="pt-24">
        <Team />
      </main>
      <Footer />
    </div>
  );
}
