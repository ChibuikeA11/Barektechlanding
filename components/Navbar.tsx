"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Startups', href: '/#portfolio' },
    { name: 'Our Team', href: '/team' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c0a09]/80 backdrop-blur-md border-b border-stone-800 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-10">
          {/* Left: Logo */}
          <a href="#" className="flex items-center gap-2 group z-20 relative">
            <div className={`w-8 h-8 rounded flex items-center justify-center font-bold text-lg transition-colors duration-300 bg-stone-100 text-stone-900`}>
              B
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors duration-300 text-stone-100`}>
              Barek.
            </span>
          </a>

          {/* Center: Navigation Links (Desktop) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 text-stone-400 hover:text-white`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: CTA (Desktop) */}
          <div className="hidden md:flex items-center z-20 relative">
            <button className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-stone-100/10 text-stone-100 hover:bg-stone-100/20 border border-stone-100/10 backdrop-blur-sm`}>
                Portfolio
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors z-20 relative text-stone-100 hover:bg-white/10`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0c0a09] border-b border-stone-800 overflow-hidden absolute top-full left-0 w-full shadow-2xl">
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-stone-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-stone-800 w-full my-2" />
            <button className="w-full py-3 bg-stone-100 text-stone-900 rounded-lg font-medium hover:bg-white transition-colors">
              Portfolio
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
