import { getTranslations } from 'next-intl/server';

export default async function UnderConstruction() {
  const t = await getTranslations('underConstruction');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100">
        🚧 {t('title')}
      </h1>
      <p className="mt-6 text-2xl text-gray-600 dark:text-gray-400">
        {t('description')}
      </p>
    </div>
  );
}
