import React from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-background border-t border-c-line-3 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-c-fg mb-6 tracking-tight">
          Build with a productized studio,
          <br />
          <span className="text-c-fg-5">not a services agency.</span>
        </h2>
        <p className="text-lg text-c-fg-4 max-w-2xl mb-10 leading-relaxed">
          Explore our portfolio or apply to partner on a new venture with our team.
        </p>

        <Button
          asChild
          variant="outline"
          color="gray"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border-c-line-2 text-c-fg-3 hover:text-c-fg-em hover:border-c-fg-5 transition-all duration-300"
        >
          <a href="mailto:hello@barek.studio">
            <span>Partner with Us</span>
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTA;
