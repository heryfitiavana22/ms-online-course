import { IsNotEmpty, IsString } from 'class-validator';

export class Enrollment {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  courseId: string;
}
