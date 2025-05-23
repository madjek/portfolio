'use client';

import { properties } from '@/constants/estate.constants';
import { Property } from '@/interfaces/estate.interfaces';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';
import PropertyCard from '../property/PropertyCard';

const Recommendations = () => {
  const handleLike = (id: number) => {
    console.log('Like property:', id);
  };
  const handleDislike = (id: number) => {
    console.log('Dislike property:', id);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-2 text-2xl font-bold text-gray-900">
            Smart Recommendations
          </h1>
          <p className="text-gray-600">
            Based on your search history and saved properties, we think
            you&apos;ll love these homes.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <div key={property.id} className="relative">
              <div className="absolute top-4 left-4 z-10 rounded bg-blue-600 px-3 py-1 text-sm font-bold text-white">
                {property.matchScore}% Match
              </div>
              <PropertyCard property={property as Property} />
              <div className="-mt-1 flex justify-between rounded-xl border-t border-gray-100 bg-white px-6 py-3 shadow-md">
                <button
                  onClick={() => handleDislike(property.id)}
                  className="flex items-center text-gray-500 hover:text-red-600"
                >
                  <FiThumbsDown size={18} className="mr-1" />
                  Not for me
                </button>
                <button
                  onClick={() => handleLike(property.id)}
                  className="flex items-center text-gray-500 hover:text-green-600"
                >
                  <FiThumbsUp size={18} className="mr-1" />
                  Great match
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <h2 className="mb-6 text-xl font-bold text-gray-900">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {properties.slice(2, 6).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recommendations;
