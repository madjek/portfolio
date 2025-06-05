'use client';

import { properties } from '@/constants/estate.constants';
import Link from 'next/link';
import { useState } from 'react';
import {
  FiCalendar,
  FiChevronDown,
  FiFolder,
  FiHeart,
  FiPlus,
  FiTrash,
} from 'react-icons/fi';
import PropertyCard from '../property/PropertyCard';

const SavedListings = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const savedProperties = properties.filter((property) => property.saved);
  const filteredProperties =
    activeCategory === 'all'
      ? savedProperties
      : savedProperties.filter(
          (property) => property.category === activeCategory,
        );
  const getPropertyCount = (category: string) => {
    if (category === 'all') return savedProperties.length;

    return savedProperties.filter((property) => property.category === category)
      .length;
  };
  const categories = [
    {
      id: 'all',
      name: 'All Saved',
      count: getPropertyCount('all'),
    },
    {
      id: 'favorites',
      name: 'Favorites',
      count: getPropertyCount('favorites'),
    },
    {
      id: 'for_later',
      name: 'For Later',
      count: getPropertyCount('for_later'),
    },
    {
      id: 'compare',
      name: 'Compare',
      count: getPropertyCount('compare'),
    },
  ];
  const handleRemove = (id: number) => {
    console.log('Remove property:', id);
  };
  const handleScheduleTour = (id: number) => {
    console.log('Schedule tour for property:', id);
  };
  const handleMoveToCategory = (id: number, category: string) => {
    console.log('Move property', id, 'to category:', category);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-start justify-between md:flex-row md:items-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 md:mb-0">
            Saved Listings
          </h1>
          {/* Mobile category selector */}
          <div className="relative w-full md:hidden">
            <button
              onClick={() => setShowCategoryMenu(!showCategoryMenu)}
              className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700"
            >
              <span>
                {categories.find((cat) => cat.id === activeCategory)?.name}
              </span>
              <FiChevronDown size={16} />
            </button>
            {showCategoryMenu && (
              <div className="absolute top-full right-0 left-0 z-10 mt-2 rounded-lg bg-white shadow-lg">
                <ul className="py-1">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => {
                          setActiveCategory(category.id);
                          setShowCategoryMenu(false);
                        }}
                        className={`block w-full px-4 py-2 text-left text-sm ${activeCategory === category.id ? 'bg-gray-100 text-blue-600' : 'text-gray-700'}`}
                      >
                        {category.name} ({category.count})
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Desktop category sidebar */}
          <div className="hidden md:block">
            <div className="overflow-hidden rounded-xl bg-white shadow-md">
              <ul>
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => setActiveCategory(category.id)}
                      className={`block w-full border-b border-gray-100 px-6 py-4 text-left ${activeCategory === category.id ? 'bg-blue-50 font-medium text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{category.name}</span>
                        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium">
                          {category.count}
                        </span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="p-6">
                <button className="flex items-center font-medium text-blue-600">
                  <FiPlus size={16} className="mr-2" />
                  Create New Category
                </button>
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {filteredProperties.map((property) => (
                  <div key={property.id} className="relative">
                    <PropertyCard property={property} />
                    <div className="absolute top-4 right-4 flex flex-col space-y-2">
                      <div className="group relative">
                        <button className="rounded-full bg-white p-2 shadow hover:bg-gray-100">
                          <FiFolder size={18} className="text-gray-600" />
                        </button>
                        <div className="invisible absolute top-0 right-full z-10 mr-2 w-32 rounded-lg bg-white p-2 shadow-lg group-hover:visible">
                          <ul className="space-y-1">
                            {categories
                              .filter(
                                (c) =>
                                  c.id !== 'all' && c.id !== property.category,
                              )
                              .map((category) => (
                                <li key={category.id}>
                                  <button
                                    onClick={() =>
                                      handleMoveToCategory(
                                        property.id,
                                        category.id,
                                      )
                                    }
                                    className="block w-full rounded px-2 py-1 text-left text-sm text-gray-700 hover:bg-gray-100"
                                  >
                                    Move to {category.name}
                                  </button>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                      <button
                        onClick={() => handleScheduleTour(property.id)}
                        className="rounded-full bg-white p-2 shadow hover:bg-gray-100"
                      >
                        <FiCalendar size={18} className="text-gray-600" />
                      </button>
                      <button
                        onClick={() => handleRemove(property.id)}
                        className="rounded-full bg-white p-2 shadow hover:bg-gray-100"
                      >
                        <FiTrash size={18} className="text-gray-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-xl bg-white p-12 text-center shadow-md">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-blue-100 p-4">
                    <FiHeart size={32} className="text-blue-600" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  No saved listings yet
                </h3>
                <p className="mb-6 text-gray-600">
                  Start exploring properties and save your favorites to find
                  them here.
                </p>
                <Link
                  href={'/estate/search'}
                  className="inline-block rounded-lg bg-blue-600 px-6 py-2 font-medium text-white duration-150 ease-in-out hover:bg-blue-700"
                >
                  Explore Properties
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SavedListings;
