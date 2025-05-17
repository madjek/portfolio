import CaseStudies from '@/components/caseStudies/CaseStudies';
import Contact from '@/components/contact/Contact';
import Experience from '@/components/experience/Experience';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/projects/Projects';
import Skills from '@/components/skills/Skills';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 duration-300 dark:bg-gray-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <CaseStudies />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
