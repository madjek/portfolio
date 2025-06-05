import {
  bathroomOptions,
  bedroomOptions,
  featuresList,
  priceRanges,
  PropertyTypes,
} from '@/constants/estate.constants';
import { useIsMobile } from '@/hooks/useIsMobile';
import { Filter } from '@/interfaces/estate.interfaces';
import { capitalize } from '@/utils/capitalize';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiChevronDown, FiChevronUp, FiFilter } from 'react-icons/fi';

const defaultFilters: Filter = {
  type: [],
  priceRange: '',
  bedrooms: '',
  bathrooms: '',
  features: [],
  has3DTour: false,
};

export default function FilterPanel({
  filters,
  onFilterChange,
}: {
  filters: Filter;
  onFilterChange: (filter: Filter) => void;
}) {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);
  const [filtersConfig, setFilters] = useState<Filter>(defaultFilters);
  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    filterKey: keyof Filter,
  ) => {
    const { value, checked } = e.target;
    const currentValue = filtersConfig[filterKey];

    if (Array.isArray(currentValue)) {
      const newValues = checked
        ? [...currentValue, value]
        : currentValue.filter((v) => v !== value);

      setFilters({
        ...filtersConfig,
        [filterKey]: newValues,
      });
    } else {
      setFilters({
        ...filtersConfig,
        [filterKey]: checked,
      });
    }
  };
  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    filterKey: keyof Filter,
  ) => {
    setFilters({
      ...filtersConfig,
      [filterKey]: e.target.value,
    });
  };
  const applyFilters = () => {
    const cleanedFilters = Object.entries(filtersConfig)
      .filter(
        ([_, value]) =>
          value !== undefined &&
          value !== null &&
          value !== '' &&
          value !== false,
      )
      .reduce(
        (acc, [key, value]) => {
          if (Array.isArray(value)) {
            if (value.length > 0) {
              acc[key] = value.join(',');
            }
          } else {
            acc[key] = value;
          }

          return acc;
        },
        {} as Record<string, string>,
      );
    const params = new URLSearchParams(cleanedFilters);

    onFilterChange(filtersConfig);

    if (isMobile) setIsExpanded(false);

    router.replace(`/estate/search?${params.toString()}`);
  };
  const clearFilters = () => {
    const resetFilters = {
      type: [],
      priceRange: '',
      bedrooms: '',
      bathrooms: '',
      features: [],
      has3DTour: false,
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);

    if (isMobile) setIsExpanded(false);

    router.push('/estate/search');
  };

  useEffect(() => {
    setFilters({
      type: filters.type || [],
      priceRange: filters.priceRange || '',
      bedrooms: filters.bedrooms || '',
      bathrooms: filters.bathrooms || '',
      features: filters.features || [],
      has3DTour: filters.has3DTour || false,
    });
  }, [filters]);

  return (
    <div className="mb-6 overflow-hidden rounded-xl bg-white shadow-md">
      <button
        className="flex w-full cursor-pointer items-center justify-between p-4"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-controls="filter-content"
      >
        <div className="flex items-center font-medium text-gray-900">
          <FiFilter size={18} className="mr-2" />
          Filters
        </div>
        {isExpanded ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
      </button>

      {isExpanded && (
        <div id="filter-content" className="border-t border-gray-100 p-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Price Range */}
            <div>
              <h4 className="mb-2 font-medium text-gray-900">Price Range</h4>
              <select
                name="priceRange"
                value={filtersConfig.priceRange}
                onChange={(e) => handleSelectChange(e, 'priceRange')}
                className="block w-full rounded-lg border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Bedrooms */}
            <div>
              <h4 className="mb-2 font-medium text-gray-900">Bedrooms</h4>
              <select
                name="bedrooms"
                value={filtersConfig.bedrooms}
                onChange={(e) => handleSelectChange(e, 'bedrooms')}
                className="block w-full rounded-lg border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              >
                {bedroomOptions.map((count) => (
                  <option key={count} value={count}>
                    {count || 'Any'}
                    {count && '+'}
                  </option>
                ))}
              </select>
            </div>

            {/* Bathrooms */}
            <div>
              <h4 className="mb-2 font-medium text-gray-900">Bathrooms</h4>
              <select
                name="bathrooms"
                value={filtersConfig.bathrooms}
                onChange={(e) => handleSelectChange(e, 'bathrooms')}
                className="block w-full rounded-lg border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              >
                {bathroomOptions.map((count) => (
                  <option key={count} value={count}>
                    {count || 'Any'}
                    {count && '+'}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Type */}
            <div>
              <h4 className="mb-2 font-medium text-gray-900">Property Type</h4>
              <div className="space-y-2">
                {PropertyTypes.map((type) => (
                  <label key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      name="type"
                      value={type.toLowerCase()}
                      checked={filtersConfig.type?.includes(type.toLowerCase())}
                      onChange={(e) => handleCheckboxChange(e, 'type')}
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">
                      {capitalize(type)}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="mb-2 font-medium text-gray-900">Features</h4>
              <div className="space-y-2">
                {featuresList.map((feature) => (
                  <label key={feature} className="flex items-center">
                    <input
                      type="checkbox"
                      name="features"
                      value={feature.toLowerCase()}
                      checked={filtersConfig.features?.includes(
                        feature.toLowerCase(),
                      )}
                      onChange={(e) => handleCheckboxChange(e, 'features')}
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">
                      {capitalize(feature)}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 3D Tour */}
            <div>
              <h4 className="mb-2 font-medium text-gray-900">Virtual Tour</h4>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="has3DTour"
                  checked={filtersConfig.has3DTour}
                  onChange={(e) => handleCheckboxChange(e, 'has3DTour')}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">3D Tour Available</span>
              </label>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-4">
            <button
              onClick={clearFilters}
              className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              Clear All
            </button>
            <button
              onClick={applyFilters}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
