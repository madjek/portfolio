import { cn } from '@/utils/cn';
import Image from 'next/image';
import { useState } from 'react';
import {
  FiBell,
  FiCreditCard,
  FiLock,
  FiSave,
  FiTrash,
  FiUser,
} from 'react-icons/fi';
import { currentUser } from '../mockData';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">
          Account Settings
        </h1>
        <p className="text-gray-600">
          Manage your profile, preferences, and account settings
        </p>
      </div>
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
        {/* Tabs */}
        <div className="flex overflow-x-auto border-b border-gray-200">
          <button
            className={cn(
              'px-6 py-4 text-sm font-medium whitespace-nowrap',
              activeTab === 'profile'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900',
            )}
            onClick={() => setActiveTab('profile')}
          >
            <div className="flex items-center gap-2">
              <FiUser size={16} />
              Profile
            </div>
          </button>
          <button
            className={cn(
              'px-6 py-4 text-sm font-medium whitespace-nowrap',
              activeTab === 'notifications'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900',
            )}
            onClick={() => setActiveTab('notifications')}
          >
            <div className="flex items-center gap-2">
              <FiBell size={16} />
              Notifications
            </div>
          </button>
          <button
            className={cn(
              'px-6 py-4 text-sm font-medium whitespace-nowrap',
              activeTab === 'security'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900',
            )}
            onClick={() => setActiveTab('security')}
          >
            <div className="flex items-center gap-2">
              <FiLock size={16} />
              Security
            </div>
          </button>
          <button
            className={cn(
              'px-6 py-4 text-sm font-medium whitespace-nowrap',
              activeTab === 'billing'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900',
            )}
            onClick={() => setActiveTab('billing')}
          >
            <div className="flex items-center gap-2">
              <FiCreditCard size={16} />
              Billing
            </div>
          </button>
        </div>
        {/* Tab Content */}
        <div className="p-6">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div>
              <div className="mb-6 flex flex-col gap-6 md:flex-row">
                <div className="md:w-1/3">
                  <h3 className="mb-2 text-lg font-semibold">
                    Profile Picture
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    This will be displayed on your profile
                  </p>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-4">
                    <Image
                      width={80}
                      height={80}
                      src={currentUser.avatarUrl}
                      alt="Profile"
                      className="h-20 w-20 rounded-full object-cover"
                    />
                    <div>
                      <button className="mb-2 block rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
                        Upload New Photo
                      </button>
                      <button className="text-sm text-red-600 hover:underline">
                        Remove Photo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-6 border-gray-200" />
              <div className="mb-6 flex flex-col gap-6 md:flex-row">
                <div className="md:w-1/3">
                  <h3 className="mb-2 text-lg font-semibold">
                    Personal Information
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    Update your personal details
                  </p>
                </div>
                <div className="md:w-2/3">
                  <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2"
                        defaultValue={currentUser.firstName}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2"
                        defaultValue={currentUser.lastName}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2"
                      defaultValue={currentUser.email}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="role"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Role
                    </label>
                    <select
                      id="role"
                      defaultValue={currentUser.role}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    >
                      <option value="student">Student</option>
                      <option value="instructor">Instructor</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="bio"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2"
                      rows={4}
                      placeholder="Tell us about yourself..."
                    ></textarea>
                  </div>
                  <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
                    <FiSave size={16} />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div>
              <h3 className="mb-6 text-lg font-semibold">
                Notification Preferences
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Course Updates</p>
                    <p className="text-sm text-gray-600">
                      Receive notifications when courses are updated
                    </p>
                  </div>
                  <div className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      defaultChecked
                    />
                    <div
                      className={cn(
                        'peer h-6 w-11 rounded-full bg-gray-200',
                        'peer-checked:bg-blue-600 peer-focus:outline-none',
                        'after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:content-[""]',
                        'peer-checked:after:translate-x-full peer-checked:after:border-white',
                      )}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">New Lessons</p>
                    <p className="text-sm text-gray-600">
                      Get notified when new lessons are available
                    </p>
                  </div>
                  <div className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      defaultChecked
                    />
                    <div
                      className={cn(
                        'peer h-6 w-11 rounded-full bg-gray-200',
                        activeTab === 'notifications' && 'bg-blue-600',
                        'peer-checked:bg-blue-600 peer-focus:outline-none',
                        'after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:content-[""]',
                        'peer-checked:after:translate-x-full peer-checked:after:border-white',
                      )}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Discussion Replies</p>
                    <p className="text-sm text-gray-600">
                      Receive notifications when someone replies to your
                      comments
                    </p>
                  </div>
                  <div className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      defaultChecked
                    />
                    <div
                      className={cn(
                        'peer h-6 w-11 rounded-full bg-gray-200',
                        'peer-checked:bg-blue-600 peer-focus:outline-none',
                        'after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:content-[""] peer-checked:after:translate-x-full peer-checked:after:border-white',
                      )}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Quiz Results</p>
                    <p className="text-sm text-gray-600">
                      Get notifications about your quiz results
                    </p>
                  </div>
                  <div className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" className="peer sr-only" />
                    <div
                      className={cn(
                        'peer h-6 w-11 rounded-full bg-gray-200',
                        'peer-checked:bg-blue-600 peer-focus:outline-none',
                        'after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:content-[""]',
                        'peer-checked:after:translate-x-full peer-checked:after:border-white',
                      )}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Promotional Emails</p>
                    <p className="text-sm text-gray-600">
                      Receive emails about new courses and special offers
                    </p>
                  </div>
                  <div className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" className="peer sr-only" />
                    <div
                      className={cn(
                        'peer h-6 w-11 rounded-full bg-gray-200',
                        'peer-checked:bg-blue-600 peer-focus:outline-none',
                        'after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:content-[""]',
                        'peer-checked:after:translate-x-full peer-checked:after:border-white',
                      )}
                    ></div>
                  </div>
                </div>
              </div>
              <hr className="my-6 border-gray-200" />
              <h3 className="mb-4 text-lg font-semibold">
                Notification Channels
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-gray-600">
                      Receive notifications via email
                    </p>
                  </div>
                  <div className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      defaultChecked
                    />
                    <div
                      className={cn(
                        'peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-600 peer-focus:outline-none',
                        "after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white",
                      )}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Browser Notifications</p>
                    <p className="text-sm text-gray-600">
                      Show notifications in your browser
                    </p>
                  </div>
                  <div className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" className="peer sr-only" />
                    <div
                      className={cn(
                        'peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-600 peer-focus:outline-none',
                        "after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white",
                      )}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
                  <FiSave size={16} />
                  Save Preferences
                </button>
              </div>
            </div>
          )}
          {/* Security Tab */}
          {activeTab === 'security' && (
            <div>
              <div className="mb-6 flex flex-col gap-6 md:flex-row">
                <div className="md:w-1/3">
                  <h3 className="mb-2 text-lg font-semibold">
                    Change Password
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    Update your password regularly to keep your account secure
                  </p>
                </div>
                <div className="md:w-2/3">
                  <div className="mb-4">
                    <label
                      htmlFor="currentPassword"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Current Password
                    </label>
                    <input
                      id="currentPassword"
                      type="password"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2"
                      placeholder="Enter your current password"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="newPassword"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      New Password
                    </label>
                    <input
                      id="newPassword"
                      type="password"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2"
                      placeholder="Enter your new password"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="confirmPassword"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Confirm New Password
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2"
                      placeholder="Confirm your new password"
                    />
                  </div>
                  <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
                    <FiSave size={16} />
                    Update Password
                  </button>
                </div>
              </div>
              <hr className="my-6 border-gray-200" />
              <div className="mb-6 flex flex-col gap-6 md:flex-row">
                <div className="md:w-1/3">
                  <h3 className="mb-2 text-lg font-semibold">
                    Two-Factor Authentication
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-600">Not enabled</p>
                    </div>
                    <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
                      Enable
                    </button>
                  </div>
                </div>
              </div>
              <hr className="my-6 border-gray-200" />
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="md:w-1/3">
                  <h3 className="mb-2 text-lg font-semibold text-red-600">
                    Danger Zone
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    Irreversible and destructive actions
                  </p>
                </div>
                <div className="md:w-2/3">
                  <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                    <h4 className="mb-2 font-medium text-red-600">
                      Delete Account
                    </h4>
                    <p className="mb-4 text-sm text-gray-700">
                      Once you delete your account, all of your data will be
                      permanently removed. This action cannot be undone.
                    </p>
                    <button className="flex items-center gap-2 rounded-lg border border-red-500 bg-white px-4 py-2 font-medium text-red-600 hover:bg-red-50">
                      <FiTrash size={16} />
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Billing Tab */}
          {activeTab === 'billing' && (
            <div>
              <div className="mb-6 flex flex-col gap-6 md:flex-row">
                <div className="md:w-1/3">
                  <h3 className="mb-2 text-lg font-semibold">Current Plan</h3>
                  <p className="mb-4 text-sm text-gray-600">
                    Manage your subscription and billing
                  </p>
                </div>
                <div className="md:w-2/3">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Free Plan</h4>
                        <p className="text-sm text-gray-600">
                          Limited access to courses and features
                        </p>
                      </div>
                      <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
                        Current
                      </span>
                    </div>
                    <button className="w-full rounded-lg bg-blue-600 py-2 font-medium text-white hover:bg-blue-700">
                      Upgrade to Premium
                    </button>
                  </div>
                </div>
              </div>
              <hr className="my-6 border-gray-200" />
              <div className="mb-6 flex flex-col gap-6 md:flex-row">
                <div className="md:w-1/3">
                  <h3 className="mb-2 text-lg font-semibold">
                    Available Plans
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    Choose a plan that works for you
                  </p>
                </div>
                <div className="space-y-4 md:w-2/3">
                  <div className="cursor-pointer rounded-lg border border-gray-200 p-4 hover:border-blue-200 hover:bg-blue-50">
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">Basic Plan</h4>
                        <p className="text-sm text-gray-600">
                          Access to all basic courses
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold">$9.99</p>
                        <p className="text-xs text-gray-500">per month</p>
                      </div>
                    </div>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center text-sm">
                        <svg
                          className="mr-2 h-4 w-4 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        Access to 50+ courses
                      </li>
                      <li className="flex items-center text-sm">
                        <svg
                          className="mr-2 h-4 w-4 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        Course completion certificates
                      </li>
                      <li className="flex items-center text-sm text-gray-500">
                        <svg
                          className="mr-2 h-4 w-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                        Instructor support
                      </li>
                    </ul>
                    <button className="w-full rounded-lg border border-blue-600 bg-white py-2 font-medium text-blue-600 hover:bg-blue-50">
                      Choose Plan
                    </button>
                  </div>
                  <div className="relative rounded-lg border border-blue-500 bg-blue-50 p-4">
                    <div className="absolute -top-3 right-4 rounded-full bg-blue-600 px-2 py-1 text-xs text-white">
                      Popular
                    </div>
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">Premium Plan</h4>
                        <p className="text-sm text-gray-600">
                          Full access to all features
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold">$19.99</p>
                        <p className="text-xs text-gray-500">per month</p>
                      </div>
                    </div>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center text-sm">
                        <svg
                          className="mr-2 h-4 w-4 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        Access to all courses
                      </li>
                      <li className="flex items-center text-sm">
                        <svg
                          className="mr-2 h-4 w-4 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        Course completion certificates
                      </li>
                      <li className="flex items-center text-sm">
                        <svg
                          className="mr-2 h-4 w-4 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        Instructor support
                      </li>
                      <li className="flex items-center text-sm">
                        <svg
                          className="mr-2 h-4 w-4 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        Download course materials
                      </li>
                    </ul>
                    <button className="w-full rounded-lg bg-blue-600 py-2 font-medium text-white hover:bg-blue-700">
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
              <hr className="my-6 border-gray-200" />
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="md:w-1/3">
                  <h3 className="mb-2 text-lg font-semibold">
                    Payment Methods
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    Manage your payment methods
                  </p>
                </div>
                <div className="md:w-2/3">
                  <div className="mb-4 flex items-center justify-between rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded bg-gray-100 p-2">
                        <FiCreditCard size={20} className="text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium">No payment methods added</p>
                        <p className="text-sm text-gray-600">
                          Add a payment method to upgrade your plan
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
                    <FiCreditCard size={16} />
                    Add Payment Method
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
