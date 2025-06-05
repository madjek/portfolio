import {
  FiAlertCircle,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiDownload,
  FiFileText,
} from 'react-icons/fi';

export default function Reporting() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Reporting & Scheduling</h1>
          <p className="text-gray-400">
            Create and schedule custom reports for your social media performance
          </p>
        </div>
        <button className="rounded-lg bg-blue-500 px-4 py-2 text-nowrap text-white hover:bg-blue-600">
          New Report
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center">
              <FiFileText className="mr-2 text-blue-500" size={24} />
              <h2 className="text-xl font-semibold">Report Templates</h2>
            </div>
            <button className="text-sm text-blue-400 hover:text-blue-300">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {[
              {
                title: 'Monthly Performance Overview',
                description: 'Complete analysis of social media performance',
                lastGenerated: '2 days ago',
                status: 'active',
              },
              {
                title: 'Weekly Engagement Report',
                description: 'Detailed engagement metrics and trends',
                lastGenerated: '5 days ago',
                status: 'active',
              },
              {
                title: 'Quarterly Growth Analysis',
                description: 'Long-term growth and performance trends',
                lastGenerated: '15 days ago',
                status: 'scheduled',
              },
            ].map((template, index) => (
              <div key={index} className="rounded-lg bg-gray-700/50 p-4">
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">{template.title}</h3>
                    <p className="text-sm text-gray-400">
                      {template.description}
                    </p>
                  </div>
                  <FiDownload
                    size={18}
                    className="cursor-pointer text-gray-400 hover:text-white"
                  />
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <FiClock size={14} className="mr-1" />
                  Last generated: {template.lastGenerated}
                  <span
                    className={`ml-2 rounded-full px-2 py-0.5 text-xs ${template.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}
                  >
                    {template.status === 'active' ? 'Active' : 'Scheduled'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center">
              <FiCalendar className="mr-2 text-purple-500" size={24} />
              <h2 className="text-xl font-semibold text-nowrap">
                Scheduled Reports
              </h2>
            </div>
            <button className="text-sm text-blue-400 hover:text-blue-300">
              Manage
            </button>
          </div>
          <div className="space-y-4">
            {[
              {
                title: 'Weekly Performance Report',
                schedule: 'Every Monday at 9:00 AM',
                recipients: ['marketing@company.com', '+2 others'],
                status: 'success',
              },
              {
                title: 'Content Calendar Review',
                schedule: 'Every Wednesday at 2:00 PM',
                recipients: ['content@company.com', '+1 other'],
                status: 'success',
              },
              {
                title: 'Monthly Analytics Summary',
                schedule: '1st of every month at 10:00 AM',
                recipients: ['analytics@company.com', '+3 others'],
                status: 'warning',
              },
            ].map((schedule, index) => (
              <div key={index} className="rounded-lg bg-gray-700/50 p-4">
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">{schedule.title}</h3>
                    <p className="text-sm text-gray-400">{schedule.schedule}</p>
                  </div>
                  {schedule.status === 'success' ? (
                    <FiCheckCircle size={18} className="text-green-400" />
                  ) : (
                    <FiAlertCircle size={18} className="text-yellow-400" />
                  )}
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  Recipients: {schedule.recipients.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
          <h3 className="mb-4 text-lg font-medium">Report History</h3>
          <div className="space-y-3">
            {[
              {
                name: 'Performance Overview',
                date: 'Jan 15, 2024',
                status: 'completed',
              },
              {
                name: 'Engagement Analysis',
                date: 'Jan 14, 2024',
                status: 'completed',
              },
              {
                name: 'Growth Report',
                date: 'Jan 13, 2024',
                status: 'completed',
              },
            ].map((report, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg bg-gray-700/50 p-3"
              >
                <div>
                  <div className="text-sm font-medium">{report.name}</div>
                  <div className="text-xs text-gray-400">{report.date}</div>
                </div>
                <FiDownload
                  size={16}
                  className="cursor-pointer text-gray-400 hover:text-white"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
          <h3 className="mb-4 text-lg font-medium">Export Settings</h3>
          <div className="space-y-3">
            {[
              {
                format: 'PDF Report',
                status: 'Default',
              },
              {
                format: 'Excel Spreadsheet',
                status: 'Available',
              },
              {
                format: 'CSV Data',
                status: 'Available',
              },
            ].map((format, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg bg-gray-700/50 p-3"
              >
                <span className="text-sm">{format.format}</span>
                <span
                  className={`rounded-full px-2 py-1 text-xs ${format.status === 'Default' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-600 text-gray-400'}`}
                >
                  {format.status}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
          <h3 className="mb-4 text-lg font-medium">Quick Actions</h3>
          <div className="space-y-3">
            {[
              {
                action: 'Generate Custom Report',
                icon: <FiFileText size={16} />,
              },
              {
                action: 'Schedule New Report',
                icon: <FiCalendar size={16} />,
              },
              {
                action: 'Download Latest Report',
                icon: <FiDownload size={16} />,
              },
            ].map((action, index) => (
              <button
                key={index}
                className="flex w-full items-center justify-between rounded-lg bg-gray-700/50 p-3 hover:bg-gray-700"
              >
                <span className="text-sm">{action.action}</span>
                {action.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
