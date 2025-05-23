import { Link } from '@/i18n/navigation';
import { Project } from '@/types/project';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa6';
import { LuExternalLink } from 'react-icons/lu';

export default function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const t = useTranslations('projects');

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg duration-300 hover:scale-[1.02] hover:shadow-2xl dark:bg-gray-800">
      <div className="relative h-36 overflow-hidden md:h-48">
        <Image
          width={600}
          height={200}
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent">
          <h3 className="p-4 text-xl font-bold text-white">{project.title}</h3>
        </div>
      </div>
      <div className="flex grow flex-col justify-between p-4">
        <p className="mb-4 text-sm">{project.description}</p>
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <span
                key={`${project.id}-${tag}`}
                className="rounded-full bg-indigo-100 px-2 py-1 text-xs text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-2 duration-300 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
                aria-label="GitHub Repository"
              >
                <FaGithub size={18} />
              </Link>
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-2 duration-300 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
                aria-label="Live Demo"
              >
                <LuExternalLink size={18} />
              </Link>
            </div>
            <button
              onClick={onClick}
              className="text-sm font-medium text-indigo-600 duration-300 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              {t('viewDetails')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
