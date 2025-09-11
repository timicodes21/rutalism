import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, RotateCwIcon } from "lucide-react";
import React from "react";
import { useEmailSearchAndPagination } from "../hooks/emailSearchAndPagination.hook";

interface IProps {
  selected?: boolean;
  onSelect?: () => void;
}

const EmailHeader: React.FC<IProps> = ({ selected, onSelect }) => {
  const {
    searchText,
    refetchEmails,
    setSearchText,
    allEmails,
    params,
    paginationData,
    handleNextPage,
    handlePreviousPage
  } = useEmailSearchAndPagination();

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between px-4 py-3 border-b bg-card gap-4">
      {/* Left: Search */}
      <div className="flex items-center gap-3 w-full max-w-md">
        <Checkbox
          checked={selected}
          onCheckedChange={onSelect}
          className="bg-white"
        />
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full"
          onClick={refetchEmails}
        >
          <RotateCwIcon />
        </Button>
        <Input
          placeholder="Search emails..."
          className="w-full"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
      </div>

      {/* Right: Pagination + Compose */}
      {allEmails?.length > 0 && (
        <div className="flex items-center gap-4 justify-between md:justify-end w-full md:w-auto">
          {/* Pagination */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>
              {((params?.page ?? 1) - 1) * (params?.limit ?? 10) + 1}-
              {Math.min(
                (params?.page ?? 1) * (params?.limit ?? 10),
                paginationData?.total ?? 0
              )}{" "}
              of {paginationData?.total ?? 0}
            </span>

            <Button variant="ghost" size="icon" onClick={handlePreviousPage}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleNextPage}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailHeader;
