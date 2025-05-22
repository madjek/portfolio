import {
  FiAlertCircle,
  FiCalendar,
  FiCheckCircle,
  FiChevronRight,
  FiClock,
  FiPlus,
} from 'react-icons/fi';

interface SummaryItem {
  title: string;
  value: number;
  icon: React.ReactNode;
}

interface ActivityItem {
  user: string;
  action: string;
  item: string;
  time: string;
}

interface TaskItem {
  title: string;
  time: string;
  project: string;
}

export default function Dashboard() {
  const userName = 'John';
  // Summary data
  const summaryData: SummaryItem[] = [
    {
      title: 'Tasks Due Today',
      value: 5,
      icon: <FiClock className="text-amber-500" />,
    },
    {
      title: 'Active Projects',
      value: 7,
      icon: <FiCheckCircle className="text-green-500" />,
    },
    {
      title: 'Team Members Online',
      value: 12,
      icon: <FiAlertCircle className="text-indigo-500" />,
    },
  ];
  // Activity feed data
  const activityFeed: ActivityItem[] = [
    {
      user: 'Anna',
      action: 'completed',
      item: 'Design Homepage',
      time: '10 min ago',
    },
    {
      user: 'Miguel',
      action: 'commented on',
      item: 'API Integration',
      time: '25 min ago',
    },
    {
      user: 'Sarah',
      action: 'created',
      item: 'New Marketing Campaign',
      time: '1 hour ago',
    },
    {
      user: 'David',
      action: 'updated',
      item: 'Q4 Roadmap',
      time: '2 hours ago',
    },
    {
      user: 'Lisa',
      action: 'assigned you to',
      item: 'Review Wireframes',
      time: '3 hours ago',
    },
  ];
  // Upcoming tasks data
  const upcomingTasks: TaskItem[] = [
    {
      title: 'Team Meeting',
      time: '10:00 AM',
      project: 'General',
    },
    {
      title: 'Review Design Mockups',
      time: '1:30 PM',
      project: 'Website Redesign',
    },
    {
      title: 'Client Call',
      time: '3:00 PM',
      project: 'Mobile App',
    },
  ];
  const SummaryCard = ({ title, value, icon }: SummaryItem) => (
    <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm md:p-6 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {title}
        </h3>
        <div className="rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
          {icon}
        </div>
      </div>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  );
  const TaskItem = ({ title, time, project }: TaskItem) => {
    const [hour, period] = time.includes('AM')
      ? [time.split(':')[0], 'AM']
      : [time.split(':')[0], 'PM'];

    return (
      <div className="flex items-center rounded-xl bg-gray-50 p-3 dark:bg-gray-700/50">
        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
          {hour}
          <span className="text-xs">{period}</span>
        </div>
        <div className="flex-1">
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{project}</p>
        </div>
      </div>
    );
  };
  const ActivityItem = ({ user, action, item, time }: ActivityItem) => (
    <div className="flex items-start border-b border-gray-100 pb-4 last:border-0 last:pb-0 dark:border-gray-700">
      <div className="mt-0.5 mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xs font-medium dark:bg-gray-700">
        {user.charAt(0)}
      </div>
      <div>
        <p className="text-sm">
          <span className="font-medium">{user}</span>{' '}
          <span className="text-gray-600 dark:text-gray-400">{action}</span>{' '}
          <span className="font-medium">&quot;{item}&quot;</span>
        </p>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{time}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-2 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold md:text-3xl">
          Welcome back, {userName}!
        </h1>
        <button className="mt-4 flex w-fit items-center rounded-xl bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700 md:mt-0">
          <FiPlus size={18} className="mr-2" />
          New Task
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {summaryData.map((item, index) => (
          <SummaryCard key={index} {...item} />
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-2 md:gap-6 lg:grid-cols-3">
        {/* Calendar Preview */}
        <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm md:p-6 lg:col-span-2 dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="flex items-center text-lg font-semibold">
              <FiCalendar size={20} className="mr-2 text-indigo-500" />
              Today&apos;s Schedule
            </h2>
            <button className="flex items-center text-sm text-indigo-600 dark:text-indigo-400">
              View Calendar
              <FiChevronRight size={16} className="ml-1" />
            </button>
          </div>
          <div className="md:space-y-4">
            {upcomingTasks.map((task, index) => (
              <TaskItem key={index} {...task} />
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm md:p-6 dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
          </div>
          <div className="space-y-4">
            {activityFeed.map((activity, index) => (
              <ActivityItem key={index} {...activity} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
