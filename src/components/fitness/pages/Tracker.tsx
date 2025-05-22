import { LuFlame, LuFootprints, LuHeartPulse, LuTimer } from 'react-icons/lu';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const Tracker = () => {
  // Mock data
  const dailyActivities = [
    {
      time: '6AM',
      heartRate: 72,
      steps: 1200,
      calories: 150,
    },
    {
      time: '9AM',
      heartRate: 75,
      steps: 2400,
      calories: 320,
    },
    {
      time: '12PM',
      heartRate: 78,
      steps: 4800,
      calories: 580,
    },
    {
      time: '3PM',
      heartRate: 76,
      steps: 6200,
      calories: 750,
    },
    {
      time: '6PM',
      heartRate: 74,
      steps: 8400,
      calories: 920,
    },
    {
      time: '9PM',
      heartRate: 71,
      steps: 9600,
      calories: 1100,
    },
  ];
  const activities = [
    {
      name: 'Morning Run',
      duration: '32 mins',
      calories: 285,
      time: '7:00 AM',
    },
    {
      name: 'Yoga Session',
      duration: '20 mins',
      calories: 120,
      time: '1:30 PM',
    },
    {
      name: 'Evening Walk',
      duration: '45 mins',
      calories: 180,
      time: '6:15 PM',
    },
  ];

  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="mb-6 text-2xl font-bold md:text-3xl">Activity Tracker</h1>
      {/* Stats Overview */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex justify-between rounded-2xl bg-white p-2 shadow-sm md:block md:p-4">
          <div className="mb-2 flex items-center">
            <div className="mr-3 rounded-lg bg-red-100 p-2">
              <LuHeartPulse size={20} className="text-red-500" />
            </div>
            <span className="text-sm text-gray-600">Heart Rate</span>
          </div>
          <div className="ml-2">
            <span className="text-2xl font-bold">74</span>
            <span className="ml-1 text-gray-500">bpm</span>
          </div>
        </div>
        <div className="flex justify-between rounded-2xl bg-white p-2 shadow-sm md:block md:p-4">
          <div className="mb-2 flex items-center">
            <div className="mr-3 rounded-lg bg-blue-100 p-2">
              <LuFootprints size={20} className="text-blue-500" />
            </div>
            <span className="text-sm text-gray-600">Total Steps</span>
          </div>
          <div className="ml-2">
            <span className="text-2xl font-bold">9,642</span>
            <span className="ml-1 text-gray-500">steps</span>
          </div>
        </div>
        <div className="flex justify-between rounded-2xl bg-white p-2 shadow-sm md:block md:p-4">
          <div className="mb-2 flex items-center">
            <div className="mr-3 rounded-lg bg-orange-100 p-2">
              <LuFlame size={20} className="text-orange-500" />
            </div>
            <span className="text-sm text-gray-600">Calories</span>
          </div>
          <div className="ml-2">
            <span className="text-2xl font-bold">1,248</span>
            <span className="ml-1 text-gray-500">kcal</span>
          </div>
        </div>
        <div className="flex justify-between rounded-2xl bg-white p-2 shadow-sm md:block md:p-4">
          <div className="mb-2 flex items-center">
            <div className="mr-3 rounded-lg bg-green-100 p-2">
              <LuTimer size={20} className="text-green-500" />
            </div>
            <span className="text-sm text-gray-600">Active Time</span>
          </div>
          <div className="ml-2">
            <span className="text-2xl font-bold">97</span>
            <span className="ml-1 text-gray-500">mins</span>
          </div>
        </div>
      </div>
      {/* Activity Chart */}
      <div className="mb-8 rounded-2xl bg-white p-2 shadow-sm md:p-6">
        <h2 className="mb-4 text-lg font-semibold">Daily Activity</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dailyActivities}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="time" />
              <YAxis yAxisId="left" orientation="left" stroke="#EF4444" />
              <YAxis yAxisId="right" orientation="right" stroke="#3B82F6" />
              <Tooltip />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="heartRate"
                stroke="#EF4444"
                strokeWidth={2}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="steps"
                stroke="#3B82F6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Activity Log */}
      <div className="rounded-2xl bg-white p-2 shadow-sm md:p-6">
        <h2 className="mb-4 text-lg font-semibold">Today&apos;s Activities</h2>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-xl bg-gray-50 p-2 md:p-4"
            >
              <div className="flex items-center">
                <div className="mr-4">
                  <LuTimer size={24} className="text-gray-400" />
                </div>
                <div>
                  <h3 className="font-medium">{activity.name}</h3>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{activity.duration}</p>
                <p className="text-sm text-gray-500">
                  {activity.calories} kcal
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Tracker;
