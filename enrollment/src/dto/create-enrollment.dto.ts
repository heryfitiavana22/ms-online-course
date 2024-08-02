import { OmitType } from '@nestjs/mapped-types';
import { Enrollment } from 'src/entity/enrollment';

export class CreateEnrollmentDto extends OmitType(Enrollment, ['id']) {}
