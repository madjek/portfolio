import { useNavigationStore } from '@/store/educationStore';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import {
  FiAward,
  FiBookOpen,
  FiHome,
  FiLogOut,
  FiMenu,
  FiSettings,
  FiUser,
  FiX,
} from 'react-icons/fi';
import { LuGraduationCap } from 'react-icons/lu';

interface NavItem {
  name: string;
  to: string;
  icon: React.ReactNode;
}

export default function Sidebar() {
  const { currentRoute, setRoute } = useNavigationStore();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navItems = useMemo<NavItem[]>(
    () => [
      {
        name: 'Dashboard',
        to: '/',
        icon: <FiHome size={18} />,
      },
      {
        name: 'Courses',
        to: '/courses',
        icon: <FiBookOpen size={18} />,
      },
      {
        name: 'Certification',
        to: '/certification',
        icon: <FiAward size={18} />,
      },
      {
        name: 'Instructor',
        to: '/instructor',
        icon: <FiUser size={18} />,
      },
      {
        name: 'Settings',
        to: '/settings',
        icon: <FiSettings size={18} />,
      },
    ],
    [],
  );
  const NavButton = ({ item }: { item: NavItem }) => (
    <button
      className={cn(
        'flex w-full items-center rounded-lg px-4 py-2.5 text-sm font-medium duration-200',
        currentRoute === item.to
          ? 'bg-blue-50 text-blue-600'
          : 'text-gray-700 hover:bg-gray-100',
      )}
      onClick={() => {
        setRoute(item.to);
        setIsMobileOpen(false);
      }}
    >
      <span className="mr-3">{item.icon}</span>
      <span>{item.name}</span>
    </button>
  );
  const ProfileSection = () => (
    <div className="border-t border-gray-200 p-4">
      <div className="mb-4 flex items-center gap-3">
        <Image
          width={36}
          height={36}
          src="/img/education/w1.jpg"
          alt="Profile"
          className="h-9 w-9 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium">Emma Wilson</p>
          <p className="text-xs text-gray-500">Student</p>
        </div>
      </div>
      <button className="flex w-full items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 duration-200 hover:bg-gray-100">
        <FiLogOut size={18} className="mr-3" />
        Sign Out
      </button>
    </div>
  );
  const HeaderSection = () => (
    <div className="border-b border-gray-200 p-4">
      <div className="flex items-center gap-2">
        <LuGraduationCap size={24} className="text-blue-600" />
        <h1 className="text-xl font-bold text-blue-600">EduCore</h1>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden h-full flex-col border-r border-gray-200 bg-white md:flex">
        <HeaderSection />
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavButton item={item} />
              </li>
            ))}
          </ul>
        </nav>
        <ProfileSection />
      </aside>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileOpen(true)}
          className="fixed top-2 right-2 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg"
        >
          <FiMenu size={24} />
        </button>

        {/* Mobile menu overlay */}
        <div
          role="button"
          aria-label="Close mobile menu"
          tabIndex={0}
          onClick={() => setIsMobileOpen(false)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setIsMobileOpen(false);
            }
          }}
          className={cn(isMobileOpen && 'fixed inset-0 z-50 bg-black/50')}
        >
          <aside
            className={cn(
              'fixed inset-y-0 left-0 z-10 flex w-50 transform flex-col justify-between bg-white shadow-xl duration-300 ease-in-out',
              isMobileOpen
                ? 'translate-x-0'
                : '-translate-x-full md:w-16 md:translate-x-0',
            )}
          >
            <>
              <div className="flex items-center justify-between border-b border-gray-200 pe-4">
                <HeaderSection />
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FiX size={24} />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-4">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.to}>
                      <NavButton item={item} />
                    </li>
                  ))}
                </ul>
              </nav>
            </>
            <ProfileSection />
          </aside>
        </div>
      </div>
    </>
  );
}
