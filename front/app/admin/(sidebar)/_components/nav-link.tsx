import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SVGProps } from "react";

export function NavLink({ Icon, name, active = false, href }: NavLinkProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
            active ? "text-accent-foreground bg-accent" : "text-muted-foreground"
          )}
          
        >
          <Icon className="h-5 w-5" />
          <span className="sr-only">{name}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{name}</TooltipContent>
    </Tooltip>
  );
}

export type NavLinkProps = {
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  name: string;
  href: string;
  active?: boolean;
};
