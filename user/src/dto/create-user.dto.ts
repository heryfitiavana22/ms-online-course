import { OmitType } from '@nestjs/mapped-types';
import { User } from 'src/entity/user';

export class CreateUserDto extends OmitType(User, ['id']) {}
