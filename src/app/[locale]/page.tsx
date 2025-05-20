import Contact from '@/components/contact/Contact';
import Experience from '@/components/experience/Experience';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/projects/Projects';
import Skills from '@/components/skills/Skills';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('homePage');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 duration-300 dark:bg-gray-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
