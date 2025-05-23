'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FiDollarSign, FiHome, FiSearch } from 'react-icons/fi';

export default function SearchBar() {
  const router = useRouter();
  const [search, setSearch] = useState({
    location: '',
    type: '',
    priceRange: '',
  });
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanedSearch = Object.entries(search)
      .filter(
        ([_, value]) => value !== undefined && value !== null && value !== '',
      )
      .reduce(
        (acc, [key, value]) => {
          acc[key] = Array.isArray(value) ? value.join(',') : value;

          return acc;
        },
        {} as Record<string, string>,
      );
    const params = new URLSearchParams(cleanedSearch);
    router.push(`/estate/search?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-5xl rounded-xl bg-white p-4 shadow-lg">
      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FiSearch size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={search.location ?? ''}
                onChange={(e) =>
                  setSearch({ ...search, location: e.target.value })
                }
                placeholder="City, neighborhood, or address"
                className="block w-full rounded-lg border-gray-300 bg-gray-50 py-2 pr-3 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FiHome size={18} className="text-gray-400" />
              </div>
              <select
                value={search.type ?? ''}
                onChange={(e) => setSearch({ ...search, type: e.target.value })}
                className="block w-full rounded-lg border-gray-300 bg-gray-50 py-2 pr-3 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="any">Any Property Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
                <option value="land">Land</option>
              </select>
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FiDollarSign size={18} className="text-gray-400" />
              </div>
              <select
                value={search.priceRange ?? ''}
                onChange={(e) =>
                  setSearch({ ...search, priceRange: e.target.value })
                }
                className="block w-full rounded-lg border-gray-300 bg-gray-50 py-2 pr-3 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="any">Any Price Range</option>
                <option value="0-100000">Under $100,000</option>
                <option value="100000-250000">$100,000 - $250,000</option>
                <option value="250000-500000">$250,000 - $500,000</option>
                <option value="500000-750000">$500,000 - $750,000</option>
                <option value="750000-1000000">$750,000 - $1,000,000</option>
                <option value="1000000+">$1,000,000+</option>
              </select>
            </div>
          </div>
          <div className="md:col-span-1">
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-blue-700"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
