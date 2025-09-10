"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center bg-background text-foreground px-6">
      {/* Error Code */}
      <h1 className="text-7xl font-extrabold text-primary mb-4">404</h1>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-muted-foreground mb-6 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Back Button */}
      <Link href="/dashboard">
        <Button className="flex items-center space-x-2">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
