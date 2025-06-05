import { properties } from '@/constants/estate.constants';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  FiChevronLeft,
  FiChevronRight,
  FiHeart,
  FiSquare,
} from 'react-icons/fi';
import { LuBath, LuBed } from 'react-icons/lu';

export default function FeaturedProperties() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayedProperties = properties.slice(currentIndex, currentIndex + 3);
  const nextProperties = () => {
    if (currentIndex + 3 < properties.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  const prevProperties = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(properties.length - 3);
    }
  };

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Properties
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={prevProperties}
              className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={nextProperties}
              className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedProperties.map((property) => (
            <div
              key={property.id}
              className="overflow-hidden rounded-2xl bg-white shadow-md hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="relative">
                <Image
                  width={600}
                  height={400}
                  src={property.image}
                  alt={property.title}
                  className="h-64 w-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <button className="rounded-full bg-white p-2 shadow hover:bg-gray-100">
                    <FiHeart size={20} className="text-gray-600" />
                  </button>
                </div>
                <div className="absolute top-4 left-4 flex space-x-2">
                  {property.isNew && (
                    <span className="rounded-md bg-blue-600 px-2 py-1 text-xs font-semibold text-white">
                      New
                    </span>
                  )}
                  {property.priceReduced && (
                    <span className="rounded-md bg-green-600 px-2 py-1 text-xs font-semibold text-white">
                      Reduced
                    </span>
                  )}
                  {property.has3DTour && (
                    <span className="rounded-md bg-purple-600 px-2 py-1 text-xs font-semibold text-white">
                      3D Tour
                    </span>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-xl font-bold text-gray-900">
                    {property.title}
                  </h3>
                  <span className="text-lg font-bold text-blue-600">
                    {property.price}
                  </span>
                </div>
                <p className="mb-4 text-gray-600">{property.location}</p>
                <div className="flex justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center text-gray-600">
                    <LuBed size={18} className="mr-1" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <LuBath size={18} className="mr-1" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FiSquare size={18} className="mr-1" />
                    <span>{property.area}</span>
                  </div>
                </div>
                <Link
                  href={`/estate/property/${property.id}`}
                  className="mt-4 block rounded-lg bg-gray-100 px-4 py-2 text-center font-medium text-blue-600 transition duration-150 ease-in-out hover:bg-gray-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href={'/estate/search'}
            className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
          >
            View all properties
            <FiChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
