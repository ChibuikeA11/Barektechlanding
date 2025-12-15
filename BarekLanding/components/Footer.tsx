import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c0a09] border-t border-stone-900 pt-16 pb-8 text-stone-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded bg-stone-100 flex items-center justify-center text-stone-900 font-bold text-xs">
                B
                </div>
                <span className="font-bold text-lg text-stone-100">Barek</span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed">
              Building the startups redefining everyday technology. San Francisco based product studio.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-stone-200 mb-4">Studio</h4>
            <ul className="space-y-3 text-sm text-stone-500">
              <li><a href="#" className="hover:text-stone-300 transition-colors">Philosophy</a></li>
              <li><a href="#" className="hover:text-stone-300 transition-colors">Ventures</a></li>
              <li><a href="#" className="hover:text-stone-300 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-stone-300 transition-colors">News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-stone-200 mb-4">Ventures</h4>
            <ul className="space-y-3 text-sm text-stone-500">
              <li><a href="#" className="hover:text-stone-300 transition-colors">Trimly</a></li>
              <li><a href="#" className="hover:text-stone-300 transition-colors">Genna</a></li>
              <li><a href="#" className="hover:text-stone-300 transition-colors">GlamUp</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-stone-200 mb-4">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-stone-900 rounded-full text-stone-500 hover:text-stone-100 hover:bg-stone-800 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-stone-900 rounded-full text-stone-500 hover:text-stone-100 hover:bg-stone-800 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-stone-900 rounded-full text-stone-500 hover:text-stone-100 hover:bg-stone-800 transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-600 text-sm">
            © {new Date().getFullYear()} Barek Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-stone-600">
            <a href="#" className="hover:text-stone-400">Privacy Policy</a>
            <a href="#" className="hover:text-stone-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;