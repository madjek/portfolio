import { useMemo } from 'react';
import {
  FiDollarSign,
  FiPercent,
  FiShoppingCart,
  FiUsers,
} from 'react-icons/fi';
import CustomerDemographicsChart from '../charts/CustomerDemographicsChart';
import KPICard from '../charts/KPICard';
import RecentTransactionsTable from '../charts/RecentTransactionsTable';
import SalesChart from '../charts/SalesChart';
import TrafficSourcesChart from '../charts/TrafficSourcesChart';

interface KPIItem {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  color: string;
}

export default function Dashboard() {
  const kpiData = useMemo<KPIItem[]>(
    () => [
      {
        title: 'Total Revenue',
        value: '$48,294.50',
        change: 12.5,
        icon: <FiDollarSign className="h-5 w-5" />,
        color: 'text-blue-500',
      },
      {
        title: 'Total Orders',
        value: '1,248',
        change: 8.2,
        icon: <FiShoppingCart className="h-5 w-5" />,
        color: 'text-green-500',
      },
      {
        title: 'Conversion Rate',
        value: '3.6%',
        change: -2.4,
        icon: <FiPercent className="h-5 w-5" />,
        color: 'text-amber-500',
      },
      {
        title: 'Customer Retention',
        value: '78.5%',
        change: 5.1,
        icon: <FiUsers className="h-5 w-5" />,
        color: 'text-purple-500',
      },
    ],
    [],
  );

  return (
    <main className="space-y-2 md:space-y-6">
      <section aria-labelledby="kpi-heading">
        <h2 id="kpi-heading" className="sr-only">
          Key Performance Indicators
        </h2>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2 md:gap-4 lg:grid-cols-4">
          {kpiData.map((kpi, index) => (
            <KPICard
              key={`kpi-${index}`}
              title={kpi.title}
              value={kpi.value}
              change={kpi.change}
              icon={kpi.icon}
              iconColor={kpi.color}
            />
          ))}
        </div>
      </section>

      <section aria-labelledby="charts-heading">
        <h2 id="charts-heading" className="sr-only">
          Analytics Charts
        </h2>
        <div className="grid grid-cols-1 gap-2 md:gap-2 md:gap-6 lg:grid-cols-2">
          <div className="col-span-2">
            <SalesChart />
          </div>
          <div className="col-span-2 md:col-span-1">
            <TrafficSourcesChart />
          </div>
          <div className="col-span-2 md:col-span-1">
            <CustomerDemographicsChart />
          </div>
        </div>
      </section>

      <section aria-labelledby="transactions-heading">
        <h2
          id="transactions-heading"
          className="mb-4 text-lg font-semibold text-gray-900 dark:text-white"
        >
          Recent Transactions
        </h2>
        <RecentTransactionsTable />
      </section>
    </main>
  );
}
