import React from "react";
import { Marquee } from "./magicui/marquee";

const tools = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "TensorFlow", "PostgreSQL", "Redis", "AWS", "Vercel",
  "Figma", "Docker", "GraphQL", "Prisma", "Tailwind CSS",
];

const ToolsMarquee: React.FC = () => {
  return (
    <section className="py-10 bg-background border-y border-c-line-3 overflow-hidden">
      <Marquee pauseOnHover className="[--duration:30s] [--gap:2rem]">
        {tools.map((tool) => (
          <span
            key={tool}
            className="text-sm font-medium text-c-fg-5 tracking-wide uppercase whitespace-nowrap"
          >
            {tool}
          </span>
        ))}
      </Marquee>
    </section>
  );
};

export default ToolsMarquee;
