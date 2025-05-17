'use client';

import { CaseStudy } from '@/types/case';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Element } from 'react-scroll';
import CaseStudyContent from './CaseStudyContent';
import CaseStudyHeader from './CaseStudyHeader';
import CaseStudyNavigation from './CaseStudyNavigation';

export default function CaseStudies() {
  const t = useTranslations('cases');
  const [activeCaseStudy, setActiveCaseStudy] = useState<number>(1);
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'Enterprise Dashboard Redesign',
      subtitle: 'Improving UX and Performance for a Fortune 500 Company',
      description:
        'A complete overhaul of a legacy enterprise dashboard used by 10,000+ employees daily.',
      challenge:
        "The client's existing dashboard was built with outdated technology, resulting in slow load times (8+ seconds), poor mobile experience, and accessibility issues. The complex UI had grown organically over years without consistent design patterns.",
      solution:
        'I led the frontend development of a complete redesign, implementing a component-based architecture with React and TypeScript. We established a design system with atomic components, improved performance with code splitting and lazy loading, and ensured WCAG 2.1 AA compliance.',
      outcome:
        'The redesigned dashboard achieved a 300% performance improvement (load time reduced to 2.5 seconds), increased mobile usage by 45%, and received a 92/100 accessibility score. User satisfaction ratings improved from 3.2/5 to 4.7/5.',
      tech: [
        'React',
        'TypeScript',
        'Redux',
        'Styled Components',
        'Jest',
        'Webpack',
      ],
      image: '/img/chart.jpg',
      diagram: '/img/dashboard.jpg',
    },
    {
      id: 2,
      title: 'E-commerce Platform Migration',
      subtitle: 'From Monolith to Microservices Architecture',
      description:
        'Migration of a high-traffic e-commerce platform from a monolithic architecture to a modern microservices approach.',
      challenge:
        "The client's e-commerce platform was built on a monolithic architecture that had become difficult to maintain and scale. During peak sales events, the site experienced downtime and slow response times, directly impacting revenue.",
      solution:
        'I architected and implemented a frontend migration strategy using Next.js and a micro-frontend approach. We incrementally migrated features while maintaining the existing site, implemented server-side rendering for SEO, and created a unified design system.',
      outcome:
        'The new platform handled a 300% increase in traffic during Black Friday with zero downtime. Page load times decreased by 60%, and conversion rates increased by 24%. The development team was able to deploy updates 5x more frequently.',
      tech: ['Next.js', 'React', 'TypeScript', 'GraphQL', 'Storybook', 'Jest'],
      image: '/img/pay.jpg',
      diagram: '/img/diagram.jpg',
    },
  ];
  const currentCaseStudy =
    caseStudies.find((study) => study.id === activeCaseStudy) || caseStudies[0];

  return (
    <Element
      name="cases"
      className="bg-gradient-to-b from-transparent to-indigo-50 py-20 dark:to-indigo-950/30"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            {t('studies')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg">{t('description')}</p>
        </div>
        <CaseStudyNavigation
          caseStudies={caseStudies}
          activeCaseStudy={activeCaseStudy}
          setActiveCaseStudy={setActiveCaseStudy}
        />
        <div className="overflow-hidden rounded-xl bg-white shadow-xl dark:bg-gray-800">
          <div className="md:flex">
            <CaseStudyHeader study={currentCaseStudy} />
            <CaseStudyContent study={currentCaseStudy} />
          </div>
        </div>
      </div>
    </Element>
  );
}
