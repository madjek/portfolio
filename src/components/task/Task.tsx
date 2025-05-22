'use client';

import { useNavigationStore } from '@/store/taskStore';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Settings from './pages/Settings';
import Tasks from './pages/Tasks';
import Teams from './pages/Teams';
import Timeline from './pages/Timeline';

export default function Task() {
  const { currentRoute } = useNavigationStore();
  const renderPage = () => {
    switch (currentRoute) {
      case '/':
        return <Dashboard />;
      case '/projects':
        return <Projects />;
      case '/tasks':
        return <Tasks />;
      case '/teams':
        return <Teams />;
      case '/timeline':
        return <Timeline />;
      case '/settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-gray-50 text-gray-900 select-none dark:bg-gray-900 dark:text-white">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
