import { useState } from 'react';
import { FiBell, FiSearch } from 'react-icons/fi';
import { LuGraduationCap } from 'react-icons/lu';

export default function Navbar() {
  const [notifications] = useState(3);

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2 md:hidden">
          <LuGraduationCap size={24} className="text-blue-600" />
          <h1 className="text-xl font-bold text-blue-600">EduCore</h1>
        </div>
        <div className="hidden w-96 items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 md:flex">
          <FiSearch size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for courses, lessons..."
            className="w-full border-none bg-transparent text-sm outline-none"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="relative mr-16 md:mr-0">
            <FiBell size={26} className="text-gray-600" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {notifications}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
