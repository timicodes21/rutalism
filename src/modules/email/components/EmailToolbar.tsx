import { Button } from "@/components/ui/button";
import { Trash2, Archive, MoreHorizontal } from "lucide-react";

const EmailToolbar = () => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 border-b bg-muted">
      <Button variant="ghost" size="sm">
        <Trash2 className="w-4 h-4" />
      </Button>
      <Button variant="ghost" size="sm">
        <Archive className="w-4 h-4" />
      </Button>
      <Button variant="ghost" size="sm">
        <MoreHorizontal className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default EmailToolbar;
