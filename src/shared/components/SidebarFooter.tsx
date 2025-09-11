"use client";

import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import React from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";
import { ClientRoutes } from "@/constants/routes";
import { StorageKeys } from "@/constants/storeKeys";

const SidebarFooter = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Clear auth token (localStorage / cookies depending on your setup)
    localStorage.removeItem(StorageKeys.RUTALISM_AUTH_TOKEN);

    // Redirect to login page
    router.push(ClientRoutes.LOGIN);
  };

  return (
    <div className="mt-6">
      {/* Logout Dialog */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="ghost"
            className="w-full justify-start font-normal space-x-2"
          >
            <LogOutIcon className="w-4 h-4 text-red-500" />
            <span className="text-red-500 font-medium text-sm">Logout</span>
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Logout</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to log out? You’ll need to sign back in to
              access your dashboard.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogout}>
              Yes, Logout
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Pro Upgrade */}
      <div className="mt-2 p-4 border-t border-border">
        <div className="text-sm text-muted-foreground mb-2">
          Are you looking for more features? Check out our pro version!
        </div>
        <Button className="w-full bg-primary text-primary-foreground">
          Upgrade Now
        </Button>
      </div>
    </div>
  );
};

export default SidebarFooter;
