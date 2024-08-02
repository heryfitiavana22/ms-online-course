import { OmitType } from '@nestjs/mapped-types';
import { Course } from '../entities/course.entity';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCourseDto extends OmitType(Course, ['id']) {
  @IsNotEmpty()
  @IsString()
  id: string;
}
