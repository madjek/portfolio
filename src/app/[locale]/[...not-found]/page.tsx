import { getLocale, getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata() {
  const t = await getTranslations('notFoundPage');

  return {
    title: t('title'),
    description: t('description'),
  };
}
export default async function NotFound() {
  const locale = await getLocale();
  const t = await getTranslations('notFoundPage');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="mt-6 text-5xl font-bold text-gray-800 dark:text-gray-100">
        {t('title')}
      </h2>
      <p className="mt-6 text-2xl text-gray-600 dark:text-gray-400">
        {t('description')}
      </p>
      <Link
        href={`/${locale}`}
        className="mt-6 rounded-lg bg-indigo-600 px-6 py-3 text-white shadow-sm shadow-indigo-500 duration-300 hover:bg-indigo-700 hover:shadow-none"
      >
        {t('return')}
      </Link>
    </div>
  );
}
