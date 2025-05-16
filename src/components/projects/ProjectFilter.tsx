import { useTranslations } from 'next-intl';

export const ProjectFilter = ({
  activeFilter,
  filters,
  onFilterChange,
}: {
  activeFilter: string;
  filters: string[];
  onFilterChange: (filter: string) => void;
}) => {
  const t = useTranslations('projects');

  return (
    <div className="mb-10 flex flex-wrap justify-center gap-2">
      <button
        onClick={() => onFilterChange('All')}
        className={`rounded-full px-4 py-2 transition-all duration-300 ${
          activeFilter === 'All'
            ? 'bg-indigo-600 text-white shadow-lg'
            : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700'
        }`}
      >
        {t('all')}
      </button>
      {filters.map((tag) => (
        <button
          key={tag}
          onClick={() => onFilterChange(tag)}
          className={`rounded-full px-4 py-2 transition-all duration-300 ${
            activeFilter === tag
              ? 'bg-indigo-600 text-white shadow-lg'
              : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};
