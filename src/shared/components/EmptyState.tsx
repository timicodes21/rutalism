import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface EmptyStateProps {
  icon?: ReactNode; // optional: pass any icon (lucide, custom, etc.)
  title: string; // main heading
  description?: string; // supporting text
  actionLabel?: string; // text for button
  onAction?: () => void; // callback for button click
}
const EmptyState = ({
  icon,
  title,
  description,
  actionLabel,
  onAction
}: EmptyStateProps) => {
  return (
    <Card className="flex flex-col items-center justify-center p-10 text-center border-dashed shadow-none bg-background">
      <CardContent className="flex flex-col items-center gap-4">
        {icon && (
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            {icon}
          </div>
        )}

        <div>
          <h2 className="text-lg font-semibold text-foreground">{title}</h2>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>

        {actionLabel && onAction && (
          <Button onClick={onAction} className="mt-4">
            {actionLabel}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default EmptyState;
