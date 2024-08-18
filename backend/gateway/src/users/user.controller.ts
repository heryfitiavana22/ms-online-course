import { Controller, Get } from '@nestjs/common';
import { User } from 'src/helper/user.decorator';

@Controller('users')
export class UserController {
  @Get('/me')
  findOne(@User() user: any) {
    return user;
  }
}
