import { useState } from 'react';
import { FiBarChart2, FiTrendingUp, FiUsers } from 'react-icons/fi';
import LineChart from '../charts/LineChart';
import FilterDropdown from '../dashboard/FilterDropdown';

export default function CompetitorBenchmarking() {
  const [competitor, setCompetitor] = useState('Competitor A');
  const [metric, setMetric] = useState('Followers');
  const [timeframe, setTimeframe] = useState('Last 30 days');
  const competitors = [
    'Competitor A',
    'Competitor B',
    'Competitor C',
    'Competitor D',
  ];
  const metrics = ['Followers', 'Engagement', 'Posts', 'Growth Rate'];
  const timeframes = [
    'Last 7 days',
    'Last 30 days',
    'Last 90 days',
    'Last year',
  ];
  const competitorData = [
    {
      date: 'Jan',
      You: 4500,
      'Competitor A': 4200,
      'Competitor B': 3800,
      'Competitor C': 3600,
    },
    {
      date: 'Feb',
      You: 4800,
      'Competitor A': 4400,
      'Competitor B': 3900,
      'Competitor C': 3800,
    },
    {
      date: 'Mar',
      You: 5200,
      'Competitor A': 4600,
      'Competitor B': 4100,
      'Competitor C': 4000,
    },
    {
      date: 'Apr',
      You: 5600,
      'Competitor A': 4900,
      'Competitor B': 4400,
      'Competitor C': 4200,
    },
    {
      date: 'May',
      You: 6000,
      'Competitor A': 5200,
      'Competitor B': 4600,
      'Competitor C': 4500,
    },
    {
      date: 'Jun',
      You: 6500,
      'Competitor A': 5600,
      'Competitor B': 4900,
      'Competitor C': 4800,
    },
  ];
  const competitorLines = [
    {
      dataKey: 'You',
      color: '#10B981',
      name: 'You',
    },
    {
      dataKey: 'Competitor A',
      color: '#6366F1',
      name: 'Competitor A',
    },
    {
      dataKey: 'Competitor B',
      color: '#F59E0B',
      name: 'Competitor B',
    },
    {
      dataKey: 'Competitor C',
      color: '#EC4899',
      name: 'Competitor C',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold">Competitor Benchmarking</h1>
          <p className="text-gray-400">
            Compare your social media performance against competitors
          </p>
        </div>
        <div className="flex flex-col space-y-2 space-x-3 md:flex-row">
          <FilterDropdown
            label="Competitor"
            options={competitors}
            value={competitor}
            onChange={setCompetitor}
          />
          <FilterDropdown
            label="Metric"
            options={metrics}
            value={metric}
            onChange={setMetric}
          />
          <FilterDropdown
            label="Time"
            options={timeframes}
            value={timeframe}
            onChange={setTimeframe}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <FiUsers className="mr-2 text-blue-500" size={20} />
              <h3 className="text-lg font-medium">Market Position</h3>
            </div>
            <span className="text-sm text-green-500">#2</span>
          </div>
          <p className="mb-2 text-3xl font-bold">2nd</p>
          <p className="text-sm text-gray-400">
            Out of 15 tracked competitors in your industry
          </p>
        </div>
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <FiTrendingUp className="mr-2 text-green-500" size={20} />
              <h3 className="text-lg font-medium">Growth Rate</h3>
            </div>
            <span className="text-sm text-green-500">+15.2%</span>
          </div>
          <p className="mb-2 text-3xl font-bold">15.2%</p>
          <p className="text-sm text-gray-400">
            5.8% higher than industry average
          </p>
        </div>
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <FiBarChart2 className="mr-2 text-purple-500" size={20} />
              <h3 className="text-lg font-medium">Engagement Score</h3>
            </div>
            <span className="text-sm text-green-500">8.5/10</span>
          </div>
          <p className="mb-2 text-3xl font-bold">8.5</p>
          <p className="text-sm text-gray-400">Top 15% in your industry</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <LineChart
          title="Competitive Growth Comparison"
          data={competitorData}
          lines={competitorLines}
          xAxisDataKey="date"
        />
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
          <h3 className="mb-6 text-lg font-medium">Performance Analysis</h3>
          <div className="space-y-6">
            {[
              {
                label: 'Follower Growth',
                you: 85,
                competitor: 75,
              },
              {
                label: 'Engagement Rate',
                you: 92,
                competitor: 68,
              },
              {
                label: 'Post Frequency',
                you: 78,
                competitor: 88,
              },
              {
                label: 'Response Time',
                you: 95,
                competitor: 72,
              },
            ].map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex justify-between">
                  <span className="text-sm text-gray-400">{item.label}</span>
                  <span className="text-sm text-gray-400">
                    You vs {competitor}
                  </span>
                </div>
                <div className="flex gap-2">
                  <div className="h-2 flex-1 rounded-full bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-blue-500"
                      style={{
                        width: `${item.you}%`,
                      }}
                    ></div>
                  </div>
                  <div className="h-2 flex-1 rounded-full bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-purple-500"
                      style={{
                        width: `${item.competitor}%`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="mt-1 flex justify-between">
                  <span className="text-sm font-medium">{item.you}%</span>
                  <span className="text-sm font-medium">
                    {item.competitor}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {[
          {
            title: 'Content Strategy',
            metrics: [
              {
                label: 'Post Types',
                value: '75% similar',
              },
              {
                label: 'Posting Time',
                value: '60% match',
              },
              {
                label: 'Hashtag Usage',
                value: '45% overlap',
              },
            ],
          },
          {
            title: 'Audience Overlap',
            metrics: [
              {
                label: 'Shared Followers',
                value: '35%',
              },
              {
                label: 'Similar Demographics',
                value: '68%',
              },
              {
                label: 'Engagement Overlap',
                value: '42%',
              },
            ],
          },
          {
            title: 'Brand Sentiment',
            metrics: [
              {
                label: 'Positive Mentions',
                value: '82%',
              },
              {
                label: 'Neutral Mentions',
                value: '15%',
              },
              {
                label: 'Negative Mentions',
                value: '3%',
              },
            ],
          },
        ].map((section) => (
          <div
            key={section.title}
            className="rounded-xl border border-gray-700 bg-gray-800 p-6"
          >
            <h3 className="mb-4 text-lg font-medium">{section.title}</h3>
            <div className="space-y-4">
              {section.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex items-center justify-between"
                >
                  <span className="text-gray-400">{metric.label}</span>
                  <span className="font-medium">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
