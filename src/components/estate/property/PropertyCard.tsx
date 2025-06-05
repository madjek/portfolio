import { Property } from '@/interfaces/estate.interfaces';
import Image from 'next/image';
import Link from 'next/link';
import { FiHeart, FiSquare } from 'react-icons/fi';
import { LuBath, LuBed } from 'react-icons/lu';

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md">
      <div className="relative">
        <Image
          width={400}
          height={200}
          src={property.image}
          alt={property.title}
          className="h-64 w-full object-cover duration-300 group-hover:scale-[1.05]"
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
      <div className="grid flex-1 content-between p-6">
        <div>
          <div className="mb-2 flex items-start justify-between">
            <h3 className="text-xl font-bold text-gray-900">
              {property.title}
            </h3>
            <span className="text-lg font-bold text-blue-600">
              {property.price}
            </span>
          </div>
          <p className="mb-4 text-gray-600">{property.location}</p>
        </div>

        <div>
          <div className="grid grid-cols-3 gap-1 border-t border-gray-100 pt-4 text-center">
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
            className="mt-4 block rounded-lg bg-gray-100 px-4 py-2 text-center font-medium text-blue-600 duration-150 ease-in-out hover:bg-gray-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
