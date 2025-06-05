import { useState } from 'react';
import {
  FiInstagram,
  FiLinkedin,
  FiPercent,
  FiTrendingUp,
  FiTwitch,
  FiTwitter,
  FiUsers,
  FiYoutube,
  FiZap,
} from 'react-icons/fi';
import HeatmapChart from '../charts/HeatmapChart';
import LineChart from '../charts/LineChart';
import FilterDropdown from '../dashboard/FilterDropdown';
import SummaryCard from '../dashboard/SummaryCard';

// Mock data
const summaryCardsData = [
  {
    title: 'Total Engagement',
    value: '24.5K',
    change: 12.5,
    data: [5, 10, 5, 20, 8, 15, 22, 30, 25, 35],
    icon: <FiZap size={18} className="text-white" />,
    color: 'bg-blue-500/20',
  },
  {
    title: 'Follower Growth',
    value: '1.2K',
    change: 8.3,
    data: [10, 15, 12, 20, 18, 22, 25, 23, 28, 30],
    icon: <FiUsers size={18} className="text-white" />,
    color: 'bg-purple-500/20',
  },
  {
    title: 'Best Performing Post',
    value: '12.8K',
    change: 23.1,
    data: [8, 15, 10, 25, 20, 30, 22, 35, 40, 38],
    icon: <FiTrendingUp size={18} className="text-white" />,
    color: 'bg-orange-500/20',
  },
  {
    title: 'Engagement Rate',
    value: '5.2%',
    change: -2.4,
    data: [15, 12, 20, 18, 22, 16, 14, 18, 15, 13],
    icon: <FiPercent size={18} className="text-white" />,
    color: 'bg-green-500/20',
  },
];
const platformPerformanceData = [
  {
    date: 'Jan',
    Instagram: 4000,
    Twitter: 2400,
    LinkedIn: 2400,
    YouTube: 1200,
    TikTok: 3200,
  },
  {
    date: 'Feb',
    Instagram: 3000,
    Twitter: 1398,
    LinkedIn: 2210,
    YouTube: 980,
    TikTok: 2900,
  },
  {
    date: 'Mar',
    Instagram: 2000,
    Twitter: 9800,
    LinkedIn: 2290,
    YouTube: 1608,
    TikTok: 2300,
  },
  {
    date: 'Apr',
    Instagram: 2780,
    Twitter: 3908,
    LinkedIn: 2000,
    YouTube: 1500,
    TikTok: 2100,
  },
  {
    date: 'May',
    Instagram: 1890,
    Twitter: 4800,
    LinkedIn: 2181,
    YouTube: 1400,
    TikTok: 2400,
  },
  {
    date: 'Jun',
    Instagram: 2390,
    Twitter: 3800,
    LinkedIn: 2500,
    YouTube: 1700,
    TikTok: 2700,
  },
  {
    date: 'Jul',
    Instagram: 3490,
    Twitter: 4300,
    LinkedIn: 2100,
    YouTube: 1200,
    TikTok: 3100,
  },
];
const platformLines = [
  {
    dataKey: 'Instagram',
    color: '#E1306C',
    name: 'Instagram',
  },
  {
    dataKey: 'Twitter',
    color: '#1DA1F2',
    name: 'Twitter',
  },
  {
    dataKey: 'LinkedIn',
    color: '#0077B5',
    name: 'LinkedIn',
  },
  {
    dataKey: 'YouTube',
    color: '#FF0000',
    name: 'YouTube',
  },
  {
    dataKey: 'TikTok',
    color: '#69C9D0',
    name: 'TikTok',
  },
];
// Generate heatmap data
const generateHeatmapData = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const hours = Array.from(
    {
      length: 24,
    },
    (_, i) => `${i}`,
  );
  const result = [];

  for (const day of days) {
    for (const hour of hours) {
      result.push({
        day,
        hour,
        value: Math.floor(Math.random() * 100),
      });
    }
  }

  return result;
};
const heatmapData = generateHeatmapData();
export default function Dashboard() {
  const [platform, setPlatform] = useState('All');
  const [dateRange, setDateRange] = useState('Last 30 days');
  const [campaign, setCampaign] = useState('All Campaigns');

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="mb-1 text-2xl font-bold">Welcome back, John 👋</h1>
          <p className="text-gray-400">
            Here&apos;s what&apos;s happening with your social platforms today.
          </p>
        </div>
        <div className="flex flex-col space-y-2 space-x-3 md:flex-row">
          <FilterDropdown
            label="Platform"
            options={[
              'All',
              'Instagram',
              'Twitter',
              'LinkedIn',
              'YouTube',
              'TikTok',
            ]}
            value={platform}
            onChange={setPlatform}
          />
          <FilterDropdown
            label="Date"
            options={[
              'Last 7 days',
              'Last 30 days',
              'Last 90 days',
              'This year',
            ]}
            value={dateRange}
            onChange={setDateRange}
          />
          <FilterDropdown
            label="Campaign"
            options={[
              'All Campaigns',
              'Summer Sale',
              'Product Launch',
              'Brand Awareness',
            ]}
            value={campaign}
            onChange={setCampaign}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {summaryCardsData.map((card, index) => (
          <SummaryCard key={index} {...card} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <LineChart
            title="Multi-platform Performance"
            data={platformPerformanceData}
            lines={platformLines}
            xAxisDataKey="date"
          />
        </div>
        <div>
          <div className="h-full rounded-xl border border-gray-700 bg-gray-800 p-4 shadow-lg">
            <h3 className="mb-4 text-lg font-medium">Platform Breakdown</h3>
            <div className="space-y-4 lg:space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FiInstagram size={20} className="mr-2 text-pink-500" />
                  <span>Instagram</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 text-sm font-medium">42%</span>
                  <div className="h-2 w-24 rounded-full bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-pink-500"
                      style={{
                        width: '42%',
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FiTwitter size={20} className="mr-2 text-blue-400" />
                  <span>Twitter</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 text-sm font-medium">28%</span>
                  <div className="h-2 w-24 rounded-full bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-blue-400"
                      style={{
                        width: '28%',
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FiLinkedin size={20} className="mr-2 text-blue-600" />
                  <span>LinkedIn</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 text-sm font-medium">15%</span>
                  <div className="h-2 w-24 rounded-full bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-blue-600"
                      style={{
                        width: '15%',
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FiYoutube size={20} className="mr-2 text-red-500" />
                  <span>YouTube</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 text-sm font-medium">10%</span>
                  <div className="h-2 w-24 rounded-full bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-red-500"
                      style={{
                        width: '10%',
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FiTwitch size={20} className="mr-2 text-purple-400" />
                  <span>TikTok</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 text-sm font-medium">5%</span>
                  <div className="h-2 w-24 rounded-full bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-purple-400"
                      style={{
                        width: '5%',
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeatmapChart
        data={heatmapData}
        title="Engagement Heatmap (by day and hour)"
      />
    </div>
  );
}
