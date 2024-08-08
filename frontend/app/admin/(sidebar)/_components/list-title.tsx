import { Plus } from "@/components/icons/plus";
import { Button } from "@/components/ui/button";

export function ListTitle({ plusLabel, title }: ListTitleProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h1 className="text-2xl font-semibold">{title}</h1>
      {plusLabel && (
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          {plusLabel}
        </Button>
      )}
    </div>
  );
}

type ListTitleProps = {
  title: string;
  plusLabel?: string;
};
