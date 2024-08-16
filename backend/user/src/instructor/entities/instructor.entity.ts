import { IsEnum, IsIn } from 'class-validator';
import { ROLE, User } from 'src/users/entity/user';

export enum State {
  PENDING = 'PENDING',
  VALIDATED = 'VALIDATED',
  REJECTED = 'REJECTED',
}

export class Instructor extends User {
  @IsIn([ROLE.INSTRUCTOR])
  role: ROLE.INSTRUCTOR;

  @IsEnum(State)
  state: State;
}
