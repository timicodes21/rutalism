"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area
} from "recharts";

const data = [
  { date: "Mar 1", acquisition: 400, cost: 1000 },
  { date: "Mar 2", acquisition: 200, cost: 2000 },
  { date: "Mar 3", acquisition: 600, cost: 3000 },
  { date: "Mar 4", acquisition: 300, cost: 4000 },
  { date: "Mar 5", acquisition: 700, cost: 5000 },
  { date: "Mar 6", acquisition: 650, cost: 4500 },
  { date: "Mar 7", acquisition: 500, cost: 4200 }
];

const AcquisitionCostChart = () => {
  return (
    <div className="py-6 bg-card rounded-lg shadow-md w-full">
      <h2 className="text-xl font-semibold mb-4 px-3 md:px-6">
        Acquisition vs Cost
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          {/* Horizontal grid lines only */}
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e5e7eb"
          />

          <XAxis dataKey="date" style={{ fontSize: 12 }} />
          <YAxis
            yAxisId="left"
            domain={[0, 800]}
            ticks={[0, 100, 200, 300, 400, 500, 600, 700, 800]}
            style={{ fontSize: 12 }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[0, 6000]}
            style={{ fontSize: 12 }}
          />

          <Tooltip />

          {/* Gradient definition for the fill */}
          <defs>
            <linearGradient id="acquisitionFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Fill Area under Acquisition line */}
          <Area
            yAxisId="left"
            type="monotone"
            dataKey="acquisition"
            stroke="none"
            fill="url(#acquisitionFill)"
          />

          {/* Acquisition line */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="acquisition"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
            name="Acquisition"
          />

          {/* Cost line */}
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="cost"
            stroke="#10b981"
            strokeWidth={2}
            dot={false}
            name="Cost ($)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AcquisitionCostChart;
