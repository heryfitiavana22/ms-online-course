import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Eye,
  FilePen,
  Trash,
} from "ui";
import { Course } from "data-type";

export function CardCourse({ course }: CardCourseProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-3 items-center justify-between">
          <span>{course.title}</span>
          <span className="text-muted-foreground text-sm">${course.price}</span>
        </CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Enrolled: 1,250 students
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <FilePen className="h-4 w-4" />
              Edit
            </Button>
            <Button variant="outline" size="sm" color="destructive">
              <Trash className="h-4 w-4" />
              Delete
            </Button>
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4" />
              View
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

type CardCourseProps = {
  course: Course;
};
