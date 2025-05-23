'use client';

import { useTranslations } from 'next-intl';
import { Element } from 'react-scroll';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <Element
      name="contact"
      className="flex min-h-screen items-center justify-center overflow-hidden py-4 select-none md:py-20"
    >
      <div className="container mx-auto px-4">
        <div className="mb-4 text-center md:mb-12">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            {t('contact')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg">{t('contactDescription')}</p>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-2 md:grid-cols-2 lg:gap-10">
          <ContactInfo />

          <ContactForm />
        </div>
      </div>
    </Element>
  );
}
