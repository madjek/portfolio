import { FiClock } from 'react-icons/fi';

export default function SavedDashboards() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Saved Dashboards</h1>
          <p className="text-gray-400">
            Access and manage your custom dashboard layouts
          </p>
        </div>
        <button className="flex items-center rounded-lg bg-blue-500 px-4 py-2 text-nowrap text-white hover:bg-blue-600">
          New Dashboard
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'Main Overview',
            description: 'Primary performance metrics and KPIs',
            type: 'Featured',
            lastModified: '2 hours ago',
            metrics: ['Engagement', 'Growth', 'Reach'],
          },
          {
            title: 'Content Performance',
            description: 'Content analytics and engagement metrics',
            type: 'Custom',
            lastModified: '1 day ago',
            metrics: ['Posts', 'Engagement', 'Reach'],
          },
          {
            title: 'Audience Insights',
            description: 'Detailed audience demographics and behavior',
            type: 'Featured',
            lastModified: '3 days ago',
            metrics: ['Demographics', 'Activity', 'Growth'],
          },
          {
            title: 'Campaign Tracker',
            description: 'Active campaign performance monitoring',
            type: 'Custom',
            lastModified: '1 week ago',
            metrics: ['ROI', 'Reach', 'Conversion'],
          },
          {
            title: 'Competitor Analysis',
            description: 'Competitive benchmarking dashboard',
            type: 'Featured',
            lastModified: '2 weeks ago',
            metrics: ['Market Share', 'Growth', 'Engagement'],
          },
          {
            title: 'Content Calendar',
            description: 'Content planning and scheduling overview',
            type: 'Custom',
            lastModified: '3 weeks ago',
            metrics: ['Schedule', 'Performance', 'Planning'],
          },
        ].map((dashboard, index) => (
          <div
            key={index}
            className="cursor-pointer rounded-xl border border-gray-700 bg-gray-800 p-6 hover:border-gray-600"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium">{dashboard.title}</h3>
                <p className="text-sm text-gray-400">{dashboard.description}</p>
              </div>
              <span
                className={`rounded-full px-2 py-1 text-xs ${dashboard.type === 'Featured' ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'}`}
              >
                {dashboard.type}
              </span>
            </div>
            <div className="mb-4 flex flex-wrap gap-2">
              {dashboard.metrics.map((metric, i) => (
                <span
                  key={i}
                  className="rounded-lg bg-gray-700/50 px-2 py-1 text-xs text-gray-400"
                >
                  {metric}
                </span>
              ))}
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <FiClock size={14} className="mr-1" />
              Last modified: {dashboard.lastModified}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
          <h3 className="mb-4 text-lg font-medium">Templates</h3>
          <div className="space-y-3">
            {[
              {
                name: 'Performance Overview',
                type: 'Basic',
              },
              {
                name: 'Content Analytics',
                type: 'Advanced',
              },
              {
                name: 'Growth Tracker',
                type: 'Basic',
              },
            ].map((template, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg bg-gray-700/50 p-3"
              >
                <span className="text-sm">{template.name}</span>
                <span className="rounded-full bg-gray-600 px-2 py-1 text-xs">
                  {template.type}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
          <h3 className="mb-4 text-lg font-medium">Recent Activity</h3>
          <div className="space-y-3">
            {[
              {
                action: 'Dashboard created',
                time: '2 hours ago',
              },
              {
                action: 'Layout updated',
                time: '5 hours ago',
              },
              {
                action: 'Metrics added',
                time: '1 day ago',
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg bg-gray-700/50 p-3"
              >
                <span className="text-sm">{activity.action}</span>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
          <h3 className="mb-4 text-lg font-medium">Quick Stats</h3>
          <div className="space-y-3">
            {[
              {
                label: 'Total Dashboards',
                value: '12',
              },
              {
                label: 'Shared With Team',
                value: '5',
              },
              {
                label: 'Templates Used',
                value: '3',
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg bg-gray-700/50 p-3"
              >
                <span className="text-sm">{stat.label}</span>
                <span className="font-medium">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
