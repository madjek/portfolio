import { cn } from '@/utils/cn';
import Image from 'next/image';
import { useState } from 'react';
import {
  FiBarChart2,
  FiBookOpen,
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiEdit,
  FiEye,
  FiMessageSquare,
  FiPlus,
  FiSearch,
  FiTrash,
  FiUpload,
  FiUsers,
} from 'react-icons/fi';
import { courses, students } from '../mockData';

export default function InstructorPanel() {
  const [activeTab, setActiveTab] = useState('courses');
  // Mock instructor courses (using the first 3 from the courses array)
  const instructorCourses = courses.slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">
          Instructor Dashboard
        </h1>
        <p className="text-gray-600">
          Manage your courses, students, and content
        </p>
      </div>
      {/* Stats Cards */}
      <div className="mb-8 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-blue-100 p-3">
              <FiBookOpen size={24} className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Active Courses</p>
              <h3 className="text-2xl font-bold">{instructorCourses.length}</h3>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-green-100 p-3">
              <FiUsers size={24} className="text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Students</p>
              <h3 className="text-2xl font-bold">{students.length}</h3>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-purple-100 p-3">
              <FiBarChart2 size={24} className="text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Avg. Completion</p>
              <h3 className="text-2xl font-bold">72%</h3>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-yellow-100 p-3">
              <FiMessageSquare size={24} className="text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">New Questions</p>
              <h3 className="text-2xl font-bold">8</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
        {/* Tabs */}
        <div className="flex overflow-x-auto border-b border-gray-200">
          <button
            className={cn(
              'px-6 py-4 text-sm font-medium whitespace-nowrap',
              activeTab === 'courses'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900',
            )}
            onClick={() => setActiveTab('courses')}
          >
            My Courses
          </button>
          <button
            className={cn(
              'px-6 py-4 text-sm font-medium whitespace-nowrap',
              activeTab === 'students'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900',
            )}
            onClick={() => setActiveTab('students')}
          >
            Students
          </button>
          <button
            className={cn(
              'px-6 py-4 text-sm font-medium whitespace-nowrap',
              activeTab === 'content'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900',
            )}
            onClick={() => setActiveTab('content')}
          >
            Content Builder
          </button>
          <button
            className={cn(
              'px-6 py-4 text-sm font-medium whitespace-nowrap',
              activeTab === 'analytics'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900',
            )}
            onClick={() => setActiveTab('analytics')}
          >
            Analytics
          </button>
          <button
            className={cn(
              'px-6 py-4 text-sm font-medium whitespace-nowrap',
              activeTab === 'schedule'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900',
            )}
            onClick={() => setActiveTab('schedule')}
          >
            Schedule
          </button>
        </div>
        {/* Tab Content */}
        <div className="p-6">
          {/* My Courses Tab */}
          {activeTab === 'courses' && (
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-semibold">My Courses</h2>
                <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
                  <FiPlus size={18} />
                  New Course
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                        Course
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                        Students
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                        Avg. Rating
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {instructorCourses.map((course) => (
                      <tr key={course.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <Image
                              width={40}
                              height={40}
                              src={course.thumbnail}
                              alt={course.title}
                              className="mr-3 h-10 w-10 rounded object-cover"
                            />
                            <div>
                              <div className="font-medium text-gray-900">
                                {course.title}
                              </div>
                              <div className="text-sm text-gray-500">
                                {course?.modules?.length} modules
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                          {course.enrolled}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <svg
                              className="h-4 w-4 fill-current text-yellow-400"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                            <span className="ml-1 text-sm text-gray-700">
                              {course.rating}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs leading-5 font-semibold text-green-800">
                            Published
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              <FiEdit size={18} />
                            </button>
                            <button className="text-gray-600 hover:text-gray-800">
                              <FiEye size={18} />
                            </button>
                            <button className="text-red-600 hover:text-red-800">
                              <FiTrash size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {/* Students Tab */}
          {activeTab === 'students' && (
            <div>
              <div className="mb-6 flex flex-col items-center justify-between md:flex-row">
                <h2 className="text-lg font-semibold">Students</h2>
                <div className="flex w-full flex-col gap-2 md:w-auto md:flex-row">
                  <select className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm md:w-fit">
                    <option>All Courses</option>
                    {instructorCourses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search students..."
                      className="w-full rounded-lg border border-gray-300 py-2 pr-3 pl-8 text-sm md:w-fit"
                    />
                    <FiSearch
                      size={16}
                      className="absolute top-1/2 left-2 -translate-y-1/2 transform text-gray-400"
                    />
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                        Student
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                        Progress
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                        Last Active
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {students.map((student) => (
                      <tr key={student.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                              {student.name.charAt(0)}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">
                                {student.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {student.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="w-32">
                            <div className="flex items-center">
                              <div className="mr-2 flex-1">
                                <div className="h-2 w-full rounded-full bg-gray-200">
                                  <div
                                    className={cn(
                                      'h-2 rounded-full',
                                      student.progress >= 80
                                        ? 'bg-green-500'
                                        : student.progress >= 50
                                          ? 'bg-yellow-500'
                                          : 'bg-red-500',
                                    )}
                                    style={{
                                      width: `${student.progress}%`,
                                    }}
                                  ></div>
                                </div>
                              </div>
                              <span className="text-sm font-medium">
                                {student.progress}%
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                          {student.lastActive}
                        </td>
                        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                          <button className="text-blue-600 hover:text-blue-800">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {/* Content Builder Tab */}
          {activeTab === 'content' && (
            <div>
              <div className="mb-6 flex flex-col items-center justify-between md:flex-row">
                <h2 className="text-lg font-semibold">Content Builder</h2>
                <select className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm md:w-auto">
                  <option>Select Course to Edit</option>
                  {instructorCourses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-6">
                <h3 className="mb-4 font-semibold">Course Information</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="title"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Course Title
                    </label>
                    <input
                      id="title"
                      type="text"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2"
                      placeholder="Enter course title"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="category"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    >
                      <option>Development</option>
                      <option>Design</option>
                      <option>Data Science</option>
                      <option>Business</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="description"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2"
                      rows={4}
                      placeholder="Enter course description"
                    ></textarea>
                  </div>
                  <div>
                    <label
                      htmlFor="difficulty"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Difficulty Level
                    </label>
                    <select
                      id="difficulty"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    >
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="thumbnail"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Course Thumbnail
                    </label>
                    <div id="thumbnail" className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-gray-200">
                        <FiUpload size={10} className="text-gray-500" />
                      </div>
                      <button className="text-sm font-medium text-blue-600">
                        Upload Image
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-semibold">Modules & Lessons</h3>
                  <button className="flex items-center gap-1 text-sm font-medium text-blue-600">
                    <FiPlus size={16} />
                    Add Module
                  </button>
                </div>
                <div className="space-y-4">
                  {/* Module 1 */}
                  <div className="rounded-lg border border-gray-200 bg-white">
                    <div className="flex items-center justify-between border-b border-gray-200 p-4">
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          className="border-none font-medium focus:ring-0 focus:outline-none"
                          defaultValue="Module 1: Introduction"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <FiEdit size={16} />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <FiTrash size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between rounded-lg bg-gray-50 p-2">
                          <span>Lesson 1: Getting Started</span>
                          <div className="flex items-center gap-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              <FiEdit size={16} />
                            </button>
                            <button className="text-red-600 hover:text-red-800">
                              <FiTrash size={16} />
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-gray-50 p-2">
                          <span>Lesson 2: Core Concepts</span>
                          <div className="flex items-center gap-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              <FiEdit size={16} />
                            </button>
                            <button className="text-red-600 hover:text-red-800">
                              <FiTrash size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                      <button className="mt-3 flex items-center gap-1 text-sm font-medium text-blue-600">
                        <FiPlus size={16} />
                        Add Lesson
                      </button>
                    </div>
                  </div>
                  {/* Module 2 */}
                  <div className="rounded-lg border border-gray-200 bg-white">
                    <div className="flex items-center justify-between border-b border-gray-200 p-4">
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          className="border-none font-medium focus:ring-0 focus:outline-none"
                          defaultValue="Module 2: Advanced Topics"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <FiEdit size={16} />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <FiTrash size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between rounded-lg bg-gray-50 p-2">
                          <span>Lesson 1: Advanced Features</span>
                          <div className="flex items-center gap-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              <FiEdit size={16} />
                            </button>
                            <button className="text-red-600 hover:text-red-800">
                              <FiTrash size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                      <button className="mt-3 flex items-center gap-1 text-sm font-medium text-blue-600">
                        <FiPlus size={16} />
                        Add Lesson
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <button className="rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 hover:bg-gray-50">
                  Save as Draft
                </button>
                <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
                  Publish Course
                </button>
              </div>
            </div>
          )}
          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div>
              <div className="mb-6 flex flex-col items-center justify-between md:flex-row">
                <h2 className="text-lg font-semibold">Course Analytics</h2>
                <div className="flex gap-2">
                  <select className="w-1/2 rounded-lg border border-gray-300 px-3 py-2 text-sm">
                    <option>All Courses</option>
                    {instructorCourses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                  <select className="w-1/2 rounded-lg border border-gray-300 px-3 py-2 text-sm">
                    <option>Last 30 Days</option>
                    <option>Last 90 Days</option>
                    <option>Last Year</option>
                    <option>All Time</option>
                  </select>
                </div>
              </div>
              <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-semibold">
                    Enrollment Trends
                  </h3>
                  <div className="flex h-64 items-center justify-center rounded-lg bg-gray-100">
                    <p className="text-gray-500">
                      Enrollment Chart Placeholder
                    </p>
                  </div>
                </div>
                <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-semibold">
                    Completion Rates
                  </h3>
                  <div className="flex h-64 items-center justify-center rounded-lg bg-gray-100">
                    <p className="text-gray-500">
                      Completion Chart Placeholder
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-semibold">Top Lessons</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Introduction to HTML</span>
                      <span className="text-xs text-gray-500">
                        95% completion
                      </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">CSS Selectors</span>
                      <span className="text-xs text-gray-500">
                        87% completion
                      </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">JavaScript Basics</span>
                      <span className="text-xs text-gray-500">
                        82% completion
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-semibold">
                    Quiz Performance
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between">
                      <span className="text-sm">HTML & CSS Quiz</span>
                      <span className="text-xs text-gray-500">
                        78% avg. score
                      </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">JavaScript Quiz</span>
                      <span className="text-xs text-gray-500">
                        65% avg. score
                      </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Final Assessment</span>
                      <span className="text-xs text-gray-500">
                        72% avg. score
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-semibold">
                    Student Feedback
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <div className="mb-1 flex items-center gap-1">
                        <svg
                          className="h-4 w-4 fill-current text-yellow-400"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="h-4 w-4 fill-current text-yellow-400"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="h-4 w-4 fill-current text-yellow-400"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="h-4 w-4 fill-current text-yellow-400"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="h-4 w-4 fill-current text-gray-300"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-600">
                        &quot;Great course, very informative and
                        well-structured.&quot;
                      </p>
                    </li>
                    <li>
                      <div className="mb-1 flex items-center gap-1">
                        <svg
                          className="h-4 w-4 fill-current text-yellow-400"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="h-4 w-4 fill-current text-yellow-400"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="h-4 w-4 fill-current text-yellow-400"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="h-4 w-4 fill-current text-yellow-400"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="h-4 w-4 fill-current text-yellow-400"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-600">
                        &quot;The instructor explains complex topics very
                        clearly.&quot;
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {/* Schedule Tab */}
          {activeTab === 'schedule' && (
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Schedule & Events</h2>
                <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
                  <FiPlus size={18} />
                  New Event
                </button>
              </div>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                    <div className="mb-6 flex items-center justify-between">
                      <h3 className="font-semibold">October 2023</h3>
                      <div className="flex gap-2">
                        <button className="rounded p-1 hover:bg-gray-100">
                          <FiChevronLeft size={18} />
                        </button>
                        <button className="rounded p-1 hover:bg-gray-100">
                          <FiChevronRight size={18} />
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
                        (day) => (
                          <div
                            key={day}
                            className="py-2 text-center text-sm font-medium text-gray-500"
                          >
                            {day}
                          </div>
                        ),
                      )}
                      {Array.from(
                        {
                          length: 35,
                        },
                        (_, i) => {
                          const dayNum = i - 5; // Offset to start from previous month

                          return (
                            <div
                              key={i}
                              className={`flex aspect-square flex-col rounded-lg border p-1 ${dayNum > 0 && dayNum <= 31 ? 'bg-white' : 'bg-gray-50 text-gray-400'} ${dayNum === 15 ? 'border-blue-500' : 'border-gray-100'}`}
                            >
                              <span className="text-xs">
                                {dayNum > 0 && dayNum <= 31 ? dayNum : ''}
                              </span>
                              {dayNum === 10 && (
                                <div className="mt-auto">
                                  <div className="truncate rounded bg-blue-100 p-0.5 text-xs text-blue-800">
                                    Live Q&A
                                  </div>
                                </div>
                              )}
                              {dayNum === 15 && (
                                <div className="mt-auto">
                                  <div className="truncate rounded bg-purple-100 p-0.5 text-xs text-purple-800">
                                    New Course
                                  </div>
                                </div>
                              )}
                              {dayNum === 22 && (
                                <div className="mt-auto">
                                  <div className="truncate rounded bg-green-100 p-0.5 text-xs text-green-800">
                                    Workshop
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        },
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                    <h3 className="mb-4 font-semibold">Upcoming Events</h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                            <FiCalendar size={18} />
                          </div>
                          <div className="my-2 h-full w-px bg-gray-200"></div>
                        </div>
                        <div>
                          <p className="font-medium">Live Q&A Session</p>
                          <p className="mb-1 text-sm text-gray-600">
                            Web Development Course
                          </p>
                          <p className="text-xs text-gray-500">
                            Oct 10, 2023 · 2:00 PM
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                            <FiCalendar size={18} />
                          </div>
                          <div className="my-2 h-full w-px bg-gray-200"></div>
                        </div>
                        <div>
                          <p className="font-medium">New Course Launch</p>
                          <p className="mb-1 text-sm text-gray-600">
                            Advanced JavaScript
                          </p>
                          <p className="text-xs text-gray-500">Oct 15, 2023</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                            <FiCalendar size={18} />
                          </div>
                        </div>
                        <div>
                          <p className="font-medium">Workshop</p>
                          <p className="mb-1 text-sm text-gray-600">
                            Responsive Design
                          </p>
                          <p className="text-xs text-gray-500">
                            Oct 22, 2023 · 1:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 w-full text-center text-sm font-medium text-blue-600 hover:underline">
                      View All Events
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
