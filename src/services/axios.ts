import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig
} from "axios";
import { StorageKeys } from "@/constants/storeKeys";
import { handleApiError } from "@/shared/utils/api.util";
import { IApiResponse } from "./interface";

/**
 * Custom error wrapper to enforce consistency.
 */
export class ApiError extends Error {
  status: number;

  details?: unknown;

  constructor(message: string, status: number, details?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
  }
}

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://email-list-api-3.onrender.com/api";

/**
 * Axios instance with base config.
 */
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 10000 // 10s timeout
});

/**
 * Request interceptor -> attach token.
 */
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const newConfig = { ...config };
    if (typeof window !== "undefined") {
      const token = localStorage.getItem(StorageKeys.RUTALISM_AUTH_TOKEN);

      if (token) {
        newConfig.headers.Authorization = `Bearer ${token}`;
      }
    }

    return newConfig;
  },
  (error: AxiosError): Promise<never> => {
    return Promise.reject(
      new ApiError(error.message, error.response?.status ?? 500, error)
    );
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error: AxiosError<IApiResponse>) => {
    return handleApiError(error);
  }
);
