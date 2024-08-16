import { ListTitle } from "../_components/list-title";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const students = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    enrollmentDate: "2023-04-01",
    courseProgress: 75,
    course: "Web Development",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    enrollmentDate: "2023-05-15",
    courseProgress: 50,
    course: "Data Science",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    enrollmentDate: "2023-02-20",
    courseProgress: 90,
    course: "Web Development",
  },
  {
    id: 4,
    name: "Sarah Lee",
    email: "sarah@example.com",
    enrollmentDate: "2023-08-01",
    courseProgress: 30,
    course: "Data Science",
  },
  {
    id: 5,
    name: "Tom Wilson",
    email: "tom@example.com",
    enrollmentDate: "2023-03-10",
    courseProgress: 80,
    course: "Mobile Development",
  },
  {
    id: 6,
    name: "Emily Davis",
    email: "emily@example.com",
    enrollmentDate: "2023-06-01",
    courseProgress: 60,
    course: "Web Development",
  },
  {
    id: 7,
    name: "Michael Brown",
    email: "michael@example.com",
    enrollmentDate: "2023-07-15",
    courseProgress: 40,
    course: "Data Science",
  },
  {
    id: 8,
    name: "Jessica Taylor",
    email: "jessica@example.com",
    enrollmentDate: "2023-01-01",
    courseProgress: 85,
    course: "Mobile Development",
  },
  {
    id: 9,
    name: "David Anderson",
    email: "david@example.com",
    enrollmentDate: "2023-04-20",
    courseProgress: 70,
    course: "Web Development",
  },
  {
    id: 10,
    name: "Olivia Thompson",
    email: "olivia@example.com",
    enrollmentDate: "2023-05-01",
    courseProgress: 55,
    course: "Data Science",
  },
  {
    id: 11,
    name: "William Garcia",
    email: "william@example.com",
    enrollmentDate: "2023-06-10",
    courseProgress: 80,
    course: "Mobile Development",
  },
  {
    id: 12,
    name: "Sophia Hernandez",
    email: "sophia@example.com",
    enrollmentDate: "2023-07-01",
    courseProgress: 45,
    course: "Web Development",
  },
];

export default function Page() {
  return (
    <>
      <ListTitle title="Students" />
      <div className="border rounded-lg overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Enrollment Date</TableHead>
              <TableHead>Course Progress</TableHead>
              <TableHead>Course</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.enrollmentDate}</TableCell>
                <TableCell>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: `${student.courseProgress}%` }}
                    />
                  </div>
                </TableCell>
                <TableCell>{student.course}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
