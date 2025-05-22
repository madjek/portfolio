import { cn } from '@/utils/cn';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';

interface KPICardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  iconColor: string;
}

export default function KPICard({
  title,
  value,
  change,
  icon,
  iconColor,
}: KPICardProps) {
  const isPositive = change >= 0;

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm md:p-5 dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4 flex items-start justify-between">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {title}
        </h3>
        <div
          className={cn(
            'rounded-lg bg-gray-100 p-2 dark:bg-gray-700',
            iconColor,
          )}
        >
          {icon}
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold">{value}</span>
        <div className="mt-2 flex items-center">
          <span
            className={`flex items-center text-sm ${
              isPositive ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {isPositive ? (
              <FiArrowUp className="mr-1 h-4 w-4" />
            ) : (
              <FiArrowDown className="mr-1 h-4 w-4" />
            )}
            {Math.abs(change)}%
          </span>
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
            vs last month
          </span>
        </div>
      </div>
    </div>
  );
}
