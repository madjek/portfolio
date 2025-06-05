import { useNavigationStore } from '@/store/educationStore';
import Image from 'next/image';
import {
  FiAward,
  FiCheckCircle,
  FiChevronRight,
  FiDownload,
  FiLinkedin,
} from 'react-icons/fi';
import { LuTrophy } from 'react-icons/lu';
import {
  achievements,
  certifications,
  courses,
  currentUser,
} from '../mockData';

export default function Certification() {
  const { setRoute } = useNavigationStore();
  // Get completed courses
  const completedCourses = courses.filter((course) =>
    currentUser.completedCourses.includes(course.id),
  );

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">
          Certifications & Achievements
        </h1>
        <p className="text-gray-600">
          Track your learning milestones and share your accomplishments
        </p>
      </div>
      {/* Certifications Section */}
      <div className="mb-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800">
            <FiAward size={20} className="text-blue-600" />
            Your Certifications
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="mb-1 text-lg font-bold">{cert.title}</h3>
                    <p className="text-sm text-blue-100">
                      Issued on {cert.issueDate}
                    </p>
                  </div>
                  <FiAward size={32} />
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Credential ID</p>
                      <p className="font-medium">{cert.credentialId}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Issuer</p>
                      <p className="font-medium">{cert.issuer}</p>
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-sm text-gray-500">Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-3">
                    <button className="flex flex-1 items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
                      <FiDownload size={16} />
                      Download
                    </button>
                    <button className="flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 font-medium text-blue-700 hover:bg-blue-100">
                      <FiLinkedin size={16} />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {certifications.length === 0 && (
            <div className="col-span-2 rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <FiAward size={32} className="text-blue-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                No Certifications Yet
              </h3>
              <p className="mb-6 text-gray-600">
                Complete courses to earn your first certification.
              </p>
              <button
                onClick={() => setRoute('/courses')}
                className="inline-block rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700"
              >
                Browse Courses
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Achievements Section */}
      <div className="mb-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800">
            <LuTrophy size={20} className="text-yellow-500" />
            Your Achievements
          </h2>
        </div>
        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
          <div className="grid grid-cols-1 divide-x divide-y divide-gray-100 md:grid-cols-2 md:divide-y-0 lg:grid-cols-4">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                  <span className="text-3xl">{achievement.icon}</span>
                </div>
                <h3 className="mb-2 font-semibold">{achievement.title}</h3>
                <p className="mb-2 text-sm text-gray-600">
                  {achievement.description}
                </p>
                <p className="text-xs text-gray-500">
                  Earned on {achievement.dateEarned}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Progress Ladder */}
      <div className="mb-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">
            Learning Journey
          </h2>
        </div>
        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-xl font-bold text-white">
              {achievements.length}
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Explorer</h3>
              <p className="text-gray-600">
                You&apos;re making great progress on your learning journey!
              </p>
            </div>
          </div>
          <div className="mb-6">
            <div className="mb-1 flex justify-between text-sm">
              <span className="text-gray-600">Progress to next level</span>
              <span className="font-medium">60%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-purple-600"
                style={{
                  width: '60%',
                }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                <FiCheckCircle size={16} className="text-green-500" />
              </div>
              <span>Complete 5 courses</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                <FiCheckCircle size={16} className="text-green-500" />
              </div>
              <span>Earn 3 achievements</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                2/3
              </div>
              <span>Pass 3 advanced quizzes</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                0/1
              </div>
              <span>Complete a learning path</span>
            </div>
          </div>
        </div>
      </div>
      {/* Completed Courses */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">
            Completed Courses
          </h2>
        </div>
        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
          {completedCourses.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {completedCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex items-center justify-between p-4"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      width={48}
                      height={48}
                      src={course.thumbnail}
                      alt={course.title}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{course.title}</h3>
                      <p className="text-sm text-gray-600">
                        Completed on {course.completionDate}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setRoute(`/course/${course.id}`)}
                    className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline"
                  >
                    View Certificate
                    <FiChevronRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-gray-600">
                You haven&apos;t completed any courses yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
