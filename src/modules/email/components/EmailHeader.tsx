import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { queryClient, QueryKeys } from "@/constants/queryClient";
import { useEmailContext } from "@/providers/EmailProvider";
import { ChevronLeft, ChevronRight, RotateCwIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useGetEmails } from "../hooks/email.hook";

interface IProps {
  selected?: boolean;
  onSelect?: () => void;
}

const EmailHeader: React.FC<IProps> = ({ selected, onSelect }) => {
  const { params, setParams } = useEmailContext();
  const queryParams = {
    page: params?.page,
    limit: params?.limit,
    search: params?.search
  };

  const { paginationData, allEmails } = useGetEmails(queryParams);

  const [searchText, setSearchText] = useState(params?.search ?? "");

  // Debounce search
  useEffect(() => {
    const handler = setTimeout(() => {
      setParams(prev => ({ ...prev, search: searchText, page: 1 }));
    }, 1000);

    return () => clearTimeout(handler);
  }, [searchText, setParams]);

  const refetchEmails = () => {
    queryClient.invalidateQueries({
      queryKey: [QueryKeys.GET_ALL_MAILS, queryParams]
    });
  };

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
              {params?.page}-{params?.limit} of {paginationData?.totalPages}
            </span>
            <Button variant="ghost" size="icon">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailHeader;
