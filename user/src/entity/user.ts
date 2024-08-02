import { IsEmail, IsIn,  IsNotEmpty, IsString, MinLength } from 'class-validator';

export class User {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['student', 'instructor', 'admin'])
  role: 'student' | 'instructor' | 'admin';
}
