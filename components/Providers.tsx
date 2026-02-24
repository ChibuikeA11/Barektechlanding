"use client";

import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";
import { useTheme } from "next-themes";

function RadixThemeSync({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const appearance = mounted && resolvedTheme === "light" ? "light" : "dark";

  return (
    <Theme appearance={appearance} accentColor="gray" radius="large">
      {children}
    </Theme>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <RadixThemeSync>{children}</RadixThemeSync>
    </ThemeProvider>
  );
}
