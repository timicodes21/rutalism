"use client";

import EmailPage from "@/modules/email/pages/EmailPage";
import { EmailView } from "@/services/emailService";
import { useParams } from "next/navigation";
import React from "react";

const Starred = () => {
  const params = useParams();
  const view = params?.view;

  return <EmailPage view={view as EmailView} />;
};

export default Starred;
