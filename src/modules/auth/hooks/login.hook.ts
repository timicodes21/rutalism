import { ClientRoutes } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z, email } from "zod";
import { useForm } from "react-hook-form";
import { loginApi } from "@/services/authService";
import { StorageKeys } from "@/constants/storeKeys";

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

  const onSubmit = async (data: LoginFormValues) => {
    setLoading(true);

    const response = await loginApi({
      email: data.email,
      password: data.password
    });

    if (response?.success) {
      // Save token to local storage
      localStorage.setItem(
        StorageKeys.RUTALISM_AUTH_TOKEN,
        response?.data?.token ?? ""
      );

      // Navigate to Dashboard
      router.push(ClientRoutes.DASHBOARD);
    }

    setLoading(false);
  };

  return {
    loading,
    onSubmit,
    ...form
  };
};
