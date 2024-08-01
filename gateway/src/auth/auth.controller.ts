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
import { AuthenticatedGuard } from './guard/authenticated.guard';
import { Public } from './public.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(SERVICE_NAME.AUTH)
    private readonly authServiceClient: ClientProxy,
  ) {}

  @Public()
  @Post('login')
  async login(@Body() user) {
    return this.authServiceClient.send('loginAuth', user);
  }

  @UseGuards(AuthenticatedGuard)
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
