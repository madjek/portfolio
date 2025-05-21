import Image from 'next/image';
import { FiFilter, FiPlus, FiSearch } from 'react-icons/fi';

const products = [
  {
    name: 'Wireless Earbuds Pro',
    category: 'Electronics',
    price: '$199.99',
    stock: 145,
    status: 'In Stock',
    image: '/img/ecommerce/earbuds.jpg',
  },
  {
    name: 'Smart Watch Series 5',
    category: 'Electronics',
    price: '$299.99',
    stock: 89,
    status: 'Low Stock',
    image: '/img/ecommerce/watch.jpg',
  },
  {
    name: 'Ultra-Wide Monitor',
    category: 'Electronics',
    price: '$699.99',
    stock: 0,
    status: 'Out of Stock',
    image: '/img/ecommerce/monitor.jpg',
  },
  {
    name: 'Mechanical Keyboard',
    category: 'Electronics',
    price: '$159.99',
    stock: 234,
    status: 'In Stock',
    image: '/img/ecommerce/keyboard.jpg',
  },
  {
    name: 'Gaming Mouse',
    category: 'Electronics',
    price: '$79.99',
    stock: 56,
    status: 'Low Stock',
    image: '/img/ecommerce/mouse.jpg',
  },
];
const getStatusColor = (status: string) => {
  switch (status) {
    case 'In Stock':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'Low Stock':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    case 'Out of Stock':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
    default:
      return '';
  }
};

export default function Products() {
  return (
    <div className="space-y-2 md:space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Product Catalog</h1>
        <button className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
          <FiPlus className="h-5 w-5" />
          Add Product
        </button>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm md:p-5 dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-6 flex flex-col items-center gap-2 md:flex-row md:justify-between md:gap-4">
          <div className="relative w-full flex-1">
            <FiSearch className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full rounded-lg border border-gray-300 bg-gray-100 py-2 pr-4 pl-10 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700"
            />
          </div>
          <div className="flex w-full gap-3 md:w-auto">
            <select className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Accessories</option>
            </select>
            <button className="flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
              <FiFilter className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-3.5 text-left text-xs font-medium tracking-wider uppercase">
                  Product
                </th>
                <th className="px-4 py-3.5 text-left text-xs font-medium tracking-wider uppercase">
                  Category
                </th>
                <th className="px-4 py-3.5 text-left text-xs font-medium tracking-wider uppercase">
                  Price
                </th>
                <th className="px-4 py-3.5 text-left text-xs font-medium tracking-wider uppercase">
                  Stock
                </th>
                <th className="px-4 py-3.5 text-left text-xs font-medium tracking-wider uppercase">
                  Status
                </th>
                <th className="px-4 py-3.5 text-right text-xs font-medium tracking-wider uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {products.map((product, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Image
                        width={100}
                        height={100}
                        className="h-10 w-10 rounded-lg object-cover"
                        src={product.image}
                        alt={product.name}
                      />
                      <div className="ml-4">
                        <div className="font-medium">{product.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm whitespace-nowrap">
                    {product.category}
                  </td>
                  <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                    {product.price}
                  </td>
                  <td className="px-4 py-4 text-sm whitespace-nowrap">
                    {product.stock}
                  </td>
                  <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <span
                      className={`rounded-full px-2 py-1 text-xs ${getStatusColor(product.status)}`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right text-sm whitespace-nowrap">
                    <button className="font-medium text-blue-500 hover:text-blue-600">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
