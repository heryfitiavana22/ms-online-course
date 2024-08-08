import { IsIn } from 'class-validator';
import { ROLE, User } from 'src/users/entity/user';

export class Admin extends User {
  @IsIn([ROLE.ADMIN])
  role: ROLE.ADMIN;
}
