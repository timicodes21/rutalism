"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useAuthGuard = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true); // track auth check

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // If no token → redirect to login
      router.replace("/login");
    } else {
      // Token exists → allow rendering
      setLoading(false);
    }
  }, [router]);

  return { loading };
};
