import { FiUser } from 'react-icons/fi';
import { LuBadgeCheck, LuTrophy } from 'react-icons/lu';

export default function Profile() {
  const achievements = [
    {
      name: '7-Day Streak',
      description: 'Completed workouts for 7 days in a row',
      icon: LuTrophy,
    },
    {
      name: '10K Steps',
      description: 'Reached 10,000 steps in one day',
      icon: LuBadgeCheck,
    },
    {
      name: 'Early Bird',
      description: 'Completed 5 morning workouts',
      icon: LuTrophy,
    },
  ];
  const goals = [
    {
      name: 'Weight Goal',
      current: 75,
      target: 70,
      unit: 'kg',
      progress: 60,
    },
    {
      name: 'Weekly Workouts',
      current: 3,
      target: 5,
      unit: 'sessions',
      progress: 60,
    },
    {
      name: 'Daily Steps',
      current: 8500,
      target: 10000,
      unit: 'steps',
      progress: 85,
    },
  ];
  const stats = [
    {
      label: 'Workouts',
      value: '24',
      period: 'This Month',
    },
    {
      label: 'Hours Active',
      value: '47',
      period: 'This Month',
    },
    {
      label: 'Kcal Burned',
      value: '12,400',
      period: 'This Month',
    },
  ];

  return (
    <div className="mx-auto max-w-7xl">
      {/* Profile Header */}
      <div className="mb-6 rounded-2xl bg-white p-2 shadow-sm md:p-6">
        <div className="flex items-center">
          <div className="mr-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-200">
            <FiUser size={40} className="text-gray-400" />
          </div>
          <div>
            <h1 className="mb-1 text-2xl font-bold md:text-3xl">John Doe</h1>
            <p className="text-gray-500">
              Fitness Enthusiast • Member since Jan 2025
            </p>
          </div>
        </div>
      </div>
      {/* Stats Overview */}
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white p-2 shadow-sm md:p-6"
          >
            <h3 className="mb-1 text-sm text-gray-500">{stat.label}</h3>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-sm text-gray-500">{stat.period}</p>
          </div>
        ))}
      </div>
      {/* Goals Section */}
      <div className="mb-6 rounded-2xl bg-white p-2 shadow-sm md:p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Fitness Goals</h2>
          <button className="text-sm font-medium text-blue-500">
            Edit Goals
          </button>
        </div>
        <div className="space-y-6">
          {goals.map((goal, index) => (
            <div key={index}>
              <div className="mb-2 flex justify-between">
                <span className="text-gray-600">{goal.name}</span>
                <span className="font-medium">
                  {goal.current} / {goal.target} {goal.unit}
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-blue-500"
                  style={{
                    width: `${goal.progress}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Achievements */}
      <div className="rounded-2xl bg-white p-2 shadow-sm md:p-6">
        <h2 className="mb-6 text-lg font-semibold">Achievements</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <div key={index} className="rounded-xl border p-2 md:p-4">
                <div className="mb-3 flex items-center">
                  <div className="bg-opacity-10 mr-3 rounded-lg bg-blue-100 p-2">
                    <Icon size={20} className="text-blue-500" />
                  </div>
                  <h3 className="font-medium">{achievement.name}</h3>
                </div>
                <p className="text-sm text-gray-500">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
