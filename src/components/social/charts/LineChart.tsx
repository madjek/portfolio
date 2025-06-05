import {
  CartesianGrid,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface DataPoint {
  date: string;
  [key: string]: string | number;
}
interface LineChartProps {
  data: DataPoint[];
  lines: {
    dataKey: string;
    color: string;
    name: string;
  }[];
  xAxisDataKey: string;
  title?: string;
}
export default function LineChart({
  data,
  lines,
  xAxisDataKey,
  title,
}: LineChartProps) {
  return (
    <div className="rounded-xl border border-gray-700 bg-gray-800 p-4 shadow-lg">
      {title && <h3 className="mb-4 text-lg font-medium">{title}</h3>}
      <ResponsiveContainer width="100%" height={300}>
        <RechartsLineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis
            dataKey={xAxisDataKey}
            tick={{
              fill: '#9CA3AF',
            }}
            axisLine={{
              stroke: '#4B5563',
            }}
          />
          <YAxis
            tick={{
              fill: '#9CA3AF',
            }}
            axisLine={{
              stroke: '#4B5563',
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              borderColor: '#4B5563',
              color: '#F9FAFB',
            }}
          />
          <Legend
            wrapperStyle={{
              color: '#F9FAFB',
            }}
          />
          {lines.map((line, index) => (
            <Line
              key={index}
              type="monotone"
              dataKey={line.dataKey}
              stroke={line.color}
              name={line.name}
              strokeWidth={2}
              dot={{
                r: 4,
              }}
              activeDot={{
                r: 6,
              }}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}
