"use client";

import React from "react";
import { useEmailContext } from "@/providers/EmailProvider";
import { EmailView } from "@/services/emailService";
import EmailList from "../components/EmailList";
import { useGetEmails } from "../hooks/email.hook";

interface IProps {
  view: EmailView;
}

const EmailPage: React.FC<IProps> = ({ view }) => {
  const { params } = useEmailContext();

  const { allEmails, isLoading } = useGetEmails({
    page: params?.page ?? 1,
    limit: params?.limit ?? 1,
    search: params?.search,
    view
  });

  return <EmailList emails={allEmails} isLoading={isLoading} />;
};

export default EmailPage;
