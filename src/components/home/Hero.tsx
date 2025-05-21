'use client';

import { useIsMobile } from '@/hooks/useIsMobile';
import { useParticleAnimation } from '@/hooks/useParticleAnimation';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { motion } from 'framer-motion';
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
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              <motion.span
                className="block"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                }}
              >
                {t('hello')}
              </motion.span>
              <motion.span
                className="text-indigo-600 select-text"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                }}
              >
                Yevhenii Madzhar
              </motion.span>
            </h1>
            <h2 className="mb-3 h-8 text-xl md:mb-6 md:text-2xl">
              <motion.span
                className="text-indigo-500"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.6,
                }}
              >
                {displayText}
              </motion.span>
              <span className="animate-blink">|</span>
            </h2>
            <motion.p
              className="mb-3 max-w-xl md:mb-8 md:text-lg"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
              }}
            >
              {t('description')}
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-2 md:justify-start md:gap-4"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
              }}
            >
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
            </motion.div>
          </motion.div>
          <motion.div
            className="max-w-sm flex-1"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 1,
            }}
          >
            <div className="relative">
              <motion.div
                className="mx-auto h-44 w-44 overflow-hidden rounded-full border-4 border-indigo-500 shadow-xl md:h-80 md:w-80"
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <Image
                  priority
                  width={450}
                  height={450}
                  src="/img/home/hero.jpg"
                  alt="Yevhenii Madzhar"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 transform animate-bounce md:bottom-10">
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
