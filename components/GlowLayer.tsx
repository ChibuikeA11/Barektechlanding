"use client";

import React from "react";

const GlowLayer: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 [filter:blur(100px)]">
        {/* Top-left — warm neutral */}
        <div
          className="absolute -left-44 -top-36 h-[560px] w-[560px] rounded-full"
          style={{ background: "var(--c-glow)" }}
        />
        {/* Top-right — accent tinted ellipse */}
        <div
          className="absolute right-[-200px] top-[-140px] h-[500px] w-[700px]"
          style={{
            background:
              "radial-gradient(ellipse at center, var(--c-accent-soft) 0%, transparent 70%)",
          }}
        />
        {/* Mid-center — neutral */}
        <div
          className="absolute left-1/2 top-[42%] h-[520px] w-[520px] -translate-x-1/2 rounded-full"
          style={{ background: "var(--c-glow)" }}
        />
        {/* Bottom — accent ellipse, wide and subtle */}
        <div
          className="absolute bottom-[-10%] left-[20%] h-[400px] w-[800px]"
          style={{
            background:
              "radial-gradient(ellipse at center, var(--c-accent-soft) 0%, transparent 65%)",
            opacity: 0.5,
          }}
        />
      </div>
    </div>
  );
};

export default GlowLayer;
