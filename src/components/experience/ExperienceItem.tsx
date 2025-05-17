import { WorkExperience } from '@/types/experience';
import Image from 'next/image';

export default function ExperienceItem({ job }: { job: WorkExperience }) {
  return (
    <div className="mb-2 md:mb-12">
      <div className="absolute -left-3 mt-6 h-6 w-6 rounded-full border-4 border-white bg-indigo-600 dark:border-gray-900"></div>
      <div className="rounded-xl bg-white p-6 shadow-lg md:ml-6 dark:bg-gray-800">
        <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-bold">{job.role}</h3>
            <p className="text-indigo-600 dark:text-indigo-400">
              {job.company}
            </p>
          </div>
          <div className="mt-2 md:mt-0">
            <span className="rounded-full bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
              {job.period}
            </span>
          </div>
        </div>
        <div className="flex items-start">
          <div className="mr-4 hidden h-16 w-16 flex-shrink-0 rounded-lg bg-gray-100 p-2 md:block dark:bg-gray-700">
            <Image
              width={100}
              height={100}
              src={job.logo}
              alt={job.company}
              className="h-full w-full object-contain"
            />
          </div>
          <p>{job.description}</p>
        </div>
      </div>
    </div>
  );
}
