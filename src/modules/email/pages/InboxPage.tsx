"use client";

import React from "react";
import { useEmailContext } from "@/providers/EmailProvider";
import EmailList from "../components/EmailList";
import { useGetEmails } from "../hooks/email.hook";

const InboxPage = () => {
  const { params } = useEmailContext();

  const { allEmails, isFetching } = useGetEmails({
    page: params?.page ?? 1,
    limit: params?.limit ?? 1,
    search: params?.search
  });

  return <EmailList emails={allEmails} isLoading={isFetching} />;
};

export default InboxPage;
