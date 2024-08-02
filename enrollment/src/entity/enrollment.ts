import { IsNotEmpty, IsString } from 'class-validator';

export class Enrollment {
  @IsNotEmpty()
  @IsString()
  id: string;
}
