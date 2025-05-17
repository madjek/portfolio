'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa6';
import { Link as ScrollLink } from 'react-scroll';

const sections = ['about', 'skills', 'projects', 'experience', 'contact'];

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();
  const linkedIn = process.env.NEXT_PUBLIC_LINKEDIN ?? '';
  const github = process.env.NEXT_PUBLIC_GITHUB ?? '';
  const telegram = process.env.NEXT_PUBLIC_TELEGRAM ?? '';
  const email = process.env.NEXT_PUBLIC_EMAIL ?? '';
  const phone = process.env.NEXT_PUBLIC_PHONE ?? '';

  return (
    <footer className="border-t border-indigo-700/50 bg-gray-900 py-4 text-white">
      <div className="mx-auto px-4 lg:container">
        <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-3 md:gap-10">
          {/* Branding & Socials */}
          <div className="flex flex-col items-center">
            <h3 className="mb-4 text-2xl font-bold">
              <span className="text-indigo-500">Dev</span>
              Portfolio
            </h3>
            <p className="mb-4">{t('footerDescription')}</p>
            <div className="flex space-x-4">
              <Link
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 duration-300 hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 duration-300 hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </Link>
              <Link
                href={`https://t.me/${telegram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 duration-300 hover:text-white"
                aria-label="Telegram"
              >
                <FaTelegram size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="hidden flex-col items-center text-center md:flex">
            <h4 className="mb-4 text-lg font-semibold">{t('quickLinks')}</h4>
            <ul className="flex gap-4 space-y-2">
              {sections.map((section) => (
                <li key={section}>
                  <ScrollLink
                    to={section}
                    smooth
                    duration={500}
                    className="cursor-pointer duration-300 hover:text-indigo-400"
                  >
                    {t(section)}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:text-end">
            <h4 className="mb-4 hidden text-lg font-semibold md:block">
              {t('contactInfo')}
            </h4>
            <address className="not-italic">
              <p className="mb-2">{t('location')}</p>
              <p className="mb-2">
                <Link
                  href={`mailto:${email}`}
                  className="duration-300 hover:text-indigo-400"
                >
                  {email}
                </Link>
              </p>
              <p>
                <Link
                  href={`tel:${phone}`}
                  className="duration-300 hover:text-indigo-400"
                >
                  {phone}
                </Link>
              </p>
            </address>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-2 flex flex-col items-center justify-center border-t border-gray-800 pt-2 md:flex-row">
          <p>
            © {currentYear} Yevhenii Madzhar. {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
