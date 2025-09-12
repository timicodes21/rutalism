import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Star } from "lucide-react";
import { useToggleStar } from "../hooks/email.hook";

type EmailRowProps = {
  id: string;
  sender: string;
  subject: string;
  time: string;
  selected?: boolean;
  starred?: boolean;
  read?: boolean;
  onSelect?: () => void;
};

const EmailRow = ({
  sender,
  subject,
  time,
  selected,
  starred,
  read = false,
  onSelect,
  id
}: EmailRowProps) => {
  const { mutate } = useToggleStar();

  const handleToggleStar = () => {
    mutate({ id });
  };

  return (
    <div
      className={cn(
        // Mobile → column, Tablet+ → row
        "flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 py-3 border-b gap-2",
        selected && "bg-muted",
        !read && "bg-white",
        read && "bg-gray-100"
      )}
    >
      {/* Left section */}
      <div className="flex items-start lg:items-center gap-2 min-w-0 flex-1">
        {/* Checkbox */}
        <Checkbox checked={selected} onCheckedChange={onSelect} />

        {/* Star */}
        <button
          onClick={handleToggleStar}
          type="button"
          className="mt-1 lg:mt-0 text-muted-foreground hover:text-yellow-500 transition-colors cursor-pointer"
          aria-label={starred ? "Un star email" : "Star email"}
        >
          {!starred ? (
            <Star className="w-4 h-4 text-muted-foreground" />
          ) : (
            <Star
              className="w-4 h-4 fill-yellow-500 text-yellow-500"
              fill="currentColor"
              stroke="none"
            />
          )}
        </button>

        {/* Sender + Subject */}
        <div className="flex-1 min-w-0">
          {/* Sender */}
          <div
            className={cn(
              "text-sm",
              !read ? "font-semibold" : "font-medium text-muted-foreground"
            )}
          >
            {sender}
          </div>

          {/* Subject */}
          <div
            className={cn(
              "text-sm break-words lg:truncate", // wraps on mobile, truncates on bigger screens
              !read ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {subject}
          </div>

          {/* Time on mobile */}
          <div className="text-xs text-muted-foreground lg:hidden">{time}</div>
        </div>
      </div>

      {/* Time on desktop/tablet */}
      <div className="hidden lg:block text-xs text-muted-foreground shrink-0 ml-2">
        {time}
      </div>
    </div>
  );
};

export default EmailRow;
