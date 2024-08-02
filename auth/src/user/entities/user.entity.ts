import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator';

export class User {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
