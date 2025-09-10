"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Inbox,
  Send,
  FileText,
  Trash2,
  Tag,
  BarChart2,
  Briefcase,
  Megaphone,
  Star,
  Plus
} from "lucide-react";
import React from "react";
import { ClientRoutes } from "@/constants/routes";
import { Button } from "@/components/ui/button";

type NavItem = {
  label: string;
  href: string;
  icon: React.ElementType;
  badge?: number;
};

const primary: NavItem[] = [
  { label: "Inbox", href: ClientRoutes.EMAIL_INBOX, icon: Inbox, badge: 12 },
  { label: "Sent", href: "/dashboard/apps/email/sent", icon: Send },
  { label: "Drafts", href: "/inbox/drafts", icon: FileText, badge: 2 },
  { label: "Trash", href: "/inbox/trash", icon: Trash2 }
];

const categories: NavItem[] = [
  { label: "Analytics", href: "/inbox/c/analytics", icon: BarChart2 },
  { label: "Business", href: "/inbox/c/business", icon: Briefcase },
  { label: "Marketing", href: "/inbox/c/marketing", icon: Megaphone },
  { label: "Starred", href: "/inbox/c/starred", icon: Star, badge: 4 },
  { label: "Upgrade to Pro", href: "/pricing", icon: Tag }
];

const MailSidebar = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "w-64 shrink-0 border-r bg-card h-full flex flex-col",
        className
      )}
      aria-label="Mail navigation"
    >
      <div className="px-4 py-3 border-b">
        <h2 className="text-sm font-semibold">Mailbox</h2>
      </div>

      <nav className="p-2 space-y-6 overflow-y-auto">
        {/* Compose */}
        <Button className="w-full mb-3" size="sm">
          <Plus className="w-4 h-4 mr-1" />
          Compose
        </Button>

        <div>
          <div className="px-2 mb-2 text-xs font-medium text-muted-foreground">
            Primary
          </div>
          <ul className="space-y-1">
            {primary.map(item => {
              const active = pathname === item.href;
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors",
                      active
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </span>
                    {typeof item.badge === "number" && item.badge > 0 && (
                      <span className="inline-flex min-w-[1.5rem] justify-center rounded-full bg-secondary px-2 py-0.5 text-xs font-medium">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <div className="px-2 mb-2 text-xs font-medium text-muted-foreground">
            Categories
          </div>
          <ul className="space-y-1">
            {categories.map(item => {
              const active = pathname === item.href;
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors",
                      active
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </span>
                    {typeof item.badge === "number" && item.badge > 0 && (
                      <span className="inline-flex min-w-[1.5rem] justify-center rounded-full bg-secondary px-2 py-0.5 text-xs font-medium">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default MailSidebar;
