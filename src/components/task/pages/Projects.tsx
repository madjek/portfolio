import { useState } from 'react';
import {
  FiChevronRight,
  FiGrid,
  FiLayout,
  FiMoreHorizontal,
  FiPlus,
} from 'react-icons/fi';

export default function Projects() {
  const [viewType, setViewType] = useState<'list' | 'kanban'>('list');
  // Mock data
  const projects = [
    {
      id: 1,
      title: 'Website Redesign',
      description: 'Overhaul of company website with new branding',
      progress: 75,
      members: ['JD', 'AS', 'MK'],
      dueDate: 'Oct 15',
      status: 'In Progress',
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'iOS and Android app for customer engagement',
      progress: 40,
      members: ['RB', 'LM', 'JD'],
      dueDate: 'Dec 1',
      status: 'In Progress',
    },
    {
      id: 3,
      title: 'Marketing Campaign',
      description: 'Q4 product launch marketing materials',
      progress: 90,
      members: ['AS', 'TJ'],
      dueDate: 'Sep 30',
      status: 'In Review',
    },
    {
      id: 4,
      title: 'User Research',
      description: 'Customer interviews and feedback analysis',
      progress: 100,
      members: ['MK', 'LM'],
      dueDate: 'Sep 10',
      status: 'Completed',
    },
    {
      id: 5,
      title: 'API Integration',
      description: 'Connect with third-party payment services',
      progress: 20,
      members: ['RB', 'JD', 'TJ'],
      dueDate: 'Dec 15',
      status: 'In Progress',
    },
    {
      id: 6,
      title: 'Data Analytics Dashboard',
      description: 'Real-time metrics visualization tool',
      progress: 0,
      members: ['JD', 'MK'],
      dueDate: 'Jan 5',
      status: 'Not Started',
    },
  ];
  // Group projects by status for Kanban view
  const kanbanGroups = {
    'Not Started': projects.filter((p) => p.status === 'Not Started'),
    'In Progress': projects.filter((p) => p.status === 'In Progress'),
    'In Review': projects.filter((p) => p.status === 'In Review'),
    Completed: projects.filter((p) => p.status === 'Completed'),
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Not Started':
        return 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'In Review':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'Completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default:
        return 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-2 md:space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold md:text-3xl">Projects</h1>
        <div className="flex items-center justify-between gap-3">
          <div className="flex rounded-xl border border-gray-200 bg-white p-1 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <button
              onClick={() => setViewType('list')}
              className={`flex items-center rounded-lg px-3 py-1.5 text-sm ${
                viewType === 'list'
                  ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <FiLayout size={16} className="mr-2" />
              List
            </button>
            <button
              onClick={() => setViewType('kanban')}
              className={`flex items-center rounded-lg px-3 py-1.5 text-sm ${
                viewType === 'kanban'
                  ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <FiGrid size={16} className="mr-2" />
              Kanban
            </button>
          </div>
          <button className="flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700">
            <FiPlus size={18} className="mr-2" />
            New Project
          </button>
        </div>
      </div>
      {viewType === 'list' ? (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="p-3 md:p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(project.status)}`}
                    >
                      {project.status}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <FiMoreHorizontal size={20} />
                  </button>
                </div>
                <div className="mt-4">
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      Progress
                    </span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-indigo-600"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {project.members.map((member, idx) => (
                      <div
                        key={idx}
                        className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-indigo-500 text-xs font-medium text-white dark:border-gray-800"
                      >
                        {member}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Due {project.dueDate}
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 p-4 dark:border-gray-700">
                <button className="flex w-full items-center justify-center text-center text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  View Project
                  <FiChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-2 md:gap-6 lg:grid-cols-4">
          {Object.entries(kanbanGroups).map(([status, items]) => (
            <div
              key={status}
              className="rounded-xl bg-gray-50 p-0 md:p-4 dark:bg-gray-800/50"
            >
              <h3 className="mb-3 flex items-center justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
                {status}
                <span className="rounded-full bg-gray-200 px-2 py-0.5 text-xs text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                  {items.length}
                </span>
              </h3>
              <div className="space-y-3">
                {items.map((project) => (
                  <div
                    key={project.id}
                    className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                  >
                    <h4 className="font-medium">{project.title}</h4>
                    <p className="mt-1 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                      {project.description}
                    </p>
                    <div className="mt-3">
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="text-gray-600 dark:text-gray-400">
                          Progress
                        </span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-1.5 rounded-full bg-indigo-600"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex -space-x-1">
                        {project.members.slice(0, 3).map((member, idx) => (
                          <div
                            key={idx}
                            className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-indigo-500 text-xs text-white dark:border-gray-800"
                          >
                            {member.charAt(0)}
                          </div>
                        ))}
                        {project.members.length > 3 && (
                          <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gray-200 text-xs dark:border-gray-800 dark:bg-gray-700">
                            +{project.members.length - 3}
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {project.dueDate}
                      </div>
                    </div>
                  </div>
                ))}
                <button className="flex w-full items-center justify-center rounded-xl border-2 border-dashed border-gray-300 py-2 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
                  <FiPlus size={16} className="mr-1" />
                  Add Task
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
