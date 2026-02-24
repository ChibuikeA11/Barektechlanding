import { DM_Sans, Inter } from 'next/font/google';
import '@radix-ui/themes/styles.css';
import './globals.css';
import { Providers } from '../components/Providers';
import GlowLayer from '../components/GlowLayer';

export const metadata = {
  title: 'Barek Technologies | Building the Future',
  description: 'Barek Technologies product studio and team.',
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

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${dmSans.variable}`}>
      <body className="font-sans">
        <Providers>
          <div className="relative min-h-screen bg-background text-text">
            <GlowLayer />
            <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" />
            <div className="relative z-10">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
