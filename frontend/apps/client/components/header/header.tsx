"use client";
import Link from "next/link";
import { Container } from "../container/container";
import { NavLink } from "./nav-link";
import { usePathname } from "next/navigation";
import { Book } from "ui";

export function Header() {
  const path = usePathname();

  return (
    <header className=" fixed top-0 left-0 w-full z-50 bg-background border-b">
      <Container className="py-4 lg:p-4 flex items-center">
        <Link href="/" className="flex items-center justify-center">
          <Book className="h-6 w-6" />
          <span className="sr-only">Acme Online Courses</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <NavLink
            href="/courses"
            name="Courses"
            active={path.includes("/courses")}
          />
          <NavLink
            href="/instructors"
            name="Instructors"
            active={path.includes("/instructors")}
          />
          <NavLink href="#" name="About" />
        </nav>
      </Container>
    </header>
  );
}
