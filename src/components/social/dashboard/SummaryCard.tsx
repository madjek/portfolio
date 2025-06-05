import React from 'react';
import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi';
import SparklineChart from '../charts/SparklineChart';

interface SummaryCardProps {
  title: string;
  value: string;
  change: number;
  data: number[];
  icon: React.ReactNode;
  color: string;
}
export default function SummaryCard({
  title,
  value,
  change,
  data,
  icon,
  color,
}: SummaryCardProps) {
  const isPositive = change >= 0;

  return (
    <div className="rounded-xl border border-gray-700 bg-gray-800 p-4 shadow-lg">
      <div className="mb-2 flex items-start justify-between">
        <div className={`rounded-lg p-2 ${color}`}>{icon}</div>
        <div className="flex items-center">
          {isPositive ? (
            <FiTrendingUp size={16} className="mr-1 text-green-500" />
          ) : (
            <FiTrendingDown size={16} className="mr-1 text-red-500" />
          )}
          <span
            className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}
          >
            {Math.abs(change)}%
          </span>
        </div>
      </div>
      <h3 className="mb-1 text-sm text-gray-400">{title}</h3>
      <p className="mb-4 text-2xl font-bold">{value}</p>
      <SparklineChart
        data={data}
        className="h-12"
        color={isPositive ? '#10B981' : '#EF4444'}
      />
    </div>
  );
}
