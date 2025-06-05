import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface FilterDropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}
export default function FilterDropdown({
  label,
  options,
  value,
  onChange,
}: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full min-w-[120px] items-center justify-between rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-nowrap focus:ring-2 focus:ring-blue-500 focus:outline-none md:w-fit"
      >
        <span className="truncate overflow-ellipsis sm:max-w-[100px] lg:max-w-none">
          {label}: {value}
        </span>
        <FiChevronDown size={16} className="ml-2" />
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-full rounded-lg border border-gray-700 bg-gray-800 shadow-lg">
          <ul className="py-1">
            {options.map((option) => (
              <li key={option}>
                <button
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-700 ${value === option ? 'bg-gray-700' : ''}`}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
