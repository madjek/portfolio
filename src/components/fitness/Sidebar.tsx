'use client';

import { useIsMobile } from '@/hooks/useIsMobile';
import { useNavigationStore } from '@/store/fitnessStore';
import { cn } from '@/utils/cn';
import { FiActivity, FiHome, FiSettings, FiUser } from 'react-icons/fi';
import { LuApple, LuBicepsFlexed } from 'react-icons/lu';

export default function Sidebar() {
  const { currentRoute, setRoute } = useNavigationStore();
  const isMobile = useIsMobile();
  const navItems = [
    { path: '/', icon: FiHome, label: 'Dashboard' },
    { path: '/workouts', icon: LuBicepsFlexed, label: 'Workouts' },
    { path: '/tracker', icon: FiActivity, label: 'Tracker' },
    { path: '/nutrition', icon: LuApple, label: 'Nutrition' },
    { path: '/profile', icon: FiUser, label: 'Profile' },
    { path: '/settings', icon: FiSettings, label: 'Settings' },
  ];

  if (isMobile) {
    return (
      <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around bg-white p-3 md:hidden">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => setRoute(item.path)}
            className={cn(
              'flex flex-col items-center',
              currentRoute === item.path ? 'text-blue-500' : 'text-gray-500',
            )}
          >
            <item.icon size={20} />
            <span className="mt-1 text-xs">{item.label}</span>
          </button>
        ))}
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 hidden h-full w-48 flex-col bg-white p-4 shadow-sm md:flex">
      <div className="mt-4 mb-8">
        <h1 className="text-2xl font-bold text-blue-500">FitTrack</h1>
        <p className="text-sm text-gray-500">Personal Fitness Platform</p>
      </div>
      <div className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => setRoute(item.path)}
            className={cn(
              'flex items-center rounded-lg p-3 text-black',
              currentRoute === item.path
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-100',
            )}
          >
            <item.icon size={20} className="mr-3" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
