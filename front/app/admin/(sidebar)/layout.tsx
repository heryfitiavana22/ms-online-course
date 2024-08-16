import { PropsWithChildren } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Book } from "@/components/icons/book";
import { BookOpen } from "@/components/icons/book-open";
import { User } from "@/components/icons/user";
import { Settings } from "@/components/ui/settings";
import { Menu } from "@/components/ui/menu";
import { Search } from "@/components/ui/search";
import Image from "next/image";
import { NavLink, NavLinkProps } from "./_components/nav-link";
import { NavLinkMobile } from "./_components/nav-link-mobile";
import { GraduationCap, UserCheck } from "lucide-react";

const navlinks: NavLinkProps[] = [
  {
    Icon: BookOpen,
    name: "Courses",
    href: "/admin/courses",
  },
  {
    Icon: User,
    name: "Instructors",
    href: "/admin/instructors",
  },
  {
    Icon: GraduationCap,
    name: "Students",
    href: "/admin/students",
  },
  {
    Icon: UserCheck,
    name: "Enrollments",
    href: "/admin/enrollments",
  },
  {
    Icon: Settings,
    name: "Settings",
    href: "#",
  },
];

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Link
              href="/admin"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              <Book className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Courses</span>
            </Link>
            {navlinks.map((link) => (
              <NavLink key={link.name} {...link} />
            ))}
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14  w-full">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Book className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Courses</span>
                </Link>
                {navlinks.map((link) => (
                  <NavLinkMobile key={link.name} {...link} />
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search courses..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Image
                  src="/images/user-unkown.png"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full aspect-[36/36] object-cover"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="p-4 sm:px-6 sm:py-0">{children}</main>
      </div>
    </div>
  );
}

type LayoutProps = PropsWithChildren<{}>;
