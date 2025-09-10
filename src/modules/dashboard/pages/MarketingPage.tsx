"use client";

import { kpiCards } from "@/constants/dashboardData";
import AcquisitionCostChart from "../components/AcquisitionCostChart";
import MarketingCard from "../components/MarketingCard";
import TrafficSourceChart from "../components/TrafficSourceChart";
import PlatformBudget from "../components/PlatformBudget";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-background px-4 py-2 md:py-4 space-y-8">
      {/* Header */}
      <div>
        <p className="text-xl font-bold text-foreground">Marketing</p>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {kpiCards.map(item => (
            <MarketingCard
              key={item?.title}
              title={item.title}
              previous={item.previous}
              value={item.value}
              change={item.change}
              changeType={item.changeType}
              cardType={item.cardType}
            />
          ))}
        </div>

        {/* Charts Section */}
        <div>
          <AcquisitionCostChart />
        </div>

        <div>
          <TrafficSourceChart />
        </div>

        <div>
          <PlatformBudget />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
