import React from 'react';
import {
  FiBookOpen,
  FiFileText,
  FiMessageCircle,
  FiPhone,
  FiPlayCircle,
  FiSearch,
} from 'react-icons/fi';

interface Resource {
  title: string;
  description: string;
  icon: React.ReactElement;
}

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'How do I reset my password?',
    answer:
      'To reset your password, click on the "Forgot Password" link on the login page. Follow the instructions sent to your email to create a new password.',
  },
  {
    question: 'How can I update my billing information?',
    answer:
      'Go to Settings > Billing and click on "Update Payment Method". You can then enter your new billing details.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. For enterprise customers, we also support wire transfers.',
  },
  {
    question: 'How do I export my data?',
    answer:
      'You can export your data from the Analytics page by clicking the "Export Report" button. Choose your preferred format (CSV or PDF).',
  },
];
const resources: Resource[] = [
  {
    title: 'Getting Started Guide',
    description: 'Learn the basics of using our platform',
    icon: <FiPlayCircle />,
  },
  {
    title: 'Documentation',
    description: 'Detailed guides and API reference',
    icon: <FiFileText />,
  },
  {
    title: 'Video Tutorials',
    description: 'Step-by-step video instructions',
    icon: <FiBookOpen />,
  },
];

export default function Help() {
  const ResourceCard = ({ title, description, icon }: Resource) => (
    <div className="cursor-pointer rounded-lg border border-gray-200 bg-white p-3 hover:border-blue-500 md:p-5 dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4 inline-block rounded-lg bg-blue-50 p-3 dark:bg-gray-700">
        {React.cloneElement(icon, {
          className: 'h-6 w-6 text-blue-500 dark:text-blue-400',
        } as React.HTMLAttributes<HTMLElement>)}
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
  const FAQItem = ({ question, answer }: FAQ) => (
    <div className="rounded-lg border border-gray-200 p-3 md:p-4 dark:border-gray-700">
      <h3 className="mb-2 font-medium">{question}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{answer}</p>
    </div>
  );
  const SupportCard = ({
    icon,
    title,
    description,
    buttonText,
  }: {
    icon: React.ReactElement;
    title: string;
    description: string;
    buttonText: string;
  }) => (
    <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm md:p-5 dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4 flex items-center gap-2 md:gap-4">
        <div className="rounded-lg bg-blue-50 p-3 dark:bg-gray-700">
          {React.cloneElement(icon, {
            className: 'h-6 w-6 text-blue-500 dark:text-blue-400',
          } as React.HTMLAttributes<HTMLElement>)}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
      <button className="mt-4 w-full rounded-md border border-gray-200 px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700">
        {buttonText}
      </button>
    </div>
  );

  return (
    <div className="space-y-2 md:space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Help Center</h1>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Contact Support
        </button>
      </div>

      <div className="relative">
        <FiSearch className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
        <input
          type="text"
          placeholder="Search for help..."
          className="w-full rounded-lg border border-gray-300 bg-white py-3 pr-4 pl-12 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
        />
      </div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-6">
        {resources.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm md:p-5 dark:border-gray-700 dark:bg-gray-800">
        <h2 className="mb-6 text-xl font-semibold">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6">
        <SupportCard
          icon={<FiMessageCircle />}
          title="Live Chat Support"
          description="Available Monday to Friday, 9AM-5PM EST"
          buttonText="Start Chat Session"
        />
        <SupportCard
          icon={<FiPhone />}
          title="Phone Support"
          description="Call us at +1 (555) 123-4567"
          buttonText="Request Call Back"
        />
      </div>
    </div>
  );
}
