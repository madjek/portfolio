import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

export default function TestimonialControls({
  count,
  currentIndex,
  onPrev,
  onNext,
  onSelect,
}: {
  count: number;
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="mt-8 flex items-center justify-center space-x-4">
      <button
        onClick={onPrev}
        className="cursor-pointer rounded-full bg-gray-200 p-2 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        aria-label="Previous testimonial"
      >
        <ChevronLeftIcon size={24} />
      </button>
      <div className="flex space-x-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index
                ? 'bg-indigo-600'
                : 'cursor-pointer bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
      <button
        onClick={onNext}
        className="cursor-pointer rounded-full bg-gray-200 p-2 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        aria-label="Next testimonial"
      >
        <ChevronRightIcon size={24} />
      </button>
    </div>
  );
}
