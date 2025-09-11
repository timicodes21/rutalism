import { useEmailContext } from "@/providers/EmailProvider";
import { useEffect, useState } from "react";
import { queryClient, QueryKeys } from "@/constants/queryClient";
import { useGetEmails } from "./email.hook";

export const useEmailSearchAndPagination = () => {
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

  return {
    searchText,
    setSearchText,
    refetchEmails,
    allEmails,
    params,
    paginationData
  };
};
