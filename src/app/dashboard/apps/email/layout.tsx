"use client";

import React from "react";
import Sidebar from "@/modules/email/components/MailWrapper";
import EmailProvider from "@/providers/EmailProvider";

interface IProps {
  children: React.ReactNode;
}

const EmailLayout = ({ children }: IProps) => {
  return (
    <EmailProvider>
      <Sidebar>{children}</Sidebar>
    </EmailProvider>
  );
};

export default EmailLayout;
