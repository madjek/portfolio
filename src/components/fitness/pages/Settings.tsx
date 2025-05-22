import { FiBell, FiShield, FiSmartphone, FiUser } from 'react-icons/fi';

const Settings = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="mb-6 text-2xl font-bold md:text-3xl">Settings</h1>
      {/* Account Settings */}
      <div className="mb-6 rounded-2xl bg-white p-2 shadow-sm md:p-6">
        <h2 className="mb-4 text-lg font-semibold">Account Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-xl bg-gray-50 p-2 md:p-4">
            <div className="flex items-center">
              <div className="mr-3 rounded-lg bg-gray-200 p-2">
                <FiUser size={20} className="text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium">Personal Information</h3>
                <p className="text-sm text-gray-500">
                  Update your profile details
                </p>
              </div>
            </div>
            <button className="text-blue-500">Edit</button>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-gray-50 p-2 md:p-4">
            <div className="flex items-center">
              <div className="mr-3 rounded-lg bg-gray-200 p-2">
                <FiShield size={20} className="text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium">Privacy & Security</h3>
                <p className="text-sm text-gray-500">
                  Manage your security preferences
                </p>
              </div>
            </div>
            <button className="text-blue-500">Manage</button>
          </div>
        </div>
      </div>
      {/* Notification Settings */}
      <div className="mb-6 rounded-2xl bg-white p-2 shadow-sm md:p-6">
        <h2 className="mb-4 text-lg font-semibold">Notifications</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-3 rounded-lg bg-blue-100 p-2">
                <FiBell size={20} className="text-blue-500" />
              </div>
              <div>
                <h3 className="font-medium">Workout Reminders</h3>
                <p className="text-sm text-gray-500">
                  Daily workout notifications
                </p>
              </div>
            </div>
            <label
              aria-label="Toggle notifications"
              className="relative inline-flex cursor-pointer items-center"
            >
              <input type="checkbox" className="peer sr-only" defaultChecked />
              <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-500 peer-focus:ring-4 peer-focus:ring-blue-300 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-3 rounded-lg bg-blue-100 p-2">
                <FiBell size={20} className="text-blue-500" />
              </div>
              <div>
                <h3 className="font-medium">Goal Achievements</h3>
                <p className="text-sm text-gray-500">
                  Notifications for completed goals
                </p>
              </div>
            </div>
            <label
              aria-label="Toggle notifications"
              className="relative inline-flex cursor-pointer items-center"
            >
              <input type="checkbox" className="peer sr-only" defaultChecked />
              <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-500 peer-focus:ring-4 peer-focus:ring-blue-300 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
            </label>
          </div>
        </div>
      </div>
      {/* Connected Devices */}
      <div className="rounded-2xl bg-white p-2 shadow-sm md:p-6">
        <h2 className="mb-4 text-lg font-semibold">Connected Devices</h2>
        <div className="flex items-center justify-between rounded-xl bg-gray-50 p-2 md:p-4">
          <div className="flex items-center">
            <div className="mr-3 rounded-lg bg-green-100 p-2">
              <FiSmartphone size={20} className="text-green-500" />
            </div>
            <div>
              <h3 className="font-medium">Fitness Watch</h3>
              <p className="text-sm text-gray-500">Last synced: 2 mins ago</p>
            </div>
          </div>
          <button className="text-blue-500">Disconnect</button>
        </div>
      </div>
    </div>
  );
};
export default Settings;
