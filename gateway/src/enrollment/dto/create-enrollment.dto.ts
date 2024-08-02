import { OmitType } from '@nestjs/mapped-types';
import { Enrollment } from '../entities/enrollment.entity';

export class CreateEnrollmentDto extends OmitType(Enrollment, ['id']) {}
