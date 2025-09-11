import { QueryKeys } from "@/constants/queryClient";
import { getEmailsApi, IEmail, IGetEmailParams } from "@/services/emailService";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useGetEmails = (params: IGetEmailParams) => {
  const getEmails = async (pageNo: number) => {
    const response = await getEmailsApi({ ...params, page: pageNo });
    return response?.data;
  };

  const {
    data,
    status,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isFetching
  } = useInfiniteQuery({
    queryKey: [QueryKeys.GET_ALL_MAILS, params],
    queryFn: ({ pageParam = 1 }) => getEmails(pageParam),
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
    isFetching
  };
};
