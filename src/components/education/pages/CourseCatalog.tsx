import { useNavigationStore } from '@/store/educationStore';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import { useState } from 'react';
import { FiBookOpen, FiClock, FiSearch, FiStar } from 'react-icons/fi';
import { courses, currentUser } from '../mockData';

export default function CourseCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [sortBy, setSortBy] = useState('popular');
  const { setRoute } = useNavigationStore();
  // Categories derived from courses data
  const categories = [
    'All',
    ...new Set(courses.map((course) => course.category)),
  ];
  // Difficulties derived from courses data
  const difficulties = [
    'All',
    ...new Set(courses.map((course) => course.difficulty)),
  ];
  // Filter and sort courses
  const filteredCourses = courses
    .filter(
      (course) =>
        (searchTerm === '' ||
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase())) &&
        (selectedCategory === 'All' || course.category === selectedCategory) &&
        (selectedDifficulty === 'All' ||
          course.difficulty === selectedDifficulty),
    )
    .sort((a, b) => {
      if (sortBy === 'popular') return b.enrolled - a.enrolled;

      if (sortBy === 'newest')
        return (
          new Date('2023-09-30').getTime() - new Date('2023-09-15').getTime()
        ); // Mock dates

      if (sortBy === 'rating') return b.rating - a.rating;

      return 0;
    });

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">
          Course Catalog
        </h1>
        <p className="text-gray-600">
          Discover courses to enhance your skills and knowledge
        </p>
      </div>
      {/* Search and Filters */}
      <div className="mb-8 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <FiSearch
                size={18}
                className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400"
              />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {/* Category Filter */}
            <select
              className="rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {/* Difficulty Filter */}
            <select
              className="rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            >
              {difficulties.map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty}
                </option>
              ))}
            </select>
            {/* Sort By */}
            <select
              className="rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="popular">Most Popular</option>
              <option value="newest">Newest</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>
      {/* Course Grid */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative">
              <Image
                width={500}
                height={500}
                src={course.thumbnail}
                alt={course.title}
                className="h-48 w-full object-cover"
              />
              {/* Tags */}
              <div className="absolute top-3 left-3 flex gap-2">
                {course.tags.includes('Free') && (
                  <span className="rounded-full bg-green-500 px-2 py-1 text-xs text-white">
                    Free
                  </span>
                )}
                {course.tags.includes('Certification') && (
                  <span className="rounded-full bg-blue-500 px-2 py-1 text-xs text-white">
                    Certification
                  </span>
                )}
              </div>
              {/* Difficulty */}
              <div className="absolute right-3 bottom-3">
                <span
                  className={cn(
                    'rounded-full px-2 py-1 text-xs',
                    course.difficulty === 'Beginner'
                      ? 'bg-green-100 text-green-800'
                      : course.difficulty === 'Intermediate'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800',
                  )}
                >
                  {course.difficulty}
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="mb-2 line-clamp-1 text-lg font-semibold">
                {course.title}
              </h3>
              <p className="mb-4 line-clamp-2 text-sm text-gray-600">
                {course.description}
              </p>
              <div className="mb-4 flex items-center gap-2">
                <Image
                  width={500}
                  height={500}
                  src={course.instructorAvatar}
                  alt={course.instructor}
                  className="h-6 w-6 rounded-full"
                />
                <span className="text-sm text-gray-600">
                  {course.instructor}
                </span>
              </div>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <FiStar
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  <span className="text-sm font-medium">{course.rating}</span>
                  <span className="text-sm text-gray-500">
                    ({course.reviewCount})
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <FiClock size={14} className="text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiBookOpen size={14} className="text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {course.lessonsCount} lessons
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setRoute(`/course/${course.id}`)}
                className={cn(
                  'block w-full rounded-lg py-2 text-center font-medium',
                  currentUser?.enrolledCourses?.includes(course.id)
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200',
                )}
              >
                {currentUser?.enrolledCourses?.includes(course.id)
                  ? 'Continue Learning'
                  : 'Enroll Now'}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* No Results */}
      {filteredCourses.length === 0 && (
        <div className="rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm">
          <div className="mb-4 text-gray-400">
            <FiSearch size={48} className="mx-auto" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">No courses found</h3>
          <p className="mb-4 text-gray-600">
            Try adjusting your search or filter criteria
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
              setSelectedDifficulty('All');
            }}
            className="font-medium text-blue-600 hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
