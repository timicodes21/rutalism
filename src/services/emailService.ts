import { ApiRoutes } from "@/constants/routes";
import { appendQueryParamsToUrl } from "@/shared/utils/api.util";
import { axiosInstance } from "./axios";
import {
  IApiResponse,
  IEmaiLabel,
  IEmailCount,
  IStatusWithData
} from "./interface";

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

export type EmailView = "inbox" | "sent" | "starred";

export interface IGetEmailParams {
  page: number;
  limit: number;
  search: string | null;
  view?: EmailView;
  labels?: string;
  [key: string]: string | number | null | undefined;
}

export const getEmailsApi = async (
  params: IGetEmailParams
): Promise<IApiResponse<IEmail[]>> => {
  const url = appendQueryParamsToUrl(ApiRoutes.EMAILS, params);

  const res: Awaited<IStatusWithData<IEmail[]>> = await axiosInstance.get(url);

  return res?.data;
};

export const getEmailCountsApi = async (): Promise<
  IApiResponse<IEmailCount>
> => {
  const res: Awaited<IStatusWithData<IEmailCount>> = await axiosInstance.get(
    ApiRoutes.EMAIL_COUNTS
  );

  return res?.data;
};

export const toggleStarApi = async (emailId: string): Promise<IApiResponse> => {
  const res: Awaited<IStatusWithData> = await axiosInstance.patch(
    `${ApiRoutes.EMAILS}/${emailId}/star`
  );

  return res?.data;
};

export const getEmailLabelsApi = async (): Promise<
  IApiResponse<IEmaiLabel[]>
> => {
  const res: Awaited<IStatusWithData<IEmaiLabel[]>> = await axiosInstance.get(
    ApiRoutes.EMAIL_LABELS
  );

  return res?.data;
};
