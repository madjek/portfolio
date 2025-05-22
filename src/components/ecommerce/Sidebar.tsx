'use client';

import { useNavigationStore } from '@/store/ecommerceStore';
import { cn } from '@/utils/cn';
import { useCallback, useState } from 'react';
import {
  FiBarChart2,
  FiChevronLeft,
  FiChevronRight,
  FiHelpCircle,
  FiLayout,
  FiLogOut,
  FiMenu,
  FiPackage,
  FiSettings,
  FiShoppingCart,
  FiUsers,
  FiX,
} from 'react-icons/fi';
import { LuMegaphone } from 'react-icons/lu';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  collapsed: boolean;
  isActive: boolean;
  onClick: (to: string) => void;
  mobile?: boolean;
}

function NavItem({
  icon,
  label,
  to,
  collapsed,
  isActive,
  onClick,
  mobile = false,
}: NavItemProps) {
  const handleClick = useCallback(() => {
    if (to !== '/logout') {
      onClick(to);
    }
  }, [to, onClick]);

  return (
    <li className="text-nowrap">
      <button
        onClick={handleClick}
        className={cn(
          'flex h-12 w-full items-center rounded-lg px-4 py-3 text-left duration-200',
          isActive
            ? 'bg-blue-50 text-blue-600 dark:bg-gray-700 dark:text-blue-400'
            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700',
          mobile && 'px-3',
        )}
        aria-label={collapsed || mobile ? label : undefined}
      >
        <span className={cn('text-lg', 'mr-3')}>{icon}</span>
        {(!collapsed || mobile) && <span className="font-medium">{label}</span>}
      </button>
    </li>
  );
}
const mainNavItems = [
  { icon: <FiLayout />, label: 'Dashboard', to: '/' },
  { icon: <FiShoppingCart />, label: 'Sales', to: '/sales' },
  { icon: <FiUsers />, label: 'Customers', to: '/customers' },
  { icon: <FiPackage />, label: 'Products', to: '/products' },
  { icon: <LuMegaphone />, label: 'Campaigns', to: '/campaigns' },
  { icon: <FiBarChart2 />, label: 'Analytics', to: '/analytics' },
];
const secondaryNavItems = [
  { icon: <FiSettings />, label: 'Settings', to: '/settings' },
  { icon: <FiHelpCircle />, label: 'Help & Support', to: '/help' },
  { icon: <FiLogOut />, label: 'Logout', to: '/logout' },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { currentRoute, setRoute } = useNavigationStore();
  const toggleCollapse = useCallback(() => setCollapsed((prev) => !prev), []);
  const toggleMobile = useCallback(() => setMobileOpen((prev) => !prev), []);
  const renderNavItems = useCallback(
    (items: typeof mainNavItems, mobile = false) =>
      items.map((item) => (
        <NavItem
          key={item.to}
          icon={item.icon}
          label={item.label}
          to={item.to}
          collapsed={collapsed}
          isActive={currentRoute === item.to}
          onClick={() => {
            setRoute(item.to);

            if (mobile) {
              setMobileOpen(false);
            }
          }}
          mobile={mobile}
        />
      )),
    [collapsed, currentRoute, setRoute],
  );

  return (
    <>
      {/* Mobile menu button */}
      {!mobileOpen && (
        <button
          onClick={toggleMobile}
          className="fixed bottom-4 left-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 p-2 text-white shadow-lg md:hidden"
          aria-label="Open menu"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      )}

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <button
          className="bg-opacity-50 fixed inset-0 z-30 bg-black md:hidden"
          onClick={toggleMobile}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 z-40 h-full border-r border-gray-200 bg-white transition-transform duration-300 md:hidden dark:border-gray-700 dark:bg-gray-800',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
        )}
        aria-label="Mobile sidebar"
      >
        <div className="flex h-16 items-center justify-between p-4">
          <div className="flex items-center">
            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
              IH
            </div>
            <h2 className="text-lg font-bold">IHub</h2>
          </div>
          <button
            onClick={toggleMobile}
            className="rounded-full p-1 text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            aria-label="Close menu"
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>
        <nav className="h-[calc(100%-4rem)] overflow-y-auto">
          <ul className="space-y-1 px-2">
            {renderNavItems(mainNavItems, true)}
          </ul>
          <div className="mt-6 border-t border-gray-200 px-2 pt-6 dark:border-gray-700">
            <ul className="space-y-1">
              {renderNavItems(secondaryNavItems, true)}
            </ul>
          </div>
        </nav>
      </aside>

      {/* Desktop sidebar */}
      <aside
        className={cn(
          'hidden border-r border-gray-200 bg-white transition-all duration-300 md:block dark:border-gray-700 dark:bg-gray-800',
          collapsed ? 'w-17' : 'w-64',
        )}
        aria-label="Desktop sidebar"
      >
        <div className="relative flex items-center justify-between p-4">
          {!collapsed ? (
            <div className="flex items-center">
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
                IH
              </div>
              <h2 className="text-lg font-bold">IHub</h2>
            </div>
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
              IH
            </div>
          )}
          <button
            onClick={toggleCollapse}
            className={cn(
              'rounded-full bg-gray-200 p-1 transition-transform hover:scale-105 dark:bg-gray-700',
              collapsed && 'absolute -right-3',
            )}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? (
              <FiChevronRight className="h-4 w-4" />
            ) : (
              <FiChevronLeft className="h-4 w-4" />
            )}
          </button>
        </div>
        <nav className="mt-6 overflow-hidden">
          <ul className="space-y-1 px-2">{renderNavItems(mainNavItems)}</ul>
          <div className="mt-6 border-t border-gray-200 px-2 pt-6 dark:border-gray-700">
            <ul className="space-y-1">{renderNavItems(secondaryNavItems)}</ul>
          </div>
        </nav>
      </aside>
    </>
  );
}
