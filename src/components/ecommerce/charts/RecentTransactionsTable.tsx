import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiXCircle,
} from 'react-icons/fi';

interface Transaction {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: 'Completed' | 'Processing' | 'Failed';
  date: string;
}

const transactions: Transaction[] = [
  {
    id: '#TRX-123456',
    customer: 'John Smith',
    product: 'Premium Headphones',
    amount: '$249.99',
    status: 'Completed',
    date: '2025-05-15',
  },
  {
    id: '#TRX-123457',
    customer: 'Emily Johnson',
    product: 'Wireless Keyboard',
    amount: '$89.99',
    status: 'Processing',
    date: '2025-05-15',
  },
  {
    id: '#TRX-123458',
    customer: 'Michael Brown',
    product: 'Smart Watch',
    amount: '$199.99',
    status: 'Completed',
    date: '2025-05-14',
  },
  {
    id: '#TRX-123459',
    customer: 'Sarah Wilson',
    product: 'Bluetooth Speaker',
    amount: '$129.99',
    status: 'Failed',
    date: '2025-05-14',
  },
  {
    id: '#TRX-123460',
    customer: 'David Lee',
    product: 'Laptop Backpack',
    amount: '$59.99',
    status: 'Completed',
    date: '2025-05-13',
  },
];
const getStatusIcon = (status: Transaction['status']) => {
  switch (status) {
    case 'Completed':
      return <FiCheckCircle className="mr-1.5 inline h-4 w-4" />;
    case 'Processing':
      return <FiClock className="mr-1.5 inline h-4 w-4" />;
    case 'Failed':
      return <FiXCircle className="mr-1.5 inline h-4 w-4" />;
    default:
      return null;
  }
};

export default function RecentTransactionsTable() {
  return (
    <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-3 shadow-sm md:p-5 dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Recent Transactions</h3>
        <button className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
          View All <FiArrowRight className="ml-1 h-4 w-4" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              {['ID', 'Customer', 'Product', 'Amount', 'Status', 'Date'].map(
                (header) => (
                  <th
                    key={header}
                    className="px-4 py-3.5 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-300"
                  >
                    {header}
                  </th>
                ),
              )}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                  {transaction.id}
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                  {transaction.customer}
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                  {transaction.product}
                </td>
                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                  {transaction.amount}
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                      transaction.status === 'Completed'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        : transaction.status === 'Processing'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                    }`}
                  >
                    {getStatusIcon(transaction.status)}
                    {transaction.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                  {transaction.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
