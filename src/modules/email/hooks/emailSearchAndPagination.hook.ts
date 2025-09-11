import { useEmailContext } from "@/providers/EmailProvider";
import { useParams } from "next/navigation";
import { EmailView } from "@/services/emailService";
import { useEffect, useState } from "react";
import { queryClient, QueryKeys } from "@/constants/queryClient";
import { useGetEmails } from "./email.hook";

export const useEmailSearchAndPagination = () => {
  const { params, setParams } = useEmailContext();
  const pageParams = useParams();
  const view = pageParams?.view;

  const queryParams = {
    page: params?.page,
    limit: params?.limit,
    search: params?.search,
    view: view as EmailView
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

  // 🔹 handle next/prev pagination
  const handleNextPage = () => {
    if (
      params?.page &&
      paginationData?.totalPages &&
      params.page < paginationData.totalPages
    ) {
      setParams(prev => ({ ...prev, page: (prev.page ?? 1) + 1 }));
    }
  };

  const handlePreviousPage = () => {
    if (params?.page && params.page > 1) {
      setParams(prev => ({ ...prev, page: (prev.page ?? 1) - 1 }));
    }
  };

  return {
    searchText,
    setSearchText,
    refetchEmails,
    allEmails,
    params,
    paginationData,
    handleNextPage,
    handlePreviousPage
  };
};
