import { useNavigationStore } from '@/store/taskStore';
import { cn } from '@/utils/cn';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { FiBell, FiMenu, FiMoon, FiSearch, FiSun, FiX } from 'react-icons/fi';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { currentRoute, setRoute } = useNavigationStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    { name: 'Dashboard', to: '/dashboard' },
    { name: 'Projects', to: '/projects' },
    { name: 'Tasks', to: '/tasks' },
    { name: 'Teams', to: '/teams' },
    { name: 'Timeline', to: '/timeline' },
    { name: 'Settings', to: '/settings' },
  ];

  return (
    <header className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center justify-between px-4 py-4 md:px-6">
        {/* Mobile menu button and logo */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            aria-label="Toggle menu"
          >
            <FiMenu size={24} />
          </button>
          <h1 className="ml-3 text-lg font-bold text-indigo-600 md:hidden dark:text-indigo-400">
            TeamFlow
          </h1>
        </div>

        {/* Desktop search */}
        <div className="hidden md:flex md:max-w-md md:flex-1">
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <FiSearch size={18} className="text-gray-400" />
            </div>
            <input
              type="search"
              placeholder="Search..."
              className="w-full rounded-xl border-0 bg-gray-100 py-2 pr-4 pl-10 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-700"
            />
          </div>
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-3">
          <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
            <FiBell size={20} aria-label="Notifications" />
          </button>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            aria-label={
              theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            }
          >
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 font-medium text-white">
            JD
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm md:hidden">
          <div className="fixed top-0 bottom-0 left-0 w-64 bg-white p-4 dark:bg-gray-800">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                TeamFlow
              </h1>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                aria-label="Close menu"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="relative mb-6">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FiSearch size={18} className="text-gray-400" />
              </div>
              <input
                type="search"
                placeholder="Search..."
                className="w-full rounded-xl border-0 bg-gray-100 py-2 pr-4 pl-10 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-700"
              />
            </div>

            <nav>
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setRoute(item.to);
                      }}
                      className={cn(
                        'block w-full rounded-xl px-4 py-2.5 text-left text-sm font-medium',
                        currentRoute === item.to
                          ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400'
                          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50',
                      )}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
                <li className="border-t border-gray-200 dark:border-gray-700">
                  <button className="block w-full rounded-xl px-4 py-2.5 text-left text-sm font-medium">
                    Sign Out
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
