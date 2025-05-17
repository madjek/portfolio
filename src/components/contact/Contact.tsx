'use client';

import { useTranslations } from 'next-intl';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            {t('contact')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg">{t('contactDescription')}</p>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">
          <ContactInfo />
          <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
            <h3 className="mb-6 text-2xl font-bold">{t('sendMessage')}</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
