'use client';

import { useNavigationStore } from '@/store/socialStore';
import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import AIInsights from './pages/AIInsights';
import CompetitorBenchmarking from './pages/CompetitorBenchmarking';
import Dashboard from './pages/Dashboard';
import PlatformAnalytics from './pages/PlatformAnalytics';
import Reporting from './pages/Reporting';
import SavedDashboards from './pages/SavedDashboards';
import Settings from './pages/Settings';

export default function Social() {
  const { currentRoute } = useNavigationStore();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const renderPage = () => {
    switch (currentRoute) {
      case '/':
        return <Dashboard />;
      case '/analytics':
        return <PlatformAnalytics />;
      case '/benchmark':
        return <CompetitorBenchmarking />;
      case '/insights':
        return <AIInsights />;
      case '/reporting':
        return <Reporting />;
      case '/saved':
        return <SavedDashboards />;
      case '/settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-gray-900 text-white select-none">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
