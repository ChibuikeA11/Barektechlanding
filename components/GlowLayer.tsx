"use client";

import React from "react";

const GlowLayer: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 [filter:blur(100px)]">
        <div
          className="absolute -left-44 -top-36 h-[560px] w-[560px] rounded-full"
          style={{ background: "var(--c-glow)" }}
        />
        <div
          className="absolute right-[-200px] top-[-140px] h-[600px] w-[600px] rounded-full"
          style={{ background: "var(--c-glow-2)" }}
        />
        <div
          className="absolute left-1/2 top-[42%] h-[520px] w-[520px] -translate-x-1/2 rounded-full"
          style={{ background: "var(--c-glow)" }}
        />
      </div>
    </div>
  );
};

export default GlowLayer;
