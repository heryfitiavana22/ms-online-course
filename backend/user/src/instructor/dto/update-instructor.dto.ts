import { PartialType } from '@nestjs/mapped-types';
import { CreateInstructorDto } from './create-instructor.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateInstructorDto extends PartialType(CreateInstructorDto) {
  @IsString()
  @IsNotEmpty()
  id: string;
}
