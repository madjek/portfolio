'use client';

import { cn } from '@/utils/cn';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaRegCircleCheck, FaRegCircleStop } from 'react-icons/fa6';
import { LuLoader, LuSend } from 'react-icons/lu';
import { z } from 'zod';

export default function ContactForm() {
  const t = useTranslations('contact');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState(null);
  const formSchema = z.object({
    name: z.string().min(1, t('nameRequired')),
    email: z.string().email(t('invalidEmail')),
    subject: z.string().min(1, t('subjectRequired')),
    message: z.string().min(1, t('messageRequired')),
  });

  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setApiError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const resData = await response.json();
        setApiError(resData.error || 'Something went wrong. Please try again.');
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.log(error);
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center rounded-lg border border-green-200 bg-green-50 p-6 text-center dark:border-green-800 dark:bg-green-900/20">
        <FaRegCircleCheck size={48} className="mb-4 text-green-500" />
        <h4 className="mb-2 text-xl font-bold">{t('messageSent')}</h4>
        <p className="mb-0">{t('thankYou')}</p>
      </div>
    );
  }

  if (apiError) {
    return (
      <div className="flex flex-col items-center rounded-lg border border-red-200 bg-red-50 p-6 text-center dark:border-red-800 dark:bg-red-900/20">
        <FaRegCircleStop size={48} className="mb-4 text-red-500" />
        <h4 className="mb-2 text-xl font-bold">{t('error')}</h4>
        <p className="mb-0">
          {apiError === 429 ? t('error429') : t('someError')}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Name Field */}
        <div className="relative">
          <label htmlFor="name" className="mb-2 block font-medium">
            {t('name')}
          </label>
          <input
            id="name"
            {...register('name')}
            className={cn(
              'w-full rounded-lg border bg-white px-4 py-3 duration-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-700',
              errors.name
                ? 'border-red-500 focus:ring-1 focus:ring-red-500 dark:border-red-500'
                : 'border-gray-300 dark:border-gray-600',
            )}
            placeholder={t('namePlaceholder')}
          />
          {errors.name && (
            <p className="absolute left-0 text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="relative">
          <label htmlFor="email" className="mb-2 block font-medium">
            {t('email')}
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className={cn(
              'w-full rounded-lg border bg-white px-4 py-3 duration-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-700',
              errors.email
                ? 'border-red-500 focus:ring-1 focus:ring-red-500 dark:border-red-500'
                : 'border-gray-300 dark:border-gray-600',
            )}
            placeholder="email@example.com"
          />
          {errors.email && (
            <p className="absolute left-0 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Subject Field */}
      <div className="relative">
        <label htmlFor="subject" className="mb-2 block font-medium">
          {t('subject')}
        </label>
        <input
          id="subject"
          {...register('subject')}
          className={cn(
            'w-full rounded-lg border bg-white px-4 py-3 duration-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-700',
            errors.subject
              ? 'border-red-500 focus:ring-1 focus:ring-red-500 dark:border-red-500'
              : 'border-gray-300 dark:border-gray-600',
          )}
          placeholder={t('subjectPlaceholder')}
        />
        {errors.subject && (
          <p className="absolute left-0 text-sm text-red-500">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div className="relative">
        <label htmlFor="message" className="mb-2 block font-medium">
          {t('message')}
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className={cn(
            'h-26 max-h-40 min-h-26 w-full rounded-lg border bg-white px-4 py-3 duration-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-700',
            errors.message
              ? 'border-red-500 focus:ring-1 focus:ring-red-500 dark:border-red-500'
              : 'border-gray-300 dark:border-gray-600',
          )}
          placeholder={t('messagePlaceholder')}
        ></textarea>
        {errors.message && (
          <p className="absolute left-0 -mt-1 text-sm text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          'flex w-full cursor-pointer items-center justify-center rounded-lg px-6 py-3 text-white shadow-sm shadow-indigo-500/50 duration-300 hover:shadow-none',
          isSubmitting
            ? 'cursor-not-allowed bg-indigo-400'
            : 'bg-indigo-600 hover:bg-indigo-700',
        )}
      >
        {isSubmitting ? (
          <>
            <LuLoader size={18} className="mr-2 animate-spin" />
            {t('sending')}...
          </>
        ) : (
          <>
            <LuSend size={18} className="mr-2" />
            {t('sendMessage')}
          </>
        )}
      </button>
    </form>
  );
}
