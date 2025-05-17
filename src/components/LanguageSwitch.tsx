'use client';

import { routing } from '@/i18n/routing';
import { cn } from '@/utils/cn';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function LanguageDropdown({
  className,
}: {
  className?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  const currentLocale = pathSegments[1];
  const locales = routing.locales;
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);

      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [open]);

  const handleSelect = (locale: string) => {
    if (locale === currentLocale) return;

    pathSegments[1] = locale;
    const newPath = pathSegments.join('/') || '/';
    setOpen(false);
    router.replace(newPath);
  };

  return (
    <div ref={ref} className={cn('relative', className)}>
      <button
        type="button"
        className={cn(
          'flex w-8 cursor-pointer items-center justify-center gap-2 rounded px-1 font-semibold duration-300',
          open
            ? 'bg-indigo-600 text-white dark:bg-indigo-400'
            : 'border border-indigo-500/25 hover:bg-indigo-600 hover:text-white hover:dark:bg-indigo-400',
        )}
        onClick={() => setOpen((v) => !v)}
        aria-label="Select language"
      >
        {currentLocale.toUpperCase()}
      </button>
      <div
        className={cn(
          'absolute left-1/2 z-20 mt-2 -translate-x-1/2 overflow-hidden rounded border border-indigo-500/10 bg-white shadow-lg duration-300 dark:bg-gray-900',
          open
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none -translate-y-2 scale-90 opacity-0',
        )}
      >
        <ul>
          {locales.map((locale) => (
            <li
              key={locale}
              className={cn(
                'cursor-pointer px-2 py-1 text-center text-sm',
                locale === currentLocale
                  ? 'cursor-default text-indigo-600 dark:text-indigo-400'
                  : 'hover:bg-gray-100 hover:dark:bg-gray-800',
              )}
            >
              <button
                className={cn(
                  'cursor-pointer',
                  locale === currentLocale ? 'cursor-default' : '',
                )}
                onClick={() => handleSelect(locale)}
                disabled={locale === currentLocale}
              >
                {locale.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
