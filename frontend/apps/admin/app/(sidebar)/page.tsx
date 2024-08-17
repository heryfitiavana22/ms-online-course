import { CardStat } from "@/components/card/card-stat";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Badge,
  Table,
} from "ui";

export default function Page() {
  return (
    <main className="grid flex-1 items-start gap-4 md:gap-8">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <CardStat
          title="Total Courses"
          desciption="A summary of all the courses available on the platform"
          value={124}
        />
        <CardStat
          title="Active Students"
          desciption="The number of students currently enrolled in courses."
          value={3.456}
        />
        <CardStat
          title="New Enrollments"
          desciption="The number of new students who have enrolled this month."
          value={289}
        />
        <CardStat
          title="Instructor Earnings"
          desciption="The total amount earned by instructors this month."
          value={"$42,789"}
        />
      </div>

      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:grid-cols-1">
        <Card x-chunk="dashboard-07-chunk-7">
          <CardHeader className="pb-3">
            <CardTitle>Recent Course Enrollments</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              A table of the most recent course enrollments.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Enrolled On</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">John Doe</div>
                    <div className="text-sm text-muted-foreground">
                      john@example.com
                    </div>
                  </TableCell>
                  <TableCell>Introduction to Web Development</TableCell>
                  <TableCell>2023-05-12</TableCell>
                  <TableCell className="text-right">
                    <Badge className="text-xs" variant="secondary">
                      Enrolled
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Jane Smith</div>
                    <div className="text-sm text-muted-foreground">
                      jane@example.com
                    </div>
                  </TableCell>
                  <TableCell>Advanced React.js</TableCell>
                  <TableCell>2023-06-01</TableCell>
                  <TableCell className="text-right">
                    <Badge className="text-xs" variant="secondary">
                      Enrolled
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Bob Johnson</div>
                    <div className="text-sm text-muted-foreground">
                      bob@example.com
                    </div>
                  </TableCell>
                  <TableCell>Data Visualization with Python</TableCell>
                  <TableCell>2023-06-15</TableCell>
                  <TableCell className="text-right">
                    <Badge className="text-xs" variant="secondary">
                      Enrolled
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Sarah Lee</div>
                    <div className="text-sm text-muted-foreground">
                      sarah@example.com
                    </div>
                  </TableCell>
                  <TableCell>Introduction to Machine Learning</TableCell>
                  <TableCell>2023-07-01</TableCell>
                  <TableCell className="text-right">
                    <Badge className="text-xs" variant="secondary">
                      Enrolled
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Michael Brown</div>
                    <div className="text-sm text-muted-foreground">
                      michael@example.com
                    </div>
                  </TableCell>
                  <TableCell>Full-Stack Web Development</TableCell>
                  <TableCell>2023-07-15</TableCell>
                  <TableCell className="text-right">
                    <Badge className="text-xs" variant="secondary">
                      Enrolled
                    </Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
