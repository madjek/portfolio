import Image from 'next/image';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'First-time Homebuyer',
    image: '/img/estate/w1.jpg',
    content:
      'ProEstate made finding my first home incredibly easy. The virtual tours saved me so much time, and I found the perfect place within two weeks!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Property Investor',
    image: '/img/estate/m1.jpg',
    content:
      "As someone who buys multiple properties a year, the map search and filters on ProEstate are game-changers. I've recommended it to all my colleagues.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Relocating Professional',
    image: '/img/estate/w2.jpg',
    content:
      "Moving across the country was stressful, but ProEstate's 3D tours allowed me to find and secure a new home before I even arrived in the city.",
    rating: 4,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="overflow-x-hidden bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          What Our Clients Say
        </h2>
        <div className="relative">
          <div className="flex overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`w-full flex-shrink-0 transform duration-300 ease-in-out ${index === currentIndex ? 'translate-x-0 opacity-100' : 'absolute translate-x-full opacity-0'}`}
              >
                <div className="rounded-2xl bg-white p-8 shadow-md md:p-10">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="mb-6 flex-shrink-0 md:mr-8 md:mb-0">
                      <Image
                        width={100}
                        height={100}
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-20 w-20 rounded-full border-4 border-blue-100 object-cover"
                      />
                    </div>
                    <div>
                      <div className="mb-2 flex">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            size={18}
                            className={
                              i < testimonial.rating
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }
                            fill={
                              i < testimonial.rating ? 'currentColor' : 'none'
                            }
                          />
                        ))}
                      </div>
                      <blockquote className="mb-4 text-lg text-gray-700 italic md:text-xl">
                        &quot;{testimonial.content}&quot;
                      </blockquote>
                      <div>
                        <p className="font-bold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="rounded-full bg-white p-2 text-gray-600 shadow hover:bg-gray-100"
            >
              <FiChevronLeft size={20} />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="rounded-full bg-white p-2 text-gray-600 shadow hover:bg-gray-100"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
