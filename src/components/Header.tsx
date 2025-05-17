'use client';

import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';
import { Link as ScrollLink } from 'react-scroll';
import ThemeSwitch from './ThemeSwitch';

const navLinks = ['about', 'skills', 'projects', 'experience', 'contact'];

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
        'fixed top-0 right-0 left-0 z-50 duration-300 select-none',
        isScrolled
          ? 'bg-white/90 shadow-lg shadow-gray-800/20 backdrop-blur-md dark:bg-gray-900/90 dark:shadow-indigo-900/10'
          : 'bg-transparent',
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <ScrollLink
          to="about"
          spy
          smooth
          duration={500}
          className="cursor-pointer text-2xl font-bold"
        >
          <span className="text-indigo-600">Dev</span>
          <span>Portfolio</span>
        </ScrollLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <ScrollLink
              key={link}
              to={link}
              spy
              smooth
              duration={500}
              activeClass="text-indigo-600 dark:text-indigo-400"
              className="cursor-pointer duration-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              {t(link)}
            </ScrollLink>
          ))}
          <ThemeSwitch />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <ThemeSwitch />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-gray-100 py-4 md:hidden dark:bg-gray-800">
          <div className="container mx-auto flex flex-col space-y-4 px-4">
            {navLinks.map((link) => (
              <ScrollLink
                key={link}
                to={link}
                spy
                smooth
                duration={500}
                offset={-80}
                activeClass="text-indigo-500"
                className="cursor-pointer py-2 hover:text-indigo-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(link)}
              </ScrollLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
