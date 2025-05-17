import { Link } from '@/i18n/navigation';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa6';

export default function SocialLinks() {
  const linedIn = process.env.NEXT_PUBLIC_LINKEDIN ?? '';
  const github = process.env.NEXT_PUBLIC_GITHUB ?? '';
  const telegram = process.env.NEXT_PUBLIC_TELEGRAM ?? '';

  return (
    <div className="flex space-x-4">
      <Link
        href={linedIn}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-gray-200 p-3 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={24} />
      </Link>
      <Link
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-gray-200 p-3 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        aria-label="GitHub"
      >
        <FaGithub size={24} />
      </Link>

      <Link
        href={`https://t.me/${telegram}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-gray-200 p-3 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        aria-label="Telegram"
      >
        <FaTelegram size={24} />
      </Link>
    </div>
  );
}
