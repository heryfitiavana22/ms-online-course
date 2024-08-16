import Link from "next/link";
import { Book } from "@/components/icons/book";
import { CalendarDays } from "@/components/icons/calendar-days";
import { ClapperBoard } from "@/components/icons/clapper-board";
import { Container, ContainerTitle } from "@/components/container/container";
import { CardCourse } from "@/components/card/card-course";
import { Button } from "@/components/ui/button";
import { CardService } from "@/components/card/card-service";

export default function Home() {
  return (
    <>
      <Container className="flex justify-center">
        <div className="grid gap-6 text-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Unlock Your Potential with Our Online Courses ne Courses
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Explore a wide range of expert-led courses, flexible learning
              options, and a supportive community to help you achieve your
              goals.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#" >
                <Button>Enroll Now</Button>
              </Link>
              <Link
                href="#"
                
              >
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <ContainerTitle
          title="Discover the Best Online Courses"
          description="Our platform offers a wide selection of high-quality courses
                taught by expert instructors, flexible learning options, and a
                supportive community to help you succeed."
        />

        <div className="grid items-start gap-6 py-12 lg:grid-cols-3">
          <CardService
            Icon={Book}
            title="Extensive Course Library"
            description="Explore a vast collection of courses across various disciplines, from business and technology to personal development and more."
          />
          <CardService
            Icon={ClapperBoard}
            title="Expert Instructors"
            description="Learn from industry-leading experts who are passionate about sharing their knowledge and helping you succeed."
          />
          <CardService
            Icon={CalendarDays}
            title="Flexible Learning"
            description="Study at your own pace, on your own schedule, and access course materials anytime, anywhere."
          />
        </div>
      </Container>

      <Container>
        <ContainerTitle
          title="Explore Our Top Courses"
          description="  Browse our selection of the most popular and in-demand courses,
                covering a wide range of subjects to help you achieve your
                goals."
        />

        <div className="grid items-start gap-6 py-12 lg:grid-cols-3">
          <CardCourse
            course={{
              title: "Introduction to Web Development",
              description:
                "Learn the fundamentals of HTML, CSS, and JavaScript to build modern websites.",
              user: { name: "John Doe" },
              price: 12,
            }}
          />
          <CardCourse
            course={{
              title: "Data Science Fundamentals",
              description:
                "Dive into the world of data science and learn how to extract insights from data.",
              user: { name: "Jane Smith" },
              price: 10,
            }}
          />
          <CardCourse
            course={{
              title: "Entrepreneurship Essentials",
              description:
                "Learn the fundamentals of starting and growing a successful business.",
              user: { name: "Jane Smith" },
              price: 15,
            }}
          />
        </div>
      </Container>
    </>
  );
}
