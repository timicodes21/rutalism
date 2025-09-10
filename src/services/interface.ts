export interface IApiResponse<T = null> {
  success: boolean;
  data: T;
  message: string;
}

export interface IStatusWithData<T = null> {
  status: number;
  data: IApiResponse<T>;
}
