import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  @IsString()
  @IsNotEmpty()
  id: string;
}
