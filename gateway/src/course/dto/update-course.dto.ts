import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';
import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  @IsNotEmpty()
  @IsString()
  id: string;
}
