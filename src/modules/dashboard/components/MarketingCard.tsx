import React, { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { IKpi, MarketingCardType } from "@/constants/dashboardData";
import {
  BanknoteIcon,
  CircleCheckIcon,
  CircleDollarSignIcon,
  UsersIcon
} from "lucide-react";

const MarketingCard: React.FC<IKpi> = ({
  title,
  previous,
  value,
  change,
  changeType = "increase",
  cardType
}) => {
  const renderIcon: Record<MarketingCardType, ReactNode> = {
    total: <BanknoteIcon className="text-primary" />,
    visitors: <UsersIcon className="text-primary" />,
    acquisition: <CircleCheckIcon className="text-primary" />,
    revenue: <CircleDollarSignIcon className="text-primary" />
  };

  return (
    <Card className="border border-border shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-black">{value}</div>
            <p className="text-xs text-muted-foreground">
              Previous: <br />{" "}
              <span className="text-black font-bold">{previous}</span>
            </p>
          </div>
          <div className="flex flex-col items-end space-y-1">
            {renderIcon[cardType ?? "total"]}
            <p className="text-xs font-medium text-black">Progress</p>
            <div
              className={`text-xs font-bold text-muted-foreground ${changeType === "increase" ? "text-primary" : "text-red-500"}`}
            >
              {changeType === "increase" ? "+" : "-"}
              {change}
            </div>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default MarketingCard;
