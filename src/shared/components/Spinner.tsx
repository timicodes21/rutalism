import { cn } from "@/lib/utils";
import React from "react";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const Spinner: React.FC<IProps> = ({ size = 20, className, ...props }) => {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-white border-t-transparent",
        className
      )}
      style={{ width: size, height: size }}
      {...props}
    />
  );
};

export default Spinner;
