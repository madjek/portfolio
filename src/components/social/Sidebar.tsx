import { useNavigationStore } from '@/store/socialStore';
import { cn } from '@/utils/cn';
import { useMemo } from 'react';
import {
  FiBarChart,
  FiBookmark,
  FiCalendar,
  FiChevronLeft,
  FiLogOut,
  FiSettings,
  FiUsers,
} from 'react-icons/fi';
import { LuBrain, LuLayoutDashboard } from 'react-icons/lu';

interface NavItem {
  name: string;
  to: string;
  icon: React.ReactNode;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { currentRoute, setRoute } = useNavigationStore();
  const navItems = useMemo<NavItem[]>(
    () => [
      {
        name: 'Dashboard',
        to: '/dashboard',
        icon: <LuLayoutDashboard size={20} />,
      },
      {
        name: 'Platform Analytics',
        to: '/analytics',
        icon: <FiBarChart size={20} />,
      },
      {
        name: 'Competitor Benchmarking',
        to: '/benchmark',
        icon: <FiUsers size={20} />,
      },
      {
        name: 'AI Insights',
        to: '/insights',
        icon: <LuBrain size={20} />,
      },
      {
        name: 'Reporting',
        to: '/reporting',
        icon: <FiCalendar size={20} />,
      },
      {
        name: 'Saved Dashboards',
        to: '/saved',
        icon: <FiBookmark size={20} />,
      },
      {
        name: 'Settings',
        to: '/settings',
        icon: <FiSettings size={20} />,
      },
    ],
    [],
  );

  return (
    <aside
      className={cn(
        'fixed inset-y-0 z-50 flex h-screen w-64 flex-col justify-between overflow-x-hidden bg-gray-800 duration-300 ease-in-out md:relative',
        isOpen ? 'translate-x-0' : '-translate-x-full md:w-16 md:translate-x-0',
      )}
    >
      <div>
        <div className="relative flex h-[64px] items-center p-4">
          {isOpen ? (
            <div className="flex items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                <span className="font-bold text-white">SL</span>
              </div>
              <span className="ml-3 text-xl font-bold text-white">
                SociaLens
              </span>
              <FiChevronLeft
                size={24}
                className="absolute top-1/2 right-2 translate-y-[-50%] text-gray-400 hover:text-white md:hidden"
                onClick={onClose}
              />
            </div>
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
              <span className="font-bold text-white">SL</span>
            </div>
          )}
        </div>
        <nav className="mt-5 text-nowrap">
          <ul>
            {navItems.map((item) => (
              <li key={item.to} className="mb-2">
                <button
                  onClick={() => setRoute(item.to)}
                  className={cn(
                    'flex h-[48px] w-full items-center px-4 py-3 duration-200',
                    currentRoute === item.to
                      ? 'border-l-4 border-blue-400 bg-gray-700 text-blue-400'
                      : 'text-gray-300 hover:bg-gray-700',
                  )}
                >
                  <span className="mr-3">{item.icon}</span>
                  {isOpen && <span>{item.name}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mb-4">
        <button
          className={cn(
            'flex h-[48px] w-full items-center px-4 py-3 text-gray-300 duration-200 hover:bg-gray-700',
          )}
        >
          <span className="mr-3">
            <FiLogOut size={20} />
          </span>
          {isOpen && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
