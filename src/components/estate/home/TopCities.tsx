import Image from 'next/image';
import Link from 'next/link';

const cities = [
  {
    name: 'New York',
    image: '/img/estate/newYork.jpg',
    count: '2,345',
  },
  {
    name: 'Los Angeles',
    image: '/img/estate/losAngeles.jpg',
    count: '1,876',
  },
  {
    name: 'Miami',
    image: '/img/estate/miami.jpg',
    count: '1,432',
  },
  {
    name: 'Chicago',
    image: '/img/estate/chicago.jpg',
    count: '1,256',
  },
];

export default function TopCities() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Explore Top Cities
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cities.map((city) => (
            <Link
              href={`/estate/search?location=${city.name}&type=any&priceRange=any`}
              key={city.name}
              className="group relative h-64 overflow-hidden rounded-2xl shadow-md hover:shadow-xl"
            >
              <Image
                src={city.image}
                alt={city.name}
                layout="fill"
                objectFit="cover"
                className="duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
              <div className="absolute right-0 bottom-0 left-0 p-6 text-white">
                <h3 className="mb-1 text-xl font-bold">{city.name}</h3>
                <p className="text-sm text-gray-200">{city.count} properties</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
