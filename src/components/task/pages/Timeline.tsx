import { useState } from 'react';
import {
  FiChevronLeft,
  FiChevronRight,
  FiFilter,
  FiPlus,
  FiZoomIn,
  FiZoomOut,
} from 'react-icons/fi';

export default function Timeline() {
  const [viewMode, setViewMode] = useState<'day' | 'week' | 'month'>('week');
  // Generate mock timeline data
  const projects = [
    {
      id: 1,
      name: 'Website Redesign',
      tasks: [
        {
          id: 101,
          name: 'Research',
          start: '2025-09-01',
          end: '2025-09-05',
          progress: 100,
          color: 'bg-indigo-500',
        },
        {
          id: 102,
          name: 'Wireframing',
          start: '2025-09-06',
          end: '2025-09-10',
          progress: 100,
          color: 'bg-indigo-500',
        },
        {
          id: 103,
          name: 'Design',
          start: '2025-09-11',
          end: '2025-09-20',
          progress: 75,
          color: 'bg-indigo-500',
        },
        {
          id: 104,
          name: 'Development',
          start: '2025-09-18',
          end: '2025-10-05',
          progress: 30,
          color: 'bg-indigo-500',
        },
        {
          id: 105,
          name: 'Testing',
          start: '2025-10-06',
          end: '2025-10-12',
          progress: 0,
          color: 'bg-indigo-500',
        },
        {
          id: 106,
          name: 'Launch',
          start: '2025-10-15',
          end: '2025-10-15',
          progress: 0,
          color: 'bg-indigo-500',
        },
      ],
    },
    {
      id: 2,
      name: 'Mobile App Development',
      tasks: [
        {
          id: 201,
          name: 'Planning',
          start: '2025-09-05',
          end: '2025-09-10',
          progress: 100,
          color: 'bg-blue-500',
        },
        {
          id: 202,
          name: 'Design',
          start: '2025-09-11',
          end: '2025-09-25',
          progress: 80,
          color: 'bg-blue-500',
        },
        {
          id: 203,
          name: 'Frontend',
          start: '2025-09-20',
          end: '2025-10-10',
          progress: 40,
          color: 'bg-blue-500',
        },
        {
          id: 204,
          name: 'Backend',
          start: '2025-09-25',
          end: '2025-10-15',
          progress: 30,
          color: 'bg-blue-500',
        },
        {
          id: 205,
          name: 'Testing',
          start: '2025-10-16',
          end: '2025-10-30',
          progress: 0,
          color: 'bg-blue-500',
        },
      ],
    },
    {
      id: 3,
      name: 'Marketing Campaign',
      tasks: [
        {
          id: 301,
          name: 'Strategy',
          start: '2025-09-01',
          end: '2025-09-07',
          progress: 100,
          color: 'bg-amber-500',
        },
        {
          id: 302,
          name: 'Content Creation',
          start: '2025-09-08',
          end: '2025-09-20',
          progress: 90,
          color: 'bg-amber-500',
        },
        {
          id: 303,
          name: 'Design Assets',
          start: '2025-09-15',
          end: '2025-09-25',
          progress: 85,
          color: 'bg-amber-500',
        },
        {
          id: 304,
          name: 'Campaign Setup',
          start: '2025-09-26',
          end: '2025-09-30',
          progress: 50,
          color: 'bg-amber-500',
        },
        {
          id: 305,
          name: 'Launch',
          start: '2025-10-01',
          end: '2025-10-01',
          progress: 0,
          color: 'bg-amber-500',
        },
        {
          id: 306,
          name: 'Monitoring',
          start: '2025-10-02',
          end: '2025-10-31',
          progress: 0,
          color: 'bg-amber-500',
        },
      ],
    },
  ];
  // Generate days for the timeline header
  const generateDays = () => {
    const days = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 10);

    for (let i = 0; i < 30; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      days.push({
        date,
        day: date.getDate(),
        month: date.toLocaleString('default', {
          month: 'short',
        }),
        isToday: date.toDateString() === today.toDateString(),
        isWeekend: date.getDay() === 0 || date.getDay() === 6,
      });
    }

    return days;
  };
  const days = generateDays();

  return (
    <div className="space-y-2 md:space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between md:gap-4">
        <h1 className="text-2xl font-bold md:text-3xl">Timeline</h1>
        <div className="grid grid-cols-2 items-center gap-3 md:flex">
          <div className="flex items-center space-x-1">
            <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
              <FiZoomOut size={18} />
            </button>
            <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
              <FiZoomIn size={18} />
            </button>
          </div>
          <div className="flex rounded-xl border border-gray-200 bg-white p-1 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <button
              onClick={() => setViewMode('day')}
              className={`rounded-lg px-3 py-1.5 text-sm ${viewMode === 'day' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300' : 'text-gray-700 dark:text-gray-300'}`}
            >
              Day
            </button>
            <button
              onClick={() => setViewMode('week')}
              className={`rounded-lg px-3 py-1.5 text-sm ${viewMode === 'week' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300' : 'text-gray-700 dark:text-gray-300'}`}
            >
              Week
            </button>
            <button
              onClick={() => setViewMode('month')}
              className={`rounded-lg px-3 py-1.5 text-sm ${viewMode === 'month' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300' : 'text-gray-700 dark:text-gray-300'}`}
            >
              Month
            </button>
          </div>
          <button className="flex w-fit items-center rounded-xl bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700">
            <FiPlus size={18} className="mr-2" />
            Add Task
          </button>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center justify-between border-b border-gray-200 p-2 md:p-4 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <button className="rounded-lg p-1 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
              <FiChevronLeft size={20} />
            </button>
            <h2 className="text-lg font-medium">May - June 2025</h2>
            <button className="rounded-lg p-1 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
              <FiChevronRight size={20} />
            </button>
          </div>
          <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
            <FiFilter size={18} />
          </button>
        </div>
        <div className="overflow-x-auto">
          <div className="min-w-[1200px]">
            {/* Timeline Header */}
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              <div className="w-48 flex-shrink-0 border-r border-gray-200 p-2 md:p-4 dark:border-gray-700">
                <div className="font-medium">Projects & Tasks</div>
              </div>
              <div className="flex flex-1">
                {days.map((day, index) => (
                  <div
                    key={index}
                    className={`w-10 flex-shrink-0 border-r border-gray-200 py-2 text-center text-xs dark:border-gray-700 ${day.isWeekend ? 'bg-gray-50 dark:bg-gray-800/50' : ''} ${day.isToday ? 'bg-indigo-50 font-medium text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400' : ''}`}
                  >
                    <div className="font-medium">{day.day}</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {day.month}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Projects and Tasks */}
            {projects.map((project) => (
              <div key={project.id}>
                {/* Project Row */}
                <div className="flex border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50">
                  <div className="w-48 flex-shrink-0 border-r border-gray-200 p-2 font-medium md:p-4 dark:border-gray-700">
                    {project.name}
                  </div>
                  <div className="flex flex-1">
                    {days.map((day, index) => (
                      <div
                        key={index}
                        className={`w-10 flex-shrink-0 border-r border-gray-200 dark:border-gray-700 ${day.isWeekend ? 'bg-gray-100 dark:bg-gray-700/50' : ''} ${day.isToday ? 'bg-indigo-50 dark:bg-indigo-900/20' : ''}`}
                      ></div>
                    ))}
                  </div>
                </div>
                {/* Task Rows */}
                {project.tasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex border-b border-gray-200 dark:border-gray-700"
                  >
                    <div className="w-48 flex-shrink-0 border-r border-gray-200 p-2 text-sm md:px-4 md:py-3 dark:border-gray-700">
                      {task.name}
                    </div>
                    <div className="relative flex flex-1">
                      {days.map((day, index) => (
                        <div
                          key={index}
                          className={`w-10 flex-shrink-0 border-r border-gray-200 dark:border-gray-700 ${day.isWeekend ? 'bg-gray-50 dark:bg-gray-800/50' : ''} ${day.isToday ? 'bg-indigo-50 dark:bg-indigo-900/20' : ''}`}
                        ></div>
                      ))}
                      {/* Task Bar - Positioned absolutely over the days */}
                      <div
                        className={`absolute top-1.5 h-6 ${task.color} bg-opacity-80 dark:bg-opacity-60 flex cursor-move items-center rounded-md px-2 shadow-sm`}
                        style={{
                          left: '40px',
                          width: '180px', // This would be calculated based on task duration
                        }}
                      >
                        <div className="truncate text-xs font-medium text-white">
                          {task.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
