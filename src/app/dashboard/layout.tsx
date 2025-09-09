"use client";

import React from "react";
import Sidebar from "@/shared/components/DashboardLayout";

interface IProps {
  children: React.ReactNode;
}

const SidebarLayout = ({ children }: IProps) => {
  return <Sidebar>{children}</Sidebar>;
};

export default SidebarLayout;
