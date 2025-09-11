import { ClientRoutes } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z, email } from "zod";
import { useForm } from "react-hook-form";
import { ILoginResponse, loginApi } from "@/services/authService";
import { StorageKeys } from "@/constants/storeKeys";
import toast from "react-hot-toast";
import { handleApiResponse } from "@/shared/utils/api.util";
import { IApiResponse } from "@/services/interface";

export type LoginFormValues = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const LoginSchema = z.object({
    email: email({ message: "Please enter a valid email" }),
    password: string().min(1, { message: "Please enter your password" })
  });

  const form = useForm<LoginFormValues>({
    mode: "onBlur",
    resolver: zodResolver(LoginSchema)
  });

  const handleSuccess = (response: IApiResponse<ILoginResponse>) => {
    // Save token to local storage
    localStorage.setItem(
      StorageKeys.RUTALISM_AUTH_TOKEN,
      response?.data?.token ?? ""
    );

    toast.success("Login Successful");

    // Navigate to Dashboard
    router.push(ClientRoutes.DASHBOARD);
  };

  const onSubmit = async (data: LoginFormValues) => {
    setLoading(true);

    const response = await loginApi({
      email: data.email,
      password: data.password
    });

    handleApiResponse(response, {
      onSuccess: () => handleSuccess(response)
    });

    setLoading(false);
  };

  return {
    loading,
    onSubmit,
    ...form
  };
};
