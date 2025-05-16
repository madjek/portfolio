import { Testimonial } from '@/types/testimonials';
import { QuoteIcon } from 'lucide-react';
import Image from 'next/image';

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <div className="relative rounded-xl bg-white p-6 shadow-lg md:p-8 dark:bg-gray-800">
      <div className="absolute -top-6 left-10 text-indigo-500">
        <QuoteIcon size={48} />
      </div>
      <div className="pt-6">
        <p className="mb-6 text-lg italic md:text-xl">
          &quot;{testimonial.text}&quot;
        </p>
        <div className="flex items-center">
          <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
            <Image
              width={100}
              height={100}
              src={testimonial.image}
              alt={testimonial.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold">{testimonial.name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
