import Link from "next/link";
import { Book } from "../icons/book";
import { Container } from "../container/container";

export function Header() {
  return (
    <header className=" fixed top-0 left-0 w-full z-50 bg-background border-b">
      <Container className="py-4 lg:p-4 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <Book className="h-6 w-6" />
          <span className="sr-only">Acme Online Courses</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Courses
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Instructors
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </Container>
    </header>
  );
}
