import Image from 'next/image';
import { FiBell, FiMenu, FiSearch } from 'react-icons/fi';

interface HeaderProps {
  onMenuClick: () => void;
}
export default function Navbar({ onMenuClick }: HeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-gray-700 bg-gray-800 px-4 py-3">
      <div className="flex items-center">
        <button
          onClick={onMenuClick}
          className="mr-4 text-gray-400 hover:text-white"
        >
          <FiMenu size={24} />
        </button>
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-64 rounded-md bg-gray-700 py-2 pr-4 pl-10 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <FiSearch
            size={18}
            className="absolute top-2.5 left-3 text-gray-400"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative text-gray-400 hover:text-white">
          <FiBell size={24} />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <div className="flex items-center">
          <Image
            width={32}
            height={32}
            src="/img/social/m1.jpg"
            alt="User"
            className="h-8 w-8 rounded-full border-2 border-gray-600"
          />
        </div>
      </div>
    </header>
  );
}
