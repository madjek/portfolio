import { useTheme } from 'next-themes';
import { FiBell, FiMoon, FiSearch, FiSun } from 'react-icons/fi';

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold md:text-2xl">Insights Hub</h1>
      </div>
      <div className="relative mx-4 hidden max-w-md flex-1 items-center md:flex">
        <FiSearch className="absolute left-3 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-lg border border-gray-300 bg-gray-100 py-2 pr-4 pl-10 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label={
            theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
          }
        >
          {theme === 'dark' ? (
            <FiSun className="h-5 w-5" />
          ) : (
            <FiMoon className="h-5 w-5" />
          )}
        </button>
        <button className="relative rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
          <FiBell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <div className="flex items-center space-x-3">
          <span className="hidden font-medium md:block">John Doe</span>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 font-medium text-white">
            JD
          </div>
        </div>
      </div>
    </header>
  );
}
