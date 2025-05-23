import Link from 'next/link';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

interface FooterLink {
  name: string;
  to: string;
}

interface SocialLink {
  icon: React.ReactNode;
  url: string;
}

const quickLinks: FooterLink[] = [
  { name: 'Home', to: '/' },
  { name: 'Search Properties', to: '/search' },
  { name: 'Saved Listings', to: '/saved' },
  { name: 'Recommendations', to: '/recommendations' },
];
const socialLinks: SocialLink[] = [
  { icon: <FiFacebook size={20} />, url: 'https://facebook.com' },
  { icon: <FiTwitter size={20} />, url: 'https://twitter.com' },
  { icon: <FiInstagram size={20} />, url: 'https://instagram.com' },
  { icon: <FiLinkedin size={20} />, url: 'https://linkedin.com' },
];
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
          {/* Brand Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">
              Pro<span className="text-blue-400">Estate</span>
            </h3>
            <p className="mb-4 text-gray-400">
              Discover your perfect property with our immersive real estate
              platform.
            </p>
            <div className="flex justify-center space-x-4 md:justify-start">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                  aria-label={social.url.split('//')[1].split('.')[0]}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    href={`/estate${link.to}`}
                    className="text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Property Street</li>
              <li>Real Estate City, RE 12345</li>
              <li>info@proestate.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} ProEstate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
