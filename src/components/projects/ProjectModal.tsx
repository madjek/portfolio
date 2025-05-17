import { Project } from '@/types/project';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { LuX } from 'react-icons/lu';

export const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  const t = useTranslations('projects');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-hidden overflow-y-auto rounded-xl bg-white dark:bg-gray-900">
        <div className="relative h-64 overflow-hidden md:h-80">
          <Image
            width={600}
            height={200}
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 cursor-pointer rounded-full bg-black/50 p-2 text-white duration-300 hover:bg-black/70"
            aria-label="Close modal"
          >
            <LuX size={20} />
          </button>
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={`modal-${project.id}-${tag}`}
                className="rounded-full bg-indigo-100 px-2 py-1 text-xs text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mb-6">{project.details}</p>
          <div>
            <h4 className="mb-2 text-lg font-semibold">{t('screenshots')}</h4>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <Image
                    width={600}
                    height={200}
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="h-48 w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
