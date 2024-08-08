import { OmitType } from '@nestjs/mapped-types';
import { Admin } from '../entities/admin.entity';

export class CreateAdminDto extends OmitType(Admin, ['id']) {}
