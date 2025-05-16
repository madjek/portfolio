'use client';

const NextThemesProvider = dynamic(
  () => import('next-themes').then((e) => e.ThemeProvider),
  {
    ssr: false,
  },
);

import { ThemeProviderProps } from 'next-themes';
import dynamic from 'next/dynamic';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider defaultTheme="system" enableSystem {...props}>
      {children}
    </NextThemesProvider>
  );
}
