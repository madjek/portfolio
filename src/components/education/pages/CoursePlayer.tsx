import { useNavigationStore } from '@/store/educationStore';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  FiCheckCircle,
  FiChevronDown,
  FiChevronRight,
  FiFileText,
  FiHelpCircle,
  FiMessageSquare,
  FiPause,
  FiPlay,
  FiVolume2,
  FiVolumeX,
} from 'react-icons/fi';
import { courses } from '../mockData';

export default function CoursePlayer({ courseId }: { courseId: string }) {
  const [activeTab, setActiveTab] = useState('notes');
  const [activeModuleId, setActiveModuleId] = useState('');
  const [activeLessonId, setActiveLessonId] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const { setRoute } = useNavigationStore();
  // Find the course data with comprehensive null checks
  const course =
    courseId && Array.isArray(courses)
      ? courses.find((c) => c.id === courseId)
      : null;
  // Set initial active module and lesson when course changes
  useEffect(() => {
    if (course && course.modules && course.modules.length > 0) {
      setActiveModuleId(course.modules[0].id);

      if (course.modules[0].lessons && course.modules[0].lessons.length > 0) {
        setActiveLessonId(course.modules[0].lessons[0].id);
      }
    }
  }, [course]);

  // Handle loading and error states
  if (!Array.isArray(courses)) {
    return (
      <div className="mx-auto max-w-7xl p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">Loading...</h2>
        <p className="mb-6">Please wait while we load the course data.</p>
      </div>
    );
  }

  if (!courseId || !course) {
    return (
      <div className="mx-auto max-w-7xl p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">Course not found</h2>
        <p className="mb-6">
          The course you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <button
          onClick={() => setRoute('/courses')}
          className="inline-block rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700"
        >
          Browse Courses
        </button>
      </div>
    );
  }

  // Find active module and lesson with null checks
  const activeModule = course.modules?.find((m) => m.id === activeModuleId);
  const activeLesson = activeModule?.lessons?.find(
    (l) => l.id === activeLessonId,
  );
  // Calculate overall progress with null checks
  const totalLessons =
    course.modules?.reduce(
      (total, module) => total + (module.lessons?.length || 0),
      0,
    ) || 0;
  const completedLessons =
    course.modules?.reduce(
      (total, module) =>
        total +
        (module.lessons?.filter((lesson) => lesson.completed)?.length || 0),
      0,
    ) || 0;
  const progress =
    totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Sidebar - Lesson Navigation */}
        <div className="lg:order-1 lg:col-span-1">
          <div className="sticky top-0 rounded-xl border border-gray-100 bg-white shadow-sm">
            <div className="border-b border-gray-100 p-4">
              <h2 className="text-lg font-semibold">{course.title}</h2>
              <div className="mt-2 flex items-center">
                <div className="flex-1">
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-blue-600"
                      style={{
                        width: `${progress}%`,
                      }}
                    ></div>
                  </div>
                </div>
                <span className="ml-2 text-sm font-medium">{progress}%</span>
              </div>
            </div>
            <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
              {course.modules?.map((module) => (
                <div
                  key={module.id}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <button
                    className="flex w-full items-center justify-between p-4 text-left hover:bg-gray-50"
                    onClick={() =>
                      setActiveModuleId(
                        module.id === activeModuleId ? '' : module.id,
                      )
                    }
                  >
                    <span className="font-medium">{module.title}</span>
                    {module.id === activeModuleId ? (
                      <FiChevronDown size={18} />
                    ) : (
                      <FiChevronRight size={18} />
                    )}
                  </button>
                  {module.id === activeModuleId && (
                    <div className="pr-2 pb-2 pl-4">
                      {module.lessons?.map((lesson) => (
                        <button
                          key={lesson.id}
                          className={cn(
                            'mb-1 flex w-full items-center justify-between rounded-lg p-2 text-left text-sm',
                            lesson.id === activeLessonId
                              ? 'bg-blue-100 text-blue-700'
                              : lesson.completed
                                ? 'text-gray-600 hover:bg-gray-50'
                                : 'text-gray-700 hover:bg-gray-100',
                          )}
                          onClick={() => setActiveLessonId(lesson.id)}
                        >
                          <div className="flex items-center gap-2">
                            {lesson.completed && (
                              <FiCheckCircle
                                size={16}
                                className="text-green-500"
                              />
                            )}
                            <span>{lesson.title}</span>
                          </div>
                          <span className="text-xs text-gray-500">
                            {lesson.duration}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Main Content - Video Player and Tabs */}
        <div className="order-1 lg:order-2 lg:col-span-3">
          {/* Video Player */}
          <div className="relative mb-6 overflow-hidden rounded-xl bg-black">
            <Image
              width={1280}
              height={720}
              src="/img/education/education.jpg"
              alt="Video Placeholder"
              className="aspect-video w-full object-cover opacity-60"
            />
            {/* Video Controls */}
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <div className="flex justify-end">
                <button className="bg-opacity-50 rounded-full bg-black p-2 text-white">
                  {/* <div size={20} /> */}
                </button>
              </div>
              <div>
                <div className="bg-opacity-50 mb-4 h-1 w-full overflow-hidden rounded-full bg-gray-600">
                  <div
                    className="h-full rounded-full bg-blue-500"
                    style={{
                      width: '35%',
                    }}
                  ></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      className="rounded-full bg-blue-600 p-3 text-white"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <FiPause size={24} /> : <FiPlay size={24} />}
                    </button>
                    <span className="text-sm text-white">04:25 / 12:30</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      className="text-white"
                      onClick={() => setIsMuted(!isMuted)}
                    >
                      {isMuted ? (
                        <FiVolumeX size={20} />
                      ) : (
                        <FiVolume2 size={20} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Lesson Info */}
          <div className="mb-6 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h1 className="mb-2 text-2xl font-bold">
              {activeLesson?.title || course.title}
            </h1>
            <div className="mb-4 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Image
                  width={32}
                  height={32}
                  src={course.instructorAvatar}
                  alt={course.instructor}
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-gray-700">{course.instructor}</span>
              </div>
              {activeLesson && (
                <span className="text-sm text-gray-500">
                  Duration: {activeLesson.duration}
                </span>
              )}
            </div>
            <p className="text-gray-700">{course.description}</p>
          </div>
          {/* Tabs */}
          <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
            <div className="flex border-b border-gray-200">
              <button
                className={cn(
                  'flex items-center gap-2 px-6 py-4 text-sm font-medium',
                  activeTab === 'notes'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900',
                )}
                onClick={() => setActiveTab('notes')}
              >
                <FiFileText size={18} />
                Notes
              </button>
              <button
                className={cn(
                  'flex items-center gap-2 px-6 py-4 text-sm font-medium',
                  activeTab === 'quiz'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900',
                )}
                onClick={() => setActiveTab('quiz')}
              >
                <FiHelpCircle size={18} />
                Quiz
              </button>
              <button
                className={cn(
                  'flex items-center gap-2 px-6 py-4 text-sm font-medium',
                  activeTab === 'discussion'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900',
                )}
                onClick={() => setActiveTab('discussion')}
              >
                <FiMessageSquare size={18} />
                Discussion
              </button>
            </div>
            <div className="p-6">
              {activeTab === 'notes' && (
                <div>
                  <textarea
                    placeholder="Take notes for this lesson..."
                    className="min-h-[200px] w-full rounded-lg border border-gray-300 p-4 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  ></textarea>
                  <div className="mt-4 flex justify-end">
                    <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
                      Save Notes
                    </button>
                  </div>
                </div>
              )}
              {activeTab === 'quiz' && (
                <div>
                  <div className="py-8 text-center">
                    <h3 className="mb-2 text-xl font-semibold">
                      Ready to test your knowledge?
                    </h3>
                    <p className="mb-6 text-gray-600">
                      Complete this quiz to test your understanding of the
                      lesson.
                    </p>
                    <button
                      onClick={() => setRoute(`/quiz/${courseId}`)}
                      className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
                    >
                      Take Quiz
                    </button>
                  </div>
                </div>
              )}
              {activeTab === 'discussion' && (
                <div>
                  <div className="mb-6">
                    <h3 className="mb-2 font-semibold">Ask a Question</h3>
                    <textarea
                      placeholder="Type your question here..."
                      className="min-h-[100px] w-full rounded-lg border border-gray-300 p-4 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    ></textarea>
                    <div className="mt-4 flex justify-end">
                      <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
                        Post Question
                      </button>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="mb-4 font-semibold">Discussion (3)</h3>
                    <div className="space-y-6">
                      <div className="rounded-lg bg-gray-50 p-4">
                        <div className="mb-2 flex items-center gap-3">
                          <Image
                            width={32}
                            height={32}
                            src="/img/education/m2.jpg"
                            alt="User"
                            className="h-8 w-8 rounded-full"
                          />
                          <div>
                            <p className="font-medium">John Smith</p>
                            <p className="text-xs text-gray-500">2 days ago</p>
                          </div>
                        </div>
                        <p className="mb-2 text-gray-700">
                          Can someone explain the difference between flexbox and
                          grid in more detail?
                        </p>
                        <button className="text-sm font-medium text-blue-600 hover:underline">
                          Reply
                        </button>
                      </div>
                      <div className="ml-8 rounded-lg bg-gray-50 p-4">
                        <div className="mb-2 flex items-center gap-3">
                          <Image
                            width={32}
                            height={32}
                            src={course.instructorAvatar}
                            alt="Instructor"
                            className="h-8 w-8 rounded-full"
                          />
                          <div>
                            <p className="font-medium">
                              {course.instructor}{' '}
                              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
                                Instructor
                              </span>
                            </p>
                            <p className="text-xs text-gray-500">1 day ago</p>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          Great question! Flexbox is designed for
                          one-dimensional layouts (rows OR columns) while Grid
                          is designed for two-dimensional layouts (rows AND
                          columns). I&apos;ll cover this more in the next
                          lesson.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Bottom Actions */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2">
              <button className="flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 font-medium text-gray-800 hover:bg-gray-300">
                Previous Lesson
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
                Next Lesson
              </button>
            </div>
            <button className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700">
              <FiCheckCircle size={18} />
              Mark as Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
