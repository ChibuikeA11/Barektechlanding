"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";

export const ThemeToggle: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-8 h-8" />;

  return (
    <IconButton
      variant="ghost"
      color="gray"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="text-c-fg-4 hover:text-c-fg-em transition-colors"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <SunIcon width={16} height={16} />
      ) : (
        <MoonIcon width={16} height={16} />
      )}
    </IconButton>
  );
};
