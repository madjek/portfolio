import { FiDroplet } from 'react-icons/fi';
import { LuUtensils } from 'react-icons/lu';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function Nutrition() {
  // Mock data
  const macroData = [
    {
      name: 'Protein',
      value: 35,
    },
    {
      name: 'Carbs',
      value: 45,
    },
    {
      name: 'Fats',
      value: 20,
    },
  ];
  const COLORS = ['#3B82F6', '#10B981', '#F97316'];
  const meals = [
    {
      type: 'Breakfast',
      time: '8:00 AM',
      items: ['Oatmeal with berries', 'Greek yogurt', 'Coffee'],
      calories: 420,
      protein: 15,
      carbs: 65,
      fats: 12,
    },
    {
      type: 'Lunch',
      time: '1:00 PM',
      items: ['Grilled chicken salad', 'Quinoa', 'Olive oil dressing'],
      calories: 580,
      protein: 45,
      carbs: 35,
      fats: 22,
    },
    {
      type: 'Dinner',
      time: '7:00 PM',
      items: ['Salmon', 'Brown rice', 'Steamed vegetables'],
      calories: 650,
      protein: 42,
      carbs: 55,
      fats: 28,
    },
  ];
  const waterIntake = [
    {
      time: 'Morning',
      amount: 3,
    },
    {
      time: 'Afternoon',
      amount: 2,
    },
    {
      time: 'Evening',
      amount: 2,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="mb-6 text-2xl font-bold md:text-3xl">Meal & Nutrition</h1>
      {/* Nutrition Overview */}
      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-2xl bg-white p-2 shadow-sm md:p-6 lg:col-span-2">
          <h2 className="mb-4 text-lg font-semibold">
            Macronutrient Distribution
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={macroData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {macroData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4">
              {macroData.map((entry, index) => (
                <div key={entry.name} className="flex items-center">
                  <div
                    className="mr-2 h-3 w-3 rounded-full"
                    style={{
                      backgroundColor: COLORS[index],
                    }}
                  ></div>
                  <span className="text-sm text-gray-600">
                    {entry.name}: {entry.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-2 shadow-sm md:p-6">
          <h2 className="mb-4 text-lg font-semibold">Water Intake</h2>
          <div className="mb-4 flex items-center justify-center">
            <FiDroplet size={24} className="mr-2 text-blue-500" />
            <span className="text-2xl font-bold">7</span>
            <span className="ml-1 text-gray-500">/ 8 glasses</span>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={waterIntake}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {/* Meal Log */}
      <div className="rounded-2xl bg-white p-2 shadow-sm md:p-6">
        <h2 className="mb-4 text-lg font-semibold">Today&apos;s Meals</h2>
        <div className="space-y-6">
          {meals.map((meal, index) => (
            <div key={index} className="border-b pb-6 last:border-0 last:pb-0">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-opacity-10 mr-3 rounded-lg bg-blue-100 p-2">
                    <LuUtensils size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">{meal.type}</h3>
                    <p className="text-sm text-gray-500">{meal.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{meal.calories} kcal</p>
                </div>
              </div>
              <div className="rounded-xl bg-gray-50 p-2 md:p-4">
                <div className="mb-3">
                  {meal.items.map((item, idx) => (
                    <span key={idx} className="text-sm text-gray-600">
                      {item}
                      {idx < meal.items.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Protein</p>
                    <p className="font-medium">{meal.protein}g</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Carbs</p>
                    <p className="font-medium">{meal.carbs}g</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Fats</p>
                    <p className="font-medium">{meal.fats}g</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
