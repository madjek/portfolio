'use client';

import { properties } from '@/constants/estate.constants';
import { useIsMobile } from '@/hooks/useIsMobile';
import { Filter } from '@/interfaces/estate.interfaces';
import { cn } from '@/utils/cn';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  FiChevronDown,
  FiGrid,
  FiList,
  FiMap,
  FiSliders,
} from 'react-icons/fi';
import PropertyCard from '../property/PropertyCard';
import FilterPanel from '../search/FilterPanel';
import MapView from '../search/MapView';

export default function Search() {
  const searchParams = useSearchParams();
  const searchParamsObj = Object.fromEntries(
    Array.from(searchParams.entries()),
  );
  const {
    location,
    type,
    priceRange,
    bedrooms,
    bathrooms,
    features,
    has3DTour,
  } = searchParamsObj;
  const isMobile = useIsMobile();
  const [viewMode, setViewMode] = useState<'split' | 'list' | 'map'>('split');
  const [sortBy, setSortBy] = useState('newest');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [filters, setFilters] = useState<Filter>({} as Filter);
  const handleFilterChange = (filters: Filter) => {
    setFilters(filters);
  };
  const handleSortChange = (value: string) => {
    setSortBy(value);
    setShowSortDropdown(false);
  };
  const getFilteredAndSortedProperties = () => {
    const isEmptyOrNullArray = (arr?: unknown[]) =>
      !arr || arr.length === 0 || arr.every((val) => val == null);
    const noFiltersApplied =
      isEmptyOrNullArray(filters.type) &&
      !filters.bedrooms &&
      !filters.bathrooms &&
      !filters.priceRange &&
      isEmptyOrNullArray(filters.features) &&
      !filters.has3DTour;
    const filtered = noFiltersApplied
      ? properties
      : properties.filter(
          (p) =>
            (!filters.type?.length ||
              (p.type && filters.type.some((t) => p.type.includes(t)))) &&
            (!filters.bedrooms || parseInt(filters.bedrooms, 10) <= p.beds) &&
            (!filters.bathrooms ||
              parseInt(filters.bathrooms, 10) <= p.baths) &&
            (!filters.priceRange ||
              (parseInt(p.price.replace(/[$,]/g, ''), 10) >=
                parseInt(filters.priceRange.split('-')[0], 10) &&
                parseInt(p.price.replace(/[$,]/g, ''), 10) <=
                  parseInt(
                    filters.priceRange.split('-')[1] || 'Infinity',
                    10,
                  ))) &&
            (!filters?.features?.length ||
              filters.features.every((f) => p.features?.includes(f))) &&
            (!filters.has3DTour || p.has3DTour),
        );

    return filtered.sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[$,]/g, ''), 10);
      const priceB = parseInt(b.price.replace(/[$,]/g, ''), 10);

      switch (sortBy) {
        case 'price_low_high':
          return priceA - priceB;
        case 'price_high_low':
          return priceB - priceA;
        case 'newest':
          return b.id - a.id;
        default:
          return 0;
      }
    });
  };

  useEffect(() => {
    const normalizeArray = (
      value: string | string[] | null | undefined,
    ): string[] => {
      if (!value || value === 'null') return [];

      return Array.isArray(value) ? value.filter(Boolean) : [value];
    };

    setFilters({
      location: location || '',
      type: normalizeArray(type),
      priceRange: priceRange || '',
      bedrooms: bedrooms || '',
      bathrooms: bathrooms || '',
      features: normalizeArray(features),
      has3DTour: has3DTour === 'true',
    });
  }, [location, type, priceRange, bedrooms, bathrooms, features, has3DTour]);

  useEffect(() => {
    if (isMobile) {
      setViewMode('list');
    }
  }, [isMobile]);

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col items-start justify-between md:flex-row md:items-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 md:mb-0">
            Properties in <span className="text-blue-600">Los Angeles, CA</span>
          </h1>
          <div className="flex items-center space-x-4">
            <div className="flex overflow-hidden rounded-lg border border-gray-300">
              <button
                onClick={() => setViewMode('list')}
                className={cn(
                  'p-2',
                  viewMode === 'list'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700',
                )}
              >
                <FiList size={20} />
              </button>
              <button
                onClick={() => setViewMode('split')}
                className={cn(
                  'p-2',
                  viewMode === 'split'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700',
                  isMobile && 'hidden',
                )}
              >
                <FiGrid size={20} />
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={cn(
                  'p-2',
                  viewMode === 'map'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700',
                )}
              >
                <FiMap size={20} />
              </button>
            </div>
            <div className="relative">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700"
              >
                <FiSliders size={16} className="mr-2" />
                Sort
                <FiChevronDown size={16} className="ml-2" />
              </button>
              {showSortDropdown && (
                <div className="absolute right-0 z-10 mt-2 w-48 rounded-lg bg-white shadow-lg">
                  <ul className="py-1">
                    <li>
                      <button
                        onClick={() => handleSortChange('newest')}
                        className={`block w-full px-4 py-2 text-left text-sm ${sortBy === 'newest' ? 'bg-gray-100 text-blue-600' : 'text-gray-700'}`}
                      >
                        Newest
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleSortChange('price_high_low')}
                        className={`block w-full px-4 py-2 text-left text-sm ${sortBy === 'price_high_low' ? 'bg-gray-100 text-blue-600' : 'text-gray-700'}`}
                      >
                        Price: High to Low
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleSortChange('price_low_high')}
                        className={`block w-full px-4 py-2 text-left text-sm ${sortBy === 'price_low_high' ? 'bg-gray-100 text-blue-600' : 'text-gray-700'}`}
                      >
                        Price: Low to High
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleSortChange('distance')}
                        className={`block w-full px-4 py-2 text-left text-sm ${sortBy === 'distance' ? 'bg-gray-100 text-blue-600' : 'text-gray-700'}`}
                      >
                        Distance
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
        {viewMode === 'split' && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="custom-scrollbar h-[70vh] space-y-6 overflow-x-hidden overflow-y-scroll">
              {getFilteredAndSortedProperties().length > 0 ? (
                getFilteredAndSortedProperties().map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))
              ) : (
                <div className="flex items-center justify-center">
                  <p className="font-semibold text-gray-700">
                    No properties found
                  </p>
                </div>
              )}
            </div>
            <div className="sticky top-20 hidden h-[70vh] lg:block">
              <MapView properties={getFilteredAndSortedProperties()} />
            </div>
          </div>
        )}
        {viewMode === 'list' && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {getFilteredAndSortedProperties().map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
        {viewMode === 'map' && (
          <div className="h-[70vh]">
            <MapView properties={getFilteredAndSortedProperties()} />
          </div>
        )}
      </div>
    </div>
  );
}
