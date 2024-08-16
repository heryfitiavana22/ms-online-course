import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { ListTitle } from "../_components/list-title";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash } from "@/components/icons/trash";
import { FilePen } from "@/components/icons/file-pen";

export default function Page() {
  return (
    <>
      <ListTitle title="Instructors" plusLabel="Add Instructor" />
      <div className="bg-background rounded-md shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Courses</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">John Doe</div>
                    <div className="text-muted-foreground text-sm">
                      johndoe@example.com
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>johndoe@example.com</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Web Development</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">React</Badge>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="outline">
                    <FilePen className="w-4 h-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button size="icon" variant="outline">
                    <Trash className="w-4 h-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Jane Doe</div>
                    <div className="text-muted-foreground text-sm">
                      janedoe@example.com
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>janedoe@example.com</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Data Science</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Machine Learning</Badge>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="outline">
                    <FilePen className="w-4 h-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button size="icon" variant="outline">
                    <Trash className="w-4 h-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Bob Smith</div>
                    <div className="text-muted-foreground text-sm">
                      bobsmith@example.com
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>bobsmith@example.com</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Digital Marketing</Badge>
                  <Badge variant="outline">SEO</Badge>
                  <Badge variant="outline">Social Media</Badge>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="outline">
                    <FilePen className="w-4 h-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button size="icon" variant="outline">
                    <Trash className="w-4 h-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
