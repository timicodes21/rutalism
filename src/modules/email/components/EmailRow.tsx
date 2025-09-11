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
        "flex items-center justify-between px-4 py-3 border-b",
        selected && "bg-muted", // highlight if selected
        !read && "bg-white", // unread emails → white
        read && "bg-gray-100" // read emails → light gray background
      )}
    >
      <div className="flex items-center gap-3 min-w-0">
        <Checkbox checked={selected} onCheckedChange={onSelect} />
        <button
          onClick={handleToggleStar}
          type="button"
          className="text-muted-foreground hover:text-yellow-500 transition-colors cursor-pointer"
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
        <div className="min-w-0 text-sm">
          <div
            className={cn(
              "truncate",
              !read ? "font-semibold" : "font-medium text-muted-foreground"
            )}
          >
            {sender}
          </div>
          <div
            className={cn(
              "truncate",
              !read ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {subject}
          </div>
        </div>
      </div>
      <div className="text-xs text-muted-foreground shrink-0">{time}</div>
    </div>
  );
};

export default EmailRow;
