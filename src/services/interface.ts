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
