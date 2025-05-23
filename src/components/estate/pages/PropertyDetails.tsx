'use client';

import { properties } from '@/constants/estate.constants';
import { Property } from '@/interfaces/estate.interfaces';
import { capitalize } from '@/utils/capitalize';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  FiCalendar,
  FiCheckCircle,
  FiHeart,
  FiMapPin,
  FiMessageSquare,
  FiPhone,
  FiSquare,
} from 'react-icons/fi';
import { LuBath, LuBed } from 'react-icons/lu';
import PropertyGallery from '../property/PropertyGallery';
import MapView from '../search/MapView';

export default function PropertyDetails() {
  const { id } = useParams<{ id: string }>();

  if (!id) return <div>Property not found</div>;

  const property = properties.find((p) => p.id === parseInt(id)) as Property;

  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <PropertyGallery images={property.images} />
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-start justify-between">
              <h1 className="text-3xl font-bold text-gray-900">
                {property.title}
              </h1>
              <button className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200">
                <FiHeart size={24} />
              </button>
            </div>
            <div className="mb-6 flex items-center text-gray-600">
              <FiMapPin size={18} className="mr-2" />
              <span>{property.location}</span>
            </div>
            <div className="mb-8 flex flex-wrap gap-4">
              <div className="flex items-center rounded-lg bg-gray-100 px-4 py-2 text-blue-600">
                <LuBed size={18} className="mr-2" />
                <span>{property.beds} Beds</span>
              </div>
              <div className="flex items-center rounded-lg bg-gray-100 px-4 py-2 text-blue-600">
                <LuBath size={18} className="mr-2" />
                <span>{property.baths} Baths</span>
              </div>
              <div className="flex items-center rounded-lg bg-gray-100 px-4 py-2 text-blue-600">
                <FiSquare size={18} className="mr-2" />
                <span>{property.area}</span>
              </div>
              {property.has3DTour && (
                <div className="flex items-center rounded-lg bg-purple-100 px-4 py-2 text-purple-700">
                  <span>3D Tour Available</span>
                </div>
              )}
              {property.isVerified && (
                <div className="flex items-center rounded-lg bg-green-100 px-4 py-2 text-green-700">
                  <FiCheckCircle size={18} className="mr-2" />
                  <span>Verified</span>
                </div>
              )}
            </div>
            <div className="mb-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900">
                Description
              </h2>
              <p className="leading-relaxed text-gray-700">
                {property.description}
              </p>
            </div>
            <div className="mb-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900">
                Property Details
              </h2>
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 md:grid-cols-3">
                <div>
                  <p className="text-gray-500">Property Type</p>
                  <p className="font-medium text-gray-900">
                    {capitalize(property.type)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Year Built</p>
                  <p className="font-medium text-gray-900">
                    {property.yearBuilt}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Lot Size</p>
                  <p className="font-medium text-gray-900">
                    {property.lotSize}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Heating</p>
                  <p className="font-medium text-gray-900">
                    {property.heating}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Cooling</p>
                  <p className="font-medium text-gray-900">
                    {property.cooling}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Garage</p>
                  <p className="font-medium text-gray-900">{property.garage}</p>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900">Features</h2>
              <div className="grid grid-cols-2 gap-y-4 sm:grid-cols-3">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-blue-600">
                    <FiCheckCircle size={18} className="mr-2" />
                    <span>{capitalize(feature)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900">Location</h2>
              <div className="h-80 overflow-hidden rounded-xl bg-gray-200">
                {/* <iframe
                  title="Map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${property.coordinates.lng - 0.01},${property.coordinates.lat - 0.01},${property.coordinates.lng + 0.01},${property.coordinates.lat + 0.01}&amp;layer=mapnik`}
                  style={{
                    border: 0,
                  }}
                /> */}
                <MapView properties={[property]} point />
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-20 mb-6 rounded-xl bg-white p-6 shadow-md">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold text-blue-600">
                  {property.price}
                </h3>
              </div>
              <div className="mb-6 border-t border-b border-gray-200 py-6">
                <div className="mb-4 flex items-center">
                  <Image
                    width={100}
                    height={100}
                    src={property.agent.image}
                    alt={property.agent.name}
                    className="mr-4 h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {property.agent.name}
                    </h4>
                    <p className="text-gray-600">Listing Agent</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Link
                    href={`tel:${property.agent.phone}`}
                    className="flex items-center text-gray-700 hover:text-blue-600"
                  >
                    <FiPhone size={18} className="mr-2" />
                    {property.agent.phone}
                  </Link>
                  <Link
                    href={`mailto:${property.agent.email}`}
                    className="flex items-center text-gray-700 hover:text-blue-600"
                  >
                    <FiMessageSquare size={18} className="mr-2" />
                    {property.agent.email}
                  </Link>
                </div>
              </div>
              <button className="mb-3 flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition duration-150 ease-in-out hover:bg-blue-700">
                <FiCalendar size={18} className="mr-2" />
                Schedule a Tour
              </button>
              <button className="mb-3 flex w-full items-center justify-center rounded-lg border border-blue-600 bg-white px-4 py-3 font-medium text-blue-600 transition duration-150 ease-in-out hover:bg-blue-50">
                <FiMessageSquare size={18} className="mr-2" />
                Contact Agent
              </button>
              <button className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50">
                <FiHeart size={18} className="mr-2" />
                Save Listing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
