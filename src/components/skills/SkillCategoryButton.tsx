import { cn } from '@/utils/cn';
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
      className={cn(
        'flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 shadow-sm shadow-indigo-500/25 duration-300 hover:shadow-none',
        isActive
          ? 'bg-indigo-600 text-white'
          : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700',
      )}
    >
      {category.icon}
      {category.name}
    </button>
  );
}
