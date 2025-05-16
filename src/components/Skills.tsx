'use client';

import {
  BarChart2Icon,
  CodeIcon,
  PaletteIcon,
  ServerIcon,
  TerminalIcon,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import SkillCard from './SkillCard';
import SkillCategoryButton from './SkillCategoryButton';

type Skill = {
  name: string;
  level: number;
};

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
};

export default function Skills() {
  const t = useTranslations('skills');
  const [activeCategory, setActiveCategory] = useState<string>('Frontend');
  const skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      icon: <CodeIcon size={20} />,
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 85 },
        { name: 'Typescript', level: 80 },
        { name: 'Redux', level: 85 },
        { name: 'HTML5/CSS3', level: 90 },
        { name: 'Bootstrap/Tailwind', level: 90 },
      ],
    },
    {
      name: 'Backend',
      icon: <ServerIcon size={20} />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'Nest.js', level: 80 },
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 70 },
      ],
    },
    {
      name: 'Design',
      icon: <PaletteIcon size={20} />,
      skills: [
        { name: 'UI/UX Design', level: 85 },
        { name: 'Figma', level: 75 },
        { name: 'Responsive Design', level: 95 },
        { name: 'CSS Animation', level: 85 },
        { name: 'Framer Motion', level: 80 },
      ],
    },
    {
      name: 'Tools',
      icon: <TerminalIcon size={20} />,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'GitHub Actions', level: 75 },
        { name: 'Jest/Testing Library', level: 65 },
        { name: 'VS Code', level: 95 },
        { name: 'npm/yarn', level: 90 },
        { name: 'Docker', level: 70 },
      ],
    },
    {
      name: 'Performance',
      icon: <BarChart2Icon size={20} />,
      skills: [
        { name: 'Web Vitals', level: 85 },
        { name: 'Lighthouse', level: 90 },
        { name: 'Bundle Optimization', level: 85 },
        { name: 'SEO', level: 80 },
        { name: 'Code Splitting', level: 80 },
        { name: 'Caching Strategies', level: 75 },
      ],
    },
  ];
  const activeSkills =
    skillCategories.find((category) => category.name === activeCategory)
      ?.skills || [];

  return (
    <section
      id="skills"
      className="flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-transparent to-indigo-50 py-20 dark:to-indigo-950/30"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t('skills')}</h2>
          <p className="mx-auto max-w-2xl text-lg">{t('description')}</p>
        </div>

        {/* Skill Categories Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {skillCategories.map((category) => (
            <SkillCategoryButton
              key={category.name}
              category={category}
              isActive={activeCategory === category.name}
              onClick={() => setActiveCategory(category.name)}
            />
          ))}
        </div>

        {/* Skills Display */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {activeSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
