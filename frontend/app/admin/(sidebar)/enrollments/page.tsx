import { Badge } from "@/components/ui/badge";
import { ListTitle } from "../_components/list-title";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function Page() {
  return (
    <>
      <ListTitle title="Enrollements" />
      <div className="border rounded-lg overflow-x-auto">
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
      </div>
    </>
  );
}
