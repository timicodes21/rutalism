"use client";

import EmailLabelPage from "@/modules/email/pages/EmailLabelPage";
import { useParams } from "next/navigation";
import React from "react";

const Starred = () => {
  const params = useParams();
  const label = params?.label as string;

  return <EmailLabelPage labels={label} />;
};

export default Starred;
