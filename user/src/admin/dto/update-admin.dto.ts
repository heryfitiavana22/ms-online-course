import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminDto } from './create-admin.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {
  @IsString()
  @IsNotEmpty()
  id: string;
}
