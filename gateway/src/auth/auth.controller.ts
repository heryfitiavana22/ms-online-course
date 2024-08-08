import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { SERVICE_NAME } from 'src/config/service.name';
import { ClientProxy } from '@nestjs/microservices';
import { Public } from './public.decorator';
import { LoginAuthDto } from './dto/login-auth.dto';
import { seh } from 'src/helper/service-error-handler';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(SERVICE_NAME.AUTH)
    private readonly authServiceClient: ClientProxy,
  ) {}

  @Public()
  @Post('login')
  async login(@Body() user: any) {
    return seh(
      this.authServiceClient.send('loginAuth', { loginAuthDto: user }),
    );
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Public()
  @Get('publ')
  pub(@Request() req) {
    return req.user;
  }
}
