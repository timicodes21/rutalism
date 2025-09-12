import { IEmail } from "@/services/emailService";
import { formatDate } from "@/shared/utils/formatter.util";
import EmptyState from "@/shared/components/EmptyState";
import Spinner from "@/shared/components/Spinner";
import { InboxIcon } from "lucide-react";
import React from "react";
import EmailRow from "./EmailRow";

interface IProps {
  emails: IEmail[];
  isLoading?: boolean;
}

const EmailList: React.FC<IProps> = ({ emails, isLoading }) => {
  return (
    <div className="overflow-y-auto max-h-[calc(100vh-160px)]">
      {isLoading && (
        <div className=" flex justify-center py-5">
          <Spinner className="border-primary animate-spin rounded-full border-2 border-t-transparent" />
        </div>
      )}

      {emails.length === 0 && !isLoading && (
        <EmptyState
          icon={<InboxIcon className="h-8 w-8 text-muted-foreground" />}
          title="No Emails Yet"
          description="Your inbox is empty. Once new emails arrive, they’ll show here."
          actionLabel="Compose"
          onAction={() => {}}
        />
      )}

      {emails.map(email => (
        <EmailRow
          id={email?.id}
          sender={email?.from}
          subject={email?.subject}
          time={formatDate(email?.timestamp)}
          read={email?.isRead}
          starred={email?.isStarred}
        />
      ))}
    </div>
  );
};

export default EmailList;
