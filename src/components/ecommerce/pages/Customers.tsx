import { FiMail, FiMapPin, FiPhone, FiSearch, FiUser } from 'react-icons/fi';

const customers = [
  {
    name: 'Emma Thompson',
    email: 'emma.t@example.com',
    location: 'New York, USA',
    phone: '+1 (555) 123-4567',
    orders: 12,
    spent: '$1,245.00',
    status: 'Active',
  },
  {
    name: 'James Wilson',
    email: 'james.w@example.com',
    location: 'London, UK',
    phone: '+44 20 7123 4567',
    orders: 8,
    spent: '$876.50',
    status: 'Active',
  },
  {
    name: 'Maria Garcia',
    email: 'maria.g@example.com',
    location: 'Madrid, Spain',
    phone: '+34 912 345 678',
    orders: 15,
    spent: '$1,567.25',
    status: 'Active',
  },
  {
    name: 'Liu Wei',
    email: 'liu.w@example.com',
    location: 'Shanghai, China',
    phone: '+86 21 1234 5678',
    orders: 6,
    spent: '$654.00',
    status: 'Inactive',
  },
  {
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    location: 'Toronto, Canada',
    phone: '+1 (416) 123-4567',
    orders: 10,
    spent: '$932.75',
    status: 'Active',
  },
];

export default function Customers() {
  return (
    <div className="space-y-2 md:space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Customer Management</h1>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
          Add New Customer
        </button>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-4 flex flex-col items-center justify-between gap-2 md:flex-row md:gap-4">
          <div className="relative w-full flex-1">
            <FiSearch className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            <input
              type="text"
              placeholder="Search customers..."
              className="w-full rounded-lg border border-gray-300 bg-gray-100 py-2 pr-4 pl-10 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700"
            />
          </div>
          <div className="flex w-full gap-3 md:w-auto">
            <select className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">
              <option>All Customers</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <select className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">
              <option>Sort by: Name</option>
              <option>Sort by: Orders</option>
              <option>Sort by: Spent</option>
            </select>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-600 dark:bg-gray-700"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-gray-100 p-2 dark:bg-gray-600">
                  <FiUser className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold">{customer.name}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {customer.orders} orders · {customer.spent}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <FiMail className="h-4 w-4 text-gray-400" />
                  <span>{customer.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FiPhone className="h-4 w-4 text-gray-400" />
                  <span>{customer.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FiMapPin className="h-4 w-4 text-gray-400" />
                  <span>{customer.location}</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span
                  className={`rounded-full px-2 py-1 text-xs ${
                    customer.status === 'Active'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                  }`}
                >
                  {customer.status}
                </span>
                <button className="text-blue-500 hover:text-blue-600">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
