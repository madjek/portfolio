import { useTheme } from 'next-themes';
import React from 'react';
import {
  FiCalendar,
  FiDollarSign,
  FiPackage,
  FiTrendingUp,
} from 'react-icons/fi';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface SalesData {
  date: string;
  revenue: number;
  orders: number;
}

interface TopProduct {
  name: string;
  sales: number;
  revenue: string;
}

interface MetricCard {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const salesData: SalesData[] = [
  { date: '2025-05-01', revenue: 12500, orders: 150 },
  { date: '2025-05-02', revenue: 14200, orders: 165 },
  { date: '2025-05-03', revenue: 11800, orders: 140 },
  { date: '2025-05-04', revenue: 15600, orders: 180 },
  { date: '2025-05-05', revenue: 13900, orders: 160 },
  { date: '2025-05-06', revenue: 16200, orders: 190 },
  { date: '2025-05-07', revenue: 15800, orders: 175 },
];
const topProducts: TopProduct[] = [
  { name: 'Wireless Earbuds', sales: 245, revenue: '$12,250' },
  { name: 'Smart Watch', sales: 189, revenue: '$37,800' },
  { name: 'Laptop Stand', sales: 167, revenue: '$5,010' },
  { name: 'Mechanical Keyboard', sales: 156, revenue: '$15,600' },
  { name: 'USB-C Hub', sales: 134, revenue: '$6,700' },
];
const metricCards: MetricCard[] = [
  {
    title: 'Total Revenue',
    value: '$89,240',
    icon: <FiDollarSign className="h-5 w-5 text-blue-500" />,
  },
  {
    title: 'Orders',
    value: '1,160',
    icon: <FiPackage className="h-5 w-5 text-green-500" />,
  },
  {
    title: 'Average Order Value',
    value: '$76.93',
    icon: <FiTrendingUp className="h-5 w-5 text-amber-500" />,
  },
  {
    title: 'Sales/Day',
    value: '165',
    icon: <FiCalendar className="h-5 w-5 text-purple-500" />,
  },
];

export default function Sales() {
  const { theme } = useTheme();
  const MetricCard = ({ title, value, icon }: MetricCard) => (
    <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm md:p-5 dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4 flex items-start justify-between">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {title}
        </h3>
        <div className="rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
          {icon}
        </div>
      </div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );

  return (
    <div className="space-y-2 md:space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Sales Overview</h1>
        <div className="flex gap-3">
          <select className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
          </select>
          <button className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
        {metricCards.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-3 shadow-sm md:p-5 dark:border-gray-700 dark:bg-gray-800">
        <h3 className="mb-4 text-lg font-semibold">Revenue & Orders Trend</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={theme === 'dark' ? '#374151' : '#e5e7eb'}
              />
              <XAxis
                dataKey="date"
                stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'}
              />
              <YAxis
                yAxisId="left"
                stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                  borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="revenue"
                stroke="#3b82f6"
                strokeWidth={2}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="orders"
                stroke="#10b981"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-3 shadow-sm md:p-5 dark:border-gray-700 dark:bg-gray-800">
        <h3 className="mb-4 text-lg font-semibold">Top Selling Products</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-xs font-medium tracking-wider uppercase"
                >
                  Product Name
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-xs font-medium tracking-wider uppercase"
                >
                  Units Sold
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-xs font-medium tracking-wider uppercase"
                >
                  Revenue
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {topProducts.map((product, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-4 py-4 text-sm whitespace-nowrap">
                    {product.name}
                  </td>
                  <td className="px-4 py-4 text-sm whitespace-nowrap">
                    {product.sales}
                  </td>
                  <td className="px-4 py-4 text-sm whitespace-nowrap">
                    {product.revenue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
