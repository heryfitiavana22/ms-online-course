import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ClapperBoard } from "@/components/icons/clapper-board";
import Link from "next/link";
import { Course } from "@/types/data-type";
import Money from "../icons/money";

export function CardCourse({ course }: CardCourseProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ClapperBoard className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {course.user.name}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Money className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {course.price} Ar
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href="#"
          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          prefetch={false}
        >
          Enroll Now
        </Link>
      </CardFooter>
    </Card>
  );
}

type CardCourseProps = {
  course: Course;
};
