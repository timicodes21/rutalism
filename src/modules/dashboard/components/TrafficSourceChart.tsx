"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { date: "Mar 1", organic: 60, paid: 40, referral: 30 },
  { date: "Mar 2", organic: 30, paid: 20, referral: 10 },
  { date: "Mar 3", organic: 40, paid: 25, referral: 15 },
  { date: "Mar 4", organic: 80, paid: 60, referral: 40 },
  { date: "Mar 5", organic: 70, paid: 50, referral: 30 },
  { date: "Mar 6", organic: 35, paid: 20, referral: 15 },
  { date: "Mar 7", organic: 40, paid: 25, referral: 20 }
];

const TrafficSourceChart = () => {
  return (
    <div className="pe-2 md:pe-5 py-3 bg-card rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 px-3">Traffic Source</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 200]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="organic" stackId="a" fill="#34d399" name="Organic" />
          <Bar dataKey="paid" stackId="a" fill="#10b981" name="Paid" />
          <Bar dataKey="referral" stackId="a" fill="#059669" name="Referral" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrafficSourceChart;
