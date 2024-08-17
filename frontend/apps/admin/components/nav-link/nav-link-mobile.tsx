import Link from "next/link";
import { NavLinkProps } from "./nav-link";
import { cn } from "ui";

export function NavLinkMobile({
  Icon,
  name,
  active = false,
  href,
}: NavLinkMobileProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-4 px-2.5 ",
        active
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      <Icon className="h-5 w-5" />
      {name}
    </Link>
  );
}

type NavLinkMobileProps = NavLinkProps;
