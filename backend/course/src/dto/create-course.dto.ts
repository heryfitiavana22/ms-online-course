import { OmitType } from '@nestjs/mapped-types';
import { Course } from '../entity/course';

export class CreateCourseDto extends OmitType(Course, ['id']) {}
