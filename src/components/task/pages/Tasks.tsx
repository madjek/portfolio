import { useState } from 'react';
import { FiCalendar, FiCheck, FiFilter, FiPlus, FiTag } from 'react-icons/fi';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: string;
  dueDate: string;
  assignees: string[];
  project: string;
  status: string;
}

export default function Tasks() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showTaskModal, setShowTaskModal] = useState(false);
  // Mock data
  const tasks = [
    {
      id: 1,
      title: 'Finalize homepage design',
      description: 'Complete the new homepage layout with updated branding',
      completed: false,
      priority: 'High',
      dueDate: 'Today',
      assignees: ['JD', 'AS'],
      project: 'Website Redesign',
      status: 'In Progress',
    },
    {
      id: 2,
      title: 'Review API documentation',
      description: 'Go through the third-party payment API documentation',
      completed: false,
      priority: 'Medium',
      dueDate: 'Today',
      assignees: ['JD'],
      project: 'API Integration',
      status: 'To-do',
    },
    {
      id: 3,
      title: 'User testing interviews',
      description: 'Conduct 5 user interviews for the new feature',
      completed: false,
      priority: 'High',
      dueDate: 'Tomorrow',
      assignees: ['MK', 'LM'],
      project: 'User Research',
      status: 'In Progress',
    },
    {
      id: 4,
      title: 'Create social media assets',
      description: 'Design graphics for the upcoming campaign',
      completed: true,
      priority: 'Medium',
      dueDate: 'Yesterday',
      assignees: ['AS'],
      project: 'Marketing Campaign',
      status: 'Done',
    },
    {
      id: 5,
      title: 'Weekly team meeting',
      description: 'Prepare agenda and share with team members',
      completed: false,
      priority: 'Low',
      dueDate: 'Today',
      assignees: ['JD', 'AS', 'MK', 'RB'],
      project: 'General',
      status: 'To-do',
    },
  ];
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'Medium':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'Low':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'To-do':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Done':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };
  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === 'all') return true;

    if (activeFilter === 'mine') return task.assignees.includes('JD');

    if (activeFilter === 'today') return task.dueDate === 'Today';

    if (activeFilter === 'completed') return task.completed;

    return true;
  });
  const TaskItem = ({ task }: { task: Task }) => (
    <div className="p-2 transition-colors hover:bg-gray-50 md:p-4 dark:hover:bg-gray-700/50">
      <div className="flex items-start">
        <div className="mr-3 pt-1">
          <div
            className={`flex h-5 w-5 items-center justify-center rounded-md border ${
              task.completed
                ? 'border-indigo-500 bg-indigo-500'
                : 'border-gray-300 dark:border-gray-600'
            }`}
          >
            {task.completed && <FiCheck size={14} className="text-white" />}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h3
              className={`font-medium ${
                task.completed
                  ? 'text-gray-500 line-through dark:text-gray-400'
                  : ''
              }`}
            >
              {task.title}
            </h3>
            <div className="mt-2 flex items-center gap-2 sm:mt-0">
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${getPriorityBadge(
                  task.priority,
                )}`}
              >
                {task.priority}
              </span>
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${getStatusBadge(
                  task.status,
                )}`}
              >
                {task.status}
              </span>
            </div>
          </div>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {task.description}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
              <FiCalendar size={14} className="mr-1" />
              {task.dueDate}
            </div>
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
              <FiTag size={14} className="mr-1" />
              {task.project}
            </div>
            <div className="flex items-center">
              <div className="flex -space-x-1">
                {task.assignees.slice(0, 3).map((member, idx) => (
                  <div
                    key={idx}
                    className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-indigo-500 text-xs text-white dark:border-gray-800"
                  >
                    {member}
                  </div>
                ))}
                {task.assignees.length > 3 && (
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gray-200 text-xs dark:border-gray-800 dark:bg-gray-700">
                    +{task.assignees.length - 3}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-2 md:space-y-6">
      {/* Header and Filters */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between md:gap-4">
        <h1 className="text-2xl font-bold md:text-3xl">Tasks</h1>
        <div className="grid grid-cols-1 gap-3 md:flex">
          <div className="flex w-fit rounded-xl border border-gray-200 bg-white p-1 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            {['all', 'mine', 'today', 'completed'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-lg px-3 py-1.5 text-sm ${
                  activeFilter === filter
                    ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {filter === 'all' && 'All'}
                {filter === 'mine' && 'My Tasks'}
                {filter === 'today' && 'Due Today'}
                {filter === 'completed' && 'Completed'}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowTaskModal(true)}
            className="flex w-fit items-center rounded-xl bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700"
          >
            <FiPlus size={18} className="mr-2" />
            New Task
          </button>
        </div>
      </div>

      {/* Tasks List */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center justify-between border-b border-gray-200 p-2 md:p-4 dark:border-gray-700">
          <div className="font-medium">All Tasks ({filteredTasks.length})</div>
          <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
            <FiFilter size={18} />
          </button>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </div>

      {/* Task Modal */}
      {showTaskModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-xl dark:bg-gray-800">
            {/* Modal content */}
          </div>
        </div>
      )}
    </div>
  );
}
