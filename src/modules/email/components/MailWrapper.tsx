import React from "react";
import MailLayout from "./MailLayout";
import EmailHeader from "./EmailHeader";
import EmailToolbar from "./EmailToolbar";

interface IProps {
  children: React.ReactNode;
}

const MailWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <MailLayout header={<EmailHeader />}>
      <EmailToolbar />
      {children}
    </MailLayout>
  );
};

export default MailWrapper;
