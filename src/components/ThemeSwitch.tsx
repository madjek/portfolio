'use client';

import { cn } from '@/utils/cn';
import { useTheme } from 'next-themes';
import { LuMoon, LuSun } from 'react-icons/lu';

export default function ThemeSwitch({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = theme === 'dark' || resolvedTheme === 'dark';

  return (
    <button
      id="theme-switch"
      aria-label="Toggle dark mode"
      className={cn(
        'flex h-8 w-8 cursor-pointer items-center justify-center duration-300 hover:text-indigo-600 hover:dark:text-indigo-400',
        className,
      )}
      onClick={() => {
        setTheme(isDark ? 'light' : 'dark');
      }}
    >
      <div>{isDark ? <LuSun size={20} /> : <LuMoon size={20} />}</div>
    </button>
  );
}
