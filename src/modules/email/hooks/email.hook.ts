import { queryClient, QueryKeys } from "@/constants/queryClient";
import { useEmailContext } from "@/providers/EmailProvider";
import {
  EmailView,
  getEmailCountsApi,
  getEmailLabelsApi,
  getEmailsApi,
  IEmail,
  IGetEmailParams,
  toggleStarApi
} from "@/services/emailService";
import { IApiResponse, IPaginationData } from "@/services/interface";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";
// hooks/email.mutations.ts

export const useGetEmails = (params: IGetEmailParams) => {
  const [paginationData, setPaginationData] = useState<IPaginationData>({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0
  });

  const getEmails = async () => {
    const response = await getEmailsApi({ ...params });
    if (response?.pagination && response?.pagination?.page) {
      setPaginationData(response?.pagination);
    }
    return response?.data;
  };

  const {
    data,
    status,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isFetching,
    refetch
  } = useInfiniteQuery({
    queryKey: [QueryKeys.GET_ALL_MAILS, params],
    queryFn: () => getEmails(),
    getNextPageParam: (lastPage, pages) => {
      return lastPage?.length !== 0 ? pages.length + 1 : null;
    },
    initialPageParam: 1
  });

  const allEmails: IEmail[] = [];

  if (Array.isArray(data?.pages)) {
    data?.pages?.map(
      page =>
        Array.isArray(page) && page?.map((el: IEmail) => allEmails.push(el))
    );
  }

  return {
    allEmails,
    status,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    paginationData,
    refetch
  };
};

export const useGetEmailCounts = () => {
  return useQuery({
    queryKey: [QueryKeys.GET_EMAIL_COUNTS],
    queryFn: getEmailCountsApi
  });
};
// Email + paginated types

interface PaginatedEmails {
  pages: IEmail[][];
  pageParams: unknown[];
}

export const useToggleStar = () => {
  const { params } = useEmailContext();
  const pageParams = useParams();

  const queryParams: IGetEmailParams = {
    ...params,
    view: pageParams?.view as EmailView
  };

  return useMutation<
    IApiResponse<null>, // API doesn’t return anything useful
    Error, // error type
    { id: string }, // only id is passed
    { previousData?: PaginatedEmails } // rollback context
  >({
    mutationFn: ({ id }) => toggleStarApi(id),

    onMutate: async ({ id }) => {
      await queryClient.cancelQueries({
        queryKey: [QueryKeys.GET_ALL_MAILS, queryParams]
      });

      const previousData = queryClient.getQueryData<PaginatedEmails>([
        QueryKeys.GET_ALL_MAILS,
        queryParams
      ]);

      queryClient.setQueryData<PaginatedEmails>(
        [QueryKeys.GET_ALL_MAILS, queryParams],
        old => {
          if (!old) return old;
          return {
            ...old,
            pages: old.pages.map(page =>
              page.map(email =>
                email.id === id
                  ? { ...email, isStarred: !email.isStarred } // flip locally
                  : email
              )
            )
          };
        }
      );

      return { previousData };
    },

    onError: (_err, _vars, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(
          [QueryKeys.GET_ALL_MAILS, queryParams],
          context.previousData
        );
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.GET_ALL_MAILS, queryParams]
      });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.GET_EMAIL_COUNTS] });
    }
  });
};

export const useGetEmailLabels = () => {
  return useQuery({
    queryKey: [QueryKeys.GET_EMAIL_LABELS],
    queryFn: getEmailLabelsApi
  });
};
