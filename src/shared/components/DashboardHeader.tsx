"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Settings, Mail, Bell, Search } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-border">
      {/* Search */}
      <div className="ps-7 md:ps-0">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search.."
            className="pl-9 bg-card border-border"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4 pe-7 md:pe-0">
        <Button variant="ghost" size="icon">
          <Settings className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Mail className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="w-5 h-5" />
        </Button>
        <Avatar className="w-8 h-8 hidden md:block">
          <AvatarImage src="/avatar.png" />
          <AvatarFallback>TB</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default DashboardHeader;
