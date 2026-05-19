'use client';

import { ReactNode } from 'react';
import SmoothScroll from '@/components/smooth-scroll';
import { ThemeProvider } from '@/components/theme-provider';

export default function RootLayoutClient({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <SmoothScroll>
        {children}
      </SmoothScroll>
    </ThemeProvider>
  );
}
