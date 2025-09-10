import { IApiResponse } from "@/services/interface";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const handleApiError = (
  error: AxiosError<IApiResponse>,
  fallbackMessage: string = "An error occured, Please try again later"
) => {
  const errorMessage =
    error?.response?.data?.message ?? error?.message ?? fallbackMessage;
  const statusCode = error?.response?.status ?? 500;

  toast.error(errorMessage);

  return Promise.resolve({
    data: {
      success: false,
      data: null,
      message: errorMessage
    },
    status: statusCode
  });
};
