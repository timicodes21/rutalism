import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, RotateCwIcon } from "lucide-react";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface IProps {
  selected?: boolean;
  onSelect?: () => void;
}

const EmailHeader: React.FC<IProps> = ({ selected, onSelect }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between px-4 py-3 border-b bg-card gap-4">
      {/* Left: Search */}
      <div className="flex items-center gap-3 w-full max-w-md">
        <Checkbox
          checked={selected}
          onCheckedChange={onSelect}
          className="bg-white"
        />
        <Button variant="secondary" size="icon" className="rounded-full">
          <RotateCwIcon />
        </Button>
        <Input placeholder="Search emails..." className="w-full" />
      </div>

      {/* Right: Pagination + Compose */}
      <div className="flex items-center gap-4 justify-between md:justify-end w-full md:w-auto">
        {/* Pagination */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>1–15 of 165</span>
          <Button variant="ghost" size="icon">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmailHeader;
