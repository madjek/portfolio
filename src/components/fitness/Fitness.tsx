'use client';

import { useNavigationStore } from '@/store/fitnessStore';
import Sidebar from './Sidebar';
import Dashboard from './pages/Dashboard';
import Nutrition from './pages/Nutrition';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tracker from './pages/Tracker';
import Workouts from './pages/Workouts';

export default function Fitness() {
  const { currentRoute } = useNavigationStore();
  const renderPage = () => {
    switch (currentRoute) {
      case '/':
        return <Dashboard />;
      case '/workouts':
        return <Workouts />;
      case '/tracker':
        return <Tracker />;
      case '/nutrition':
        return <Nutrition />;
      case '/profile':
        return <Profile />;
      case '/settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-white p-4 pb-16 text-black md:ml-48 md:p-6 md:pb-0">
        {renderPage()}
      </main>
    </div>
  );
}
