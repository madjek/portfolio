import { useTheme } from 'next-themes';
import {
  FiDollarSign,
  FiShoppingCart,
  FiTrendingUp,
  FiUsers,
} from 'react-icons/fi';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const revenueData = [
  { date: 'Jan', value: 65000 },
  { date: 'Feb', value: 72000 },
  { date: 'Mar', value: 68000 },
  { date: 'Apr', value: 85000 },
  { date: 'May', value: 92000 },
  { date: 'Jun', value: 88000 },
];
const channelData = [
  { name: 'Direct', value: 35 },
  { name: 'Organic', value: 25 },
  { name: 'Referral', value: 20 },
  { name: 'Social', value: 20 },
];
const deviceData = [
  { device: 'Desktop', sessions: 4500 },
  { device: 'Mobile', sessions: 3800 },
  { device: 'Tablet', sessions: 1200 },
];
const COLORS = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b'];
const stats = [
  {
    title: 'Total Revenue',
    value: '$495,200',
    change: '+12.5%',
    icon: <FiDollarSign className="h-5 w-5 text-blue-500" />,
  },
  {
    title: 'Total Users',
    value: '48,592',
    change: '+8.2%',
    icon: <FiUsers className="h-5 w-5 text-green-500" />,
  },
  {
    title: 'Conversion Rate',
    value: '3.42%',
    change: '+1.2%',
    icon: <FiTrendingUp className="h-5 w-5 text-amber-500" />,
  },
  {
    title: 'Avg Order Value',
    value: '$86.53',
    change: '+4.3%',
    icon: <FiShoppingCart className="h-5 w-5 text-purple-500" />,
  },
];
const metrics = [
  { label: 'Bounce Rate', value: '42.3%', change: '-2.1%' },
  { label: 'Pages per Session', value: '3.8', change: '+0.5' },
  { label: 'Avg. Session Duration', value: '4m 12s', change: '+22s' },
  { label: 'New Users', value: '12,486', change: '+15.3%' },
];
export default function Analytics() {
  const { theme } = useTheme();

  return (
    <div className="space-y-2 md:space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Analytics Overview</h1>
        <div className="flex gap-3">
          <select className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>Last 12 Months</option>
          </select>
          <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Export Report
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm md:p-5 dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {item.title}
              </h3>
              <div className="rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
                {item.icon}
              </div>
            </div>
            <div className="mb-1 text-2xl font-bold">{item.value}</div>
            <div className="text-sm text-green-500">{item.change}</div>
          </div>
        ))}
      </div>

      {/* Charts and Metrics */}
      <div className="grid grid-cols-1 gap-2 md:gap-6 lg:grid-cols-2">
        {/* Revenue Trend */}
        <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-3 shadow-sm md:p-5 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-4 text-lg font-semibold">Revenue Trend</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#e5e7eb"
                  className="dark:stroke-gray-700"
                />
                <XAxis
                  dataKey="date"
                  stroke="#6b7280"
                  className="dark:stroke-gray-400"
                />
                <YAxis stroke="#6b7280" className="dark:stroke-gray-400" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                    borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Traffic Channels */}
        <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-3 shadow-sm md:p-5 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-4 text-lg font-semibold">Traffic Channels</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={channelData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {channelData.map((_, idx) => (
                    <Cell
                      key={`cell-${idx}`}
                      fill={COLORS[idx % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                    borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Device Usage */}
        <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-3 shadow-sm md:p-5 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-4 text-lg font-semibold">Device Usage</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deviceData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#e5e7eb"
                  className="dark:stroke-gray-700"
                />
                <XAxis
                  dataKey="device"
                  stroke="#6b7280"
                  className="dark:stroke-gray-400"
                />
                <YAxis stroke="#6b7280" className="dark:stroke-gray-400" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                    borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                  }}
                />
                <Bar dataKey="sessions" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Key Metrics */}
        <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-3 shadow-sm md:p-5 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-4 text-lg font-semibold">Key Metrics</h3>
          <div className="space-y-4">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-lg border border-gray-200 p-4 dark:border-gray-700"
              >
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {metric.label}
                  </div>
                  <div className="mt-1 text-lg font-semibold">
                    {metric.value}
                  </div>
                </div>
                <div className="text-sm text-green-500">{metric.change}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
