import { cn } from '@/utils/cn';
import { FiBell, FiGlobe, FiLink, FiShield, FiUser } from 'react-icons/fi';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-400">
          Manage your account preferences and platform settings
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
          <div className="mb-6 flex items-center">
            <FiUser className="mr-2 text-blue-500" size={24} />
            <h2 className="text-xl font-semibold">Profile Settings</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Display Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-lg border border-gray-600 bg-gray-700 px-3 py-2 focus:border-blue-500 focus:outline-none"
                defaultValue="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-lg border border-gray-600 bg-gray-700 px-3 py-2 focus:border-blue-500 focus:outline-none"
                defaultValue="john@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="timezone"
                className="mb-2 block text-sm font-medium"
              >
                Time Zone
              </label>
              <select
                id="timezone"
                className="w-full rounded-lg border border-gray-600 bg-gray-700 px-3 py-2 focus:border-blue-500 focus:outline-none"
              >
                <option>Eastern Time (ET)</option>
                <option>Pacific Time (PT)</option>
                <option>UTC</option>
              </select>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
          <div className="mb-6 flex items-center">
            <FiLink className="mr-2 text-green-500" size={24} />
            <h2 className="text-xl font-semibold">Connected Accounts</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                platform: 'Instagram',
                status: 'Connected',
              },
              {
                platform: 'Twitter',
                status: 'Connected',
              },
              {
                platform: 'LinkedIn',
                status: 'Not Connected',
              },
              {
                platform: 'TikTok',
                status: 'Connected',
              },
            ].map((account, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg bg-gray-700/50 p-3"
              >
                <span className="text-sm">{account.platform}</span>
                <span
                  className={`rounded-full px-2 py-1 text-xs ${account.status === 'Connected' ? 'bg-green-500/20 text-green-400' : 'bg-gray-600 text-gray-400'}`}
                >
                  {account.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
          <div className="mb-6 flex items-center">
            <FiBell className="mr-2 text-purple-500" size={24} />
            <h2 className="text-xl font-semibold">Notification Settings</h2>
          </div>
          <div className="space-y-4">
            {[
              'Email notifications',
              'Push notifications',
              'Performance alerts',
            ].map((setting, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm">{setting}</span>
                <div className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    defaultChecked={index < 2}
                  />
                  <div
                    className={cn(
                      'peer h-6 w-11 rounded-full bg-gray-700 peer-checked:bg-blue-500 peer-focus:ring-4 peer-focus:ring-blue-800 peer-focus:outline-none',
                      "after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white",
                    )}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
          <div className="mb-6 flex items-center">
            <FiShield className="mr-2 text-red-500" size={24} />
            <h2 className="text-xl font-semibold">Security</h2>
          </div>
          <div className="space-y-4">
            {[
              'Two-factor authentication',
              'Login alerts',
              'Suspicious activity detection',
            ].map((setting, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm">{setting}</span>
                <div className="relative inline-flex cursor-pointer items-center">
                  <input
                    id="security"
                    type="checkbox"
                    className="peer sr-only"
                    defaultChecked={index === 0}
                  />
                  <div
                    className={cn(
                      'peer h-6 w-11 rounded-full bg-gray-700 peer-checked:bg-blue-500 peer-focus:ring-4 peer-focus:ring-blue-800 peer-focus:outline-none',
                      "after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white",
                    )}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
          <div className="mb-6 flex items-center">
            <FiGlobe className="mr-2 text-teal-500" size={24} />
            <h2 className="text-xl font-semibold">Language & Region</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="language"
                className="mb-2 block text-sm font-medium"
              >
                Language
              </label>
              <select
                id="language"
                className="w-full rounded-lg border border-gray-600 bg-gray-700 px-3 py-2 focus:border-blue-500 focus:outline-none"
              >
                <option>English (US)</option>
                <option>English (UK)</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="date-format"
                className="mb-2 block text-sm font-medium"
              >
                Date Format
              </label>
              <select
                id="date-format"
                className="w-full rounded-lg border border-gray-600 bg-gray-700 px-3 py-2 focus:border-blue-500 focus:outline-none"
              >
                <option>MM/DD/YYYY</option>
                <option>DD/MM/YYYY</option>
                <option>YYYY-MM-DD</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
