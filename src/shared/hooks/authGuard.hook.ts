"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { StorageKeys } from "@/constants/storeKeys";

interface DecodedToken {
  exp?: number; // expiry timestamp (seconds since epoch)
  [key: string]: unknown;
}

export const useAuthGuard = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  const checkAuth = () => {
    // Only guard dashboard routes
    if (!pathname.startsWith("/dashboard")) {
      setLoading(false);
      return;
    }

    const token = localStorage.getItem(StorageKeys.RUTALISM_AUTH_TOKEN);

    if (!token) {
      router.push("/login");
      return;
    }

    try {
      // Decode payload (JWT = header.payload.signature)
      const base64Payload = token.split(".")[1] ?? "";
      const jsonPayload = atob(
        base64Payload.replace(/-/g, "+").replace(/_/g, "/")
      );

      let decoded: DecodedToken;
      try {
        decoded = JSON.parse(jsonPayload) as DecodedToken;
      } catch {
        throw new Error("Invalid token payload");
      }

      const isExpired =
        decoded.exp !== undefined && decoded.exp * 1000 < Date.now();

      if (isExpired) {
        localStorage.removeItem(StorageKeys.RUTALISM_AUTH_TOKEN);
        router.push("/login");
        return;
      }

      setLoading(false); // token exists & not expired → allow access
    } catch (err) {
      console.error("AuthGuard: Invalid token format", err);
      localStorage.removeItem(StorageKeys.RUTALISM_AUTH_TOKEN);
      router.push("/login");
    }
  };

  useEffect(() => {
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return { loading };
};
