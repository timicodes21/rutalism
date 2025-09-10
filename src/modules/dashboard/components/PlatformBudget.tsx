import {
  Facebook,
  Twitter,
  Search,
  Music2,
  BadgeDollarSign
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Platform = {
  name: string;
  icon: ReactNode;
  remaining: number;
  percentage: number;
  color: string; // full Tailwind class like "bg-red-500"
  trackColor: string; // full Tailwind class like "bg-red-100"
};

const platforms: Platform[] = [
  {
    name: "Facebook",
    icon: <Facebook className="w-5 h-5 text-muted-foreground" />,
    remaining: 12345,
    percentage: 60,
    color: "bg-green-500",
    trackColor: "bg-green-100"
  },
  {
    name: "Twitter",
    icon: <Twitter className="w-5 h-5 text-muted-foreground" />,
    remaining: 1543,
    percentage: 86,
    color: "bg-green-500",
    trackColor: "bg-green-100"
  },
  {
    name: "Google",
    icon: <Search className="w-5 h-5 text-muted-foreground" />,
    remaining: 5678,
    percentage: 67,
    color: "bg-green-500",
    trackColor: "bg-green-100"
  },
  {
    name: "TikTok",
    icon: <Music2 className="w-5 h-5 text-muted-foreground" />,
    remaining: 3456,
    percentage: 21,
    color: "bg-red-500",
    trackColor: "bg-red-100"
  },
  {
    name: "Bing",
    icon: <BadgeDollarSign className="w-5 h-5 text-muted-foreground" />,
    remaining: 2098,
    percentage: 35,
    color: "bg-amber-500",
    trackColor: "bg-amber-100"
  }
];

const PlatformBudget = () => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Budget by Platform</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {platforms.map(platform => (
          <div key={platform.name} className="flex items-center gap-4">
            {platform.icon}
            <div className="flex-1">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-xs font-medium">
                  Remaining:{" "}
                  <span className="text-xs font-bold">
                    ${platform.remaining.toLocaleString()}
                  </span>
                </span>
                <span className="text-xs font-medium">
                  {platform?.percentage}%
                </span>
              </div>
              <div className={cn("mt-1 h-2 rounded-full", platform.trackColor)}>
                <div
                  className={cn("h-2 rounded-full", platform.color)}
                  style={{ width: `${platform.percentage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PlatformBudget;
