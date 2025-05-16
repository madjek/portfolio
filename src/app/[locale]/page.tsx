import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Skills />
      </main>
    </div>
  );
}
