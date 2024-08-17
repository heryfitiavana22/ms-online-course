import { Course } from "data-type";
import { CardCourse } from "./_components/card-course";
import { ListTitle } from "@/components/list/list-title";


const courses: Course[] = [
  {
    id: "1",
    title: "Introduction to Web Development",
    description:
      "Learn the fundamentals of HTML, CSS, and JavaScript to build responsive websites.",
    user: { name: "John Doe" },
    price: 199,
  },
  {
    id: "2",
    title: "Advanced React Patterns",
    description:
      "Dive deep into complex React patterns and techniques to build scalable applications.",
    user: { name: "Jane Smith" },
    price: 299,
  },
  {
    id: "3",
    title: "Mastering SQL Queries",
    description:
      "Learn how to write efficient and optimized SQL queries to manage your data.",
    user: { name: "Bob Johnson" },
    price: 149,
  },
  {
    id: "4",
    title: "Responsive Web Design",
    description:
      "Learn how to build responsive and mobile-friendly websites using the latest CSS techniques.",
    user: { name: "Sarah Lee" },
    price: 199,
  },
  {
    id: "5",
    title: "Data Visualization with Python",
    description:
      "Learn how to create stunning data visualizations using Python libraries like Matplotlib and Seaborn.",
    user: { name: "Michael Brown" },
    price: 249,
  },
];

export default function Page() {
  return (
    <>
      <ListTitle title="Courses" plusLabel="Create Course" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {courses.map((course) => (
          <CardCourse key={course.id} course={course} />
        ))}
      </div>
    </>
  );
}
