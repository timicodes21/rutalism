"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
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
        <AreaChart data={data}>
          {/* gradient defs */}
          <defs>
            <linearGradient id="acquisitionFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="costFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* horizontal grid lines only (anchored to the chart area) */}
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e5e7eb"
          />

          {/* X axis */}
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12, fill: "#6b7280" }}
            axisLine={{ stroke: "#e5e7eb" }}
            tickLine={{ stroke: "#e5e7eb" }}
          />

          {/* Left Y axis (acquisition) -> ticks every 100, axis/tick lines enabled */}
          <YAxis
            yAxisId="left"
            domain={[0, 800]}
            ticks={[0, 100, 200, 300, 400, 500, 600, 700, 800]}
            tick={{ fontSize: 12, fill: "#6b7280" }}
            axisLine={{ stroke: "#e5e7eb" }}
            tickLine={{ stroke: "#e5e7eb" }}
          />

          {/* Right Y axis (cost) -> explicit ticks so they render */}
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[0, 6000]}
            ticks={[0, 1000, 2000, 3000, 4000, 5000, 6000]}
            tick={{ fontSize: 12, fill: "#6b7280" }}
            axisLine={{ stroke: "#e5e7eb" }}
            tickLine={{ stroke: "#e5e7eb" }}
          />

          <Tooltip wrapperStyle={{ fontSize: 12 }} />

          {/* Area for acquisition (fills only under that line, inside chart bounds) */}
          <Area
            yAxisId="left"
            type="monotone"
            dataKey="acquisition"
            stroke="#3b82f6"
            fill="url(#acquisitionFill)"
            strokeWidth={2}
            isAnimationActive={false}
          />

          {/* Area for cost (optional) */}
          <Area
            yAxisId="right"
            type="monotone"
            dataKey="cost"
            stroke="#10b981"
            fill="url(#costFill)"
            strokeWidth={2}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AcquisitionCostChart;
