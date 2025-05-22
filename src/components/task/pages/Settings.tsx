import { useState } from 'react';
import { BsFillBuildingFill, BsFillPaletteFill } from 'react-icons/bs';
import { FiBell, FiLock, FiMoon, FiSave, FiSun, FiUser } from 'react-icons/fi';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="space-y-2 md:space-y-6">
      <h1 className="text-2xl font-bold md:text-3xl">Settings</h1>
      <div className="grid grid-cols-1 gap-2 md:gap-6 lg:grid-cols-5">
        {/* Settings Navigation */}
        <div className="rounded-2xl border border-gray-200 bg-white p-2 shadow-sm md:p-4 lg:p-6 dark:border-gray-700 dark:bg-gray-800">
          <nav>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`flex w-full items-center rounded-xl px-2 py-2.5 text-sm md:px-4 ${activeTab === 'profile' ? 'bg-indigo-50 font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50'}`}
                >
                  <FiUser size={18} className="mr-3" />
                  Profile Settings
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('workspace')}
                  className={`flex w-full items-center rounded-xl px-2 py-2.5 text-sm md:px-4 ${activeTab === 'workspace' ? 'bg-indigo-50 font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50'}`}
                >
                  <BsFillBuildingFill size={18} className="mr-3" />
                  Workspace Settings
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`flex w-full items-center rounded-xl px-2 py-2.5 text-sm md:px-4 ${activeTab === 'notifications' ? 'bg-indigo-50 font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50'}`}
                >
                  <FiBell size={18} className="mr-3" />
                  Notifications
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('security')}
                  className={`flex w-full items-center rounded-xl px-2 py-2.5 text-sm md:px-4 ${activeTab === 'security' ? 'bg-indigo-50 font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50'}`}
                >
                  <FiLock size={18} className="mr-3" />
                  Security
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('appearance')}
                  className={`flex w-full items-center rounded-xl px-2 py-2.5 text-sm md:px-4 ${activeTab === 'appearance' ? 'bg-indigo-50 font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50'}`}
                >
                  <BsFillPaletteFill size={18} className="mr-3" />
                  Appearance
                </button>
              </li>
            </ul>
          </nav>
        </div>
        {/* Settings Content */}
        <div className="lg:col-span-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm md:p-6 dark:border-gray-700 dark:bg-gray-800">
            {activeTab === 'profile' && (
              <div>
                <h2 className="mb-6 text-xl font-semibold">Profile Settings</h2>
                <div className="space-y-2 md:space-y-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-indigo-500 text-2xl font-medium text-white">
                      JD
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
                        Upload Photo
                      </button>
                      <button className="rounded-xl border border-gray-300 px-4 py-2 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-1 block text-sm font-medium"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        defaultValue="John"
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-1 block text-sm font-medium"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        defaultValue="Doe"
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-sm font-medium"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="john.doe@teamflow.com"
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="jobTitle"
                      className="mb-1 block text-sm font-medium"
                    >
                      Job Title
                    </label>
                    <input
                      id="jobTitle"
                      type="text"
                      defaultValue="Product Manager"
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="bio"
                      className="mb-1 block text-sm font-medium"
                    >
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      rows={3}
                      defaultValue="Product Manager with 5+ years of experience in SaaS products."
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800"
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button className="flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
                      <FiSave size={18} className="mr-2" />
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'appearance' && (
              <div>
                <h2 className="mb-6 text-xl font-semibold">Appearance</h2>
                <div className="space-y-2 md:space-y-6">
                  <div>
                    <h3 className="mb-4 text-lg font-medium">Theme</h3>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div className="cursor-pointer rounded-xl border border-gray-300 p-2 hover:border-indigo-500 md:p-4 dark:border-gray-600 dark:hover:border-indigo-500">
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <FiSun size={18} className="mr-2 text-amber-500" />
                            <span className="font-medium">Light Mode</span>
                          </div>
                          <div className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-400">
                            <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                          </div>
                        </div>
                        <div className="h-20 rounded-lg border border-gray-300 bg-gray-100"></div>
                      </div>
                      <div className="cursor-pointer rounded-xl border border-gray-300 p-2 hover:border-indigo-500 md:p-4 dark:border-gray-600 dark:hover:border-indigo-500">
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <FiMoon
                              size={18}
                              className="mr-2 text-indigo-500"
                            />
                            <span className="font-medium">Dark Mode</span>
                          </div>
                          <div className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-400">
                            {/* Empty circle for unselected */}
                          </div>
                        </div>
                        <div className="h-20 rounded-lg border border-gray-700 bg-gray-800"></div>
                      </div>
                      <div className="cursor-pointer rounded-xl border border-gray-300 p-2 hover:border-indigo-500 md:p-4 dark:border-gray-600 dark:hover:border-indigo-500">
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <BsFillPaletteFill
                              size={18}
                              className="mr-2 text-green-500"
                            />
                            <span className="font-medium">System</span>
                          </div>
                          <div className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-400">
                            {/* Empty circle for unselected */}
                          </div>
                        </div>
                        <div className="h-20 rounded-lg border border-gray-300 bg-gradient-to-r from-gray-100 to-gray-800"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-4 text-lg font-medium">Color Scheme</h3>
                    <div className="flex flex-wrap gap-3">
                      <div className="h-8 w-8 cursor-pointer rounded-full border-2 border-white bg-indigo-600 shadow-sm dark:border-gray-800"></div>
                      <div className="h-8 w-8 cursor-pointer rounded-full bg-blue-600"></div>
                      <div className="h-8 w-8 cursor-pointer rounded-full bg-green-600"></div>
                      <div className="h-8 w-8 cursor-pointer rounded-full bg-amber-600"></div>
                      <div className="h-8 w-8 cursor-pointer rounded-full bg-red-600"></div>
                      <div className="h-8 w-8 cursor-pointer rounded-full bg-purple-600"></div>
                      <div className="h-8 w-8 cursor-pointer rounded-full bg-pink-600"></div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
                      <FiSave size={18} className="mr-2" />
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'workspace' && (
              <div>
                <h2 className="mb-6 text-xl font-semibold">
                  Workspace Settings
                </h2>
                <div className="space-y-2 md:space-y-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-indigo-100 text-2xl font-bold text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                      TF
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
                        Upload Logo
                      </button>
                      <button className="rounded-xl border border-gray-300 px-4 py-2 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                        Remove
                      </button>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="workspaceName"
                      className="mb-1 block text-sm font-medium"
                    >
                      Workspace Name
                    </label>
                    <input
                      placeholder="workspaceName"
                      type="text"
                      defaultValue="TeamFlow"
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="workspaceUrl"
                      className="mb-1 block text-sm font-medium"
                    >
                      Workspace URL
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400">
                        team/
                      </span>
                      <input
                        id="workspaceUrl"
                        type="text"
                        defaultValue="my-team"
                        className="flex-1 rounded-r-lg border border-gray-300 bg-white px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-4 text-lg font-medium">
                      Team Members & Roles
                    </h3>
                    <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800/50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                              Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                              Email
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                              Role
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-xs font-medium text-white">
                                  JD
                                </div>
                                <div className="ml-3">
                                  <div className="text-sm font-medium">
                                    John Doe
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm whitespace-nowrap">
                              john.doe@teamflow.com
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
                                Admin
                              </span>
                            </td>
                            <td className="px-6 py-4 text-right text-sm whitespace-nowrap">
                              <button className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
                                Edit
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-xs font-medium text-white">
                                  AS
                                </div>
                                <div className="ml-3">
                                  <div className="text-sm font-medium">
                                    Anna Smith
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm whitespace-nowrap">
                              anna@teamflow.com
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                Member
                              </span>
                            </td>
                            <td className="px-6 py-4 text-right text-sm whitespace-nowrap">
                              <button className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
                                Edit
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
                      <FiSave size={18} className="mr-2" />
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'notifications' && (
              <div>
                <h2 className="mb-6 text-xl font-semibold">Notifications</h2>
                <div className="space-y-2 md:space-y-6">
                  <div>
                    <h3 className="mb-4 text-lg font-medium">
                      Email Notifications
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between rounded-lg border border-gray-200 p-2 md:p-4 dark:border-gray-700">
                        <div>
                          <h4 className="font-medium">New messages</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Get notified when someone sends you a direct message
                          </p>
                        </div>
                        <label
                          aria-label="Toggle notifications"
                          className="relative inline-flex cursor-pointer items-center"
                        >
                          <input
                            type="checkbox"
                            className="peer sr-only"
                            defaultChecked
                          />
                          <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-indigo-600 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-700"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border border-gray-200 p-2 md:p-4 dark:border-gray-700">
                        <div>
                          <h4 className="font-medium">Mentions</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Get notified when someone mentions you
                          </p>
                        </div>
                        <label
                          aria-label="Toggle notifications"
                          className="relative inline-flex cursor-pointer items-center"
                        >
                          <input
                            type="checkbox"
                            className="peer sr-only"
                            defaultChecked
                          />
                          <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-indigo-600 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-700"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border border-gray-200 p-2 md:p-4 dark:border-gray-700">
                        <div>
                          <h4 className="font-medium">Task assignments</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Get notified when you&apos;re assigned to a task
                          </p>
                        </div>
                        <label
                          aria-label="Toggle notifications"
                          className="relative inline-flex cursor-pointer items-center"
                        >
                          <input type="checkbox" className="peer sr-only" />
                          <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-indigo-600 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-700"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-4 text-lg font-medium">
                      Push Notifications
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                        <div>
                          <h4 className="font-medium">Mobile notifications</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Receive push notifications on your mobile device
                          </p>
                        </div>
                        <label
                          aria-label="Toggle notifications"
                          className="relative inline-flex cursor-pointer items-center"
                        >
                          <input
                            type="checkbox"
                            className="peer sr-only"
                            defaultChecked
                          />
                          <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-indigo-600 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-700"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                        <div>
                          <h4 className="font-medium">Desktop notifications</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Receive notifications on your desktop
                          </p>
                        </div>
                        <label
                          aria-label="Toggle notifications"
                          className="relative inline-flex cursor-pointer items-center"
                        >
                          <input type="checkbox" className="peer sr-only" />
                          <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-indigo-600 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-700"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
                      <FiSave size={18} className="mr-2" />
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'security' && (
              <div>
                <h2 className="mb-6 text-xl font-semibold">Security</h2>
                <div className="space-y-2 md:space-y-6">
                  <div>
                    <h3 className="mb-4 text-lg font-medium">Password</h3>
                    <div className="rounded-xl border border-gray-200 p-3 md:p-6 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Change Password</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Update your account password
                          </p>
                        </div>
                        <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                          Change
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-4 text-lg font-medium">
                      Two-Factor Authentication
                    </h3>
                    <div className="rounded-xl border border-gray-200 p-3 md:p-6 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">2FA Status</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <label
                          aria-label="Two-factor authentication"
                          className="relative inline-flex cursor-pointer items-center"
                        >
                          <input type="checkbox" className="peer sr-only" />
                          <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-indigo-600 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-700"></div>
                        </label>
                      </div>
                      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                        Two-factor authentication adds an additional layer of
                        security to your account by requiring more than just a
                        password to log in.
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-4 text-lg font-medium">Danger Zone</h3>
                    <div className="rounded-xl border border-red-200 p-3 md:p-6 dark:border-red-900/50">
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <h4 className="font-medium text-red-600 dark:text-red-400">
                            Delete Account
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Permanently delete your account and all associated
                            data
                          </p>
                        </div>
                        <button className="rounded-lg border border-red-600 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-900/30">
                          Delete Account
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Settings;
