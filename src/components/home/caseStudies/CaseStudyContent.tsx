import { CaseStudy } from '@/types/case';
import { useTranslations } from 'next-intl';

export default function CaseStudyContent({ study }: { study: CaseStudy }) {
  const t = useTranslations('cases');

  return (
    <div className="p-6 md:w-1/2 md:p-8">
      <p className="mb-6 text-lg">{study.description}</p>

      <div className="mb-6">
        <h4 className="mb-2 flex items-center text-xl font-semibold">
          <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-sm text-white">
            !
          </span>
          {t('challenge')}
        </h4>
        <p>{study.challenge}</p>
      </div>

      <div className="mb-6">
        <h4 className="mb-2 flex items-center text-xl font-semibold">
          <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 text-sm text-white">
            ✓
          </span>
          {t('solution')}
        </h4>
        <p>{study.solution}</p>
      </div>

      <div className="mb-6">
        <h4 className="mb-2 flex items-center text-xl font-semibold">
          <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-sm text-white">
            ↑
          </span>
          {t('outcome')}
        </h4>
        <p>{study.outcome}</p>
      </div>

      <div>
        <h4 className="mb-2 text-xl font-semibold">{t('technology')}</h4>
        <div className="flex flex-wrap gap-2">
          {study.tech.map((tech, index) => (
            <span
              key={index}
              className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
