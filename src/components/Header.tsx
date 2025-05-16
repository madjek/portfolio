'use client';

import { Link } from '@/i18n/navigation';
import { cn } from '@/utils/cn';
import { MenuIcon, XIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import ThemeSwitch from './ThemeSwitch';

export default function Header() {
  const t = useTranslations('header');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 duration-300',
        isScrolled
          ? 'bg-white/90 shadow-lg shadow-gray-800/20 backdrop-blur-md dark:bg-gray-900/90 dark:shadow-none'
          : 'bg-transparent',
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="#" className="text-2xl font-bold">
          <span className="text-indigo-500">Dev</span>
          <span>Portfolio</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          <Link href="#about" className="duration-300 hover:text-indigo-500">
            {t('about')}
          </Link>
          <Link href="#skills" className="duration-300 hover:text-indigo-500">
            {t('skills')}
          </Link>
          <Link href="#projects" className="duration-300 hover:text-indigo-500">
            {t('projects')}
          </Link>
          <Link
            href="#case-studies"
            className="duration-300 hover:text-indigo-500"
          >
            {t('studies')}
          </Link>
          <Link href="#contact" className="duration-300 hover:text-indigo-500">
            {t('contact')}
          </Link>
          <ThemeSwitch />
        </nav>
        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <ThemeSwitch />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-gray-100 py-4 md:hidden dark:bg-gray-800">
          <div className="container mx-auto flex flex-col space-y-4 px-4">
            <Link
              href="#{t('hello')}"
              className="py-2 hover:text-indigo-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('about')}
            </Link>
            <Link
              href="#skills"
              className="py-2 hover:text-indigo-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('skills')}
            </Link>
            <Link
              href="#projects"
              className="py-2 hover:text-indigo-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('projects')}
            </Link>
            <Link
              href="#case-studies"
              className="py-2 hover:text-indigo-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('studies')}
            </Link>
            <Link
              href="#contact"
              className="py-2 hover:text-indigo-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('contact')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
