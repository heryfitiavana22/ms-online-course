import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavLink({ href, name, active = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm text-muted-foreground font-medium hover:underline underline-offset-4",
        { "text-primary": active }
      )}
    >
      {name}
    </Link>
  );
}

type NavLinkProps = { name: string; href: string; active?: boolean };
