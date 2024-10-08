import { Container, ContainerTitle } from "@/components/container/container";
import { CardCourse } from "ui";

export default function Page() {
  return (
    <Container>
      <ContainerTitle
        title="Explore Our Top Courses"
        description="Browse our selection of the most popular and in-demand courses,
                covering a wide range of subjects to help you achieve your
                goals."
      />

      <div className="grid items-start gap-6 py-12 lg:grid-cols-3">
        <CardCourse
          course={{
            id: "1",
            title: "Introduction to Web Development",
            description:
              "Learn the fundamentals of HTML, CSS, and JavaScript to build modern websites.",
            user: { name: "John Doe" },
            price: 12,
          }}
        />
        <CardCourse
          course={{
            id: "2",
            title: "Data Science Fundamentals",
            description:
              "Dive into the world of data science and learn how to extract insights from data.",
            user: { name: "Jane Smith" },
            price: 10,
          }}
        />
        <CardCourse
          course={{
            id: "3",
            title: "Entrepreneurship Essentials",
            description:
              "Learn the fundamentals of starting and growing a successful business.",
            user: { name: "Jane Smith" },
            price: 15,
          }}
        />
      </div>
    </Container>
  );
}
