/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
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
        accent: 'var(--accent-9)',
        c: {
          fg:    'var(--c-fg)',
          'fg-2':  'var(--c-fg-2)',
          'fg-3':  'var(--c-fg-3)',
          'fg-4':  'var(--c-fg-4)',
          'fg-5':  'var(--c-fg-5)',
          'fg-6':  'var(--c-fg-6)',
          'fg-em': 'var(--c-fg-em)',
          'bg-2':  'var(--c-bg-2)',
          'bg-3':  'var(--c-bg-3)',
          line:    'var(--c-line)',
          'line-2': 'var(--c-line-2)',
          'line-3': 'var(--c-line-3)',
          dot:     'var(--c-dot)',
          'icon-bg':     'var(--c-icon-bg)',
          'icon-border': 'var(--c-icon-border)',
        }
      },
      boxShadow: {
        card:      'var(--c-shadow)',
        'card-lg': 'var(--c-shadow-lg)',
      },
      backgroundImage: {
        noise:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='.4'/%3E%3C/svg%3E\")"
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-dm-sans)', 'system-ui', 'sans-serif']
      },
      animation: {
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) infinite linear",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      }
    }
  },
  plugins: []
};
