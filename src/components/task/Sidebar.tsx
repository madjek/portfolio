import { useNavigationStore } from '@/store/taskStore';
import { cn } from '@/utils/cn';
import React, { useMemo } from 'react';
import {
  FiCalendar,
  FiCheckSquare,
  FiFolder,
  FiLayout,
  FiLogOut,
  FiSettings,
  FiUsers,
} from 'react-icons/fi';

interface NavItem {
  name: string;
  to: string;
  icon: React.ReactNode;
}

export default function Sidebar() {
  const { currentRoute, setRoute } = useNavigationStore();
  const navItems = useMemo<NavItem[]>(
    () => [
      {
        name: 'Dashboard',
        to: '/dashboard',
        icon: <FiLayout size={18} />,
      },
      {
        name: 'Projects',
        to: '/projects',
        icon: <FiFolder size={18} />,
      },
      {
        name: 'Tasks',
        to: '/tasks',
        icon: <FiCheckSquare size={18} />,
      },
      {
        name: 'Teams',
        to: '/teams',
        icon: <FiUsers size={18} />,
      },
      {
        name: 'Timeline',
        to: '/timeline',
        icon: <FiCalendar size={18} />,
      },
      {
        name: 'Settings',
        to: '/settings',
        icon: <FiSettings size={18} />,
      },
    ],
    [],
  );
  const handleSignOut = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <aside className="hidden h-full w-48 flex-col border-r border-gray-200 bg-white md:flex dark:border-gray-700 dark:bg-gray-800">
      <div className="border-b border-gray-200 p-4 dark:border-gray-700">
        <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
          TeamFlow
        </h1>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          Task Collaboration App
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <button
                className={cn(
                  'flex w-full items-center rounded-lg px-4 py-2.5 text-sm font-medium duration-200',
                  currentRoute === item.to
                    ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50',
                )}
                onClick={() => setRoute(item.to)}
              >
                <span className="mr-3" aria-hidden="true">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-gray-200 p-4 dark:border-gray-700">
        <button
          onClick={handleSignOut}
          className="flex w-full items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 duration-200 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50"
          aria-label="Sign out"
        >
          <FiLogOut size={18} className="mr-3" aria-hidden="true" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
