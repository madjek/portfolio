'use client';

import { Testimonial, WorkExperience } from '@/types/testimonials';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import ExperienceItem from './ExperienceItem';
import TabSwitcher from './TabSwitcher';
import TestimonialCard from './TestimonialCard';
import TestimonialControls from './TestimonialControls';

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: t('testimonial1'),
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechVision Inc.',
      image: '/img/sarah.jpg',
    },
    {
      id: 2,
      text: t('testimonial2'),
      name: 'Michael Chen',
      role: 'Product Director',
      company: 'Shop Global',
      image: '/img/michael.jpg',
    },
    {
      id: 3,
      text: t('testimonial3'),
      name: 'Emily Rodriguez',
      role: 'Engineering Manager',
      company: 'DataSoft Solutions',
      image: '/img/emily.jpg',
    },
  ];
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
  const [activeTab, setActiveTab] = useState<'testimonials' | 'experience'>(
    'testimonials',
  );
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  return (
    <section
      id="testimonials"
      className="flex min-h-screen justify-center overflow-hidden bg-gradient-to-b from-transparent to-indigo-50 py-20 dark:to-indigo-950/30"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            {t('experienceTestimonials')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg">{t('etDescription')}</p>
        </div>
        <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'testimonials' && (
          <div className="mx-auto max-w-4xl">
            <TestimonialCard testimonial={testimonials[currentTestimonial]} />
            <TestimonialControls
              count={testimonials.length}
              currentIndex={currentTestimonial}
              onPrev={prevTestimonial}
              onNext={nextTestimonial}
              onSelect={setCurrentTestimonial}
            />
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="mx-auto max-w-4xl">
            <div className="relative border-l-2 border-indigo-500 pl-8">
              {workExperience.map((job) => (
                <ExperienceItem key={job.id} job={job} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
