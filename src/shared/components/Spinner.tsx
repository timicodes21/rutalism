import { cn } from "@/lib/utils";
import React from "react";

interface IProps {
  size?: number;
  className?: string;
}

const Spinner: React.FC<IProps> = ({ size = 20, className }) => {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-white border-t-transparent",
        className
      )}
      style={{ width: size, height: size }}
    />
  );
};

export default Spinner;
