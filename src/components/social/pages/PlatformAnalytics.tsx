import { useState } from 'react';
import {
  FiEye,
  FiHeart,
  FiMessageCircle,
  FiShare,
  FiUsers,
} from 'react-icons/fi';
import HeatmapChart from '../charts/HeatmapChart';
import LineChart from '../charts/LineChart';
import SummaryCard from '../dashboard/SummaryCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';

interface MetricsByPlatform {
  [key: string]: {
    followers: { value: string; change: number; data: number[] };
    engagement: { value: string; change: number; data: number[] };
    reach: { value: string; change: number; data: number[] };
  };
}

interface PerformanceData {
  date: string;
  [key: string]: string | number;
}

interface PerformanceByPlatform {
  [key: string]: PerformanceData[];
}

export default function PlatformAnalytics() {
  const [activeTab, setActiveTab] = useState('instagram');
  // Mock data for metrics
  const metricsByPlatform: MetricsByPlatform = {
    instagram: {
      followers: {
        value: '125.8K',
        change: 12.5,
        data: [10, 15, 12, 18, 20, 22, 25, 23, 28, 30],
      },
      engagement: {
        value: '4.2%',
        change: 8.3,
        data: [3, 4, 3.8, 4.2, 3.9, 4.5, 4.2, 4.8, 4.6, 4.2],
      },
      reach: {
        value: '458.2K',
        change: 15.2,
        data: [250, 300, 280, 350, 320, 380, 400, 380, 420, 458],
      },
    },
    twitter: {
      followers: {
        value: '89.2K',
        change: 8.3,
        data: [8, 12, 10, 15, 18, 20, 22, 25, 23, 28],
      },
      engagement: {
        value: '2.8%',
        change: -2.1,
        data: [3.5, 4, 3.8, 4.2, 3.9, 4.5, 4.2, 4.8, 4.6, 4.2],
      },
      reach: {
        value: '312.5K',
        change: 10.8,
        data: [250, 300, 280, 350, 320, 380, 400, 380, 420, 458],
      },
    },
    linkedin: {
      followers: {
        value: '45.6K',
        change: 15.2,
        data: [5, 10, 8, 12, 15, 18, 20, 22, 25, 23],
      },
      engagement: {
        value: '3.5%',
        change: 5.4,
        data: [3, 4, 3.8, 4.2, 3.9, 4.5, 4.2, 4.8, 4.6, 4.2],
      },
      reach: {
        value: '198.7K',
        change: 8.9,
        data: [250, 300, 280, 350, 320, 380, 400, 380, 420, 458],
      },
    },
    youtube: {
      followers: {
        value: '250.3K',
        change: 20.1,
        data: [15, 20, 18, 22, 25, 28, 30, 32, 35, 38],
      },
      engagement: {
        value: '5.1%',
        change: 12.3,
        data: [3.5, 4, 3.8, 4.2, 3.9, 4.5, 4.2, 4.8, 4.6, 4.2],
      },
      reach: {
        value: '856.4K',
        change: 25.4,
        data: [250, 300, 280, 350, 320, 380, 400, 380, 420, 458],
      },
    },
    default: {
      followers: {
        value: '78.9K',
        change: 25.4,
        data: [10, 15, 12, 18, 20, 22, 25, 23, 28, 30],
      },
      engagement: {
        value: '6.2%',
        change: 15.7,
        data: [3, 4, 3.8, 4.2, 3.9, 4.5, 4.2, 4.8, 4.6, 4.2],
      },
      reach: {
        value: '423.1K',
        change: 30.2,
        data: [250, 300, 280, 350, 320, 380, 400, 380, 420, 458],
      },
    },
  };
  const performanceByPlatform: PerformanceByPlatform = {
    instagram: [
      { date: 'Jan', Engagement: 4200, Reach: 8500, Impressions: 12000 },
      { date: 'Feb', Engagement: 4800, Reach: 9200, Impressions: 13500 },
      { date: 'Mar', Engagement: 5100, Reach: 9800, Impressions: 14200 },
      { date: 'Apr', Engagement: 4900, Reach: 9500, Impressions: 13800 },
      { date: 'May', Engagement: 5400, Reach: 10200, Impressions: 15000 },
      { date: 'Jun', Engagement: 5800, Reach: 10800, Impressions: 16200 },
      { date: 'Jul', Engagement: 6200, Reach: 11500, Impressions: 17500 },
    ],
    twitter: [
      { date: 'Jan', Engagement: 3000, Reach: 6000, Impressions: 9000 },
      { date: 'Feb', Engagement: 3200, Reach: 6400, Impressions: 10000 },
      { date: 'Mar', Engagement: 3400, Reach: 6800, Impressions: 10800 },
      { date: 'Apr', Engagement: 3300, Reach: 6600, Impressions: 10400 },
      { date: 'May', Engagement: 3700, Reach: 7400, Impressions: 11900 },
      { date: 'Jun', Engagement: 4100, Reach: 8200, Impressions: 13300 },
      { date: 'Jul', Engagement: 4500, Reach: 9000, Impressions: 14500 },
    ],
    linkedin: [
      { date: 'Jan', Engagement: 1500, Reach: 3000, Impressions: 4500 },
      { date: 'Feb', Engagement: 1800, Reach: 3600, Impressions: 5400 },
      { date: 'Mar', Engagement: 2100, Reach: 4200, Impressions: 6300 },
      { date: 'Apr', Engagement: 2000, Reach: 4000, Impressions: 6000 },
      { date: 'May', Engagement: 2300, Reach: 4600, Impressions: 6900 },
      { date: 'Jun', Engagement: 2600, Reach: 5200, Impressions: 7800 },
      { date: 'Jul', Engagement: 2900, Reach: 5800, Impressions: 8700 },
    ],
    youtube: [
      { date: 'Jan', Engagement: 12000, Reach: 24000, Impressions: 36000 },
      { date: 'Feb', Engagement: 13000, Reach: 26000, Impressions: 39000 },
      { date: 'Mar', Engagement: 14000, Reach: 28000, Impressions: 42000 },
      { date: 'Apr', Engagement: 13500, Reach: 27000, Impressions: 40500 },
      { date: 'May', Engagement: 14500, Reach: 29000, Impressions: 43500 },
      { date: 'Jun', Engagement: 15500, Reach: 31000, Impressions: 46500 },
      { date: 'Jul', Engagement: 16500, Reach: 33000, Impressions: 49500 },
    ],
    default: [
      { date: 'Jan', Engagement: 1000, Reach: 2000, Impressions: 3000 },
      { date: 'Feb', Engagement: 1100, Reach: 2200, Impressions: 3300 },
      { date: 'Mar', Engagement: 1200, Reach: 2400, Impressions: 3600 },
      { date: 'Apr', Engagement: 1150, Reach: 2300, Impressions: 3450 },
      { date: 'May', Engagement: 1250, Reach: 2500, Impressions: 3750 },
      { date: 'Jun', Engagement: 1350, Reach: 2700, Impressions: 4050 },
      { date: 'Jul', Engagement: 1450, Reach: 2900, Impressions: 4350 },
    ],
  };
  const getPerformanceData = (platform: string) => {
    return performanceByPlatform[platform] ?? performanceByPlatform.default;
  };
  const getMetricsData = (platform: string) => {
    const data = metricsByPlatform[platform] ?? metricsByPlatform.default;

    return [
      {
        title: 'Total Followers',
        value: data.followers.value,
        change: data.followers.change,
        data: data.followers.data,
        icon: <FiUsers size={18} className="text-white" />,
        color: 'bg-blue-500/20',
      },
      {
        title: 'Engagement Rate',
        value: data.engagement.value,
        change: data.engagement.change,
        data: data.engagement.data,
        icon: <FiHeart size={18} className="text-white" />,
        color: 'bg-pink-500/20',
      },
      {
        title: 'Reach',
        value: data.reach.value,
        change: data.reach.change,
        data: data.reach.data,
        icon: <FiEye size={18} className="text-white" />,
        color: 'bg-purple-500/20',
      },
    ];
  };
  const performanceLines = [
    {
      dataKey: 'Engagement',
      color: '#10B981',
      name: 'Engagement',
    },
    {
      dataKey: 'Reach',
      color: '#6366F1',
      name: 'Reach',
    },
    {
      dataKey: 'Impressions',
      color: '#F59E0B',
      name: 'Impressions',
    },
  ];
  const renderPlatformContent = (platform: string) => {
    const metrics = getMetricsData(platform);
    const performanceData = getPerformanceData(platform);

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <SummaryCard key={index} {...metric} />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <LineChart
            title="Performance Overview"
            data={performanceData}
            lines={performanceLines}
            xAxisDataKey="date"
          />
          <HeatmapChart
            data={Array.from(
              {
                length: 168,
              },
              (_, i) => ({
                day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][
                  Math.floor(i / 24)
                ],
                hour: `${i % 24}:00`,
                value: Math.floor(Math.random() * 100),
              }),
            )}
            title="Best Posting Times"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
            <h3 className="mb-4 text-lg font-medium">Top Content Types</h3>
            <div className="space-y-4">
              {[
                {
                  type: 'Photos',
                  value: 45,
                },
                {
                  type: 'Videos',
                  value: 30,
                },
                {
                  type: 'Carousels',
                  value: 15,
                },
                {
                  type: 'Stories',
                  value: 10,
                },
              ].map((item) => (
                <div
                  key={item.type}
                  className="flex items-center justify-between"
                >
                  <span className="text-gray-400">{item.type}</span>
                  <div className="flex items-center">
                    <span className="mr-2 text-sm font-medium">
                      {item.value}%
                    </span>
                    <div className="h-2 w-24 rounded-full bg-gray-700">
                      <div
                        className="h-2 rounded-full bg-blue-500"
                        style={{
                          width: `${item.value}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
            <h3 className="mb-4 text-lg font-medium">Audience Demographics</h3>
            <div className="space-y-4">
              {[
                {
                  age: '18-24',
                  value: 25,
                },
                {
                  age: '25-34',
                  value: 40,
                },
                {
                  age: '35-44',
                  value: 20,
                },
                {
                  age: '45+',
                  value: 15,
                },
              ].map((item) => (
                <div
                  key={item.age}
                  className="flex items-center justify-between"
                >
                  <span className="text-gray-400">{item.age}</span>
                  <div className="flex items-center">
                    <span className="mr-2 text-sm font-medium">
                      {item.value}%
                    </span>
                    <div className="h-2 w-24 rounded-full bg-gray-700">
                      <div
                        className="h-2 rounded-full bg-purple-500"
                        style={{
                          width: `${item.value}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
            <h3 className="mb-4 text-lg font-medium">Engagement Breakdown</h3>
            <div className="space-y-4">
              {[
                {
                  type: 'Likes',
                  value: 65,
                  icon: <FiHeart size={16} className="text-pink-500" />,
                },
                {
                  type: 'Comments',
                  value: 20,
                  icon: <FiMessageCircle size={16} className="text-blue-500" />,
                },
                {
                  type: 'Shares',
                  value: 15,
                  icon: <FiShare size={16} className="text-green-500" />,
                },
              ].map((item) => (
                <div
                  key={item.type}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center">
                    {item.icon}
                    <span className="ml-2 text-gray-400">{item.type}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-sm font-medium">
                      {item.value}%
                    </span>
                    <div className="h-2 w-24 rounded-full bg-gray-700">
                      <div
                        className="h-2 rounded-full bg-blue-500"
                        style={{
                          width: `${item.value}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="mb-1 text-2xl font-bold">Platform Analytics</h1>
        <p className="text-gray-400">
          Detailed performance metrics for each social platform
        </p>
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="instagram">Instagram</TabsTrigger>
          <TabsTrigger value="twitter">X (Twitter)</TabsTrigger>
          <TabsTrigger value="tiktok">TikTok</TabsTrigger>
          <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
          <TabsTrigger value="youtube">YouTube</TabsTrigger>
        </TabsList>
        <TabsContent value="instagram" className="mt-6">
          {renderPlatformContent('instagram')}
        </TabsContent>
        <TabsContent value="twitter" className="mt-6">
          {renderPlatformContent('twitter')}
        </TabsContent>
        <TabsContent value="tiktok" className="mt-6">
          {renderPlatformContent('tiktok')}
        </TabsContent>
        <TabsContent value="linkedin" className="mt-6">
          {renderPlatformContent('linkedin')}
        </TabsContent>
        <TabsContent value="youtube" className="mt-6">
          {renderPlatformContent('youtube')}
        </TabsContent>
      </Tabs>
    </div>
  );
}
