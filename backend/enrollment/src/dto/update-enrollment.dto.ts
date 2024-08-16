import { PartialType } from '@nestjs/mapped-types';
import { CreateEnrollmentDto } from './create-enrollment.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateEnrollmentDto extends PartialType(CreateEnrollmentDto) {
  @IsNotEmpty()
  @IsString()
  id: string;
}
