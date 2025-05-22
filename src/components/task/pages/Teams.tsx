import {
  FiFilter,
  FiMail,
  FiMessageCircle,
  FiMoreHorizontal,
  FiPlus,
  FiSearch,
} from 'react-icons/fi';

export default function Teams() {
  // Mock data
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Product Manager',
      email: 'john@teamflow.com',
      avatar: 'JD',
      status: 'online',
      department: 'Product',
    },
    {
      id: 2,
      name: 'Anna Smith',
      role: 'UI/UX Designer',
      email: 'anna@teamflow.com',
      avatar: 'AS',
      status: 'online',
      department: 'Design',
    },
    {
      id: 3,
      name: 'Robert Brown',
      role: 'Frontend Developer',
      email: 'robert@teamflow.com',
      avatar: 'RB',
      status: 'away',
      department: 'Engineering',
    },
    {
      id: 4,
      name: 'Lisa Miller',
      role: 'UX Researcher',
      email: 'lisa@teamflow.com',
      avatar: 'LM',
      status: 'offline',
      department: 'Design',
    },
    {
      id: 5,
      name: 'Michael Kim',
      role: 'Backend Developer',
      email: 'michael@teamflow.com',
      avatar: 'MK',
      status: 'online',
      department: 'Engineering',
    },
    {
      id: 6,
      name: 'Sarah Johnson',
      role: 'Marketing Specialist',
      email: 'sarah@teamflow.com',
      avatar: 'SJ',
      status: 'offline',
      department: 'Marketing',
    },
    {
      id: 7,
      name: 'David Lee',
      role: 'Data Analyst',
      email: 'david@teamflow.com',
      avatar: 'DL',
      status: 'away',
      department: 'Data',
    },
    {
      id: 8,
      name: 'Thomas Jackson',
      role: 'QA Engineer',
      email: 'thomas@teamflow.com',
      avatar: 'TJ',
      status: 'online',
      department: 'Engineering',
    },
  ];
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'away':
        return 'bg-amber-500';
      case 'offline':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="space-y-2 md:space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold md:text-3xl">Team Members</h1>
        <div className="flex items-center gap-3">
          <button className="flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
            <FiPlus size={18} className="mr-2" />
            Invite Member
          </button>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="flex flex-col gap-4 border-b border-gray-200 p-2 sm:flex-row md:p-4 dark:border-gray-700">
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <FiSearch size={18} className="text-gray-400" />
            </div>
            <input
              type="search"
              placeholder="Search team members..."
              className="block w-full rounded-lg border border-gray-300 bg-white py-2 pr-3 pl-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800"
            />
          </div>
          <div className="flex items-center gap-2">
            <select className="rounded-lg border border-gray-300 bg-white px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800">
              <option value="">All Departments</option>
              <option value="product">Product</option>
              <option value="design">Design</option>
              <option value="engineering">Engineering</option>
              <option value="marketing">Marketing</option>
              <option value="data">Data</option>
            </select>
            <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
              <FiFilter size={18} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 p-2 md:grid-cols-2 md:gap-4 md:p-4 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="p-3 md:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="relative">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500 text-lg font-medium text-white">
                        {member.avatar}
                      </div>
                      <div
                        className={`absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white dark:border-gray-800 ${getStatusColor(member.status)}`}
                      ></div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">{member.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <FiMoreHorizontal size={20} />
                  </button>
                </div>
                <div className="mt-4">
                  <p className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <span className="rounded bg-gray-200 px-2 py-0.5 text-xs font-medium dark:bg-gray-700">
                      {member.department}
                    </span>
                  </p>
                </div>
                <div className="mt-4 border-t border-gray-100 pt-4 dark:border-gray-700">
                  <div className="flex justify-between">
                    <button className="flex items-center text-sm text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
                      <FiMail size={16} className="mr-1.5" />
                      Email
                    </button>
                    <button className="flex items-center text-sm text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
                      <FiMessageCircle size={16} className="mr-1.5" />
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
