'use client';

import { useIsMobile } from '@/hooks/useIsMobile';
import { useParticleAnimation } from '@/hooks/useParticleAnimation';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { LuChevronsDown } from 'react-icons/lu';
import { Element, Link as ScrollLink } from 'react-scroll';

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
  const isMobile = useIsMobile();

  return (
    <Element
      name="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden select-none"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="z-10 container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex-1 text-center md:text-left">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              <span className="block">{t('hello')}</span>
              <span className="text-indigo-600 select-text">
                Yevhenii Madzhar
              </span>
            </h1>
            <h2 className="mb-6 h-8 text-xl md:text-2xl">
              <span className="text-indigo-500">{displayText}</span>
              <span className="animate-blink">|</span>
            </h2>
            <p className="mb-8 max-w-xl text-lg">{t('description')}</p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <ScrollLink
                to="contact"
                smooth
                offset={isMobile ? -70 : 0}
                duration={500}
                className="cursor-pointer rounded-lg bg-indigo-600 px-6 py-3 text-white shadow-sm shadow-indigo-500 duration-300 hover:bg-indigo-700 hover:shadow-none"
              >
                {t('contact')}
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth
                offset={isMobile ? -70 : 0}
                duration={500}
                className="cursor-pointer rounded-lg border border-indigo-600 px-6 py-3 text-indigo-600 shadow-sm shadow-indigo-500 duration-300 hover:bg-indigo-700 hover:text-white hover:shadow-none dark:text-indigo-400"
              >
                {t('viewWork')}
              </ScrollLink>
            </div>
          </div>
          <div className="max-w-sm flex-1">
            <div className="relative">
              <div className="mx-auto h-52 w-52 overflow-hidden rounded-full border-4 border-indigo-500 shadow-xl md:h-80 md:w-80">
                <Image
                  priority
                  width={450}
                  height={450}
                  src="/img/hero.jpg"
                  alt="Yevhenii Madzhar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -right-4 -bottom-4 hidden rounded-lg bg-indigo-600 px-4 py-2 text-white shadow-lg md:block">
                <p className="font-medium">{t('experience')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 transform animate-bounce">
          <ScrollLink
            to="skills"
            smooth
            offset={isMobile ? -70 : 0}
            duration={500}
            aria-label="Scroll to Skills section"
          >
            <LuChevronsDown className="h-12 w-12 cursor-pointer text-indigo-500" />
          </ScrollLink>
        </div>
      </div>
    </Element>
  );
}
