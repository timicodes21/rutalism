"use client";

import React from "react";
import { useEmailContext } from "@/providers/EmailProvider";
import { EmailView } from "@/services/emailService";
import EmailList from "../components/EmailList";
import { useGetEmails } from "../hooks/email.hook";

interface IProps {
  labels: string;
}

const EmailLabelPage: React.FC<IProps> = ({ labels }) => {
  const { params } = useEmailContext();

  const { allEmails, isLoading } = useGetEmails({
    page: params?.page ?? 1,
    limit: params?.limit ?? 1,
    search: params?.search,
    labels
  });

  return <EmailList emails={allEmails} isLoading={isLoading} />;
};

export default EmailLabelPage;
