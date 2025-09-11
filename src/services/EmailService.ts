import { ApiRoutes } from "@/constants/routes";
import { appendQueryParamsToUrl } from "@/shared/utils/api.util";
import { axiosInstance } from "./axios";
import { IApiResponse, IStatusWithData } from "./interface";

interface Attachment {
  id: string;
  emailId: string;
  filename: string;
  size: number;
  type: string;
  url: string;
}

export interface IEmail {
  id: string;
  userId: string;
  from: string;
  to: string;
  subject: string;
  body: string;
  isRead: boolean;
  isStarred: boolean;
  isImportant: boolean;
  hasAttachments: boolean;
  attachments: Attachment[];
  labels: string[];
  timestamp: string;
  createdAt: string;
  updatedAt: string;
}

export interface IGetEmailParams {
  page: number;
  limit: number;
  search: string | null;
  [key: string]: string | number | null;
}

export const getEmailsApi = async (
  params: IGetEmailParams
): Promise<IApiResponse<IEmail[]>> => {
  const url = appendQueryParamsToUrl(ApiRoutes.EMAILS, params);

  const res: Awaited<IStatusWithData<IEmail[]>> = await axiosInstance.get(url);

  return res?.data;
};
