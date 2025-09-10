import {
  BarChart2,
  LineChart,
  Briefcase,
  FolderKanban,
  Users,
  Smartphone,
  Layout,
  Box,
  FileText,
  AppWindow,
  FileStack,
  User,
  BookOpen,
  Calendar,
  Mail,
  Receipt,
  PieChart,
  Blocks,
  LucideIcon
} from "lucide-react";
import { ClientRoutes } from "./routes";

interface NavLinkChild {
  name: string;
  href: string;
  icon?: LucideIcon;
}

interface NavLink {
  name: string;
  href: string;
  icon?: LucideIcon;
  children?: NavLinkChild[];
}

// tell TypeScript what navLinks is

export const navLinks: NavLink[] = [
  { name: "Marketing", href: ClientRoutes.MARKETING, icon: BarChart2 },
  { name: "Analytics", href: "/dashboard/analytics", icon: LineChart },
  { name: "Business", href: "/dashboard/business", icon: Briefcase },
  { name: "Project", href: "/dashboard/project", icon: FolderKanban },
  { name: "HRM", href: "/dashboard/hrm", icon: Users },
  { name: "Mobile App", href: "/dashboard/mobile", icon: Smartphone },
  { name: "Landingpage", href: "/dashboard/landing", icon: Layout },

  { name: "Components", href: "/dashboard/components", icon: Box },

  {
    name: "Pages",
    href: "/dashboard/pages",
    icon: FileText,
    children: [
      { name: "Profile", href: "/dashboard/pages/profile" },
      { name: "Settings", href: "/dashboard/pages/settings" }
    ]
  },

  {
    name: "Apps",
    icon: AppWindow,
    href: "/dashboard/apps",
    children: [
      { name: "Calendar", href: "/dashboard/apps/calendar", icon: Calendar },
      { name: "Email", href: "/dashboard/apps/email", icon: Mail },
      { name: "Invoice", href: "/dashboard/apps/invoice", icon: Receipt },
      { name: "Charts", href: "/dashboard/apps/charts", icon: PieChart },
      { name: "Widgets", href: "/dashboard/apps/widgets", icon: Blocks }
    ]
  },

  {
    name: "Content",
    icon: FileStack,
    href: "/dashboard/content",
    children: [
      { name: "Articles", href: "/dashboard/content/articles" },
      { name: "Media", href: "/dashboard/content/media" }
    ]
  },

  {
    name: "Users",
    icon: User,
    href: "/dashboard/users",
    children: [
      { name: "List", href: "/dashboard/users/list" },
      { name: "Roles", href: "/dashboard/users/roles" }
    ]
  },

  {
    name: "Documentation",
    icon: BookOpen,
    href: "/dashboard/docs",
    children: [
      { name: "API", href: "/dashboard/docs/api" },
      { name: "Guides", href: "/dashboard/docs/guides" }
    ]
  }
];

export type MarketingCardType =
  | "total"
  | "visitors"
  | "acquisition"
  | "revenue";
export interface IKpi {
  title: string;
  value: string;
  previous: string;
  change: string;
  changeType?: "increase" | "decrease";
  cardType: MarketingCardType;
}

export const kpiCards: IKpi[] = [
  {
    title: "Total Spend",
    value: "$8,765",
    previous: "$8,123",
    change: "14.32%",
    changeType: "decrease",
    cardType: "total"
  },
  {
    title: "Visitors",
    value: "14,321",
    previous: "13,245",
    change: "14.23%",
    changeType: "increase",
    cardType: "visitors"
  },
  {
    title: "Acquisition",
    value: "1,203",
    previous: "1,112",
    change: "16.73%",
    changeType: "increase",
    cardType: "acquisition"
  },
  {
    title: "Revenue",
    value: "$18,765",
    previous: "$17,432",
    changeType: "increase",
    change: "21.67%",
    cardType: "revenue"
  }
];
