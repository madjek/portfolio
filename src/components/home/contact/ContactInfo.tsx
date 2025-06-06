import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { LuDownload, LuMail, LuMap } from 'react-icons/lu';
import SocialLinks from './SocialLinks';

export default function ContactInfo() {
  const t = useTranslations('contact');
  const email = process.env.NEXT_PUBLIC_EMAIL ?? '';

  return (
    <div className="grid place-content-stretch gap-2 lg:gap-10">
      <div className="flex flex-col items-center rounded-xl bg-white p-4 shadow-lg lg:p-8 dark:bg-gray-800">
        <h3 className="mb-6 text-2xl font-bold">{t('contactInfo')}</h3>
        <div className="space-y-9 select-text">
          <div className="flex items-start">
            <div className="mr-4 rounded-full bg-indigo-100 p-3 dark:bg-indigo-900/50">
              <LuMail
                size={24}
                className="text-indigo-600 dark:text-indigo-400"
              />
            </div>
            <div>
              <h4 className="mb-1 font-semibold">{t('emailInfo')}</h4>
              <Link
                href={`mailto:${email}`}
                className="text-indigo-600 hover:underline dark:text-indigo-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                {email}
              </Link>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 rounded-full bg-indigo-100 p-3 dark:bg-indigo-900/50">
              <LuMap
                size={24}
                className="text-indigo-600 dark:text-indigo-400"
              />
            </div>
            <div>
              <h4 className="mb-1 font-semibold">{t('location')}</h4>
              <p>{t('locationInfo')}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-xl bg-white p-4 shadow-lg lg:p-8 dark:bg-gray-800">
        <div className="flex flex-col items-center">
          <h3 className="mb-4 text-center text-xl font-bold md:text-left">
            {t('connect')}
          </h3>
          <SocialLinks />
        </div>
        <div className="mt-10 text-center md:text-left">
          <Link
            href="/resume.pdf"
            download
            className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-white shadow-sm shadow-indigo-500/50 duration-300 hover:bg-indigo-700 hover:shadow-none"
          >
            <LuDownload size={18} className="mr-2" />
            {t('resume')}
          </Link>
        </div>
      </div>
    </div>
  );
}
