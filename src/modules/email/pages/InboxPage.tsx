"use client";

import React from "react";
import EmailList from "../components/EmailList";
import { useGetEmails } from "../hooks/email.hook";

const InboxPage = () => {
  const { isLoading, allEmails } = useGetEmails({
    page: 1,
    limit: 10,
    search: null
  });

  return <EmailList emails={allEmails} isLoading={isLoading} />;
};

export default InboxPage;
