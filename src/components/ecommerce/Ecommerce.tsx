'use client';

import { useNavigationStore } from '@/store/ecommerceStore';
import Navbar from './Navbar';
import Analytics from './pages/Analytics';
import Campaigns from './pages/Campaigns';
import Customers from './pages/Customers';
import Dashboard from './pages/Dashboard';
import Help from './pages/Help';
import Products from './pages/Products';
import Sales from './pages/Sales';
import Settings from './pages/Settings';
import Sidebar from './Sidebar';

export default function Ecommerce() {
  const { currentRoute } = useNavigationStore();
  const renderPage = () => {
    switch (currentRoute) {
      case '/':
        return <Dashboard />;
      case '/sales':
        return <Sales />;
      case '/customers':
        return <Customers />;
      case '/products':
        return <Products />;
      case '/campaigns':
        return <Campaigns />;
      case '/analytics':
        return <Analytics />;
      case '/settings':
        return <Settings />;
      case '/help':
        return <Help />;
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
