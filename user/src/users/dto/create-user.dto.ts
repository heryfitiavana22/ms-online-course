import { OmitType } from '@nestjs/mapped-types';
import { User } from '../entity/user';

export class CreateUserDto extends OmitType(User, ['id']) {}
