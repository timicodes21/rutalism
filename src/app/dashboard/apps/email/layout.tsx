"use client";

import React from "react";
import Sidebar from "@/modules/email/components/MailWrapper";

interface IProps {
  children: React.ReactNode;
}

const EmailLayout = ({ children }: IProps) => {
  return <Sidebar>{children}</Sidebar>;
};

export default EmailLayout;
