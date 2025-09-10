"use client";

import { ReactNode, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import MailSidebar from "./MailSidebar";

interface IProps {
  header: ReactNode;
  children: ReactNode;
}

const MailLayout = ({ header, children }: IProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop sidebar */}
      <div className="hidden md:block">
        <MailSidebar />
      </div>

      {/* Mobile sheet sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden absolute left-2 top-2 z-20"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open sidebar</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72">
          <SheetHeader className="px-4 py-3 border-b">
            <SheetTitle>Mailbox</SheetTitle>
          </SheetHeader>
          <MailSidebar className="border-0" />
        </SheetContent>
      </Sheet>

      {/* Main column */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header area passed from page so you can customize per-route */}
        <div className="relative">
          {/* Show mobile trigger space */}
          <div className="md:hidden h-12" />
          {header}
        </div>

        {/* Content area */}
        <div className="flex-1 min-h-0">{children}</div>
      </div>
    </div>
  );
};

export default MailLayout;
