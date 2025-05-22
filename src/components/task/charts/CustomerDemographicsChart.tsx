import { useTheme } from 'next-themes';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { age: '18-24', male: 15, female: 18, other: 2 },
  { age: '25-34', male: 25, female: 30, other: 3 },
  { age: '35-44', male: 20, female: 22, other: 2 },
  { age: '45-54', male: 15, female: 16, other: 1 },
  { age: '55-64', male: 10, female: 12, other: 1 },
  { age: '65+', male: 5, female: 8, other: 0.5 },
];

export default function CustomerDemographicsChart() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-3 shadow-sm md:p-5 dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Customer Demographics</h3>
        <select className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">
          <option>Age Groups</option>
          <option>Regions</option>
          <option>Device Types</option>
        </select>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e7eb"
              className="dark:stroke-gray-700"
            />
            <XAxis
              dataKey="age"
              tick={{ fill: '#6b7280' }}
              axisLine={{ stroke: '#d1d5db' }}
              className="dark:tick-fill-gray-400 dark:axis-line-stroke-gray-500"
            />
            <YAxis
              tick={{ fill: '#6b7280' }}
              axisLine={{ stroke: '#d1d5db' }}
              className="dark:tick-fill-gray-400 dark:axis-line-stroke-gray-500"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                color: theme === 'dark' ? '#f9fafb' : '#111827',
              }}
            />
            <Bar
              dataKey="male"
              name="Male"
              fill="#3b82f6"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="female"
              name="Female"
              fill="#ec4899"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="other"
              name="Other"
              fill="#8b5cf6"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
