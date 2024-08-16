import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export enum ROLE {
  STUDENT = 'STUDENT',
  ADMIN = 'ADMIN',
  INSTRUCTOR = 'INSTRUCTOR',
}

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

  @IsEnum(ROLE)
  role: ROLE;
}
