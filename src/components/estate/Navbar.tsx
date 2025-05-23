'use client';

import { cn } from '@/utils/cn';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiHeart, FiHome, FiMenu, FiSearch, FiUser, FiX } from 'react-icons/fi';

interface NavItem {
  name: string;
  to: string;
  icon: React.ReactNode;
}

export default function Navbar() {
  const pathname = usePathname();
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems: NavItem[] = [
    { name: 'Home', to: '/', icon: <FiHome size={18} /> },
    { name: 'Search', to: '/search', icon: <FiSearch size={18} /> },
    {
      name: 'Recommendations',
      to: '/recommendations',
      icon: <FiHeart size={18} />,
    },
    { name: 'Saved', to: '/saved', icon: <FiHeart size={18} /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={'/estate'} className="flex items-center">
              <span className="text-xl font-bold text-blue-600">
                Pro<span className="text-gray-800">Estate</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                href={`/estate${item.to}`}
                key={item.to}
                className={cn(
                  'px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-600',
                  pathname ===
                    `/${locale}/estate${item.to === '/' ? '' : item.to}` &&
                    'text-blue-600',
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Profile Link */}
          <div className="hidden items-center space-x-4 md:flex">
            <Link
              href={'/estate/profile'}
              className="text-gray-600 hover:text-blue-600"
            >
              <FiUser size={20} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-white shadow-lg md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {[
              ...navItems,
              { name: 'Profile', to: '/profile', icon: <FiUser size={18} /> },
            ].map((item) => (
              <Link
                href={`/estate/${item.to}`}
                key={item.to}
                className={cn(
                  'block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600',
                  pathname === `estate/${item.to}` && 'text-blue-600',
                )}
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
              >
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
