import { ClientRoutes } from "@/constants/routes";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      // mock auth: save token
      localStorage.setItem("token", "mock-token");
      router.push(ClientRoutes.DASHBOARD);
    }, 1000);
  };

  return { loading, handleSubmit };
};
