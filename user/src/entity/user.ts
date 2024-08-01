import { IsIn, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class User {
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  @IsIn(['student', 'instructor', 'admin'])
  role: 'student' | 'instructor' | 'admin';
}
