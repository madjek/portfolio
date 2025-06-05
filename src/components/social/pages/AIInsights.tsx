import {
  FiBarChart2,
  FiCalendar,
  FiHash,
  FiMessageSquare,
  FiTrendingUp,
} from 'react-icons/fi';
import { LuBrain } from 'react-icons/lu';

export default function AIInsights() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">AI Insights</h1>
          <p className="text-gray-400">
            AI-powered content suggestions and performance predictions
          </p>
        </div>
        <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-nowrap text-blue-400">
          Last updated: 2 hours ago
        </span>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
          <div className="mb-4 flex items-center">
            <LuBrain className="mr-2 text-purple-500" size={24} />
            <h2 className="text-xl font-semibold">Content Recommendations</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                title: 'Share behind-the-scenes content',
                description:
                  'Your audience engages 2.5x more with authentic workplace content',
                time: 'Best time: 2 PM EST',
                confidence: 92,
              },
              {
                title: 'Create a product tutorial video',
                description:
                  'Tutorial content has shown 40% higher retention rates',
                time: 'Best time: 11 AM EST',
                confidence: 88,
              },
              {
                title: 'Host an AMA session',
                description:
                  'Live interactions increase follower loyalty by 65%',
                time: 'Best time: 5 PM EST',
                confidence: 85,
              },
            ].map((item, index) => (
              <div key={index} className="rounded-lg bg-gray-700/50 p-4">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="font-medium">{item.title}</h3>
                  <span className="rounded-full bg-green-500/20 px-2 py-1 text-xs text-nowrap text-green-400">
                    {item.confidence}% confidence
                  </span>
                </div>
                <p className="mb-2 text-sm text-gray-400">{item.description}</p>
                <div className="flex items-center text-sm text-gray-400">
                  <FiCalendar size={14} className="mr-1" />
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
          <div className="mb-4 flex items-center">
            <FiTrendingUp className="mr-2 text-blue-500" size={24} />
            <h2 className="text-xl font-semibold">Trend Predictions</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                trend: '#SustainableLiving',
                growth: '+125%',
                prediction: 'Expected to peak in 2 weeks',
                relevance: 'High',
              },
              {
                trend: '#WorkLifeBalance',
                growth: '+85%',
                prediction: 'Steady growth expected',
                relevance: 'Medium',
              },
              {
                trend: '#TechInnovation',
                growth: '+200%',
                prediction: 'Viral potential in 3 days',
                relevance: 'Very High',
              },
            ].map((item, index) => (
              <div key={index} className="rounded-lg bg-gray-700/50 p-4">
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <h3 className="flex items-center font-medium">
                      <FiHash size={16} className="mr-1" />
                      {item.trend}
                    </h3>
                    <span className="text-sm text-gray-400">
                      {item.prediction}
                    </span>
                  </div>
                  <span className="text-green-400">{item.growth}</span>
                </div>
                <div className="mt-2 flex items-center">
                  <span className="rounded-full bg-blue-500/20 px-2 py-1 text-xs text-blue-400">
                    {item.relevance} Relevance
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
          <div className="mb-4 flex items-center">
            <FiMessageSquare className="mr-2 text-green-500" size={20} />
            <h3 className="text-lg font-medium">Caption Generator</h3>
          </div>
          <div className="space-y-3">
            {[
              '"Innovating for tomorrow, delivering today 🚀 #TechLeaders"',
              '"Behind every great product is an even greater team 💪 #TeamWork"',
              '"Small changes, big impact 🌱 #Sustainability"',
            ].map((caption, index) => (
              <div
                key={index}
                className="rounded-lg bg-gray-700/50 p-3 text-sm"
              >
                {caption}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
          <div className="mb-4 flex items-center">
            <FiBarChart2 className="mr-2 text-orange-500" size={20} />
            <h3 className="text-lg font-medium">Performance Predictions</h3>
          </div>
          <div className="space-y-3">
            {[
              {
                metric: 'Engagement Rate',
                prediction: '↑ 15% increase',
              },
              {
                metric: 'Follower Growth',
                prediction: '↗ 8% growth',
              },
              {
                metric: 'Reach',
                prediction: '→ Stable trend',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg bg-gray-700/50 p-3"
              >
                <span className="text-sm text-gray-400">{item.metric}</span>
                <span className="text-sm font-medium">{item.prediction}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
          <div className="mb-4 flex items-center">
            <FiCalendar className="mr-2 text-pink-500" size={20} />
            <h3 className="text-lg font-medium">Optimal Posting Times</h3>
          </div>
          <div className="space-y-3">
            {[
              {
                day: 'Monday',
                time: '10:00 AM',
                score: '98%',
              },
              {
                day: 'Wednesday',
                time: '2:00 PM',
                score: '95%',
              },
              {
                day: 'Friday',
                time: '6:00 PM',
                score: '92%',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg bg-gray-700/50 p-3"
              >
                <div className="text-sm">
                  <div className="font-medium">{item.day}</div>
                  <div className="text-gray-400">{item.time}</div>
                </div>
                <span className="text-sm text-green-400">{item.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
