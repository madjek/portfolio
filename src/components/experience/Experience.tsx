'use client';

import { WorkExperience } from '@/types/experience';
import { useTranslations } from 'next-intl';
import { Element } from 'react-scroll';
import ExperienceItem from './ExperienceItem';

export default function Experience() {
  const t = useTranslations('experience');
  const workExperience: WorkExperience[] = [
    {
      id: 1,
      role: 'Fullstack Developer',
      company: 'Freelance',
      period: `2023 - ${t('present')}`,
      description: t('experience2'),
      logo: '/img/exp2.jpg',
    },
    {
      id: 2,
      role: 'Web Developer',
      company: 'MICRO2ENGINEERING SL',
      period: '2022 - 2023',
      description: t('experience1'),
      logo: '/img/exp1.jpg',
    },
  ];

  return (
    <Element
      name="experience"
      className="flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-transparent to-indigo-50 py-4 select-none md:py-20 dark:to-indigo-950/30"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            {t('experience')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg">
            {t('experienceDescription')}
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative border-l-2 border-indigo-500 pl-8">
            {workExperience.map((job) => (
              <ExperienceItem key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
}
