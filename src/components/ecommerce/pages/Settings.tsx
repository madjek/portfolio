import { useTheme } from 'next-themes';
import {
  FiBell,
  FiCreditCard,
  FiGlobe,
  FiLock,
  FiShield,
  FiUser,
} from 'react-icons/fi';

const sections = [
  {
    title: 'Profile Settings',
    icon: <FiUser className="h-5 w-5" />,
    fields: [
      { label: 'Full Name', type: 'text', placeholder: 'John Doe' },
      {
        label: 'Email Address',
        type: 'email',
        placeholder: 'john@example.com',
      },
      { label: 'Phone Number', type: 'tel', placeholder: '+1 (555) 123-4567' },
    ],
  },
  {
    title: 'Notifications',
    icon: <FiBell className="h-5 w-5" />,
    options: [
      {
        label: 'Email Notifications',
        description: 'Receive email updates about your account',
      },
      {
        label: 'Push Notifications',
        description: 'Get push notifications in your browser',
      },
      {
        label: 'SMS Notifications',
        description: 'Receive text messages for important updates',
      },
    ],
  },
  {
    title: 'Security',
    icon: <FiLock className="h-5 w-5" />,
    buttons: [
      { label: 'Change Password', action: 'password' },
      { label: 'Two-Factor Authentication', action: '2fa' },
      { label: 'Active Sessions', action: 'sessions' },
    ],
  },
];
const privacyOptions = [
  {
    label: 'Activity Status',
    description: "Show when you're active",
  },
  {
    label: 'Profile Visibility',
    description: 'Control who can see your profile',
  },
  {
    label: 'Data Sharing',
    description: 'Manage how your data is used',
  },
];

export default function Settings() {
  const { theme } = useTheme();

  return (
    <div className="space-y-2 md:space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Settings</h1>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
          Save Changes
        </button>
      </div>
      <div className="grid grid-cols-1 gap-2 md:gap-6 lg:grid-cols-3">
        {sections.map((section, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm md:p-5 dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
                {section.icon}
              </div>
              <h2 className="text-lg font-semibold">{section.title}</h2>
            </div>
            <div className="space-y-4">
              {section.fields &&
                section.fields.map((field, fieldIndex) => (
                  <div key={fieldIndex}>
                    <label
                      className={`mb-2 block text-sm font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className={`w-full rounded-md border px-3 py-2 ${
                        theme === 'dark'
                          ? 'border-gray-600 bg-gray-700 text-gray-200'
                          : 'border-gray-300 bg-white text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                    />
                  </div>
                ))}
              {section.options &&
                section.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <div
                        className={`font-medium ${
                          theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                        }`}
                      >
                        {option.label}
                      </div>
                      <div
                        className={`text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}
                      >
                        {option.description}
                      </div>
                    </div>
                    <label
                      aria-label={option.label}
                      className="relative inline-flex cursor-pointer items-center"
                    >
                      <input type="checkbox" className="peer sr-only" />
                      <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                    </label>
                  </div>
                ))}
              {section.buttons &&
                section.buttons.map((button, buttonIndex) => (
                  <button
                    key={buttonIndex}
                    className={`w-full rounded-md border px-4 py-2 text-left transition-colors ${
                      theme === 'dark'
                        ? 'border-gray-700 hover:bg-gray-700'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {button.label}
                  </button>
                ))}
            </div>
          </div>
        ))}

        {/* Preferences */}
        <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm md:p-5 dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
              <FiGlobe className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold">Preferences</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="language-select" // Add this line
                className={`mb-2 block text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Language
              </label>
              <select
                id="language-select" // Add this line
                className={`w-full rounded-md border px-3 py-2 ${
                  theme === 'dark'
                    ? 'border-gray-600 bg-gray-700 text-gray-200'
                    : 'border-gray-300 bg-white text-gray-900'
                } focus:ring-2 focus:ring-blue-500 focus:outline-none`}
              >
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="time-zone-select" // Add this line
                className={`mb-2 block text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Time Zone
              </label>
              <select
                id="time-zone-select" // Add this line
                className={`w-full rounded-md border px-3 py-2 ${
                  theme === 'dark'
                    ? 'border-gray-600 bg-gray-700 text-gray-200'
                    : 'border-gray-300 bg-white text-gray-900'
                } focus:ring-2 focus:ring-blue-500 focus:outline-none`}
              >
                <option>UTC (GMT+0)</option>
                {/* ... */}
              </select>
            </div>
          </div>
        </div>

        {/* Billing */}
        <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm md:p-5 dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
              <FiCreditCard className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold">Billing</h2>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-medium">Current Plan</span>
                <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  Pro
                </span>
              </div>
              <div
                className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                Next billing date: August 1, 2026
              </div>
            </div>
            <button
              className={`w-full rounded-md border px-4 py-2 text-left transition-colors ${
                theme === 'dark'
                  ? 'border-gray-700 hover:bg-gray-700'
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              Update Payment Method
            </button>
            <button
              className={`w-full rounded-md border px-4 py-2 text-left transition-colors ${
                theme === 'dark'
                  ? 'border-gray-700 hover:bg-gray-700'
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              View Billing History
            </button>
          </div>
        </div>

        {/* Privacy */}
        <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm md:p-5 dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
              <FiShield className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold">Privacy</h2>
          </div>
          <div className="space-y-4">
            {privacyOptions.map((option, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div>
                  <div
                    className={`font-medium ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}
                  >
                    {option.label}
                  </div>
                  <div
                    className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    {option.description}
                  </div>
                </div>
                <label
                  aria-label={option.label}
                  className="relative inline-flex cursor-pointer items-center"
                >
                  <input type="checkbox" className="peer sr-only" />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
