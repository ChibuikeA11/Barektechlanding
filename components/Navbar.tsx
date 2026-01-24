"use client";

import React, { useState, useEffect } from 'react';
import { HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons';
import { Button, IconButton } from '@radix-ui/themes';

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
          ? 'bg-background/80 backdrop-blur-md border-b border-stone-800 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-10">
          {/* Left: Logo */}
          <a href="#" className="flex items-center gap-2 group z-20 relative">
            <img
              src="/BarekIcon.png"
              alt="Barek"
              className="w-8 h-8"
            />
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
            <Button
              variant="soft"
              color="gray"
              className="px-6 py-2 text-sm font-medium bg-stone-100/10 text-stone-100 hover:bg-stone-100/20 border border-stone-100/10 backdrop-blur-sm"
            >
              Portfolio
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <IconButton
            variant="ghost"
            color="gray"
            className="md:hidden z-20 relative text-stone-100 hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <Cross2Icon width={24} height={24} /> : <HamburgerMenuIcon width={24} height={24} />}
          </IconButton>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-stone-800 overflow-hidden absolute top-full left-0 w-full shadow-2xl">
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
            <Button className="w-full py-3 bg-stone-100 text-stone-900 hover:bg-white">
              Portfolio
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
