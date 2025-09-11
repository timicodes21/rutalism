import { ApiRoutes } from "@/constants/routes";
import { axiosInstance } from "./axios";
import { IApiResponse, IStatusWithData } from "./interface";

export interface ILoginResponse {
  user: User;
  token: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar: null;
  created_at: string;
  updated_at: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export const loginApi = async (
  req: ILoginRequest
): Promise<IApiResponse<ILoginResponse>> => {
  const res: Awaited<IStatusWithData<ILoginResponse>> =
    await axiosInstance.post(ApiRoutes.LOGIN, req);

  return res?.data;
};
