import { OmitType } from '@nestjs/mapped-types';
import { User } from 'src/user/entities/user.entity';

export class LoginAuthDto extends OmitType(User, ['id']) {}
