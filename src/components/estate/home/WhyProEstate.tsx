import { FiMapPin, FiSliders } from 'react-icons/fi';
import { MdOutlineVrpano } from 'react-icons/md';

const features = [
  {
    icon: <FiMapPin size={28} className="text-blue-600" />,
    title: 'Map Search',
    description:
      'Find properties with our interactive map search feature. Explore neighborhoods and discover homes in your desired location.',
  },
  {
    icon: <FiSliders size={28} className="text-blue-600" />,
    title: 'Smart Filters',
    description:
      "Use our intelligent filters to narrow down your search. Find exactly what you're looking for with customizable criteria.",
  },
  {
    icon: <MdOutlineVrpano size={28} className="text-blue-600" />,
    title: 'Virtual Tours',
    description:
      'Experience properties remotely with immersive 3D virtual tours. Explore every corner before scheduling an in-person visit.',
  },
];
export default function WhyProEstate() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Why Choose ProEstate?
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Discover how our innovative features make finding your dream
            property easier than ever before.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gray-50 p-8 text-center transition-transform hover:scale-105 hover:shadow-lg"
            >
              <div className="mb-4 flex justify-center">
                <div className="rounded-xl bg-blue-100 p-3">{feature.icon}</div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
