export default function TabSwitcher({
  activeTab,
  onTabChange,
}: {
  activeTab: 'testimonials' | 'experience';
  onTabChange: (tab: 'testimonials' | 'experience') => void;
}) {
  return (
    <div className="mb-10 flex justify-center">
      <div className="inline-flex rounded-lg bg-gray-200 p-1 dark:bg-gray-800">
        <button
          onClick={() => onTabChange('testimonials')}
          className={`cursor-pointer rounded-md px-4 py-2 ${
            activeTab === 'testimonials'
              ? 'bg-white shadow-sm dark:bg-gray-700'
              : 'hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          Testimonials
        </button>
        <button
          onClick={() => onTabChange('experience')}
          className={`cursor-pointer rounded-md px-4 py-2 ${
            activeTab === 'experience'
              ? 'bg-white shadow-sm dark:bg-gray-700'
              : 'hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          Work History
        </button>
      </div>
    </div>
  );
}
