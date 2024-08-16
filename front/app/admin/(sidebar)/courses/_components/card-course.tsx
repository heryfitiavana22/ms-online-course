import { Eye } from "@/components/icons/eye";
import { FilePen } from "@/components/icons/file-pen";
import { Trash } from "@/components/icons/trash";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Course } from "@/types/data-type";

export function CardCourse({ course }: CardCourseProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
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
