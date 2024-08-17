import { Container, ContainerTitle } from "@/components/container/container";
import Link from "next/link";
import {
  Button,
  CalendarDays,
  Card,
  CardService,
  Currency,
  Info,
  Input,
  Label,
  Textarea,
} from "ui";

export default function Page() {
  return (
    <>
      <Container>
        <ContainerTitle
          title="Become an Instructor"
          description="Join our platform and share your expertise with thousands of students. Earn a flexible income and make a difference."
        >
          <Link href={"#become-instructor"} className="mt-4">
            <Button>Sign Up Now</Button>
          </Link>
        </ContainerTitle>
      </Container>
      <Container>
        <div className="grid items-start gap-6 py-12 lg:grid-cols-3">
          <CardService
            Icon={Currency}
            title="Earn Potential"
            description="Set your own rates and earn a share of course revenue. Instructors can earn thousands of dollars per course."
          />
          <CardService
            Icon={CalendarDays}
            title="Flexible Schedule"
            description="Work on your own time and create courses that fit your schedule. Teach from anywhere with an internet connection."
          />
          <CardService
            Icon={Info}
            title="Share Expertise"
            description="Leverage your skills and knowledge to help others learn and grow. Make a positive impact on students' lives."
          />
        </div>
      </Container>
      <Container id="become-instructor">
        <div className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Become an Instructor
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join Our Instructor Community
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fill out the form below to apply and start sharing your
                  expertise with students around the world.
                </p>
              </div>
              <Card className="p-6 bg-background">
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="subject">Subject Expertise</Label>
                    <Input
                      id="subject"
                      placeholder="Enter your subject expertise"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your teaching experience"
                    />
                  </div>
                  <Button type="submit">Apply to Teach</Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
