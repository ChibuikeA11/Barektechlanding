import { DM_Sans, Inter } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: 'Barek Technologies | Building the Future',
  description: 'Barek Technologies product studio and team.'
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
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
