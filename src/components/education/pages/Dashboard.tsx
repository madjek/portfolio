import { useNavigationStore } from '@/store/educationStore';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import {
  FiArrowRight,
  FiBarChart2,
  FiBookOpen,
  FiCalendar,
  FiClock,
} from 'react-icons/fi';
import {
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
import { activityData, courses, currentUser, deadlines } from '../mockData';

export default function Dashboard() {
  const { setRoute } = useNavigationStore();
  // Filter enrolled courses
  const enrolledCourses = courses.filter((course) =>
    currentUser.enrolledCourses.includes(course.id),
  );
  // Calculate upcoming deadlines
  const upcomingDeadlines = deadlines.slice(0, 3);
  // Format date for deadlines
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric',
    };

    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  // Colors for the pie chart
  const COLORS = ['#4F46E5', '#E5E7EB'];

  return (
    <div className="mx-auto max-w-7xl">
      {/* Greeting and Stats Overview */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
          Welcome back, {currentUser.firstName} 🎓
        </h1>
        <p className="mt-2 text-gray-600">
          Ready to continue your learning journey? Here&apos;s your progress so
          far.
        </p>
      </div>
      {/* Stats Cards */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Enrolled Courses */}
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-blue-100 p-3">
              <FiBookOpen size={24} className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Enrolled Courses</p>
              <h3 className="text-2xl font-bold">
                {currentUser.enrolledCourses.length}
              </h3>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-100 pt-4">
            <p className="text-sm text-gray-600">
              <span className="font-medium text-blue-600">
                {currentUser.completedCourses.length}
              </span>{' '}
              courses completed
            </p>
          </div>
        </div>
        {/* Weekly Learning */}
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-purple-100 p-3">
              <FiClock size={24} className="text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Weekly Learning</p>
              <h3 className="text-2xl font-bold">
                {currentUser.weeklyLearningHours} hrs
              </h3>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-100 pt-4">
            <p className="text-sm text-gray-600">
              <span className="font-medium text-purple-600">+2.5 hrs</span> from
              last week
            </p>
          </div>
        </div>
        {/* Next Deadline */}
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-green-100 p-3">
              <FiCalendar size={24} className="text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Next Deadline</p>
              <h3 className="truncate text-xl font-bold">
                {upcomingDeadlines[0]?.title || 'No upcoming deadlines'}
              </h3>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-100 pt-4">
            <p className="text-sm text-gray-600">
              Due:{' '}
              <span className="font-medium text-green-600">
                {upcomingDeadlines[0]
                  ? formatDate(upcomingDeadlines[0].dueDate)
                  : 'N/A'}
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* Charts and Course Progress */}
      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Progress Charts */}
        <div className="lg:col-span-1">
          <div className="h-full rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">
                Learning Progress
              </h2>
              <div className="rounded bg-blue-100 p-2">
                <FiBarChart2 size={18} className="text-blue-600" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-48 w-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        {
                          name: 'Completed',
                          value: currentUser.completedCourses.length,
                        },
                        {
                          name: 'In Progress',
                          value: currentUser.enrolledCourses.length,
                        },
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {[0, 1].map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 flex gap-6">
                <div className="flex items-center gap-2">
                  <span className="block h-3 w-3 rounded-full bg-blue-600"></span>
                  <span className="text-sm text-gray-600">Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="block h-3 w-3 rounded-full bg-gray-200"></span>
                  <span className="text-sm text-gray-600">In Progress</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-2xl font-bold text-gray-800">
                  {Math.round(
                    (currentUser.completedCourses.length /
                      (currentUser.completedCourses.length +
                        currentUser.enrolledCourses.length)) *
                      100,
                  )}
                  %
                </p>
                <p className="text-sm text-gray-600">Overall Completion</p>
              </div>
            </div>
          </div>
        </div>
        {/* Activity Chart */}
        <div className="lg:col-span-2">
          <div className="h-full rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">
                Weekly Activity
              </h2>
              <select className="rounded border border-gray-300 px-2 py-1 text-sm">
                <option>This Week</option>
                <option>Last Week</option>
                <option>Last Month</option>
              </select>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={activityData}
                  margin={{
                    top: 5,
                    right: 20,
                    bottom: 5,
                    left: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="day" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="hours"
                    stroke="#4F46E5"
                    strokeWidth={2}
                    dot={{
                      stroke: '#4F46E5',
                      strokeWidth: 2,
                      fill: '#ffffff',
                      r: 4,
                    }}
                    activeDot={{
                      r: 6,
                      stroke: '#4F46E5',
                      strokeWidth: 2,
                      fill: '#ffffff',
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
              <div>
                <p className="text-xs text-gray-500">Total Learning Hours</p>
                <p className="font-semibold">
                  {currentUser.totalLearningHours} hours
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Daily Average</p>
                <p className="font-semibold">
                  {(
                    activityData.reduce((sum, day) => sum + day.hours, 0) /
                    activityData.length
                  ).toFixed(1)}{' '}
                  hours
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Most Productive</p>
                <p className="font-semibold">
                  {
                    activityData.reduce((max, day) =>
                      day.hours > max.hours ? day : max,
                    ).day
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Continue Learning Section */}
      <div className="mb-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">
            Continue Learning
          </h2>
          <button
            onClick={() => setRoute('/courses')}
            className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline"
          >
            View All Courses <FiArrowRight size={16} />
          </button>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {enrolledCourses.map((course) => (
            <div
              key={course.id}
              className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
            >
              <Image
                width={500}
                height={500}
                src={course.thumbnail}
                alt={course.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="mb-2 line-clamp-1 text-lg font-semibold">
                  {course.title}
                </h3>
                <div className="mb-4 flex items-center gap-2">
                  <Image
                    width={32}
                    height={32}
                    src={course.instructorAvatar}
                    alt={course.instructor}
                    className="h-6 w-6 rounded-full"
                  />
                  <span className="text-sm text-gray-600">
                    {course.instructor}
                  </span>
                </div>
                <div className="mb-4">
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-blue-600"
                      style={{
                        width: `${course.progress}%`,
                      }}
                    ></div>
                  </div>
                </div>
                <button
                  onClick={() => setRoute(`/course/${course.id}`)}
                  className="block w-full rounded-lg bg-blue-600 py-2 text-center font-medium text-white hover:bg-blue-700"
                >
                  Continue Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Upcoming Deadlines */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">
            Upcoming Deadlines
          </h2>
        </div>
        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
          {upcomingDeadlines.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {upcomingDeadlines.map((deadline, index) => (
                <div
                  key={deadline.id}
                  className="flex items-center justify-between p-4"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        'flex h-10 w-10 items-center justify-center rounded-full',
                        index === 0
                          ? 'bg-red-100 text-red-600'
                          : index === 1
                            ? 'bg-yellow-100 text-yellow-600'
                            : 'bg-green-100 text-green-600',
                      )}
                    >
                      <FiCalendar size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">{deadline.title}</h3>
                      <p className="text-sm text-gray-600">
                        Due {formatDate(deadline.dueDate)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setRoute(`/course/${deadline.courseId}`)}
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    View Course
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-gray-600">No upcoming deadlines!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
