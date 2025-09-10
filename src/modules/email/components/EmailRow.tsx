import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Star } from "lucide-react";

type EmailRowProps = {
  sender: string;
  subject: string;
  time: string;
  selected?: boolean;
  starred?: boolean;
  onSelect?: () => void;
  onToggleStar?: () => void;
};

const EmailRow = ({
  sender,
  subject,
  time,
  selected,
  starred,
  onSelect,
  onToggleStar
}: EmailRowProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 py-3 border-b",
        selected && "bg-muted"
      )}
    >
      <div className="flex items-center gap-3 min-w-0">
        <Checkbox checked={selected} onCheckedChange={onSelect} />
        <button
          onClick={onToggleStar}
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
          <div className="font-medium truncate">{sender}</div>
          <div className="text-muted-foreground truncate">{subject}</div>
        </div>
      </div>
      <div className="text-xs text-muted-foreground shrink-0">{time}</div>
    </div>
  );
};

export default EmailRow;
