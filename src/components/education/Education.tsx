'use client';

import { useNavigationStore } from '@/store/educationStore';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Certification from './pages/Certification';
import CourseCatalog from './pages/CourseCatalog';
import CoursePlayer from './pages/CoursePlayer';
import Dashboard from './pages/Dashboard';
import InstructorPanel from './pages/InstructorPanel';
import Quiz from './pages/Quiz';
import Settings from './pages/Settings';

export default function Education() {
  const { currentRoute } = useNavigationStore();
  const renderPage = () => {
    if (currentRoute === '/') return <Dashboard />;

    if (currentRoute === '/courses') return <CourseCatalog />;

    if (currentRoute === '/certification') return <Certification />;

    if (currentRoute === '/instructor') return <InstructorPanel />;

    if (currentRoute === '/settings') return <Settings />;

    // match /course/:id
    if (currentRoute.startsWith('/course/')) {
      const courseId = currentRoute.replace('/course/', '');

      return <CoursePlayer courseId={courseId} />;
    }

    // match /quiz/:id
    if (currentRoute.startsWith('/quiz/')) {
      const quizId = currentRoute.replace('/quiz/', '');

      return <Quiz quizId={quizId} />;
    }

    return <Dashboard />;
  };

  return (
    <div className="flex h-screen w-full bg-gray-50 text-gray-900 select-none">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
