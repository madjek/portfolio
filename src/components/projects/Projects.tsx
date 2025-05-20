'use client';

import { useIsMobile } from '@/hooks/useIsMobile';
import { Project } from '@/types/project';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import { Element } from 'react-scroll';
import { ProjectCard } from './ProjectCard';
import { ProjectFilter } from './ProjectFilter';
import { ProjectModal } from './ProjectModal';

export default function Projects() {
  const t = useTranslations('projects');
  const isMobile = useIsMobile();
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects: Project[] = [
    {
      id: 1,
      title: t('ecommerce'),
      description: t('ecommerceDescription'),
      image: '/img/chart.jpg',
      tags: ['React', 'Tailwind', 'Redux', 'Chart.js'],
      githubUrl: 'https://github.com/madjek/portfolio',
      liveUrl: `${locale}/ecommerce`,
      details: t('ecommerceDetails'),
      screenshots: ['/img/chart.jpg', '/img/ecommerce.jpg'],
    },
    {
      id: 2,
      title: t('task'),
      description: t('taskDescription'),
      image: '/img/task.jpg',
      tags: ['React', 'Next.js', 'Tailwind'],
      githubUrl: 'https://github.com/madjek/portfolio',

      liveUrl: `${locale}/task`,
      details: t('taskDetails'),
      screenshots: ['/img/task.jpg', '/img/task2.jpg'],
    },
    {
      id: 3,
      title: t('fitness'),
      description: t('fitnessDescription'),
      image: '/img/fitness.jpg',
      tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/madjek/portfolio',

      liveUrl: `${locale}/fitness`,
      details: t('fitnessDetails'),
      screenshots: ['/img/fitness.jpg', '/img/fitness2.jpg'],
    },
    {
      id: 4,
      title: t('estate'),
      description: t('estateDescription'),
      image: '/img/estate.jpg',
      tags: ['React', 'Next.js', 'Tailwind'],
      githubUrl: 'https://github.com/madjek/portfolio',

      liveUrl: `${locale}/estate`,
      details: t('estateDescription'),
      screenshots: ['/img/estate.jpg', '/img/estate2.jpg'],
    },
    {
      id: 5,
      title: t('social'),
      description: t('socialDescription'),
      image: '/img/social.jpg',
      tags: ['React', 'Redux', 'D3.js', 'Node.js'],
      githubUrl: 'https://github.com/madjek/portfolio',

      liveUrl: `${locale}/social`,
      details: t('socialDetails'),
      screenshots: ['/img/social.jpg', '/img/social2.jpg'],
    },
    {
      id: 6,
      title: t('education'),
      description: t('educationDescription'),
      image: '/img/education.jpg',
      tags: ['React', 'TypeScript', 'Tailwind'],
      githubUrl: 'https://github.com/madjek/portfolio',

      liveUrl: `${locale}/education`,
      details: t('educationDetails'),
      screenshots: ['/img/education.jpg', '/img/education2.jpg'],
    },
  ];
  // Extract unique tags for filter
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags)),
  );
  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <Element name="projects" className="py-4 select-none md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            {t('projects')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg">
            {t('projectsDescription')}
          </p>
        </div>
        <ProjectFilter
          activeFilter={activeFilter}
          filters={allTags}
          onFilterChange={setActiveFilter}
        />
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: isMobile ? 0.2 : 0.4 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </div>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </Element>
  );
}
