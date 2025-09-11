export interface IPaginationData {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface IApiResponse<T = null> {
  success: boolean;
  data: T;
  message: string;
  pagination: IPaginationData | null;
}

export interface IStatusWithData<T = null> {
  status: number;
  data: IApiResponse<T>;
}

export interface IEmailCount {
  inbox: number;
  starred: number;
  important: number;
  unread: number;
  sent: number;
  drafts: number;
  trash: number;
}

export interface IEmaiLabel {
  id: string;
  user_id: string;
  name: string;
  color: string;
  created_at: string;
}
