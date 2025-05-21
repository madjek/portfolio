import { useTheme } from 'next-themes';
import { FiCalendar, FiTarget, FiTrendingUp, FiUsers } from 'react-icons/fi';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const campaigns = [
  {
    name: 'Summer Sale 2025',
    status: 'Active',
    reach: '125K',
    engagement: '32%',
    conversion: '8.5%',
    spent: '$2,450',
    dates: 'Aug 1 - Aug 31',
  },
  {
    name: 'Back to School',
    status: 'Scheduled',
    reach: '75K',
    engagement: '28%',
    conversion: '6.2%',
    spent: '$1,800',
    dates: 'Sep 1 - Sep 15',
  },
  {
    name: 'Black Friday',
    status: 'Draft',
    reach: '200K',
    engagement: '---',
    conversion: '---',
    spent: '$5,000',
    dates: 'Nov 24 - Nov 27',
  },
  {
    name: 'Holiday Special',
    status: 'Ended',
    reach: '180K',
    engagement: '35%',
    conversion: '9.1%',
    spent: '$3,200',
    dates: 'Dec 1 - Dec 25',
  },
];
const performanceData = [
  { name: 'Week 1', reach: 45000, engagement: 12000, conversions: 2400 },
  { name: 'Week 2', reach: 52000, engagement: 14500, conversions: 3100 },
  { name: 'Week 3', reach: 49000, engagement: 13200, conversions: 2800 },
  { name: 'Week 4', reach: 58000, engagement: 15800, conversions: 3600 },
];
const getStatusColor = (status: string) => {
  switch (status) {
    case 'Active':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'Scheduled':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    case 'Draft':
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    case 'Ended':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
    default:
      return '';
  }
};
const stats = [
  {
    title: 'Active Campaigns',
    value: '3',
    icon: <FiTarget className="h-5 w-5 text-blue-500" />,
  },
  {
    title: 'Total Reach',
    value: '580K',
    icon: <FiUsers className="h-5 w-5 text-green-500" />,
  },
  {
    title: 'Avg. Engagement',
    value: '31.7%',
    icon: <FiTrendingUp className="h-5 w-5 text-amber-500" />,
  },
  {
    title: 'Total Budget',
    value: '$12,450',
    icon: <FiCalendar className="h-5 w-5 text-purple-500" />,
  },
];
export default function Campaigns() {
  const { theme } = useTheme();

  return (
    <div className="space-y-2 md:space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Marketing Campaigns</h1>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
          Create Campaign
        </button>
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
            <div className="text-2xl font-bold">{item.value}</div>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-3 shadow-sm md:p-5 dark:border-gray-700 dark:bg-gray-800">
        <h3 className="mb-4 text-lg font-semibold">Campaign Performance</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={performanceData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e5e7eb"
                className="dark:stroke-gray-700"
              />
              <XAxis
                dataKey="name"
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
              <Bar
                dataKey="reach"
                name="Reach"
                fill="#3b82f6"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="engagement"
                name="Engagement"
                fill="#10b981"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="conversions"
                name="Conversions"
                fill="#8b5cf6"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Campaigns Table */}
      <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-3 shadow-sm md:p-5 dark:border-gray-700 dark:bg-gray-800">
        <h3 className="mb-4 text-lg font-semibold">All Campaigns</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-3.5 text-left text-xs font-medium tracking-wider uppercase">
                  Campaign
                </th>
                <th className="px-4 py-3.5 text-left text-xs font-medium tracking-wider uppercase">
                  Status
                </th>
                <th className="px-4 py-3.5 text-left text-xs font-medium tracking-wider uppercase">
                  Reach
                </th>
                <th className="px-4 py-3.5 text-left text-xs font-medium tracking-wider uppercase">
                  Engagement
                </th>
                <th className="px-4 py-3.5 text-left text-xs font-medium tracking-wider uppercase">
                  Conversion
                </th>
                <th className="px-4 py-3.5 text-left text-xs font-medium tracking-wider uppercase">
                  Budget
                </th>
                <th className="px-4 py-3.5 text-left text-xs font-medium tracking-wider uppercase">
                  Dates
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {campaigns.map((campaign, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="font-medium">{campaign.name}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span
                      className={`rounded-full px-2 py-1 text-xs ${getStatusColor(campaign.status)}`}
                    >
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm whitespace-nowrap">
                    {campaign.reach}
                  </td>
                  <td className="px-4 py-4 text-sm whitespace-nowrap">
                    {campaign.engagement}
                  </td>
                  <td className="px-4 py-4 text-sm whitespace-nowrap">
                    {campaign.conversion}
                  </td>
                  <td className="px-4 py-4 text-sm whitespace-nowrap">
                    {campaign.spent}
                  </td>
                  <td className="px-4 py-4 text-sm whitespace-nowrap">
                    {campaign.dates}
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
