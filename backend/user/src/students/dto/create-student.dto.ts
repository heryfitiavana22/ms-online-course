import { OmitType } from '@nestjs/mapped-types';
import { Student } from '../entities/student.entity';

export class CreateStudentDto extends OmitType(Student, ['id']) {}
