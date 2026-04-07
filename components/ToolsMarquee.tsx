import React from "react";
import { Marquee } from "./magicui/marquee";

const partners = [
  "Y Combinator",
  "Sequoia",
  "Andreessen Horowitz",
  "Google for Startups",
  "Microsoft for Startups",
  "AWS Activate",
  "TechStars",
  "Stripe Atlas",
];

const ToolsMarquee: React.FC = () => {
  return (
    <section className="py-8 bg-background border-y border-c-line-3 overflow-hidden">
      <div className="text-center mb-4">
        <span className="text-[10px] font-medium text-c-fg-6 uppercase tracking-[0.2em]">
          Backed by & partnered with
        </span>
      </div>
      <Marquee pauseOnHover className="[--duration:35s] [--gap:3rem]">
        {partners.map((partner) => (
          <span
            key={partner}
            className="text-sm font-semibold text-c-fg-6 hover:text-c-fg-4 transition-colors tracking-wide whitespace-nowrap"
          >
            {partner}
          </span>
        ))}
      </Marquee>
    </section>
  );
};

export default ToolsMarquee;
