import React from 'react';

export default function SkillCategoryButton({
  category,
  isActive,
  onClick,
}: {
  category: {
    name: string;
    icon: React.ReactNode;
  };
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 duration-300 ${
        isActive
          ? 'bg-indigo-600 text-white shadow-lg'
          : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700'
      }`}
    >
      {category.icon}
      {category.name}
    </button>
  );
}
