'use client';

import { useParticleAnimation } from '@/hooks/useParticleAnimation';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { ChevronsDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations('hero');
  const titles = [
    t('title1'),
    t('title2'),
    t('title3'),
    t('title4'),
    t('title5'),
  ];
  const displayText = useTypingAnimation(titles);
  const canvasRef = useParticleAnimation();

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="z-10 container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex-1 text-center md:text-left">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              <span className="block">{t('hello')}</span>
              <span className="text-indigo-500">Yevhenii Madzhar</span>
            </h1>
            <h2 className="mb-6 h-8 text-xl md:text-2xl">
              <span className="text-indigo-400">{displayText}</span>
              <span className="animate-blink">|</span>
            </h2>
            <p className="mb-8 max-w-xl text-lg">{t('description')}</p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href="#contact"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-white transition-colors duration-300 hover:bg-indigo-700"
              >
                {t('contact')}
              </a>
              <a
                href="#projects"
                className="rounded-lg border border-indigo-600 px-6 py-3 text-indigo-600 transition-colors duration-300 hover:bg-indigo-600 hover:text-white"
              >
                {t('viewWork')}
              </a>
            </div>
          </div>
          <div className="max-w-sm flex-1">
            <div className="relative">
              <div className="mx-auto h-64 w-64 overflow-hidden rounded-full border-4 border-indigo-500 shadow-xl md:h-80 md:w-80">
                <Image
                  width={200}
                  height={200}
                  src="/img/hero.jpg"
                  alt="Yevhenii Madzhar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -right-4 -bottom-4 rounded-lg bg-indigo-600 px-4 py-2 text-white shadow-lg">
                <p className="font-medium">{t('experience')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 transform animate-bounce">
          <Link href="#skills" aria-label="Scroll to Skills section">
            <ChevronsDown className="h-12 w-12 text-indigo-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}
