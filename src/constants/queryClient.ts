import { QueryCache, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();
export const queryCache = new QueryCache();

export enum QueryKeys {
  GET_ALL_MAILS = "getAllMails"
}
