import { IsIn } from 'class-validator';
import { ROLE, User } from 'src/users/entity/user';

export class Student extends User {
  @IsIn([ROLE.STUDENT])
  role: ROLE.STUDENT;
}
