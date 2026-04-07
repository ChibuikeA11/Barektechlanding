"use client";

import React from "react";
import {
  TwitterLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-c-line-3 pt-16 pb-8 text-c-fg-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Branding */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/BarekIcon.png" alt="Barek" className="w-6 h-6" />
              <span className="font-display font-bold text-c-fg text-sm tracking-tight">
                Barek
              </span>
            </div>
            <p className="text-c-fg-5 text-sm leading-relaxed mb-6 max-w-xs">
              A global studio building AI-native software companies. New York,
              Lagos, London, and beyond.
            </p>
            {/* Newsletter */}
            <form
              className="flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 text-sm bg-[var(--c-card)] border border-[var(--c-card-border)] rounded-lg text-c-fg placeholder:text-c-fg-6 focus:outline-none focus:border-accent/40 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium bg-accent text-accent-fg rounded-lg hover:bg-accent-hover transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Studio */}
          <div>
            <h4 className="font-bold text-c-fg-2 mb-4 text-sm">Studio</h4>
            <ul className="space-y-3 text-sm text-c-fg-5">
              <li>
                <a href="/about" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-accent transition-colors">
                  Ventures
                </a>
              </li>
              <li>
                <a href="/team" className="hover:text-accent transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Ventures */}
          <div>
            <h4 className="font-bold text-c-fg-2 mb-4 text-sm">Ventures</h4>
            <ul className="space-y-3 text-sm text-c-fg-5">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Trimly
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Genna
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  GlamUp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  NeuroCare
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-c-fg-2 mb-4 text-sm">Connect</h4>
            <div className="flex gap-3">
              <IconButton
                asChild
                variant="soft"
                color="gray"
                className="bg-c-bg-2 text-c-fg-5 hover:text-accent hover:bg-accent-soft"
              >
                <a href="#" aria-label="Twitter">
                  <TwitterLogoIcon width={16} height={16} />
                </a>
              </IconButton>
              <IconButton
                asChild
                variant="soft"
                color="gray"
                className="bg-c-bg-2 text-c-fg-5 hover:text-accent hover:bg-accent-soft"
              >
                <a href="#" aria-label="LinkedIn">
                  <LinkedInLogoIcon width={16} height={16} />
                </a>
              </IconButton>
              <IconButton
                asChild
                variant="soft"
                color="gray"
                className="bg-c-bg-2 text-c-fg-5 hover:text-accent hover:bg-accent-soft"
              >
                <a href="#" aria-label="GitHub">
                  <GitHubLogoIcon width={16} height={16} />
                </a>
              </IconButton>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-c-line pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-c-fg-6 text-sm">
            &copy; {new Date().getFullYear()} Barek Technologies. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-c-fg-6">
            <a href="#" className="hover:text-c-fg-4 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-c-fg-4 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
