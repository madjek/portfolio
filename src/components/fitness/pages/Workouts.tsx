import Image from 'next/image';
import { useState } from 'react';
import { FiFilter, FiPlay, FiPlusCircle } from 'react-icons/fi';

export default function Workouts() {
  const [filter, setFilter] = useState('all');
  // Mock training data
  const trainings = [
    {
      id: 1,
      title: 'Full Body Burn',
      trainer: 'Emma Rodriguez',
      trainerAvatar: '/img/fitness/tw1.jpg',
      duration: '30 mins',
      level: 'Intermediate',
      tags: ['HIIT', 'Strength'],
      image: '/img/fitness/fullbody.jpg',
    },
    {
      id: 2,
      title: 'Morning Stretch & Mobility',
      trainer: 'David Kim',
      trainerAvatar: '/img/fitness/tm1.jpg',
      duration: '15 mins',
      level: 'Beginner',
      tags: ['Mobility', 'Yoga'],
      image: '/img/fitness/stretch.jpg',
    },
    {
      id: 3,
      title: 'Upper Body Strength Training',
      trainer: 'Michael Johnson',
      trainerAvatar: '/img/fitness/tm2.jpg',
      duration: '45 mins',
      level: 'Advanced',
      tags: ['Strength'],
      image: '/img/fitness/upperbody.jpg',
    },
    {
      id: 4,
      title: 'Fat Burner Cardio Blast',
      trainer: 'Sarah Lee',
      trainerAvatar: '/img/fitness/tw2.jpg',
      duration: '25 mins',
      level: 'All levels',
      tags: ['Cardio'],
      image: '/img/fitness/cardio.jpg',
    },
    {
      id: 5,
      title: 'Power Yoga Flow',
      trainer: 'Anika Patel',
      trainerAvatar: '/img/fitness/tw3.jpg',
      duration: '40 mins',
      level: 'Intermediate',
      tags: ['Yoga', 'Strength'],
      image: '/img/fitness/yoga.jpg',
    },
    {
      id: 6,
      title: 'Core Crusher',
      trainer: 'Ryan Cooper',
      trainerAvatar: '/img/fitness/tm3.jpg',
      duration: '15 mins',
      level: 'All levels',
      tags: ['Core', 'Quick'],
      image: '/img/fitness/core.jpg',
    },
    {
      id: 7,
      title: 'Low Impact Recovery',
      trainer: 'Jessica Wang',
      trainerAvatar: '/img/fitness/tw4.jpg',
      duration: '30 mins',
      level: 'Beginner',
      tags: ['Recovery', 'Mobility'],
      image: '/img/fitness/impact.jpg',
    },
  ];
  // Filter trainings based on selected filter
  const filteredTrainings =
    filter === 'all'
      ? trainings
      : trainings.filter(
          (training) =>
            training.tags.includes(filter) ||
            training.level.toLowerCase().includes(filter.toLowerCase()) ||
            training.duration.toLowerCase().includes(filter.toLowerCase()),
        );

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">Workout Plans</h1>
          <p className="text-gray-500">
            Find the perfect training for your goals
          </p>
        </div>
        <div className="mt-4 flex items-center md:mt-0">
          <div className="relative">
            <button className="flex items-center space-x-1 rounded-lg bg-white px-4 py-2 shadow-sm">
              <FiFilter size={16} />
              <span>Filter</span>
            </button>
            <div className="absolute right-0 z-10 mt-2 hidden w-56 rounded-lg bg-white p-2 shadow-lg">
              <div className="flex flex-wrap gap-2">
                <button className="rounded-full bg-gray-100 px-3 py-1 text-sm hover:bg-gray-200">
                  All
                </button>
                <button className="rounded-full bg-gray-100 px-3 py-1 text-sm hover:bg-gray-200">
                  Beginner
                </button>
                <button className="rounded-full bg-gray-100 px-3 py-1 text-sm hover:bg-gray-200">
                  Intermediate
                </button>
                <button className="rounded-full bg-gray-100 px-3 py-1 text-sm hover:bg-gray-200">
                  Advanced
                </button>
                <button className="rounded-full bg-gray-100 px-3 py-1 text-sm hover:bg-gray-200">
                  Quick
                </button>
                <button className="rounded-full bg-gray-100 px-3 py-1 text-sm hover:bg-gray-200">
                  HIIT
                </button>
                <button className="rounded-full bg-gray-100 px-3 py-1 text-sm hover:bg-gray-200">
                  Strength
                </button>
                <button className="rounded-full bg-gray-100 px-3 py-1 text-sm hover:bg-gray-200">
                  Cardio
                </button>
                <button className="rounded-full bg-gray-100 px-3 py-1 text-sm hover:bg-gray-200">
                  Yoga
                </button>
              </div>
            </div>
          </div>
          <div className="ml-2 flex space-x-1">
            <button
              className={`rounded-full px-3 py-1 text-sm ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={`rounded-full px-3 py-1 text-sm ${filter === 'Quick' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              onClick={() => setFilter('Quick')}
            >
              Quick
            </button>
            <button
              className={`rounded-full px-3 py-1 text-sm ${filter === 'Beginner' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              onClick={() => setFilter('Beginner')}
            >
              Beginner
            </button>
          </div>
        </div>
      </div>
      {/* Available Trainings */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Available Trainings</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTrainings.map((training) => (
            <div
              key={training.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <div className="relative h-40">
                <Image
                  width={600}
                  height={400}
                  src={training.image}
                  alt={training.title}
                  className="h-full w-full object-cover"
                />
                <div className="bg-opacity-90 absolute top-3 right-3 rounded-lg bg-white px-2 py-1 text-sm font-medium">
                  {training.duration}
                </div>
              </div>
              <div className="flex-grow p-2 md:p-4">
                <div className="mb-2 flex items-center">
                  <Image
                    width={32}
                    height={32}
                    src={training.trainerAvatar}
                    alt={training.trainer}
                    className="mr-2 h-8 w-8 rounded-full"
                  />
                  <span className="text-sm text-gray-600">
                    {training.trainer}
                  </span>
                </div>
                <h3 className="mb-1 text-lg font-bold">{training.title}</h3>
                <div className="mb-3 flex items-center">
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${training.level === 'Beginner' ? 'bg-green-100 text-green-800' : training.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' : training.level === 'Advanced' ? 'bg-orange-100 text-orange-800' : 'bg-gray-100 text-gray-800'}`}
                  >
                    {training.level}
                  </span>
                </div>
                <div className="mb-4 flex flex-wrap gap-1">
                  {training.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-2 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-2 px-2 pb-4 md:px-4">
                <button className="flex flex-1 items-center justify-center rounded-lg bg-blue-500 p-2 text-white">
                  <FiPlay size={16} className="mr-1" />
                  Start Now
                </button>
                <button className="flex flex-1 items-center justify-center rounded-lg border border-gray-200 p-2">
                  <FiPlusCircle size={16} className="mr-1" />
                  Add to Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
