'use client';

import { cn } from '@/utils/cn';
import Image from 'next/image';
import { useState } from 'react';
import { FiKey, FiLogOut, FiSave, FiUser } from 'react-icons/fi';
import { LuBell, LuHistory } from 'react-icons/lu';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    image: '/img/estate/m1.jpg',
  };
  const navs = [
    {
      id: 'profile',
      icon: <FiUser size={18} className="mr-2 md:mr-3" />,
      label: 'Profile Details',
    },
    {
      id: 'notifications',
      icon: <LuBell size={18} className="mr-2 md:mr-3" />,
      label: 'Notification Settings',
    },
    {
      id: 'searches',
      icon: <FiSave size={18} className="mr-2 md:mr-3" />,
      label: 'Saved Searches',
    },
    {
      id: 'history',
      icon: <LuHistory size={18} className="mr-2 md:mr-3" />,
      label: 'Viewing History',
    },
    {
      id: 'security',
      icon: <FiKey size={18} className="mr-2 md:mr-3" />,
      label: 'Security',
    },
  ];
  const savedSearches = [
    {
      id: 1,
      name: '3+ Bedroom homes in Beverly Hills',
      date: '2023-09-15',
    },
    {
      id: 2,
      name: 'Condos in Manhattan under $1M',
      date: '2023-09-10',
    },
    {
      id: 3,
      name: 'Properties with pool in Miami',
      date: '2023-09-05',
    },
  ];
  const viewingHistory = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      date: '2023-09-18',
      image: '/img/estate/properties/villa.jpg',
    },
    {
      id: 2,
      title: 'Downtown Penthouse',
      date: '2023-09-17',
      image: '/img/estate/properties/penthouse.jpg',
    },
    {
      id: 3,
      title: 'Seaside Cottage',
      date: '2023-09-16',
      image: '/img/estate/properties/cottage.jpg',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-2xl font-bold text-gray-900">
          Account Settings
        </h1>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-8">
          <div className="md:col-span-1">
            <div className="overflow-hidden rounded-xl bg-white shadow-md">
              <div className="border-b border-gray-100 p-6">
                <div className="flex items-center">
                  <Image
                    width={100}
                    height={100}
                    src={user.image}
                    alt={user.name}
                    className="mr-4 h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{user.name}</h3>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                </div>
              </div>
              <nav className="space-y-1 p-2">
                {navs.map(({ id, icon, label }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`flex w-full items-center rounded-md px-3 py-2 text-left text-sm md:text-base ${
                      activeTab === id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {icon}
                    <span className="truncate">{label}</span>
                  </button>
                ))}

                <button className="flex w-full items-center rounded-md px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 md:text-base">
                  <FiLogOut size={18} className="mr-2 md:mr-3" />
                  <span className="truncate">Sign Out</span>
                </button>
              </nav>
            </div>
          </div>
          <div className="md:col-span-3">
            {activeTab === 'profile' && (
              <div className="rounded-xl bg-white p-6 shadow-md">
                <h2 className="mb-6 text-xl font-bold text-gray-900">
                  Profile Details
                </h2>
                <form onSubmit={(e: React.FormEvent) => e.preventDefault()}>
                  <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        defaultValue={user.name}
                        className="block w-full rounded-lg border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        defaultValue={user.email}
                        className="block w-full rounded-lg border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        defaultValue={user.phone}
                        className="block w-full rounded-lg border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="image"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Profile Picture
                      <div className="flex items-center">
                        <Image
                          width={100}
                          height={100}
                          src={user.image}
                          alt={user.name}
                          className="mr-4 h-16 w-16 rounded-full object-cover"
                        />
                        <button
                          type="button"
                          className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
                        >
                          Change Photo
                        </button>
                      </div>
                    </label>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}
            {activeTab === 'notifications' && (
              <div className="rounded-xl bg-white p-6 shadow-md">
                <h2 className="mb-6 text-xl font-bold text-gray-900">
                  Notification Settings
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        Email Notifications
                      </h3>
                      <p className="text-sm text-gray-600">
                        Receive updates about new properties and saved searches
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
                      <div
                        className={cn(
                          'peer h-6 w-11 rounded-full bg-gray-200',
                          'peer-checked:bg-blue-600',
                          'peer-focus:ring-4 peer-focus:ring-blue-300 peer-focus:outline-none',
                          'after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:content-[""]',
                          'peer-checked:after:translate-x-full peer-checked:after:border-white',
                        )}
                      ></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        Price Drop Alerts
                      </h3>
                      <p className="text-sm text-gray-600">
                        Get notified when prices drop on properties you&apos;re
                        interested in
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
                      <div
                        className={cn(
                          'peer h-6 w-11 rounded-full bg-gray-200',
                          'peer-checked:bg-blue-600',
                          'peer-focus:ring-4 peer-focus:ring-blue-300 peer-focus:outline-none',
                          'after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:content-[""]',
                          'peer-checked:after:translate-x-full peer-checked:after:border-white',
                        )}
                      ></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        New Listing Alerts
                      </h3>
                      <p className="text-sm text-gray-600">
                        Be the first to know when new properties match your
                        criteria
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
                      <div
                        className={cn(
                          'peer h-6 w-11 rounded-full bg-gray-200',
                          'peer-checked:bg-blue-600',
                          'peer-focus:ring-4 peer-focus:ring-blue-300 peer-focus:outline-none',
                          'after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:content-[""]',
                          'peer-checked:after:translate-x-full peer-checked:after:border-white',
                        )}
                      ></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        Marketing Communications
                      </h3>
                      <p className="text-sm text-gray-600">
                        Receive promotional offers and newsletters
                      </p>
                    </div>
                    <label
                      aria-label="Toggle notifications"
                      className="relative inline-flex cursor-pointer items-center"
                    >
                      <input type="checkbox" className="peer sr-only" />
                      <div
                        className={cn(
                          'peer h-6 w-11 rounded-full bg-gray-200',
                          'peer-checked:bg-blue-600',
                          'peer-focus:ring-4 peer-focus:ring-blue-300 peer-focus:outline-none',
                          'after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:content-[""]',
                          'peer-checked:after:translate-x-full peer-checked:after:border-white',
                        )}
                      ></div>
                    </label>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            )}
            {activeTab === 'searches' && (
              <div className="rounded-xl bg-white p-6 shadow-md">
                <h2 className="mb-6 text-xl font-bold text-gray-900">
                  Saved Searches
                </h2>
                {savedSearches.length > 0 ? (
                  <div className="space-y-4">
                    {savedSearches.map((search) => (
                      <div
                        key={search.id}
                        className="flex items-center justify-between border-b border-gray-100 pb-4"
                      >
                        <div>
                          <h3 className="font-medium text-gray-900">
                            {search.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            Saved on{' '}
                            {new Date(search.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="rounded border border-blue-600 px-3 py-1 text-sm text-blue-600 hover:bg-blue-50">
                            Edit
                          </button>
                          <button className="rounded border border-gray-300 px-3 py-1 text-sm text-gray-700 hover:bg-gray-50">
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-8 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-blue-100 p-3">
                        <FiSave size={24} className="text-blue-600" />
                      </div>
                    </div>
                    <h3 className="mb-2 font-medium text-gray-900">
                      No saved searches yet
                    </h3>
                    <p className="mb-4 text-gray-600">
                      Save your search criteria to get updates on new properties
                    </p>
                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                      Start Searching
                    </button>
                  </div>
                )}
              </div>
            )}
            {activeTab === 'history' && (
              <div className="rounded-xl bg-white p-6 shadow-md">
                <h2 className="mb-6 text-xl font-bold text-gray-900">
                  Viewing History
                </h2>
                {viewingHistory.length > 0 ? (
                  <div className="space-y-4">
                    {viewingHistory.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-2 border-b border-gray-100 pb-4"
                      >
                        <Image
                          width={64}
                          height={64}
                          src={item.image}
                          alt={item.title}
                          className="h-16 w-16 rounded object-cover"
                        />
                        <div className="flex-grow">
                          <h3 className="font-medium text-gray-900">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            Viewed on {new Date(item.date).toLocaleDateString()}
                          </p>
                        </div>
                        <button className="rounded border border-gray-300 px-3 py-1 text-sm text-gray-700 hover:bg-gray-50">
                          View Again
                        </button>
                      </div>
                    ))}
                    <div className="pt-4 text-center">
                      <button className="font-medium text-blue-600 hover:text-blue-800">
                        View Full History
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="py-8 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-blue-100 p-3">
                        <LuHistory size={24} className="text-blue-600" />
                      </div>
                    </div>
                    <h3 className="mb-2 font-medium text-gray-900">
                      No viewing history
                    </h3>
                    <p className="mb-4 text-gray-600">
                      Start exploring properties to see your history here
                    </p>
                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                      Explore Properties
                    </button>
                  </div>
                )}
              </div>
            )}
            {activeTab === 'security' && (
              <div className="rounded-xl bg-white p-6 shadow-md">
                <h2 className="mb-6 text-xl font-bold text-gray-900">
                  Security Settings
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="mb-4 font-medium text-gray-900">
                      Change Password
                    </h3>
                    <form
                      onSubmit={(e: React.FormEvent) => e.preventDefault()}
                      className="space-y-4"
                    >
                      <div>
                        <label
                          htmlFor="password"
                          className="mb-1 block text-sm font-medium text-gray-700"
                        >
                          Current Password
                        </label>
                        <input
                          id="password"
                          type="password"
                          className="block w-full rounded-lg border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="new-password"
                          className="mb-1 block text-sm font-medium text-gray-700"
                        >
                          New Password
                        </label>
                        <input
                          id="new-password"
                          type="password"
                          className="block w-full rounded-lg border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="confirm-password"
                          className="mb-1 block text-sm font-medium text-gray-700"
                        >
                          Confirm New Password
                        </label>
                        <input
                          id="confirm-password"
                          type="password"
                          className="block w-full rounded-lg border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                        >
                          Update Password
                        </button>
                      </div>
                    </form>
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
export default Profile;
