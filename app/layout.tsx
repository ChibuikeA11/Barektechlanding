import { Space_Grotesk, Inter } from 'next/font/google';
import '@radix-ui/themes/styles.css';
import './globals.css';
import { Providers } from '../components/Providers';
import GlowLayer from '../components/GlowLayer';

export const metadata = {
  title: 'Barek Technologies | AI Venture Studio',
  description: 'We build AI-native software startups from scratch. A global product studio.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  }
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">
        <Providers>
          <div className="relative min-h-screen bg-background text-text">
            <GlowLayer />
            <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.06] mix-blend-overlay" />
            <div className="relative z-10">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
