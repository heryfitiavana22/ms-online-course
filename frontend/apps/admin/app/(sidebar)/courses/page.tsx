import { Course } from "data-type";
import { CardCourse } from "./_components/card-course";
import { ListTitle } from "@/components/list/list-title";
import { CoursesRepository } from "repository";

export default async function Page() {
  const response = await CoursesRepository.find();

  return (
    <>
      <ListTitle title="Courses" plusLabel="Create Course" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {response.data.map((course) => (
          <CardCourse key={course.id} course={course} />
        ))}
      </div>
    </>
  );
}
