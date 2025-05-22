import { FiActivity, FiBell, FiDroplet, FiMoon, FiPlay } from 'react-icons/fi';
import { LuFootprints, LuScale, LuUtensils } from 'react-icons/lu';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const Dashboard = () => {
  // Mock data for charts
  const weeklyData = [
    {
      name: 'Mon',
      calories: 320,
      steps: 5400,
    },
    {
      name: 'Tue',
      calories: 450,
      steps: 7800,
    },
    {
      name: 'Wed',
      calories: 280,
      steps: 4200,
    },
    {
      name: 'Thu',
      calories: 580,
      steps: 9600,
    },
    {
      name: 'Fri',
      calories: 400,
      steps: 6800,
    },
    {
      name: 'Sat',
      calories: 600,
      steps: 11200,
    },
    {
      name: 'Sun',
      calories: 320,
      steps: 5800,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl">
      {/* Greeting */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold md:text-3xl">
          Welcome back, John 👋
        </h1>
        <p className="text-gray-500">
          Let&apos;s crush your fitness goals today!
        </p>
      </div>
      {/* Quick actions */}
      <div className="mb-4 md:mb-8">
        <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>
        <div className="grid grid-cols-3 gap-3">
          <button className="bg-opacity-10 hover:bg-opacity-20 flex flex-col items-center justify-center rounded-xl bg-blue-100 p-2 md:p-4">
            <FiPlay size={24} className="mb-2 text-blue-500" />
            <span className="text-sm font-medium">Start Workout</span>
          </button>
          <button className="bg-opacity-10 hover:bg-opacity-20 flex flex-col items-center justify-center rounded-xl bg-green-100 p-2 md:p-4">
            <LuScale size={24} className="mb-2 text-green-500" />
            <span className="text-sm font-medium">Log Weight</span>
          </button>
          <button className="bg-opacity-10 hover:bg-opacity-20 flex flex-col items-center justify-center rounded-xl bg-orange-100 p-2 md:p-4">
            <LuUtensils size={24} className="mb-2 text-orange-500" />
            <span className="text-sm font-medium">Add Meal</span>
          </button>
        </div>
      </div>
      {/* Goal rings */}
      <div className="mb-4 md:mb-8">
        <h2 className="mb-4 text-lg font-semibold">Daily Goals</h2>
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          <div className="flex flex-col items-center">
            <div className="relative">
              <svg className="h-24 w-24">
                <circle
                  className="text-gray-200"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="40"
                  cx="48"
                  cy="48"
                />
                <circle
                  className="text-blue-500"
                  strokeWidth="8"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="40"
                  cx="48"
                  cy="48"
                  strokeDasharray="251.2"
                  strokeDashoffset="31.4"
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <FiDroplet size={24} className="text-blue-500" />
              </div>
            </div>
            <span className="mt-2 text-sm font-medium">Hydration</span>
            <span className="text-xs text-gray-500">7/8 glasses</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative">
              <svg className="h-24 w-24">
                <circle
                  className="text-gray-200"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="40"
                  cx="48"
                  cy="48"
                />
                <circle
                  className="text-green-500"
                  strokeWidth="8"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="40"
                  cx="48"
                  cy="48"
                  strokeDasharray="251.2"
                  strokeDashoffset="62.7"
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <FiMoon size={24} className="text-green-500" />
              </div>
            </div>
            <span className="mt-2 text-sm font-medium">Sleep</span>
            <span className="text-xs text-gray-500">6/8 hours</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative">
              <svg className="h-24 w-24">
                <circle
                  className="text-gray-200"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="40"
                  cx="48"
                  cy="48"
                />
                <circle
                  className="text-orange-500"
                  strokeWidth="8"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="40"
                  cx="48"
                  cy="48"
                  strokeDasharray="251.2"
                  strokeDashoffset="75.3"
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <FiActivity size={24} className="text-orange-500" />
              </div>
            </div>
            <span className="mt-2 text-sm font-medium">Activity</span>
            <span className="text-xs text-gray-500">70% complete</span>
          </div>
        </div>
      </div>
      {/* Daily stats cards */}
      <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:mb-8 md:gap-4 lg:grid-cols-3">
        <div className="rounded-2xl bg-white p-2 shadow-sm md:p-5">
          <div className="mb-3 flex items-center">
            <div className="mr-3 rounded-lg bg-blue-100 p-2">
              <FiBell size={20} className="text-blue-500" />
            </div>
            <h2 className="text-lg font-semibold">Today&apos;s Workout</h2>
          </div>
          <p className="mb-2 text-gray-600">Upper Body Strength</p>
          <p className="text-sm text-gray-500">45 mins • 10:30 AM</p>
          <button className="mt-3 flex items-center font-medium text-blue-500">
            <FiPlay size={16} className="mr-1" />
            Start Now
          </button>
        </div>
        <div className="rounded-2xl bg-white p-2 shadow-sm md:p-5">
          <div className="mb-3 flex items-center">
            <div className="mr-3 rounded-lg bg-orange-100 p-2">
              <div className="text-orange-500" />
            </div>
            <h2 className="text-lg font-semibold">Calories Burned</h2>
          </div>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">437</span>
            <span className="ml-2 text-gray-500">/ 750 kcal</span>
          </div>
          <div className="mt-3 h-2.5 w-full rounded-full bg-gray-200">
            <div
              className="h-2.5 rounded-full bg-orange-500"
              style={{
                width: '58%',
              }}
            ></div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-2 shadow-sm md:p-5">
          <div className="mb-3 flex items-center">
            <div className="mr-3 rounded-lg bg-green-100 p-2">
              <LuFootprints size={20} className="text-green-500" />
            </div>
            <h2 className="text-lg font-semibold">Steps Taken</h2>
          </div>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">6,248</span>
            <span className="ml-2 text-gray-500">/ 10,000 steps</span>
          </div>
          <div className="mt-3 h-2.5 w-full rounded-full bg-gray-200">
            <div
              className="h-2.5 rounded-full bg-green-500"
              style={{
                width: '62%',
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Weekly performance chart */}
      <div className="rounded-2xl bg-white p-2 shadow-sm md:p-5">
        <h2 className="mb-4 text-lg font-semibold">Weekly Performance</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#3B82F6" />
              <YAxis yAxisId="right" orientation="right" stroke="#10B981" />
              <Tooltip />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="calories"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={{
                  r: 4,
                }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="steps"
                stroke="#10B981"
                strokeWidth={2}
                dot={{
                  r: 4,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
