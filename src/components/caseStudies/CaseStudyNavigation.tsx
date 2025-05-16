import { CaseStudy } from '@/types/case';

export default function CaseStudyNavigation({
  caseStudies,
  activeCaseStudy,
  setActiveCaseStudy,
}: {
  caseStudies: CaseStudy[];
  activeCaseStudy: number;
  setActiveCaseStudy: (id: number) => void;
}) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-4">
      {caseStudies.map((study) => (
        <button
          key={study.id}
          onClick={() => setActiveCaseStudy(study.id)}
          className={`cursor-pointer rounded-lg px-6 py-3 duration-300 ${
            activeCaseStudy === study.id
              ? 'bg-indigo-600 text-white shadow-lg'
              : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700'
          }`}
        >
          {study.title}
        </button>
      ))}
    </div>
  );
}
