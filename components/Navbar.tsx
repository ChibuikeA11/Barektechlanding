"use client";

import React, { useState, useEffect } from "react";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import { ThemeToggle } from "./ThemeToggle";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Ventures", href: "/#portfolio" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--c-nav-bg)] backdrop-blur-xl border-b border-[var(--c-nav-border)] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-10">
          {/* Left: Logo */}
          <a href="/" className="flex items-center gap-2.5 group z-20 relative">
            <img src="/BarekIcon.png" alt="Barek" className="w-8 h-8" />
            <span className="font-display font-bold text-c-fg text-sm tracking-tight hidden sm:inline">
              Barek
            </span>
          </a>

          {/* Center: Navigation Links (Desktop) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors duration-300 text-c-fg-4 hover:text-c-fg-em"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: Theme Toggle + CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-3 z-20 relative">
            <ThemeToggle />
            <a
              href="#contact"
              className="px-5 py-2 text-sm font-semibold bg-accent text-accent-fg rounded-lg hover:bg-accent-hover transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile: Theme Toggle + Menu Toggle */}
          <div className="flex md:hidden items-center gap-2 z-20 relative">
            <ThemeToggle />
            <IconButton
              variant="ghost"
              color="gray"
              className="text-c-fg hover:bg-[var(--c-inset)]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <Cross2Icon width={24} height={24} />
              ) : (
                <HamburgerMenuIcon width={24} height={24} />
              )}
            </IconButton>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-c-line overflow-hidden absolute top-full left-0 w-full shadow-card-lg">
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-c-fg-3 hover:text-c-fg-em"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold bg-accent text-accent-fg rounded-lg hover:bg-accent-hover transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
