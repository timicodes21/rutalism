import { FALLBACK_ERROR_MESSAGE } from "@/constants/texts";
import { IApiResponse } from "@/services/interface";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const isResponseSuccessful = <T>(response: IApiResponse<T>) => {
  return response && response?.success;
};

type Callback = () => void;

interface IOption {
  onSuccess: Callback;
  onError?: Callback;
  noErrorToast?: boolean;
}

export const handleApiResponse = <T>(
  response: IApiResponse<T>,
  option: IOption
) => {
  if (isResponseSuccessful(response)) {
    option.onSuccess();
  } else {
    if (option.onError) {
      option.onError();
    }
    if (!option.noErrorToast) {
      toast.error(response?.message ?? FALLBACK_ERROR_MESSAGE);
    }
  }
};

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

export const appendQueryParamsToUrl = <
  T extends Record<string, string | number | null>
>(
  url: string,
  params: T
): string => {
  const urlSearchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value) && value?.length > 0) {
      // Add each value in the array as a separate parameter
      value.forEach(item => {
        if (item !== undefined && item !== null) {
          urlSearchParams.append(
            key,
            typeof item === "number" || typeof item === "string"
              ? item.toString()
              : ""
          );
        }
      });
      return;
    }
    if (typeof value === "string" || typeof value === "number") {
      // Add single string or number
      urlSearchParams.append(key, value.toString());
    }
  });

  // Combine the base URL with the new query string
  return `${url}?${urlSearchParams.toString()}`;
};
