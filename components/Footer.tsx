import React from 'react';
import { TwitterLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { IconButton } from '@radix-ui/themes';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-c-line-3 pt-16 pb-8 text-c-fg-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/BarekIcon.png"
                alt="Barek"
                className="w-6 h-6"
              />
            </div>
            <p className="text-c-fg-5 text-sm leading-relaxed">
              Building the startups redefining everyday technology. A global product studio.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-c-fg-2 mb-4">Studio</h4>
            <ul className="space-y-3 text-sm text-c-fg-5">
              <li><a href="#" className="hover:text-c-fg-3 transition-colors">Philosophy</a></li>
              <li><a href="#" className="hover:text-c-fg-3 transition-colors">Ventures</a></li>
              <li><a href="#" className="hover:text-c-fg-3 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-c-fg-3 transition-colors">News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-c-fg-2 mb-4">Ventures</h4>
            <ul className="space-y-3 text-sm text-c-fg-5">
              <li><a href="#" className="hover:text-c-fg-3 transition-colors">Trimly</a></li>
              <li><a href="#" className="hover:text-c-fg-3 transition-colors">Genna</a></li>
              <li><a href="#" className="hover:text-c-fg-3 transition-colors">GlamUp</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-c-fg-2 mb-4">Social</h4>
            <div className="flex gap-4">
              <IconButton asChild variant="soft" color="gray" className="bg-c-bg-2 text-c-fg-5 hover:text-c-fg hover:bg-c-bg-3">
                <a href="#" aria-label="Twitter">
                  <TwitterLogoIcon width={18} height={18} />
                </a>
              </IconButton>
              <IconButton asChild variant="soft" color="gray" className="bg-c-bg-2 text-c-fg-5 hover:text-c-fg hover:bg-c-bg-3">
                <a href="#" aria-label="LinkedIn">
                  <LinkedInLogoIcon width={18} height={18} />
                </a>
              </IconButton>
              <IconButton asChild variant="soft" color="gray" className="bg-c-bg-2 text-c-fg-5 hover:text-c-fg hover:bg-c-bg-3">
                <a href="#" aria-label="GitHub">
                  <GitHubLogoIcon width={18} height={18} />
                </a>
              </IconButton>
            </div>
          </div>
        </div>

        <div className="border-t border-c-line pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-c-fg-6 text-sm">
            &copy; {new Date().getFullYear()} Barek Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-c-fg-6">
            <a href="#" className="hover:text-c-fg-4">Privacy Policy</a>
            <a href="#" className="hover:text-c-fg-4">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
