"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import DashboardHeader from "./DashboardHeader";
import { useAuthGuard } from "../hooks/authGuard.hook";

interface IProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: IProps) => {
  const [open, setOpen] = useState(false);

  // Check for auth routes
  useAuthGuard();

  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar />
      <MobileSidebar open={open} setOpen={setOpen} />

      {/* Main Area */}
      <div className="flex flex-col flex-1">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
