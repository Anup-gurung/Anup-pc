import type { Metadata } from 'next';
import { Inter, Archivo_Black, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import RootLayoutClient from './layout-client.js';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'ANUP GURUNG — Portfolio',
  description: 'Full-Stack Developer, Technopreneur, and Bhutan\'s Tech Pioneer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${archivoBlack.variable} ${mono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-white dark:bg-neutral-950 text-black dark:text-white selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black antialiased overflow-x-hidden transition-colors duration-300">
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}
