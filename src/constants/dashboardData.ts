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
  { name: "Marketing", href: "/dashboard", icon: BarChart2 },
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
