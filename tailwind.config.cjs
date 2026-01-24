/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        panel: 'var(--color-panel)',
        surface: 'var(--color-surface)',
        overlay: 'var(--color-overlay)',
        border: 'var(--color-border)',
        text: 'var(--color-text)',
        textMuted: 'var(--color-text-secondary)',
        accent: 'var(--accent-9)'
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(60% 40% at 50% 0%, rgba(99,102,241,0.12), transparent)',
        'ambient-glow': 'radial-gradient(70% 50% at 50% 0%, rgba(120,113,108,0.18), transparent)',
        noise:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='.4'/%3E%3C/svg%3E\")"
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-dm-sans)', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
