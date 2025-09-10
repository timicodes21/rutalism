"use client";

import NotFoundPage from "@/modules/dashboard/pages/NotFoundPage";
import DashboardLayout from "@/shared/components/DashboardLayout";
import { usePathname } from "next/navigation";
import React from "react";

const NotFound = () => {
  const pathname = usePathname();

  return pathname.includes("/dashboard") ? (
    <DashboardLayout>
      <NotFoundPage />
    </DashboardLayout>
  ) : (
    <NotFoundPage />
  );
};

export default NotFound;
